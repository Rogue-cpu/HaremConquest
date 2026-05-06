(function () {
  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const MATRON_ARCHETYPES = {
    hearth_matron: {
      label: "Hearth Matron",
      specialties: ["stability", "emotional", "recovery", "younger_followers"],
      base: { loyalty: 70, insight: 62, discretion: 68, authority: 52, protectiveness: 82, politicalSkill: 48, streetSense: 38, discipline: 58, nurturing: 84, jealousy: 22, influence: 52, corruption: 10, riskTolerance: 42 },
      summary: "Warm stabilizer who reduces internal chaos and helps vulnerable followers recover.",
    },
    wolf_matron: {
      label: "Wolf Matron",
      specialties: ["predators", "violent_traps", "capture_risk", "escort"],
      base: { loyalty: 74, insight: 70, discretion: 60, authority: 68, protectiveness: 90, politicalSkill: 36, streetSense: 62, discipline: 76, nurturing: 42, jealousy: 34, influence: 58, corruption: 12, riskTolerance: 68 },
      summary: "Territorial guardian best at detecting predators, rough captures, and coercive setups.",
    },
    velvet_matron: {
      label: "Velvet Matron",
      specialties: ["seduction_traps", "hidden_motives", "noblewomen", "court_intrigue"],
      base: { loyalty: 62, insight: 82, discretion: 74, authority: 54, protectiveness: 60, politicalSkill: 86, streetSense: 50, discipline: 56, nurturing: 40, jealousy: 28, influence: 78, corruption: 18, riskTolerance: 58 },
      summary: "Seductive social operator who reads motives, bait, and courtly traps quickly.",
    },
    iron_matron: {
      label: "Iron Matron",
      specialties: ["security_protocol", "reckless_choices", "gatekeeping", "discipline"],
      base: { loyalty: 78, insight: 66, discretion: 72, authority: 84, protectiveness: 74, politicalSkill: 58, streetSense: 46, discipline: 90, nurturing: 28, jealousy: 26, influence: 66, corruption: 8, riskTolerance: 34 },
      summary: "Rules-first matron who controls access, enforces discipline, and blocks foolish risks.",
    },
    street_matron: {
      label: "Street Matron",
      specialties: ["underworld", "smugglers", "dirty_politics", "ambush"],
      base: { loyalty: 66, insight: 76, discretion: 70, authority: 58, protectiveness: 80, politicalSkill: 46, streetSense: 90, discipline: 64, nurturing: 36, jealousy: 20, influence: 68, corruption: 20, riskTolerance: 74 },
      summary: "Underworld-savvy watcher who spots dirty deals, alley traps, and false safehouses.",
    },
    healing_matron: {
      label: "Healing Matron",
      specialties: ["self_destructive_followers", "trauma", "recovery", "care"],
      base: { loyalty: 72, insight: 72, discretion: 76, authority: 50, protectiveness: 78, politicalSkill: 42, streetSense: 34, discipline: 60, nurturing: 90, jealousy: 18, influence: 48, corruption: 6, riskTolerance: 30 },
      summary: "Caretaker matron who stabilizes wounded or unstable adults before they spiral.",
    },
    court_matron: {
      label: "Court Matron",
      specialties: ["alliances", "forged_loyalty", "faction_games", "court_intrigue"],
      base: { loyalty: 68, insight: 78, discretion: 82, authority: 62, protectiveness: 64, politicalSkill: 88, streetSense: 40, discipline: 68, nurturing: 44, jealousy: 24, influence: 84, corruption: 14, riskTolerance: 46 },
      summary: "Court veteran who reads political women, false oaths, and suspicious alliances.",
    },
    war_matron: {
      label: "War Matron",
      specialties: ["assassination", "ambush", "escort", "violent_traps"],
      base: { loyalty: 76, insight: 74, discretion: 58, authority: 72, protectiveness: 86, politicalSkill: 40, streetSense: 64, discipline: 82, nurturing: 34, jealousy: 22, influence: 56, corruption: 10, riskTolerance: 70 },
      summary: "Veteran protector who notices ambush patterns, bad ground, and kill-box meetings.",
    },
  };

  const MATRON_PORTRAITS = {
    hearth_matron: "Matrons/fruits_ripe_for_harvest_by_maddersky87_din18ib-pre.jpg",
    wolf_matron: "Matrons/2025-03-11_Kurenai.png",
    velvet_matron: "Matrons/adoptable__2341___open_by_shiroai0_djrwkbl-pre.png",
    iron_matron: "Matrons/drasna_ai_by_nerdlord1_dl3qm60-pre.jpg",
    street_matron: "Matrons/haibara_tatsumi_ai_by_nerdlord1_dlgxsug-414w-2x.jpg",
    healing_matron: "Matrons/dexter_s_mom_ai_by_nerdlord1_djc0256-pre.jpg",
    court_matron: "Matrons/adoptable__1337___closed_by_shiroai0_dhqvkdt-375w-2x.jpg",
    war_matron: "Matrons/06_02_25_1_by_kototu_dj4hlnf-414w-2x.jpg",
  };

  const SAMPLE_MATRONS = [
    { id: "matron_yselde_hearth", name: "Yseldra Vale", title: "Hearth Matron of the Inner House", archetype: "hearth_matron", notes: "Keeps the emotional weather of the household from turning into panic or obsession." },
    { id: "matron_brynn_wolf", name: "Brynn Harrow", title: "Wolf Matron of the Night Door", archetype: "wolf_matron", notes: "Smells predation faster than most guards smell steel." },
    { id: "matron_sera_velvet", name: "Sera Lethain", title: "Velvet Matron of the Mirror Hall", archetype: "velvet_matron", notes: "Reads invitation, posture, and perfume like other women read letters." },
    { id: "matron_maud_iron", name: "Maud Vey", title: "Iron Matron of the First Gate", archetype: "iron_matron", notes: "Believes access is a weapon and should be managed like one." },
    { id: "matron_mara_street", name: "Mara Velthorn", title: "Street Matron of the Mercy Ward", archetype: "street_matron", notes: "Knows when a sweet offer smells like a locked room." },
    { id: "matron_elowen_healing", name: "Elowen Sable", title: "Healing Matron of the Quiet Chamber", archetype: "healing_matron", notes: "Specializes in unstable loyalties, shame spirals, and women who are close to breaking." },
    { id: "matron_celestine_court", name: "Celestine Var", title: "Court Matron of the Third Audience", archetype: "court_matron", notes: "Tallies every smile, every pause, and every alliance offered too quickly." },
    { id: "matron_tavia_war", name: "Tavia Rook", title: "War Matron of the Red Stair", archetype: "war_matron", notes: "Treats private meetings like terrain and always asks who benefits from the doorway." },
  ];

  const SCREENING_RESULTS = [
    "Genuine",
    "Desperate",
    "Obsessed",
    "Predatory",
    "Politically Useful",
    "Lying",
    "Traumatized",
    "Dangerous",
    "Secretly Loyal to Another Faction",
    "Unknown / Inconclusive",
  ];

  function pickTraits(archetype) {
    const pools = {
      hearth_matron: ["Warm", "Steady", "Nurturing"],
      wolf_matron: ["Protective", "Territorial", "Dangerous"],
      velvet_matron: ["Elegant", "Sharp", "Seductive"],
      iron_matron: ["Strict", "Blunt", "Disciplined"],
      street_matron: ["Practical", "Blunt", "Underworld-Savvy"],
      healing_matron: ["Patient", "Trauma-Aware", "Gentle"],
      court_matron: ["Poised", "Watchful", "Political"],
      war_matron: ["Veteran", "Alert", "Hard-Eyed"],
    };
    return pools[archetype] || ["Experienced", "Protective", "Measured"];
  }

  function createMatron(opts = {}) {
    const archetypeData = MATRON_ARCHETYPES[opts.archetype] || MATRON_ARCHETYPES.hearth_matron;
    const base = archetypeData.base;
    return normalizeMatron({
      id: opts.id || `matron_${opts.archetype || "hearth"}_${Date.now()}`,
      name: opts.name || "Unnamed Matron",
      title: opts.title || archetypeData.label,
      archetype: opts.archetype || "hearth_matron",
      loyalty: opts.loyalty ?? base.loyalty + randomBetween(-10, 10),
      insight: opts.insight ?? base.insight + randomBetween(-10, 10),
      discretion: opts.discretion ?? base.discretion + randomBetween(-10, 10),
      authority: opts.authority ?? base.authority + randomBetween(-10, 10),
      protectiveness: opts.protectiveness ?? base.protectiveness + randomBetween(-10, 10),
      politicalSkill: opts.politicalSkill ?? base.politicalSkill + randomBetween(-10, 10),
      streetSense: opts.streetSense ?? base.streetSense + randomBetween(-10, 10),
      discipline: opts.discipline ?? base.discipline + randomBetween(-10, 10),
      nurturing: opts.nurturing ?? base.nurturing + randomBetween(-10, 10),
      jealousy: opts.jealousy ?? base.jealousy + randomBetween(-8, 8),
      influence: opts.influence ?? base.influence + randomBetween(-10, 10),
      corruption: opts.corruption ?? base.corruption + randomBetween(-8, 8),
      riskTolerance: opts.riskTolerance ?? base.riskTolerance + randomBetween(-10, 10),
      status: opts.status || "active",
      traits: Array.isArray(opts.traits) && opts.traits.length ? opts.traits.slice(0, 3) : pickTraits(opts.archetype || "hearth_matron"),
      notes: opts.notes || archetypeData.summary,
      portrait: opts.portrait || MATRON_PORTRAITS[opts.archetype || "hearth_matron"] || null,
      trust: clamp(opts.trust ?? 58 + randomBetween(-8, 14), 0, 100),
      romance: clamp(opts.romance ?? 30 + randomBetween(-8, 12), 0, 100),
      attraction: clamp(opts.attraction ?? 28 + randomBetween(-8, 12), 0, 100),
      accessAuthority: clamp(opts.accessAuthority ?? 1, 0, 5),
      assignedProtection: Boolean(opts.assignedProtection),
      pregnant: Boolean(opts.pregnant),
      pregnancyStartRound: Number.isFinite(opts.pregnancyStartRound) ? opts.pregnancyStartRound : -1,
      pregnancyDueRound: Number.isFinite(opts.pregnancyDueRound) ? opts.pregnancyDueRound : -1,
      pregnancyOrigin: opts.pregnancyOrigin || null,
      children: Math.max(0, Math.floor(opts.children || 0)),
      converseUsedThisTurn: Boolean(opts.converseUsedThisTurn),
      flirtUsedThisTurn: Boolean(opts.flirtUsedThisTurn),
      confideUsedThisTurn: Boolean(opts.confideUsedThisTurn),
      spoilUsedThisTurn: Boolean(opts.spoilUsedThisTurn),
      intimacyUsedThisTurn: Boolean(opts.intimacyUsedThisTurn),
      lastCounselRound: Number.isFinite(opts.lastCounselRound) ? opts.lastCounselRound : -1,
      lastScreenRound: Number.isFinite(opts.lastScreenRound) ? opts.lastScreenRound : -1,
      lastInterventionRound: Number.isFinite(opts.lastInterventionRound) ? opts.lastInterventionRound : -1,
      resentful: Boolean(opts.resentful),
    });
  }

  function normalizeMatron(matron) {
    const clone = { ...matron };
    for (const key of ["loyalty", "insight", "discretion", "authority", "protectiveness", "politicalSkill", "streetSense", "discipline", "nurturing", "jealousy", "influence", "corruption", "riskTolerance", "trust", "romance", "attraction"]) {
      clone[key] = clamp(Number.isFinite(clone[key]) ? clone[key] : 50, 0, 100);
    }
    clone.id = clone.id || `matron_unknown_${Date.now()}`;
    clone.name = clone.name || "Unnamed Matron";
    clone.title = clone.title || "Matron";
    clone.archetype = clone.archetype || "hearth_matron";
    clone.status = clone.status || "active";
    clone.traits = Array.isArray(clone.traits) ? clone.traits.slice(0, 4) : pickTraits(clone.archetype);
    clone.notes = clone.notes || MATRON_ARCHETYPES[clone.archetype]?.summary || "Protects the Hylsar from dangerous intimacy and court traps.";
    clone.portrait = clone.portrait || MATRON_PORTRAITS[clone.archetype] || null;
    clone.accessAuthority = clamp(Number.isFinite(clone.accessAuthority) ? clone.accessAuthority : 1, 0, 5);
    clone.assignedProtection = Boolean(clone.assignedProtection);
    clone.pregnant = Boolean(clone.pregnant);
    clone.pregnancyStartRound = Number.isFinite(clone.pregnancyStartRound) ? clone.pregnancyStartRound : -1;
    clone.pregnancyDueRound = Number.isFinite(clone.pregnancyDueRound) ? clone.pregnancyDueRound : -1;
    clone.pregnancyOrigin = clone.pregnancyOrigin || null;
    clone.children = Math.max(0, Math.floor(clone.children || 0));
    clone.converseUsedThisTurn = Boolean(clone.converseUsedThisTurn);
    clone.flirtUsedThisTurn = Boolean(clone.flirtUsedThisTurn);
    clone.confideUsedThisTurn = Boolean(clone.confideUsedThisTurn);
    clone.spoilUsedThisTurn = Boolean(clone.spoilUsedThisTurn);
    clone.intimacyUsedThisTurn = Boolean(clone.intimacyUsedThisTurn);
    clone.lastCounselRound = Number.isFinite(clone.lastCounselRound) ? clone.lastCounselRound : -1;
    clone.lastScreenRound = Number.isFinite(clone.lastScreenRound) ? clone.lastScreenRound : -1;
    clone.lastInterventionRound = Number.isFinite(clone.lastInterventionRound) ? clone.lastInterventionRound : -1;
    clone.resentful = Boolean(clone.resentful);
    return clone;
  }

  function createSampleMatrons() {
    return SAMPLE_MATRONS.map((entry) => createMatron(entry));
  }

  function getMatronArchetypeLabel(archetype) {
    return MATRON_ARCHETYPES[archetype]?.label || archetype.replace(/_/g, " ");
  }

  function createDangerEvent(input = {}) {
    return {
      event_id: input.event_id || "danger_event",
      event_type: input.event_type || "danger_social_event",
      danger_level: input.danger_level || "elevated",
      tags: Array.isArray(input.tags) ? input.tags.slice() : [],
      enemy_deception: clamp(Number.isFinite(input.enemy_deception) ? input.enemy_deception : 50, 0, 100),
      allows_matron_warning: input.allows_matron_warning !== false,
      allows_matron_intervention: input.allows_matron_intervention !== false,
      allows_rescue_event: input.allows_rescue_event !== false,
      territory: input.territory || "neutral",
      target_name: input.target_name || "Unknown Woman",
      target_role: input.target_role || "visitor",
      motive_hint: input.motive_hint || "unclear",
      target_deception: clamp(Number.isFinite(input.target_deception) ? input.target_deception : (Number.isFinite(input.enemy_deception) ? input.enemy_deception : 50), 0, 100),
      target_instability: clamp(Number.isFinite(input.target_instability) ? input.target_instability : 40, 0, 100),
      target_obsession: clamp(Number.isFinite(input.target_obsession) ? input.target_obsession : 35, 0, 100),
      faction_loyalty_risk: clamp(Number.isFinite(input.faction_loyalty_risk) ? input.faction_loyalty_risk : 45, 0, 100),
    };
  }

  function relevantArchetypeBonus(matron, dangerEvent) {
    const tags = new Set(dangerEvent.tags || []);
    let bonus = 0;
    if (matron.archetype === "velvet_matron" && (tags.has("seduction_trap") || tags.has("court") || tags.has("private_meeting"))) bonus += 2;
    if (matron.archetype === "street_matron" && (tags.has("underworld") || tags.has("alley") || tags.has("smugglers"))) bonus += 2;
    if (matron.archetype === "wolf_matron" && (tags.has("capture_risk") || tags.has("predatory") || tags.has("assault"))) bonus += 2;
    if (matron.archetype === "war_matron" && (tags.has("assassination") || tags.has("ambush") || tags.has("violent_trap") || tags.has("capture_risk"))) bonus += 2;
    if (matron.archetype === "court_matron" && (tags.has("political") || tags.has("queen") || tags.has("alliance"))) bonus += 2;
    if (matron.archetype === "iron_matron" && (tags.has("security") || tags.has("private_meeting") || tags.has("protocol"))) bonus += 2;
    if (matron.archetype === "hearth_matron" && (tags.has("unstable_follower") || tags.has("obsession") || tags.has("emotional"))) bonus += 2;
    if (matron.archetype === "healing_matron" && (tags.has("trauma") || tags.has("unstable_follower") || tags.has("self_destructive"))) bonus += 2;
    if (tags.has("adult")) bonus += 0.25;
    return bonus;
  }

  function chooseBestMatron(matrons, dangerEvent, opts = {}) {
    const active = (matrons || []).filter((matron) => matron && matron.status === "active");
    if (!active.length) return null;
    let best = null;
    let bestScore = -Infinity;
    for (const matron of active) {
      let score =
        matron.insight * 0.38 +
        matron.loyalty * 0.2 +
        matron.protectiveness * 0.24 +
        matron.discretion * 0.16 +
        matron.trust * 0.22 +
        matron.authority * 0.08 -
        matron.corruption * 0.18 +
        relevantArchetypeBonus(matron, dangerEvent) * 12;
      if (opts.assignedMatronId && opts.assignedMatronId === matron.id) score += 18;
      if (matron.assignedProtection) score += 8;
      if (matron.resentful) score -= 14;
      if (score > bestScore) {
        bestScore = score;
        best = matron;
      }
    }
    return best;
  }

  function buildCounsel(matron, dangerEvent, opts = {}) {
    const severityMap = { mild: "low", elevated: "moderate", high: "high", severe: "severe" };
    const dangerLabel = severityMap[dangerEvent.danger_level] || "moderate";
    const deceptionWeight = Math.round((dangerEvent.enemy_deception * 0.55 + dangerEvent.target_deception * 0.45) / 10);
    const readScore =
      matron.insight * 0.44 +
      matron.discretion * 0.18 +
      matron.protectiveness * 0.16 +
      matron.trust * 0.16 +
      relevantArchetypeBonus(matron, dangerEvent) * 8 -
      dangerEvent.enemy_deception * 0.32;
    let motive = "The motive is muddy, but something about the approach is off.";
    let recommendation = "Go only with escort and treat every soft word as staged until proven otherwise.";
    if (readScore >= 42) {
      if ((dangerEvent.tags || []).includes("seduction_trap")) {
        motive = "She is not reaching for affection first. She is reaching for privacy, leverage, and control.";
      } else if ((dangerEvent.tags || []).includes("underworld")) {
        motive = "This smells less like desire and more like someone trying to move you onto their ground.";
      } else if ((dangerEvent.tags || []).includes("queen")) {
        motive = "A queen who wants secrecy that badly usually wants deniability just as much.";
      } else {
        motive = "The invitation feels engineered, not spontaneous.";
      }
    }
    if (readScore < 20) {
      recommendation = "I would not call it safe. I would call it incomplete.";
    } else if ((dangerEvent.tags || []).includes("capture_risk")) {
      recommendation = "Do not go alone. Bring escort or refuse the meeting outright.";
    } else if ((dangerEvent.tags || []).includes("political")) {
      recommendation = "Send someone first, learn the room, and do not let her choose the only witness.";
    }
    return {
      matronId: matron.id,
      matronName: matron.name,
      dangerLabel,
      betrayalRisk: clamp(Math.round(45 + deceptionWeight + Math.max(0, 48 - readScore)), 0, 100),
      shouldGoAlone: false,
      motive,
      recommendation,
      quote: `“${motive.replace(/\.$/, "")}. ${recommendation}”`,
    };
  }

  function screenTarget(matron, target, dangerEvent, opts = {}) {
    const deception = clamp(Number.isFinite(target?.deception) ? target.deception : dangerEvent.target_deception, 0, 100);
    const instability = clamp(Number.isFinite(target?.instability) ? target.instability : dangerEvent.target_instability, 0, 100);
    const obsession = clamp(Number.isFinite(target?.obsession) ? target.obsession : dangerEvent.target_obsession, 0, 100);
    const factionRisk = clamp(Number.isFinite(target?.factionRisk) ? target.factionRisk : dangerEvent.faction_loyalty_risk, 0, 100);
    const read =
      matron.insight * 0.4 +
      matron.discretion * 0.18 +
      matron.trust * 0.14 +
      matron.politicalSkill * 0.08 +
      matron.streetSense * 0.08 +
      relevantArchetypeBonus(matron, dangerEvent) * 10 -
      deception * 0.28;
    let category = "Unknown / Inconclusive";
    if (deception >= 72 && factionRisk >= 60) category = "Secretly Loyal to Another Faction";
    else if ((dangerEvent.tags || []).includes("seduction_trap") && deception >= 58) category = "Predatory";
    else if (deception >= 64) category = "Lying";
    else if ((dangerEvent.tags || []).includes("political") && read >= 36) category = "Politically Useful";
    else if (obsession >= 68) category = "Obsessed";
    else if (instability >= 68) category = "Traumatized";
    else if (dangerEvent.enemy_deception >= 72 || (dangerEvent.tags || []).includes("capture_risk")) category = "Dangerous";
    else if (instability >= 46) category = "Desperate";
    else if (read >= 34 && deception <= 36) category = "Genuine";
    const certainty = clamp(Math.round(read + relevantArchetypeBonus(matron, dangerEvent) * 8 - deception * 0.25), 8, 96);
    let note = `${matron.name} cannot promise certainty, but the read feels ${certainty >= 70 ? "strong" : "partial"}.`;
    if (category === "Predatory") note = `${matron.name} believes the target is baiting intimacy to seize leverage.`;
    if (category === "Dangerous") note = `${matron.name} believes the target or room carries real danger beyond flirtation.`;
    if (category === "Genuine") note = `${matron.name} sees nerves and desire, but not an obvious blade hidden inside the invitation.`;
    return { matronId: matron.id, category, certainty, note };
  }

  function calculateInterventionChance(matron, dangerEvent, opts = {}) {
    let chance = 0.10;
    chance += Math.max(0, matron.insight - 50) / 250;
    chance += Math.max(0, matron.loyalty - 50) / 300;
    chance += Math.max(0, matron.protectiveness - 50) / 240;
    chance += Math.max(0, matron.trust - 50) / 260;
    chance += relevantArchetypeBonus(matron, dangerEvent) * 0.05;
    chance += (Math.max(1, opts.protectionLevel || 1) - 1) * 0.04;
    if (opts.askedForCounsel) chance += 0.07;
    if (opts.sentMatronFirst) chance += 0.06;
    if (opts.bringEscort) chance += 0.11;
    if (opts.friendlyTerritory) chance += 0.06;
    if (opts.wentAloneSecret) chance -= 0.12;
    if (opts.lowTrust) chance -= 0.08;
    if (opts.recentIgnored) chance -= 0.08;
    chance -= matron.corruption / 350;
    chance -= dangerEvent.enemy_deception / 250;
    if (dangerEvent.territory === "enemy") chance -= 0.07;
    return clamp(chance, 0.02, 0.92);
  }

  function resolveIntervention(matron, dangerEvent, opts = {}) {
    const chance = calculateInterventionChance(matron, dangerEvent, opts);
    const roll = Math.random();
    if (opts.captureAlreadyTriggered && dangerEvent.allows_rescue_event && (opts.protectionLevel || 1) >= 4 && roll <= chance + 0.08) {
      return {
        type: "rescue_after_capture",
        chance,
        roll,
        text: `${matron.name} reaches you after the snare closes and tears you back out of enemy hands before the situation can harden into full captivity.`,
      };
    }
    if (roll > chance) {
      return {
        type: roll <= chance + 0.1 ? "failure_delayed" : "no_intervention",
        chance,
        roll,
        text: `${matron.name} reads that something is wrong, but not quickly enough to seize control of the situation.`,
      };
    }
    if (dangerEvent.allows_matron_intervention && (opts.protectionLevel || 1) >= 3 && (opts.bringEscort || opts.sentMatronFirst || relevantArchetypeBonus(matron, dangerEvent) >= 2)) {
      return {
        type: "interruption_during",
        chance,
        roll,
        text: `${matron.name} interrupts before the trap can close and turns the meeting into a failed setup instead of a successful snare.`,
      };
    }
    if (dangerEvent.allows_matron_warning) {
      return {
        type: "warning_before",
        chance,
        roll,
        text: `${matron.name} gets word to you in time and warns that the invitation is too sweet, too private, and too controlled to trust.`,
      };
    }
    return {
      type: "no_intervention",
      chance,
      roll,
      text: `${matron.name} senses a problem, but the opening never presents itself cleanly enough to act.`,
    };
  }

  window.HCMatron = {
    MATRON_ARCHETYPES,
    MATRON_PORTRAITS,
    SCREENING_RESULTS,
    createMatron,
    normalizeMatron,
    createSampleMatrons,
    getMatronArchetypeLabel,
    createDangerEvent,
    chooseBestMatron,
    buildCounsel,
    screenTarget,
    calculateInterventionChance,
    resolveIntervention,
    relevantArchetypeBonus,
  };
})();
