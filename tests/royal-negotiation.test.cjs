const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const source = fs.readFileSync(require('node:path').join(__dirname, '../src/game.js'), 'utf8');
const names = ['queenEntry', 'royalNegotiationAvailable', 'royalStrength', 'royalTerms',
  'openRoyalNegotiation', 'resolveRoyalTerms', 'prepareRoyalEvent', 'resolveRoyalProtection', 'advanceRoyalInterest', 'humanSurrenderTo'];
const functions = names.map(name => {
  const start = source.indexOf(`    function ${name}(`);
  assert.ok(start >= 0, `Missing ${name}`);
  const end = source.indexOf('\n    function ', start + 1);
  return source.slice(start, end < 0 ? undefined : end);
}).join('\n');

function campaign() {
  const c = {
    console, gameOver: false, gameMode: 'conquest', round: 6, diplomacyTurnNumber: 2,
    queenState: {}, capturedQueens: [], overlordQueenId: null, treasury: 20,
    leaderState: { 0: { active: true }, 1: { active: true }, 2: { active: true } },
    tiles: [ { owner: 0, terrain: 'land', troops: 10, capital: true },
      { owner: 1, terrain: 'land', troops: 40, capital: true } ],
    eventQueue: [], logs: [], queenPortraits: {}, QUEEN_PORTRAITS: {},
    FACTIONS: [{ id: 0 }, { id: 1 }, { id: 2 }], currentFactionIndex: 0,
    dynastyState: { severantProgress: 30 }, resistanceState: { exposure: 20 },
    highSeverantState: { interest: 10, obsession: 4 }, highSeverantProfile: {}, campaignRouteState: {},
    clamp: (v, lo, hi) => Math.max(lo, Math.min(hi, v)),
    factionById: id => ({ id, name: `Realm ${id}`, leader: `Queen ${id}`, personality: id === 1 ? 'Aggressive' : 'Diplomat' }),
    fallbackPersonality: () => 'Defensive', isSeverantHiddenCourtFaction: () => false,
    severantElaraNoReturnFaction: () => false, ensureHighSeverantState() {}, ensureHighSeverantProfile() {},
    render() {}, startTurn(id) { this.startedTurn = id; },
  };
  c.ownedTiles = id => c.tiles.filter(t => t.owner === id);
  c.diplomacyTargetQueens = () => [1, 2].filter(id => c.leaderState[id].active && !c.leaderState[id].defeated)
    .map(c.factionById);
  c.queueEventModal = event => c.eventQueue.push(event);
  c.currentEventModal = () => c.eventQueue[0];
  c.dismissEventModal = () => c.eventQueue.shift();
  c.addLog = log => c.logs.push(log);
  c.submitQueenToPlayer = id => { c.capturedQueens.push(id); c.leaderState[id].active = false; };
  vm.createContext(c);
  vm.runInContext(functions, c);
  return c;
}

test('old saves receive finite negotiation defaults without losing relationships', () => {
  const c = campaign();
  c.queenState[1] = { trust: 17, attraction: 22 };
  const st = c.queenEntry(1);
  assert.equal(st.trust, 17);
  assert.equal(st.lastRoyalOfferRound, -10);
  assert.equal(st.lastNegotiationTurn, -1);
  assert.equal(st.protectionUntilRound, -1);
});

test('strong possessive queen offers live capture; surrender is an explicit choice', () => {
  const c = campaign();
  c.openRoyalNegotiation(1);
  assert.match(c.eventQueue[0].body, /personal captive/);
  assert.equal(c.gameMode, 'conquest');
  c.prepareRoyalEvent(c.eventQueue[0]);
  c.eventQueue[0].actions[0].onClick();
  assert.equal(c.gameMode, 'servitude');
  assert.equal(c.overlordQueenId, 1);
  assert.equal(c.queenState[1].protectionUntilRound, 10);
  assert.equal(c.tiles[0].owner, 1);
  assert.equal(c.tiles[0].capital, false);
  assert.equal(c.leaderState[0].active, false);
  assert.equal(c.currentFactionIndex, 1);
  assert.match(c.eventQueue[0].body, /conceal you from the High Severant/);
});

test('tribute pays exactly once and gives peace; repeat negotiation is blocked this turn', () => {
  const c = campaign();
  c.openRoyalNegotiation(1);
  const event = c.eventQueue[0];
  c.resolveRoyalTerms(event, 'tribute');
  c.resolveRoyalTerms(event, 'tribute');
  assert.equal(c.treasury, 10);
  assert.equal(c.queenState[1].treaty, 'truce');
  assert.equal(c.openRoyalNegotiation(1), false);
});

test('unaffordable tribute cannot be selected or charged', () => {
  const c = campaign(); c.treasury = 9;
  c.openRoyalNegotiation(1);
  const event = c.eventQueue[0]; c.prepareRoyalEvent(event);
  assert.equal(event.actions[3].disabled, true);
  c.resolveRoyalTerms(event, 'tribute');
  assert.equal(c.treasury, 9);
  assert.equal(c.eventQueue.length, 1);
});

test('reciprocal surrender needs military leverage and is rechecked on acceptance', () => {
  const c = campaign();
  c.tiles[0].troops = 140;
  c.openRoyalNegotiation(1);
  assert.match(c.eventQueue[0].body, /surrender my realm/);
  c.tiles[0].troops = 1;
  c.resolveRoyalTerms(c.eventQueue[0], 'yield');
  assert.equal(c.capturedQueens.length, 0);
  c.diplomacyTurnNumber++;
  c.tiles[0].troops = 140;
  c.openRoyalNegotiation(1);
  c.resolveRoyalTerms(c.eventQueue[0], 'yield');
  assert.deepEqual(c.capturedQueens, [1]);
});

test('peace counteroffer can be refused and refusal preserves independence', () => {
  const c = campaign();
  c.openRoyalNegotiation(1);
  c.resolveRoyalTerms(c.eventQueue[0], 'truce');
  assert.equal(c.queenState[1].treaty, 'none');
  assert.match(c.logs[0], /refuses/);
  assert.equal(c.gameMode, 'conquest');
});

test('JSON round trip restores actionable terms and protection choices', () => {
  const c = campaign();
  c.openRoyalNegotiation(1);
  c.prepareRoyalEvent(c.eventQueue[0]);
  c.eventQueue = JSON.parse(JSON.stringify(c.eventQueue));
  c.prepareRoyalEvent(c.eventQueue[0]);
  c.eventQueue[0].actions[4].onClick();
  assert.equal(c.eventQueue.length, 0);
  c.gameMode = 'servitude'; c.overlordQueenId = 1;
  c.eventQueue = JSON.parse(JSON.stringify([{ kind: 'royal_protection', queenFaction: 1 }]));
  c.prepareRoyalEvent(c.eventQueue[0]);
  c.eventQueue[0].actions[0].onClick();
  assert.equal(c.dynastyState.severantProgress, 22);
  assert.equal(c.resistanceState.exposure, 14);
});

test('defeated, forbidden, and hidden court queens cannot negotiate', () => {
  const c = campaign();
  c.leaderState[1].defeated = true;
  assert.equal(c.openRoyalNegotiation(1), false);
  c.leaderState[1].defeated = false;
  c.severantElaraNoReturnFaction = () => true;
  assert.equal(c.openRoyalNegotiation(1), false);
  c.severantElaraNoReturnFaction = () => false;
  c.isSeverantHiddenCourtFaction = () => true;
  assert.equal(c.openRoyalNegotiation(1), false);
});

test('world interest grows slowly despite queued events without raising trust or romance', () => {
  const c = campaign(); c.round = 8;
  c.eventQueue.push({ title: 'Existing event' });
  c.advanceRoyalInterest();
  assert.equal(c.queenEntry(1).attraction, 2);
  assert.equal(c.queenEntry(1).trust, 0);
  assert.equal(c.queenEntry(1).romance, 0);
  assert.equal(c.eventQueue.length, 1);
  c.round = 9; c.advanceRoyalInterest();
  assert.equal(c.highSeverantState.interest, 12);
});

test('captor protects against a free Severant with a five round offer cooldown', () => {
  const c = campaign(); c.gameMode = 'servitude'; c.overlordQueenId = 1;
  c.queenEntry(1).protectionUntilRound = 12;
  c.advanceRoyalInterest();
  assert.equal(c.eventQueue[0].kind, 'royal_protection');
  c.resolveRoyalProtection(c.eventQueue[0], true);
  c.advanceRoyalInterest();
  assert.equal(c.eventQueue.length, 0);
  c.round += 5; c.queenEntry(1).trust = 30;
  c.highSeverantProfile.captive = true;
  c.advanceRoyalInterest();
  assert.equal(c.eventQueue.length, 0);
});

test('changed captivity invalidates protection and game endings stop new offers', () => {
  const c = campaign();
  c.gameMode = 'servitude'; c.overlordQueenId = 2;
  const event = { kind: 'royal_protection', queenFaction: 1 };
  c.eventQueue.push(event); c.resolveRoyalProtection(event, true);
  assert.equal(c.dynastyState.severantProgress, 30);
  c.gameOver = true; c.advanceRoyalInterest();
  assert.equal(c.eventQueue.length, 0);
});
