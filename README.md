# Harem Conquest

Harem Conquest is a browser strategy prototype about hex-map conquest, rival queens, captured courts, shifting loyalty, and endgame romance-politics. It started as a fast single-file prototype and now has a modular front end with campaign persistence, world events, queen progression, and faction personalities.

## Pitch

Expand your realm across a hex map, break rival capitals, capture or court enemy queens, and turn a fragile throne into a dominant court. Between wars, manage morale, diplomacy, tribute, rebellion pressure, and the women already inside your harem.

## Controls

- Click one of your land tiles with `2+` troops to select it.
- Click an adjacent tile to move or attack.
- Use `Send` to choose how much force to commit.
- Use `Harem` to assign queens to `court`, `war`, or `intrigue`.
- Use `Diplomacy` to talk, flirt, demand aid, trade, and offer truces.
- Use `Save` / `Load` for campaign persistence.
- Use the audio controls in the header or title menu to change volume or mute the theme.

## Current Features

- Local browser saves with autosave after turn transitions.
- Continue Campaign from the title screen.
- Clear victory and defeat summaries with final realm stats.
- Captured queen progression: `Hostile -> Broken -> Loyal -> Devoted`.
- Faction personalities: `Aggressive`, `Defensive`, `Opportunist`, `Rebel-maker`, `Diplomat`, `Swarm-expander`.
- Campaign events including defections, tribute, rebellion spread, and escape plots.
- Intermediate map objectives: towns, ports, forts, relic sites, pleasure palaces, and trade roads.
- Diplomacy, marriage, servitude, rebellion, queen powers, and specialty units.
- Modularized front end: `index.html`, `styles.css`, `src/game.js`, `src/map.js`, `src/factions.js`, `src/ui.js`.

## Screenshots

The repo does not yet ship captured screenshots. Recommended captures for the next pass:

1. Title screen with audio/settings and Continue Campaign.
2. Mid-campaign map showing mixed objectives.
3. Harem panel with relationship ranks visible.
4. Final victory or defeat summary screen.

If you add images later, place them under `docs/screenshots/` and embed them here.

## Roadmap

See [ROADMAP.md](ROADMAP.md) for the Codex-friendly task breakdown.

## How To Run

1. Clone the repo.
2. Open `index.html` in a modern browser.
3. Start a new campaign or continue from local save data.

No build step is required right now.
