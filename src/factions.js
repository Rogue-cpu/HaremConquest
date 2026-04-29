(function () {
  const PERSONALITY_ORDER = [
    "Aggressive",
    "Defensive",
    "Opportunist",
    "Rebel-maker",
    "Diplomat",
    "Swarm-expander",
  ];

  const RELATIONSHIP_RANKS = [
    {
      id: "Hostile",
      unlock: "Frequent refusal chance and no passive bonus.",
      warBonus: 0,
      serveBonus: 0,
      refusalFloor: 0.2,
    },
    {
      id: "Broken",
      unlock: "Will serve under pressure and grants minor support bonuses.",
      warBonus: 1,
      serveBonus: 1,
      refusalFloor: 0.08,
    },
    {
      id: "Loyal",
      unlock: "Reliable service with stronger war and intrigue contributions.",
      warBonus: 2,
      serveBonus: 2,
      refusalFloor: 0.02,
    },
    {
      id: "Devoted",
      unlock: "Maximum battle and court bonuses with no refusal chance.",
      warBonus: 3,
      serveBonus: 3,
      refusalFloor: 0,
    },
  ];

  function relationRankFromState(state) {
    const pressure = (state.trust || 0) + (state.romance || 0) + (state.morale || 0) * 0.45 - (state.hate || 0) * 0.9;
    if (pressure >= 150) return RELATIONSHIP_RANKS[3];
    if (pressure >= 95) return RELATIONSHIP_RANKS[2];
    if (pressure >= 38) return RELATIONSHIP_RANKS[1];
    return RELATIONSHIP_RANKS[0];
  }

  function relationRankId(state) {
    return relationRankFromState(state).id;
  }

  function relationBonus(state, channel) {
    const rank = relationRankFromState(state);
    if (channel === "war") return rank.warBonus;
    if (channel === "serve") return rank.serveBonus;
    if (channel === "refusalFloor") return rank.refusalFloor;
    return 0;
  }

  function fallbackPersonality(factionId) {
    return PERSONALITY_ORDER[factionId % PERSONALITY_ORDER.length];
  }

  function describePersonality(personality) {
    switch (personality) {
      case "Aggressive":
        return "Prioritizes capitals, forts, and direct attacks.";
      case "Defensive":
        return "Builds strong borders and reinforces weak holdings.";
      case "Opportunist":
        return "Snipes weak objectives and vulnerable neighbors.";
      case "Rebel-maker":
        return "Prefers unrest, splinter realms, and pressure events.";
      case "Diplomat":
        return "Values trade, tribute, and restraint before war.";
      case "Swarm-expander":
        return "Spreads quickly into neutral land and road networks.";
      default:
        return "Adapts to the board.";
    }
  }

  window.HCFactions = {
    PERSONALITY_ORDER,
    RELATIONSHIP_RANKS,
    relationRankFromState,
    relationRankId,
    relationBonus,
    fallbackPersonality,
    describePersonality,
  };
}());
