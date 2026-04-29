# ROADMAP

## Next Tasks

- Add explicit screenshot assets under `docs/screenshots/` and wire them into `README.md`.
- Replace letter-based objective markers with dedicated fort/relic/palace/road art.
- Add an in-game settings modal instead of header-only audio controls.
- Expand save data versioning and add graceful migration for future schema changes.
- Surface objective yields in hover text or a side panel tooltip.
- Give each faction personality a diplomacy profile in addition to battle logic.
- Add more event choices with multi-turn consequences.
- Add quest chains tied to relic sites and pleasure palaces.
- Add rebellion pressure UI so the player can predict revolt-prone provinces.
- Improve AI to stage multi-hex pushes instead of evaluating one move at a time.
- Split `src/game.js` further once the rules stabilize.
- Add browser smoke tests for save/load and victory/defeat flows.

## Good First Tasks

- Tune objective spawn counts in `seedSettlements()`.
- Add richer copy to the new campaign event cards.
- Adjust relationship-rank thresholds or bonus values in `src/factions.js`.
- Add more faction personalities to reserve queens if six archetypes feels too repetitive.
- Expand final summary cards with faction-by-faction collapse details.
- Add a delete-save button and confirm flow.

## Risks To Watch

- Save compatibility: changing the tile schema will break old localStorage payloads unless migrated.
- `src/game.js` still owns most orchestration logic; future features should prefer helper modules where possible.
- Objective generation and AI heuristics are intentionally simple and may need balance tuning after playtesting.
