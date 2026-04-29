(function () {
  const SAVE_KEY = "harem-conquest-save-v1";

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function formatTimestamp(iso) {
    if (!iso) return "Never";
    const date = new Date(iso);
    if (Number.isNaN(date.getTime())) return "Unknown";
    return date.toLocaleString();
  }

  function buildCapturedQueenSummary(capturedQueens, queenPowers, queenEntry, factionById, relationRankId) {
    return capturedQueens
      .filter((id) => queenPowers[id])
      .map((id) => {
        const state = queenEntry(id);
        return `${queenPowers[id].title} (${factionById(id)?.name || "Unknown"}) • ${relationRankId(state)} • morale ${state.morale}`;
      });
  }

  window.HCUI = {
    SAVE_KEY,
    clamp,
    formatTimestamp,
    buildCapturedQueenSummary,
  };
}());
