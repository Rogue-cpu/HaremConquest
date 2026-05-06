(function () {
  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function pickTraits(archetype, count = 3) {
    const pools = {
      noble_duchess: ["Steady", "Diplomatic", "Fair-minded", "Tradition-minded", "Pragmatic"],
      war_duchess: ["Fearless", "Martial", "Tactical", "Harsh", "Relentless"],
      matron_duchess: ["Nurturing", "Protective", "Patient", "Healing", "Calm"],
      underworld_duchess: ["Shadowy", "Wily", "Conniving", "Resourceful", "Secretive"],
      court_duchess: ["Elegant", "Persuasive", "Charming", "Influential", "Cunning"],
      zealot_duchess: ["Devout", "Uncompromising", "Righteous", "Driven", "Fanatical"],
      pleasure_duchess: ["Seductive", "Generous", "Sensual", "Decadent", "Playful"],
      rebel_duchess: ["Independent", "Charismatic", "Unpredictable", "Resilient", "Bold"],
    };
    const pool = pools[archetype] || pools.noble_duchess;
    const traits = [];
    while (traits.length < count) {
      const trait = pool[randomBetween(0, pool.length - 1)];
      if (!traits.includes(trait)) traits.push(trait);
    }
    return traits;
  }

  const DUCHESS_PORTRAITS = {
    noble_duchess: "Duchess/majestic_by_diart1st_dj9eeo9-pre.jpg",
    war_duchess: "Duchess/black_widow___marvel_by_giantvixenai_dlz78ks-414w-2x.jpg",
    matron_duchess: "Duchess/oriental_princess_by_gazeofnudes_dj945zw-pre.jpg",
    underworld_duchess: "Duchess/goth_express___the_conductor_by_lovermam_djsx72n-pre.jpg",
    court_duchess: "Duchess/sophisticated_by_diart1st_djusqoa-pre.jpg",
    zealot_duchess: "Duchess/persian_princess_by_gazeofnudes_dk4u3de-414w-2x.jpg",
    pleasure_duchess: "Duchess/big_thick_ass_cheeks_by_imsololevelingfan_dk1p58e-fullview.jpg",
    rebel_duchess: "Duchess/devil_girl_by_gazeofnudes_dkn0f2g-pre.jpg",
  };

  const DUCHESS_ARCHETYPES = {
    noble_duchess: {
      label: "Noble Duchess",
      summary: "Balanced governor with small bonuses to loyalty, tribute, and prosperity.",
      base: { loyalty: 62, ambition: 34, competence: 64, authority: 58, cruelty: 28, charm: 52, discipline: 56, corruption: 22, intrigue: 30, localInfluence: 56, betrayalRisk: 18 },
    },
    war_duchess: {
      label: "War Duchess",
      summary: "Improves security and recruitment. Reduces unrest through force, but can raise rebellion risk.",
      base: { loyalty: 48, ambition: 40, competence: 58, authority: 70, cruelty: 60, charm: 32, discipline: 72, corruption: 26, intrigue: 26, localInfluence: 52, betrayalRisk: 22 },
    },
    matron_duchess: {
      label: "Matron Duchess",
      summary: "Stabilizing governor who reduces unrest, improves loyalty, and helps unstable tiles recover.",
      base: { loyalty: 72, ambition: 28, competence: 62, authority: 52, cruelty: 18, charm: 58, discipline: 60, corruption: 14, intrigue: 22, localInfluence: 58, betrayalRisk: 12 },
    },
    underworld_duchess: {
      label: "Underworld Duchess",
      summary: "Improves illicit income and intrigue. Increases corruption and betrayal risk.",
      base: { loyalty: 38, ambition: 62, competence: 54, authority: 48, cruelty: 36, charm: 50, discipline: 46, corruption: 64, intrigue: 72, localInfluence: 64, betrayalRisk: 46 },
    },
    court_duchess: {
      label: "Court Duchess",
      summary: "Improves tribute, stability, and local influence. Can become politically ambitious.",
      base: { loyalty: 56, ambition: 52, competence: 60, authority: 60, cruelty: 30, charm: 66, discipline: 58, corruption: 28, intrigue: 54, localInfluence: 68, betrayalRisk: 28 },
    },
    zealot_duchess: {
      label: "Zealot Duchess",
      summary: "Improves loyalty and ideological control, but may increase unrest if locals resist.",
      base: { loyalty: 70, ambition: 44, competence: 54, authority: 64, cruelty: 42, charm: 30, discipline: 66, corruption: 18, intrigue: 34, localInfluence: 52, betrayalRisk: 30 },
    },
    pleasure_duchess: {
      label: "Pleasure Duchess",
      summary: "Improves charm-based loyalty and local satisfaction, but may increase corruption or scandal risk.",
      base: { loyalty: 60, ambition: 50, competence: 54, authority: 42, cruelty: 24, charm: 74, discipline: 46, corruption: 48, intrigue: 48, localInfluence: 66, betrayalRisk: 36 },
    },
    rebel_duchess: {
      label: "Rebel Duchess",
      summary: "Good for unstable frontier tiles. Reduces unrest with local credibility, but has higher ambition and independence risk.",
      base: { loyalty: 44, ambition: 70, competence: 52, authority: 46, cruelty: 38, charm: 56, discipline: 50, corruption: 32, intrigue: 58, localInfluence: 70, betrayalRisk: 42 },
    },
  };

  function statusFromDuchess(duchess) {
    if (duchess.status && duchess.status !== "active") return duchess.status;
    if (duchess.loyalty >= 80 && duchess.betrayalRisk <= 18) return "loyal";
    if (duchess.corruption >= 65) return "corrupt";
    if (duchess.ambition >= 65 && duchess.loyalty <= 45) return "rebellious";
    if (duchess.ambition >= 55) return "ambitious";
    if (duchess.localInfluence >= 70 && duchess.loyalty >= 50) return "beloved";
    if (duchess.loyalty <= 40 && duchess.localInfluence >= 60) return "dangerous";
    return "loyal";
  }

  function createDuchess({ id, name, title, archetype, assignedTile = null, ownerFaction = null, portrait = null, traits = null, notes = null }) {
    const archetypeData = DUCHESS_ARCHETYPES[archetype] || DUCHESS_ARCHETYPES.noble_duchess;
    const stats = {
      loyalty: clamp(archetypeData.base.loyalty + randomBetween(-14, 14), 0, 100),
      ambition: clamp(archetypeData.base.ambition + randomBetween(-14, 14), 0, 100),
      competence: clamp(archetypeData.base.competence + randomBetween(-16, 16), 0, 100),
      authority: clamp(archetypeData.base.authority + randomBetween(-12, 12), 0, 100),
      cruelty: clamp(archetypeData.base.cruelty + randomBetween(-14, 14), 0, 100),
      charm: clamp(archetypeData.base.charm + randomBetween(-14, 14), 0, 100),
      discipline: clamp(archetypeData.base.discipline + randomBetween(-12, 12), 0, 100),
      corruption: clamp(archetypeData.base.corruption + randomBetween(-18, 18), 0, 100),
      intrigue: clamp(archetypeData.base.intrigue + randomBetween(-16, 16), 0, 100),
      localInfluence: clamp(archetypeData.base.localInfluence + randomBetween(-12, 12), 0, 100),
      betrayalRisk: clamp(archetypeData.base.betrayalRisk + randomBetween(-14, 14), 0, 100),
    };
    const duchess = {
      id,
      name,
      title,
      archetype,
      assignedTile,
      ownerFaction,
      portrait: portrait || DUCHESS_PORTRAITS[archetype] || "Queens/queen_elara_verdantia.jpg",
      ...stats,
      traits: traits || pickTraits(archetype),
      status: statusFromDuchess({ ...stats, localInfluence: stats.localInfluence, betrayalRisk: stats.betrayalRisk }),
      notes: notes || archetypeData.summary,
      trust: clamp(38 + randomBetween(-10, 18), 0, 100),
      romance: clamp(26 + randomBetween(-8, 16), 0, 100),
      attraction: clamp(34 + randomBetween(-10, 18), 0, 100),
      pregnant: false,
      pregnancyStartRound: -1,
      pregnancyDueRound: -1,
      pregnancyOrigin: null,
      children: 0,
      talkUsedThisTurn: false,
      giftUsedThisTurn: false,
      confideUsedThisTurn: false,
      intimacyUsedThisTurn: false,
    };
    return duchess;
  }

  function computeTurnModifiers(duchess) {
    const base = {
      loyalty: Math.round((duchess.loyalty - 50) * 0.04) + Math.round(duchess.charm * 0.01),
      prosperity: Math.round((duchess.competence - 50) * 0.05) + Math.round(duchess.authority * 0.01),
      unrest: -Math.round((duchess.loyalty - 50) * 0.03) + Math.round((duchess.cruelty - 50) * 0.02),
      security: Math.round((duchess.authority + duchess.discipline) * 0.08) - 6,
      recruitment: Math.round((duchess.competence + duchess.discipline) * 0.05) - 4,
      tribute: Math.round((duchess.authority + duchess.charm) * 0.04) - 2,
      corruption: Math.round((duchess.corruption - 35) * 0.06) + (duchess.archetype === "underworld_duchess" ? 2 : 0),
      betrayalRisk: Math.round((duchess.ambition - duchess.loyalty) * 0.08) + Math.round(duchess.corruption * 0.03),
    };

    if (duchess.archetype === "matron_duchess") {
      base.unrest -= 2;
      base.loyalty += 2;
      base.prosperity += 1;
    }
    if (duchess.archetype === "war_duchess") {
      base.unrest -= 3;
      base.prosperity -= 1;
    }
    if (duchess.archetype === "zealot_duchess") {
      base.loyalty += 2;
      base.unrest += duchess.charm < 40 ? 1 : 0;
    }
    if (duchess.archetype === "pleasure_duchess") {
      base.loyalty += 1;
      base.corruption += 2;
    }
    if (duchess.archetype === "rebel_duchess") {
      base.unrest -= 1;
      base.loyalty -= 2;
      base.betrayalRisk += 4;
    }

    return base;
  }

  function computeRebellionRisk(duchess, systems) {
    const unrest = systems.unrest || 0;
    const security = systems.security || 0;
    const raw =
      (100 - duchess.loyalty) * 0.22 +
      duchess.ambition * 0.18 +
      duchess.localInfluence * 0.16 +
      duchess.corruption * 0.14 +
      unrest * 0.18 +
      duchess.betrayalRisk * 0.12 -
      security * 0.16;
    return clamp(Math.round(raw), 0, 100);
  }

  function buildEventForDuchess(duchess, tile) {
    const chance = 0.08 + duchess.localInfluence * 0.0012;
    if (Math.random() > chance) return null;

    const mood = [];
    if (duchess.corruption >= 65) mood.push("corruption");
    if (duchess.ambition >= 60 && duchess.loyalty <= 45) mood.push("plotting");
    if (duchess.competence >= 65) mood.push("improvement");
    if (duchess.cruelty >= 55) mood.push("harsh");
    if (duchess.loyalty >= 70) mood.push("stability");
    if (duchess.localInfluence >= 65 && duchess.loyalty <= 50) mood.push("warning");

    const choice = mood.length ? mood[randomBetween(0, mood.length - 1)] : "small";
    const label = tile.capital ? "Duchess Report" : "Duchess Report";
    const region = `${tile.q},${tile.r}`;
    switch (choice) {
      case "corruption":
        return {
          title: "Duchess Suspected of Corruption",
          body: `${duchess.name} is rumored to skim extra tribute from ${tile.capital ? "the capital" : "the district"} at ${region}. Locals whisper of gilded favors and hidden ledgers.`,
          severity: "medium",
        };
      case "plotting":
        return {
          title: "Duchess Begins Plotting Rebellion",
          body: `${duchess.name} has been seen meeting with restless commanders near ${region}. Her ambition may be bending the district toward danger.`,
          severity: "high",
        };
      case "improvement":
        return {
          title: "Duchess Improves Local Infrastructure",
          body: `${duchess.name} directs repairs and new watch posts in ${region}. The population notices tidier streets and steadier markets.`,
          severity: "low",
        };
      case "harsh":
        return {
          title: "Duchess’s Harsh Methods Anger Locals",
          body: `${duchess.name} has cracked down hard to keep order in ${region}. The people are quieter, but the resentment is growing.`,
          severity: "medium",
        };
      case "stability":
        return {
          title: "Duchess Becomes Beloved by the Population",
          body: `${duchess.name} wins praise for steady leadership in ${region}. Fewer complaints rise through the district’s ranks.`,
          severity: "low",
        };
      case "warning":
        return {
          title: "Duchess Secretly Builds Local Influence",
          body: `${duchess.name} quietly strengthens her networks around ${region}. Her power grows, and so does the sense that she answers to no one but herself.`,
          severity: "medium",
        };
      default:
        return {
          title: "Duchess Adjusts Local Policy",
          body: `${duchess.name} issues a new order in ${region}. The district reacts, though it is too soon to tell whether it will please or anger the people.`,
          severity: "low",
        };
    }
  }

  function effectSummary(duchess) {
    return `${DUCHESS_ARCHETYPES[duchess.archetype]?.summary || "A local governor with influence over the district."} Loyalty bonus, unrest control, and local authority depend on her personality.`;
  }

  function getArchetypeLabel(archetype) {
    return DUCHESS_ARCHETYPES[archetype]?.label || archetype.replace(/_/g, " ");
  }

  function isDangerousDuchess(duchess) {
    return duchess.loyalty <= 35 && duchess.ambition >= 55 && duchess.localInfluence >= 55;
  }

  window.HCDuchess = {
    ARCHETYPES: DUCHESS_ARCHETYPES,
    createDuchess,
    statusFromDuchess,
    effectSummary,
    computeTurnModifiers,
    computeRebellionRisk,
    buildEventForDuchess,
    getArchetypeLabel,
    isDangerousDuchess,
    pickTraits,
    clamp,
  };
}());
