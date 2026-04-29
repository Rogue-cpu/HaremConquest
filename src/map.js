(function () {
  const ESTATE_META = {
    town: { label: "Town", icon: "T", growth: "major", priority: 8 },
    port: { label: "Port", icon: "P", growth: "trade", priority: 6 },
    fort: { label: "Fort", icon: "F", growth: "defense", priority: 9 },
    relic: { label: "Relic Site", icon: "R", growth: "mystic", priority: 10 },
    palace: { label: "Pleasure Palace", icon: "H", growth: "court", priority: 7 },
    road: { label: "Trade Road", icon: "+", growth: "supply", priority: 5 },
  };

  function estateMeta(type) {
    return ESTATE_META[type] || null;
  }

  function estatePriority(tile) {
    if (tile.capital) return 20;
    const meta = estateMeta(tile.estate);
    return meta ? meta.priority : 0;
  }

  function mapStats(tiles, ownerId) {
    const land = tiles.filter((tile) => tile.terrain === "land");
    const owned = land.filter((tile) => tile.owner === ownerId);
    const objectiveTiles = owned.filter((tile) => tile.capital || estateMeta(tile.estate));
    const objectiveCounts = objectiveTiles.reduce((acc, tile) => {
      const key = tile.capital ? "capital" : tile.estate;
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});
    return {
      land: owned.length,
      objectives: objectiveCounts,
      troops: owned.reduce((sum, tile) => sum + tile.troops, 0),
    };
  }

  function objectiveSummary(stats) {
    const pairs = Object.entries(stats.objectives || {});
    if (!pairs.length) return "No major objectives";
    return pairs.map(([key, value]) => `${value} ${key}`).join(" • ");
  }

  window.HCMap = {
    ESTATE_META,
    estateMeta,
    estatePriority,
    mapStats,
    objectiveSummary,
  };
}());
