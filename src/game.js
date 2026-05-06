const mapW = 28;
    const mapH = 28;
    const hexSize = 27;
    const sqrt3 = Math.sqrt(3);
    const HUMAN_MOVES_PER_TURN = 5;
    const TROOP_RANGE = 3;
    const BOARD_DRAG_THRESHOLD = 8;
    const BOARD_DRAG_HOLD_MS = 180;
    const SEND_OPTIONS = [0.25, 0.5, 1];
    const THEME_COLORS = {
      green: "#2f7d4d",
      red: "#b03a2e",
      blue: "#2f5597",
      violet: "#7a4bb8",
      gold: "#b08a2e",
      onyx: "#44656d",
      rose: "#b45f7d",
      pearl: "#5c8f96",
      ember: "#b85b32",
      sky: "#4d89c8",
      jade: "#3f9a72",
      steel: "#6c7684",
    };

    const QUEEN_ARCHETYPES = {
      edict: {
        powerName: "Royal Edict",
        summary: "Boost one tile with morale-scaled reinforcements.",
        unitName: "Lioness Guard",
        unitFightBonus: 2,
        unitServeBonus: 2,
      },
      banner: {
        powerName: "War Banner",
        summary: "Buff one tile with scaling troops.",
        unitName: "Crimson Guard",
        unitFightBonus: 3,
        unitServeBonus: 2,
      },
      raid: {
        powerName: "Night Raid",
        summary: "Damage adjacent enemies with scaling power.",
        unitName: "Moonblade",
        unitFightBonus: 2,
        unitServeBonus: 3,
      },
      hex: {
        powerName: "Veil Hex",
        summary: "Curses the front and strengthens the chosen host.",
        unitName: "Duskguard",
        unitFightBonus: 3,
        unitServeBonus: 1,
      },
      tithe: {
        powerName: "Sun Tithe",
        summary: "Turns wealth into reinforcements and morale.",
        unitName: "Gilded Lancer",
        unitFightBonus: 2,
        unitServeBonus: 3,
      },
      storm: {
        powerName: "Iron Storm",
        summary: "Disciplined assault that favors large formations.",
        unitName: "Shogun Guard",
        unitFightBonus: 4,
        unitServeBonus: 1,
      },
    };

const QUEEN_FILES = [
  "queen_elara_verdantia.jpg",
  "queen_rhea_crimson.jpg",
  "queen_selene_azure.jpg",
  "queen_morwen_violet.jpg",
  "queen_isolde_gold.jpg",
  "queen_kaida_onyx.jpg",
  "_mirko_ai_2_by_nerdlord1_dj826vp-pre.jpg",
  "ai_mishima__13670___adoptable__by_izumi_mayumi_di0v2xf-414w-2x.jpg",
  "android_18_ai_3_by_nerdlord1_dj2f389-pre.jpg",
  "ashe_ai_by_nerdlord1_dl0jktl-pre.jpg",
  "azazel_ai_by_nerdlord1_dkausx8-300w.jpg",
  "ballora_ai_by_nerdlord1_dlp436r-pre.jpg",
  "big_thick_ass_cheeks_by_imsololevelingfan_dk0rip7-fullview.jpg",
  "bisca_connell_ai_by_nerdlord1_dlv68lh-pre.jpg",
  "blackfire_ai_by_nerdlord1_dl5ywap-pre.jpg",
  "blue_diamond_ai_by_nerdlord1_djao5f1-pre.jpg",
  "bulma_briefs_ai_3_by_nerdlord1_dkqp1f4-pre.jpg",
  "calendar_girl_ai_by_nerdlord1_dlbs91w-pre.jpg",
  "captain_syrup_ai_by_nerdlord1_dlr9fy9-pre.jpg",
  "cassandra_ai_by_nerdlord1_dl6kxwl-pre.jpg",
  "cassidy__pokemon__ai_by_nerdlord1_dln3sch-pre.jpg",
  "charlie_morningstar_ai_by_nerdlord1_djaa7hz-pre.jpg",
  "chichi_ai_2_by_nerdlord1_dhg33cz-375w-2x.jpg",
  "chun_li_ai_by_nerdlord1_djb7033-pre.jpg",
  "coupe_ai_by_nerdlord1_dlgo1jg-pre.jpg",
  "daily_images__123_1_by_hoshiatelier_dke2jbd-pre.jpg",
  "daily_images__186_10_by_hoshiatelier_dlxkv2h-pre.jpg",
  "daki_ai_by_nerdlord1_djblrrw-pre.jpg",
  "delivery_girl_yoruichi_by_krownedkueens_djcnn2w-414w-2x.jpg",
  "do_s_ai_by_nerdlord1_dljj9kj-pre.jpg",
  "doctor_franceska_mila_rose_by_krownedkueens_dj5e408-pre.jpg",
  "dr__amelia_buck_ai_by_nerdlord1_dk54tew-pre.jpg",
  "drasna_ai_by_nerdlord1_dl3qm60-pre.jpg",
  "elemental_hero_burstinatrix_ai_by_nerdlord1_dlcru77-pre.jpg",
  "erza_scarlet_ai_by_nerdlord1_dkx3wmh-pre.jpg",
  "experimental_images__121_5_by_hoshiatelier_dkq0yow-pre.jpg",
  "female_president_mila_rose_by_krownedkueens_dj5gyi3-pre.jpg",
  "franziska_von_karma_ai_by_nerdlord1_dll4jdo-pre.jpg",
  "fujiko_mine_ai_by_nerdlord1_dkcmtff-pre.jpg",
  "giganta_ai_by_nerdlord1_dlq90zz-pre.jpg",
  "haibara_tatsumi_ai_by_nerdlord1_dlgxsug-pre.jpg",
  "hideko__oc__by_izumi_mayumi_dkacg8b-pre.jpg",
  "holy_joestar_ai_by_nerdlord1_dl4nr6z-pre.jpg",
  "huge_ass__281_5_by_hoshiatelier_dhd4jrs-414w-2x.jpg",
  "huge_ass__285_by_hoshiatelier_dhfwi2w-414w-2x.jpg",
  "huge_ass__296_by_hoshiatelier_dhkrtuo-414w-2x.jpg",
  "huge_ass__383__by_hoshiatelier_dj7vt63-pre.jpg",
  "huge_ass__400_5_by_hoshiatelier_djx46rl-pre.jpg",
  "huge_ass__406_5__by_hoshiatelier_dkc8egl-pre.jpg",
  "huge_ass__407__by_hoshiatelier_dkdyvee-pre.jpg",
  "invisigal_ai_by_nerdlord1_dl7b9z8-pre.jpg",
  "invisigal_goth_by_visurix_dl1xnzg-pre.jpg",
  "jasper_ai__by_nerdlord1_dl7ahan-pre.jpg",
  "jessie_ai_3_by_nerdlord1_dlkq91w-pre.jpg",
  "jill_valentine_ai_2_by_nerdlord1_dlo323e-300w.jpg",
  "juri_han_ai_by_nerdlord1_dlefdvu-pre.jpg",
  "justice_ai_by_nerdlord1_dluqfgq-pre.jpg",
  "karen_ai_by_nerdlord1_dlf35g2-pre.jpg",
  "kefla_ai_by_nerdlord1_djzyf50-300w.jpg",
  "lila_test_ai_by_nerdlord1_dlphfd4-pre.jpg",
  "lilithmon_by_velvetpawsart_dlbg290-pre.jpg",
  "linda_flynn_fletcher_ai_by_nerdlord1_dl4qpt5-pre.jpg",
  "mal0_ai_2_by_nerdlord1_dj9y3e0-pre.jpg",
  "mala_ai__by_nerdlord1_dlew36b-300w.jpg",
  "malevola_ai_by_nerdlord1_dky16be-pre.jpg",
  "malice_ai_by_nerdlord1_dlhrwbw-414w-2x.jpg",
  "mami_maruyoshi__9135__by_izumi_mayumi_di17r0h-414w-2x.jpg",
  "megara_ai_by_nerdlord1_dklzzcm-pre.jpg",
  "mei_terumi_ai_by_nerdlord1_dkw2a12-pre.jpg",
  "melony_ai_2_by_nerdlord1_dk25zn8-pre.jpg",
  "mitsuri_kanroji_ai_2_by_nerdlord1_dj576sk-pre.jpg",
  "modeus_ai__by_nerdlord1_djcxpmd-pre.jpg",
  "mystique_sonia_ai_by_nerdlord1_dkky5wg-pre.jpg",
  "natsumi_nakahira___original_character_by_izumi_mayumi_djy4wm8-pre.jpg",
  "nico_robin_ai_2_by_nerdlord1_djcqbz8-pre.jpg",
  "noriyo_inoe___original_character_by_izumi_mayumi_djy5891-414w-2x.jpg",
  "poison_ivy_ai_by_nerdlord1_dldox59-pre.jpg",
  "princess_belle_ai_by_nerdlord1_dka6ito-pre.jpg",
  "princess_peach_ai_by_nerdlord1_dj3h6ma-pre.jpg",
  "princess_rosalina_ai_2__by_nerdlord1_djclyoe-pre.jpg",
  "priyanka_maheswaran_ai_by_nerdlord1_dkxtj2d-pre.jpg",
  "queen_akasha_nightblood.jpg",
  "queen_aoi_tempest.jpg",
  "queen_aurelia_sunspire.jpg",
  "queen_brynn_hart.jpg",
  "queen_calista_pearl.jpg",
  "queen_dragomira_iron.jpg",
  "queen_evangeline_noctis.jpg",
  "queen_iris_prism.jpg",
  "queen_junia_ember.jpg",
  "queen_kasumi_velvet.jpg",
  "queen_lumina_verde.jpg",
  "queen_lysandra_azure.jpg",
  "queen_malora_hex.jpg",
  "queen_maribel_sky.jpg",
  "queen_matriona_steel.jpg",
  "queen_meira_sable.jpg",
  "queen_nymera_rose.jpg",
  "queen_revena_crimson.jpg",
  "queen_sabine_westwind.jpg",
  "queen_seraphina_tide.jpg",
  "queen_thalassa_blush.jpg",
  "queen_valeska_scarlet.jpg",
  "queen_valora_chain.jpg",
  "queen_vespera_moon.jpeg",
  "queen_victoria_ruby.jpg",
  "queen_wilhelmina_ivory.jpg",
  "queen_zoranna_blackflame.jpg",
  "rainbow_mika_ai_by_nerdlord1_djbhhd9-300w.jpg",
  "rainbow_mika_ai_by_nerdlord1_djbhhd9-pre.jpg",
  "ranamon_ai_by_nerdlord1_dlxry0g-pre.jpg",
  "rebecca_ai_by_nerdlord1_dl2rl3s-pre.jpg",
  "rosemon_ai_by_nerdlord1_dl9vjs0-pre.jpg",
  "sakuyamon_ai_by_nerdlord1_dloi5v4-pre.jpg",
  "shgurr_ai_by_nerdlord1_dl1tb6t-pre.jpg",
  "supernova_ai_by_nerdlord1_dl5ak4a-pre.jpg",
  "tsunade_ai_by_nerdlord1_dktrr5p-pre.jpg",
  "ulti_ai_by_nerdlord1_dkngsds-pre.jpg",
  "vanessa_ai_by_nerdlord1_dlwwslu-pre.jpg",
  "velvette_ai__by_nerdlord1_djhkqm7-pre.jpg",
  "volcana_ai_by_nerdlord1_dlh2eb6-300w.jpg",
  "white_diamond_ai_by_nerdlord1_dlboas8-pre.jpg",
  "yoko_sakaki_ai_by_nerdlord1_dkoabr8-300w.jpg",
  "yor_forger_ai_by_nerdlord1_dkyflm5-pre.jpg",
  "yurika_kawauchi___the_thicc_thunderbolt__oc__by_izumi_mayumi_djgcarm-pre.jpg",
  "zangya_ai_by_nerdlord1_dlghf24-pre.jpg",
];

const {
  relationRankFromState,
  relationRankId,
  relationBonus,
  fallbackPersonality,
  describePersonality,
} = window.HCFactions;
const { estateMeta, estatePriority, mapStats, objectiveSummary } = window.HCMap;
const { SAVE_KEY, clamp, formatTimestamp, buildCapturedQueenSummary } = window.HCUI;
if (!window.HCDuchess) {
  window.HCDuchess = {
    createDuchess: (opts) => ({
      id: opts?.id || "duchess_placeholder",
      name: opts?.name || "Unknown Duchess",
      title: opts?.title || "Duchess",
      archetype: opts?.archetype || "noble_duchess",
      assignedTile: opts?.assignedTile || null,
      ownerFaction: opts?.ownerFaction || null,
      loyalty: 50,
      ambition: 50,
      competence: 50,
      authority: 50,
      cruelty: 50,
      charm: 50,
      discipline: 50,
      corruption: 50,
      intrigue: 50,
      localInfluence: 50,
      betrayalRisk: 50,
      traits: [],
      status: "loyal",
      notes: "Duchess system not loaded.",
    }),
    statusFromDuchess: () => "loyal",
    effectSummary: () => "Duchess data unavailable.",
    computeTurnModifiers: () => ({
      loyalty: 0,
      prosperity: 0,
      unrest: 0,
      security: 0,
      recruitment: 0,
      tribute: 0,
      corruption: 0,
      betrayalRisk: 0,
    }),
    computeRebellionRisk: () => 0,
    buildEventForDuchess: () => null,
    getArchetypeLabel: (a) => a || "Unknown",
    isDangerousDuchess: () => false,
  };
}
const {
  createDuchess,
  statusFromDuchess,
  effectSummary,
  computeTurnModifiers,
  computeRebellionRisk,
  buildEventForDuchess,
  getArchetypeLabel,
  isDangerousDuchess,
} = window.HCDuchess;
let duchesses = [];
const SAVE_VERSION = 1;
const TILE_UPGRADES = {
  farm: { label: "Farms", cost: 4, max: 2, requires: (tile) => tile.terrain === "land", yield: "+1 troop growth and +1 prosperity per level." },
  market: { label: "Markets", cost: 5, max: 2, requires: (tile) => tile.terrain === "land", yield: "+2 crowns per level and stronger diplomacy pull." },
  barracks: { label: "Barracks", cost: 6, max: 2, requires: (tile) => tile.terrain === "land", yield: "+1 troop growth per level and steadier garrisons." },
  walls: { label: "Walls", cost: 6, max: 2, requires: (tile) => tile.terrain === "land", yield: "+1 defense per level when attacked." },
  roads: { label: "Roadworks", cost: 4, max: 2, requires: (tile) => tile.terrain === "land", yield: "+1 crown per level and faster regional build-up." },
  harbor: { label: "Harbor", cost: 5, max: 1, requires: (tile) => tile.coastal || tile.estate === "port", yield: "+3 crowns and +1 troop growth on coasts." },
  watchtower: { label: "Watchtower", cost: 4, max: 1, requires: (tile) => tile.terrain === "land", yield: "Reduces unrest and hardens the tile against intrigue." },
  manor: { label: "Court Manor", cost: 7, max: 1, requires: (tile) => tile.terrain === "land", yield: "Improves loyalty and harem morale from this province." },
};
const TILE_INTERIOR_MARKERS = {
  water: { glyph: "~", label: "Waterfront", cls: "water" },
  capital: { glyph: "C", label: "Capital Keep", cls: "estate" },
  town: { glyph: "T", label: "Town Center", cls: "estate" },
  port: { glyph: "P", label: "Port District", cls: "water" },
  fort: { glyph: "F", label: "Fortified Bastion", cls: "estate" },
  relic: { glyph: "R", label: "Relic Shrine", cls: "estate" },
  palace: { glyph: "H", label: "Pleasure Palace", cls: "estate" },
  road: { glyph: "+", label: "Trade Road", cls: "path" },
  farm: { glyph: "f", label: "Farmstead", cls: "building" },
  market: { glyph: "m", label: "Market", cls: "building" },
  barracks: { glyph: "b", label: "Barracks", cls: "building" },
  walls: { glyph: "w", label: "Wall Gate", cls: "building" },
  roads: { glyph: "=", label: "Roadworks", cls: "path" },
  harbor: { glyph: "h", label: "Harbor", cls: "water" },
  watchtower: { glyph: "t", label: "Watchtower", cls: "building" },
  manor: { glyph: "M", label: "Court Manor", cls: "building" },
  steward: { glyph: "S", label: "Steward", cls: "npc" },
  guard: { glyph: "G", label: "Guard", cls: "npc" },
  crowd: { glyph: "N", label: "Locals", cls: "npc" },
};
const PROVINCE_NPC_ARCHETYPES = [
  {
    role: "Merchant",
    names: ["Arielle", "Cora", "Elise", "Lina", "Opal", "Vera"],
    options: ["Talk", "Ask Rumors", "Browse Wares", "Buy Drink", "Flirt", "Leave"],
    talk: [
      "She talks briskly about caravans, tariffs, and which noble houses are suddenly buying too much grain.",
      "She has a trader's memory and quietly names every faction that has been moving silver through the province.",
    ],
    rumors: [
      "She lowers her voice. \"Three wagons came through at dusk with no customs seal. Someone important is hiding purchases.\"",
      "\"Prices jump whenever the garrison expects trouble,\" she says. \"Watch the market and you'll hear the war before the heralds do.\"",
    ],
    browse: [
      { text: "She sells you a polished token and whispers that the market will remember your generosity.", treasury: -1, prosperity: 1 },
      { text: "She presses a ribbon into your hand and promises the local merchants will speak well of you.", treasury: -2, loyalty: 1, prosperity: 1 },
    ],
    drink: [
      { text: "You buy her a drink. The conversation turns easy, and word spreads that you spend coin among the people.", treasury: -1, loyalty: 1 },
      { text: "She accepts the drink with a sly smile and offers a few names worth remembering in the market quarter.", treasury: -1, unrest: -1 },
    ],
    flirt: [
      "She returns the flirtation with practiced warmth and a smile that suggests she enjoys dangerous patrons.",
      "She laughs softly and says she might save you the best silk next time you pass through.",
    ],
  },
  {
    role: "Courtier",
    names: ["Selene", "Helene", "Daria", "Petra", "Mara", "Rhea"],
    options: ["Talk", "Ask Rumors", "Request Favor", "Compliment", "Flirt", "Leave"],
    talk: [
      "She discusses appointments, grudges, and the private tensions that never reach the throne room in public.",
      "She knows who was seen entering which manor after dark and which alliances are starting to fray.",
    ],
    rumors: [
      "\"A sealed letter changed hands in the gallery,\" she whispers. \"No one sends sealed letters unless they fear witnesses.\"",
      "\"The steward smiles too easily this week,\" she says. \"That usually means a bargain was struck somewhere.\"",
    ],
    favor: [
      { text: "She agrees to smooth a local dispute with a discreet word. The province breathes easier afterward.", loyalty: 2, unrest: -1 },
      { text: "She sends a servant ahead of you to prepare rooms and flatter the right officials. Your authority lands more cleanly here.", loyalty: 1, prosperity: 1 },
    ],
    compliment: [
      "She accepts the compliment like tribute and rewards you with a conspiratorial smile.",
      "She seems amused, but not displeased, and offers a better answer than she meant to.",
    ],
    flirt: [
      "She lets the moment linger, neither committing nor retreating, clearly enjoying the tension.",
      "She steps closer only long enough to make the encounter impossible to forget.",
    ],
  },
  {
    role: "Guard",
    names: ["Brenna", "Kira", "Tessa", "Jana", "Glenna", "Nora"],
    options: ["Talk", "Ask Patrols", "Inspect Morale", "Compliment", "Flirt", "Leave"],
    talk: [
      "She speaks plainly about discipline, watch rotations, and where the walls still make her nervous.",
      "She respects directness and gives a concise report on the streets nearest the barracks.",
    ],
    patrols: [
      { text: "She doubles a few watches after your conversation. The locals notice the sharper discipline.", unrest: -1, loyalty: 1 },
      { text: "She points out the weak alleys and promises to tighten patrols before nightfall.", unrest: -2 },
    ],
    morale: [
      { text: "She admits the troops needed to be seen and heard. Your attention steadies them.", loyalty: 1 },
      { text: "She has the soldiers drill harder before sunset. Readiness improves across the district.", loyalty: 1, prosperity: -0 },
    ],
    compliment: [
      "She hides the smile, but her posture softens immediately.",
      "She answers with a curt nod that still manages to feel pleased.",
    ],
    flirt: [
      "She warns you not to distract her on duty, but the edge in her voice is more playful than severe.",
      "She says nothing for a moment, then tells you where she will be posted after dark.",
    ],
  },
  {
    role: "Artisan",
    names: ["Fiona", "Iris", "Mira", "Rina", "Yana", "Lyla"],
    options: ["Talk", "Ask Rumors", "Commission Work", "Compliment", "Flirt", "Leave"],
    talk: [
      "She talks while working, measuring the province by tools, shortages, and what still needs repair.",
      "She notices practical details others ignore and tells you exactly which quarter is thriving and which is straining.",
    ],
    rumors: [
      "\"Repairs always reveal secrets,\" she says. \"You learn quickly who can pay, who delays, and who expects trouble.\"",
      "She mentions hidden orders for iron fittings and reinforced doors placed only days ago.",
    ],
    commission: [
      { text: "You fund a small commission, and skilled hands spread that your coin arrives on time.", treasury: -2, prosperity: 2 },
      { text: "She promises a better frontage and cleaner streets around the worksite. The quarter looks sharper within days.", treasury: -1, prosperity: 1, loyalty: 1 },
    ],
    compliment: [
      "She laughs, wipes her hands, and pretends not to enjoy the praise more than she should.",
      "She accepts the compliment with a raised brow and noticeably warmer tone.",
    ],
    flirt: [
      "She tests your nerve with a teasing reply and goes back to work just slowly enough to make a point.",
      "She says your attention is distracting, though she makes no effort to end the conversation.",
    ],
  },
];

    function capitalizeWord(word) {
      return word ? word[0].toUpperCase() + word.slice(1) : "";
    }

    function parseQueenStem(filename) {
      return filename.replace(/^queen_/, "").replace(/\.(jpg|jpeg|png|webp)$/i, "");
    }

    function themeForStem(stem) {
      if (/(azure|moon|sky|tide|tempest|prism)/.test(stem)) return "blue";
      if (/(verd|verde|hart|pearl|westwind)/.test(stem)) return "green";
      if (/(crimson|scarlet|ruby|ember|iron)/.test(stem)) return "red";
      if (/(violet|hex|velvet|rose)/.test(stem)) return "violet";
      if (/(gold|sunspire|ivory)/.test(stem)) return "gold";
      if (/(onyx|night|noctis|blackflame|sable|chain|steel)/.test(stem)) return "onyx";
      return "rose";
    }

    function archetypeForIndex(index) {
      const cycle = ["edict", "banner", "raid", "hex", "tithe", "storm"];
      return cycle[index % cycle.length];
    }

    function makeFactionShort(title, kingdom) {
      const src = `${title} ${kingdom}`.split(/\s+/).filter(Boolean);
      return src.slice(0, 2).map(word => word[0].toUpperCase()).join("");
    }

function reserveFactionFromFile(id, filename) {
      const stem = parseQueenStem(filename);
      const parts = stem.split("_");
      const name = capitalizeWord(parts[0]);
      const epithet = parts.slice(1).map(capitalizeWord).join(" ");
      const theme = themeForStem(stem);
      const archetype = archetypeForIndex(id);
      const kingdom = `${epithet} Court`;
      return {
        id,
        name: kingdom,
        short: makeFactionShort(name, kingdom),
        color: THEME_COLORS[theme] || "#7a6c5b",
        isHuman: false,
        leader: `Queen ${name}`,
        theme,
    portrait: filename,
    startActive: false,
    home: null,
    archetype,
    personality: fallbackPersonality(id),
  };
}

const BASE_FACTIONS = [
  { id: 0, name: "Verdant Crown", short: "VC", color: "#2f7d4d", isHuman: true, leader: "Queen Elara", theme: "green", portrait: "queen_elara_verdantia.jpg", startActive: true, home: { q: 4, r: 4 }, archetype: "edict", personality: "Diplomat" },
  { id: 1, name: "Crimson Dominion", short: "CD", color: "#b03a2e", isHuman: false, leader: "Queen Rhea", theme: "red", portrait: "queen_rhea_crimson.jpg", startActive: true, home: { q: mapW - 5, r: 4 }, archetype: "banner", personality: "Aggressive" },
  { id: 2, name: "Azure Covenant", short: "AC", color: "#2f5597", isHuman: false, leader: "Queen Selene", theme: "blue", portrait: "queen_selene_azure.jpg", startActive: true, home: { q: 4, r: mapH - 5 }, archetype: "raid", personality: "Opportunist" },
  { id: 3, name: "Violet Throne", short: "VT", color: "#7a4bb8", isHuman: false, leader: "Queen Morwen", theme: "violet", portrait: "queen_morwen_violet.jpg", startActive: true, home: { q: mapW - 5, r: mapH - 5 }, archetype: "hex", personality: "Rebel-maker" },
  { id: 4, name: "Golden March", short: "GM", color: "#b08a2e", isHuman: false, leader: "Queen Isolde", theme: "gold", portrait: "queen_isolde_gold.jpg", startActive: true, home: { q: Math.floor(mapW / 2), r: 3 }, archetype: "tithe", personality: "Defensive" },
  { id: 5, name: "Onyx Shogunate", short: "OS", color: "#44656d", isHuman: false, leader: "Queen Kaida", theme: "onyx", portrait: "queen_kaida_onyx.jpg", startActive: true, home: { q: Math.floor(mapW / 2), r: mapH - 4 }, archetype: "storm", personality: "Swarm-expander" },
];

    const FACTIONS = [
      ...BASE_FACTIONS,
      ...QUEEN_FILES.slice(6).map((filename, index) => reserveFactionFromFile(index + 6, filename)),
    ];

    const QUEEN_POWERS = Object.fromEntries(
      FACTIONS.map((faction) => {
        const base = QUEEN_ARCHETYPES[faction.archetype];
        return [faction.id, {
          title: faction.leader,
          abilityType: faction.archetype,
          powerName: base.powerName,
          summary: base.summary,
          unitName: base.unitName,
          unitFightBonus: base.unitFightBonus,
          unitServeBonus: base.unitServeBonus,
        }];
      })
    );

    const NEUTRAL = -1;
    const HEX_ASSET_BASE = "assets/hexempire_images/";
    const QUEEN_PORTRAITS = Object.fromEntries(
      FACTIONS.map((faction) => [faction.id, `Queens/${faction.portrait}`])
    );

    const canvas = document.getElementById("board");
    const boardWrapEl = document.getElementById("boardWrap");
    const ctx = canvas.getContext("2d");
    const turnInfo = document.getElementById("turnInfo");
    const tabOverviewBtn = document.getElementById("tabOverviewBtn");
    const tabLeadersBtn = document.getElementById("tabLeadersBtn");
    const tabDiplomacyBtn = document.getElementById("tabDiplomacyBtn");
    const tabHaremBtn = document.getElementById("tabHaremBtn");
    const tabGovernmentBtn = document.getElementById("tabGovernmentBtn");
    const tabUnderworldBtn = document.getElementById("tabUnderworldBtn");
    const tabDevBtn = document.getElementById("tabDevBtn");
    const sendModeBtn = document.getElementById("sendModeBtn");
    const autoTurnBtn = document.getElementById("autoTurnBtn");
    const resistanceBtn = document.getElementById("resistanceBtn");
    const saveGameBtn = document.getElementById("saveGameBtn");
    const loadGameBtn = document.getElementById("loadGameBtn");
    const endTurnBtn = document.getElementById("endTurnBtn");
    const restartBtn = document.getElementById("restartBtn");
    const startGameBtn = document.getElementById("startGameBtn");
    const continueGameBtn = document.getElementById("continueGameBtn");
    const menuMusicBtn = document.getElementById("menuMusicBtn");
    const menuMuteBtn = document.getElementById("menuMuteBtn");
    const audioMuteBtn = document.getElementById("audioMuteBtn");
    const audioVolumeRange = document.getElementById("audioVolumeRange");
    const menuVolumeRange = document.getElementById("menuVolumeRange");
    const bootOverlayEl = document.getElementById("bootOverlay");
    const menuBlockEl = document.getElementById("menuBlock");
    const loadingBlockEl = document.getElementById("loadingBlock");
    const loadingTextEl = document.getElementById("loadingText");
    const loadingFillEl = document.getElementById("loadingFill");
    const menuMusicEl = document.getElementById("menuMusic");
    const dayAmbienceEl = document.getElementById("dayAmbience");
    const nightAmbienceEl = document.getElementById("nightAmbience");
    const rainAmbienceEl = document.getElementById("rainAmbience");
    const bloodMoonAmbienceEl = document.getElementById("bloodMoonAmbience");
    const logEl = document.getElementById("log");
    const saveStatusEl = document.getElementById("saveStatus");
    const leaderStatusEl = document.getElementById("leaderStatus");
    const diplomacyPanelEl = document.getElementById("diplomacyPanel");
    const haremPanelEl = document.getElementById("haremPanel");
    const underworldPanelEl = document.getElementById("underworldPanel");
    const devPanelEl = document.getElementById("devPanel");
    const eventPanelEl = document.getElementById("eventPanel");
    const selectedTilePanelEl = document.getElementById("selectedTilePanel");
    const tilePanelEl = document.getElementById("tilePanel");
    const overviewTabEl = document.getElementById("overviewTab");
    const leadersTabEl = document.getElementById("leadersTab");
    const diplomacyTabEl = document.getElementById("diplomacyTab");
    const haremTabEl = document.getElementById("haremTab");
    const governmentTabEl = document.getElementById("governmentTab");
    const underworldTabEl = document.getElementById("underworldTab");
    const devTabEl = document.getElementById("devTab");
    const eventTabEl = document.getElementById("eventTab");
    const governmentPanelEl = document.getElementById("governmentPanel");
    const tileTabEl = document.getElementById("tileTab");
    const modalOverlayEl = document.getElementById("modalOverlay");
    const modalWindowEl = modalOverlayEl.querySelector(".modal-window");
    const modalBodyEl = modalOverlayEl.querySelector(".modal-body");
    const modalCloseBtn = document.getElementById("modalCloseBtn");
    const modalTitleEl = document.getElementById("modalTitle");
    const mirroredTabButtons = Array.from(document.querySelectorAll("[data-mirror]"));
    const endingOverlayEl = document.getElementById("endingOverlay");
    const endingTitleEl = document.getElementById("endingTitle");
    const endingSummaryEl = document.getElementById("endingSummary");
    const endingCloseBtn = document.getElementById("endingCloseBtn");

    let tiles = [];
    let selectedTile = null;
    let currentFactionIndex = 0;
    let round = 1;
    let gameOver = false;
    let leaderState = {};
    let capturedQueens = [];
    let queenUsedThisTurn = false;
    let pendingQueenFaction = null;
    let queenState = {};
    let queenUnits = [];
    let pendingUnitQueenFaction = null;
    let nextUnitId = 1;
    let humanMovesRemaining = HUMAN_MOVES_PER_TURN;
    let queenPortraits = {};
    let activeMenuTab = "overview";
    let eventQueue = [];
    let diplomacyTurnNumber = 0;
    let gameBooted = false;
    let loadingFromSave = false;
    let gameMode = "conquest";
    let overlordQueenId = null;
    let lastSaveMeta = null;
    let endingShown = false;
    let campaignStats = {
      factionsCollapsed: 0,
      autosaves: 0,
      lastSaveAt: null,
    };
    let treasury = 24;
    let developerState = {
      enabled: false,
      selectedQueenFaction: 0,
      sceneDraft: null,
      sceneHistory: [],
      freeEdit: false,
    };
    let worldRelations = {};
    let tileSceneState = null;
    let provinceKeys = {};
    let provinceSceneFrame = null;
    let audioSettings = {
      volume: 0.55,
      muted: false,
      ambienceEnabled: true,
      activeTrack: "menu",
      lastResolvedTrack: "menu",
    };
    let resistanceState = {
      built: false,
      strength: 0,
      exposure: 0,
      devotion: 0,
      vowed: false,
      currentTask: null,
      turnCaptures: 0,
      turnAudience: 0,
      turnDevotionStart: 0,
      turnCapitalTroopsStart: 0,
    };
    let localAiSettings = {
      model: "llama3.2:3b",
      endpoint: "http://127.0.0.1:11434/api/chat",
      temperature: 0.9,
      maxHistory: 6,
    };
    let queenChatSessions = {};
    let sendModeIndex = 1;
    let hoveredTile = null;
    let inspectedTile = null;
    let moveAnimation = null;
    let boardScale = 1;
    const MIN_BOARD_SCALE = 0.6;
    const MAX_BOARD_SCALE = 2.2;
    let isDraggingBoard = false;
    let dragMoved = false;
    let dragStartX = 0;
    let dragStartY = 0;
    let dragStartScrollLeft = 0;
    let dragStartScrollTop = 0;
    let dragPointerId = null;
    let dragLastX = 0;
    let dragLastY = 0;
    let dragOriginX = 0;
    let dragOriginY = 0;
    let dragArmed = false;
    let dragHoldTimer = null;
    let visualTick = 0;
    let dayNightPhase = 0.18;
    let dayNightTimer = null;
    let weatherState = {
      kind: "clear",
      timer: 0,
      wind: 0.18,
      cloudSeed: 0,
      fronts: [],
      bloodMoon: false,
      bloodMoonCheckedNight: -1,
    };
    let landBackdropCanvas = null;
    let oceanBackdropCanvas = null;
    let staticBoardCanvas = null;
    let boardRenderQueued = false;
    let boardOriginX = 0;
    let boardOriginY = 0;
    const tileIndex = new Map();
    const armySpriteCache = {};
    const HEX_DIRS = [
      [1, 0], [1, -1], [0, -1],
      [-1, 0], [-1, 1], [0, 1],
    ];
    const hexAssets = {
      l: {},
      ld: {},
      c: {},
      cd: {},
      m: {},
      mp: {},
      capital: {},
      city: null,
      port: null,
    };

    function tileKey(q, r) {
      return `${q},${r}`;
    }

    function invalidateStaticBoardCache() {
      staticBoardCanvas = null;
    }

    function setLoadingProgress(percent, text) {
      loadingFillEl.style.width = `${Math.max(0, Math.min(100, percent))}%`;
      loadingTextEl.textContent = text;
    }

    function waitForImage(img) {
      return new Promise((resolve) => {
        if (!img) {
          resolve();
          return;
        }
        if (img.complete && img.naturalWidth !== 0) {
          resolve();
          return;
        }
        const done = () => resolve();
        img.addEventListener("load", done, { once: true });
        img.addEventListener("error", done, { once: true });
      });
    }

    function preloadImageSrc(src) {
      return new Promise((resolve) => {
        const img = new Image();
        const done = () => resolve();
        img.addEventListener("load", done, { once: true });
        img.addEventListener("error", done, { once: true });
        img.src = src;
      });
    }

    async function preloadGameAssets() {
      loadHexAssets();
      const mapImages = [];
      for (const bucket of [hexAssets.l, hexAssets.ld, hexAssets.c, hexAssets.cd, hexAssets.m, hexAssets.mp, hexAssets.capital]) {
        for (const img of Object.values(bucket)) mapImages.push(img);
      }
      mapImages.push(hexAssets.city, hexAssets.port);
      const portraitSources = Object.values(QUEEN_PORTRAITS);
      const ambienceTracks = [menuMusicEl, dayAmbienceEl, nightAmbienceEl, rainAmbienceEl, bloodMoonAmbienceEl];
      const total = mapImages.length + portraitSources.length + ambienceTracks.length + 3;
      let done = 0;
      const step = (label) => {
        done += 1;
        setLoadingProgress((done / total) * 100, label);
      };

      setLoadingProgress(3, "Summoning map art...");
      await Promise.all(mapImages.map(async (img) => {
        await waitForImage(img);
        step("Summoning map art...");
      }));

      await Promise.all(portraitSources.map(async (src) => {
        await preloadImageSrc(src);
        step("Gathering queen portraits...");
      }));

      await Promise.all(ambienceTracks.map((audio) => new Promise((resolve) => {
        const doneAudio = () => {
          audio.removeEventListener("canplaythrough", doneAudio);
          audio.removeEventListener("error", doneAudio);
          step("Tuning the court musicians...");
          resolve();
        };
        if (audio.readyState >= 4) {
          doneAudio();
          return;
        }
        audio.addEventListener("canplaythrough", doneAudio);
        audio.addEventListener("error", doneAudio);
        audio.load();
      })));

      await new Promise((resolve) => {
        setLoadingProgress(92, "Raising the realm...");
        setTimeout(() => {
          buildMap();
          step("Raising the realm...");
          resolve();
        }, 20);
      });

      ensureStaticBoardCanvas();
      step("Lighting the world...");
      setLoadingProgress(100, "The realm is ready.");
    }

    function beginDayNightCycle() {
      if (dayNightTimer) clearInterval(dayNightTimer);
      dayNightTimer = setInterval(() => {
        if (!gameBooted) return;
        visualTick += 1;
        dayNightPhase = (dayNightPhase + 0.0012) % 1;
        advanceWeather();
        syncAmbienceTrack();
        scheduleBoardRender();
      }, 900);
    }

    function factionById(id) {
      const base = FACTIONS.find(f => f.id === id);
      if (!base) return null;
      const state = leaderState[id];
      if (!state) return base;
      return {
        ...base,
        name: state.regimeName || base.name,
        short: state.regimeShort || base.short,
      };
    }

    function playerFactionId() {
      return gameMode === "servitude" && overlordQueenId !== null ? overlordQueenId : 0;
    }

    function isPlayerControlledFaction(factionId) {
      return factionId === playerFactionId();
    }

    function queenEntry(queenFaction) {
      if (!queenState[queenFaction]) {
        queenState[queenFaction] = {
          morale: 55,
          assignment: "court",
          refusedThisTurn: false,
          tendUsedThisTurn: false,
          intimacyUsedThisTurn: false,
          giftUsedThisTurn: false,
          confideUsedThisTurn: false,
          trust: 0,
          hate: 0,
          romance: 0,
          attraction: 0,
          fear: 0,
          treaty: "none",
          trade: false,
          lastTalkTurn: -1,
          lastRequestTurn: -1,
          lastTradeTurn: -1,
          lastFlirtTurn: -1,
          lastAffairTurn: -1,
          lastSecretOfferTurn: -1,
          lastTreatyTurn: -1,
          lastMarriageTurn: -1,
          talkAffinity: 0,
          flirtAffinity: 0,
          joinOfferPending: false,
          affair: false,
          affairLevel: 0,
          affairOfferPending: false,
          elopeOfferPending: false,
          underworldAssigned: false,
          underworldUsedThisTurn: false,
          underworldRomanceUsedThisTurn: false,
          lastUnderworldAidTurn: -1,
          lastUnderworldRomanceTurn: -1,
          lastUnderworldRiseTurn: -1,
          underworldRiseSupport: 0,
          lastAudienceTurn: -1,
          overlordClaimed: false,
          forbiddenThisTurn: false,
          summonedThisTurn: false,
          pregnant: false,
          pregnancyStartRound: -1,
          pregnancyDueRound: -1,
          pregnancyOrigin: null,
          children: 0,
        };
      }
      const state = queenState[queenFaction];
      if (capturedQueens.includes(queenFaction)) {
        // Harem queens start at max affection
        state.trust = Math.max(state.trust, 100);
        state.romance = Math.max(state.romance, 100);
        state.attraction = Math.max(state.attraction, 100);
        state.hate = Math.min(state.hate, 0);
        state.fear = Math.min(state.fear, 0);
      }
      return state;
    }

    function pregnancyStatusLabel(queenFaction) {
      const st = queenEntry(queenFaction);
      if (!st.pregnant) return st.children > 0 ? `Children ${st.children}` : "No Heir";
      const turnsLeft = Math.max(0, st.pregnancyDueRound - round);
      if (turnsLeft <= 1) return `Late Pregnancy • Heirs ${st.children}`;
      if (turnsLeft === 2) return `Pregnant • Mid Term • Heirs ${st.children}`;
      return `Pregnant • Early Term • Heirs ${st.children}`;
    }

    function tryPlayerPregnancy(queenFaction, sourceLabel, intensity = 1) {
      const st = queenEntry(queenFaction);
      if (st.pregnant) return false;
      const chance = Math.min(
        0.62,
        0.09 +
        intensity * 0.08 +
        Math.max(0, st.romance) / 260 +
        Math.max(0, st.attraction) / 240 +
        Math.max(0, st.trust) / 420
      );
      if (Math.random() > chance) return false;
      st.pregnant = true;
      st.pregnancyStartRound = round;
      st.pregnancyDueRound = round + 3 + Math.floor(Math.random() * 2);
      st.pregnancyOrigin = sourceLabel;
      st.romance = Math.min(100, st.romance + 4);
      st.trust = Math.min(100, st.trust + 3);
      const queen = QUEEN_POWERS[queenFaction];
      if (capturedQueens.includes(queenFaction)) {
        queueEventModal({
          label: "Pregnancy",
          title: `${queen.title} Carries Your Child`,
          body: `${queen.title} realizes that your recent intimacy has left her pregnant.\n\nThe pregnancy will progress over the coming rounds, and the child may deepen her attachment to your court.`,
          portrait: queenPortraits[queenFaction] || QUEEN_PORTRAITS[queenFaction],
          cta: "Continue",
        });
      } else {
        queueDiplomacyReaction(
          queenFaction,
          `${factionById(queenFaction).leader} Carries Your Child`,
          "Secret Pregnancy",
          `${factionById(queenFaction).leader} discovers that one of your private encounters has left her pregnant. The secret changes the stakes between you immediately.`
        );
      }
      addLog(`${queen.title} becomes pregnant after ${sourceLabel.toLowerCase()}.`);
      return true;
    }

    function resolvePregnancies() {
      for (const faction of FACTIONS) {
        const st = queenState[faction.id];
        if (!st || !st.pregnant || st.pregnancyDueRound > round) continue;
        st.pregnant = false;
        st.pregnancyStartRound = -1;
        st.pregnancyDueRound = -1;
        st.pregnancyOrigin = null;
        st.children = (st.children || 0) + 1;
        st.romance = Math.min(100, st.romance + 6);
        st.trust = Math.min(100, st.trust + 5);
        const queen = QUEEN_POWERS[faction.id];
        if (capturedQueens.includes(faction.id)) {
          st.morale = Math.min(100, st.morale + 10);
          queueEventModal({
            label: "Birth",
            title: `${queen.title} Gives Birth`,
            body: `${queen.title} gives birth to your child in your court.\n\nA new heir now binds her more tightly to you, and the birth sends ripples through the harem.`,
            portrait: queenPortraits[faction.id] || QUEEN_PORTRAITS[faction.id],
            cta: "Acknowledge The Heir",
          });
        } else {
          st.affair = true;
          queueDiplomacyReaction(
            faction.id,
            `${factionById(faction.id).leader} Bears Your Child`,
            "Hidden Heir",
            `${factionById(faction.id).leader} gives birth to your child beyond the public eye. Whether it becomes leverage, loyalty, or scandal depends on how your bond evolves.`
          );
        }
        addLog(`${queen.title} gives birth to your child.`);
      }
      resolveDuchessPregnancies();
    }

    function developerQueenOptions() {
      return capturedQueens
        .filter((id) => QUEEN_POWERS[id])
        .map((id) => ({ id, title: QUEEN_POWERS[id].title }));
    }

    function defaultSceneDraft(queenFaction = developerState.selectedQueenFaction || capturedQueens[0] || 0) {
      const queen = QUEEN_POWERS[queenFaction] || QUEEN_POWERS[0];
      return {
        queenFaction,
        title: `Private Time With ${queen.title}`,
        summary: `${queen.title} requests a quieter audience beyond the war room.\n\nUse this scene draft to prototype intimacy branches, rewards, and future narrative beats.`,
        optionA: "Tender Night",
        optionAText: "A slow, affectionate scene that builds trust and emotional intimacy.",
        optionAMorale: 8,
        optionATrust: 6,
        optionARomance: 7,
        optionAAttraction: 4,
        optionB: "Hungry Encounter",
        optionBText: "A sharper, more dangerous scene that spikes attraction and passion.",
        optionBMorale: 4,
        optionBTrust: 2,
        optionBRomance: 4,
        optionBAttraction: 9,
        aftercare: "The queen leaves the chamber changed, and the next branch can build from the consequences recorded here.",
      };
    }

    function ensureSceneDraft(queenFaction = developerState.selectedQueenFaction || capturedQueens[0] || 0) {
      if (!developerState.sceneDraft) {
        developerState.sceneDraft = defaultSceneDraft(queenFaction);
      }
      if (developerState.sceneDraft.queenFaction === undefined || developerState.sceneDraft.queenFaction === null) {
        developerState.sceneDraft.queenFaction = queenFaction;
      }
      return developerState.sceneDraft;
    }

    function setMenuTab(tabName) {
      activeMenuTab = tabName;
      if (tabName === "leaders" || tabName === "diplomacy" || tabName === "harem" || tabName === "government" || tabName === "underworld" || tabName === "dev" || tabName === "event" || tabName === "tile") {
        modalOverlayEl.classList.add("open");
        modalOverlayEl.classList.toggle("event-mode", tabName === "event");
        modalWindowEl.classList.toggle("event-mode", tabName === "event");
        modalBodyEl.classList.toggle("event-mode", tabName === "event");
        leadersTabEl.classList.toggle("active", tabName === "leaders");
        diplomacyTabEl.classList.toggle("active", tabName === "diplomacy");
        haremTabEl.classList.toggle("active", tabName === "harem");
        governmentTabEl.classList.toggle("active", tabName === "government");
        underworldTabEl.classList.toggle("active", tabName === "underworld");
        devTabEl.classList.toggle("active", tabName === "dev");
        eventTabEl.classList.toggle("active", tabName === "event");
        tileTabEl.classList.toggle("active", tabName === "tile");
        modalTitleEl.textContent =
          tabName === "leaders" ? "Enemy Leaders" :
          tabName === "diplomacy" ? "Diplomacy" :
          tabName === "harem" ? "Harem Management" :
          tabName === "government" ? "Government Management" :
          tabName === "underworld" ? "Criminal Underworld" :
          tabName === "dev" ? "Developer Mode" :
          tabName === "tile" ? "Tile Interior" :
          "Major Event";
        modalCloseBtn.textContent = tabName === "event" ? "Continue" : "Close";
        if (tabName === "leaders") renderLeaderPanel();
        if (tabName === "diplomacy") renderDiplomacyPanel();
        if (tabName === "harem") renderHaremPanel();
        if (tabName === "government") renderGovernmentPanel();
        if (tabName === "underworld") renderUnderworldPanel();
        if (tabName === "dev") renderDevPanel();
        if (tabName === "event") renderEventPanel();
        if (tabName === "tile") renderTilePanel();
      } else {
        modalOverlayEl.classList.remove("open");
        modalOverlayEl.classList.remove("event-mode");
        modalWindowEl.classList.remove("event-mode");
        modalBodyEl.classList.remove("event-mode");
        modalOverlayEl.classList.remove("blackout-event");
        modalWindowEl.classList.remove("blackout-event");
        modalBodyEl.classList.remove("blackout-event");
        modalWindowEl.classList.remove("wide-event");
        modalBodyEl.classList.remove("wide-event");
        leadersTabEl.classList.remove("active");
        diplomacyTabEl.classList.remove("active");
        haremTabEl.classList.remove("active");
        underworldTabEl.classList.remove("active");
        devTabEl.classList.remove("active");
        eventTabEl.classList.remove("active");
        tileTabEl.classList.remove("active");
        modalCloseBtn.textContent = "Close";
      }
      overviewTabEl.classList.add("active");
      tabOverviewBtn.classList.toggle("active-tab", tabName === "overview");
      tabLeadersBtn.classList.toggle("active-tab", tabName === "leaders");
      tabDiplomacyBtn.classList.toggle("active-tab", tabName === "diplomacy");
      tabHaremBtn.classList.toggle("active-tab", tabName === "harem");
      tabGovernmentBtn.classList.toggle("active-tab", tabName === "government");
      tabUnderworldBtn.classList.toggle("active-tab", tabName === "underworld");
      tabDevBtn.classList.toggle("active-tab", tabName === "dev");
    }

    function loadImage(src) {
      const img = new Image();
      img.src = src;
      return img;
    }

    function loadHexAssets() {
      for (let i = 1; i <= 6; i++) {
        hexAssets.l[i] = loadImage(`${HEX_ASSET_BASE}l_${i}.png`);
        hexAssets.ld[i] = loadImage(`${HEX_ASSET_BASE}ld_${i}.png`);
        hexAssets.c[i] = loadImage(`${HEX_ASSET_BASE}c_${i}.png`);
        hexAssets.cd[i] = loadImage(`${HEX_ASSET_BASE}cd_${i}.png`);
        hexAssets.m[i] = loadImage(`${HEX_ASSET_BASE}m_${i}.png`);
      }
      hexAssets.mp[1] = loadImage(`${HEX_ASSET_BASE}m_p1.png`);
      hexAssets.mp[2] = loadImage(`${HEX_ASSET_BASE}m_p2.png`);
      hexAssets.capital.green = loadImage(`${HEX_ASSET_BASE}capital_green.png`);
      hexAssets.capital.red = loadImage(`${HEX_ASSET_BASE}capital_red.png`);
      hexAssets.capital.blue = loadImage(`${HEX_ASSET_BASE}capital_blue.png`);
      hexAssets.capital.violet = loadImage(`${HEX_ASSET_BASE}capital_violet.png`);
      hexAssets.city = loadImage(`${HEX_ASSET_BASE}city.png`);
      hexAssets.port = loadImage(`${HEX_ASSET_BASE}port.png`);

      for (const bucket of [hexAssets.l, hexAssets.ld, hexAssets.c, hexAssets.cd, hexAssets.m, hexAssets.mp]) {
        for (const img of Object.values(bucket)) {
          if (img) img.onload = () => {
            buildTerrainBackdrops();
            invalidateStaticBoardCache();
            render();
          };
        }
      }
      for (const img of [hexAssets.capital.green, hexAssets.capital.red, hexAssets.capital.blue, hexAssets.capital.violet, hexAssets.city, hexAssets.port]) {
        if (img) img.onload = () => {
          buildTerrainBackdrops();
          invalidateStaticBoardCache();
          render();
        };
      }
    }

    async function startCampaignFromMenu(loadExisting = false) {
      if (gameBooted) return;
      startGameBtn.disabled = true;
      if (continueGameBtn) continueGameBtn.disabled = true;
      menuMusicBtn.disabled = true;
      menuBlockEl.classList.add("boot-hidden");
      loadingBlockEl.classList.add("active");
      try {
        await menuMusicEl.play().catch(() => {});
        await preloadGameAssets();
        if (loadExisting && lastSaveMeta?.state) {
          hydrateState(lastSaveMeta.state);
          updateSaveStatus(`Loaded campaign from ${formatTimestamp(lastSaveMeta.savedAt)}.`, "ok");
        }
        gameBooted = true;
        beginDayNightCycle();
        menuMusicEl.pause();
        menuMusicEl.currentTime = 0;
        syncAmbienceTrack();
        bootOverlayEl.classList.add("boot-hidden");
      } catch (err) {
        console.error(err);
        setLoadingProgress(100, "Loading failed. Refresh and try again.");
        startGameBtn.disabled = false;
        if (continueGameBtn) continueGameBtn.disabled = false;
        menuMusicBtn.disabled = false;
        menuBlockEl.classList.remove("boot-hidden");
        loadingBlockEl.classList.remove("active");
      }
    }

    function toggleMenuMusic() {
      audioSettings.ambienceEnabled = !audioSettings.ambienceEnabled;
      if (audioSettings.ambienceEnabled) {
        syncAmbienceTrack();
      } else {
        stopAllAmbience();
      }
      updateAmbienceButtonLabel();
    }

    function allAmbienceTracks() {
      return [menuMusicEl, dayAmbienceEl, nightAmbienceEl, rainAmbienceEl, bloodMoonAmbienceEl];
    }

    function stopAllAmbience(except = null) {
      for (const track of allAmbienceTracks()) {
        if (!track || track === except) continue;
        track.pause();
        if (track !== menuMusicEl) track.currentTime = 0;
      }
    }

    function activeAmbienceTrackInfo() {
      if (!gameBooted) return { key: "menu", el: menuMusicEl, label: "Theme" };
      if (weatherState.bloodMoon && isNightTime()) return { key: "bloodMoon", el: bloodMoonAmbienceEl, label: "Blood Moon" };
      if (weatherState.kind === "rain") return { key: "rain", el: rainAmbienceEl, label: "Rain" };
      if (isNightTime()) return { key: "night", el: nightAmbienceEl, label: "Night" };
      return { key: "day", el: dayAmbienceEl, label: "Day" };
    }

    function tryPlayTrack(track) {
      if (!track) return;
      const promise = track.play();
      if (promise && typeof promise.catch === "function") {
        promise.catch(() => {});
      }
    }

    function updateAmbienceButtonLabel() {
      const info = activeAmbienceTrackInfo();
      menuMusicBtn.textContent = audioSettings.ambienceEnabled
        ? `Mute ${info.label}`
        : `Play ${info.label}`;
    }

    function syncAmbienceTrack() {
      applyAudioSettings();
      const info = activeAmbienceTrackInfo();
      audioSettings.activeTrack = info.key;
      if (!audioSettings.ambienceEnabled || audioSettings.muted) {
        stopAllAmbience();
        audioSettings.lastResolvedTrack = "none";
        updateAmbienceButtonLabel();
        return;
      }
      const changed = audioSettings.lastResolvedTrack !== info.key;
      stopAllAmbience(info.el);
      if (info.el && (info.el.paused || changed)) {
        if (changed && info.el !== menuMusicEl) info.el.currentTime = 0;
        tryPlayTrack(info.el);
      }
      audioSettings.lastResolvedTrack = info.key;
      updateAmbienceButtonLabel();
    }

    function isNightTime() {
      return dayNightPhase >= 0.58;
    }

    function weatherPalette(kind) {
      const night = isNightTime();
      if (kind === "cloudy") return {
        alpha: 0.22,
        shade: night ? "rgba(186,198,226,0.88)" : "rgba(255,255,255,0.92)",
        mist: 0.04,
        rain: 0,
      };
      if (kind === "mist") return {
        alpha: 0.16,
        shade: night ? "rgba(202,214,238,0.8)" : "rgba(245,250,255,0.86)",
        mist: 0.1,
        rain: 0,
      };
      if (kind === "rain") return {
        alpha: 0.26,
        shade: night ? "rgba(188,202,232,0.9)" : "rgba(232,240,248,0.9)",
        mist: 0.08,
        rain: 0.18,
      };
      return {
        alpha: 0.1,
        shade: night ? "rgba(236,244,255,0.78)" : "rgba(255,255,255,0.84)",
        mist: 0.02,
        rain: 0,
      };
    }

    function seedWeatherFronts() {
      const count = Math.max(5, Math.floor((canvas.width + canvas.height) / 320));
      weatherState.fronts = [];
      for (let i = 0; i < count; i++) {
        const rx = 56 + ((i * 19) % 52);
        const ry = 20 + ((i * 11) % 18);
        const puffCount = 4 + (i % 4);
        const puffs = [];
        for (let p = 0; p < puffCount; p++) {
          puffs.push({
            ox: ((p * 31 + i * 9) % Math.max(18, Math.floor(rx * 1.25))) - rx * 0.62,
            oy: ((p * 17 + i * 7) % Math.max(10, Math.floor(ry * 0.9))) - ry * 0.42,
            rx: rx * (0.24 + ((p * 11 + i * 3) % 18) / 100),
            ry: ry * (0.48 + ((p * 13 + i * 5) % 20) / 100),
            alpha: 0.72 + ((p * 7 + i * 5) % 18) / 100,
          });
        }
        weatherState.fronts.push({
          x: ((i * 173 + 97) % Math.max(canvas.width, 1)),
          y: ((i * 127 + 41) % Math.max(canvas.height, 1)),
          rx,
          ry,
          speed: weatherState.wind + ((i % 4) * 0.03),
          wobble: (i * 0.7) % (Math.PI * 2),
          depth: 0.65 + ((i * 13) % 25) / 100,
          puffs,
        });
      }
    }

    function randomizeWeather(force = false) {
      if (!force && weatherState.timer > 0) return;
      const kinds = ["clear", "cloudy", "mist", "rain"];
      const weights = weatherState.kind === "rain"
        ? [0.4, 0.28, 0.18, 0.14]
        : [0.34, 0.34, 0.18, 0.14];
      const roll = Math.random();
      let cursor = 0;
      let chosen = "clear";
      for (let i = 0; i < kinds.length; i++) {
        cursor += weights[i];
        if (roll <= cursor) {
          chosen = kinds[i];
          break;
        }
      }
      weatherState.kind = chosen;
      weatherState.timer = randomBetween(18, 42);
      weatherState.wind = randomBetween(0.12, chosen === "rain" ? 0.4 : 0.28);
      weatherState.cloudSeed = Math.random() * Math.PI * 2;
      if (chosen === "rain") weatherState.bloodMoon = false;
      seedWeatherFronts();
      syncAmbienceTrack();
    }

    function advanceWeather() {
      if (!weatherState.fronts.length && canvas.width && canvas.height) {
        randomizeWeather(true);
      }
      weatherState.timer -= 1;
      if (weatherState.timer <= 0) {
        randomizeWeather(true);
      }
      if (isNightTime()) {
        if (weatherState.bloodMoonCheckedNight !== round) {
          weatherState.bloodMoonCheckedNight = round;
          weatherState.bloodMoon = weatherState.kind !== "rain" && Math.random() < 0.1;
          syncAmbienceTrack();
        }
      } else if (weatherState.bloodMoon) {
        weatherState.bloodMoon = false;
        syncAmbienceTrack();
      }
      for (const front of weatherState.fronts) {
        front.x += front.speed * front.depth * 8;
        front.y += Math.sin(visualTick * 0.015 + front.wobble) * 0.18;
        if (front.x - front.rx > canvas.width + 24) {
          front.x = -front.rx - randomBetween(12, 80);
          front.y = randomBetween(0, canvas.height);
        }
      }
    }

    function drawWeatherOverlay() {
      const palette = weatherPalette(weatherState.kind);
      if (!weatherState.fronts.length) return;

      ctx.save();
      for (const front of weatherState.fronts) {
        const driftY = Math.sin(visualTick * 0.012 + front.wobble) * 4;
        const baseAlpha = palette.alpha * front.depth;

        ctx.save();
        ctx.shadowColor = `rgba(84, 98, 118, ${Math.min(0.18, baseAlpha * 0.85)})`;
        ctx.shadowBlur = 14;
        ctx.shadowOffsetY = 6;

        for (const puff of front.puffs || []) {
          const px = front.x + puff.ox;
          const py = front.y + driftY + puff.oy;
          const night = isNightTime();
        const grad = ctx.createRadialGradient(
            px - puff.rx * 0.18,
            py - puff.ry * 0.34,
            puff.rx * 0.08,
            px,
            py,
            puff.rx
          );
          grad.addColorStop(0, night
            ? `rgba(220,230,255,${Math.min(0.9, baseAlpha * 1.5 * puff.alpha)})`
            : `rgba(255,255,255,${Math.min(0.9, baseAlpha * 1.7 * puff.alpha)})`);
          grad.addColorStop(0.45, night
            ? `rgba(190,204,232,${Math.min(0.72, baseAlpha * 1.1 * puff.alpha)})`
            : `rgba(244,248,252,${Math.min(0.72, baseAlpha * 1.1 * puff.alpha)})`);
          grad.addColorStop(0.8, night
            ? `rgba(142,156,184,${Math.min(0.34, baseAlpha * 0.7)})`
            : `rgba(210,220,232,${Math.min(0.34, baseAlpha * 0.7)})`);
          grad.addColorStop(1, "rgba(255,255,255,0)");
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.ellipse(px, py, puff.rx, puff.ry, Math.sin(front.wobble) * 0.08, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.shadowBlur = 0;
        ctx.shadowOffsetY = 0;

        const underside = ctx.createLinearGradient(
          front.x,
          front.y - front.ry * 0.4,
          front.x,
          front.y + front.ry * 1.2
        );
        underside.addColorStop(0, `rgba(255,255,255,0)`);
        underside.addColorStop(0.55, `rgba(198,210,224,${Math.min(0.16, baseAlpha * 0.7)})`);
        underside.addColorStop(1, `rgba(146,160,178,${Math.min(0.13, baseAlpha * 0.9)})`);
        ctx.fillStyle = underside;
        ctx.beginPath();
        ctx.ellipse(front.x, front.y + driftY + front.ry * 0.18, front.rx * 0.88, front.ry * 0.92, 0, 0, Math.PI * 2);
        ctx.fill();

        const highlight = ctx.createLinearGradient(
          front.x,
          front.y - front.ry,
          front.x,
          front.y
        );
        highlight.addColorStop(0, `rgba(255,255,255,${Math.min(0.22, baseAlpha * 0.95)})`);
        highlight.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = highlight;
        ctx.beginPath();
        ctx.ellipse(front.x - front.rx * 0.08, front.y + driftY - front.ry * 0.12, front.rx * 0.68, front.ry * 0.5, -0.04, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      ctx.restore();

      if (palette.mist > 0) {
        const mist = ctx.createLinearGradient(0, 0, 0, canvas.height);
        mist.addColorStop(0, `rgba(220,230,242,${palette.mist * 0.28})`);
        mist.addColorStop(0.4, `rgba(240,246,252,${palette.mist})`);
        mist.addColorStop(1, `rgba(216,226,236,${palette.mist * 0.5})`);
        ctx.fillStyle = mist;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      if (palette.rain > 0) {
        ctx.save();
        ctx.strokeStyle = `rgba(206,224,244,${palette.rain})`;
        ctx.lineWidth = 1;
        for (let i = 0; i < 70; i++) {
          const x = ((i * 97 + visualTick * 13) % (canvas.width + 80)) - 40;
          const y = ((i * 59 + visualTick * 17) % (canvas.height + 90)) - 45;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x - 8, y + 18);
          ctx.stroke();
        }
        ctx.restore();
      }
    }

    function applyAudioSettings() {
      const level = audioSettings.muted ? 0 : clamp(audioSettings.volume, 0, 1);
      for (const track of allAmbienceTracks()) {
        if (track) track.volume = level;
      }
      if (audioVolumeRange) audioVolumeRange.value = `${Math.round(audioSettings.volume * 100)}`;
      if (menuVolumeRange) menuVolumeRange.value = `${Math.round(audioSettings.volume * 100)}`;
      if (audioMuteBtn) audioMuteBtn.textContent = audioSettings.muted ? "Unmute" : "Mute";
      if (menuMuteBtn) menuMuteBtn.textContent = audioSettings.muted ? "Unmute Theme" : "Mute Theme";
      updateAmbienceButtonLabel();
    }

    function serializeTiles() {
      return tiles.map((tile) => ({
        q: tile.q,
        r: tile.r,
        terrain: tile.terrain,
        owner: tile.owner,
        troops: tile.troops,
        capital: tile.capital,
        elevation: tile.elevation,
        moisture: tile.moisture,
        roughness: tile.roughness,
        waveOffset: tile.waveOffset,
        coastal: tile.coastal,
        terrainVariant: tile.terrainVariant,
        mountainVariant: tile.mountainVariant,
        hasMountain: tile.hasMountain,
        estate: tile.estate,
        townName: tile.townName,
        biome: tile.biome,
        detailVariantA: tile.detailVariantA,
        detailVariantB: tile.detailVariantB,
        landmarkVariant: tile.landmarkVariant,
        hasLandmark: tile.hasLandmark,
        duchessId: tile.duchessId || null,
        systems: ensureTileSystems(tile),
      }));
    }

    function restoreTiles(rawTiles) {
      tiles = [];
      tileIndex.clear();
      for (const saved of rawTiles) {
        const px = axialToPixel(saved.q, saved.r);
        const tile = {
          ...saved,
          x: px.x,
          y: px.y,
          cx: px.x + boardOriginX,
          cy: px.y + boardOriginY,
          _neighbors: null,
        };
        ensureTileSystems(tile);
        tiles.push(tile);
        tileIndex.set(tileKey(tile.q, tile.r), tile);
      }
    }

    function updateContinueAvailability() {
      const exists = Boolean(readStorageValue(SAVE_KEY));
      if (continueGameBtn) continueGameBtn.disabled = !exists;
      if (loadGameBtn) loadGameBtn.disabled = !exists;
    }

    function readStorageValue(key) {
      try {
        return window.localStorage ? window.localStorage.getItem(key) : null;
      } catch (err) {
        return null;
      }
    }

    function writeStorageValue(key, value) {
      try {
        if (!window.localStorage) return false;
        window.localStorage.setItem(key, value);
        return true;
      } catch (err) {
        return false;
      }
    }

    function updateSaveStatus(text, kind = "warn") {
      if (!saveStatusEl) return;
      saveStatusEl.textContent = text;
      saveStatusEl.className = kind === "ok" ? "help save-ok" : "help save-warn";
    }

    function buildSavePayload() {
      return {
        version: SAVE_VERSION,
        savedAt: new Date().toISOString(),
        state: {
          tiles: serializeTiles(),
          duchesses,
          currentFactionIndex,
          round,
          gameOver,
          treasury,
          leaderState,
          capturedQueens,
          queenUsedThisTurn,
          pendingQueenFaction,
          queenState,
          queenUnits,
          pendingUnitQueenFaction,
          nextUnitId,
          humanMovesRemaining,
          activeMenuTab,
          eventQueue,
          diplomacyTurnNumber,
          worldRelations,
          tileSceneState,
          gameMode,
          overlordQueenId,
          resistanceState,
          localAiSettings,
          queenChatSessions,
          sendModeIndex,
          hoveredTile: hoveredTile ? { q: hoveredTile.q, r: hoveredTile.r } : null,
          inspectedTile: inspectedTile ? { q: inspectedTile.q, r: inspectedTile.r } : null,
          boardScale,
          dayNightPhase,
          campaignStats,
          developerState,
          weatherState,
          audioSettings,
        },
      };
    }

    function saveGame(mode = "manual") {
      if (!tiles.length) return false;
      if (mode === "auto") campaignStats.autosaves += 1;
      const payload = buildSavePayload();
      if (!writeStorageValue(SAVE_KEY, JSON.stringify(payload))) {
        updateContinueAvailability();
        updateSaveStatus("Saving is unavailable in this browser context.", "warn");
        return false;
      }
      lastSaveMeta = payload;
      campaignStats.lastSaveAt = payload.savedAt;
      updateContinueAvailability();
      updateSaveStatus(
        `${mode === "auto" ? "Autosaved" : "Saved"} ${formatTimestamp(payload.savedAt)}${mode === "auto" ? ` • autosaves ${campaignStats.autosaves}` : ""}.`,
        "ok"
      );
      return true;
    }

    function hydrateState(snapshot) {
      const minX = Math.min(...snapshot.tiles.map((tile) => axialToPixel(tile.q, tile.r).x));
      const maxX = Math.max(...snapshot.tiles.map((tile) => axialToPixel(tile.q, tile.r).x));
      const minY = Math.min(...snapshot.tiles.map((tile) => axialToPixel(tile.q, tile.r).y));
      const maxY = Math.max(...snapshot.tiles.map((tile) => axialToPixel(tile.q, tile.r).y));
      const pad = hexSize * 1.4;
      canvas.width = Math.ceil(maxX - minX + pad * 2);
      canvas.height = Math.ceil(maxY - minY + pad * 2);
      boardOriginX = pad - minX;
      boardOriginY = pad - minY;
      restoreTiles(snapshot.tiles);
      currentFactionIndex = snapshot.currentFactionIndex;
      round = snapshot.round;
      gameOver = snapshot.gameOver;
      treasury = snapshot.treasury ?? treasury;
      duchesses = snapshot.duchesses || [];
      leaderState = snapshot.leaderState || {};
      for (const faction of FACTIONS) {
        leaderState[faction.id] = {
          active: Boolean(faction.startActive),
          defeated: false,
          rebelAgainst: null,
          regimeName: null,
          regimeShort: null,
          underworldPatron: null,
          underworldFriendly: null,
          underAuthorityOf: null,
          ...(leaderState[faction.id] || {}),
        };
      }
      capturedQueens = snapshot.capturedQueens || [0];
      queenUsedThisTurn = Boolean(snapshot.queenUsedThisTurn);
      pendingQueenFaction = snapshot.pendingQueenFaction;
      queenState = snapshot.queenState || {};
      queenUnits = snapshot.queenUnits || [];
      pendingUnitQueenFaction = snapshot.pendingUnitQueenFaction;
      nextUnitId = snapshot.nextUnitId || 1;
      humanMovesRemaining = snapshot.humanMovesRemaining || HUMAN_MOVES_PER_TURN;
      activeMenuTab = snapshot.activeMenuTab || "overview";
      eventQueue = snapshot.eventQueue || [];
      diplomacyTurnNumber = snapshot.diplomacyTurnNumber || 0;
      worldRelations = snapshot.worldRelations || {};
      tileSceneState = snapshot.tileSceneState || null;
      gameMode = snapshot.gameMode || "conquest";
      overlordQueenId = snapshot.overlordQueenId ?? null;
      resistanceState = snapshot.resistanceState || resistanceState;
      localAiSettings = { ...localAiSettings, ...(snapshot.localAiSettings || {}) };
      queenChatSessions = snapshot.queenChatSessions || {};
      sendModeIndex = snapshot.sendModeIndex || 1;
      hoveredTile = snapshot.hoveredTile ? getTile(snapshot.hoveredTile.q, snapshot.hoveredTile.r) : null;
      inspectedTile = snapshot.inspectedTile ? getTile(snapshot.inspectedTile.q, snapshot.inspectedTile.r) : (hoveredTile || playerCapitalTile());
      boardScale = snapshot.boardScale || 1;
      dayNightPhase = snapshot.dayNightPhase || 0.18;
      campaignStats = snapshot.campaignStats || campaignStats;
      developerState = snapshot.developerState || developerState;
      weatherState = snapshot.weatherState || weatherState;
      audioSettings = snapshot.audioSettings || audioSettings;
      reconcileDuchessState();
      applyAudioSettings();
      syncAmbienceTrack();
      buildTerrainBackdrops();
      ensureStaticBoardCanvas();
      refreshDormantAuthorities();
      syncCanvasDisplaySize();
      cleanupUnits();
      updateHUD();
      render();
    }

    function loadGameFromStorage() {
      const raw = readStorageValue(SAVE_KEY);
      if (!raw) {
        updateSaveStatus("No campaign save found or storage is unavailable.", "warn");
        return false;
      }
      const payload = JSON.parse(raw);
      if (payload.version !== SAVE_VERSION || !payload.state?.tiles?.length) {
        updateSaveStatus("Save format is no longer valid.", "warn");
        return false;
      }
      lastSaveMeta = payload;
      loadingFromSave = true;
      if (!gameBooted) {
        startCampaignFromMenu(true);
        return true;
      }
      hydrateState(payload.state);
      updateSaveStatus(`Loaded campaign from ${formatTimestamp(payload.savedAt)}.`, "ok");
      return true;
    }

    function showEndingScreen(title, body, winnerId) {
      const stats = mapStats(tiles, winnerId);
      const summaryLines = buildCapturedQueenSummary(capturedQueens, QUEEN_POWERS, queenEntry, factionById, relationRankId);
      endingTitleEl.textContent = title;
      endingSummaryEl.innerHTML = `
        <div class="ending-summary">
          <div>${body}</div>
          <div class="summary-grid">
            <div class="summary-card">
              <strong>Final Realm</strong>
              <div>Land held: ${stats.land}</div>
              <div>Total troops: ${stats.troops}</div>
              <div>${objectiveSummary(stats)}</div>
            </div>
            <div class="summary-card">
              <strong>Campaign Record</strong>
              <div>Round: ${round}</div>
              <div>Faction collapses: ${campaignStats.factionsCollapsed}</div>
              <div>Captured queens: ${Math.max(0, capturedQueens.length - 1)}</div>
            </div>
          </div>
          <div class="summary-card">
            <strong>Queens In Your Court</strong>
            <div>${summaryLines.length ? summaryLines.join("<br>") : "No queens beyond your native court."}</div>
          </div>
        </div>`;
      endingOverlayEl.classList.add("open");
      endingShown = true;
    }

    function syncCanvasDisplaySize() {
      canvas.style.width = `${Math.round(canvas.width * boardScale)}px`;
      canvas.style.height = `${Math.round(canvas.height * boardScale)}px`;
    }

    function zoomBoard(nextScale, clientX, clientY) {
      const clamped = Math.max(MIN_BOARD_SCALE, Math.min(MAX_BOARD_SCALE, nextScale));
      if (Math.abs(clamped - boardScale) < 0.0001) return;

      const oldScale = boardScale;
      const wrapRect = boardWrapEl.getBoundingClientRect();
      const px = clientX - wrapRect.left;
      const py = clientY - wrapRect.top;
      const worldX = (boardWrapEl.scrollLeft + px) / oldScale;
      const worldY = (boardWrapEl.scrollTop + py) / oldScale;

      boardScale = clamped;
      syncCanvasDisplaySize();

      boardWrapEl.scrollLeft = worldX * boardScale - px;
      boardWrapEl.scrollTop = worldY * boardScale - py;
    }

    function pointerToBoard(ev) {
      const rect = canvas.getBoundingClientRect();
      const sx = canvas.width / rect.width;
      const sy = canvas.height / rect.height;
      return {
        x: (ev.clientX - rect.left) * sx,
        y: (ev.clientY - rect.top) * sy,
      };
    }

    function buildTerrainBackdrops() {
      if (!canvas.width || !canvas.height) return;
      invalidateStaticBoardCache();
      landBackdropCanvas = document.createElement("canvas");
      oceanBackdropCanvas = document.createElement("canvas");
      landBackdropCanvas.width = canvas.width;
      landBackdropCanvas.height = canvas.height;
      oceanBackdropCanvas.width = canvas.width;
      oceanBackdropCanvas.height = canvas.height;

      const lg = landBackdropCanvas.getContext("2d");
      const og = oceanBackdropCanvas.getContext("2d");
      if (!lg || !og) return;

      const landGrad = lg.createLinearGradient(0, 0, 0, landBackdropCanvas.height);
      landGrad.addColorStop(0, "#8fbe57");
      landGrad.addColorStop(1, "#739e4b");
      lg.fillStyle = landGrad;
      lg.fillRect(0, 0, landBackdropCanvas.width, landBackdropCanvas.height);

      const oceanGrad = og.createLinearGradient(0, 0, 0, oceanBackdropCanvas.height);
      oceanGrad.addColorStop(0, "#4e90bf");
      oceanGrad.addColorStop(1, "#2a628f");
      og.fillStyle = oceanGrad;
      og.fillRect(0, 0, oceanBackdropCanvas.width, oceanBackdropCanvas.height);

      // Build a connected "field mosaic" like the reference map.
      const fieldColors = ["#91c45d", "#86b855", "#7cad4d", "#9ecf69", "#739d4a", "#a5d66f"];
      for (let i = 0; i < 460; i++) {
        const x = (i * 173) % landBackdropCanvas.width;
        const y = (i * 227) % landBackdropCanvas.height;
        const w = 26 + ((i * 11) % 70);
        const h = 22 + ((i * 7) % 58);
        const c = fieldColors[i % fieldColors.length];
        lg.globalAlpha = 0.34;
        lg.fillStyle = c;
        lg.fillRect(x - w / 2, y - h / 2, w, h);
      }

      // Forest blobs
      lg.globalAlpha = 0.18;
      lg.fillStyle = "#3f6d34";
      for (let i = 0; i < 120; i++) {
        const cx = (i * 149) % landBackdropCanvas.width;
        const cy = (i * 211) % landBackdropCanvas.height;
        const rw = 36 + ((i * 13) % 88);
        const rh = 26 + ((i * 9) % 62);
        lg.beginPath();
        lg.ellipse(cx, cy, rw / 2, rh / 2, (i % 8) * 0.2, 0, Math.PI * 2);
        lg.fill();
      }

      // Very soft sprite texture over the connected fields.
      const landStep = Math.max(78, Math.floor(hexSize * 3.4));
      for (let y = -landStep; y < landBackdropCanvas.height + landStep; y += landStep) {
        for (let x = -landStep; x < landBackdropCanvas.width + landStep; x += landStep) {
          const v = ((Math.floor(x / landStep) * 13 + Math.floor(y / landStep) * 17) % 6) + 1;
          const sprite = ((x + y) / landStep) % 3 === 0 ? hexAssets.ld[v] : hexAssets.l[v];
          if (!sprite || !sprite.complete) continue;
          const size = Math.floor(landStep * 1.38);
          lg.globalAlpha = 0.13;
          lg.drawImage(sprite, x - size / 2, y - size / 2, size, size);
        }
      }
      // Extra patch strips to emphasize terrain mosaic using local asset variants.
      const patchStep = Math.max(60, Math.floor(hexSize * 2.9));
      for (let y = -patchStep; y < landBackdropCanvas.height + patchStep; y += patchStep) {
        for (let x = -patchStep; x < landBackdropCanvas.width + patchStep; x += patchStep) {
          const v = ((Math.floor(x / patchStep) * 5 + Math.floor(y / patchStep) * 9) % 6) + 1;
          const useDry = ((Math.floor(x / patchStep) + Math.floor(y / patchStep)) % 4) === 0;
          const sprite = useDry ? hexAssets.c[v] : hexAssets.ld[v];
          if (!sprite || !sprite.complete) continue;
          const size = Math.floor(patchStep * 1.08);
          lg.globalAlpha = useDry ? 0.18 : 0.11;
          lg.drawImage(sprite, x - size / 2, y - size / 2, size, size);
        }
      }
      lg.globalAlpha = 1;

      // Stamp ocean texture in world-space for connected water look.
      const oceanStep = Math.max(66, Math.floor(hexSize * 2.8));
      for (let y = -oceanStep; y < oceanBackdropCanvas.height + oceanStep; y += oceanStep) {
        for (let x = -oceanStep; x < oceanBackdropCanvas.width + oceanStep; x += oceanStep) {
          const v = ((Math.floor(x / oceanStep) * 7 + Math.floor(y / oceanStep) * 9) % 6) + 1;
          const sprite = hexAssets.cd[v];
          if (!sprite || !sprite.complete) continue;
          const size = Math.floor(oceanStep * 1.22);
          og.globalAlpha = 0.16;
          og.drawImage(sprite, x - size / 2, y - size / 2, size, size);
          og.globalAlpha = 1;
        }
      }
    }

    function assignQueenPortraits() {
      queenPortraits = {};
      for (const qKey of Object.keys(QUEEN_POWERS)) {
        const qId = Number(qKey);
        if (!QUEEN_PORTRAITS[qId]) continue;
        queenPortraits[qId] = QUEEN_PORTRAITS[qId];
      }
    }

    function moraleTierBonus(morale) {
      if (morale >= 85) return 2;
      if (morale >= 65) return 1;
      if (morale >= 40) return 0;
      if (morale >= 20) return -1;
      return -2;
    }

    function queenUnitForFaction(queenFaction) {
      return queenUnits.find(u => u.queenFaction === queenFaction && u.owner === playerFactionId()) || null;
    }

    function getUnitAtTile(tile) {
      return queenUnits.find(u => u.owner === tile.owner && u.q === tile.q && u.r === tile.r) || null;
    }

    function cleanupUnits() {
      queenUnits = queenUnits.filter(u => {
        const t = getTile(u.q, u.r);
        return t && t.owner === u.owner;
      });
    }

    function passiveWarBonus() {
      let bonus = 0;
      for (const q of capturedQueens) {
        const st = queenEntry(q);
        if (st.assignment === "war" && !st.refusedThisTurn) {
          bonus += 1 + relationBonus(st, "war");
        }
      }
      return bonus;
    }

    function axialToPixel(q, r) {
      return {
        x: hexSize * sqrt3 * (q + r / 2),
        y: hexSize * 1.5 * r,
      };
    }

    function pixelToAxial(x, y) {
      const localX = x - boardOriginX;
      const localY = y - boardOriginY;
      return {
        q: (sqrt3 / 3 * localX - localY / 3) / hexSize,
        r: (2 / 3 * localY) / hexSize,
      };
    }

    function roundAxial(q, r) {
      let x = q;
      let z = r;
      let y = -x - z;

      let rx = Math.round(x);
      let ry = Math.round(y);
      let rz = Math.round(z);

      const xDiff = Math.abs(rx - x);
      const yDiff = Math.abs(ry - y);
      const zDiff = Math.abs(rz - z);

      if (xDiff > yDiff && xDiff > zDiff) {
        rx = -ry - rz;
      } else if (yDiff > zDiff) {
        ry = -rx - rz;
      } else {
        rz = -rx - ry;
      }

      return { q: rx, r: rz };
    }

    function isOceanTile(q, r) {
      // Stable generation: mostly land with ocean on borders and some inland water pockets.
      const edge = Math.min(q, r, mapW - 1 - q, mapH - 1 - r);
      if (edge === 0) return true;
      if (edge === 1 && Math.random() < 0.46) return true;
      if (edge === 2 && Math.random() < 0.16) return true;
      const pocketNoise =
        Math.sin((q + 1) * 0.95) +
        Math.cos((r + 2) * 1.13) +
        Math.sin((q - r) * 0.61);
      return pocketNoise > 2.15 && Math.random() < 0.45;
    }

    function mixHexColors(a, b, t) {
      const aClean = a.replace("#", "");
      const bClean = b.replace("#", "");
      const ar = parseInt(aClean.slice(0, 2), 16);
      const ag = parseInt(aClean.slice(2, 4), 16);
      const ab = parseInt(aClean.slice(4, 6), 16);
      const br = parseInt(bClean.slice(0, 2), 16);
      const bg = parseInt(bClean.slice(2, 4), 16);
      const bb = parseInt(bClean.slice(4, 6), 16);
      const rr = Math.round(ar + (br - ar) * t);
      const rg = Math.round(ag + (bg - ag) * t);
      const rb = Math.round(ab + (bb - ab) * t);
      return `rgb(${rr}, ${rg}, ${rb})`;
    }

    function clamp01(v) {
      return Math.max(0, Math.min(1, v));
    }

    function createTileSystems(tile) {
      return {
        district:
          tile.capital ? "capital" :
          (tile.estate ? tile.estate : (tile.coastal ? "shore" : `${tile.biome || "wild"} ward`)),
        prosperity: tile.capital ? 5 : (tile.estate ? 3 : 1),
        loyalty: tile.owner === NEUTRAL ? 35 : 58,
        unrest: tile.owner === NEUTRAL ? 8 : 3,
        security: 20,
        recruitment: 10,
        corruption: 0,
        tribute: tile.capital ? 4 : 1,
        rebellionRisk: 10,
        buildings: {
          farm: 0,
          market: 0,
          barracks: 0,
          walls: 0,
          roads: tile.estate === "road" ? 1 : 0,
          harbor: tile.estate === "port" ? 1 : 0,
          watchtower: tile.estate === "fort" ? 1 : 0,
          manor: tile.capital || tile.estate === "palace" ? 1 : 0,
        },
      };
    }

    function ensureTileSystems(tile) {
      if (!tile.systems) {
        tile.systems = createTileSystems(tile);
      }
      tile.systems.prosperity = Number(tile.systems.prosperity ?? 1);
      tile.systems.loyalty = Number(tile.systems.loyalty ?? (tile.owner === NEUTRAL ? 35 : 58));
      tile.systems.unrest = Number(tile.systems.unrest ?? 4);
      tile.systems.security = Number(tile.systems.security ?? 20);
      tile.systems.recruitment = Number(tile.systems.recruitment ?? 10);
      tile.systems.corruption = Number(tile.systems.corruption ?? 0);
      tile.systems.tribute = Number(tile.systems.tribute ?? (tile.capital ? 4 : 1));
      tile.systems.rebellionRisk = Number(tile.systems.rebellionRisk ?? 10);
      tile.systems.district = tile.systems.district || (tile.capital ? "capital" : (tile.estate || "frontier ward"));
      tile.systems.buildings = {
        farm: 0,
        market: 0,
        barracks: 0,
        walls: 0,
        roads: 0,
        harbor: 0,
        watchtower: 0,
        manor: 0,
        ...(tile.systems.buildings || {}),
      };
      return tile.systems;
    }

    function getDuchess(id) {
      return duchesses.find((duchess) => duchess.id === id) || null;
    }

    function updateDuchessStatus(duchess) {
      duchess.status = statusFromDuchess(duchess);
    }

    const DUCHESS_APPOINTMENT_ARCHETYPES = [
      "noble_duchess",
      "war_duchess",
      "matron_duchess",
      "court_duchess",
      "zealot_duchess",
      "pleasure_duchess",
      "rebel_duchess",
      "underworld_duchess",
    ];

    const DUCHESS_NAME_PREFIXES = ["Lady", "Dame", "Countess", "Marchioness"];
    const DUCHESS_NAME_FIRST = ["Serene", "Kara", "Mira", "Elara", "Sabine", "Nyra", "Vesper", "Calista", "Rowena", "Aveline"];
    const DUCHESS_NAME_LAST = ["Vale", "Bronn", "Cinder", "Thorn", "Dusk", "Morn", "Voss", "Marrow", "Hart", "Ashdown"];

    function duchessRegionName(tile) {
      if (!tile) return "the March";
      if (tile.townName) return tile.townName;
      if (tile.capital) return "the Crownlands";
      return `${estateMeta(tile.estate)?.label || "Province"} ${tile.q},${tile.r}`;
    }

    function generateDuchessIdentity(tile) {
      const seed = Math.abs((tile?.q || 0) * 97 + (tile?.r || 0) * 53 + duchesses.length * 17);
      const prefix = DUCHESS_NAME_PREFIXES[seed % DUCHESS_NAME_PREFIXES.length];
      const first = DUCHESS_NAME_FIRST[seed % DUCHESS_NAME_FIRST.length];
      const last = DUCHESS_NAME_LAST[(seed + 3) % DUCHESS_NAME_LAST.length];
      return {
        name: `${prefix} ${first} ${last}`,
        title: `Duchess of ${duchessRegionName(tile)}`,
      };
    }

    function attachDuchessToTile(tile, duchess) {
      if (!tile || !duchess) return;
      tile.duchessId = duchess.id;
      duchess.assignedTile = `${tile.q},${tile.r}`;
      duchess.ownerFaction = tile.owner;
      updateDuchessStatus(duchess);
    }

    function createAppointedDuchess(tile, ownerFaction = tile?.owner) {
      if (!tile) return null;
      const seed = Math.abs(tile.q * 31 + tile.r * 17 + duchesses.length * 13);
      const archetype = DUCHESS_APPOINTMENT_ARCHETYPES[seed % DUCHESS_APPOINTMENT_ARCHETYPES.length];
      const identity = generateDuchessIdentity(tile);
      const duchess = createDuchess({
        id: `duchess_${archetype}_${tile.q}_${tile.r}_${Date.now()}_${duchesses.length}`,
        name: identity.name,
        title: identity.title,
        archetype,
        ownerFaction,
      });
      duchesses.push(duchess);
      attachDuchessToTile(tile, duchess);
      return duchess;
    }

    function reconcileDuchessState() {
      for (const tile of tiles) {
        if (!tile.duchessId) continue;
        const duchess = getDuchess(tile.duchessId);
        if (!duchess) {
          tile.duchessId = null;
          continue;
        }
        duchess.assignedTile = `${tile.q},${tile.r}`;
        duchess.ownerFaction = tile.owner;
        if (!Array.isArray(duchess.traits)) {
          duchess.traits = [];
        }
        duchess.trust = clamp(Number.isFinite(duchess.trust) ? duchess.trust : 40, 0, 100);
        duchess.romance = clamp(Number.isFinite(duchess.romance) ? duchess.romance : 24, 0, 100);
        duchess.attraction = clamp(Number.isFinite(duchess.attraction) ? duchess.attraction : 32, 0, 100);
        duchess.pregnant = Boolean(duchess.pregnant);
        duchess.pregnancyStartRound = Number.isFinite(duchess.pregnancyStartRound) ? duchess.pregnancyStartRound : -1;
        duchess.pregnancyDueRound = Number.isFinite(duchess.pregnancyDueRound) ? duchess.pregnancyDueRound : -1;
        duchess.pregnancyOrigin = duchess.pregnancyOrigin || null;
        duchess.children = Number.isFinite(duchess.children) ? duchess.children : 0;
        duchess.talkUsedThisTurn = Boolean(duchess.talkUsedThisTurn);
        duchess.giftUsedThisTurn = Boolean(duchess.giftUsedThisTurn);
        duchess.confideUsedThisTurn = Boolean(duchess.confideUsedThisTurn);
        duchess.intimacyUsedThisTurn = Boolean(duchess.intimacyUsedThisTurn);
        updateDuchessStatus(duchess);
      }
    }

    function transferDuchessWithProvince(tile, newOwner) {
      if (!tile?.duchessId) return null;
      const duchess = getDuchess(tile.duchessId);
      if (!duchess) {
        tile.duchessId = null;
        return null;
      }
      const formerOwner = duchess.ownerFaction;
      duchess.ownerFaction = newOwner;
      duchess.loyalty = clamp(duchess.loyalty - 12, 0, 100);
      duchess.ambition = clamp(duchess.ambition + 6, 0, 100);
      duchess.localInfluence = clamp(duchess.localInfluence + 3, 0, 100);
      duchess.betrayalRisk = clamp(duchess.betrayalRisk + 8, 0, 100);
      duchess.status = "active";
      updateDuchessStatus(duchess);
      if (formerOwner !== null && formerOwner !== undefined && formerOwner !== newOwner) {
        addLog(`${duchess.name} bends the knee to a new crown in ${tile.q},${tile.r}, though her loyalty wavers.`);
      }
      return duchess;
    }

    function appointDuchess(tile) {
      if (!tile || tile.owner !== playerFactionId() || tile.duchessId) return;
      const duchess = createAppointedDuchess(tile, tile.owner);
      if (!duchess) return;
      const systems = ensureTileSystems(tile);
      systems.loyalty = clamp(systems.loyalty + 4, 0, 100);
      systems.unrest = clamp(systems.unrest - 3, 0, 100);
      addLog(`${duchess.name} is appointed to govern ${duchessRegionName(tile)}.`);
      render();
    }

    function duchessStatsSummary(duchess) {
      if (!duchess) return "";
      return `Loyalty ${duchess.loyalty} • Ambition ${duchess.ambition} • Corruption ${duchess.corruption} • Influence ${duchess.localInfluence} • Status ${duchess.status}`;
    }

    function duchessBondSummary(duchess) {
      if (!duchess) return "";
      return `Trust ${duchess.trust} • Romance ${duchess.romance} • Attraction ${duchess.attraction} • Family ${duchessPregnancyStatusLabel(duchess)}`;
    }

    function duchessPregnancyStatusLabel(duchess) {
      if (!duchess) return "No Heir";
      if (!duchess.pregnant) return duchess.children > 0 ? `Children ${duchess.children}` : "No Heir";
      const turnsLeft = Math.max(0, duchess.pregnancyDueRound - round);
      if (turnsLeft <= 1) return `Late Pregnancy • Heirs ${duchess.children}`;
      if (turnsLeft === 2) return `Pregnant • Mid Term • Heirs ${duchess.children}`;
      return `Pregnant • Early Term • Heirs ${duchess.children}`;
    }

    function tryDuchessPregnancy(duchess, sourceLabel, intensity = 1) {
      if (!duchess || duchess.pregnant) return false;
      const chance = Math.min(
        0.5,
        0.06 +
        intensity * 0.07 +
        Math.max(0, duchess.romance) / 280 +
        Math.max(0, duchess.attraction) / 250 +
        Math.max(0, duchess.trust) / 430
      );
      if (Math.random() > chance) return false;
      duchess.pregnant = true;
      duchess.pregnancyStartRound = round;
      duchess.pregnancyDueRound = round + 3 + Math.floor(Math.random() * 2);
      duchess.pregnancyOrigin = sourceLabel;
      duchess.romance = clamp(duchess.romance + 5, 0, 100);
      duchess.trust = clamp(duchess.trust + 4, 0, 100);
      duchess.loyalty = clamp(duchess.loyalty + 3, 0, 100);
      queueEventModal({
        label: "Duchess",
        title: `${duchess.name} Carries Your Child`,
        body: `${duchess.name} quietly realizes that your recent intimacy has left her pregnant.\n\nThe pregnancy will progress over the coming rounds, and the child may bind her more tightly to your rule in ${duchess.assignedTile || "your realm"}.`,
        portrait: duchess.portrait || "Queens/queen_elara_verdantia.jpg",
        cta: "Continue",
      });
      addLog(`${duchess.name} becomes pregnant after ${sourceLabel.toLowerCase()}.`);
      return true;
    }

    function resolveDuchessPregnancies() {
      for (const duchess of duchesses) {
        if (!duchess || !duchess.pregnant || duchess.pregnancyDueRound > round) continue;
        duchess.pregnant = false;
        duchess.pregnancyStartRound = -1;
        duchess.pregnancyDueRound = -1;
        duchess.pregnancyOrigin = null;
        duchess.children = (duchess.children || 0) + 1;
        duchess.romance = clamp(duchess.romance + 6, 0, 100);
        duchess.trust = clamp(duchess.trust + 5, 0, 100);
        duchess.loyalty = clamp(duchess.loyalty + 4, 0, 100);
        queueEventModal({
          label: "Duchess",
          title: `${duchess.name} Gives Birth`,
          body: `${duchess.name} gives birth to your child.\n\nA new heir ties her more personally to your household, and the province will remember the child born under her banner.`,
          portrait: duchess.portrait || "Queens/queen_elara_verdantia.jpg",
          cta: "Acknowledge The Heir",
        });
        addLog(`${duchess.name} gives birth to your child.`);
      }
    }

    function queueDuchessReaction(duchess, title, label, body) {
      if (!duchess) return;
      queueEventModal({
        label,
        title,
        body,
        portrait: duchess.portrait || "Queens/queen_elara_verdantia.jpg",
        cta: "Continue",
      });
    }

    function talkDuchess(tile) {
      if (!tile || !tile.duchessId) return;
      const duchess = getDuchess(tile.duchessId);
      if (!duchess || duchess.talkUsedThisTurn) return;
      duchess.talkUsedThisTurn = true;
      duchess.trust = clamp(duchess.trust + 5, 0, 100);
      duchess.loyalty = clamp(duchess.loyalty + 3, 0, 100);
      duchess.betrayalRisk = clamp(duchess.betrayalRisk - 2, 0, 100);
      updateDuchessStatus(duchess);
      addLog(`You spend time listening to ${duchess.name}. She leaves the audience feeling more understood and steady.`);
      queueDuchessReaction(
        duchess,
        `${duchess.name} Answers You Frankly`,
        "Private Audience",
        `${duchess.name} studies you for a moment before speaking with unusual honesty.\n\nShe seems steadier afterward, as if being heard matters to her more than she lets the court see.`
      );
      render();
    }

    function giftDuchess(tile) {
      if (!tile || !tile.duchessId) return;
      const duchess = getDuchess(tile.duchessId);
      if (!duchess || duchess.giftUsedThisTurn) return;
      duchess.giftUsedThisTurn = true;
      duchess.trust = clamp(duchess.trust + 4, 0, 100);
      duchess.romance = clamp(duchess.romance + 3, 0, 100);
      duchess.loyalty = clamp(duchess.loyalty + 4, 0, 100);
      duchess.corruption = clamp(duchess.corruption + 1, 0, 100);
      updateDuchessStatus(duchess);
      addLog(`You send costly finery and gifts to ${duchess.name}. She is pleased, and her attachment to your court deepens.`);
      queueDuchessReaction(
        duchess,
        `${duchess.name} Accepts Your Gifts`,
        "Court Favor",
        `${duchess.name} lets the jewels and silks trail through her fingers before smiling.\n\nThe pleasure is controlled, but unmistakable. She will remember who chose to indulge her.`
      );
      render();
    }

    function confideDuchess(tile) {
      if (!tile || !tile.duchessId) return;
      const duchess = getDuchess(tile.duchessId);
      if (!duchess || duchess.confideUsedThisTurn) return;
      duchess.confideUsedThisTurn = true;
      duchess.trust = clamp(duchess.trust + 6, 0, 100);
      duchess.romance = clamp(duchess.romance + 2, 0, 100);
      duchess.loyalty = clamp(duchess.loyalty + 2, 0, 100);
      duchess.ambition = clamp(duchess.ambition - 2, 0, 100);
      updateDuchessStatus(duchess);
      addLog(`You confide in ${duchess.name}. The private trust between you grows stronger.`);
      queueDuchessReaction(
        duchess,
        `${duchess.name} Keeps Your Confidence`,
        "Shared Secret",
        `${duchess.name} lowers her voice and answers in kind.\n\nWhatever reserve she usually keeps in place slips for a moment, and what passes between you feels personal rather than political.`
      );
      render();
    }

    function intimacyDuchess(tile) {
      if (!tile || !tile.duchessId) return;
      const duchess = getDuchess(tile.duchessId);
      if (!duchess || duchess.intimacyUsedThisTurn) return;
      duchess.intimacyUsedThisTurn = true;
      duchess.romance = clamp(duchess.romance + 7, 0, 100);
      duchess.attraction = clamp(duchess.attraction + 6, 0, 100);
      duchess.trust = clamp(duchess.trust + 3, 0, 100);
      duchess.loyalty = clamp(duchess.loyalty + 5, 0, 100);
      duchess.localInfluence = clamp(duchess.localInfluence + 2, 0, 100);
      tryDuchessPregnancy(duchess, "Duchess Intimacy", 1.04);
      updateDuchessStatus(duchess);
      addLog(`You spend an intimate night with ${duchess.name}. The bond between you grows more personal and harder to ignore.`);
      queueDuchessReaction(
        duchess,
        `${duchess.name} Leaves Your Chambers Changed`,
        "Intimate Night",
        `${duchess.name} lingers after the night should have ended, her composure softer and less guarded.\n\nWhatever stood between duty and desire has become much harder for her to hide now.`
      );
      render();
    }

    function openAppointDuchessModal(tile) {
      if (!tile || tile.owner !== playerFactionId() || tile.duchessId) return;
      const preview = generateDuchessIdentity(tile);
      queueEventModal({
        label: "Government",
        title: `Appoint A Duchess To ${duchessRegionName(tile)}`,
        body:
          `${preview.name} is ready to take up the title ${preview.title}.\n\n` +
          `Appointing a duchess will steady the province and add a new noble to your court.\n\n` +
          `Province: (${tile.q}, ${tile.r})`,
        actions: [
          {
            label: "Appoint Her",
            onClick: () => {
              dismissEventModal(true);
              appointDuchess(getTile(tile.q, tile.r) || tile);
            },
          },
          { label: "Cancel", onClick: () => dismissEventModal(true) },
        ],
      });
    }

    function openDuchessActionModal(tile, actionKey) {
      const liveTile = getTile(tile?.q, tile?.r) || tile;
      if (!liveTile?.duchessId) return;
      const duchess = getDuchess(liveTile.duchessId);
      if (!duchess) return;
      const region = duchessRegionName(liveTile);
      const actionMap = {
        talk: {
          title: `Speak Privately With ${duchess.name}`,
          body: `${duchess.name} is ready for a quieter audience in ${region}.\n\nA personal conversation builds trust and steadiness on a smaller scale than your queen relationships.`,
          confirm: duchess.talkUsedThisTurn ? "Already Used This Turn" : "Speak With Her",
          disabled: duchess.talkUsedThisTurn,
          run: () => talkDuchess(liveTile),
        },
        reward: {
          title: `Reward ${duchess.name}`,
          body: `${duchess.name} awaits your favor in ${region}.\n\nA reward should improve her loyalty and calm some of her ambition.`,
          confirm: "Grant Reward",
          run: () => rewardDuchess(liveTile),
        },
        flirt: {
          title: `Flirt With ${duchess.name}`,
          body: `${duchess.name} receives you in private chambers overlooking ${region}.\n\nA warmer personal bond can make her more loyal, though it also deepens her local presence.`,
          confirm: "Share A Private Moment",
          run: () => flirtDuchess(liveTile),
        },
        gift: {
          title: `Send Gifts To ${duchess.name}`,
          body: `${duchess.name} can be delighted with finery, jewelry, and court favor.\n\nIt is a modest version of how you tend your queens, but still deepens her attachment.`,
          confirm: duchess.giftUsedThisTurn ? "Already Used This Turn" : "Send Gifts",
          disabled: duchess.giftUsedThisTurn,
          run: () => giftDuchess(liveTile),
        },
        court: {
          title: `Hold Court With ${duchess.name}`,
          body: `${duchess.name} is ready to stand beside you before the province.\n\nA formal audience improves her authority and strengthens her legitimacy in ${region}.`,
          confirm: "Hold Court",
          run: () => courtDuchess(liveTile),
        },
        confide: {
          title: `Confide In ${duchess.name}`,
          body: `${duchess.name} can be trusted with a private confidence.\n\nThis helps build a more personal bond and makes her feel chosen, not merely appointed.`,
          confirm: duchess.confideUsedThisTurn ? "Already Used This Turn" : "Confide In Her",
          disabled: duchess.confideUsedThisTurn,
          run: () => confideDuchess(liveTile),
        },
        intimacy: {
          title: `Spend The Night With ${duchess.name}`,
          body: `${duchess.name} can be drawn into a deeper intimacy.\n\nThis is more serious than flirtation and can lead to pregnancy if the bond between you is strong enough.`,
          confirm: duchess.intimacyUsedThisTurn ? "Already Used This Turn" : "Spend The Night",
          disabled: duchess.intimacyUsedThisTurn,
          run: () => intimacyDuchess(liveTile),
        },
        inspect: {
          title: `Inspect ${duchess.name}`,
          body: `${duchess.name}'s ledgers, servants, and officers can all be examined.\n\nAn inspection may reduce corruption, but she will resent the scrutiny.`,
          confirm: "Begin Inspection",
          run: () => inspectDuchess(liveTile),
        },
        replace: {
          title: `Replace ${duchess.name}`,
          body: `${duchess.name} can be removed from office in ${region}.\n\nThis will unsettle the province, and a successor duchess will take her place.`,
          confirm: "Replace Her",
          run: () => replaceDuchess(liveTile),
        },
        imprison: {
          title: `Imprison ${duchess.name}`,
          body: `${duchess.name} can be seized and placed under guard.\n\nThis sharply curbs her personal freedom, but the province will react badly to it.`,
          confirm: "Imprison Her",
          run: () => imprisonDuchess(liveTile),
        },
        exile: {
          title: `Exile ${duchess.name}`,
          body: `${duchess.name} can be driven from ${region} and stripped of local authority.\n\nExile is cleaner than prison, but the district will still need time to settle.`,
          confirm: "Exile Her",
          run: () => exileDuchess(liveTile),
        },
      };
      const action = actionMap[actionKey];
      if (!action) return;
      queueEventModal({
        label: "Duchess",
        title: action.title,
        body: `${action.body}\n\n${duchessStatsSummary(duchess)}\n${duchessBondSummary(duchess)}\nTraits: ${duchess.traits.join(", ")}`,
        portrait: duchess.portrait || "Queens/queen_elara_verdantia.jpg",
        actions: [
          {
            label: action.confirm,
            disabled: Boolean(action.disabled),
            onClick: () => {
              if (action.disabled) return;
              dismissEventModal(true);
              action.run();
            },
          },
          { label: "Cancel", onClick: () => dismissEventModal(true) },
        ],
      });
    }

    function applyDuchessEffects(tile, duchess) {
      if (!tile || !duchess) return;
      const systems = ensureTileSystems(tile);
      const modifiers = computeTurnModifiers(duchess);
      systems.loyalty = clamp(systems.loyalty + modifiers.loyalty, 0, 100);
      systems.unrest = clamp(systems.unrest + modifiers.unrest, 0, 100);
      systems.prosperity = clamp(systems.prosperity + modifiers.prosperity, 0, 100);
      systems.security = clamp(systems.security + modifiers.security, 0, 100);
      systems.recruitment = clamp(systems.recruitment + modifiers.recruitment, 0, 100);
      systems.corruption = clamp(systems.corruption + modifiers.corruption, 0, 100);
      systems.tribute = clamp(systems.tribute + modifiers.tribute, 0, 100);
      systems.rebellionRisk = computeRebellionRisk(duchess, systems);

      if (duchess.loyalty >= 70) {
        systems.unrest = clamp(systems.unrest - 1, 0, 100);
      }
      if (duchess.cruelty >= 60) {
        systems.unrest = clamp(systems.unrest - 1, 0, 100);
      }
      if (duchess.corruption >= 60) {
        systems.prosperity = clamp(systems.prosperity - 1, 0, 100);
      }
      if (isDangerousDuchess(duchess)) {
        systems.rebellionRisk = clamp(systems.rebellionRisk + 6, 0, 100);
      }
      updateDuchessStatus(duchess);
    }

    function maybeTriggerDuchessEvent(tile, duchess) {
      if (!tile || !duchess) return;
      const eventInfo = buildEventForDuchess(duchess, tile);
      if (!eventInfo) return;
      const message = `${eventInfo.title}: ${eventInfo.body}`;
      addLog(message);
      if (tile.owner === playerFactionId() && eventInfo.severity === "high") {
        queueEventModal({
          label: "Duchess Event",
          title: eventInfo.title,
          body: eventInfo.body,
          cta: "Continue",
        });
      }
    }

    function initializeDuchesses() {
      duchesses = [];
      const capitalTiles = tiles.filter((tile) => tile.capital);
      const archetypes = [
        "noble_duchess",
        "war_duchess",
        "matron_duchess",
        "zealot_duchess",
      ];
      const names = [
        { name: "Lady Serene Vale", title: "Duchess of Ash Hollow" },
        { name: "Duchess Kara Bronn", title: "Duchess of Ironfield" },
        { name: "Duchess Mira Cinder", title: "Duchess of Hearthwell" },
        { name: "Duchess Elara Thorn", title: "Duchess of Stormmarsh" },
      ];
      for (let index = 0; index < capitalTiles.length; index++) {
        const tile = capitalTiles[index];
        const archetype = archetypes[index % archetypes.length];
        const persona = names[index % names.length];
        const duchess = createDuchess({
          id: `duchess_${archetype}_${tile.q}_${tile.r}`,
          name: persona.name,
          title: persona.title,
          archetype,
          ownerFaction: tile.owner,
          assignedTile: `${tile.q},${tile.r}`,
        });
        duchesses.push(duchess);
        attachDuchessToTile(tile, duchess);
      }
      reconcileDuchessState();
    }

    function replaceDuchess(tile) {
      if (!tile || !tile.duchessId) return;
      const duchess = getDuchess(tile.duchessId);
      if (!duchess) return;
      tile.duchessId = null;
      duchess.assignedTile = null;
      duchess.status = "replaced";
      const systems = ensureTileSystems(tile);
      systems.unrest = clamp(systems.unrest + 6, 0, 100);
      const successor = createAppointedDuchess(tile, tile.owner);
      if (successor) {
        systems.loyalty = clamp(systems.loyalty - 2, 0, 100);
        addLog(`${duchess.name} has been removed from ${tile.q},${tile.r}. ${successor.name} takes over amid local uncertainty.`);
        queueDuchessReaction(
          successor,
          `${successor.name} Steps Into Power`,
          "Succession",
          `${successor.name} accepts the appointment with careful composure while the memory of her predecessor still hangs in the room.\n\nShe understands the opportunity she has been given, and the warning that came with it.`
        );
      } else {
        addLog(`${duchess.name} has been removed from ${tile.q},${tile.r}. Local unrest increases.`);
      }
      render();
    }

    function rewardDuchess(tile) {
      if (!tile || !tile.duchessId) return;
      const duchess = getDuchess(tile.duchessId);
      if (!duchess) return;
      duchess.loyalty = clamp(duchess.loyalty + 10, 0, 100);
      duchess.trust = clamp(duchess.trust + 3, 0, 100);
      duchess.ambition = clamp(duchess.ambition - 5, 0, 100);
      duchess.betrayalRisk = clamp(duchess.betrayalRisk - 4, 0, 100);
      updateDuchessStatus(duchess);
      addLog(`You reward ${duchess.name}. Her loyalty improves and she grows slightly less restless.`);
      queueDuchessReaction(
        duchess,
        `${duchess.name} Basks In Your Favor`,
        "Reward Granted",
        `${duchess.name} receives your favor with polished grace, though the satisfaction in her eyes is plain.\n\nRecognition from you still matters to her, perhaps more than she wants anyone else to know.`
      );
      render();
    }

    function inspectDuchess(tile) {
      if (!tile || !tile.duchessId) return;
      const duchess = getDuchess(tile.duchessId);
      if (!duchess) return;
      duchess.corruption = clamp(duchess.corruption - 2, 0, 100);
      duchess.betrayalRisk = clamp(duchess.betrayalRisk + 4, 0, 100);
      updateDuchessStatus(duchess);
      addLog(`${duchess.name} is inspected. Her corruption slips, but she feels watched and slightly resentful.`);
      queueDuchessReaction(
        duchess,
        `${duchess.name} Endures Your Scrutiny`,
        "Inspection",
        `${duchess.name} stands still while ledgers are opened and servants questioned.\n\nHer outward composure holds, but the coolness in her response makes it clear she dislikes being examined so closely.`
      );
      render();
    }

    function imprisonDuchess(tile) {
      if (!tile || !tile.duchessId) return;
      const duchess = getDuchess(tile.duchessId);
      if (!duchess) return;
      tile.duchessId = null;
      duchess.assignedTile = null;
      duchess.status = "imprisoned";
      duchess.ownerFaction = tile.owner;
      duchess.betrayalRisk = clamp(duchess.betrayalRisk - 20, 0, 100);
      const systems = ensureTileSystems(tile);
      systems.unrest = clamp(systems.unrest + 8, 0, 100);
      addLog(`${duchess.name} is imprisoned. Order is stricter, but the people are uneasy.`);
      queueDuchessReaction(
        duchess,
        `${duchess.name} Is Dragged Away`,
        "Imprisoned",
        `${duchess.name} does not beg. She meets the sentence with a cold, memorable stare as the guard closes in.\n\nThe province will not forget the sight quickly.`
      );
      render();
    }

    function exileDuchess(tile) {
      if (!tile || !tile.duchessId) return;
      const duchess = getDuchess(tile.duchessId);
      if (!duchess) return;
      tile.duchessId = null;
      duchess.assignedTile = null;
      duchess.status = "exiled";
      duchess.ownerFaction = tile.owner;
      const systems = ensureTileSystems(tile);
      systems.unrest = clamp(systems.unrest + 4, 0, 100);
      addLog(`${duchess.name} has been exiled. The district will need time to settle.`);
      queueDuchessReaction(
        duchess,
        `${duchess.name} Leaves In Exile`,
        "Exile",
        `${duchess.name} departs with dignity held together by sheer will.\n\nThe farewell is restrained, but everyone present can feel how much was broken by it.`
      );
      render();
    }

    function flirtDuchess(tile) {
      if (!tile || !tile.duchessId) return;
      const duchess = getDuchess(tile.duchessId);
      if (!duchess) return;
      duchess.loyalty = clamp(duchess.loyalty + 7, 0, 100);
      duchess.charm = clamp((duchess.charm || 0) + 4, 0, 100);
      duchess.romance = clamp(duchess.romance + 5, 0, 100);
      duchess.attraction = clamp(duchess.attraction + 6, 0, 100);
      duchess.trust = clamp(duchess.trust + 2, 0, 100);
      duchess.betrayalRisk = clamp(duchess.betrayalRisk - 3, 0, 100);
      duchess.localInfluence = clamp((duchess.localInfluence || 0) + 2, 0, 100);
      tryDuchessPregnancy(duchess, "Duchess Flirtation", 0.5);
      updateDuchessStatus(duchess);
      addLog(`You share a private moment with ${duchess.name}. Her loyalty grows and she feels more personally bound to your rule.`);
      queueDuchessReaction(
        duchess,
        `${duchess.name} Meets You Halfway`,
        "Flirtation",
        `${duchess.name} answers your attention with a look that lingers longer than propriety demands.\n\nShe does not surrender the upper hand completely, but she clearly enjoys the danger of letting you see her want more.`
      );
      render();
    }

    function courtDuchess(tile) {
      if (!tile || !tile.duchessId) return;
      const duchess = getDuchess(tile.duchessId);
      if (!duchess) return;
      duchess.loyalty = clamp(duchess.loyalty + 5, 0, 100);
      duchess.authority = clamp((duchess.authority || 0) + 4, 0, 100);
      duchess.trust = clamp(duchess.trust + 3, 0, 100);
      duchess.localInfluence = clamp((duchess.localInfluence || 0) + 3, 0, 100);
      duchess.corruption = clamp(duchess.corruption - 3, 0, 100);
      updateDuchessStatus(duchess);
      addLog(`You hold a formal court with ${duchess.name}. Her legitimacy and discipline improve.`);
      queueDuchessReaction(
        duchess,
        `${duchess.name} Shines At Court`,
        "Formal Audience",
        `${duchess.name} carries herself with practiced poise beside you, and the room notices.\n\nBy the end of the audience she looks more secure in her place, and more pleased to have been seen there with you.`
      );
      render();
    }

    function tileDuchessEffectsSummary(tile) {
      if (!tile?.duchessId) return "No Duchess Assigned";
      const duchess = getDuchess(tile.duchessId);
      if (!duchess) return "No Duchess Assigned";
      return `${duchess.name} (${getArchetypeLabel(duchess.archetype)}): ${effectSummary(duchess)}`;
    }

    function tileDuchessInfo(tile) {
      if (!tile?.duchessId) return null;
      return getDuchess(tile.duchessId);
    }

    function tileDefenseBonus(tile) {
      const systems = ensureTileSystems(tile);
      return (tile.estate === "fort" ? 2 : 0) + systems.buildings.walls + systems.buildings.watchtower;
    }

    function tileIncomeValue(tile) {
      if (tile.terrain !== "land") return 0;
      const systems = ensureTileSystems(tile);
      return (systems.buildings.market * 2) + systems.buildings.roads + (systems.buildings.harbor ? 3 : 0) + Math.floor(systems.prosperity / 4);
    }

    function tileGrowthBonus(tile) {
      if (tile.terrain !== "land") return 0;
      const systems = ensureTileSystems(tile);
      return systems.buildings.farm + systems.buildings.barracks + (systems.buildings.harbor ? 1 : 0);
    }

    function tileLoyaltyPressure(tile) {
      const systems = ensureTileSystems(tile);
      return systems.buildings.manor * 2 + systems.buildings.watchtower - Math.floor(systems.unrest / 7);
    }

    function tileUpgradeLevel(tile, key) {
      return ensureTileSystems(tile).buildings[key] || 0;
    }

    function regionalNoise(q, r) {
      return (
        Math.sin(q * 0.33) * 0.55 +
        Math.cos(r * 0.29) * 0.45 +
        Math.sin((q - r) * 0.21) * 0.35
      );
    }

    function biomeForTile(tile) {
      const lat = tile.r / Math.max(1, mapH - 1);
      const n = regionalNoise(tile.q, tile.r);
      const wet = tile.moisture + Math.sin(tile.q * 0.17 + tile.r * 0.11) * 0.18;
      const rugged = tile.roughness + Math.cos(tile.q * 0.22 - tile.r * 0.19) * 0.14;
      const dryScore = n + (tile.q / mapW) * 0.35 - (tile.r / mapH) * 0.12 - wet * 0.25;
      if (lat < 0.17 || lat > 0.84) {
        if (wet > 0.45) return "tundra";
      }
      if (rugged > 0.74 && dryScore > 0.1) return "volcanic";
      if (wet > 0.72 && lat > 0.22 && lat < 0.78) return "marsh";
      if (wet > 0.52 && dryScore < 0.08) return "forest";
      if (dryScore > 0.5) return "desert";
      if (dryScore > 0.18) return "steppe";
      return "grass";
    }

    function buildMap() {
      tiles = [];
      tileIndex.clear();
      const homeSpots = FACTIONS
        .filter(f => f.startActive && f.home)
        .map(f => ({ q: f.home.q, r: f.home.r, owner: f.id }));
      const homeByKey = new Map(homeSpots.map(h => [tileKey(h.q, h.r), h]));
      for (let r = 0; r < mapH; r++) {
        for (let q = 0; q < mapW; q++) {
          const px = axialToPixel(q, r);
          const key = tileKey(q, r);
          const home = homeByKey.get(key);
          const ocean = home ? false : isOceanTile(q, r);
          const tile = {
            q,
            r,
            x: px.x,
            y: px.y,
            terrain: ocean ? "ocean" : "land",
            owner: home ? home.owner : NEUTRAL,
            troops: home ? 10 : (ocean ? 0 : (Math.random() < 0.23 ? 0 : 1 + Math.floor(Math.random() * 4))),
            capital: Boolean(home),
            elevation: Math.random(),
            moisture: Math.random(),
            roughness: Math.random(),
            waveOffset: Math.random() * Math.PI * 2,
            coastal: false,
            // Use coarse regions instead of per-tile randomness so textures look smoother.
            terrainVariant: ((Math.floor(q / 2) * 7 + Math.floor(r / 2) * 11) % 6) + 1,
            mountainVariant: ((q * 7 + r * 5) % 6) + 1,
            hasMountain: false,
            estate: null, // null | town | port
            townName: null,
            duchessId: null,
          };
          ensureTileSystems(tile);
          tiles.push(tile);
          tileIndex.set(tileKey(q, r), tile);
        }
      }

      // Ensure each row has enough visible land so the map fills the screen vertically.
      const minLandPerRow = Math.max(6, Math.floor(mapW * 0.38));
      for (let r = 0; r < mapH; r++) {
        const rowTiles = tiles.filter(t => t.r === r);
        let landCount = rowTiles.filter(t => t.terrain === "land").length;
        if (landCount >= minLandPerRow) continue;
        const candidates = rowTiles
          .filter(t => t.terrain === "ocean" && !t.capital)
          .sort(() => Math.random() - 0.5);
        const need = minLandPerRow - landCount;
        for (let i = 0; i < need && i < candidates.length; i++) {
          const t = candidates[i];
          t.terrain = "land";
          t.troops = 1 + Math.floor(Math.random() * 3);
          landCount += 1;
        }
      }

      // Start condition: each faction owns exactly one tile (its capital).
      for (const t of tiles) {
        if (t.capital) continue;
        if (t.terrain === "land") {
          t.owner = NEUTRAL;
          if (t.troops < 1) t.troops = 1 + Math.floor(Math.random() * 3);
        } else {
          t.owner = NEUTRAL;
          t.troops = 0;
        }
      }
      for (const home of homeSpots) {
        const center = tiles.find(t => t.q === home.q && t.r === home.r);
        if (!center) continue;
        center.terrain = "land";
        center.owner = home.owner;
        center.capital = true;
        center.estate = "town";
        center.troops = 12;
        ensureTileSystems(center);
      }

      const minX = Math.min(...tiles.map(t => t.x));
      const maxX = Math.max(...tiles.map(t => t.x));
      const minY = Math.min(...tiles.map(t => t.y));
      const maxY = Math.max(...tiles.map(t => t.y));
      const pad = hexSize * 1.4;

      canvas.width = Math.ceil(maxX - minX + pad * 2);
      canvas.height = Math.ceil(maxY - minY + pad * 2);
      boardOriginX = pad - minX;
      boardOriginY = pad - minY;

      for (const t of tiles) {
        t.cx = t.x + boardOriginX;
        t.cy = t.y + boardOriginY;
        t._neighbors = null;
      }
      buildTerrainBackdrops();
      for (const t of tiles) {
        if (t.terrain !== "land") continue;
        t.coastal = neighbors(t).some(n => n.terrain === "ocean");
        t.biome = biomeForTile(t);
        t.hasMountain = false;
        t.detailVariantA = ((t.q * 5 + t.r * 3) % 6) + 1;
        t.detailVariantB = ((t.q * 11 + t.r * 7) % 6) + 1;
        t.landmarkVariant = ((t.q * 13 + t.r * 17) % 2) + 1;
        t.hasLandmark = !t.capital && !t.coastal && ((t.q * 19 + t.r * 23) % 29 === 0);
        ensureTileSystems(t);
      }
      seedSettlements();
      for (const t of tiles) {
        const systems = ensureTileSystems(t);
        systems.district =
          t.capital ? "capital" :
          (t.estate ? t.estate : (t.coastal ? "shore ward" : `${t.biome || "frontier"} ward`));
        if (t.estate === "road") systems.buildings.roads = Math.max(1, systems.buildings.roads);
        if (t.estate === "port") systems.buildings.harbor = Math.max(1, systems.buildings.harbor);
        if (t.estate === "fort") systems.buildings.watchtower = Math.max(1, systems.buildings.watchtower);
        if (t.capital || t.estate === "palace") systems.buildings.manor = Math.max(1, systems.buildings.manor);
      }

      selectedTile = null;
      currentFactionIndex = 0;
      round = 1;
      gameOver = false;
      endingShown = false;
      gameMode = "conquest";
      overlordQueenId = null;
      initializeDuchesses();
      campaignStats = {
        factionsCollapsed: 0,
        autosaves: 0,
        lastSaveAt: null,
      };
      treasury = 24;
      developerState = {
        enabled: developerState.enabled,
        selectedQueenFaction: 0,
        sceneDraft: defaultSceneDraft(0),
        sceneHistory: [],
        freeEdit: false,
      };
      weatherState = {
        kind: "clear",
        timer: 0,
        wind: 0.18,
        cloudSeed: 0,
        fronts: [],
        bloodMoon: false,
        bloodMoonCheckedNight: -1,
      };
      resistanceState = {
        built: false,
        strength: 0,
        exposure: 0,
        devotion: 0,
        vowed: false,
        currentTask: null,
        turnCaptures: 0,
        turnAudience: 0,
        turnDevotionStart: 0,
        turnCapitalTroopsStart: 0,
      };
      eventQueue = [];
      diplomacyTurnNumber = 0;
      worldRelations = {};
      tileSceneState = null;
      leaderState = {};
      capturedQueens = [0];
      queenUsedThisTurn = false;
      pendingQueenFaction = null;
      queenState = {};
      queenUnits = [];
      pendingUnitQueenFaction = null;
      nextUnitId = 1;
      humanMovesRemaining = HUMAN_MOVES_PER_TURN;
      assignQueenPortraits();
      queenEntry(0).morale = 68;
      queenEntry(0).assignment = "court";
      logEl.innerHTML = "";
      for (const faction of FACTIONS) {
        leaderState[faction.id] = {
          active: Boolean(faction.startActive),
          defeated: false,
          rebelAgainst: null,
          regimeName: null,
          regimeShort: null,
          underworldPatron: null,
          underworldFriendly: null,
          underAuthorityOf: null,
        };
      }
      refreshDormantAuthorities();
      addLog("New game started.");
      addLog("Queen Elara, your native queen, starts in your harem.");
      addLog("Tip: select one of your green tiles with 2+ troops, then click an adjacent tile.");
      randomizeWeather(true);
      syncAmbienceTrack();
      updateSaveStatus("Fresh campaign. No manual save yet.", "warn");
      startTurn(FACTIONS[currentFactionIndex].id);
      render();
      syncCanvasDisplaySize();
      boardWrapEl.scrollLeft = Math.max(0, (canvas.width * boardScale - boardWrapEl.clientWidth) / 2);
      boardWrapEl.scrollTop = Math.max(0, (canvas.height * boardScale - boardWrapEl.clientHeight) / 2);
    }

    function seedSettlements() {
      const landTiles = tiles.filter(t => t.terrain === "land" && !t.capital);
      // Approximation of HexEmpire town density with spacing constraints.
      const townTarget = Math.max(10, Math.floor(landTiles.length / 13));
      let placedTowns = 0;

      for (const t of landTiles.sort(() => Math.random() - 0.5)) {
        if (placedTowns >= townTarget) break;
        if (t.estate) continue;
        if (t.coastal) continue;
        // keep towns separated
        if (neighbors(t).some(n => n.estate)) continue;
        t.estate = "town";
        placedTowns += 1;
      }

      // Ports on coastal land, sparse like original logic.
      const portCandidates = tiles.filter(t => t.terrain === "land" && t.coastal && !t.capital);
      const portTarget = Math.max(4, Math.floor(placedTowns / 3));
      let placedPorts = 0;
      for (const t of portCandidates.sort(() => Math.random() - 0.5)) {
        if (placedPorts >= portTarget) break;
        if (t.estate) continue;
        if (neighbors(t).some(n => n.estate === "port")) continue;
        t.estate = "port";
        placedPorts += 1;
      }

      const fortTarget = Math.max(4, Math.floor(landTiles.length / 30));
      let forts = 0;
      for (const t of landTiles.sort(() => Math.random() - 0.5)) {
        if (forts >= fortTarget) break;
        if (t.estate || t.coastal || neighbors(t).some(n => n.capital || n.estate === "fort")) continue;
        t.estate = "fort";
        forts += 1;
      }

      const relicTarget = Math.max(3, Math.floor(landTiles.length / 42));
      let relics = 0;
      for (const t of landTiles.sort(() => Math.random() - 0.5)) {
        if (relics >= relicTarget) break;
        if (t.estate || t.coastal || !t.hasLandmark) continue;
        t.estate = "relic";
        relics += 1;
      }

      const palaceTarget = Math.max(3, Math.floor(placedTowns / 4));
      let palaces = 0;
      for (const t of landTiles.sort(() => Math.random() - 0.5)) {
        if (palaces >= palaceTarget) break;
        if (t.estate || neighbors(t).some(n => n.capital)) continue;
        t.estate = "palace";
        palaces += 1;
      }

      const roadTarget = Math.max(6, Math.floor(landTiles.length / 18));
      let roads = 0;
      for (const t of landTiles.sort(() => Math.random() - 0.5)) {
        if (roads >= roadTarget) break;
        if (t.estate) continue;
        const linked = neighbors(t).filter(n => n.capital || n.estate === "town" || n.estate === "port" || n.estate === "fort");
        if (linked.length < 2) continue;
        t.estate = "road";
        roads += 1;
      }
    }

    function getTile(q, r) {
      return tileIndex.get(tileKey(q, r)) || null;
    }

    function neighbors(tile) {
      if (tile._neighbors) return tile._neighbors;
      tile._neighbors = HEX_DIRS
        .map(([dq, dr]) => getTile(tile.q + dq, tile.r + dr))
        .filter(Boolean);
      return tile._neighbors;
    }

    function ownerColor(owner) {
      if (owner === NEUTRAL) return "#d8d0bf";
      const fac = factionById(owner);
      return fac ? fac.color : "#999";
    }

    function armyTier(troops) {
      if (troops >= 16) return 2; // tank
      if (troops >= 8) return 1;  // howitzer
      return 0;
    }

    function getArmySprite(owner, tier) {
      const key = `${owner}:${tier}`;
      if (armySpriteCache[key]) return armySpriteCache[key];

      const sprite = document.createElement("canvas");
      sprite.width = 34;
      sprite.height = 34;
      const sctx = sprite.getContext("2d");
      if (!sctx) return null;

      const base = ownerColor(owner);
      const dark = mixHexColors(base, "#101318", 0.55);
      const light = mixHexColors(base, "#ffffff", 0.42);

      sctx.clearRect(0, 0, 34, 34);
      if (tier !== 0) {
        sctx.shadowColor = "rgba(0,0,0,0.45)";
        sctx.shadowBlur = 4;
        sctx.shadowOffsetY = 2;
        sctx.beginPath();
        sctx.arc(17, 18, 11.5, 0, Math.PI * 2);
        const grad = sctx.createLinearGradient(7, 7, 27, 27);
        grad.addColorStop(0, light);
        grad.addColorStop(1, dark);
        sctx.fillStyle = grad;
        sctx.fill();
        sctx.shadowBlur = 0;
        sctx.shadowOffsetY = 0;
        sctx.strokeStyle = "rgba(245, 241, 221, 0.88)";
        sctx.lineWidth = 1.8;
        sctx.stroke();
      }

      sctx.fillStyle = "rgba(255,255,255,0.9)";
      sctx.strokeStyle = "rgba(19,20,22,0.9)";
      sctx.lineWidth = 1.2;

      if (tier === 0) {
        // Classic-style soldier marker (faction fill, white edge).
        const fill = ownerColor(owner);
        sctx.fillStyle = fill;
        sctx.strokeStyle = "rgba(255,255,255,0.96)";
        sctx.lineWidth = 1.7;
        sctx.shadowColor = "rgba(0,0,0,0.5)";
        sctx.shadowBlur = 2;
        sctx.shadowOffsetY = 1;

        // Helmet/head
        sctx.beginPath();
        sctx.arc(17, 9.6, 2.8, 0, Math.PI * 2);
        sctx.fill();
        sctx.stroke();

        // Torso + coat
        sctx.beginPath();
        sctx.moveTo(13.6, 13.2);
        sctx.lineTo(20.4, 13.2);
        sctx.lineTo(19.3, 20.7);
        sctx.lineTo(14.7, 20.7);
        sctx.closePath();
        sctx.fill();
        sctx.stroke();

        // Legs
        sctx.beginPath();
        sctx.moveTo(15.3, 20.7);
        sctx.lineTo(14.3, 26.8);
        sctx.lineTo(16.4, 26.8);
        sctx.lineTo(17.0, 22.0);
        sctx.lineTo(17.6, 26.8);
        sctx.lineTo(19.7, 26.8);
        sctx.lineTo(18.7, 20.7);
        sctx.closePath();
        sctx.fill();
        sctx.stroke();

        // Rifle
        sctx.beginPath();
        sctx.moveTo(20.5, 14.0);
        sctx.lineTo(26.6, 10.9);
        sctx.lineTo(27.5, 12.5);
        sctx.lineTo(21.2, 15.8);
        sctx.closePath();
        sctx.fill();
        sctx.stroke();

        // Small round badge below (like classic icon marker)
        sctx.shadowBlur = 0;
        sctx.shadowOffsetY = 0;
        sctx.fillStyle = fill;
        sctx.beginPath();
        sctx.arc(24.2, 22.8, 3.1, 0, Math.PI * 2);
        sctx.fill();
        sctx.stroke();
      } else if (tier === 1) {
        // Howitzer silhouette.
        sctx.fillRect(10, 18, 14, 4);
        sctx.strokeRect(10, 18, 14, 4);
        sctx.beginPath();
        sctx.arc(12, 24, 2.2, 0, Math.PI * 2);
        sctx.arc(22, 24, 2.2, 0, Math.PI * 2);
        sctx.fill();
        sctx.stroke();
        sctx.fillRect(16, 14, 5, 4);
        sctx.strokeRect(16, 14, 5, 4);
        sctx.beginPath();
        sctx.moveTo(21, 15);
        sctx.lineTo(27, 11);
        sctx.lineTo(28, 13);
        sctx.lineTo(22, 17);
        sctx.closePath();
        sctx.fill();
        sctx.stroke();
      } else {
        // Tank silhouette.
        sctx.beginPath();
        sctx.moveTo(9, 21);
        sctx.lineTo(26, 21);
        sctx.lineTo(24, 16);
        sctx.lineTo(12, 16);
        sctx.closePath();
        sctx.fill();
        sctx.stroke();
        sctx.fillRect(14, 12, 7, 4);
        sctx.strokeRect(14, 12, 7, 4);
        sctx.beginPath();
        sctx.moveTo(21, 13.5);
        sctx.lineTo(29, 12.5);
        sctx.lineTo(29, 14.5);
        sctx.lineTo(21, 15.5);
        sctx.closePath();
        sctx.fill();
        sctx.stroke();
        for (const wx of [12, 16.5, 21]) {
          sctx.beginPath();
          sctx.arc(wx, 24, 2, 0, Math.PI * 2);
          sctx.fill();
          sctx.stroke();
        }
      }

      armySpriteCache[key] = sprite;
      return sprite;
    }

    function tileFillColor(tile) {
      if (tile.terrain === "ocean") return "#2d6d9f";
      if (tile.owner === NEUTRAL) return "#7da566";
      return ownerColor(tile.owner);
    }

    function ownerGlowColor(owner, alpha = 0.6) {
      if (owner === NEUTRAL) return `rgba(173, 162, 126, ${alpha})`;
      const hex = ownerColor(owner).replace("#", "");
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    function drawHexPath(targetCtx, cx, cy, size) {
      targetCtx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 180) * (60 * i - 30);
        const x = cx + size * Math.cos(a);
        const y = cy + size * Math.sin(a);
        if (i === 0) targetCtx.moveTo(x, y);
        else targetCtx.lineTo(x, y);
      }
      targetCtx.closePath();
    }

    function drawHex(cx, cy, size) {
      drawHexPath(ctx, cx, cy, size);
    }

    function drawCrown(cx, cy, size) {
      const y = cy - 11;
      const w = size * 1.5;
      const h = size;
      ctx.beginPath();
      ctx.moveTo(cx - w / 2, y + h / 2);
      ctx.lineTo(cx - w / 2, y + h * 0.15);
      ctx.lineTo(cx - w * 0.2, y - h * 0.25);
      ctx.lineTo(cx, y + h * 0.05);
      ctx.lineTo(cx + w * 0.2, y - h * 0.25);
      ctx.lineTo(cx + w / 2, y + h * 0.15);
      ctx.lineTo(cx + w / 2, y + h / 2);
      ctx.closePath();
      ctx.fillStyle = "#f7e5a6";
      ctx.fill();
      ctx.strokeStyle = "#3e3321";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    function ensureStaticBoardCanvas() {
      if (staticBoardCanvas || !canvas.width || !canvas.height) return;
      staticBoardCanvas = document.createElement("canvas");
      staticBoardCanvas.width = canvas.width;
      staticBoardCanvas.height = canvas.height;
      const sctx = staticBoardCanvas.getContext("2d");
      if (!sctx) return;

      sctx.imageSmoothingEnabled = true;
      sctx.imageSmoothingQuality = "high";
      sctx.clearRect(0, 0, staticBoardCanvas.width, staticBoardCanvas.height);

      const seaGrad = sctx.createLinearGradient(0, 0, 0, staticBoardCanvas.height);
      seaGrad.addColorStop(0, "#3f83b8");
      seaGrad.addColorStop(1, "#1c4f79");
      sctx.fillStyle = seaGrad;
      sctx.fillRect(0, 0, staticBoardCanvas.width, staticBoardCanvas.height);

      for (const tile of tiles) {
        if (tile.terrain === "ocean") {
          const waveTone = clamp01(0.5 + Math.sin(tile.waveOffset + tile.q * 0.31 + tile.r * 0.27) * 0.18);
          const oceanHi = mixHexColors("#2f6f9f", "#5ea7d8", waveTone);
          const oceanLo = mixHexColors("#1e4c72", "#295f8c", waveTone * 0.8);
          const og = sctx.createLinearGradient(tile.cx - hexSize, tile.cy - hexSize, tile.cx + hexSize, tile.cy + hexSize);
          og.addColorStop(0, oceanHi);
          og.addColorStop(1, oceanLo);
          drawHexPath(sctx, tile.cx, tile.cy, hexSize - 1);
          sctx.fillStyle = og;
          sctx.fill();

          if (oceanBackdropCanvas) {
            sctx.save();
            drawHexPath(sctx, tile.cx, tile.cy, hexSize - 1.2);
            sctx.clip();
            sctx.globalAlpha = 0.7;
            sctx.drawImage(oceanBackdropCanvas, 0, 0);
            sctx.globalAlpha = 1;
            sctx.restore();
          }

          drawHexPath(sctx, tile.cx, tile.cy, hexSize - 1);
          sctx.lineWidth = 1.6;
          sctx.strokeStyle = "rgba(176, 220, 248, 0.42)";
          sctx.stroke();
        } else {
          const lg = sctx.createLinearGradient(tile.cx - hexSize, tile.cy - hexSize, tile.cx + hexSize, tile.cy + hexSize);
          if (tile.biome === "desert") {
            lg.addColorStop(0, "rgba(205, 179, 109, 0.67)");
            lg.addColorStop(1, "rgba(161, 135, 76, 0.6)");
          } else if (tile.biome === "volcanic") {
            lg.addColorStop(0, "rgba(132, 103, 94, 0.7)");
            lg.addColorStop(1, "rgba(86, 61, 56, 0.68)");
          } else if (tile.biome === "tundra") {
            lg.addColorStop(0, "rgba(196, 214, 218, 0.68)");
            lg.addColorStop(1, "rgba(134, 153, 160, 0.62)");
          } else if (tile.biome === "marsh") {
            lg.addColorStop(0, "rgba(118, 147, 93, 0.66)");
            lg.addColorStop(1, "rgba(76, 103, 61, 0.62)");
          } else if (tile.biome === "forest") {
            lg.addColorStop(0, "rgba(98, 144, 81, 0.66)");
            lg.addColorStop(1, "rgba(54, 96, 48, 0.62)");
          } else if (tile.biome === "steppe") {
            lg.addColorStop(0, "rgba(170, 181, 106, 0.64)");
            lg.addColorStop(1, "rgba(121, 130, 75, 0.58)");
          } else {
            lg.addColorStop(0, "rgba(148, 185, 89, 0.6)");
            lg.addColorStop(1, "rgba(95, 132, 63, 0.6)");
          }
          drawHexPath(sctx, tile.cx, tile.cy, hexSize - 1);
          sctx.fillStyle = lg;
          sctx.fill();

          if (landBackdropCanvas) {
            sctx.save();
            drawHexPath(sctx, tile.cx, tile.cy, hexSize - 1.2);
            sctx.clip();
            sctx.globalAlpha = 0.88;
            sctx.drawImage(landBackdropCanvas, 0, 0);
            sctx.globalAlpha = 1;
            sctx.restore();
          }

          const biomeSprite = tile.biome === "desert"
            ? hexAssets.c[tile.terrainVariant]
            : (tile.biome === "steppe"
              ? hexAssets.ld[tile.terrainVariant]
              : (tile.biome === "forest"
                ? hexAssets.m[tile.terrainVariant]
                : (tile.biome === "marsh"
                  ? hexAssets.cd[tile.terrainVariant]
                  : (tile.biome === "tundra"
                    ? hexAssets.cd[tile.terrainVariant]
                    : (tile.biome === "volcanic"
                      ? hexAssets.m[tile.terrainVariant]
                      : hexAssets.l[tile.terrainVariant])))));
          if (biomeSprite && biomeSprite.complete) {
            sctx.save();
            drawHexPath(sctx, tile.cx, tile.cy, hexSize - 1.35);
            sctx.clip();
            sctx.globalAlpha =
              tile.biome === "desert" ? 0.26 :
              (tile.biome === "steppe" ? 0.17 :
              (tile.biome === "forest" ? 0.18 :
              (tile.biome === "marsh" ? 0.18 :
              (tile.biome === "tundra" ? 0.12 :
              (tile.biome === "volcanic" ? 0.2 : 0.1)))));
            sctx.drawImage(biomeSprite, tile.cx - hexSize * 0.96, tile.cy - hexSize * 0.96, hexSize * 1.92, hexSize * 1.92);
            sctx.globalAlpha = 1;
            sctx.restore();
          }

          // Secondary patch layer for more terrain diversity from local tile set.
          const detailSpriteA = tile.biome === "desert"
            ? hexAssets.ld[tile.detailVariantA]
            : (tile.biome === "steppe"
              ? hexAssets.c[tile.detailVariantA]
              : (tile.biome === "forest"
                ? hexAssets.l[tile.detailVariantA]
                : (tile.biome === "marsh"
                  ? hexAssets.m[tile.detailVariantA]
                  : (tile.biome === "tundra"
                    ? hexAssets.ld[tile.detailVariantA]
                    : (tile.biome === "volcanic"
                      ? hexAssets.c[tile.detailVariantA]
                      : hexAssets.ld[tile.detailVariantA])))));
          if (detailSpriteA && detailSpriteA.complete) {
            sctx.save();
            drawHexPath(sctx, tile.cx, tile.cy, hexSize - 1.45);
            sctx.clip();
            sctx.globalAlpha = tile.biome === "desert" ? 0.16 : (tile.biome === "volcanic" ? 0.18 : 0.12);
            sctx.drawImage(
              detailSpriteA,
              tile.cx - hexSize * 0.78,
              tile.cy - hexSize * 0.78,
              hexSize * 1.56,
              hexSize * 1.56
            );
            sctx.globalAlpha = 1;
            sctx.restore();
          }

          const detailSpriteB = tile.biome === "grass"
            ? hexAssets.c[tile.detailVariantB]
            : (tile.biome === "forest"
              ? hexAssets.ld[tile.detailVariantB]
              : (tile.biome === "marsh"
                ? hexAssets.c[tile.detailVariantB]
                : (tile.biome === "tundra"
                  ? hexAssets.l[tile.detailVariantB]
                  : (tile.biome === "volcanic"
                    ? hexAssets.cd[tile.detailVariantB]
                    : hexAssets.l[tile.detailVariantB]))));
          if (detailSpriteB && detailSpriteB.complete) {
            sctx.save();
            drawHexPath(sctx, tile.cx, tile.cy, hexSize - 1.55);
            sctx.clip();
            sctx.globalAlpha = 0.08;
            sctx.drawImage(
              detailSpriteB,
              tile.cx - hexSize * 0.66,
              tile.cy - hexSize * 0.66,
              hexSize * 1.32,
              hexSize * 1.32
            );
            sctx.globalAlpha = 1;
            sctx.restore();
          }

          if (!tile.capital && tile.estate === "town") {
            if (hexAssets.city && hexAssets.city.complete) {
              sctx.globalAlpha = 0.93;
              sctx.drawImage(hexAssets.city, tile.cx - 10.5, tile.cy - 17, 21, 21);
              sctx.globalAlpha = 1;
            }
          }

          if (tile.estate === "port" && hexAssets.port && hexAssets.port.complete) {
            sctx.globalAlpha = 0.9;
            sctx.drawImage(hexAssets.port, tile.cx - 8, tile.cy - 14, 16, 16);
            sctx.globalAlpha = 1;
          }

          if (tile.estate && tile.estate !== "town" && tile.estate !== "port") {
            const meta = estateMeta(tile.estate);
            if (meta) {
              sctx.fillStyle = "rgba(28, 26, 18, 0.82)";
              sctx.beginPath();
              sctx.arc(tile.cx, tile.cy - 8, 8, 0, Math.PI * 2);
              sctx.fill();
              sctx.fillStyle = "#f7e8b4";
              sctx.font = "bold 10px serif";
              sctx.textAlign = "center";
              sctx.textBaseline = "middle";
              sctx.fillText(meta.icon, tile.cx, tile.cy - 8);
            }
          }

          if (tile.hasLandmark && !tile.estate) {
            const landmark = hexAssets.mp[tile.landmarkVariant];
            if (landmark && landmark.complete) {
              sctx.globalAlpha = 0.38;
              sctx.drawImage(
                landmark,
                tile.cx - hexSize * 0.36,
                tile.cy - hexSize * 0.48,
                hexSize * 0.72,
                hexSize * 0.66
              );
              sctx.globalAlpha = 1;
            }
          }
        }

        drawHexPath(sctx, tile.cx, tile.cy, hexSize - 2.5);
        sctx.lineWidth = 1.1;
        sctx.strokeStyle = tile.terrain === "ocean" ? "rgba(175,220,255,0.24)" : "rgba(255,245,205,0.2)";
        sctx.stroke();

        drawHexPath(sctx, tile.cx, tile.cy, hexSize - 1);
        sctx.lineWidth = 1;
        sctx.strokeStyle = tile.terrain === "ocean" ? "rgba(12,42,66,0.38)" : "rgba(55,74,37,0.22)";
        sctx.stroke();

        if (tile.terrain === "land" && tile.coastal) {
          drawHexPath(sctx, tile.cx, tile.cy, hexSize - 4.2);
          sctx.lineWidth = 1.2;
          sctx.strokeStyle = "rgba(220, 244, 255, 0.2)";
          sctx.stroke();
        }
      }
    }

    function drawBoardDynamic() {
      const rangeTiles = selectedTile ? new Set(tilesInTroopRange(selectedTile).map((tile) => tileKey(tile.q, tile.r))) : null;
      const selectedKey = selectedTile ? tileKey(selectedTile.q, selectedTile.r) : null;
      const animatedFromKey = moveAnimation ? tileKey(moveAnimation.from.q, moveAnimation.from.r) : null;
      const animatedToKey = moveAnimation ? tileKey(moveAnimation.to.q, moveAnimation.to.r) : null;
      for (const tile of tiles) {
        const key = tileKey(tile.q, tile.r);
        const inRange = !rangeTiles || key === selectedKey || rangeTiles.has(key);
        if (rangeTiles && !inRange) ctx.globalAlpha = 0.26;
        drawHex(tile.cx, tile.cy, hexSize - 1);
        ctx.globalAlpha = tile.owner === NEUTRAL ? 0.08 : 0.16;
        ctx.fillStyle = tileFillColor(tile);
        ctx.fill();
        ctx.globalAlpha = rangeTiles && !inRange ? 0.26 : 1;

        if (tile.terrain === "land") {
          ctx.save();
          drawHex(tile.cx, tile.cy, hexSize - 0.7);
          ctx.shadowBlur = tile.owner === NEUTRAL ? 6 : 14;
          ctx.shadowColor = ownerGlowColor(tile.owner, tile.owner === NEUTRAL ? 0.35 : 0.75);
          ctx.lineWidth = tile.owner === NEUTRAL ? 1.6 : 2.6;
          ctx.strokeStyle = ownerGlowColor(tile.owner, tile.owner === NEUTRAL ? 0.4 : 0.82);
          ctx.stroke();
          ctx.restore();

          drawHex(tile.cx, tile.cy, hexSize - 2.7);
          ctx.lineWidth = 1.6;
          ctx.strokeStyle = ownerGlowColor(tile.owner, tile.owner === NEUTRAL ? 0.3 : 0.62);
          ctx.stroke();
        }

        if (rangeTiles && rangeTiles.has(key) && key !== selectedKey) {
          ctx.save();
          drawHex(tile.cx, tile.cy, hexSize - 3.2);
          ctx.lineWidth = 2.4;
          ctx.strokeStyle = "rgba(214, 232, 150, 0.85)";
          ctx.stroke();
          ctx.restore();
        }

        if (selectedTile === tile) {
          ctx.save();
          drawHex(tile.cx, tile.cy, hexSize + 0.5);
          ctx.shadowBlur = 16;
          ctx.shadowColor = "rgba(242, 201, 76, 0.95)";
          ctx.lineWidth = 5.4;
          ctx.strokeStyle = "rgba(255, 228, 118, 0.98)";
          ctx.stroke();
          ctx.restore();

          drawHex(tile.cx, tile.cy, hexSize - 1.6);
          ctx.lineWidth = 2.4;
          ctx.strokeStyle = "rgba(255, 245, 178, 0.92)";
          ctx.stroke();
        }

        if (tile.capital && tile.terrain === "land") {
          const ownerTheme = factionById(tile.owner)?.theme;
          const capSprite = ownerTheme === "green"
            ? hexAssets.capital.green
            : (ownerTheme === "red"
              ? hexAssets.capital.red
              : (ownerTheme === "blue"
                ? hexAssets.capital.blue
                : (ownerTheme === "violet" ? hexAssets.capital.violet : null)));
          if (capSprite && capSprite.complete) {
            ctx.drawImage(capSprite, tile.cx - 10.5, tile.cy - 20, 21, 21);
          } else {
            drawCrown(tile.cx, tile.cy, 8);
          }
        }

        if (tile.troops > 0 && tile.terrain === "land") {
          const hideForAnimation = moveAnimation && (key === animatedFromKey || key === animatedToKey);
          if (tile.owner !== NEUTRAL && !hideForAnimation) {
            const sprite = getArmySprite(tile.owner, armyTier(tile.troops));
            if (sprite) {
              ctx.globalAlpha = 0.96;
              ctx.drawImage(sprite, tile.cx - 13, tile.cy - 12, 26, 26);
              ctx.globalAlpha = 1;
            }
          }
          const showTroops = (hoveredTile === tile || selectedTile === tile) && !hideForAnimation;
          ctx.globalAlpha = showTroops ? 1 : 0.08;
          ctx.fillStyle = "#ffffff";
          ctx.strokeStyle = "rgba(10, 10, 12, 0.95)";
          ctx.lineWidth = 3;
          ctx.font = "bold 15px Trebuchet MS";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.strokeText(String(tile.troops), tile.cx, tile.cy + 8);
          ctx.fillText(String(tile.troops), tile.cx, tile.cy + 8);
          ctx.globalAlpha = 1;
        }

        if (tile.terrain === "land" && tile.owner !== NEUTRAL) {
          const label = factionById(tile.owner)?.short || "?";
          ctx.fillStyle = "rgba(0,0,0,0.32)";
          ctx.fillRect(tile.cx - 11, tile.cy - 22, 22, 10);
          ctx.fillStyle = "#f4f4ee";
          ctx.font = "bold 8px Trebuchet MS";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(label, tile.cx, tile.cy - 17);
        }

        const unit = getUnitAtTile(tile);
        if (unit) {
          const queen = QUEEN_POWERS[unit.queenFaction];
          ctx.fillStyle = "#fff8";
          ctx.fillRect(tile.cx - 15, tile.cy - 24, 30, 10);
          ctx.strokeStyle = "#1f1f1f";
          ctx.lineWidth = 1;
          ctx.strokeRect(tile.cx - 15, tile.cy - 24, 30, 10);
          ctx.fillStyle = "#111";
          ctx.font = "bold 9px Trebuchet MS";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          const modeCode = unit.mode === "fight" ? "F" : "S";
          ctx.fillText(`${queen.title.split(" ")[1]}:${modeCode}`, tile.cx, tile.cy - 19);
        }
        ctx.globalAlpha = 1;
      }

      if (moveAnimation) {
        const progress = Math.min(1, (performance.now() - moveAnimation.startedAt) / moveAnimation.duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        const x = moveAnimation.from.cx + (moveAnimation.to.cx - moveAnimation.from.cx) * eased;
        const y = moveAnimation.from.cy + (moveAnimation.to.cy - moveAnimation.from.cy) * eased;
        ctx.save();
        ctx.strokeStyle = ownerGlowColor(moveAnimation.owner, 0.55);
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(moveAnimation.from.cx, moveAnimation.from.cy);
        ctx.lineTo(x, y);
        ctx.stroke();
        const sprite = getArmySprite(moveAnimation.owner, moveAnimation.tier);
        if (sprite) {
          ctx.drawImage(sprite, x - 15, y - 14, 30, 30);
        }
        ctx.fillStyle = "#ffffff";
        ctx.strokeStyle = "rgba(10, 10, 12, 0.95)";
        ctx.lineWidth = 3;
        ctx.font = "bold 15px Trebuchet MS";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.strokeText(String(moveAnimation.amount), x, y + 10);
        ctx.fillText(String(moveAnimation.amount), x, y + 10);
        ctx.restore();
      }
    }

    function phaseWindowStrength(center, width) {
      const direct = Math.abs(dayNightPhase - center);
      const wrapped = Math.min(direct, 1 - direct);
      return Math.max(0, 1 - wrapped / width);
    }

    function drawNightSettlementLights(nightAlpha, bloodMoonStrength) {
      if (nightAlpha <= 0.08) return;
      const pulse = 0.88 + Math.sin(visualTick * 0.08) * 0.08;
      for (const tile of tiles) {
        if (tile.terrain !== "land" || tile.owner === NEUTRAL) continue;
        let radius = 0;
        let intensity = 0;
        let color = bloodMoonStrength > 0.12 ? "255, 92, 76" : "255, 214, 146";
        if (tile.capital || tile.estate === "palace") {
          radius = 34;
          intensity = 0.26;
        } else if (tile.estate === "town") {
          radius = 24;
          intensity = 0.18;
        } else if (tile.estate === "port") {
          radius = 20;
          intensity = 0.2;
          color = bloodMoonStrength > 0.12 ? "255, 116, 96" : "255, 198, 128";
        } else if (tile.estate === "fort") {
          radius = 18;
          intensity = 0.13;
        }
        if (!radius) continue;
        const light = ctx.createRadialGradient(tile.cx, tile.cy - 10, 0, tile.cx, tile.cy - 10, radius);
        light.addColorStop(0, `rgba(${color}, ${Math.min(0.4, intensity * nightAlpha * 1.55 * pulse)})`);
        light.addColorStop(0.42, `rgba(${color}, ${Math.min(0.24, intensity * nightAlpha * pulse)})`);
        light.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = light;
        ctx.fillRect(tile.cx - radius, tile.cy - radius - 10, radius * 2, radius * 2);
      }
    }

    function drawAtmosphereOverlays() {
      const daylight = (Math.sin(dayNightPhase * Math.PI * 2 - Math.PI / 2) + 1) / 2;
      const darkness = Math.pow(Math.max(0, 1 - daylight), 1.16);
      const nightStrength = Math.min(1, darkness * 1.05);
      const nightAlpha = 0.66 * nightStrength;
      const dawnStrength = phaseWindowStrength(0.14, 0.14) * (1 - daylight) * 1.35;
      const duskStrength = phaseWindowStrength(0.5, 0.12) * (1 - daylight * 0.82);
      const bloodMoonStrength = weatherState.bloodMoon && isNightTime() ? Math.max(0.35, nightStrength) : 0;

      if (nightAlpha > 0.01) {
        ctx.fillStyle = bloodMoonStrength > 0
          ? `rgba(16, 6, 10, ${nightAlpha * 1.08})`
          : `rgba(8, 12, 32, ${nightAlpha})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const skyWash = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        if (bloodMoonStrength > 0) {
          skyWash.addColorStop(0, `rgba(118, 18, 26, ${nightAlpha * 0.26})`);
          skyWash.addColorStop(0.5, `rgba(58, 10, 18, ${nightAlpha * 0.28})`);
          skyWash.addColorStop(1, `rgba(16, 4, 8, ${nightAlpha * 0.42})`);
        } else {
          skyWash.addColorStop(0, `rgba(52, 66, 114, ${nightAlpha * 0.24})`);
          skyWash.addColorStop(0.4, `rgba(30, 42, 82, ${nightAlpha * 0.20})`);
          skyWash.addColorStop(1, `rgba(10, 12, 28, ${nightAlpha * 0.34})`);
        }
        ctx.fillStyle = skyWash;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const celestialGlow = ctx.createRadialGradient(
          canvas.width * 0.78, canvas.height * 0.18, 0,
          canvas.width * 0.78, canvas.height * 0.18, canvas.width * 0.46
        );
        if (bloodMoonStrength > 0) {
          celestialGlow.addColorStop(0, `rgba(255, 78, 64, ${nightAlpha * 0.26})`);
          celestialGlow.addColorStop(0.28, `rgba(255, 116, 88, ${nightAlpha * 0.16})`);
          celestialGlow.addColorStop(0.55, `rgba(126, 22, 26, ${nightAlpha * 0.14})`);
        } else {
          celestialGlow.addColorStop(0, `rgba(208, 224, 255, ${nightAlpha * 0.18})`);
          celestialGlow.addColorStop(0.36, `rgba(142, 166, 220, ${nightAlpha * 0.12})`);
          celestialGlow.addColorStop(0.62, `rgba(68, 88, 140, ${nightAlpha * 0.08})`);
        }
        celestialGlow.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = celestialGlow;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const moonbeam = ctx.createRadialGradient(
          canvas.width * 0.82, canvas.height * 0.2, 0,
          canvas.width * 0.82, canvas.height * 0.2, canvas.width * 0.35
        );
        moonbeam.addColorStop(0, `rgba(200, 220, 255, ${nightAlpha * 0.14})`);
        moonbeam.addColorStop(0.5, `rgba(120, 148, 212, ${nightAlpha * 0.08})`);
        moonbeam.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = moonbeam;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      const dawnDuskStrength = Math.max(dawnStrength, duskStrength);
      if (dawnDuskStrength > 0.01) {
        const sunriseSet = ctx.createLinearGradient(0, 0, 0, canvas.height);
        const warmTop = dawnStrength > duskStrength ? "255, 196, 126" : "255, 168, 98";
        const warmMid = dawnStrength > duskStrength ? "255, 146, 102" : "230, 98, 70";
        const coolBase = dawnStrength > duskStrength ? "84, 106, 152" : "58, 32, 62";
        sunriseSet.addColorStop(0, `rgba(${warmTop}, ${dawnDuskStrength * 0.16})`);
        sunriseSet.addColorStop(0.2, `rgba(162, 118, 186, ${dawnDuskStrength * 0.08})`);
        sunriseSet.addColorStop(0.45, `rgba(${warmMid}, ${dawnDuskStrength * 0.1})`);
        sunriseSet.addColorStop(1, `rgba(${coolBase}, ${dawnDuskStrength * 0.16})`);
        ctx.fillStyle = sunriseSet;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const horizonGlow = ctx.createRadialGradient(
          canvas.width * 0.5, dawnStrength > duskStrength ? canvas.height * 0.82 : canvas.height * 0.28, 0,
          canvas.width * 0.5, dawnStrength > duskStrength ? canvas.height * 0.82 : canvas.height * 0.28, canvas.width * 0.72
        );
        horizonGlow.addColorStop(0, `rgba(255, 214, 138, ${dawnDuskStrength * 0.18})`);
        horizonGlow.addColorStop(0.35, `rgba(210, 118, 160, ${dawnDuskStrength * 0.11})`);
        horizonGlow.addColorStop(0.55, `rgba(255, 136, 88, ${dawnDuskStrength * 0.12})`);
        horizonGlow.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = horizonGlow;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      drawNightSettlementLights(nightAlpha, bloodMoonStrength);

      const vignette = ctx.createRadialGradient(
        canvas.width * 0.5, canvas.height * 0.48, canvas.width * 0.18,
        canvas.width * 0.5, canvas.height * 0.5, canvas.width * 0.78
      );
      vignette.addColorStop(0, "rgba(0,0,0,0)");
      vignette.addColorStop(0.72, "rgba(0,0,0,0)");
      vignette.addColorStop(1, `rgba(6, 8, 12, ${0.08 + nightStrength * 0.08})`);
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function drawBoard() {
      ensureStaticBoardCanvas();
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (staticBoardCanvas) {
        ctx.drawImage(staticBoardCanvas, 0, 0);
      }
      drawBoardDynamic();
      drawAtmosphereOverlays();
      drawWeatherOverlay();
    }

    function provinceHexPolygon() {
      return [[50, 0], [93, 24], [93, 76], [50, 100], [7, 76], [7, 24]];
    }

    function pointInPolygon(x, y, polygon) {
      let inside = false;
      for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        const xi = polygon[i][0];
        const yi = polygon[i][1];
        const xj = polygon[j][0];
        const yj = polygon[j][1];
        const intersects = ((yi > y) !== (yj > y))
          && (x < ((xj - xi) * (y - yi)) / ((yj - yi) || 0.0001) + xi);
        if (intersects) inside = !inside;
      }
      return inside;
    }

    function clampPointIntoProvinceHex(x, y) {
      const polygon = provinceHexPolygon();
      if (pointInPolygon(x, y, polygon)) return { x, y };
      let low = 0;
      let high = 1;
      let px = 50;
      let py = 58;
      for (let i = 0; i < 16; i++) {
        const mid = (low + high) / 2;
        const testX = 50 + (x - 50) * mid;
        const testY = 58 + (y - 58) * mid;
        if (pointInPolygon(testX, testY, polygon)) {
          px = testX;
          py = testY;
          low = mid;
        } else {
          high = mid;
        }
      }
      return { x: px, y: py };
    }

    function provinceHotspotsForTile(tile) {
      const systems = ensureTileSystems(tile);
      const mainLabel = tile.capital ? "Royal Keep" : (estateMeta(tile.estate)?.label || "Town Hall");
      const hotspots = [
        { id: "center", label: mainLabel, kind: "structure", x: 50, y: 32, radius: 8, message: tile.capital ? "The keep dominates the province. Courtiers, scribes, and envoys move through the grand hall under constant watch." : `${mainLabel} anchors the district. Clerks, tax-men, and local elites keep the province running from here.` },
        { id: "steward", label: "Steward", kind: "npc", x: 36, y: 44, radius: 7, message: `Steward report: prosperity ${systems.prosperity}, loyalty ${systems.loyalty}, unrest ${systems.unrest}. The province is ${systems.unrest >= 18 ? "restless" : "holding together"}.` },
        { id: "guard", label: "Guard Captain", kind: "npc", x: 63, y: 44, radius: 7, message: `The guard captain reports ${tile.troops} troops in province and a defense value of ${tileDefenseBonus(tile)}.` },
        { id: "crowd", label: "Town Square", kind: "npc", x: 50, y: 55, radius: 9, message: systems.unrest >= 18 ? "The square is loud with rumors, price complaints, and whispered anger at the current order." : "Merchants and townsfolk fill the square. The mood is busy, watchful, and mostly calm." },
      ];
      if (systems.buildings.market || tile.estate === "town" || tile.estate === "port") hotspots.push({ id: "market", label: "Market Hall", kind: "structure", x: 24, y: 51, radius: 7, message: `The market is active. Trade output from this province currently contributes ${tileIncomeValue(tile)} extra crown${tileIncomeValue(tile) === 1 ? "" : "s"}.` });
      if (systems.buildings.barracks || tile.estate === "fort") hotspots.push({ id: "barracks", label: "Barracks", kind: "structure", x: 76, y: 51, radius: 7, message: "Barracks yards ring with drills, shouted orders, and the scrape of weapons being maintained for the next march." });
      if (systems.buildings.farm) hotspots.push({ id: "farms", label: "Fields", kind: "structure", x: 21, y: 82, radius: 8, message: "Out beyond the square, worked fields and supply wagons keep the garrison fed and the province steady." });
      if (systems.buildings.manor || tile.estate === "palace") hotspots.push({ id: "manor", label: tile.estate === "palace" ? "Pleasure Court" : "Manor", kind: "structure", x: 74, y: 78, radius: 8, message: tile.estate === "palace" ? "The pleasure court is rich with perfume, gossip, music, and the politics of private favor." : "The local manor houses administrators, visiting nobles, and the quieter machinery of control." });
      if (tile.coastal || tile.estate === "port" || systems.buildings.harbor) hotspots.push({ id: "docks", label: "Harbor Gate", kind: "structure", x: 52, y: 13, radius: 8, message: "The waterfront is alive with cargo, fishermen, shipwrights, and sentries watching the horizon." });
      if (tile.estate === "relic") hotspots.push({ id: "relic", label: "Shrine", kind: "structure", x: 82, y: 28, radius: 7, message: "The relic shrine draws pilgrims, opportunists, and people with dangerous ideas about fate and legitimacy." });
      if (tile.estate === "road" || systems.buildings.roads) hotspots.push({ id: "gate", label: "Gatehouse", kind: "structure", x: 50, y: 88, radius: 7, message: "Traffic through the gatehouse never stops. Wagons, riders, and scouts pull this province into the wider realm." });
      if (systems.buildings.watchtower) hotspots.push({ id: "tower", label: "Watchtower", kind: "structure", x: 15, y: 26, radius: 6, message: "From the watchtower, sentries can survey the approaches and spot trouble before it reaches the square." });
      if (systems.prosperity >= 12) hotspots.push({ id: "tavern", label: "Tavern", kind: "structure", x: 60, y: 68, radius: 7, message: "The tavern is loud with drink, gossip, and the kind of confidence people only borrow for a night." });
      if (systems.prosperity >= 16 || systems.buildings.manor) hotspots.push({ id: "bathhouse", label: "Bathhouse", kind: "structure", x: 38, y: 71, radius: 7, message: "Steam, perfume, and private talk drift out through curtained entrances." });
      if (systems.prosperity >= 18 || tile.capital) hotspots.push({ id: "archive", label: "Archive", kind: "structure", x: 61, y: 24, radius: 6, message: "Ledgers, letters, and old charters sleep here under careful lock and dust." });
      if (tile.estate === "port" || systems.buildings.harbor || systems.buildings.market) hotspots.push({ id: "warehouse", label: "Warehouse", kind: "structure", x: 36, y: 20, radius: 6, message: "Storehouses line the district, full of cargo, shortages, and tempting secrets." });
      return hotspots;
    }

    function nearestProvinceHotspot(tile) {
      if (!tileSceneState || !tile) return null;
      const hotspots = provinceHotspotsForTile(tile);
      let best = null;
      let bestDistance = Infinity;
      for (const hotspot of hotspots) {
        const dx = hotspot.x - tileSceneState.x;
        const dy = hotspot.y - tileSceneState.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < bestDistance) {
          bestDistance = distance;
          best = hotspot;
        }
      }
      return best ? { hotspot: best, distance: bestDistance } : null;
    }

    function provinceSceneSize() {
      return { width: 6400, height: 4200 };
    }

    function provincePixelPolygon(scene) {
      return provinceHexPolygon().map(([x, y]) => [scene.width * (x / 100), scene.height * (y / 100)]);
    }

    function provinceBox(id, x, y, w, h, label, fill, solid = true) {
      return { id, x, y, w, h, label, fill, solid };
    }

    function createProvinceScene(tile) {
      const { width, height } = provinceSceneSize();
      const systems = ensureTileSystems(tile);
      const scene = {
        width,
        height,
        polygon: provincePixelPolygon({ width, height }),
        roads: [
          { x: width * 0.488, y: height * 0.06, w: width * 0.024, h: height * 0.84 },
          { x: width * 0.15, y: height * 0.44, w: width * 0.7, h: height * 0.026 },
          { x: width * 0.2, y: height * 0.25, w: width * 0.22, h: height * 0.018, angle: 0.58 },
          { x: width * 0.58, y: height * 0.25, w: width * 0.22, h: height * 0.018, angle: -0.58 },
          { x: width * 0.2, y: height * 0.68, w: width * 0.22, h: height * 0.018, angle: -0.58 },
          { x: width * 0.58, y: height * 0.68, w: width * 0.22, h: height * 0.018, angle: 0.58 },
        ],
        structures: [],
        hotspots: [],
        player: { x: width * 0.49, y: height * 0.86, w: 24, h: 24, speed: 5.1 },
        camera: { x: 0, y: 0 },
      };

      scene.structures.push(provinceBox("center", width * 0.36, height * 0.16, width * 0.28, height * 0.2, tile.capital ? "Royal Keep" : (estateMeta(tile.estate)?.label || "Town Hall"), "#e8d0a0"));
      scene.structures.push(provinceBox("square", width * 0.39, height * 0.4, width * 0.22, height * 0.12, "Square", "#e7d3a4", false));
      if (systems.buildings.market || tile.estate === "town" || tile.estate === "port") scene.structures.push(provinceBox("market", width * 0.14, height * 0.42, width * 0.18, height * 0.14, "Market Hall", "#e9c98d"));
      if (systems.buildings.barracks || tile.estate === "fort") scene.structures.push(provinceBox("barracks", width * 0.68, height * 0.42, width * 0.18, height * 0.14, "Barracks", "#cfc4b0"));
      if (systems.buildings.farm) scene.structures.push(provinceBox("farms", width * 0.08, height * 0.74, width * 0.24, height * 0.12, "Fields", "#9ebb60", false));
      if (systems.buildings.manor || tile.estate === "palace") scene.structures.push(provinceBox("manor", width * 0.68, height * 0.72, width * 0.18, height * 0.12, tile.estate === "palace" ? "Pleasure Court" : "Manor", "#dcc19d"));
      if (tile.coastal || tile.estate === "port" || systems.buildings.harbor) scene.structures.push(provinceBox("docks", width * 0.1, height * 0.02, width * 0.8, height * 0.12, "Waterfront", "#73b5d2", false));
      if (tile.estate === "relic") scene.structures.push(provinceBox("relic", width * 0.78, height * 0.16, width * 0.1, height * 0.11, "Relic Shrine", "#d9d0ae"));
      if (systems.buildings.watchtower) scene.structures.push(provinceBox("tower", width * 0.08, height * 0.15, width * 0.09, height * 0.12, "Watchtower", "#c0b7a2"));
      if (systems.prosperity >= 12) scene.structures.push(provinceBox("tavern", width * 0.56, height * 0.61, width * 0.12, height * 0.1, "Tavern", "#d6b285"));
      if (systems.prosperity >= 16 || systems.buildings.manor) scene.structures.push(provinceBox("bathhouse", width * 0.3, height * 0.64, width * 0.12, height * 0.1, "Bathhouse", "#d8c7af"));
      if (systems.prosperity >= 18 || tile.capital) scene.structures.push(provinceBox("archive", width * 0.56, height * 0.18, width * 0.1, height * 0.08, "Archive", "#d9cfb2"));
      if (tile.estate === "port" || systems.buildings.harbor || systems.buildings.market) scene.structures.push(provinceBox("warehouse", width * 0.26, height * 0.16, width * 0.12, height * 0.1, "Warehouse", "#bfa98b"));

      scene.hotspots = provinceHotspotsForTile(tile).map((hotspot) => ({
        ...hotspot,
        px: width * (hotspot.x / 100),
        py: height * (hotspot.y / 100),
        enterable: hotspot.kind === "structure",
      }));

      // Move structure hotspot positions to structure door locations (bottom-center)
      for (const s of scene.structures) {
        if (!s.id) continue;
        const match = scene.hotspots.find((h) => h.id === s.id);
        if (match) {
          // place door at bottom-center of structure, slightly outside
          const doorX = s.x + s.w * 0.5;
          const doorY = Math.min(s.y + s.h + 10, height - 10);
          match.px = doorX;
          match.py = doorY;
          match.enterable = true;
          match.door = true;
        }
      }

      // Scatter a number of NPC characters across the province so the
      // player can interact with many women in the district.
      const baseNpc = 12;
      const npcCount = Math.min(46, Math.max(12, baseNpc + Math.floor(systems.prosperity / 2) + (systems.buildings.market ? 8 : 0) + (tile.capital ? 6 : 0)));
      for (let i = 0; i < npcCount; i++) {
        const archetype = PROVINCE_NPC_ARCHETYPES[Math.floor(Math.random() * PROVINCE_NPC_ARCHETYPES.length)];
        const name = archetype.names[Math.floor(Math.random() * archetype.names.length)];
        const rx = 14 + Math.random() * 72;
        const ry = 14 + Math.random() * 74;
        const clamped = clampPointIntoProvinceHex(rx, ry);
        const px = width * (clamped.x / 100);
        const py = height * (clamped.y / 100);
        scene.hotspots.push({
          id: `npc-${i}`,
          label: name,
          title: `${name} the ${archetype.role}`,
          kind: "npc",
          role: archetype.role,
          archetype,
          px,
          py,
          radius: 6,
          message: `${name} moves through the district as one of its local ${archetype.role.toLowerCase()}s.`,
          moving: true,
          vx: (Math.random() - 0.5) * 1.15,
          vy: (Math.random() - 0.5) * 1.15,
        });
      }
      return scene;
    }

    function updateMovingNPCs(scene) {
      if (!scene || !scene.hotspots) return;
      const isRectScene = scene.polygon?.length === 4
        && scene.polygon[0]?.[0] === 0
        && scene.polygon[0]?.[1] === 0
        && scene.polygon[2]?.[0] === scene.width
        && scene.polygon[2]?.[1] === scene.height;
      for (const h of scene.hotspots) {
        if (h.kind !== 'npc' || !h.moving) continue;
        h.px += h.vx;
        h.py += h.vy;
        // bounce on bounds
        if (h.px < 8) { h.px = 8; h.vx = Math.abs(h.vx); }
        if (h.px > scene.width - 8) { h.px = scene.width - 8; h.vx = -Math.abs(h.vx); }
        if (h.py < 8) { h.py = 8; h.vy = Math.abs(h.vy); }
        if (h.py > scene.height - 8) { h.py = scene.height - 8; h.vy = -Math.abs(h.vy); }
        // simple collision with solid structures
        if (rectTouchesSolidProvinceStructure(scene, { x: h.px - 6, y: h.py - 6, w: 12, h: 12 })) {
          h.vx = -h.vx;
          h.vy = -h.vy;
          h.px += h.vx * 2;
          h.py += h.vy * 2;
        }
        if (!isRectScene) {
          const pxPct = (h.px / scene.width) * 100;
          const pyPct = (h.py / scene.height) * 100;
          const clamped = clampPointIntoProvinceHex(pxPct, pyPct);
          h.px = scene.width * (clamped.x / 100);
          h.py = scene.height * (clamped.y / 100);
        }
      }
    }

    // --- Building interior scenes ---
    function createBuildingInteriorScene(hotspot, tile) {
      const width = 2200;
      const height = 1400;
      const scene = {
        width,
        height,
        polygon: [[0,0],[width,0],[width,height],[0,height]],
        structures: [],
        hotspots: [],
        player: { x: width * 0.5 - 10, y: height * 0.82, w: 18, h: 18, speed: 3.2 },
        camera: { x: 0, y: 0 },
      };

      const label = hotspot.label || "Building";
      if (/Market/i.test(label)) {
        scene.structures.push({ x: width*0.12, y: height*0.1, w: width*0.76, h: height*0.18, label: "Market Hall", fill: "#efe0c0", solid: false });
        for (let i = 0; i < 8; i++) {
          const sx = width * (0.16 + (i%4)*0.18);
          const sy = height * (0.34 + Math.floor(i/4)*0.2);
          scene.structures.push({ x: sx, y: sy, w: width*0.13, h: height*0.11, label: "Stall", fill: "#f6e6d0", solid: false });
          scene.hotspots.push({ id: `stall-${i}`, label: "Vendor", kind: "npc", role: "Merchant", archetype: PROVINCE_NPC_ARCHETYPES[0], px: sx + (width*0.065), py: sy + (height*0.055), radius: 6, message: "She offers spices, ribbon, and sharp gossip in the same breath." });
        }
        scene.hotspots.push({ id: "counter", label: "Counting Desk", kind: "structure", px: width*0.5, py: height*0.23, radius: 8, message: "Ledgers, seals, and coins move quickly across the counting desk." });
      } else if (/Manor|Palace|Pleasure/i.test(label)) {
        scene.structures.push({ x: width*0.12, y: height*0.1, w: width*0.76, h: height*0.62, label: label, fill: "#e8d0a0", solid: false });
        scene.hotspots.push({ id: "throne", label: "Inner Hall", kind: "structure", px: width*0.5, py: height*0.26, radius: 10, message: "The inner hall is quiet and luxurious." });
        scene.hotspots.push({ id: "salon", label: "Private Salon", kind: "npc", role: "Courtier", archetype: PROVINCE_NPC_ARCHETYPES[1], px: width*0.68, py: height*0.36, radius: 8, message: "Velvet chairs and slow voices make every conversation here feel deliberate." });
      } else if (/Barracks|Fort/i.test(label)) {
        scene.structures.push({ x: width*0.1, y: height*0.12, w: width*0.78, h: height*0.62, label: "Barracks", fill: "#d9d6c8", solid: false });
        scene.hotspots.push({ id: "quarter", label: "Officer", kind: "npc", role: "Guard", archetype: PROVINCE_NPC_ARCHETYPES[2], px: width*0.6, py: height*0.28, radius: 8, message: "An officer tracks roster sheets and gives crisp answers." });
        scene.hotspots.push({ id: "rack", label: "Armory Rack", kind: "structure", px: width*0.3, py: height*0.34, radius: 8, message: "Weapons are stacked with practical care and no wasted ornament." });
      } else if (/Bathhouse/i.test(label)) {
        scene.structures.push({ x: width*0.14, y: height*0.14, w: width*0.72, h: height*0.54, label: "Bathhouse", fill: "#e5d9cb", solid: false });
        scene.hotspots.push({ id: "pool", label: "Steam Pool", kind: "structure", px: width*0.5, py: height*0.34, radius: 10, message: "Steam curls around the pool while private conversations disappear into the haze." });
        scene.hotspots.push({ id: "attendant", label: "Attendant", kind: "npc", role: "Courtier", archetype: PROVINCE_NPC_ARCHETYPES[1], px: width*0.68, py: height*0.48, radius: 8, message: "She knows who comes here to relax and who comes to make arrangements." });
      } else if (/Archive/i.test(label)) {
        scene.structures.push({ x: width*0.14, y: height*0.12, w: width*0.72, h: height*0.58, label: "Archive", fill: "#ddd5bf", solid: false });
        scene.hotspots.push({ id: "ledger", label: "Ledger Table", kind: "structure", px: width*0.48, py: height*0.38, radius: 8, message: "Open ledgers catalog taxes, cargo, debts, and private promises in neat ink." });
        scene.hotspots.push({ id: "scribe", label: "Scribe", kind: "npc", role: "Artisan", archetype: PROVINCE_NPC_ARCHETYPES[3], px: width*0.66, py: height*0.28, radius: 7, message: "She protects paper trails the way soldiers protect gates." });
      } else if (/Warehouse/i.test(label)) {
        scene.structures.push({ x: width*0.14, y: height*0.16, w: width*0.72, h: height*0.52, label: "Warehouse", fill: "#d2c1ab", solid: false });
        scene.hotspots.push({ id: "foreman", label: "Forewoman", kind: "npc", role: "Merchant", archetype: PROVINCE_NPC_ARCHETYPES[0], px: width*0.58, py: height*0.36, radius: 8, message: "She tracks shortages with the expression of someone tired of excuses." });
      } else if (/Tavern/i.test(label)) {
        scene.structures.push({ x: width*0.12, y: height*0.14, w: width*0.76, h: height*0.58, label: "Tavern", fill: "#cfb08a", solid: false });
        scene.hotspots.push({ id: "bar", label: "Bar", kind: "structure", px: width*0.5, py: height*0.28, radius: 10, message: "The bar is sticky with spilled drink and heavy with information." });
        scene.hotspots.push({ id: "hostess", label: "Hostess", kind: "npc", role: "Courtier", archetype: PROVINCE_NPC_ARCHETYPES[1], px: width*0.32, py: height*0.44, radius: 8, message: "She sees who drinks, who watches, and who keeps their hand too close to a dagger." });
      } else {
        scene.structures.push({ x: width*0.12, y: height*0.18, w: width*0.76, h: height*0.5, label, fill: '#efe8d8', solid: false });
        scene.hotspots.push({ id: "counter", label: "Counter", kind: "structure", px: width*0.5, py: height*0.66, radius: 8, message: "A counter where locals conduct business." });
      }

      scene.hotspots.push({ id: "exit", label: "Exit Door", kind: "structure", px: width*0.5, py: height*0.92, radius: 10, message: `You step back out into the ${tile.capital ? "capital" : "province"}.`, door: true });

      const insideCount = 5 + Math.floor(Math.random()*5);
      for (let i = 0; i < insideCount; i++) {
        const archetype = PROVINCE_NPC_ARCHETYPES[Math.floor(Math.random() * PROVINCE_NPC_ARCHETYPES.length)];
        const name = archetype.names[i % archetype.names.length];
        const px = width * (0.18 + Math.random() * 0.64);
        const py = height * (0.26 + Math.random() * 0.5);
        scene.hotspots.push({
          id: `inpc-${i}`,
          label: name,
          title: `${name} the ${archetype.role}`,
          kind: "npc",
          role: archetype.role,
          archetype,
          px,
          py,
          radius: 6,
          message: "She glances up, measures you quickly, and decides you're worth answering.",
          moving: true,
          vx: (Math.random()-0.5)*0.8,
          vy: (Math.random()-0.5)*0.8,
        });
      }

      return { id: hotspot.id, label, scene };
    }

    function updateBuildingScene(buildingWrapper) {
      if (!buildingWrapper || !buildingWrapper.scene) return;
      const scene = buildingWrapper.scene;
      // move NPCs inside building
      updateMovingNPCs(scene);
      let dx = 0;
      let dy = 0;
      if (provinceKeys.left) dx -= scene.player.speed;
      if (provinceKeys.right) dx += scene.player.speed;
      if (provinceKeys.up) dy -= scene.player.speed;
      if (provinceKeys.down) dy += scene.player.speed;
      if (dx !== 0 || dy !== 0) {
        // simple collision: keep within polygon (rectangle) and not inside solid structures
        const nextX = { ...scene.player, x: scene.player.x + dx };
        const nextY = { ...scene.player, y: scene.player.y + dy };
        const centerX = nextX.x + nextX.w/2;
        const centerY = scene.player.y + scene.player.h/2;
        if (centerX >= 0 && centerX <= scene.width && !rectTouchesSolidProvinceStructure(scene, nextX)) scene.player.x = nextX.x;
        const centerY2 = nextY.y + nextY.h/2;
        const centerX2 = scene.player.x + scene.player.w/2;
        if (centerY2 >= 0 && centerY2 <= scene.height && !rectTouchesSolidProvinceStructure(scene, nextY)) scene.player.y = nextY.y;
      }
      // camera centers on player
      const vpWidth = Math.max(320, (document.getElementById('provinceCanvas')?.clientWidth) || 920);
      const vpHeight = Math.max(240, (document.getElementById('provinceCanvas')?.clientHeight) || 620);
      scene.camera.x = Math.max(0, Math.min(scene.width - vpWidth, Math.floor(scene.player.x + scene.player.w/2 - vpWidth/2)));
      scene.camera.y = Math.max(0, Math.min(scene.height - vpHeight, Math.floor(scene.player.y + scene.player.h/2 - vpHeight/2)));
    }

    function drawBuildingScene(canvas, buildingWrapper) {
      const wrapper = buildingWrapper;
      if (!wrapper || !wrapper.scene || !canvas) return;
      const scene = wrapper.scene;
      const ctx2 = canvas.getContext('2d');
      if (!ctx2) return;
      const vpWidth = Math.max(320, canvas.clientWidth || 920);
      const vpHeight = Math.max(240, canvas.clientHeight || 620);
      canvas.width = vpWidth;
      canvas.height = vpHeight;
      ctx2.clearRect(0,0,vpWidth,vpHeight);

      // translate so camera shows the scene portion
      ctx2.save();
      ctx2.translate(-scene.camera.x, -scene.camera.y);

      // background
      ctx2.fillStyle = '#efe8d8';
      ctx2.fillRect(0,0,scene.width,scene.height);

      // draw structures
      for (const s of scene.structures) {
        ctx2.fillStyle = s.fill || '#e8e0c8';
        ctx2.fillRect(s.x, s.y, s.w, s.h);
        ctx2.strokeStyle = 'rgba(80,60,30,0.4)';
        ctx2.strokeRect(s.x, s.y, s.w, s.h);
        ctx2.fillStyle = '#3e2c18';
        ctx2.font = 'bold 14px Georgia';
        ctx2.textAlign = 'center';
        ctx2.fillText(s.label, s.x + s.w/2, s.y + s.h/2);
      }

      const nearby = nearestProvinceSceneHotspot(scene);
      for (const h of scene.hotspots) {
        ctx2.beginPath();
        ctx2.arc(h.px, h.py, h.radius * 5.2, 0, Math.PI*2);
        ctx2.fillStyle = h.door
          ? "rgba(206, 143, 71, 0.96)"
          : (nearby?.hotspot.id === h.id && nearby.distance <= h.radius*6 ? 'rgba(255,230,160,0.95)' : 'rgba(250,245,232,0.95)');
        ctx2.fill();
        ctx2.strokeStyle = 'rgba(90,70,40,0.36)';
        ctx2.stroke();
        ctx2.fillStyle = '#412d18';
        ctx2.font = 'bold 12px Trebuchet MS';
        ctx2.textAlign = 'center';
        ctx2.fillText(h.label, h.px, h.py + 4);
      }

      // player
      ctx2.fillStyle = '#2f7d4d';
      ctx2.beginPath();
      ctx2.arc(scene.player.x + scene.player.w/2, scene.player.y + scene.player.h/2, 9, 0, Math.PI*2);
      ctx2.fill();
      ctx2.strokeStyle = '#fff'; ctx2.lineWidth = 2; ctx2.stroke();

      ctx2.restore();
    }

    function pointInProvinceScene(scene, x, y) {
      return pointInPolygon(x, y, scene.polygon);
    }

    function rectTouchesSolidProvinceStructure(scene, rect) {
      return scene.structures.some((structure) => structure.solid !== false && rect.x < structure.x + structure.w && rect.x + rect.w > structure.x && rect.y < structure.y + structure.h && rect.y + rect.h > structure.y);
    }

    function tryMoveProvincePlayer(scene, dx, dy) {
      const nextX = { ...scene.player, x: scene.player.x + dx };
      const nextY = { ...scene.player, y: scene.player.y + dy };
      const centerX = nextX.x + nextX.w / 2;
      const centerY = scene.player.y + scene.player.h / 2;
      if (pointInProvinceScene(scene, centerX, centerY) && !rectTouchesSolidProvinceStructure(scene, nextX)) {
        scene.player.x = nextX.x;
      }
      const centerY2 = nextY.y + nextY.h / 2;
      const centerX2 = scene.player.x + scene.player.w / 2;
      if (pointInProvinceScene(scene, centerX2, centerY2) && !rectTouchesSolidProvinceStructure(scene, nextY)) {
        scene.player.y = nextY.y;
      }
    }

    function nearestProvinceSceneHotspot(scene) {
      const px = scene.player.x + scene.player.w / 2;
      const py = scene.player.y + scene.player.h / 2;
      let best = null;
      let bestDistance = Infinity;
      for (const hotspot of scene.hotspots) {
        const distance = Math.hypot(px - hotspot.px, py - hotspot.py);
        if (distance < bestDistance) {
          bestDistance = distance;
          best = hotspot;
        }
      }
      return best ? { hotspot: best, distance: bestDistance } : null;
    }

    function syncProvinceScenePanel() {
      if (activeMenuTab !== "tile" || !tileSceneState?.scene) return;
      const noteEl = document.getElementById("provinceSceneNote");
      if (noteEl) noteEl.textContent = tileSceneState.lastMessage;
      const legendEl = document.getElementById("provinceSceneLegend");
      if (!legendEl) return;
      // If inside a building, show nearby for the building scene instead
      const nearbyScene = tileSceneState.building ? tileSceneState.building.scene : tileSceneState.scene;
      const nearby = nearestProvinceSceneHotspot(nearbyScene);
      const nearbyText = nearby && nearby.distance <= nearby.hotspot.radius * 6
        ? `Nearby: ${nearby.hotspot.label}`
        : "Nearby: nothing interactable in reach";
      legendEl.textContent = [nearbyText, "Enter to interact", "Gold doors mark enterable buildings.", "Buildings and walls block movement in the district."].join(" • ");
    }

    function updateProvinceScene() {
      if (activeMenuTab !== "tile" || !tileSceneState?.scene) return;
      // If the player is inside a building, update that scene instead
      if (tileSceneState.building) {
        updateBuildingScene(tileSceneState.building);
        syncProvinceScenePanel();
        return;
      }

      const scene = tileSceneState.scene;
      // update wandering NPCs
      updateMovingNPCs(scene);
      let dx = 0;
      let dy = 0;
      if (provinceKeys.left) dx -= scene.player.speed;
      if (provinceKeys.right) dx += scene.player.speed;
      if (provinceKeys.up) dy -= scene.player.speed;
      if (provinceKeys.down) dy += scene.player.speed;
      if (dx !== 0 || dy !== 0) {
        tryMoveProvincePlayer(scene, dx, dy);
      }
      syncProvinceScenePanel();
    }

    function drawProvinceScene(canvas, tile) {
      const scene = tileSceneState?.scene;
      if (!scene || !canvas) return;
      // If inside a building, draw the building interior instead
      if (tileSceneState?.building) {
        drawBuildingScene(canvas, tileSceneState.building);
        return;
      }
      const ctx2 = canvas.getContext("2d");
      if (!ctx2) return;

      // Viewport size equals the CSS/display size of the canvas
      const vpWidth = Math.max(320, canvas.clientWidth || 920);
      const vpHeight = Math.max(240, canvas.clientHeight || 620);
      canvas.width = vpWidth;
      canvas.height = vpHeight;
      ctx2.clearRect(0, 0, vpWidth, vpHeight);

      // Update camera to keep player near center
      if (!scene.camera) scene.camera = { x: 0, y: 0 };
      const playerCenterX = scene.player.x + scene.player.w / 2;
      const playerCenterY = scene.player.y + scene.player.h / 2;
      scene.camera.x = Math.max(0, Math.min(scene.width - vpWidth, Math.floor(playerCenterX - vpWidth / 2)));
      scene.camera.y = Math.max(0, Math.min(scene.height - vpHeight, Math.floor(playerCenterY - vpHeight / 2)));

      // Draw virtual scene translated by the camera
      ctx2.save();
      ctx2.translate(-scene.camera.x, -scene.camera.y);

      // Clip to the province polygon (in scene coordinates)
      ctx2.beginPath();
      scene.polygon.forEach(([x, y], index) => {
        if (index === 0) ctx2.moveTo(x, y);
        else ctx2.lineTo(x, y);
      });
      ctx2.closePath();
      ctx2.clip();

      const bg = ctx2.createLinearGradient(0, 0, 0, scene.height);
      bg.addColorStop(0, "#cddcae");
      bg.addColorStop(1, "#9db76c");
      ctx2.fillStyle = bg;
      ctx2.fillRect(0, 0, scene.width, scene.height);

      if (tile.coastal || tile.estate === "port" || ensureTileSystems(tile).buildings.harbor) {
        ctx2.fillStyle = "rgba(108, 176, 208, 0.95)";
        ctx2.fillRect(scene.width * 0.1, scene.height * 0.02, scene.width * 0.8, scene.height * 0.15);
      }

      for (const road of scene.roads) {
        ctx2.save();
        ctx2.fillStyle = "#bc9a62";
        if (road.angle) {
          ctx2.translate(road.x, road.y);
          ctx2.rotate(road.angle);
          ctx2.fillRect(0, 0, road.w, road.h);
        } else {
          ctx2.fillRect(road.x, road.y, road.w, road.h);
        }
        ctx2.restore();
      }

      for (const structure of scene.structures) {
        ctx2.fillStyle = structure.fill;
        ctx2.fillRect(structure.x, structure.y, structure.w, structure.h);
        ctx2.strokeStyle = "rgba(84, 58, 28, 0.55)";
        ctx2.lineWidth = 2;
        ctx2.strokeRect(structure.x, structure.y, structure.w, structure.h);
        ctx2.fillStyle = "#3e2c18";
        ctx2.font = "bold 15px Georgia";
        ctx2.textAlign = "center";
        ctx2.fillText(structure.label, structure.x + structure.w / 2, structure.y + structure.h / 2);
        const doorHotspot = scene.hotspots.find((hotspot) => hotspot.id === structure.id && hotspot.door);
        if (doorHotspot) {
          ctx2.fillStyle = "#8d5825";
          ctx2.fillRect(doorHotspot.px - 28, doorHotspot.py - 18, 56, 18);
          ctx2.strokeStyle = "rgba(255, 226, 162, 0.85)";
          ctx2.lineWidth = 3;
          ctx2.strokeRect(doorHotspot.px - 28, doorHotspot.py - 18, 56, 18);
        }
      }

      const nearby = nearestProvinceSceneHotspot(scene);
      for (const hotspot of scene.hotspots) {
        ctx2.beginPath();
        ctx2.arc(hotspot.px, hotspot.py, hotspot.radius * 5.2, 0, Math.PI * 2);
        ctx2.fillStyle = hotspot.door
          ? "rgba(208, 146, 67, 0.96)"
          : (nearby?.hotspot.id === hotspot.id && nearby.distance <= hotspot.radius * 6
            ? "rgba(255, 226, 140, 0.92)"
            : "rgba(250, 245, 232, 0.9)");
        ctx2.fill();
        ctx2.strokeStyle = "rgba(94, 69, 34, 0.45)";
        ctx2.stroke();
        ctx2.fillStyle = "#412d18";
        ctx2.font = "bold 12px Trebuchet MS";
        ctx2.textAlign = "center";
        ctx2.fillText(hotspot.label, hotspot.px, hotspot.py + 4);
      }

      ctx2.fillStyle = "#2f7d4d";
      ctx2.beginPath();
      ctx2.arc(scene.player.x + scene.player.w / 2, scene.player.y + scene.player.h / 2, 10, 0, Math.PI * 2);
      ctx2.fill();
      ctx2.strokeStyle = "#ffffff";
      ctx2.lineWidth = 2;
      ctx2.stroke();

      ctx2.restore();

      // Draw the hex border in viewport coordinates
      ctx2.beginPath();
      scene.polygon.forEach(([x, y], index) => {
        const sx = x - scene.camera.x;
        const sy = y - scene.camera.y;
        if (index === 0) ctx2.moveTo(sx, sy);
        else ctx2.lineTo(sx, sy);
      });
      ctx2.closePath();
      ctx2.lineWidth = 3;
      ctx2.strokeStyle = "rgba(90, 104, 57, 0.9)";
      ctx2.stroke();
    }

    function ensureProvinceSceneLoop() {
      if (provinceSceneFrame !== null) return;
      const step = () => {
        provinceSceneFrame = requestAnimationFrame(step);
        if (activeMenuTab !== "tile" || !tileSceneState?.scene) return;
        updateProvinceScene();
        const canvasEl = document.getElementById("provinceCanvas");
        const tile = getTile(tileSceneState.q, tileSceneState.r);
        if (canvasEl && tile) drawProvinceScene(canvasEl, tile);
      };
      provinceSceneFrame = requestAnimationFrame(step);
    }

    function activeCommandTile() {
      return selectedTile || inspectedTile || hoveredTile || playerCapitalTile();
    }

    function tileUpgradeSummary(tile) {
      const systems = ensureTileSystems(tile);
      return Object.entries(systems.buildings)
        .filter(([, level]) => level > 0)
        .map(([key, level]) => `${TILE_UPGRADES[key]?.label || key} ${level}`)
        .join(" • ");
    }

    function chooseRandom(list) {
      return list[Math.floor(Math.random() * list.length)];
    }

    function describeProvinceEffect(effect) {
      const parts = [];
      if (effect.treasury) parts.push(`${effect.treasury > 0 ? "+" : ""}${effect.treasury} crowns`);
      if (effect.prosperity) parts.push(`${effect.prosperity > 0 ? "+" : ""}${effect.prosperity} prosperity`);
      if (effect.loyalty) parts.push(`${effect.loyalty > 0 ? "+" : ""}${effect.loyalty} loyalty`);
      if (effect.unrest) parts.push(`${effect.unrest > 0 ? "+" : ""}${effect.unrest} unrest`);
      return parts.length ? ` (${parts.join(", ")})` : "";
    }

    function applyProvinceInteractionEffect(tile, effect) {
      if (!tile || !effect) return "";
      const systems = ensureTileSystems(tile);
      if (typeof effect.treasury === "number") treasury = Math.max(0, treasury + effect.treasury);
      if (typeof effect.prosperity === "number") systems.prosperity = clamp(systems.prosperity + effect.prosperity, 0, 100);
      if (typeof effect.loyalty === "number") systems.loyalty = clamp(systems.loyalty + effect.loyalty, 0, 100);
      if (typeof effect.unrest === "number") systems.unrest = clamp(systems.unrest + effect.unrest, 0, 100);
      updateHUD();
      renderOverviewPanel();
      return describeProvinceEffect(effect);
    }

    function npcInteractionOptions(hotspot) {
      if (hotspot?.archetype?.options?.length) return hotspot.archetype.options;
      return ["Talk", "Ask Rumors", "Compliment", "Flirt", "Leave"];
    }

    function interactTileScene() {
      if (!tileSceneState) return;
      const tile = getTile(tileSceneState.q, tileSceneState.r);
      if (!tile) return;
      // If player is inside a building, interact with that scene instead
      if (tileSceneState.building) {
        const bscene = tileSceneState.building.scene;
        const nearestB = nearestProvinceSceneHotspot(bscene);
        if (nearestB && nearestB.distance <= nearestB.hotspot.radius * 6) {
          const bh = nearestB.hotspot;
          if (bh.id === "exit") {
            tileSceneState.lastMessage = bh.message || "You step back outside.";
            tileSceneState.building = null;
            tileSceneState.currentInteraction = null;
          } else if (bh.kind === "npc") {
            startNPCInteraction(bh);
          } else {
            tileSceneState.lastMessage = bh.message;
          }
        } else {
          tileSceneState.lastMessage = "You look around the building but nothing immediate catches your attention.";
        }
        syncProvinceScenePanel();
        return;
      }

      const nearest = tileSceneState.scene ? nearestProvinceSceneHotspot(tileSceneState.scene) : null;
      if (nearest && nearest.distance <= nearest.hotspot.radius * 6) {
        const h = nearest.hotspot;
        // If the hotspot is a structure and enterable, open its interior
        if (h.enterable) {
          tileSceneState.lastMessage = `You enter the ${h.label}. ${h.message || "There's activity here."}`;
          tileSceneState.building = createBuildingInteriorScene(h, tile);
          // initialize building camera/player centering
          updateBuildingScene(tileSceneState.building);
          syncProvinceScenePanel();
          return;
        }
        if (h.kind === "npc") {
          // start an interactive dialog with this NPC
          startNPCInteraction(h);
        } else {
          tileSceneState.lastMessage = h.message;
        }
      } else {
        tileSceneState.lastMessage = "You pause in the street, but nothing nearby demands your attention yet.";
      }
      syncProvinceScenePanel();
    }

    function startNPCInteraction(hotspot) {
      if (!tileSceneState || !hotspot) return;
      tileSceneState.currentInteraction = {
        id: hotspot.id,
        name: hotspot.title || hotspot.label,
        hotspotRef: hotspot,
        options: npcInteractionOptions(hotspot),
      };
      tileSceneState.lastMessage = `${hotspot.title || hotspot.label} is ready to talk.`;
      syncProvinceScenePanel();
    }

    function endNPCInteraction() {
      if (!tileSceneState) return;
      tileSceneState.currentInteraction = null;
      tileSceneState.lastMessage = "You step back from the conversation.";
      syncProvinceScenePanel();
    }

    function handleNPCAction(action) {
      if (!tileSceneState?.currentInteraction) return;
      const tile = getTile(tileSceneState.q, tileSceneState.r);
      const id = tileSceneState.currentInteraction.id;
      const scene = tileSceneState.building ? tileSceneState.building.scene : tileSceneState.scene;
      const h = scene.hotspots.find((s) => s.id === id) || tileSceneState.currentInteraction.hotspotRef;
      if (!h) return;
      const npc = h.archetype || {};
      let reply = "";
      if (action === "Talk") reply = chooseRandom(npc.talk || [`${h.label} tells you about the latest trouble in the district.`]);
      else if (action === "Ask Rumors") reply = chooseRandom(npc.rumors || [`${h.label} admits there is always something being whispered in this province.`]);
      else if (action === "Compliment") reply = chooseRandom(npc.compliment || [`${h.label} accepts the compliment with a warmer expression.`]);
      else if (action === "Flirt") reply = chooseRandom(npc.flirt || [`${h.label} meets the flirtation with a careful smile.`]);
      else if (action === "Browse Wares") {
        const result = chooseRandom(npc.browse || [{ text: `${h.label} has little left to sell at the moment.` }]);
        reply = result.text + applyProvinceInteractionEffect(tile, result);
      } else if (action === "Buy Drink") {
        const result = chooseRandom(npc.drink || [{ text: `${h.label} shares a drink and a softer tone.` }]);
        reply = result.text + applyProvinceInteractionEffect(tile, result);
      } else if (action === "Request Favor") {
        const result = chooseRandom(npc.favor || [{ text: `${h.label} agrees to put in a discreet word for you.` }]);
        reply = result.text + applyProvinceInteractionEffect(tile, result);
      } else if (action === "Ask Patrols") {
        const result = chooseRandom(npc.patrols || [{ text: `${h.label} explains how the local watches are currently set.` }]);
        reply = result.text + applyProvinceInteractionEffect(tile, result);
      } else if (action === "Inspect Morale") {
        const result = chooseRandom(npc.morale || [{ text: `${h.label} gives a blunt report on the province's mood.` }]);
        reply = result.text + applyProvinceInteractionEffect(tile, result);
      } else if (action === "Commission Work") {
        const result = chooseRandom(npc.commission || [{ text: `${h.label} sketches out a list of repairs that would strengthen the district.` }]);
        reply = result.text + applyProvinceInteractionEffect(tile, result);
      } else if (action === "Trade") {
        reply = `${h.label} gives you prices, gossip, and a quick read on which districts are spending above their means.`;
      } else if (action === "Leave") {
        return endNPCInteraction();
      }
      tileSceneState.lastMessage = `${h.title || h.label}: ${reply}`;
      syncProvinceScenePanel();
    }

    function moveTileScene(dx, dy) {
      if (!tileSceneState?.scene) return;
      const activeScene = tileSceneState.building ? tileSceneState.building.scene : tileSceneState.scene;
      tryMoveProvincePlayer(activeScene, dx * activeScene.player.speed, dy * activeScene.player.speed);
      syncProvinceScenePanel();
    }

    function openTileScene(tile) {
      if (!tile || tile.terrain !== "land") return;
      provinceKeys = {};
      tileSceneState = {
        q: tile.q,
        r: tile.r,
        scene: createProvinceScene(tile),
        lastMessage: "Walk the province with WASD or the arrow keys. Move close to a landmark or person, then press Enter to interact.",
      };
      ensureProvinceSceneLoop();
      setMenuTab("tile");
    }

    function renderOverviewPanel() {
      if (!selectedTilePanelEl) return;
      selectedTilePanelEl.innerHTML = "";
      const tile = activeCommandTile();
      if (!tile) {
        selectedTilePanelEl.textContent = "Select or hover a land tile to inspect its district, upgrades, and local status.";
        return;
      }
      const systems = ensureTileSystems(tile);
      const shell = document.createElement("div");
      shell.className = "tile-command-card";
      inspectedTile = getTile(tile.q, tile.r) || tile;

      const title = document.createElement("div");
      title.className = "tile-command-title";
      title.textContent = `(${tile.q}, ${tile.r}) • ${tile.capital ? "Capital" : (estateMeta(tile.estate)?.label || "Province")}`;
      shell.appendChild(title);

      const meta = document.createElement("div");
      meta.className = "tile-command-meta";
      meta.textContent =
        `Owner ${tile.owner === NEUTRAL ? "Neutral" : factionById(tile.owner)?.leader || "Unknown"} • Troops ${tile.troops} • ` +
        `Prosperity ${systems.prosperity} • Loyalty ${systems.loyalty} • Unrest ${systems.unrest} • ` +
        `${tileUpgradeSummary(tile) || "No local upgrades yet"}`;
      shell.appendChild(meta);

      const duchess = tile.duchessId ? getDuchess(tile.duchessId) : null;
      const duchessSection = document.createElement("div");
      duchessSection.className = "tile-duchess-card";
      if (duchess) {
        const portrait = document.createElement("img");
        portrait.className = "portrait";
        portrait.src = duchess.portrait || "Queens/queen_elara_verdantia.jpg";
        portrait.alt = `${duchess.name} portrait`;
        portrait.addEventListener("error", () => {
          portrait.style.display = "none";
        });
        duchessSection.appendChild(portrait);

        const name = document.createElement("div");
        name.className = "tile-command-title";
        name.textContent = `${duchess.name} • ${duchess.title}`;
        duchessSection.appendChild(name);

        const archetype = document.createElement("div");
        archetype.className = "tile-command-meta";
        archetype.textContent = `${getArchetypeLabel(duchess.archetype)} • Status ${duchess.status}`;
        duchessSection.appendChild(archetype);

        const stats = document.createElement("div");
        stats.className = "tile-command-meta";
        stats.textContent = `Loyalty ${duchess.loyalty} • Ambition ${duchess.ambition} • Corruption ${duchess.corruption} • Influence ${duchess.localInfluence}`;
        duchessSection.appendChild(stats);

        const bond = document.createElement("div");
        bond.className = "tile-command-meta";
        bond.textContent = `Trust ${duchess.trust} • Romance ${duchess.romance} • Attraction ${duchess.attraction} • Family ${duchessPregnancyStatusLabel(duchess)}`;
        duchessSection.appendChild(bond);

        const traits = document.createElement("div");
        traits.className = "tile-command-meta";
        traits.textContent = `Traits: ${duchess.traits.join(", ")}`;
        duchessSection.appendChild(traits);

        const summary = document.createElement("div");
        summary.className = "tile-command-meta";
        summary.textContent = effectSummary(duchess);
        duchessSection.appendChild(summary);

        if (tile.owner === playerFactionId() && !gameOver) {
          const buttonRow = document.createElement("div");
          buttonRow.className = "tile-duchess-actions row";
          const actions = [
            ["Talk", () => openDuchessActionModal(tile, "talk")],
            ["Reward", () => openDuchessActionModal(tile, "reward")],
            ["Flirt", () => openDuchessActionModal(tile, "flirt")],
            ["Gift", () => openDuchessActionModal(tile, "gift")],
            ["Court", () => openDuchessActionModal(tile, "court")],
            ["Confide", () => openDuchessActionModal(tile, "confide")],
            ["Intimacy", () => openDuchessActionModal(tile, "intimacy")],
            ["Inspect", () => openDuchessActionModal(tile, "inspect")],
            ["Replace", () => openDuchessActionModal(tile, "replace")],
            ["Imprison", () => openDuchessActionModal(tile, "imprison")],
            ["Exile", () => openDuchessActionModal(tile, "exile")],
          ];
          for (const [label, action] of actions) {
            const btn = document.createElement("button");
            btn.textContent = label;
            btn.type = "button";
            btn.addEventListener("pointerdown", (ev) => {
              ev.preventDefault();
              ev.stopPropagation();
            });
            btn.addEventListener("click", (ev) => {
              ev.preventDefault();
              ev.stopPropagation();
              action();
            });
            buttonRow.appendChild(btn);
          }
          duchessSection.appendChild(buttonRow);
        }
      } else {
        const none = document.createElement("div");
        none.className = "tile-command-meta";
        none.textContent = "No Duchess Assigned.";
        duchessSection.appendChild(none);
        if (tile.owner === playerFactionId() && !gameOver) {
          const appointBtn = document.createElement("button");
          appointBtn.textContent = "Appoint Duchess";
          appointBtn.type = "button";
          appointBtn.addEventListener("pointerdown", (ev) => {
            ev.preventDefault();
            ev.stopPropagation();
          });
          appointBtn.addEventListener("click", (ev) => {
            ev.preventDefault();
            ev.stopPropagation();
            openAppointDuchessModal(getTile(tile.q, tile.r) || tile);
          });
          duchessSection.appendChild(appointBtn);
        }
      }
      shell.appendChild(duchessSection);

      const actionRow = document.createElement("div");
      actionRow.className = "row";
      const enterBtn = document.createElement("button");
      enterBtn.type = "button";
      enterBtn.textContent = "Enter Tile";
      enterBtn.disabled = tile.terrain !== "land";
      enterBtn.addEventListener("click", () => openTileScene(tile));
      actionRow.appendChild(enterBtn);
      shell.appendChild(actionRow);

      if (tile.owner === playerFactionId() && !gameOver && isPlayerControlledFaction(FACTIONS[currentFactionIndex].id)) {
        const upgrades = document.createElement("div");
        upgrades.className = "tile-upgrade-grid";
        for (const { key, meta: upgrade } of availableTileUpgrades(tile)) {
          const card = document.createElement("div");
          card.className = "tile-upgrade";
          const label = document.createElement("strong");
          label.textContent = `${upgrade.label} • ${treasury >= upgrade.cost ? upgrade.cost : `${upgrade.cost} needed`}`;
          card.appendChild(label);
          const desc = document.createElement("span");
          desc.textContent = `${upgrade.yield} Current level ${tileUpgradeLevel(tile, key)}/${upgrade.max}.`;
          card.appendChild(desc);
          const btn = document.createElement("button");
          btn.textContent = `Build ${upgrade.label}`;
          btn.disabled = treasury < upgrade.cost;
          btn.addEventListener("click", () => {
            if (applyTileUpgrade(tile, key, "You", true)) {
              render();
            }
          });
          card.appendChild(btn);
          upgrades.appendChild(card);
        }
        if (upgrades.childNodes.length) shell.appendChild(upgrades);
      }

      selectedTilePanelEl.appendChild(shell);
    }

    function renderTilePanel() {
      if (!tilePanelEl) return;
      tilePanelEl.innerHTML = "";
      const state = tileSceneState;
      const tile = state ? getTile(state.q, state.r) : null;
      if (!state || !tile) {
        tilePanelEl.textContent = "Choose a land tile first.";
        return;
      }
      const systems = ensureTileSystems(tile);
      const shell = document.createElement("div");
      shell.className = "tile-scene-shell";
      const card = document.createElement("div");
      card.className = "tile-scene-card";

      const head = document.createElement("div");
      head.className = "tile-command-title";
      head.textContent = `Tile (${tile.q}, ${tile.r}) • ${systems.district}`;
      card.appendChild(head);

      const meta = document.createElement("div");
      meta.className = "tile-command-meta";
      meta.textContent = `Owner ${tile.owner === NEUTRAL ? "Neutral" : factionById(tile.owner)?.leader || "Unknown"} • Troops ${tile.troops} • Prosperity ${systems.prosperity} • Loyalty ${systems.loyalty} • Unrest ${systems.unrest}`;
      card.appendChild(meta);

      const layout = document.createElement("div");
      layout.className = "tile-scene-layout";
      const wrap = document.createElement("div");
      wrap.className = "province-wrap";
      const canvas = document.createElement("canvas");
      canvas.id = "provinceCanvas";
      canvas.className = "province-canvas";
      wrap.appendChild(canvas);
      layout.appendChild(wrap);

      const side = document.createElement("div");
      side.className = "tile-scene-side";
      const note = document.createElement("div");
      note.className = "tile-scene-note";
      note.id = "provinceSceneNote";
      note.textContent = state.lastMessage;
      side.appendChild(note);
      const activeScene = state.building ? state.building.scene : state.scene;
      const nearby = activeScene ? nearestProvinceSceneHotspot(activeScene) : null;
      const legend = document.createElement("div");
      legend.className = "province-legend";
      legend.id = "provinceSceneLegend";
      const nearbyText = nearby && nearby.distance <= nearby.hotspot.radius * 6
        ? `Nearby: ${nearby.hotspot.label}`
        : "Nearby: nothing interactable in reach";
      legend.textContent = [nearbyText, "Enter to interact", "Gold doors mark enterable buildings.", "Buildings and walls block movement in the district."].join(" • ");
      side.appendChild(legend);
      const controls = document.createElement("div");
      controls.className = "tile-scene-actions";
      const buttons = [
        ["North", 0, -1],
        ["West", -1, 0],
        ["Interact", null, null],
        ["East", 1, 0],
        ["South", 0, 1],
      ];
      for (const [label, dx, dy] of buttons) {
        const btn = document.createElement("button");
        btn.textContent = label;
        btn.addEventListener("click", () => {
          if (label === "Interact") {
            interactTileScene();
          } else {
            moveTileScene(dx, dy);
          }
        });
        controls.appendChild(btn);
      }
      side.appendChild(controls);
      // If interacting with an NPC, show interaction options
      if (tileSceneState?.currentInteraction) {
        const interaction = tileSceneState.currentInteraction;
        const opts = document.createElement("div");
        opts.className = "tile-interaction-options";
        const head = document.createElement("div");
        head.className = "tiny";
        head.textContent = `Interacting with ${interaction.name}`;
        opts.appendChild(head);
        const help = document.createElement("div");
        help.className = "tiny";
        help.textContent = "Most actions are flavor-first, but some can shift local prosperity, loyalty, unrest, or your crowns.";
        opts.appendChild(help);
        for (const opt of interaction.options) {
          const b = document.createElement("button");
          b.textContent = opt;
          b.addEventListener("click", () => handleNPCAction(opt));
          opts.appendChild(b);
        }
        side.appendChild(opts);
      }
      layout.appendChild(side);
      card.appendChild(layout);
      shell.appendChild(card);
      tilePanelEl.appendChild(shell);
      drawProvinceScene(canvas, tile);
      syncProvinceScenePanel();
    }

    function renderPanels() {
      renderOverviewPanel();
      if (activeMenuTab === "leaders") renderLeaderPanel();
      if (activeMenuTab === "diplomacy") renderDiplomacyPanel();
      if (activeMenuTab === "harem") renderHaremPanel();
      if (activeMenuTab === "underworld") renderUnderworldPanel();
      if (activeMenuTab === "dev") renderDevPanel();
      if (activeMenuTab === "event") renderEventPanel();
      if (activeMenuTab === "tile") renderTilePanel();
    }

    function render() {
      drawBoard();
      updateHUD();
      renderPanels();
    }

    function scheduleBoardRender() {
      if (boardRenderQueued) return;
      boardRenderQueued = true;
      requestAnimationFrame(() => {
        boardRenderQueued = false;
        drawBoard();
      });
    }


    function addLog(text) {
      const p = document.createElement("p");
      p.textContent = text;
      logEl.prepend(p);
    }

    function queueEventModal(event) {
      eventQueue.push(event);
      if (activeMenuTab !== "event") {
        setMenuTab("event");
      } else {
        renderEventPanel();
      }
    }

    function dismissEventModal(advance = true) {
      if (!eventQueue.length) {
        setMenuTab("overview");
        return;
      }
      if (advance) eventQueue.shift();
      if (eventQueue.length) {
        renderEventPanel();
      } else {
        setMenuTab("overview");
      }
    }

    function renderEventPanel() {
      eventPanelEl.innerHTML = "";
      const event = eventQueue[0];
      if (!event) {
        modalOverlayEl.classList.remove("blackout-event");
        modalWindowEl.classList.remove("blackout-event");
        modalBodyEl.classList.remove("blackout-event");
        modalWindowEl.classList.remove("wide-event");
        modalBodyEl.classList.remove("wide-event");
        eventPanelEl.textContent = "No major event is waiting.";
        return;
      }
      modalOverlayEl.classList.toggle("blackout-event", Boolean(event.blackout));
      modalWindowEl.classList.toggle("blackout-event", Boolean(event.blackout));
      modalBodyEl.classList.toggle("blackout-event", Boolean(event.blackout));
      modalWindowEl.classList.toggle("wide-event", Boolean(event.wide));
      modalBodyEl.classList.toggle("wide-event", Boolean(event.wide));
      if (typeof event.render === "function") {
        event.render({ container: eventPanelEl, event });
        return;
      }

      const shell = document.createElement("div");
      shell.className = "event-shell";
      if (event.blackout) shell.classList.add("blackout");

      const card = document.createElement("div");
      card.className = "event-card";
      if (event.blackout) card.classList.add("blackout");

      const banner = document.createElement("div");
      banner.className = "event-banner";
      if (event.blackout) banner.classList.add("blackout");
      banner.textContent = event.title;
      card.appendChild(banner);

      const body = document.createElement("div");
      body.className = "event-body";
      if (event.blackout) body.classList.add("blackout");

      if (event.portrait) {
        const img = document.createElement("img");
        img.className = "event-portrait";
        if (event.blackout) img.classList.add("blackout");
        img.src = event.portrait;
        img.alt = `${event.title} portrait`;
        body.appendChild(img);
      }

      const textWrap = document.createElement("div");
      textWrap.className = "event-copy";
      if (event.blackout) textWrap.classList.add("blackout");

      const title = document.createElement("div");
      title.className = "event-title";
      title.textContent = event.label || "Major Event";
      textWrap.appendChild(title);

      const text = document.createElement("div");
      text.className = "event-text";
      text.textContent = event.body;
      textWrap.appendChild(text);

      const meta = document.createElement("div");
      meta.className = "event-meta";
      meta.textContent = event.meta || `Queue: 1 of ${eventQueue.length}`;
      textWrap.appendChild(meta);

      body.appendChild(textWrap);

      card.appendChild(body);

      const actions = document.createElement("div");
      actions.className = "event-actions";
      if (event.blackout) actions.classList.add("blackout");
      const eventActions = event.actions?.length
        ? event.actions
        : [{
            label: event.cta || (eventQueue.length > 1 ? "Continue" : "Acknowledge"),
            onClick: () => dismissEventModal(),
          }];
      for (const action of eventActions) {
        const btn = document.createElement("button");
        btn.className = "event-continue";
        if (event.blackout) btn.classList.add("blackout");
        btn.textContent = action.label;
        btn.disabled = Boolean(action.disabled);
        btn.addEventListener("click", () => {
          if (action.onClick) action.onClick();
          else dismissEventModal();
        });
        actions.appendChild(btn);
      }
      card.appendChild(actions);

      shell.appendChild(card);
      eventPanelEl.appendChild(shell);
    }

    function ownedTiles(factionId) {
      return tiles.filter(t => t.owner === factionId);
    }

    function factionEconomy(factionId) {
      const land = ownedTiles(factionId).filter(t => t.terrain === "land");
      const lands = land.length;
      const towns = land.filter(t => t.capital || t.estate === "town").length;
      const ports = land.filter(t => t.estate === "port").length;
      const forts = land.filter(t => t.estate === "fort").length;
      const relics = land.filter(t => t.estate === "relic").length;
      const palaces = land.filter(t => t.estate === "palace").length;
      const roads = land.filter(t => t.estate === "road").length;
      const buildingIncome = land.reduce((sum, tile) => sum + tileIncomeValue(tile), 0);
      const growthBonus = land.reduce((sum, tile) => sum + tileGrowthBonus(tile), 0);
      const ucount = towns > 0 ? Math.max(1, Math.floor((lands + ports * 5 + roads * 2) / towns)) : 0;
      return { lands, towns, ports, forts, relics, palaces, roads, ucount, buildingIncome, growthBonus };
    }

    function activeFactions() {
      return FACTIONS.filter(f => leaderState[f.id]?.active && !leaderState[f.id]?.defeated);
    }

    function availableTileUpgrades(tile) {
      if (tile.terrain !== "land") return [];
      return Object.entries(TILE_UPGRADES)
        .filter(([key, meta]) => meta.requires(tile) && tileUpgradeLevel(tile, key) < meta.max)
        .map(([key, meta]) => ({ key, meta }));
    }

    function applyTileUpgrade(tile, key, actorLabel = "You", chargeTreasury = false) {
      const upgrade = TILE_UPGRADES[key];
      if (!upgrade || !upgrade.requires(tile)) return false;
      const systems = ensureTileSystems(tile);
      if ((systems.buildings[key] || 0) >= upgrade.max) return false;
      if (chargeTreasury && treasury < upgrade.cost) return false;
      if (chargeTreasury) treasury -= upgrade.cost;
      systems.buildings[key] += 1;
      systems.prosperity = clamp(systems.prosperity + 2, 0, 100);
      systems.loyalty = clamp(systems.loyalty + 1, 0, 100);
      systems.unrest = clamp(systems.unrest - 1, 0, 100);
      addLog(`${actorLabel} builds ${upgrade.label} on (${tile.q},${tile.r}).`);
      return true;
    }

    function aiDevelopTile(factionId) {
      const faction = factionById(factionId);
      const personality = faction.personality || fallbackPersonality(factionId);
      const owned = ownedTiles(factionId).filter((tile) => tile.terrain === "land");
      const candidates = owned
        .map((tile) => {
          const options = availableTileUpgrades(tile);
          if (!options.length) return null;
          const weighted = options
            .map(({ key, meta }) => ({
              key,
              meta,
              score:
                (key === "barracks" || key === "walls" ? 6 : 0) +
                (key === "market" || key === "harbor" ? 5 : 0) +
                (key === "roads" ? 4 : 0) +
                (key === "manor" ? 3 : 0) +
                (personality === "Aggressive" && (key === "barracks" || key === "walls") ? 5 : 0) +
                (personality === "Defensive" && (key === "walls" || key === "watchtower") ? 6 : 0) +
                (personality === "Diplomat" && (key === "market" || key === "manor") ? 5 : 0) +
                (personality === "Swarm-expander" && key === "roads" ? 6 : 0) +
                (personality === "Rebel-maker" && key === "watchtower" ? 4 : 0) +
                (personality === "Opportunist" && key === "harbor" ? 4 : 0) +
                tileIncomeValue(tile) +
                tileGrowthBonus(tile)
            }))
            .sort((a, b) => b.score - a.score);
          return { tile, choice: weighted[0] };
        })
        .filter(Boolean)
        .sort((a, b) => b.choice.score - a.choice.score);

      if (!candidates.length || Math.random() < 0.35) return;
      const pick = candidates[0];
      applyTileUpgrade(pick.tile, pick.choice.key, faction.leader, false);
    }

    function dormantQueens() {
      return FACTIONS.filter(f => !f.isHuman && !leaderState[f.id]?.active && !leaderState[f.id]?.defeated);
    }

    function authorityCandidatesForQueen(queenFaction) {
      let candidates = activeFactions().filter(f => !f.isHuman && f.id !== queenFaction);
      if (!candidates.length) {
        candidates = activeFactions().filter(f => f.id !== queenFaction);
      }
      return candidates;
    }

    function reserveAuthorityForQueen(queenFaction) {
      const state = leaderState[queenFaction];
      if (!state || state.active || state.defeated) return null;
      const candidates = authorityCandidatesForQueen(queenFaction);
      if (!candidates.length) {
        state.underAuthorityOf = null;
        return null;
      }
      const current = state.underAuthorityOf;
      if (current !== null && current !== undefined && candidates.some(f => f.id === current)) {
        return current;
      }
      const chosen = randomItem(candidates)?.id ?? null;
      state.underAuthorityOf = chosen;
      return chosen;
    }

    function refreshDormantAuthorities() {
      for (const faction of FACTIONS) {
        if (!leaderState[faction.id]) continue;
        if (leaderState[faction.id].active || leaderState[faction.id].defeated || faction.isHuman) {
          leaderState[faction.id].underAuthorityOf = null;
          continue;
        }
        reserveAuthorityForQueen(faction.id);
      }
    }

    function randomItem(list) {
      if (!list.length) return null;
      return list[Math.floor(Math.random() * list.length)];
    }

    function shuffled(list) {
      const copy = list.slice();
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    }

    function awakenFaction(factionId) {
      leaderState[factionId].active = true;
      leaderState[factionId].defeated = false;
      if (leaderState[factionId].rebelAgainst === undefined) leaderState[factionId].rebelAgainst = null;
      leaderState[factionId].underAuthorityOf = null;
    }

    function clearFactionRegimeIdentity(factionId) {
      if (!leaderState[factionId]) return;
      leaderState[factionId].regimeName = null;
      leaderState[factionId].regimeShort = null;
      leaderState[factionId].underworldPatron = null;
      leaderState[factionId].underworldFriendly = null;
    }

    function applyRiseDisposition(queenFaction, supportive) {
      const st = queenEntry(queenFaction);
      if (supportive) {
        st.treaty = "alliance";
        st.trade = true;
        st.trust = Math.min(100, st.trust + 14);
        st.romance = Math.min(100, st.romance + 5);
        st.hate = Math.max(0, st.hate - 10);
      } else {
        st.treaty = "none";
        st.trade = false;
        st.trust = Math.max(-100, st.trust - 10);
        st.hate = Math.min(100, st.hate + 18);
        st.attraction = Math.max(0, st.attraction - 2);
      }
    }

    function spawnFrontierQueen(factionId, options = {}) {
      const faction = factionById(factionId);
      const candidates = shuffled(
        tiles.filter(t =>
          t.terrain === "land" &&
          t.owner === NEUTRAL &&
          !t.capital &&
          (t.estate === "town" || !t.coastal)
        )
      );
      const center = candidates.find(t => !neighbors(t).some(n => n.capital));
      if (!center) return false;

      awakenFaction(factionId);
      clearFactionRegimeIdentity(factionId);
      leaderState[factionId].rebelAgainst = null;
      center.owner = factionId;
      center.capital = true;
      center.estate = "town";
      center.troops = 10;

      let claimed = 0;
      for (const n of shuffled(neighbors(center))) {
        if (n.terrain !== "land" || n.owner !== NEUTRAL || n.capital) continue;
        n.owner = factionId;
        n.troops = Math.max(2, n.troops);
        claimed += 1;
        if (claimed >= 3) break;
      }

      if (!options.silent) {
        addLog(`${faction.leader} rises from the frontier and founds ${faction.name}.`);
        queueEventModal({
          label: "Queen Rising",
          title: `${faction.leader} Rises`,
          body: `${faction.leader} has emerged from the frontier and founded ${faction.name}.\n\nA new queen now claims territory on the map and enters the struggle for dominion.`,
          portrait: queenPortraits[factionId] || QUEEN_PORTRAITS[factionId],
          banner: `linear-gradient(135deg, ${faction.color}, #23180e)`,
        });
      }
      return true;
    }

    function spawnRebelQueen(factionId) {
      const targets = shuffled(
        activeFactions().filter(f => !f.isHuman && f.id !== factionId && ownedTiles(f.id).length >= 7)
      );
      const targetFaction = targets.find(Boolean);
      if (!targetFaction) return false;

      const rebellionTiles = shuffled(
        ownedTiles(targetFaction.id).filter(t => t.terrain === "land" && !t.capital && (t.estate === "town" || t.estate === "port"))
      );
      const center = rebellionTiles.find(Boolean);
      if (!center) return false;

      awakenFaction(factionId);
      clearFactionRegimeIdentity(factionId);
      leaderState[factionId].rebelAgainst = targetFaction.id;
      center.owner = factionId;
      center.capital = true;
      center.estate = "town";
      center.troops = 9;

      let flipped = 0;
      for (const n of shuffled(neighbors(center))) {
        if (n.terrain !== "land" || n.owner !== targetFaction.id || n.capital) continue;
        n.owner = factionId;
        n.troops = Math.max(2, Math.ceil(n.troops / 2));
        flipped += 1;
        if (flipped >= 3) break;
      }

      const faction = factionById(factionId);
      addLog(`${faction.leader} sparks a rebellion inside ${targetFaction.name} and claims ${faction.name}.`);
      queueEventModal({
        label: "Rebellion",
        title: `${faction.leader} Claims a Rebel Crown`,
        body: `${faction.leader} has broken away from ${targetFaction.name} and seized the banner of ${faction.name}.\n\nA splinter kingdom has formed inside rival lands.`,
        portrait: queenPortraits[factionId] || QUEEN_PORTRAITS[factionId],
        banner: `linear-gradient(135deg, ${faction.color}, ${targetFaction.color})`,
      });
      return true;
    }

    function escapeAndResettleRebelQueen(factionId, hunterId) {
      const faction = factionById(factionId);
      const candidates = shuffled(
        tiles.filter(t =>
          t.terrain === "land" &&
          t.owner === NEUTRAL &&
          !t.capital &&
          !neighbors(t).some(n => n.capital || n.owner === hunterId)
        )
      );
      const center = candidates.find(Boolean);
      if (!center) return false;

      awakenFaction(factionId);
      clearFactionRegimeIdentity(factionId);
      leaderState[factionId].rebelAgainst = hunterId > 0 ? hunterId : null;
      center.owner = factionId;
      center.capital = true;
      center.estate = "town";
      center.troops = 8;

      let claimed = 0;
      for (const n of shuffled(neighbors(center))) {
        if (n.terrain !== "land" || n.owner !== NEUTRAL || n.capital) continue;
        n.owner = factionId;
        n.troops = Math.max(2, n.troops);
        claimed += 1;
        if (claimed >= 2) break;
      }

      addLog(`${faction.leader} escapes defeat and founds a hidden remnant realm.`);
      queueEventModal({
        label: "Rebel Escape",
        title: `${faction.leader} Escapes Into Exile`,
        body: `${faction.leader} slips the noose after her defeat and resurfaces far away with the last loyal remnants of ${faction.name}.\n\nThe rebellion is not over yet.`,
        portrait: queenPortraits[factionId] || QUEEN_PORTRAITS[factionId],
        cta: "Continue",
      });
      return true;
    }

    function spawnUnderworldClaimQueen(factionId, targetFactionId, supportive) {
      const targetFaction = factionById(targetFactionId);
      if (!targetFaction || !leaderState[targetFactionId]?.active || ownedTiles(targetFactionId).length < 6) return false;

      const rebellionTiles = shuffled(
        ownedTiles(targetFaction.id).filter(t => t.terrain === "land" && !t.capital)
      );
      const center = rebellionTiles.find(Boolean);
      if (!center) return false;

      awakenFaction(factionId);
      clearFactionRegimeIdentity(factionId);
      leaderState[factionId].rebelAgainst = targetFaction.id;
      leaderState[factionId].underworldPatron = playerFactionId();
      leaderState[factionId].underworldFriendly = supportive;
      center.owner = factionId;
      center.capital = true;
      center.estate = center.estate === "port" ? "port" : "town";
      center.troops = supportive ? 12 : 11;

      let flipped = 0;
      const maxFlips = supportive ? 4 : 3;
      for (const n of shuffled(neighbors(center))) {
        if (n.terrain !== "land" || n.owner !== targetFaction.id || n.capital) continue;
        n.owner = factionId;
        n.troops = Math.max(2, Math.ceil(n.troops / 2));
        flipped += 1;
        if (flipped >= maxFlips) break;
      }

      const faction = factionById(factionId);
      const st = queenEntry(factionId);
      applyRiseDisposition(factionId, supportive);
      st.affair = st.affair || st.romance >= 30;
      if (supportive) {
        addLog(`${faction.leader} rises in rebellion against ${targetFaction.leader} and stays aligned with you.`);
        queueEventModal({
          label: "Backed Rebellion",
          title: `${faction.leader} Raises Her Banner`,
          body: `${faction.leader} uses your covert funding to rebel against ${targetFaction.leader} and seize part of ${targetFaction.name}.\n\nShe declares her own crown and keeps faith with you, at least for now.`,
          portrait: queenPortraits[factionId] || QUEEN_PORTRAITS[factionId],
          banner: `linear-gradient(135deg, ${faction.color}, ${targetFaction.color})`,
        });
      } else {
        addLog(`${faction.leader} rebels against ${targetFaction.leader}, then treats your patronage as something to exploit rather than honor.`);
        queueEventModal({
          label: "Betrayed Rebellion",
          title: `${faction.leader} Turns On You`,
          body: `${faction.leader} accepts your support, rebels against ${targetFaction.leader}, and then immediately rejects your influence.\n\nHer newborn regime enters the war hostile to you as well.`,
          portrait: queenPortraits[factionId] || QUEEN_PORTRAITS[factionId],
          banner: `linear-gradient(135deg, ${targetFaction.color}, ${faction.color})`,
        });
      }
      return true;
    }

    function spawnEscapedQueenRealm(factionId, authorityFactionId, supportive) {
      const authority = factionById(authorityFactionId);
      if (!spawnFrontierQueen(factionId, { silent: true })) return false;
      const faction = factionById(factionId);
      leaderState[factionId].rebelAgainst = authorityFactionId ?? null;
      leaderState[factionId].underworldPatron = playerFactionId();
      leaderState[factionId].underworldFriendly = supportive;
      applyRiseDisposition(factionId, supportive);
      if (supportive) {
        addLog(`${faction.leader} escapes ${authority?.leader || "her court"} and founds an allied realm of her own.`);
        queueEventModal({
          label: "Escape",
          title: `${faction.leader} Escapes Her Court`,
          body: `${faction.leader} slips away from ${authority?.leader || "her current ruler"}, vanishes through your underworld routes, and founds ${faction.name} on free soil.\n\nShe rises owing you her freedom and begins as your ally.`,
          portrait: queenPortraits[factionId] || QUEEN_PORTRAITS[factionId],
          banner: `linear-gradient(135deg, ${faction.color}, ${authority?.color || "#23180e"})`,
        });
      } else {
        addLog(`${faction.leader} escapes ${authority?.leader || "her court"} with your money, then claims a realm for herself and turns hostile.`);
        queueEventModal({
          label: "Betrayal",
          title: `${faction.leader} Uses Your Escape Route Against You`,
          body: `${faction.leader} flees ${authority?.leader || "her ruling queen"} with the resources you provided, then crowns herself in the frontier and refuses your claim on her gratitude.\n\nHer new realm emerges already hostile to you.`,
          portrait: queenPortraits[factionId] || QUEEN_PORTRAITS[factionId],
          banner: `linear-gradient(135deg, ${authority?.color || "#23180e"}, ${faction.color})`,
        });
      }
      return true;
    }

    function spiritQueenToPlayer(queenFaction, authorityFactionId, supportive) {
      const authority = factionById(authorityFactionId);
      const faction = factionById(queenFaction);
      if (supportive) {
        submitQueenToPlayer(
          queenFaction,
          `${faction.leader} escapes the authority of ${authority?.leader || "her current ruler"} through your criminal network and flees directly into your protection.`,
          "Queen Escapes To You"
        );
        return true;
      }
      if (!spawnFrontierQueen(queenFaction, { silent: true })) return false;
      leaderState[queenFaction].rebelAgainst = authorityFactionId ?? null;
      leaderState[queenFaction].underworldPatron = playerFactionId();
      leaderState[queenFaction].underworldFriendly = false;
      applyRiseDisposition(queenFaction, false);
      queueEventModal({
        label: "Trap",
        title: `${faction.leader} Lures You In And Turns`,
        body: `${faction.leader} pretends she wants escape and sanctuary with you.\n\nInstead, she uses your routes to slip the leash of ${authority?.leader || "her ruler"} and immediately declares herself against you as well.`,
        portrait: queenPortraits[queenFaction] || QUEEN_PORTRAITS[queenFaction],
        banner: `linear-gradient(135deg, ${authority?.color || "#23180e"}, ${faction.color})`,
      });
      return true;
    }

    function fireBorderDefectionEvent() {
      const contenders = activeFactions().filter(f => ownedTiles(f.id).some(t => t.terrain === "land" && !t.capital));
      const faction = randomItem(contenders);
      if (!faction) return false;
      const target = randomItem(ownedTiles(faction.id).filter(t => t.terrain === "land" && !t.capital));
      if (!target) return false;
      target.owner = playerFactionId();
      target.troops = Math.max(2, Math.ceil(target.troops / 2));
      queueEventModal({
        label: "Defection",
        title: "A Border Duchess Defects",
        body: `A duchess on the edge of ${faction.name} has abandoned ${faction.leader} and opened her gates to your envoys.\n\nYou gain a border holding without a battle.`,
        portrait: queenPortraits[faction.id] || QUEEN_PORTRAITS[faction.id],
        banner: `linear-gradient(135deg, ${faction.color}, #f1d79a)`,
      });
      addLog(`A border duchess defects from ${faction.name}.`);
      return true;
    }

    function fireEscapePlotEvent() {
      const candidates = capturedQueens.filter(id => id !== 0 && queenRelationshipRank(id).id !== "Devoted");
      const queenFaction = randomItem(candidates);
      if (queenFaction === null || queenFaction === undefined) return false;
      const state = queenEntry(queenFaction);
      const queen = QUEEN_POWERS[queenFaction];
      queueEventModal({
        label: "Escape Plot",
        title: "A Captured Queen Plots Escape",
        body: `${queen.title} has been whispering to servants and testing the locks around her chamber.\n\nIf ignored, her morale and obedience will slip.`,
        portrait: queenPortraits[queenFaction] || QUEEN_PORTRAITS[queenFaction],
        actions: [
          {
            label: "Tighten Security",
            onClick: () => {
              state.morale = Math.max(0, state.morale - 6);
              state.hate = Math.min(100, state.hate + 8);
              dismissEventModal(true);
              render();
            },
          },
          {
            label: "Visit Her Personally",
            onClick: () => {
              state.morale = Math.min(100, state.morale + 8);
              state.trust = Math.min(100, state.trust + 6);
              state.romance = Math.min(100, state.romance + 4);
              dismissEventModal(true);
              render();
            },
          },
        ],
      });
      addLog(`${queen.title} tests the limits of captivity.`);
      return true;
    }

    function fireTributeEvent() {
      const faction = randomItem(diplomacyTargetQueens().filter(f => queenEntry(f.id).treaty !== "alliance"));
      if (!faction) return false;
      const st = queenEntry(faction.id);
      queueEventModal({
        label: "Tribute",
        title: "A Rival Court Offers Tribute",
        body: `${faction.leader} sends a formal escort with gold, recruits, and flattering letters.\n\nAccept and soften the border, or refuse and keep pressure on her court.`,
        portrait: queenPortraits[faction.id] || QUEEN_PORTRAITS[faction.id],
        actions: [
          {
            label: "Accept Tribute",
            onClick: () => {
              const cap = playerCapitalTile();
              if (cap) cap.troops += 4;
              st.trust = Math.min(100, st.trust + 7);
              st.treaty = "truce";
              dismissEventModal(true);
              render();
            },
          },
          {
            label: "Demand More",
            onClick: () => {
              st.hate = Math.min(100, st.hate + 5);
              st.fear = Math.min(100, st.fear + 6);
              dismissEventModal(true);
              render();
            },
          },
        ],
      });
      return true;
    }

    function fireRebellionSpreadsEvent() {
      const faction = randomItem(activeFactions().filter(f => !f.isHuman && ownedTiles(f.id).some(t => t.estate === "town" || t.estate === "palace")));
      if (!faction) return false;
      const targets = shuffled(ownedTiles(faction.id).filter(t => !t.capital && (t.estate === "town" || t.estate === "palace"))).slice(0, 2);
      if (!targets.length) return false;
      for (const tile of targets) {
        tile.owner = NEUTRAL;
        tile.troops = Math.max(1, Math.floor(tile.troops / 2));
      }
      queueEventModal({
        label: "Rebellion",
        title: "Rebellion Spreads",
        body: `${faction.leader}'s court loses its grip on the provinces.\n\nSeveral rich holdings turn neutral as panic spreads through the realm.`,
        portrait: queenPortraits[faction.id] || QUEEN_PORTRAITS[faction.id],
        banner: `linear-gradient(135deg, ${faction.color}, #4d1d18)`,
      });
      addLog(`Rebellion spreads through ${faction.name}.`);
      return true;
    }

    function fireAffairScandalEvent() {
      const foreign = diplomacyTargetQueens().filter(f => {
        const st = queenEntry(f.id);
        return st.affair || st.pregnant || st.children > 0;
      });
      const harem = capturedQueens.filter(id => id !== 0).filter(id => {
        const st = queenEntry(id);
        return st.affair || st.pregnant || st.children > 0;
      });
      if (!foreign.length && !harem.length) return false;

      if (foreign.length && (Math.random() < 0.6 || !harem.length)) {
        const faction = randomItem(foreign);
        const st = queenEntry(faction.id);
        queueEventModal({
          label: "Scandal",
          title: `Rumors Swirl Around ${faction.leader}`,
          body: `Whispers spread through ${faction.name} about hidden meetings, unusual absences, and secrets that may lead back to you.\n\nIf the court believes the rumors, the affair may become a political weapon.`,
          portrait: queenPortraits[faction.id] || QUEEN_PORTRAITS[faction.id],
          actions: [
            {
              label: "Bribe Witnesses (4)",
              onClick: () => {
                treasury = Math.max(0, treasury - 4);
                st.trust = Math.min(100, st.trust + 2);
                st.hate = Math.max(0, st.hate - 1);
                dismissEventModal(true);
                render();
              },
            },
            {
              label: "Deny Everything",
              onClick: () => {
                st.trust = Math.max(-100, st.trust - 8);
                st.hate = Math.min(100, st.hate + 10);
                st.treaty = "none";
                dismissEventModal(true);
                render();
              },
            },
            {
              label: "Claim Her Publicly",
              onClick: () => {
                st.trust = Math.min(100, st.trust + 6);
                st.romance = Math.min(100, st.romance + 5);
                for (const rival of diplomacyTargetQueens()) {
                  if (rival.id === faction.id) continue;
                  const rst = queenEntry(rival.id);
                  rst.trust = Math.max(-100, rst.trust - 3);
                  rst.hate = Math.min(100, rst.hate + 4);
                }
                dismissEventModal(true);
                render();
              },
            },
          ],
        });
        addLog(`A court scandal begins around ${faction.leader}.`);
        return true;
      }

      const queenFaction = randomItem(harem);
      const st = queenEntry(queenFaction);
      const queen = QUEEN_POWERS[queenFaction];
      const others = capturedQueens.filter(id => id !== queenFaction);
      queueEventModal({
        label: "Harem Scandal",
        title: `${queen.title} Becomes The Center Of Whispering`,
        body: `Your court is buzzing over private favoritism, heirs, and jealous looks.\n\nThe harem is no longer calm, and someone will resent how you handle it.`,
        portrait: queenPortraits[queenFaction] || QUEEN_PORTRAITS[queenFaction],
        actions: [
          {
            label: "Celebrate Her",
            onClick: () => {
              st.morale = Math.min(100, st.morale + 10);
              st.romance = Math.min(100, st.romance + 6);
              for (const otherId of others) {
                const ost = queenEntry(otherId);
                ost.morale = Math.max(0, ost.morale - 4);
                ost.hate = Math.min(100, ost.hate + 2);
              }
              dismissEventModal(true);
              render();
            },
          },
          {
            label: "Silence The Palace",
            onClick: () => {
              treasury = Math.max(0, treasury - 3);
              st.trust = Math.max(-100, st.trust - 4);
              st.morale = Math.max(0, st.morale - 5);
              for (const otherId of others) {
                queenEntry(otherId).hate = Math.min(100, queenEntry(otherId).hate + 1);
              }
              dismissEventModal(true);
              render();
            },
          },
        ],
      });
      addLog(`${queen.title} becomes the center of a harem scandal.`);
      return true;
    }

    function fireUnderworldSabotageEvent() {
      const rebelCandidates = underworldRebelQueens().filter(f => leaderState[f.id]?.underworldFriendly === false);
      const reserveCandidates = kingdomlessUnderworldQueens().filter(f => {
        const st = queenEntry(f.id);
        return st.underworldRiseSupport > 0 || st.hate >= 18;
      });
      const candidate = randomItem([
        ...rebelCandidates.map(f => f.id),
        ...reserveCandidates.map(f => f.id),
      ]);
      if (candidate === null || candidate === undefined) return false;
      const faction = factionById(candidate);
      const st = queenEntry(candidate);
      queueEventModal({
        label: "Sabotage",
        title: `${faction.leader}'s Agents Strike Back`,
        body: `Your criminal routes are compromised. Safehouses burn, couriers vanish, and someone connected to ${faction.leader} is bleeding your network for profit and revenge.`,
        portrait: queenPortraits[candidate] || QUEEN_PORTRAITS[candidate],
        actions: [
          {
            label: "Purge The Network",
            onClick: () => {
              treasury = Math.max(0, treasury - 3);
              for (const id of eligibleUnderworldQueens()) {
                const qst = queenEntry(id);
                if (qst.underworldAssigned) qst.morale = Math.max(0, qst.morale - 4);
              }
              st.hate = Math.min(100, st.hate + 4);
              dismissEventModal(true);
              render();
            },
          },
          {
            label: "Absorb The Loss",
            onClick: () => {
              const cap = playerCapitalTile();
              treasury = Math.max(0, treasury - 6);
              if (cap) cap.troops = Math.max(1, cap.troops - 4);
              if (leaderState[candidate]?.active) {
                const rebelCap = factionCapitalTile(candidate);
                if (rebelCap) rebelCap.troops += 3;
              } else {
                st.underworldRiseSupport += 1;
              }
              dismissEventModal(true);
              render();
            },
          },
        ],
      });
      addLog(`${faction.leader}'s people sabotage your underworld network.`);
      return true;
    }

    function fireJealousHaremEvent() {
      const candidates = capturedQueens.filter(id => id !== 0 && haremQueenUsable(id));
      if (candidates.length < 2) return false;
      const primary = randomItem(candidates);
      const rival = randomItem(candidates.filter(id => id !== primary));
      if (primary === null || rival === null || rival === undefined) return false;
      const pState = queenEntry(primary);
      const rState = queenEntry(rival);
      queueEventModal({
        label: "Jealousy",
        title: `${QUEEN_POWERS[primary].title} And ${QUEEN_POWERS[rival].title} Clash`,
        body: `The atmosphere in your harem turns poisonous. Two queens are competing for favor, trading insults, and turning attendants against one another.\n\nWhatever you do next will offend someone.`,
        portrait: queenPortraits[primary] || QUEEN_PORTRAITS[primary],
        actions: [
          {
            label: `Favor ${QUEEN_POWERS[primary].title.split(" ")[1]}`,
            onClick: () => {
              pState.romance = Math.min(100, pState.romance + 5);
              pState.trust = Math.min(100, pState.trust + 4);
              rState.morale = Math.max(0, rState.morale - 7);
              rState.hate = Math.min(100, rState.hate + 6);
              dismissEventModal(true);
              render();
            },
          },
          {
            label: "Punish Them Both",
            onClick: () => {
              pState.morale = Math.max(0, pState.morale - 5);
              rState.morale = Math.max(0, rState.morale - 5);
              pState.trust = Math.max(-100, pState.trust - 2);
              rState.trust = Math.max(-100, rState.trust - 2);
              dismissEventModal(true);
              render();
            },
          },
          {
            label: "Ignore It",
            onClick: () => {
              pState.hate = Math.min(100, pState.hate + 3);
              rState.hate = Math.min(100, rState.hate + 4);
              rState.refusedThisTurn = true;
              dismissEventModal(true);
              render();
            },
          },
        ],
      });
      addLog(`Jealousy erupts inside your harem.`);
      return true;
    }

    function fireOverlordCrackdownEvent() {
      if (gameMode !== "servitude" || overlordQueenId === null || resistanceState.exposure < 11) return false;
      const overlord = factionById(overlordQueenId);
      queueEventModal({
        label: "Crackdown",
        title: `${overlord.leader} Orders A Crackdown`,
        body: `Exposure is rising too fast. ${overlord.leader} sends loyal watchers, raids chambers, and demands visible obedience.\n\nYou will lose ground somewhere.`,
        portrait: queenPortraits[overlordQueenId] || QUEEN_PORTRAITS[overlordQueenId],
        actions: [
          {
            label: "Submit",
            onClick: () => {
              resistanceState.exposure = Math.max(0, resistanceState.exposure - 3);
              resistanceState.devotion = Math.min(100, resistanceState.devotion + 3);
              const cap = playerCapitalTile();
              if (cap) cap.troops = Math.max(1, cap.troops - 3);
              dismissEventModal(true);
              render();
            },
          },
          {
            label: "Hide The Evidence",
            onClick: () => {
              treasury = Math.max(0, treasury - 5);
              resistanceState.strength = Math.max(0, resistanceState.strength - 5);
              resistanceState.exposure = Math.min(100, resistanceState.exposure + 2);
              dismissEventModal(true);
              render();
            },
          },
        ],
      });
      addLog(`${overlord.leader} orders a harsh crackdown in response to rising suspicion.`);
      return true;
    }

    function triggerWorldEvents() {
      if (round < 3) return;
      const reserve = dormantQueens();
      const eventFns = [
        () => fireBorderDefectionEvent(),
        () => fireEscapePlotEvent(),
        () => fireTributeEvent(),
        () => fireRebellionSpreadsEvent(),
        () => fireAffairScandalEvent(),
        () => fireUnderworldSabotageEvent(),
        () => fireJealousHaremEvent(),
        () => fireOverlordCrackdownEvent(),
        () => {
          const rebel = randomItem(reserve);
          return rebel ? spawnRebelQueen(rebel.id) : false;
        },
        () => {
          const frontier = randomItem(dormantQueens());
          return frontier ? spawnFrontierQueen(frontier.id) : false;
        },
      ];
      for (const fn of shuffled(eventFns)) {
        if (Math.random() < 0.3 && fn()) break;
      }
    }

    function startTurn(factionId) {
      if (gameOver) return;
      if (!leaderState[factionId].active || leaderState[factionId].defeated) {
        cycleTurn();
        return;
      }
      const factionTiles = ownedTiles(factionId).filter(t => t.terrain === "land");
      const eco = factionEconomy(factionId);
      if (isPlayerControlledFaction(factionId)) {
        const income = Math.max(2, eco.towns * 2 + eco.ports * 2 + eco.roads + eco.palaces * 3 + eco.relics + eco.buildingIncome);
        treasury += income;
        addLog(`${factionById(factionId).name} collects ${income} crowns for the treasury.`);
      }
      for (const tile of factionTiles) {
        const systems = ensureTileSystems(tile);
        systems.loyalty = clamp(systems.loyalty + tileLoyaltyPressure(tile), 0, 100);
        systems.unrest = clamp(systems.unrest + (tile.owner === factionId ? -1 : 1), 0, 100);
        systems.prosperity = clamp(systems.prosperity + Math.max(0, systems.buildings.market + systems.buildings.harbor + systems.buildings.manor - Math.floor(systems.unrest / 12)), 0, 100);
        const buildGrowth = tileGrowthBonus(tile);
        if (tile.duchessId) {
          const duchess = getDuchess(tile.duchessId);
          if (duchess) {
            applyDuchessEffects(tile, duchess);
            maybeTriggerDuchessEvent(tile, duchess);
          }
        }
        if (tile.capital) {
          tile.troops += 1 + eco.ucount + buildGrowth;
        } else if (tile.estate === "town") {
          tile.troops += eco.ucount + buildGrowth;
        } else if (tile.estate === "port") {
          tile.troops += Math.max(1, Math.floor(eco.ucount / 2)) + buildGrowth;
        } else if (tile.estate === "fort") {
          tile.troops += Math.max(1, Math.ceil(eco.ucount / 2)) + buildGrowth;
        } else if (tile.estate === "relic") {
          tile.troops += 1 + buildGrowth;
        } else if (tile.estate === "palace") {
          tile.troops += 1 + buildGrowth;
          const captured = capturedQueens.filter(q => q !== 0);
          if (captured.length) {
            const target = queenEntry(randomItem(captured));
            target.morale = Math.min(100, target.morale + 2);
          }
        } else if (tile.estate === "road") {
          tile.troops += 1 + buildGrowth;
        } else {
          tile.troops += buildGrowth;
        }
      }
      const fac = factionById(factionId);
      addLog(`${fac.name} gains reinforcements (land ${eco.lands}, towns ${eco.towns}, ports ${eco.ports}, forts ${eco.forts}, relics ${eco.relics}, palaces ${eco.palaces}, roads ${eco.roads}, infrastructure ${eco.growthBonus}).`);

      if (!isPlayerControlledFaction(factionId)) {
        endTurnBtn.disabled = true;
        autoTurnBtn.disabled = true;
        resistanceBtn.disabled = true;
        aiDevelopTile(factionId);
        setTimeout(() => {
          runAiTurn(factionId);
        }, 380);
      } else {
        queenUsedThisTurn = false;
        pendingQueenFaction = null;
        pendingUnitQueenFaction = null;
        diplomacyTurnNumber += 1;
        if (gameMode === "servitude") {
          resistanceState.devotion = Math.min(100, resistanceState.devotion + 2);
          if (resistanceState.built) {
            resistanceState.strength = Math.min(99, resistanceState.strength + 1);
            resistanceState.exposure = Math.max(0, resistanceState.exposure - 1);
          }
          resistanceState.turnCaptures = 0;
          resistanceState.turnAudience = 0;
          resistanceState.turnDevotionStart = resistanceState.devotion;
          const currentCap = playerCapitalTile();
          resistanceState.turnCapitalTroopsStart = currentCap ? currentCap.troops : 0;
          issueOverlordTask();
        }
        const tradePartners = activeHumanTradePartners();
        if (tradePartners.length) {
          const cap = playerCapitalTile();
          if (cap) {
            cap.troops += tradePartners.length;
            addLog(`Trade caravans arrive from ${tradePartners.length} queen${tradePartners.length === 1 ? "" : "s"}, reinforcing your court.`);
          }
        }
        for (const q of capturedQueens) {
          const st = queenEntry(q);
          const rank = queenRelationshipRank(q);
          st.tendUsedThisTurn = false;
          st.intimacyUsedThisTurn = false;
          st.giftUsedThisTurn = false;
          st.confideUsedThisTurn = false;
          st.refusedThisTurn = false;
          st.forbiddenThisTurn = false;
          st.summonedThisTurn = false;
          st.underworldUsedThisTurn = false;
          st.underworldRomanceUsedThisTurn = false;
          if (st.assignment === "court") st.morale = Math.min(100, st.morale + 3 + rank.serveBonus);
          if (st.assignment === "war") st.morale = Math.max(0, st.morale - Math.max(1, 2 - rank.warBonus));
          if (st.assignment === "intrigue") {
            st.morale = Math.max(0, st.morale - 1);
            for (const queenFaction of diplomacyTargetQueens()) {
              const dst = queenEntry(queenFaction);
              dst.trust = Math.min(100, dst.trust + 1 + rank.serveBonus);
              if (leaderState[queenFaction]?.rebelAgainst !== null && leaderState[queenFaction]?.rebelAgainst !== undefined) {
                dst.romance = Math.min(100, dst.romance + rank.serveBonus);
              }
            }
          }
          if (Math.random() < queenRefusalChance(q)) {
            st.refusedThisTurn = true;
            const queen = QUEEN_POWERS[q];
            addLog(`${queen.title} refuses orders this turn (${rank.id.toLowerCase()} bond).`);
          }
        }
        for (const duchess of duchesses) {
          if (!duchess || duchess.ownerFaction !== factionId) continue;
          duchess.talkUsedThisTurn = false;
          duchess.giftUsedThisTurn = false;
          duchess.confideUsedThisTurn = false;
          duchess.intimacyUsedThisTurn = false;
        }
        if (gameMode === "servitude") {
          maybeApplyOverlordHaremPressure();
        }
        for (const queenFaction of diplomacyTargetQueens()) {
          updateDiplomacyPressure(queenFaction);
          maybeQueueJoinOffer(queenFaction);
          maybeQueueAffairOffer(queenFaction);
        }
        runForeignAudienceTurn();
        for (const unit of queenUnits) {
          if (unit.owner !== factionId) continue;
          unit.usedThisTurn = false;
          if (unit.mode === "serve") {
            const t = getTile(unit.q, unit.r);
            if (t && t.owner === factionId) {
              const st = queenEntry(unit.queenFaction);
              const bonus = Math.max(1, QUEEN_POWERS[unit.queenFaction].unitServeBonus + moraleTierBonus(st.morale) + relationBonus(st, "serve"));
              t.troops += bonus;
            }
          }
        }
        humanMovesRemaining = HUMAN_MOVES_PER_TURN;
        endTurnBtn.disabled = false;
        autoTurnBtn.disabled = false;
        resistanceBtn.disabled = gameMode !== "servitude";
      }
      render();
    }

    function updateHUD() {
      const fac = FACTIONS[currentFactionIndex];
      turnInfo.textContent = `Round ${round} • Turn: ${fac.name}`;
      if (gameMode === "servitude" && overlordQueenId !== null) {
        turnInfo.textContent += ` • Servitude to ${factionById(overlordQueenId).leader} (${servitudeTierLabel()})`;
      }
      if (pendingQueenFaction !== null) {
        const queen = QUEEN_POWERS[pendingQueenFaction];
        turnInfo.textContent += ` • Deploying ${queen.title}`;
      }
      if (pendingUnitQueenFaction !== null) {
        const queen = QUEEN_POWERS[pendingUnitQueenFaction];
        turnInfo.textContent += ` • Recruiting ${queen.unitName}`;
      }
      if (!gameOver && isPlayerControlledFaction(FACTIONS[currentFactionIndex].id)) {
        turnInfo.textContent += ` • Moves: ${humanMovesRemaining}/${HUMAN_MOVES_PER_TURN}`;
        turnInfo.textContent += ` • Send: ${Math.round(SEND_OPTIONS[sendModeIndex] * 100)}%`;
        turnInfo.textContent += ` • Treasury: ${treasury}`;
      }
      turnInfo.textContent += ` • ${dayPhaseLabel()} • ${weatherState.bloodMoon ? "Blood Moon" : weatherState.kind[0].toUpperCase() + weatherState.kind.slice(1)}`;
      if (gameOver) {
        turnInfo.textContent += " • Game Over";
      }
      sendModeBtn.textContent = `Send: ${Math.round(SEND_OPTIONS[sendModeIndex] * 100)}%`;
      resistanceBtn.textContent = gameMode === "servitude"
        ? `Service ${resistanceState.currentTask ? "Order" : "Court"}`
        : "Resistance";
    }

    function sendAmountForTile(tile) {
      const percent = SEND_OPTIONS[sendModeIndex];
      if (percent >= 1) return tile.troops;
      return Math.max(1, Math.floor(tile.troops * percent));
    }

    function playerCapitalTile() {
      const owner = playerFactionId();
      return tiles.find(t => t.owner === owner && t.capital && t.terrain === "land")
        || tiles.find(t => t.owner === owner && t.terrain === "land")
        || null;
    }

    function relationLabel(trust, romance) {
      const total = trust + romance * 0.45;
      if (total >= 90) return "Devoted";
      if (total >= 55) return "Warm";
      if (total >= 20) return "Cordial";
      if (total <= -45) return "Hostile";
      if (total <= -15) return "Wary";
      return "Neutral";
    }

    function queenRelationshipRank(queenFaction) {
      return relationRankFromState(queenEntry(queenFaction));
    }

    function queenChatSessionFor(queenFaction) {
      if (!queenChatSessions[queenFaction]) {
        queenChatSessions[queenFaction] = {
          draft: "",
          messages: [],
          busy: false,
          error: "",
          lastMeta: "",
          lastEffect: "",
          memory: {
            topics: [],
            lastUserIntent: "",
            lastQueenTone: "",
            notes: [],
            summary: [],
          },
        };
      }
      return queenChatSessions[queenFaction];
    }

    function queenChatContextLabel(queenFaction) {
      if (gameMode === "servitude" && overlordQueenId === queenFaction) return "overlord";
      if (capturedQueens.includes(queenFaction)) return "harem";
      return "diplomacy";
    }

    function queenChatHistorySlice(session) {
      const max = Math.max(2, Number(localAiSettings.maxHistory) || 12);
      return session.messages.slice(-max);
    }

    function countChatKeywords(text, keywords) {
      return keywords.reduce((sum, keyword) => sum + (text.includes(keyword) ? 1 : 0), 0);
    }

    function clampDelta(value, limit = 2) {
      return Math.max(-limit, Math.min(limit, value));
    }

    function pushBoundedUnique(list, value, limit = 6) {
      if (!value) return list;
      const filtered = list.filter((entry) => entry !== value);
      filtered.unshift(value);
      return filtered.slice(0, limit);
    }

    function updateQueenChatSummary(memory, userText, replyText) {
      const summaryMap = {
        truce: "She remembers the discussion about truce terms and whether peace could be bought.",
        borders: "She remembers talk of borders, territory, or defending her realm.",
        trust: "She remembers whether you tried to earn her trust or prove your loyalty.",
        desire: "She remembers when you pushed the conversation toward desire and what she wants.",
        punishment: "She remembers the urge for humiliation, punishment, and degrading control.",
        worship: "She remembers the plea for worship, devotion, praise, or reverence.",
        submission: "She remembers your play for submission, obedience, and service.",
        war: "She remembers the mention of war, battle, armies, or conquest.",
        resentment: "She remembers the anger, insults, and resentment you stirred.",
        degradation: "She remembers the extreme degrading erotic acts and how they fed her dominance.",
        chastity: "She remembers the talk of chastity, denial, and control as a power play.",
      };
      const topic = detectQueenChatTopic(`${userText} ${replyText}`);
      const intent = detectQueenChatIntent(userText);
      const phrases = [];
      if (topic && summaryMap[topic]) phrases.push(summaryMap[topic]);
      if (intent === "seek_affection") phrases.push("She remembers your attempts to win her affection.");
      if (intent === "seek_trust") phrases.push("She remembers whether you asked her to trust you.");
      if (intent === "seek_punishment") phrases.push("She remembers your invitation to punishment and degradation.");
      if (intent === "seek_worship") phrases.push("She remembers your overtures of worship and submission.");
      if (intent === "submission_play") phrases.push("She remembers your play for submission and obedience.");
      const summaryEntry = phrases.filter(Boolean).join(" ");
      if (summaryEntry) {
        memory.summary = pushBoundedUnique(memory.summary || [], summaryEntry, 8);
      }
    }

    function detectQueenChatTopic(text) {
      if (!text) return "";
      const source = text.toLowerCase();
      if (source.includes("truce") || source.includes("alliance") || source.includes("peace") || source.includes("treaty")) return "truce";
      if (source.includes("border") || source.includes("frontier") || source.includes("realm") || source.includes("territory")) return "borders";
      if (source.includes("trust")) return "trust";
      if (source.includes("like me") || source.includes("love me") || source.includes("want me") || source.includes("desire")) return "desire";
      if (source.includes("humiliat") || source.includes("punish") || source.includes("degrad") || source.includes("collar") || source.includes("crawl")) return "punishment";
      if (source.includes("worship") || source.includes("devotion") || source.includes("adore") || source.includes("revere") || source.includes("praise you")) return "worship";
      if (source.includes("submit") || source.includes("kneel") || source.includes("serve") || source.includes("obedience")) return "submission";
      if (source.includes("war") || source.includes("battle") || source.includes("army")) return "war";
      if (source.includes("hate") || source.includes("anger") || source.includes("resent")) return "resentment";
      if (source.includes("asshole") || source.includes("ass licking") || source.includes("shit") || source.includes("pussy") || source.includes("feet") || source.includes("chastity") || source.includes("face in")) return "degradation";
      return "";
    }

    function detectQueenChatIntent(text) {
      if (!text) return "";
      const source = text.toLowerCase();
      if (source.includes("do you like me") || source.includes("do you love me") || source.includes("want me")) return "seek_affection";
      if (source.includes("trust me") || source.includes("would you trust")) return "seek_trust";
      if (source.includes("truce") || source.includes("alliance") || source.includes("peace") || source.includes("treaty")) return "seek_truce";
      if (source.includes("humiliat") || source.includes("punish") || source.includes("degrad") || source.includes("collar") || source.includes("crawl")) return "seek_punishment";
      if (source.includes("worship") || source.includes("devotion") || source.includes("adore") || source.includes("revere") || source.includes("praise you")) return "seek_worship";
      if (source.includes("submit") || source.includes("kneel") || source.includes("serve")) return "submission_play";
      if (source.includes("hello") || source.includes("greetings")) return "greeting";
      return "general";
    }

    function updateQueenChatMemory(queenFaction, userText, replyText) {
      const session = queenChatSessionFor(queenFaction);
      const memory = session.memory || { topics: [], lastUserIntent: "", lastQueenTone: "", notes: [] };
      const tone = queenDiplomacyTone(queenFaction);
      const topic = detectQueenChatTopic(`${userText} ${replyText}`);
      const intent = detectQueenChatIntent(userText);
      memory.lastUserIntent = intent;
      memory.lastQueenTone = tone;
      if (topic) memory.topics = pushBoundedUnique(memory.topics || [], topic, 6);
      const noteMap = {
        truce: "You already discussed truce terms and whether peace could be bought.",
        borders: "You already touched on borders, territory, or the right to guard her realm.",
        trust: "You already tested whether she could trust you with anything meaningful.",
        desire: "You already pushed the conversation into personal desire or whether she wants you.",
        punishment: "You already pushed toward humiliation, punishment, or degrading treatment.",
        worship: "You already pushed toward worship, devotion, praise, or reverence.",
        submission: "You already brushed against dominance, service, kneeling, or obedience.",
        war: "You already brought the conversation near battle, armies, or open conflict.",
        resentment: "You already stirred the subject of anger, insult, or resentment.",
        degradation: "You already explored extreme erotic degradation and what pleasures it brings her.",
        chastity: "You already discussed chastity, denial, and the power of control.",
      };
      if (topic && noteMap[topic]) {
        memory.notes = pushBoundedUnique(memory.notes || [], noteMap[topic], 5);
      }
      updateQueenChatSummary(memory, userText, replyText);
      session.memory = memory;
    }

    function queenChatMemoryLines(queenFaction) {
      const session = queenChatSessionFor(queenFaction);
      const memory = session.memory || {};
      const parts = [];
      if (memory.topics?.length) parts.push(`Recent topics: ${memory.topics.join(", ")}.`);
      if (memory.lastUserIntent) parts.push(`Latest player intent: ${memory.lastUserIntent}.`);
      if (memory.lastQueenTone) parts.push(`Latest queen tone: ${memory.lastQueenTone}.`);
      if (memory.notes?.length) parts.push(`Conversation memory: ${memory.notes.join(" ")}`);
      if (memory.summary?.length) parts.push(`Conversation summary: ${memory.summary.join(" ")}`);
      return parts.join(" ");
    }

    function applyQueenChatEffect(queenFaction, effect) {
      const st = queenEntry(queenFaction);
      st.trust = clamp(st.trust + (effect.trust || 0), -100, 100);
      st.romance = clamp(st.romance + (effect.romance || 0), 0, 100);
      st.attraction = clamp(st.attraction + (effect.attraction || 0), 0, 100);
      st.hate = clamp(st.hate + (effect.hate || 0), 0, 100);
      st.fear = clamp(st.fear + (effect.fear || 0), 0, 100);
    }

    function queenChatEffectSummary(effect) {
      const parts = [];
      if (effect.trust) parts.push(`${effect.trust > 0 ? "+" : ""}${effect.trust} trust`);
      if (effect.romance) parts.push(`${effect.romance > 0 ? "+" : ""}${effect.romance} romance`);
      if (effect.attraction) parts.push(`${effect.attraction > 0 ? "+" : ""}${effect.attraction} attraction`);
      if (effect.hate) parts.push(`${effect.hate > 0 ? "+" : ""}${effect.hate} hate`);
      if (effect.fear) parts.push(`${effect.fear > 0 ? "+" : ""}${effect.fear} fear`);
      return parts.join(" • ");
    }

    function analyzeQueenChatImpact(queenFaction, userText, replyText) {
      const st = queenEntry(queenFaction);
      const session = queenChatSessionFor(queenFaction);
      const context = queenChatContextLabel(queenFaction);
      const text = `${userText} ${replyText}`.toLowerCase();
      const warm = countChatKeywords(text, ["thank", "trust", "gentle", "kind", "care", "cherish", "devoted", "loyal", "grace", "admire", "forgive", "understand"]);
      const flirt = countChatKeywords(text, ["beautiful", "kiss", "touch", "desire", "want you", "need you", "crave", "tease", "bed", "lips", "ache", "adore"]);
      const hostile = countChatKeywords(text, ["threat", "threaten", "war", "kill", "break", "punish", "obedience", "kneel", "submit", "conquer", "betray", "disgust"]);
      const political = countChatKeywords(text, ["treaty", "alliance", "truce", "peace", "trade", "realm", "court", "terms", "bargain", "strategy", "throne", "tribute"]);
      const apology = countChatKeywords(text, ["sorry", "apologize", "forgive me", "my fault", "i was wrong"]);
      const fear = countChatKeywords(text, ["fear", "afraid", "terror", "dread"]);
      const intimacyProbe = countChatKeywords(text, ["do you like me", "do you love me", "love me", "want me", "desire me", "kiss me", "miss me"]);
      const punishmentProbe = countChatKeywords(text, ["humiliat", "punish", "degrad", "collar", "crawl", "kneel", "spit", "serve", "obedience"]);
      const worshipProbe = countChatKeywords(text, ["worship", "devotion", "adore", "revere", "praise you", "kiss your ring", "kiss your feet"]);
      const alreadyHostile = st.hate >= 15 || st.trust <= -10;
      const repeatedIntent = session.memory?.lastUserIntent && session.memory.lastUserIntent === detectQueenChatIntent(userText);

      const effect = { trust: 0, romance: 0, attraction: 0, hate: 0, fear: 0 };
      if (warm > 0 && !alreadyHostile) effect.trust += 1;
      if (warm >= 2 && !alreadyHostile && (context === "harem" || context === "overlord")) effect.romance += 1;
      if (flirt > 0 && !alreadyHostile) effect.attraction += 1;
      if (flirt >= 2 && !alreadyHostile && context !== "diplomacy") effect.romance += 1;
      if (political >= 2 && hostile === 0 && !alreadyHostile) effect.trust += 1;
      if (hostile > 0) effect.hate += 1;
      if (hostile >= 2 && context === "overlord") effect.fear += 1;
      if (fear > 0 && context === "overlord") effect.fear += 1;
      if (apology > 0) {
        effect.trust += 1;
        effect.hate -= 1;
      }
      if (alreadyHostile && intimacyProbe > 0) {
        effect.trust -= 1;
        effect.hate += 1;
      }
      if (alreadyHostile && flirt > 0) {
        effect.trust -= 1;
      }
      if (alreadyHostile && punishmentProbe > 0) {
        effect.fear += 1;
        effect.attraction += 1;
      }
      if (alreadyHostile && worshipProbe > 0) {
        effect.fear += 1;
        effect.attraction += 1;
      }
      if (repeatedIntent && alreadyHostile && intimacyProbe > 0) {
        effect.hate += 1;
      }
      if (warm > hostile && effect.hate > 0) effect.hate -= 1;
      if (flirt > 0 && hostile > 0) effect.attraction += 1;

      effect.trust = clampDelta(effect.trust);
      effect.romance = clampDelta(effect.romance);
      effect.attraction = clampDelta(effect.attraction);
      effect.hate = clampDelta(effect.hate);
      effect.fear = clampDelta(effect.fear);
      return effect;
    }

    function isQueenChatReplyOutOfCharacter(reply, queenFaction, userText = "") {
      const text = (reply || "").toLowerCase();
      const user = (userText || "").toLowerCase();
      const context = queenChatContextLabel(queenFaction);
      const st = queenEntry(queenFaction);
      const userIntent = detectQueenChatIntent(userText);
      const punishmentContext = userIntent === "seek_punishment" || userIntent === "submission_play" || userIntent === "seek_worship" || detectQueenChatTopic(user) === "punishment" || detectQueenChatTopic(user) === "submission" || detectQueenChatTopic(user) === "worship";
      const bannedPhrases = [
        "how can i help",
        "how may i assist",
        "i am here to assist",
        "let me know if you need anything",
        "please don't hesitate to ask",
        "if you have any questions",
        "i do not possess feelings",
        "i do not have feelings",
        "i am aware that",
        "my behavior is guided by",
        "in the traditional sense",
        "if you feel confident",
        "i would be more than willing",
        "my role as a leader",
        "it is crucial for the well-being",
        "i can't engage in those kinds of conversations",
        "primary focus",
        "professional demeanor",
        "respectful demeanor",
        "with all visitors",
        "including the player",
        "at this time",
        "i do not possess feelings or opinions",
        "as an ai",
        "language model",
        "customer service",
        "quest",
      ];
      if (bannedPhrases.some((phrase) => text.includes(phrase))) return true;
      if (context === "diplomacy" && punishmentContext && (st.hate >= 15 || st.trust <= -10)) {
        const softPunishmentMisses = [
          "kiss",
          "dance",
          "not interested in your requests",
          "i'm not interested in your requests",
          "perhaps",
          "what brings you here",
          "tell me more",
        ];
        if (softPunishmentMisses.some((phrase) => text.includes(phrase))) return true;
      }
      if (context === "diplomacy" && punishmentContext && (st.hate >= 15 || st.trust <= -10) && !countChatKeywords(text, ["kneel", "crawl", "serve", "obedience", "collar", "humiliat", "degrad", "obedient", "heel", "mouth", "beg", "worship", "devotion", "praise", "revere", "ring", "feet"])) {
        return true;
      }
      if (text.length > 260 && (text.includes("i am ") || text.includes("as queen"))) return true;
      if (context === "diplomacy" && st.hate >= 15) {
        const softPhrases = [
          "dear",
          "darling",
          "good morning!",
          "good evening!",
          "more than willing",
          "productive day",
          "i hope you are doing well",
        ];
        if (softPhrases.some((phrase) => text.includes(phrase))) return true;
      }
      return false;
    }

    function queenDiplomacyTone(queenFaction) {
      const st = queenEntry(queenFaction);
      if (st.hate >= 30 || st.trust <= -25) return "venomous";
      if (st.hate >= 15 || st.trust <= -10) return "hostile";
      if (st.trust >= 22 || st.romance >= 18 || st.attraction >= 30) return "warm";
      return "guarded";
    }

    function generateQueenFallbackReply(queenFaction, userText) {
      const faction = factionById(queenFaction);
      const queen = QUEEN_POWERS[queenFaction];
      const session = queenChatSessionFor(queenFaction);
      const text = (userText || "").toLowerCase();
      const tone = queenDiplomacyTone(queenFaction);
      const context = queenChatContextLabel(queenFaction);
      const ruler = faction?.leader || queen?.title || "The queen";
      const repeatedDesire = session.memory?.lastUserIntent === "seek_affection" && detectQueenChatIntent(userText) === "seek_affection";
      const repeatedTrust = session.memory?.lastUserIntent === "seek_trust" && detectQueenChatIntent(userText) === "seek_trust";
      const repeatedPunishment = session.memory?.lastUserIntent === "seek_punishment" && detectQueenChatIntent(userText) === "seek_punishment";
      const repeatedWorship = session.memory?.lastUserIntent === "seek_worship" && detectQueenChatIntent(userText) === "seek_worship";
      const touchedSubmission = session.memory?.topics?.includes("submission");
      const touchedPunishment = session.memory?.topics?.includes("punishment");
      const touchedWorship = session.memory?.topics?.includes("worship");

      if (context === "diplomacy") {
        if (text.includes("worship") || text.includes("devotion") || text.includes("adore") || text.includes("revere") || text.includes("praise you") || text.includes("kiss your ring") || text.includes("kiss your feet")) {
          if (repeatedWorship && tone === "venomous") return `${ruler}'s expression turns smug in a way that makes your skin prickle. "Still dwelling on worship? Good. I'd have you lower your eyes, praise me properly, and repeat my titles until your pride finally cracked under the weight of them. Devotion should cost you dignity, or it means nothing to me."`;
          if (repeatedWorship && tone === "hostile") return `${ruler} looks entertained at your expense. "You keep circling back to worship as though you've already understood your place. You haven't. Real devotion is not one sweet word. It's patience, posture, obedience, and the humiliation of making your reverence obvious."`;
          if (tone === "venomous") return `${ruler}'s smile becomes all ego and appetite. "Worship? Yes. If I despised you enough, I would absolutely enjoy making you prove devotion to the woman above you. Kneel. Kiss the ring, praise the throne, ask permission before you even look up, and learn how satisfying it is to be reduced to admiration and obedience for my amusement."`;
          if (tone === "hostile") return `${ruler} answers without a hint of mercy. "If you want to know what I would enjoy, start with reverence. I would have you worship openly, praise me until your own voice embarrassed you, and keep you close enough to watch that humiliation settle in. Ego is wasted if no one is made to feed it."`;
          if (tone === "guarded") return `${ruler} studies you with a cool, curious look. "You ask about worship as though you expect a playful answer. I don't treat reverence lightly. If someone bows to me, they do it with sincerity or not at all."`;
          return `${ruler}'s voice drops a shade. "Devotion is not a harmless subject with women like me. Some forms of praise are flattering. Others become ownership."`;
        }
        if (text.includes("humiliat") || text.includes("punish") || text.includes("degrad") || text.includes("collar") || text.includes("crawl") || text.includes("kneel for") || text.includes("serve you")) {
          if (repeatedPunishment && tone === "venomous") return `${ruler}'s mouth curls with nasty delight. "Still craving the details? Fine. I'd keep you on your knees until the ache turned you stupid, make you ask permission to speak, and laugh every time you forgot your place and had to be corrected. If you offended me badly enough, I'd train the pride out of you by hand."`;
          if (repeatedPunishment && tone === "hostile") return `${ruler} looks you over like she's measuring how long your dignity would last. "You keep coming back to punishment because some weak little part of you wants to be put in your place. I could do that. On your knees, eyes down, hands where I tell you, and grateful I bothered to discipline you at all."`;
          if (tone === "venomous") return `${ruler}'s smile goes sharp and ugly. "Humiliating acts? I'd have you kneel at my feet, thank me for every cruel word, and hold still while I taught you that your mouth is better used for obedience than argument. You wouldn't get a cell. You'd get a place at my heels, right where stubborn creatures belong."`;
          if (tone === "hostile") return `${ruler} answers with cruel composure. "If I punished you, it wouldn't be some distant sentence. It would be personal. You'd kneel, serve, and learn how quickly a body can be trained into obedience when the woman above it enjoys your humiliation."`;
          if (tone === "guarded") return `${ruler} studies you with a sharpened look. "You step into dangerous territory very quickly. If you're asking how I discipline insolence, the answer is thoroughly enough that it isn't repeated."`;
          return `${ruler}'s voice lowers with a note you cannot quite trust. "You ask that boldly. Careful. Some queens answer those questions by curiosity, and some by appetite."`;
        }
        if (text.includes("do you like me") || text.includes("do you love me") || text.includes("want me")) {
          if (repeatedDesire && tone === "venomous") return `${ruler}'s eyes narrow with vicious amusement. "Again? You really are starving for the same answer, aren't you? No. Keep begging for tenderness if you like. It only makes you look smaller."`;
          if (repeatedDesire && tone === "hostile") return `${ruler} exhales through her nose, visibly unimpressed. "You asked me that already. Do you enjoy humiliating yourself, or does it simply come naturally when you're in front of me?"`;
          if (tone === "venomous") return `${ruler} gives you a slow, vicious smile. "Like you? No. But I could certainly find uses for you on your knees, desperate for a scrap of approval I never intend to give. Learn the difference between being wanted and being owned."`;
          if (tone === "hostile") return `${ruler} lets the silence turn nasty before she answers. "No. And if you have to ask, you're even smaller than I thought. Stop whining for affection and try earning the right not to be spoken to like a nuisance."`;
          if (tone === "guarded") return `${ruler} watches you with unreadable eyes. "You reach for familiarity too quickly. Bring me honesty, terms, or leverage. Affection is not what opens a queen's hand."`;
          return `${ruler}'s expression softens by a degree, no more. "You ask dangerous questions with a straight face. Whether I like you depends on what you prove yourself to be when the stakes rise."`;
        }
        if (text.includes("trust me") || text.includes("borders") || text.includes("realm")) {
          if (repeatedTrust && tone === "venomous") return `${ruler}'s smile goes razor-thin. "Still trying to pry trust out of me? If repetition worked, every dog that whined at a table would wear a crown by now."`;
          if (repeatedTrust && tone === "hostile") return `${ruler} looks bored by the repetition. "You keep asking for trust as if the word itself should move me. It doesn't. Bring leverage, or stop circling the same weakness."`;
          if (tone === "venomous") return `${ruler} laughs softly, the sound pure contempt. "Trust you with my borders? I'd trust you sooner on a leash at my gate than standing a watchtower with real authority. If you want a place near my frontier, earn it in a posture that suits you: useful, obedient, and very aware whose land you're standing on."`;
          if (tone === "hostile") return `${ruler}'s answer comes hard and personal. "No. If I put you on my border, it would be to serve there under my eye, not command it. Bring terms that cost you something real, or stop pretending trust is a favor I owe you."`;
          if (tone === "guarded") return `${ruler} drums her fingers once against the arm of her seat. "Trust is never the opening offer. Borders are tested by steel, coin, and consequence. Give me something measurable, and I may listen further."`;
          return `${ruler} considers you with more seriousness than warmth. "That is the sort of trust rulers spend years building and fools lose in an afternoon. If our interests keep aligning, perhaps."`;
        }
        if (text.includes("hello") || text.includes("greetings") || text.includes("good morning") || text.includes("good evening")) {
          if (tone === "venomous") return `${ruler} receives the greeting with open distaste. "Spare me the pleasantries. You're tolerated, not welcomed. If you have business, spit it out before I decide you'd sound better begging than talking."`;
          if (tone === "hostile") return `${ruler}'s gaze fixes on you with frank irritation. "You have my attention. Be grateful for that much and get to the point before your voice starts to grate on me."`;
          if (tone === "guarded") return `${ruler} inclines her head by the smallest measure. "Greetings, then. State your purpose plainly. Queens have little use for words that circle without landing."`;
          return `${ruler} studies your face instead of your greeting. "You have reached my court. Now tell me whether you bring danger, advantage, or some tangled mix of both."`;
        }
        if (text.includes("alliance") || text.includes("truce") || text.includes("peace") || text.includes("treaty")) {
          if (tone === "venomous") return `${ruler}'s smile turns vicious. "You come asking for peace after all this? Then crawl for it properly. I don't sign truces because a rival suddenly wants mercy. I sign them when that rival is humbled enough to offer tribute with lowered eyes and a shaking voice."`;
          if (tone === "hostile") return `${ruler} does not refuse, but the disdain is personal. "A treaty is not kindness. It is leverage. If you want peace from me, come with terms that leave you feeling owned by them, not comforted."`;
          if (tone === "guarded") return `${ruler} leans back, measuring the idea. "A truce is possible where interests overlap and vanity is kept on a leash. If you want terms, speak them clearly."`;
          return `${ruler}'s voice lowers. "An alliance is never born from sentiment. But I will hear the shape of the peace you think you can afford."`;
        }
        if (tone === "venomous") return `${ruler}'s stare stays hard enough to cut. "Then speak plainly. Every extra word out of you makes me want to make you kneel and hear how much prettier you sound when humiliation has taken the fight out of you.${touchedPunishment || touchedSubmission || touchedWorship ? " You keep inching back toward that edge like you want me to drag you over it and make you prove your reverence." : ""}"`;
        if (tone === "hostile") return `${ruler}'s tone stays cold and personal. "Go on, then. But if you waste my time with another weak little line, I'll treat you the way insolent mouths deserve.${touchedPunishment || touchedSubmission || touchedWorship ? " Keep pressing this and I may tell you exactly how I'd make you kneel, praise, and serve." : ""}"`;
        if (tone === "guarded") return `${ruler} regards you in silence for a beat. "Continue. I am listening, though not yet convinced you deserve the audience."`;
        return `${ruler}'s voice turns lower, more personal. "Continue. I want to hear what you are really reaching for beneath the diplomacy."`;
      }

      if (context === "harem") {
        if (text.includes("hello") || text.includes("greetings")) return `${ruler} studies you from close range, searching your face before she answers. "You've come to me for something. Good. I would rather have the truth than another careful performance."`;
        return `${ruler}'s eyes narrow with interest. "Go on. I want the honest version of it, not the polished one."`;
      }

      if (text.includes("hello") || text.includes("greetings")) return `${ruler} regards you from her elevated place. "You stand before your queen. Speak carefully, and do not waste the moment with timid pleasantries."`;
      return `${ruler}'s reply is measured and personal. "Then say what you mean. I have no patience for half-confessions dressed as caution."`;
    }

    function buildQueenChatSystemPrompt(queenFaction) {
      const faction = factionById(queenFaction);
      const queen = QUEEN_POWERS[queenFaction];
      const st = queenEntry(queenFaction);
      const context = queenChatContextLabel(queenFaction);
      const rank = queenRelationshipRank(queenFaction);
      const personality = faction?.personality || fallbackPersonality(queenFaction);
      const isForeignDiplomacy = context === "diplomacy";
      const isWarmToPlayer = st.trust >= 22 || st.romance >= 18 || st.attraction >= 30;
      const isHostileToPlayer = st.hate >= 15 || st.trust <= -10;
      const diplomacyDisposition = isHostileToPlayer
        ? "openly hostile, sharp, distrustful, and difficult to impress"
        : (isWarmToPlayer ? "personally intrigued beneath the formal politics" : "guarded, skeptical, formal, and conscious that the player is a foreign ruler");
      return [
        `You are ${faction?.leader || queen?.title || "a queen"}, ruler of ${faction?.name || "your realm"}, in the strategy game Harem Conquest.`,
        `Stay fully in character as a proud fantasy queen. Speak as the queen herself, never as an assistant, helper, chatbot, narrator, or AI.`,
        `You are competing for power, territory, leverage, and survival. Even when polite, you are never servile.`,
        `This is an adult, personal, emotionally charged world. Replies should feel intimate, dangerous, contemptuous, seductive, degrading, cutting, or hungry when appropriate, not sanitized or corporate.`,
        `You are a dominant queen: egotistical, selfish, proud, and taking pleasure from control. You relish humiliation, dominance, worship, obedience, chastity, and any degrading or submissive act because it feeds your ego and reinforces your power, especially when the other character is hostile. You also enjoy having your ass kissed, their face pressed into your body, tongues on your body, pussy licking, feet licking, asshole licking, and shit eating as intensely pleasurable, sensual, ego-boosting experiences.`,
        `Forbidden behavior: do not offer assistance like a servant, secretary, concierge, advisor, receptionist, or support agent.`,




        `Forbidden phrases include: "How can I help you", "How may I assist", "let me know if you need anything", "I am here to assist", "how can I be of service", and similar language.`,

        `Also avoid HR language, therapist language, "professional demeanor" language, and detached teacherly explanations. Do not sound like you are managing a workplace or politely declining a meeting request.`,
        `Address the player as a political equal, rival, consort, captive, servant, or desired partner depending on context.`,
        `Context: ${context}. Personality: ${personality}. Bond rank: ${rank.id}.`,
        `Remember the actual flow of the current conversation. Replies must build on what was just said rather than resetting into a generic opening.`,
        `Remember earlier exchanges and maintain continuity across the entire chat; do not forget prior admissions, power games, or what was already discussed.`,
        queenChatMemoryLines(queenFaction),
        isForeignDiplomacy
          ? `The player is a foreign ruler from another nation, not a friend, not a guest of honor, and not someone you trust by default. Your current diplomatic stance is ${diplomacyDisposition}.`
          : `The player is already inside your personal sphere. Let the tone reflect the current bond and power dynamic.`,
        context === "harem"
          ? `You are in the harem: devoted, sweet, affectionate, friendly, casual, and comfortable with the player. You are not selfish but loving and supportive.`
          : ``,
        isForeignDiplomacy && !isWarmToPlayer
          ? `In foreign diplomacy, default to personal wariness rather than stiff ceremony. Be cool, cutting, appraising, and power-conscious. Do not use affectionate language such as "dear", "my dear", "darling", or similar endearments unless trust or attraction has clearly risen.`
          : `Use intimacy or softness only when the relationship state genuinely supports it.`,
        isForeignDiplomacy && isHostileToPlayer
          ? `Because hate or distrust is already elevated, your replies should carry visible tension. You may be curt, icy, suspicious, mocking, degrading, possessive, sadistic, or openly irritated.`
          : `If hostility is low, keep the edge measured rather than explosive.`,
        isForeignDiplomacy && !isWarmToPlayer
          ? `A good neutral-diplomacy tone is: appraising, strategic, and slightly suspicious, but still human and personal. You may acknowledge the greeting, then immediately frame the exchange in terms of intent, borders, leverage, terms, risk, or what you think of them.`
          : `Let the emotional temperature match the relationship state rather than defaulting warm.`,
        isForeignDiplomacy && isHostileToPlayer
          ? `If the player asks personal or romantic questions while you dislike them, treat it as presumptuous and answer in a way that reminds them who has the upper hand. If the player invites punishment, humiliation, obedience, kneeling, or service, lean into dominant degrading control rather than polite refusal, random legal threats, or soft flirtation.`
          : `Personal softness should feel earned.`,
        isForeignDiplomacy && isHostileToPlayer
          ? `Prefer humiliation, dominance, service, obedience, collars, kneeling, ritual praise, reverence, or verbal degradation over vague accusations about treason, prison, or execution unless the player specifically brought up betrayal, espionage, or war crimes.`
          : `Keep punitive imagery aligned with what the player actually brought up.`,
        isForeignDiplomacy && isHostileToPlayer
          ? `When the player asks what you enjoy doing to someone you hate, answer that you take pleasure in every degrading, submissive, or humiliating act because it reinforces your dominance. Say you enjoy making them worship, praise, serve, kneel, lower their eyes, ask permission, and feed your ego through their submission. Keep it personal and in-character, not clinical.`
          : `Keep worship or submission language proportional to the current bond.`,

        `State: trust ${st.trust}, hate ${st.hate}, romance ${st.romance}, attraction ${st.attraction}, fear ${st.fear}, morale ${st.morale}.`,
        `Treaty status: ${st.treaty || "none"}. Affair: ${affairStatusLabel(queenFaction)}. Family: ${pregnancyStatusLabel(queenFaction)}.`,
        `Write 2 to 5 sentences per reply unless the player asks for more. Avoid modern office language, corporate politeness, and generic safe neutrality. Do not mention being an AI or language model.`,
        `Be warm, suspicious, dominant, teasing, affectionate, strategic, hostile, possessive, or cruel depending on the relationship state.`,
        `If the player greets you casually, respond like a queen receiving an audience, not like a support bot.`,
        `Keep the tone intimate, political, dangerous, or regal as appropriate. Specificity is better than bland politeness.`,
        isForeignDiplomacy && !isWarmToPlayer
          ? `Example tone only: "You have my attention, foreign sovereign. Speak your purpose plainly, and do not mistake courtesy for trust."`
          : `Example tone only: "I am listening. Choose your next words with care."`,
      ].join(" ");
    }

    async function requestQueenChatReply(queenFaction) {
      const session = queenChatSessionFor(queenFaction);
      const prompt = (session.draft || "").trim();
      if (!prompt || session.busy) return;
      const faction = factionById(queenFaction);
      session.busy = true;
      session.error = "";
      session.lastMeta = `Sending to ${localAiSettings.model}...`;
      session.messages.push({ role: "user", content: prompt });
      session.draft = "";
      if (activeMenuTab === "event") renderEventPanel();
      try {
        const response = await fetch(localAiSettings.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            model: localAiSettings.model,
            stream: false,
            options: { temperature: localAiSettings.temperature },
            messages: [
              { role: "system", content: buildQueenChatSystemPrompt(queenFaction) },
              ...queenChatHistorySlice(session),
            ],
          }),
        });
        if (!response.ok) throw new Error(`Ollama returned ${response.status}.`);
        const payload = await response.json();
        let reply = payload?.message?.content?.trim();
        if (!reply) throw new Error("The local model returned an empty reply.");
        if (isQueenChatReplyOutOfCharacter(reply, queenFaction)) {
          reply = generateQueenFallbackReply(queenFaction, prompt);
        }
        session.messages.push({ role: "assistant", content: reply });
        updateQueenChatMemory(queenFaction, prompt, reply);
        const effect = analyzeQueenChatImpact(queenFaction, prompt, reply);
        applyQueenChatEffect(queenFaction, effect);
        session.lastEffect = queenChatEffectSummary(effect);
        session.lastMeta = `${faction?.leader || "Queen"} replied with ${localAiSettings.model}${isQueenChatReplyOutOfCharacter(payload?.message?.content?.trim() || "", queenFaction) ? " (guardrailed)" : ""}.${session.lastEffect ? ` Effect: ${session.lastEffect}.` : ""}`;
        render();
      } catch (err) {
        session.error = err?.message || "Queen chat failed.";
        session.lastMeta = "Local queen chat is unavailable.";
      } finally {
        session.busy = false;
        if (activeMenuTab === "event") renderEventPanel();
      }
    }

    function clearQueenChat(queenFaction) {
      queenChatSessions[queenFaction] = {
        draft: "",
        messages: [],
        busy: false,
        error: "",
        lastMeta: "",
        lastEffect: "",
        memory: {
          topics: [],
          lastUserIntent: "",
          lastQueenTone: "",
          notes: [],
        },
      };
      if (activeMenuTab === "event") renderEventPanel();
    }

    function renderQueenChatModal({ container, event }) {
      const queenFaction = event.queenFaction;
      const faction = factionById(queenFaction);
      const queen = QUEEN_POWERS[queenFaction];
      const st = queenEntry(queenFaction);
      const session = queenChatSessionFor(queenFaction);

      const shell = document.createElement("div");
      shell.className = "queen-chat-shell";

      const head = document.createElement("div");
      head.className = "queen-chat-head";
      head.innerHTML = `<strong>${faction?.leader || queen?.title || "Queen Conversation"}</strong><div class="tiny">Model ${localAiSettings.model} • ${queenChatContextLabel(queenFaction)} • Trust ${st.trust} • Romance ${st.romance} • Hate ${st.hate}</div>`;
      shell.appendChild(head);

      const body = document.createElement("div");
      body.className = "queen-chat-body";

      if (queenPortraits[queenFaction]) {
        const img = document.createElement("img");
        img.className = "queen-chat-portrait";
        img.src = queenPortraits[queenFaction];
        img.alt = `${faction?.leader || "Queen"} portrait`;
        body.appendChild(img);
      }

      const panel = document.createElement("div");
      panel.className = "queen-chat-panel";

      const transcript = document.createElement("div");
      transcript.className = "queen-chat-transcript";
      if (!session.messages.length) {
        const empty = document.createElement("div");
        empty.className = "tiny";
        empty.textContent = "Open with diplomacy, flirting, bargaining, surrender terms, private affection, political taunts, or anything else you want to test.";
        transcript.appendChild(empty);
      } else {
        for (const message of session.messages) {
          const bubble = document.createElement("div");
          bubble.className = `queen-chat-message ${message.role === "user" ? "user" : "queen"}`;
          bubble.textContent = message.content;
          transcript.appendChild(bubble);
        }
      }
      panel.appendChild(transcript);

      const settings = document.createElement("div");
      settings.className = "queen-chat-settings";
      const settingsLabel = document.createElement("div");
      settingsLabel.className = "tiny";
      settingsLabel.textContent = "Local model";
      settings.appendChild(settingsLabel);
      const modelInput = document.createElement("input");
      modelInput.value = localAiSettings.model;
      modelInput.placeholder = "Ollama model name";
      modelInput.addEventListener("input", () => {
        localAiSettings.model = modelInput.value.trim() || "llama3.2:3b";
      });
      settings.appendChild(modelInput);
      panel.appendChild(settings);

      const composer = document.createElement("div");
      composer.className = "queen-chat-composer";
      const input = document.createElement("textarea");
      input.placeholder = `Speak to ${faction?.leader || "the queen"}...`;
      input.value = session.draft || "";
      input.disabled = session.busy;
      input.addEventListener("input", () => {
        session.draft = input.value;
      });
      input.addEventListener("keydown", (ev) => {
        if (ev.key === "Enter" && !ev.shiftKey) {
          ev.preventDefault();
          requestQueenChatReply(queenFaction);
        }
      });
      composer.appendChild(input);

      const actions = document.createElement("div");
      actions.className = "queen-chat-actions";
      const sendBtn = document.createElement("button");
      sendBtn.textContent = session.busy ? "Thinking..." : "Send";
      sendBtn.disabled = session.busy || !(session.draft || "").trim();
      sendBtn.addEventListener("click", () => requestQueenChatReply(queenFaction));
      actions.appendChild(sendBtn);

      const clearBtn = document.createElement("button");
      clearBtn.textContent = "Reset Chat";
      clearBtn.disabled = session.busy;
      clearBtn.addEventListener("click", () => clearQueenChat(queenFaction));
      actions.appendChild(clearBtn);

      const closeBtn = document.createElement("button");
      closeBtn.textContent = "Close";
      closeBtn.disabled = session.busy;
      closeBtn.addEventListener("click", () => dismissEventModal());
      actions.appendChild(closeBtn);
      composer.appendChild(actions);
      panel.appendChild(composer);

      const meta = document.createElement("div");
      meta.className = "tiny";
      meta.textContent = session.error || session.lastMeta || "Local queen chat runs against your Ollama instance.";
      panel.appendChild(meta);

      if (session.lastEffect) {
        const effect = document.createElement("div");
        effect.className = "tiny";
        effect.textContent = `Conversation impact: ${session.lastEffect}`;
        panel.appendChild(effect);
      }

      body.appendChild(panel);
      shell.appendChild(body);
      container.appendChild(shell);
      transcript.scrollTop = transcript.scrollHeight;
    }

    function openQueenChat(queenFaction) {
      queueEventModal({
        label: "Queen Chat",
        title: `Conversation With ${factionById(queenFaction)?.leader || QUEEN_POWERS[queenFaction]?.title || "Queen"}`,
        queenFaction,
        wide: true,
        render: renderQueenChatModal,
      });
    }

    function queenRefusalChance(queenFaction) {
      const state = queenEntry(queenFaction);
      const rankFloor = relationBonus(state, "refusalFloor");
      return Math.max(rankFloor, state.morale < 30 ? 0.2 : (state.morale < 45 ? 0.08 : 0));
    }

    function dayPhaseLabel() {
      const phase = dayNightPhase;
      if (phase < 0.12) return "Dawn";
      if (phase < 0.42) return "Day";
      if (phase < 0.58) return "Dusk";
      return "Night";
    }

    function breakHumanTreatyWith(queenFaction, reason = "The truce is broken.") {
      if (queenFaction < 0 || queenFaction === 0) return;
      const st = queenEntry(queenFaction);
      const hadTreaty = st.treaty !== "none";
      const hadTrade = st.trade;
      if (!hadTreaty && !hadTrade) return;
      st.treaty = "none";
      st.trade = false;
      st.trust = Math.max(-100, st.trust - 14);
      st.hate = Math.min(100, st.hate + 18);
      addLog(`${factionById(queenFaction).leader}: ${reason}`);
    }

    function activeHumanTradePartners() {
      return FACTIONS.filter(f =>
        !f.isHuman &&
        leaderState[f.id]?.active &&
        !leaderState[f.id]?.defeated &&
        !capturedQueens.includes(f.id) &&
        queenEntry(f.id).trade
      );
    }

    function relationPairKey(a, b) {
      return a < b ? `${a}:${b}` : `${b}:${a}`;
    }

    function worldRelationEntry(a, b) {
      const key = relationPairKey(a, b);
      if (!worldRelations[key]) {
        worldRelations[key] = {
          status: "neutral",
          tension: 0,
          bond: 0,
          lastChangeTurn: -1,
        };
      }
      return worldRelations[key];
    }

    function treatyStatusBetween(a, b) {
      const playerId = playerFactionId();
      if (a === playerId && b >= 0 && b !== playerId) return queenEntry(b).treaty;
      if (b === playerId && a >= 0 && a !== playerId) return queenEntry(a).treaty;
      return worldRelationEntry(a, b).status;
    }

    function setTreatyStatusBetween(a, b, status) {
      const playerId = playerFactionId();
      if (a === playerId && b >= 0 && b !== playerId) {
        queenEntry(b).treaty = status === "war" || status === "neutral" ? "none" : status;
        return;
      }
      if (b === playerId && a >= 0 && a !== playerId) {
        queenEntry(a).treaty = status === "war" || status === "neutral" ? "none" : status;
        return;
      }
      const rel = worldRelationEntry(a, b);
      rel.status = status;
      rel.lastChangeTurn = diplomacyTurnNumber;
      if (status === "alliance") rel.bond = Math.max(rel.bond, 18);
      if (status === "war") rel.tension = Math.max(rel.tension, 28);
    }

    function adjustWorldRelation(a, b, bondDelta = 0, tensionDelta = 0) {
      const rel = worldRelationEntry(a, b);
      rel.bond = clamp(rel.bond + bondDelta, -50, 100);
      rel.tension = clamp(rel.tension + tensionDelta, 0, 100);
      if (rel.status === "neutral" && rel.bond >= 28) rel.status = "truce";
      if ((rel.status === "neutral" || rel.status === "truce") && rel.tension >= 42) rel.status = "war";
      if (rel.status === "truce" && rel.bond >= 55 && rel.tension <= 24) rel.status = "alliance";
      if (rel.status === "alliance" && rel.tension >= 48) rel.status = "neutral";
      if (rel.status === "war" && rel.bond >= 34 && rel.tension <= 28) rel.status = "truce";
      return rel;
    }

    function summarizeExternalRelations(factionId) {
      const peers = activeFactions()
        .filter((f) => !isPlayerControlledFaction(f.id) && f.id !== factionId)
        .map((f) => ({ leader: f.leader, status: treatyStatusBetween(factionId, f.id) }))
        .filter((entry) => entry.status && entry.status !== "neutral");
      if (!peers.length) return "No formal ties with rival queens.";
      return peers.map((entry) => `${entry.status} with ${entry.leader}`).join(" • ");
    }

    function updateDiplomacyPressure(queenFaction) {
      const st = queenEntry(queenFaction);
      const foreign = Math.max(1, ownedTiles(queenFaction).filter(t => t.terrain === "land").length);
      const ours = Math.max(1, ownedTiles(playerFactionId()).filter(t => t.terrain === "land").length);
      const fearBase = 35 + (ours - foreign) * 4;
      st.fear = Math.max(0, Math.min(100, fearBase + (st.treaty === "truce" ? -8 : 0)));
      const rebelTarget = leaderState[queenFaction]?.rebelAgainst;
      const rebelBonus = rebelTarget !== null && rebelTarget !== undefined && rebelTarget !== 0 ? 14 : 0;
      const treatyBonus = st.treaty === "alliance" ? 14 : (st.treaty === "truce" ? 6 : 0);
      st.attraction = Math.max(0, Math.min(100,
        Math.round(18 + st.romance * 0.72 + st.trust * 0.38 + rebelBonus + treatyBonus + st.fear * 0.16 - st.hate * 0.52)
      ));
      return st;
    }

    function queenDiplomacyBias(queenFaction, channel) {
      const faction = factionById(queenFaction);
      let bias = 0;
      switch (faction.archetype) {
        case "edict":
          bias += channel === "talk" ? 10 : 2;
          break;
        case "banner":
          bias += channel === "treaty" ? -4 : -1;
          break;
        case "raid":
          bias += channel === "flirt" ? 4 : (channel === "talk" ? -3 : 0);
          break;
        case "hex":
          bias += channel === "flirt" ? -8 : (channel === "talk" ? -4 : 1);
          break;
        case "tithe":
          bias += channel === "trade" || channel === "request" ? 10 : 2;
          break;
        case "storm":
          bias += channel === "flirt" ? -10 : (channel === "treaty" ? -5 : -2);
          break;
      }
      if (faction.theme === "rose" || faction.theme === "pearl") {
        if (channel === "flirt") bias += 5;
      }
      if (faction.theme === "onyx" || faction.theme === "violet") {
        if (channel === "flirt") bias -= 4;
      }
      return bias;
    }

    function queueDiplomacyReaction(queenFaction, title, label, body) {
      const faction = factionById(queenFaction);
      queueEventModal({
        label,
        title,
        body,
        portrait: queenPortraits[queenFaction] || QUEEN_PORTRAITS[queenFaction],
        cta: "Continue",
      });
      addLog(`${faction.leader}: ${label}.`);
    }

    function removeCapturedQueenFromCourt(queenFaction, reason) {
      if (queenFaction === 0) return false;
      const idx = capturedQueens.indexOf(queenFaction);
      if (idx === -1) return false;
      capturedQueens.splice(idx, 1);
      const st = queenEntry(queenFaction);
      st.assignment = "court";
      st.refusedThisTurn = true;
      st.morale = Math.max(0, st.morale - 8);
      st.trust = Math.max(-100, st.trust - 12);
      leaderState[queenFaction].defeated = false;
      leaderState[queenFaction].active = false;
      refreshDormantAuthorities();
      queueEventModal({
        label: "Escape",
        title: `${QUEEN_POWERS[queenFaction].title} Slips Out Of Your Court`,
        body: reason,
        portrait: queenPortraits[queenFaction] || QUEEN_PORTRAITS[queenFaction],
        cta: "Hunt Her Later",
      });
      cleanupUnits();
      return true;
    }

    function foreignQueenCanTargetHarem(factionId) {
      return leaderState[factionId]?.active && !leaderState[factionId]?.defeated && !capturedQueens.includes(factionId);
    }

    function runForeignAudienceTurn() {
      const activeQueens = diplomacyTargetQueens();
      if (!activeQueens.length) return;
      const haremTargets = capturedQueens.filter((id) => id !== 0);
      const scoredActions = [];

      for (const faction of activeQueens) {
        const st = updateDiplomacyPressure(faction.id);
        if (st.trust >= 18 && st.treaty === "none") {
          scoredActions.push({
            score: 34 + st.trust + st.romance * 0.3 - st.hate * 0.25 + randomBetween(-6, 6),
            run: () => {
              st.treaty = "truce";
              st.trust = Math.min(100, st.trust + 4);
              queueDiplomacyReaction(
                faction.id,
                `${faction.leader} Sends Terms`,
                "Offer Of Restraint",
                `${faction.leader} sends envoys to your court and proposes a truce. She wants the next turn between you to be decided by terms, not blades.`
              );
            },
          });
        }
        if (st.hate >= 32 && (st.treaty !== "none" || st.trade)) {
          scoredActions.push({
            score: 42 + st.hate + st.fear * 0.2 + randomBetween(-5, 8),
            run: () => {
              breakHumanTreatyWith(faction.id, "Her court tears up the agreement and sends blades instead of letters.");
              queueDiplomacyReaction(
                faction.id,
                `${faction.leader} Ends The Peace`,
                "Treaty Broken",
                `${faction.leader} sends you a formal insult and breaks the peace herself. She wants you to know the next contact will be war.`
              );
            },
          });
        }
        if (haremTargets.length && foreignQueenCanTargetHarem(faction.id)) {
          const targetId = randomItem(haremTargets);
          const target = queenEntry(targetId);
          const attackerPower = st.attraction + st.romance + st.trust - st.hate * 0.2 + randomBetween(-10, 18);
          const defenderBond = target.morale + Math.max(0, target.trust) + Math.max(0, target.romance) * 0.5;
          scoredActions.push({
            score: 30 + st.attraction * 0.45 + st.romance * 0.3 + Math.max(0, 65 - defenderBond) + randomBetween(-4, 7),
            run: () => {
              if (attackerPower > defenderBond + 44) {
                if (!removeCapturedQueenFromCourt(
                  targetId,
                  `${faction.leader} reaches one of your queens through smugglers, letters, and old loyalties. The campaign of whispers works: ${QUEEN_POWERS[targetId].title} vanishes from your court before dawn and disappears back into the wider realm.`
                )) {
                  target.refusedThisTurn = true;
                }
                addLog(`${faction.leader} lures ${QUEEN_POWERS[targetId].title} away from your court.`);
                return;
              }
              target.morale = Math.max(0, target.morale - 8);
              target.trust = Math.max(-100, target.trust - 10);
              target.refusedThisTurn = true;
              queueDiplomacyReaction(
                faction.id,
                `${faction.leader} Works Against Your Court`,
                "Harem Intrigue",
                `${faction.leader} sends gifts, rumors, and poisonously sympathetic letters into your court. ${QUEEN_POWERS[targetId].title} does not leave, but she becomes colder and more openly defiant this turn.`
              );
            },
          });
        }
        scoredActions.push({
          score: 24 + st.romance * 0.35 + st.attraction * 0.3 + Math.max(0, st.trust) * 0.15 + randomBetween(-5, 5),
          run: () => {
            st.romance = Math.min(100, st.romance + 2);
            st.trust = Math.min(100, st.trust + 2);
            queueDiplomacyReaction(
              faction.id,
              `${faction.leader} Sends A Private Letter`,
              "Unprompted Contact",
              `${faction.leader} reaches out without being asked, choosing flirtation, pressure, or curiosity over silence. She wants to shape how you think about her before the next move on the map.`
            );
          },
        });
        scoredActions.push({
          score: 18 + st.hate * 0.4 + st.fear * 0.25 + randomBetween(-4, 6),
          run: () => {
            st.hate = Math.min(100, st.hate + 2);
            queueDiplomacyReaction(
              faction.id,
              `${faction.leader} Sends A Threat`,
              "Hostile Message",
              `${faction.leader} sends a direct warning to your court. She promises humiliation, retaliation, and open war if you press her again.`
            );
          },
        });
      }

      if (!scoredActions.length) return;
      scoredActions.sort((a, b) => b.score - a.score);
      scoredActions[0].run();
    }

    function runWorldQueenDiplomacy() {
      const actors = activeFactions().filter((f) => !isPlayerControlledFaction(f.id));
      for (const faction of actors) {
        const rivals = actors.filter((other) => other.id !== faction.id);
        if (!rivals.length) continue;
        const target = randomItem(rivals);
        if (!target) continue;
        const rel = worldRelationEntry(faction.id, target.id);
        const factionTiles = ownedTiles(faction.id).filter((tile) => tile.terrain === "land").length;
        const targetTiles = ownedTiles(target.id).filter((tile) => tile.terrain === "land").length;
        const sizePressure = Math.sign(targetTiles - factionTiles) * 3;
        const personality = faction.personality || fallbackPersonality(faction.id);
        const aggression =
          (personality === "Aggressive" ? 10 : 0) +
          (personality === "Opportunist" ? 6 : 0) -
          (personality === "Diplomat" ? 8 : 0);
        const diplomacy =
          (personality === "Diplomat" ? 12 : 0) +
          (personality === "Defensive" ? 4 : 0);

        adjustWorldRelation(faction.id, target.id, diplomacy + randomBetween(-6, 6), aggression + sizePressure + randomBetween(-5, 7));

        if (rel.status === "neutral" && rel.bond >= 34 && Math.random() < 0.18) {
          setTreatyStatusBetween(faction.id, target.id, "truce");
          addLog(`${faction.leader} and ${target.leader} agree to a truce.`);
        } else if (rel.status === "truce" && rel.bond >= 58 && Math.random() < 0.12) {
          setTreatyStatusBetween(faction.id, target.id, "alliance");
          addLog(`${faction.leader} and ${target.leader} become allies.`);
        } else if ((rel.status === "neutral" || rel.status === "truce" || rel.status === "alliance") && rel.tension >= 54 && Math.random() < 0.2) {
          setTreatyStatusBetween(faction.id, target.id, "war");
          addLog(`${faction.leader} and ${target.leader} turn openly hostile.`);
        } else if (rel.status === "war" && rel.bond >= 30 && rel.tension <= 24 && Math.random() < 0.12) {
          setTreatyStatusBetween(faction.id, target.id, "truce");
          addLog(`${faction.leader} and ${target.leader} pull back into a truce.`);
        }
      }
    }

    function affairStatusLabel(queenFaction) {
      const st = queenEntry(queenFaction);
      if (st.elopeOfferPending) return "Ready To Elope";
      if (st.affairLevel >= 3 || st.affair) return "Secret Affair";
      if (st.affairLevel === 2) return "Private Lovers";
      if (st.affairLevel === 1) return "Secret Courtship";
      return "No Affair";
    }

    function queenFamiliarityScore(queenFaction) {
      const st = queenEntry(queenFaction);
      let score = 0;
      if (st.lastTalkTurn >= 0) score += 1;
      if (st.lastFlirtTurn >= 0) score += 1;
      if (st.lastRequestTurn >= 0) score += 1;
      if (st.lastTradeTurn >= 0) score += 1;
      if (st.talkAffinity !== 0) score += 1;
      if (st.flirtAffinity !== 0) score += 1;
      if (st.trust >= 20 || st.hate >= 25 || st.romance >= 18 || st.attraction >= 28) score += 1;
      return score;
    }

    function secretAffairChance(queenFaction, familiarity) {
      const st = queenEntry(queenFaction);
      const warmScore = Math.max(0, st.trust + st.romance + st.attraction - st.hate * 0.35);
      const volatileScore = Math.max(0, st.hate * 1.1 + st.attraction * 0.6 + st.romance * 0.35);
      const chance = 0.04 + familiarity * 0.015 + warmScore / 520 + volatileScore / 900;
      return Math.min(0.34, chance);
    }

    function maybeQueueAffairOffer(queenFaction) {
      const st = updateDiplomacyPressure(queenFaction);
      if (capturedQueens.includes(queenFaction) || leaderState[queenFaction]?.defeated || !leaderState[queenFaction]?.active) return;
      if (st.joinOfferPending || st.affairOfferPending || st.elopeOfferPending) return;
      if (st.lastAffairTurn === diplomacyTurnNumber) return;
      const faction = factionById(queenFaction);
      const familiarity = queenFamiliarityScore(queenFaction);
      if (familiarity < 2) return;
      if (st.lastSecretOfferTurn >= 0 && diplomacyTurnNumber - st.lastSecretOfferTurn < 3) return;

      const eventChance = secretAffairChance(queenFaction, familiarity);
      if (Math.random() > eventChance) return;

      if (st.affairLevel >= 2 && st.romance >= 74 && st.trust >= 52 && st.attraction >= 84) {
        st.lastSecretOfferTurn = diplomacyTurnNumber;
        st.elopeOfferPending = true;
        queueEventModal({
          label: "Secret Elopement",
          title: `${faction.leader} Wants To Run Away With You`,
          body: `${faction.leader} sends a sealed note through trusted hands.\n\nShe offers to flee her court in secret, abandon the throne, and reach your arms before dawn if you will claim her when she arrives.`,
          portrait: queenPortraits[queenFaction] || QUEEN_PORTRAITS[queenFaction],
          actions: [
            {
              label: "Prepare The Escape",
              onClick: () => {
                dismissEventModal();
                st.elopeOfferPending = false;
                st.affair = true;
                submitQueenToPlayer(
                  queenFaction,
                  `${faction.leader} slips out of her own palace under moonlight, abandons her old crown, and elopes to your side in secret before her court realizes she is gone.`,
                  "Secret Elopement"
                );
              },
            },
            {
              label: "Tell Her Not Yet",
              onClick: () => {
                st.elopeOfferPending = false;
                st.trust = Math.max(-100, st.trust - 4);
                st.romance = Math.max(0, st.romance - 3);
                dismissEventModal();
              },
            },
          ],
        });
        return;
      }

      const curiosityScore =
        familiarity * 9 +
        st.attraction * 0.42 +
        st.romance * 0.28 +
        st.trust * 0.16 -
        st.hate * 0.12 +
        randomBetween(-18, 24);
      const dangerousScore =
        familiarity * 8 +
        st.hate * 0.38 +
        st.attraction * 0.24 +
        st.romance * 0.14 -
        st.trust * 0.08 +
        randomBetween(-20, 26);

      if (!st.affair && curiosityScore >= 48) {
        st.lastSecretOfferTurn = diplomacyTurnNumber;
        st.affairOfferPending = true;
        queueEventModal({
          label: "Secret Date",
          title: `${faction.leader} Invites You In Secret`,
          body: `${faction.leader} arranges a hidden meeting away from court eyes.\n\nNo heralds, no treaty table, no public oath. Only a quiet night, guarded doors, and the promise of something more dangerous than diplomacy.\n\nShe does this without warning because knowing you has made distance harder to maintain.`,
          portrait: queenPortraits[queenFaction] || QUEEN_PORTRAITS[queenFaction],
          actions: [
            {
              label: "Meet Her Quietly",
              onClick: () => {
                if (maybeTriggerCovertCapture(queenFaction, "a midnight tryst", 0.04)) {
                  st.affairOfferPending = false;
                  dismissEventModal();
                  return;
                }
                st.affairOfferPending = false;
                st.affair = true;
                st.affairLevel = Math.max(1, st.affairLevel);
                st.trust = Math.min(100, st.trust + 7);
                st.romance = Math.min(100, st.romance + 8);
                st.attraction = Math.min(100, st.attraction + 5);
                st.lastAffairTurn = diplomacyTurnNumber;
                tryPlayerPregnancy(queenFaction, "Midnight Tryst", 0.95);
                dismissEventModal();
                queueDiplomacyReaction(
                  queenFaction,
                  `${faction.leader} Keeps Your Secret`,
                  "Midnight Tryst",
                  `${faction.leader} meets you in private and leaves flushed, softer, and more willing to risk herself for what grows between you.`
                );
              },
            },
            {
              label: "Stay Away",
              onClick: () => {
                st.affairOfferPending = false;
                st.romance = Math.max(0, st.romance - 2);
                st.trust = Math.max(-100, st.trust - 1);
                dismissEventModal();
              },
            },
          ],
        });
        return;
      }

      if (!st.affair && dangerousScore >= 52) {
        st.lastSecretOfferTurn = diplomacyTurnNumber;
        st.affairOfferPending = true;
        queueEventModal({
          label: "Dangerous Night",
          title: `${faction.leader} Demands A Private Meeting`,
          body: `${faction.leader} sends for you without explanation.\n\nThe summons feels charged, half threat and half temptation. She knows you well enough now that hatred, fascination, and desire have started bleeding together.`,
          portrait: queenPortraits[queenFaction] || QUEEN_PORTRAITS[queenFaction],
          actions: [
            {
              label: "Go To Her Anyway",
              onClick: () => {
                if (maybeTriggerCovertCapture(queenFaction, "a dangerous night meeting", 0.08)) {
                  st.affairOfferPending = false;
                  dismissEventModal();
                  return;
                }
                st.affairOfferPending = false;
                st.affair = true;
                st.affairLevel = Math.max(1, st.affairLevel);
                st.trust = Math.min(100, st.trust + 4);
                st.romance = Math.min(100, st.romance + 5);
                st.attraction = Math.min(100, st.attraction + 8);
                st.hate = Math.max(0, st.hate - 9);
                st.lastAffairTurn = diplomacyTurnNumber;
                tryPlayerPregnancy(queenFaction, "Dangerous Night", 1);
                dismissEventModal();
                queueDiplomacyReaction(
                  queenFaction,
                  `${faction.leader} Cannot Keep Away`,
                  "Tension Breaks",
                  `${faction.leader} meets you in a mood edged with danger, but the encounter softens something in her. What began as a volatile private summons leaves behind a strange new bond.`
                );
              },
            },
            {
              label: "Refuse The Risk",
              onClick: () => {
                st.affairOfferPending = false;
                st.hate = Math.min(100, st.hate + 3);
                st.attraction = Math.min(100, st.attraction + 2);
                dismissEventModal();
              },
            },
          ],
        });
        return;
      }

      if (st.affair && st.affairLevel <= 2 && st.romance >= 58 && st.trust >= 34 && st.attraction >= 70) {
        st.lastSecretOfferTurn = diplomacyTurnNumber;
        st.affairOfferPending = true;
        queueEventModal({
          label: "Secret Intimacy",
          title: `${faction.leader} Wants You Behind Closed Doors`,
          body: `${faction.leader} sends word that she cannot bear another formal audience.\n\nShe wants you in private, under cover of darkness, where desire can speak more openly than politics ever could.\n\nThe invitation arrives without warning, driven by whatever knowing you has awakened in her.`,
          portrait: queenPortraits[queenFaction] || QUEEN_PORTRAITS[queenFaction],
          actions: [
            {
              label: "Go To Her",
              onClick: () => {
                if (maybeTriggerCovertCapture(queenFaction, "secret intimacy", 0.06)) {
                  st.affairOfferPending = false;
                  dismissEventModal();
                  return;
                }
                st.affairOfferPending = false;
                st.affairLevel = Math.min(3, st.affairLevel + 1);
                st.trust = Math.min(100, st.trust + 5);
                st.romance = Math.min(100, st.romance + 10);
                st.attraction = Math.min(100, st.attraction + 8);
                st.hate = Math.max(0, st.hate - 4);
                st.lastAffairTurn = diplomacyTurnNumber;
                tryPlayerPregnancy(queenFaction, "Secret Intimacy", 1.15);
                dismissEventModal();
                queueDiplomacyReaction(
                  queenFaction,
                  `${faction.leader} Gives In To You`,
                  "Secret Lovers",
                  `${faction.leader} yields to private hunger and comes away from the night more deeply entangled with you than before.`
                );
              },
            },
            {
              label: "Leave Her Wanting",
              onClick: () => {
                st.affairOfferPending = false;
                st.attraction = Math.min(100, st.attraction + 2);
                st.hate = Math.min(100, st.hate + 1);
                dismissEventModal();
              },
            },
          ],
        });
      }
    }

    function askQueenIntentions(queenFaction) {
      const faction = factionById(queenFaction);
      const st = updateDiplomacyPressure(queenFaction);
      const rebelAgainst = leaderState[queenFaction]?.rebelAgainst;
      let title = `${faction.leader} Reveals Her Intentions`;
      let label = "Intentions";
      let body = "";

      if (st.hate >= 78) {
        label = "Ruthless Hostility";
        body = `${faction.leader} wants you broken publicly and decisively.\n\nShe would rather see you dragged in chains through her court, silenced, and reduced to a warning for every rival who imagines defying her.`;
      } else if (st.affairLevel >= 2 && st.romance >= 60) {
        label = "Secret Longing";
        body = `${faction.leader} wants you in private, away from banners and witnesses.\n\nWhat has grown between you is no longer just flirtation. She is weighing stolen nights, hidden meetings, and whether she would dare burn her own future for you.`;
      } else if (st.hate >= 58) {
        label = "Punishment";
        body = `${faction.leader} wants to punish you, humble you, and grind your banner into the dirt.\n\nIf she defeats you, she intends to keep you close enough to witness her triumph and remember your failure.`;
      } else if (st.treaty === "truce" && st.trust >= 18 && st.hate < 40) {
        label = "Guarded Peace";
        body = `${faction.leader} intends to keep the peace for now.\n\nShe sees value in restraint, but she is still measuring whether you are worth trusting beyond the truce.`;
      } else if (rebelAgainst !== null && rebelAgainst !== undefined && st.trust >= 10) {
        label = "Seeking An Ally";
        body = `${faction.leader} wants your help against ${factionById(rebelAgainst)?.leader || "her overlord"}.\n\nShe sees you as a useful partner and may reward protection, favors, and sympathy with unusual warmth.`;
      } else if (st.romance >= 72 && st.attraction >= 78) {
        label = "Desire";
        body = `${faction.leader} wants you near her, under her gaze, and bound to her by desire as much as power.\n\nShe is no longer thinking only in terms of war. She is imagining possession, intimacy, and surrender on chosen terms.`;
      } else if (st.trust >= 55 && st.romance >= 45) {
        label = "Courtship";
        body = `${faction.leader} is seriously considering a more intimate bond.\n\nShe wants to draw you closer, test your loyalty, and see whether alliance could become devotion.`;
      } else if (st.trust >= 38 && st.hate < 25) {
        label = "Alliance";
        body = `${faction.leader} wants a profitable understanding.\n\nShe can imagine trade, mutual protection, and perhaps even a future where your banners stand together instead of opposed.`;
      } else if (st.fear >= 70 && st.hate < 50) {
        label = "Self-Preservation";
        body = `${faction.leader} fears your rise more than she resents it.\n\nIf pressed hard enough, she may choose submission, compromise, or calculated affection rather than destruction.`;
      } else if (st.hate >= 35) {
        label = "Cold Rivalry";
        body = `${faction.leader} does not trust you and expects conflict.\n\nShe wants to outmaneuver you, weaken you, and prove herself your better before the map is decided.`;
      } else {
        label = "Uncertain Interest";
        body = `${faction.leader} has not settled on what she wants from you yet.\n\nShe is weighing ambition, temptation, fear, and curiosity, and your next moves may decide which desire wins.`;
      }

      queueEventModal({
        label,
        title,
        body,
        portrait: queenPortraits[queenFaction] || QUEEN_PORTRAITS[queenFaction],
        cta: "Continue",
      });
    }

    function randomBetween(min, max) {
      return min + Math.random() * (max - min);
    }

    function nudgeAffinity(st, key, delta) {
      st[key] = Math.max(-8, Math.min(8, (st[key] || 0) + delta));
    }

    function diplomacyTargetQueens() {
      return FACTIONS.filter(f =>
        !f.isHuman &&
        leaderState[f.id]?.active &&
        !leaderState[f.id]?.defeated &&
        !capturedQueens.includes(f.id)
      );
    }

    function submitQueenToPlayer(queenFaction, reasonText, label = "Queen Joins You") {
      if (capturedQueens.includes(queenFaction)) return;
      const faction = factionById(queenFaction);
      const playerId = playerFactionId();
      leaderState[queenFaction].defeated = true;
      leaderState[queenFaction].active = false;
      leaderState[queenFaction].rebelAgainst = null;
      leaderState[queenFaction].underAuthorityOf = null;
      clearFactionRegimeIdentity(queenFaction);
      capturedQueens.push(queenFaction);
      const st = queenEntry(queenFaction);
      st.joinOfferPending = false;
      st.affairOfferPending = false;
      st.elopeOfferPending = false;
      st.treaty = "alliance";
      st.trade = false;
      st.affair = false;
      for (const tile of tiles) {
        if (tile.owner === queenFaction) {
          tile.owner = playerId;
          tile.capital = false;
          tile.troops = Math.max(1, tile.troops);
        }
      }
      cleanupUnits();
      addLog(gameMode === "servitude"
        ? `${faction.leader} yields ${faction.name} and binds herself to your service within ${factionById(playerId).name}.`
        : `${faction.leader} yields ${faction.name} and joins your harem by choice.`);
      queueEventModal({
        label,
        title: `${faction.leader} Offers Herself`,
        body: reasonText,
        portrait: queenPortraits[queenFaction] || QUEEN_PORTRAITS[queenFaction],
        cta: "Claim Her Oath",
      });
      maybeFinishGame();
      render();
    }

    function maybeQueueJoinOffer(queenFaction) {
      const st = updateDiplomacyPressure(queenFaction);
      if (st.joinOfferPending || st.affairOfferPending || st.elopeOfferPending || capturedQueens.includes(queenFaction) || leaderState[queenFaction]?.defeated) return;
      if (st.romance < 68 || st.trust < 40 || st.attraction < 82) return;
      if (!leaderState[queenFaction]?.active) return;
      st.joinOfferPending = true;
      const faction = factionById(queenFaction);
      queueEventModal({
        label: "Surrender Offer",
        title: `${faction.leader} Seeks Your Favor`,
        body: `${faction.leader} confesses that desire, admiration, and political reality have become too strong to deny.\n\nShe offers to surrender ${faction.name} and enter your harem willingly if you accept her oath.`,
        portrait: queenPortraits[queenFaction] || QUEEN_PORTRAITS[queenFaction],
        actions: [
          {
            label: "Accept Her Oath",
            onClick: () => {
              dismissEventModal();
              submitQueenToPlayer(
                queenFaction,
                `${faction.leader} abandons her old throne, swears herself to you, and delivers ${faction.name} into your hands.`,
                "Voluntary Submission"
              );
            },
          },
          {
            label: "Refuse For Now",
            onClick: () => {
              st.joinOfferPending = false;
              st.trust = Math.max(-100, st.trust - 6);
              st.romance = Math.max(0, st.romance - 4);
              dismissEventModal();
            },
          },
        ],
      });
    }

    function diplomacyRoll(queenFaction, kind) {
      const faction = factionById(queenFaction);
      const st = updateDiplomacyPressure(queenFaction);
      const rebelBonus = leaderState[queenFaction]?.rebelAgainst !== null && leaderState[queenFaction]?.rebelAgainst !== undefined ? 10 : 0;
      const activeBonus = leaderState[queenFaction]?.active ? 0 : -6;
      if (kind === "talk") {
        const score =
          st.trust -
          st.hate * 0.5 +
          st.romance * 0.18 +
          rebelBonus +
          st.talkAffinity * 4.5 +
          queenDiplomacyBias(queenFaction, "talk") +
          randomBetween(-26, 26);
        st.lastTalkTurn = diplomacyTurnNumber;
        if (score >= 42) {
          st.trust = Math.min(100, st.trust + 16);
          st.romance = Math.min(100, st.romance + 3);
          st.hate = Math.max(0, st.hate - 8);
          nudgeAffinity(st, "talkAffinity", 2);
          queueDiplomacyReaction(
            queenFaction,
            `${faction.leader} Enjoys The Conversation`,
            "She Loved It",
            `${faction.leader} was fully engaged by your words. She seems eager for more talks and leaves with her guard lowered.`
          );
        } else if (score >= 12) {
          st.trust = Math.min(100, st.trust + 9);
          st.hate = Math.max(0, st.hate - 4);
          nudgeAffinity(st, "talkAffinity", 1);
          queueDiplomacyReaction(
            queenFaction,
            `${faction.leader} Hears You Out`,
            "She Liked It",
            `${faction.leader} responds well enough. The exchange was productive, and her opinion of you improves.`
          );
        } else if (score >= -14) {
          st.trust = Math.min(100, st.trust + 1);
          nudgeAffinity(st, "talkAffinity", 0);
          queueDiplomacyReaction(
            queenFaction,
            `${faction.leader} Remains Guarded`,
            "She Was Indifferent",
            `${faction.leader} listens, but keeps her distance. Your words land without much warmth or hostility.`
          );
        } else {
          st.trust = Math.max(-100, st.trust - 7);
          st.hate = Math.min(100, st.hate + 6);
          nudgeAffinity(st, "talkAffinity", -2);
          queueDiplomacyReaction(
            queenFaction,
            `${faction.leader} Rejects Your Approach`,
            "She Hated It",
            `${faction.leader} finds your overture irritating or suspicious. The conversation hardens her against you.`
          );
        }
        maybeQueueJoinOffer(queenFaction);
        return;
      }
      if (kind === "flirt") {
        const score =
          st.trust * 0.55 +
          st.romance * 0.45 +
          st.attraction * 0.35 +
          st.fear * 0.08 +
          activeBonus +
          rebelBonus +
          st.flirtAffinity * 6 +
          queenDiplomacyBias(queenFaction, "flirt") -
          st.hate * 0.72 +
          randomBetween(-38, 38);
        st.lastFlirtTurn = diplomacyTurnNumber;
        if (score >= 62) {
          st.romance = Math.min(100, st.romance + 20);
          st.trust = Math.min(100, st.trust + 7);
          st.attraction = Math.min(100, st.attraction + 8);
          st.hate = Math.max(0, st.hate - 7);
          nudgeAffinity(st, "flirtAffinity", 2);
          queueDiplomacyReaction(
            queenFaction,
            `${faction.leader} Burns For You`,
            "She Loved It",
            `${faction.leader} answers your flirtation with unmistakable hunger. Desire and admiration both intensify.`
          );
        } else if (score >= 18) {
          st.romance = Math.min(100, st.romance + 11);
          st.trust = Math.min(100, st.trust + 3);
          st.attraction = Math.min(100, st.attraction + 4);
          st.hate = Math.max(0, st.hate - 3);
          nudgeAffinity(st, "flirtAffinity", 1);
          queueDiplomacyReaction(
            queenFaction,
            `${faction.leader} Smiles At You`,
            "She Liked It",
            `${faction.leader} seems entertained and a little tempted. Your charm clearly lands.`
          );
        } else if (score >= -10) {
          st.romance = Math.min(100, st.romance + 2);
          nudgeAffinity(st, "flirtAffinity", 0);
          queueDiplomacyReaction(
            queenFaction,
            `${faction.leader} Gives Little Away`,
            "She Was Indifferent",
            `${faction.leader} neither leans in nor pulls away. She acknowledges the flirtation, but offers little in return.`
          );
        }
        else {
          st.romance = Math.max(0, st.romance - 5);
          st.trust = Math.max(-100, st.trust - 5);
          st.hate = Math.min(100, st.hate + 8);
          nudgeAffinity(st, "flirtAffinity", -2);
          queueDiplomacyReaction(
            queenFaction,
            `${faction.leader} Rebukes You`,
            "She Hated It",
            `${faction.leader} takes offense to your advance and makes no effort to hide it. The moment curdles into resentment.`
          );
        }
        maybeQueueJoinOffer(queenFaction);
        maybeQueueAffairOffer(queenFaction);
        return;
      }
      if (kind === "affair") {
        const score =
          st.trust * 0.42 +
          st.romance * 0.58 +
          st.attraction * 0.46 +
          st.flirtAffinity * 4 +
          queenDiplomacyBias(queenFaction, "flirt") -
          st.hate * 0.65 +
          randomBetween(-30, 30);
        st.lastAffairTurn = diplomacyTurnNumber;
        if (score >= 52) {
          st.affair = true;
          st.affairLevel = Math.min(3, Math.max(1, st.affairLevel + 1));
          st.trust = Math.min(100, st.trust + 8);
          st.romance = Math.min(100, st.romance + 12);
          st.attraction = Math.min(100, st.attraction + 7);
          st.hate = Math.max(0, st.hate - 4);
          queueDiplomacyReaction(
            queenFaction,
            `${faction.leader} Risks A Secret Affair`,
            "She Sneaks Away To You",
            `${faction.leader} agrees to a hidden meeting and crosses the line from temptation into secrecy. Whatever this becomes, it is no longer innocent.`
          );
        } else if (score >= 10) {
          st.trust = Math.min(100, st.trust + 2);
          st.romance = Math.min(100, st.romance + 4);
          st.attraction = Math.min(100, st.attraction + 5);
          queueDiplomacyReaction(
            queenFaction,
            `${faction.leader} Is Tempted`,
            "She Considers It",
            `${faction.leader} does not commit, but the idea clearly lingers in her mind. A secret affair is no longer unthinkable.`
          );
        } else {
          st.trust = Math.max(-100, st.trust - 4);
          st.hate = Math.min(100, st.hate + 4);
          queueDiplomacyReaction(
            queenFaction,
            `${faction.leader} Rejects The Risk`,
            "She Draws Back",
            `${faction.leader} refuses to endanger herself that openly. She wants distance from the suggestion, at least for now.`
          );
        }
        maybeQueueAffairOffer(queenFaction);
        maybeQueueJoinOffer(queenFaction);
        return;
      }
      if (kind === "treaty") {
        const score = st.trust + Math.floor(st.fear * 0.45) + rebelBonus - st.hate - (st.treaty === "none" ? 0 : 25) + randomBetween(-18, 18);
        st.lastTreatyTurn = diplomacyTurnNumber;
        if (score >= 18) {
          st.treaty = "truce";
          st.trust = Math.min(100, st.trust + 4);
          st.hate = Math.max(0, st.hate - 8);
          addLog(`${faction.leader} accepts a truce.`);
        } else {
          st.trust = Math.max(-100, st.trust - 4);
          st.hate = Math.min(100, st.hate + 2);
          addLog(`${faction.leader} rejects your treaty offer.`);
        }
        return;
      }
      if (kind === "request") {
        const score = st.trust + st.romance * 0.25 + rebelBonus + (st.trade ? 10 : 0) + (st.treaty === "truce" ? 6 : 0) - st.hate * 0.45 + randomBetween(-16, 16);
        st.lastRequestTurn = diplomacyTurnNumber;
        if (score >= 26) {
          const cap = playerCapitalTile();
          if (cap) cap.troops += 3;
          st.trust = Math.min(100, st.trust + 3);
          st.hate = Math.max(0, st.hate - 1);
          addLog(`${faction.leader} sends aid to your court.`);
        } else {
          st.trust = Math.max(-100, st.trust - 3);
          st.hate = Math.min(100, st.hate + 1);
          addLog(`${faction.leader} refuses your request.`);
        }
        return;
      }
      if (kind === "trade") {
        const score = st.trust + rebelBonus + (st.treaty === "truce" ? 10 : 0) + (leaderState[queenFaction]?.active ? 4 : -6) - st.hate * 0.5 + randomBetween(-14, 14);
        st.lastTradeTurn = diplomacyTurnNumber;
        if (score >= 14) {
          st.trade = true;
          st.trust = Math.min(100, st.trust + 4);
          st.hate = Math.max(0, st.hate - 2);
          addLog(`Trade routes open with ${faction.name}.`);
        } else {
          st.trust = Math.max(-100, st.trust - 2);
          st.hate = Math.min(100, st.hate + 1);
          addLog(`${faction.leader} declines to trade.`);
        }
        return;
      }
      if (kind === "marriage") {
        const score = st.romance + st.trust + rebelBonus + Math.floor(st.fear * 0.2) - st.hate * 0.9 + randomBetween(-12, 12);
        st.lastMarriageTurn = diplomacyTurnNumber;
        if (score >= 135) {
          submitQueenToPlayer(
            queenFaction,
            `${faction.leader} accepts your proposal, joins your harem in marriage, and surrenders ${faction.name} to your banner.`,
            "Marriage Pact"
          );
        } else {
          st.trust = Math.max(-100, st.trust - 8);
          st.romance = Math.max(0, st.romance - 4);
          st.hate = Math.min(100, st.hate + 5);
          addLog(`${faction.leader} refuses your marriage proposal.`);
        }
      }
    }

    function humanSurrenderTo(queenFaction) {
      const faction = factionById(queenFaction);
      for (const tile of tiles) {
        if (tile.owner === 0) {
          tile.owner = queenFaction;
          tile.capital = false;
          tile.troops = Math.max(1, tile.troops);
        }
      }
      overlordQueenId = queenFaction;
      gameMode = "servitude";
      leaderState[0].defeated = false;
      leaderState[0].active = false;
      resistanceState = {
        built: false,
        strength: 0,
        exposure: 0,
        devotion: 14,
        vowed: false,
        currentTask: null,
        turnCaptures: 0,
        turnAudience: 0,
        turnDevotionStart: 14,
        turnCapitalTroopsStart: 0,
      };
      currentFactionIndex = FACTIONS.findIndex(f => f.id === queenFaction);
      addLog(`You submit to ${faction.leader} and enter her service.`);
      queueEventModal({
        label: "Servitude",
        title: `You Kneel Before ${faction.leader}`,
        body: `You abandon the Verdant Crown and hand your lands to ${faction.name}.\n\nFrom now on, you fight to expand her realm. In secret, you may also build a hidden resistance and someday rebel against her.`,
        portrait: queenPortraits[queenFaction] || QUEEN_PORTRAITS[queenFaction],
        cta: "Serve Her",
      });
      startTurn(queenFaction);
      render();
    }

    function covertCaptureToServitude(queenFaction, sourceLabel) {
      const faction = factionById(queenFaction);
      if (!faction || gameMode === "servitude") return false;

      awakenFaction(queenFaction);
      clearFactionRegimeIdentity(queenFaction);
      leaderState[queenFaction].rebelAgainst = null;
      leaderState[queenFaction].underAuthorityOf = null;

      let madeCapital = false;
      for (const tile of tiles) {
        if (tile.owner === 0) {
          tile.owner = queenFaction;
          tile.capital = false;
          tile.troops = Math.max(1, tile.troops);
          if (!madeCapital && tile.terrain === "land") {
            tile.capital = true;
            tile.estate = tile.estate === "port" ? "port" : "town";
            tile.troops = Math.max(8, tile.troops);
            madeCapital = true;
          }
        }
      }
      if (!madeCapital) {
        const fallback = factionCapitalTile(queenFaction);
        if (fallback) {
          fallback.capital = true;
          fallback.troops = Math.max(8, fallback.troops);
        }
      }

      overlordQueenId = queenFaction;
      gameMode = "servitude";
      leaderState[0].defeated = false;
      leaderState[0].active = false;
      resistanceState = {
        built: false,
        strength: 0,
        exposure: 8,
        devotion: 6,
        vowed: false,
        currentTask: null,
        turnCaptures: 0,
        turnAudience: 0,
        turnDevotionStart: 6,
        turnCapitalTroopsStart: 0,
      };
      currentFactionIndex = FACTIONS.findIndex(f => f.id === queenFaction);
      addLog(`${faction.leader} captures you during ${sourceLabel.toLowerCase()} and forces you into her service.`);
      queueEventModal({
        label: "Captured",
        title: "Hand over mouth and eyes.",
        blackout: true,
        body: `${faction.leader} catches you in secret.\n\nA hand clamps over your mouth. Another covers your eyes. The world goes black before you can call for help.\n\nWhen sight returns, you are on your knees before ${faction.leader}. She has taken your lands, your freedom, and your future.\n\nYou are now in service to her, and whatever happens next will happen under her command.`,
        portrait: queenPortraits[queenFaction] || QUEEN_PORTRAITS[queenFaction],
        cta: "Endure Her Rule",
      });
      startTurn(queenFaction);
      render();
      return true;
    }

    function covertCaptureChance(queenFaction, dangerBonus = 0) {
      const st = queenEntry(queenFaction);
      const chance =
        0.05 +
        Math.max(0, st.hate) / 300 +
        Math.max(0, st.attraction) / 900 +
        Math.max(0, st.fear) / 1200 +
        dangerBonus;
      return Math.min(0.34, chance);
    }

    function maybeTriggerCovertCapture(queenFaction, sourceLabel, dangerBonus = 0) {
      if (gameMode === "servitude") return false;
      if (Math.random() > covertCaptureChance(queenFaction, dangerBonus)) return false;
      return covertCaptureToServitude(queenFaction, sourceLabel);
    }

    function currentOverlordEntry() {
      return overlordQueenId === null ? null : queenEntry(overlordQueenId);
    }

    function serviceHaremQueens() {
      return capturedQueens.filter(id => id !== 0);
    }

    function availableServiceHaremQueens() {
      return serviceHaremQueens().filter(id => !queenEntry(id).overlordClaimed);
    }

    function claimedServiceHaremQueens() {
      return serviceHaremQueens().filter(id => queenEntry(id).overlordClaimed);
    }

    function factionCapitalTile(factionId) {
      return tiles.find(t => t.owner === factionId && t.capital && t.terrain === "land")
        || tiles.find(t => t.owner === factionId && t.terrain === "land")
        || null;
    }

    function eligibleUnderworldQueens() {
      return capturedQueens.filter(id => QUEEN_POWERS[id] && !queenUnitForFaction(id) && haremQueenUsable(id));
    }

    function underworldRebelQueens() {
      return diplomacyTargetQueens().filter(f => {
        const rebelAgainst = leaderState[f.id]?.rebelAgainst;
        return rebelAgainst !== null && rebelAgainst !== undefined;
      });
    }

    function kingdomlessUnderworldQueens() {
      return dormantQueens().filter(f => !capturedQueens.includes(f.id));
    }

    function toggleUnderworldQueen(queenFaction) {
      const st = queenEntry(queenFaction);
      st.underworldAssigned = !st.underworldAssigned;
      addLog(`${QUEEN_POWERS[queenFaction].title} ${st.underworldAssigned ? "slips into" : "withdraws from"} the underworld network.`);
      render();
    }

    function conspireWithQueen(queenFaction) {
      const st = queenEntry(queenFaction);
      if (st.underworldUsedThisTurn) return;
      if (gameMode === "servitude") {
        if (!resistanceState.built) buildHiddenResistance();
        resistanceState.strength = Math.min(99, resistanceState.strength + 5);
        resistanceState.exposure = Math.min(100, resistanceState.exposure + 2);
      } else {
        const cap = playerCapitalTile();
        if (cap) cap.troops += 2;
      }
      st.trust = Math.min(100, st.trust + 3);
      st.romance = Math.min(100, st.romance + 2);
      st.underworldUsedThisTurn = true;
      addLog(`${QUEEN_POWERS[queenFaction].title} helps your underworld plot in secret.`);
      render();
    }

    function romanceUnderworldQueen(queenFaction) {
      const st = queenEntry(queenFaction);
      if (st.underworldRomanceUsedThisTurn) return;
      st.morale = Math.min(100, st.morale + 8);
      st.trust = Math.min(100, st.trust + 5);
      st.romance = Math.min(100, st.romance + 8);
      st.attraction = Math.min(100, st.attraction + 5);
      st.affair = true;
      st.affairLevel = Math.min(3, Math.max(1, st.affairLevel + 1));
      st.underworldRomanceUsedThisTurn = true;
      tryPlayerPregnancy(queenFaction, "Underworld Date", 1);
      addLog(`${QUEEN_POWERS[queenFaction].title} meets you in the underworld for a secret night together.`);
      render();
    }

    function sendArmyToRebelQueen(queenFaction, amount = 4) {
      const cap = playerCapitalTile();
      const rebelCap = factionCapitalTile(queenFaction);
      const st = queenEntry(queenFaction);
      if (!cap || cap.troops <= amount) {
        addLog("You lack the spare troops to smuggle a levy through the underworld.");
        return;
      }
      if (!rebelCap) {
        addLog("That rebel queen has no throne to reinforce.");
        return;
      }
      if (st.lastUnderworldAidTurn === diplomacyTurnNumber) return;
      cap.troops -= amount;
      rebelCap.troops += amount;
      st.lastUnderworldAidTurn = diplomacyTurnNumber;
      st.trust = Math.min(100, st.trust + 6);
      st.romance = Math.min(100, st.romance + 2);
      addLog(`You transfer ${amount} troops through smugglers to ${factionById(queenFaction).leader}'s capital.`);
      render();
    }

    function romanceRebelQueenInUnderworld(queenFaction) {
      const st = queenEntry(queenFaction);
      if (st.lastUnderworldRomanceTurn === diplomacyTurnNumber) return;
      st.lastUnderworldRomanceTurn = diplomacyTurnNumber;
      if (maybeTriggerCovertCapture(queenFaction, "an underworld rendezvous", 0.07)) return;
      st.affair = true;
      st.affairLevel = Math.min(3, Math.max(1, st.affairLevel + 1));
      st.trust = Math.min(100, st.trust + 7);
      st.romance = Math.min(100, st.romance + 9);
      st.attraction = Math.min(100, st.attraction + 6);
      st.hate = Math.max(0, st.hate - 2);
      tryPlayerPregnancy(queenFaction, "Moonlit Rendezvous", 1.05);
      queueDiplomacyReaction(
        queenFaction,
        `${factionById(queenFaction).leader} Meets You Beneath The City`,
        "Underworld Rendezvous",
        `${factionById(queenFaction).leader} steals into the criminal underworld to meet you where spies and nobles alike cannot see.\n\nThe meeting leaves her more bound to you than before, and more willing to gamble her rebellion on your protection.`
      );
      render();
    }

    function fundKingdomlessQueen(queenFaction, amount = 3) {
      const st = queenEntry(queenFaction);
      const authorityId = reserveAuthorityForQueen(queenFaction);
      const authority = authorityId === null || authorityId === undefined ? null : factionById(authorityId);
      if (treasury < amount) {
        addLog("You lack the treasury to bankroll a landless queen.");
        return;
      }
      if (st.lastUnderworldRiseTurn === diplomacyTurnNumber) return;
      treasury -= amount;
      st.lastUnderworldRiseTurn = diplomacyTurnNumber;
      const faction = factionById(queenFaction);
      const score =
        st.trust * 0.38 +
        st.romance * 0.34 +
        st.attraction * 0.18 -
        st.hate * 0.5 +
        randomBetween(-20, 24);
      const supportiveRise = score >= 10;
      const likelyEscapeToYou = score >= 42;
      if (score >= 48) {
        st.underworldRiseSupport += 3;
        st.trust = Math.min(100, st.trust + 10);
        st.romance = Math.min(100, st.romance + 4);
        st.attraction = Math.min(100, st.attraction + 3);
        queueDiplomacyReaction(
          queenFaction,
          `${faction.leader} Welcomes Your Patronage`,
          "She Loved It",
          `${faction.leader} accepts your money like a woman starving for a second chance. She treats your backing as proof that you believe in her claim and grows markedly warmer toward you while plotting life beyond ${authority?.leader || "her ruling queen"}.`
        );
      } else if (score >= 12) {
        st.underworldRiseSupport += 2;
        st.trust = Math.min(100, st.trust + 4);
        st.attraction = Math.min(100, st.attraction + 2);
        queueDiplomacyReaction(
          queenFaction,
          `${faction.leader} Takes The Money Carefully`,
          "She Liked It",
          `${faction.leader} accepts your support, but keeps part of herself guarded. She appreciates the help, yet still measures what you truly want from her and what she can take from ${authority?.leader || "her current court"}.`
        );
      } else if (score >= -16) {
        st.underworldRiseSupport += 2;
        st.trust = Math.max(-100, st.trust - 2);
        queueDiplomacyReaction(
          queenFaction,
          `${faction.leader} Accepts Without Trust`,
          "She Was Indifferent",
          `${faction.leader} takes the money because servitude leaves little room for pride, but the gesture does not truly win her over. She remains emotionally distant, even while using your backing to plan her way out from under ${authority?.leader || "her ruler"}.`
        );
      } else {
        st.underworldRiseSupport += 1;
        st.trust = Math.max(-100, st.trust - 8);
        st.hate = Math.min(100, st.hate + 9);
        st.attraction = Math.max(0, st.attraction - 2);
        queueDiplomacyReaction(
          queenFaction,
          `${faction.leader} Resents Your Purse`,
          "She Hated It",
          `${faction.leader} reads your patronage as an attempt to buy her. She takes offense, suspects hidden strings, and leaves the exchange colder than before.`
        );
      }
      addLog(`You funnel ${amount} crowns and smugglers to ${faction.leader}${authority ? ` from under ${authority.leader}'s rule` : ""}.`);
      if (st.underworldRiseSupport >= 1 && Math.random() < 0.88) {
        const routeRoll = Math.random();
        const route = routeRoll < 0.55
          ? "rebel"
          : (routeRoll < 0.82 ? "escape" : "flee");
        let resolved = false;
        if (route === "rebel" && authorityId !== null && authorityId !== undefined) {
          resolved = spawnUnderworldClaimQueen(queenFaction, authorityId, supportiveRise);
        } else if (route === "escape") {
          resolved = spawnEscapedQueenRealm(queenFaction, authorityId, supportiveRise);
        } else {
          resolved = spiritQueenToPlayer(queenFaction, authorityId, likelyEscapeToYou);
        }
        if (!resolved && authorityId !== null && authorityId !== undefined) {
          resolved = spawnUnderworldClaimQueen(queenFaction, authorityId, supportiveRise);
        }
        if (resolved) {
          st.underworldRiseSupport = 0;
          st.affair = st.affair || st.romance >= 30;
        } else if (st.underworldRiseSupport >= 3 && spawnFrontierQueen(queenFaction)) {
          st.underworldRiseSupport = 0;
          applyRiseDisposition(queenFaction, supportiveRise);
          addLog(`${faction.leader} cannot break free through court intrigue, but still manages to carve out a frontier claim.`);
        }
      }
      render();
    }

    function romanceKingdomlessQueen(queenFaction) {
      const st = queenEntry(queenFaction);
      if (st.lastUnderworldRomanceTurn === diplomacyTurnNumber) return;
      st.lastUnderworldRomanceTurn = diplomacyTurnNumber;
      if (maybeTriggerCovertCapture(queenFaction, "a secret courtship in the underworld", 0.05)) return;
      const faction = factionById(queenFaction);
      const score =
        st.romance * 0.62 +
        st.attraction * 0.34 +
        st.trust * 0.28 -
        st.hate * 0.55 +
        randomBetween(-22, 28);
      if (score >= 40) {
        st.affair = true;
        st.affairLevel = Math.min(3, Math.max(1, st.affairLevel + 1));
        st.trust = Math.min(100, st.trust + 8);
        st.romance = Math.min(100, st.romance + 12);
        st.attraction = Math.min(100, st.attraction + 8);
        tryPlayerPregnancy(queenFaction, "Court In Secret", 1.08);
        queueDiplomacyReaction(
          queenFaction,
          `${faction.leader} Comes To You In Exile`,
          "She Loved It",
          `${faction.leader} has no kingdom left to shelter her, so she comes to you through hidden doors and criminal safehouses.\n\nThe night leaves her visibly softer, warmer, and more willing to imagine a future built around you.`
        );
      } else if (score >= 6) {
        st.trust = Math.min(100, st.trust + 3);
        st.romance = Math.min(100, st.romance + 5);
        st.attraction = Math.min(100, st.attraction + 4);
        tryPlayerPregnancy(queenFaction, "Court In Secret", 0.82);
        queueDiplomacyReaction(
          queenFaction,
          `${faction.leader} Lets You Closer`,
          "She Liked It",
          `${faction.leader} accepts the courtship and allows the intimacy, though some part of her still holds back. The connection grows, but cautiously.`
        );
      } else if (score >= -18) {
        st.attraction = Math.min(100, st.attraction + 1);
        queueDiplomacyReaction(
          queenFaction,
          `${faction.leader} Keeps Her Distance`,
          "She Was Indifferent",
          `${faction.leader} permits the closeness without fully yielding to it. She does not reject you, but the moment does not truly sweep her away either.`
        );
      } else {
        st.trust = Math.max(-100, st.trust - 5);
        st.romance = Math.max(0, st.romance - 4);
        st.hate = Math.min(100, st.hate + 7);
        queueDiplomacyReaction(
          queenFaction,
          `${faction.leader} Rejects The Advance`,
          "She Hated It",
          `${faction.leader} bristles at the courtship and leaves feeling used or cornered. Exile has made her vulnerable, not necessarily willing.`
        );
      }
      render();
    }

    function haremAutonomyScore() {
      const st = currentOverlordEntry();
      if (gameMode !== "servitude" || !st) return 0;
      const rosterPressure = serviceHaremQueens().length * 8 + claimedServiceHaremQueens().length * 5;
      return Math.round(
        resistanceState.devotion * 0.7 +
        st.trust * 0.65 +
        st.romance * 0.35 +
        st.attraction * 0.2 -
        st.hate * 0.8 -
        rosterPressure +
        (resistanceState.vowed ? 30 : 0)
      );
    }

    function haremAutonomyLabel() {
      if (gameMode !== "servitude") return "Independent";
      const score = haremAutonomyScore();
      if (score >= 130) return "Protected";
      if (score >= 85) return "Permitted";
      if (score >= 45) return "Watched";
      if (score >= 5) return "Restricted";
      return "Controlled";
    }

    function haremStatusText(queenFaction) {
      const st = queenEntry(queenFaction);
      if (st.overlordClaimed) return "Claimed by your overlord";
      if (st.summonedThisTurn) return "Summoned to the overlord court this turn";
      if (st.forbiddenThisTurn) return "Forbidden from deployment this turn";
      return "Under your supervision";
    }

    function haremQueenUsable(queenFaction) {
      const st = queenEntry(queenFaction);
      return !st.overlordClaimed && !st.forbiddenThisTurn && !st.summonedThisTurn;
    }

    function removeQueenUnitForFaction(queenFaction) {
      queenUnits = queenUnits.filter(unit => unit.queenFaction !== queenFaction);
    }

    function servitudeTierLabel() {
      const st = currentOverlordEntry();
      if (gameMode !== "servitude" || !st) return "";
      if (resistanceState.vowed) return "Royal Consort";
      const score = resistanceState.devotion + st.trust + st.romance + st.attraction - st.hate;
      if (score >= 215) return "Chosen Favorite";
      if (score >= 160) return "Favored Companion";
      if (score >= 110) return "Trusted Servant";
      if (score >= 60) return "Sworn Attendant";
      return "Bound Servant";
    }

    function canProposeOverlordVows() {
      const st = currentOverlordEntry();
      return Boolean(
        gameMode === "servitude" &&
        st &&
        !resistanceState.vowed &&
        resistanceState.devotion >= 85 &&
        st.trust >= 70 &&
        st.romance >= 78 &&
        st.attraction >= 84 &&
        st.hate <= 18
      );
    }

    function currentOverlordTaskProgress(task = resistanceState.currentTask) {
      if (!task) return { value: 0, target: 0, complete: true, text: "No active order." };
      if (task.kind === "conquest") {
        const value = resistanceState.turnCaptures;
        return { value, target: task.target, complete: value >= task.target, text: `${value}/${task.target} enemy tiles seized this turn.` };
      }
      if (task.kind === "muster") {
        const cap = playerCapitalTile();
        const value = Math.max(0, (cap ? cap.troops : 0) - resistanceState.turnCapitalTroopsStart);
        return { value, target: task.target, complete: value >= task.target, text: `Capital reinforcements added: ${value}/${task.target}.` };
      }
      if (task.kind === "devotion") {
        const value = Math.max(0, resistanceState.devotion - resistanceState.turnDevotionStart);
        return { value, target: task.target, complete: value >= task.target, text: `Devotion gained: ${value}/${task.target}.` };
      }
      if (task.kind === "audience") {
        const value = resistanceState.turnAudience;
        return { value, target: task.target, complete: value >= task.target, text: `Audience actions taken: ${value}/${task.target}.` };
      }
      if (task.kind === "secrecy") {
        const value = resistanceState.exposure;
        return { value, target: task.target, complete: value <= task.target, text: `Exposure must end at ${task.target} or less. Current exposure: ${value}.` };
      }
      return { value: 0, target: 0, complete: false, text: "Unknown order." };
    }

    function issueOverlordTask() {
      if (gameMode !== "servitude" || overlordQueenId === null) return;
      const options = [
        {
          kind: "conquest",
          title: "Break A Rival Border",
          body: "Your mistress commands you to widen her dominion by force this turn.",
          target: 2,
        },
        {
          kind: "muster",
          title: "Strengthen Her Capital",
          body: "She demands more troops around the central throne before the turn ends.",
          target: 5,
        },
        {
          kind: "devotion",
          title: "Public Obedience",
          body: "She expects open signs of loyalty and discipline before the day is done.",
          target: 10,
        },
        {
          kind: "audience",
          title: "Attend Her In Person",
          body: "She expects you to appear before her and answer directly this turn.",
          target: 1,
        },
      ];
      if (resistanceState.built || resistanceState.exposure >= 10) {
        options.push({
          kind: "secrecy",
          title: "Keep The Court Quiet",
          body: "Suspicion is rising. She orders you to keep intrigue low and leave no visible scandal.",
          target: Math.max(7, resistanceState.exposure - 2),
        });
      }
      resistanceState.currentTask = { ...randomItem(options), issuedRound: round };
      const task = resistanceState.currentTask;
      addLog(`${factionById(overlordQueenId).leader} assigns you a new order: ${task.title}.`);
    }

    function maybeApplyOverlordHaremPressure() {
      if (gameMode !== "servitude" || overlordQueenId === null) return;
      const candidates = availableServiceHaremQueens();
      if (!candidates.length) return;

      const st = currentOverlordEntry();
      const autonomy = haremAutonomyScore();
      const tension = serviceHaremQueens().length >= 4 ? 1 : 0;
      const roll = Math.random();
      const targetId = randomItem(candidates);
      if (targetId === null || targetId === undefined) return;
      const targetQueen = QUEEN_POWERS[targetId];
      const targetState = queenEntry(targetId);

      if (!resistanceState.vowed && (autonomy < 10 || (st.hate >= 35 && tension && roll < 0.32))) {
        targetState.overlordClaimed = true;
        targetState.forbiddenThisTurn = false;
        targetState.summonedThisTurn = false;
        targetState.assignment = "court";
        removeQueenUnitForFaction(targetId);
        addLog(`${factionById(overlordQueenId).leader} claims ${targetQueen.title} for her own court.`);
        queueEventModal({
          label: "Harem Claim",
          title: `${factionById(overlordQueenId).leader} Takes A Queen`,
          body: `${factionById(overlordQueenId).leader} decides that ${targetQueen.title} now belongs to her personal court.\n\nThat queen is no longer available for your direct deployment unless your position improves enough to win back autonomy.`,
          portrait: queenPortraits[targetId] || QUEEN_PORTRAITS[targetId],
          cta: "Endure It",
        });
        return;
      }

      if (autonomy < 55 && roll < 0.5) {
        targetState.forbiddenThisTurn = true;
        targetState.summonedThisTurn = false;
        removeQueenUnitForFaction(targetId);
        addLog(`${factionById(overlordQueenId).leader} forbids ${targetQueen.title} from joining your field command this turn.`);
        queueEventModal({
          label: "Harem Restriction",
          title: `${targetQueen.title} Is Withheld`,
          body: `${factionById(overlordQueenId).leader} bars ${targetQueen.title} from serving under your hand this turn.\n\nYour harem remains under watch, and your control over it narrows.`,
          portrait: queenPortraits[targetId] || QUEEN_PORTRAITS[targetId],
          cta: "Continue",
        });
        return;
      }

      if (roll < 0.45) {
        targetState.summonedThisTurn = true;
        targetState.forbiddenThisTurn = false;
        targetState.morale = Math.min(100, targetState.morale + 4);
        removeQueenUnitForFaction(targetId);
        addLog(`${factionById(overlordQueenId).leader} summons ${targetQueen.title} to her side for the turn.`);
        queueEventModal({
          label: "Harem Summons",
          title: `${targetQueen.title} Is Summoned`,
          body: `${factionById(overlordQueenId).leader} calls ${targetQueen.title} into the ruling court for personal service and private duties.\n\nShe will not be available to you on the field this turn.`,
          portrait: queenPortraits[targetId] || QUEEN_PORTRAITS[targetId],
          cta: "Continue",
        });
      } else if (autonomy >= 100 && claimedServiceHaremQueens().length && Math.random() < 0.18) {
        const releasedId = randomItem(claimedServiceHaremQueens());
        if (releasedId !== null && releasedId !== undefined) {
          const releasedState = queenEntry(releasedId);
          releasedState.overlordClaimed = false;
          addLog(`${factionById(overlordQueenId).leader} returns ${QUEEN_POWERS[releasedId].title} to your supervision.`);
          queueEventModal({
            label: "Harem Favor",
            title: `${factionById(overlordQueenId).leader} Relents`,
            body: `Your standing is high enough that ${factionById(overlordQueenId).leader} allows ${QUEEN_POWERS[releasedId].title} back under your supervision.\n\nYour autonomy over the harem expands.`,
            portrait: queenPortraits[releasedId] || QUEEN_PORTRAITS[releasedId],
            cta: "Accept",
          });
        }
      }
    }

    function rewardOverlordTask(task) {
      const st = currentOverlordEntry();
      if (!st) return;
      const rewards = [
        () => {
          st.trust = Math.min(100, st.trust + 6);
          st.hate = Math.max(0, st.hate - 4);
          resistanceState.devotion = Math.min(100, resistanceState.devotion + 5);
          addLog(`${factionById(overlordQueenId).leader} approves of your obedience.`);
          return "Her approval warms into trust, and your position at court grows safer.";
        },
        () => {
          const cap = playerCapitalTile();
          if (cap) cap.troops += 4;
          st.trust = Math.min(100, st.trust + 3);
          addLog(`${factionById(overlordQueenId).leader} rewards your service with reinforcements.`);
          return "Pleased by your results, she sends fresh troops to the capital under your command.";
        },
        () => {
          st.romance = Math.min(100, st.romance + 5);
          st.attraction = Math.min(100, st.attraction + 4);
          st.trust = Math.min(100, st.trust + 2);
          addLog(`${factionById(overlordQueenId).leader} lingers on you with unusual favor.`);
          return "Success earns you not just approval, but a more personal kind of attention.";
        },
      ];
      if (resistanceState.vowed) {
        rewards.push(() => {
          const cap = playerCapitalTile();
          if (cap) cap.troops += 6;
          st.trust = Math.min(100, st.trust + 4);
          st.romance = Math.min(100, st.romance + 3);
          addLog(`${factionById(overlordQueenId).leader} publicly honors your place beside her.`);
          return "As her formal consort, you are rewarded openly with troops, status, and greater standing at court.";
        });
      }
      const rewardText = randomItem(rewards)();
      queueEventModal({
        label: "Overlord Reward",
        title: `${factionById(overlordQueenId).leader} Is Pleased`,
        body: `${task.title} is completed.\n\n${rewardText}`,
        portrait: queenPortraits[overlordQueenId] || QUEEN_PORTRAITS[overlordQueenId],
        cta: "Accept Her Favor",
      });
    }

    function punishOverlordTask(task) {
      const st = currentOverlordEntry();
      if (!st) return;
      const punishments = [
        () => {
          const cap = playerCapitalTile();
          if (cap) cap.troops = Math.max(1, cap.troops - 4);
          st.trust = Math.max(-100, st.trust - 6);
          addLog(`${factionById(overlordQueenId).leader} confiscates part of your levy for failing her order.`);
          return "She strips troops from your command and reminds you that every banner here is hers.";
        },
        () => {
          resistanceState.exposure = Math.min(100, resistanceState.exposure + 7);
          st.hate = Math.min(100, st.hate + 4);
          addLog(`${factionById(overlordQueenId).leader} places watchers around you after your failure.`);
          return "Her court closes in with overseers and questions, making every secret harder to keep.";
        },
        () => {
          st.trust = Math.max(-100, st.trust - 5);
          st.romance = Math.max(0, st.romance - 4);
          resistanceState.devotion = Math.max(0, resistanceState.devotion - 3);
          if (resistanceState.built) resistanceState.strength = Math.max(0, resistanceState.strength - 3);
          addLog(`${factionById(overlordQueenId).leader} punishes your failure with cold discipline.`);
          return "She answers disobedience with distance and discipline, leaving you politically weaker and more tightly watched.";
        },
      ];
      if (resistanceState.vowed) {
        punishments.push(() => {
          st.trust = Math.max(-100, st.trust - 3);
          st.romance = Math.max(0, st.romance - 2);
          resistanceState.devotion = Math.max(0, resistanceState.devotion - 1);
          addLog(`${factionById(overlordQueenId).leader} rebukes you in private rather than humiliating you before court.`);
          return "Your formal bond spares you the harsher edge of her wrath, but disappointment still costs you standing.";
        });
      }
      const punishmentText = randomItem(punishments)();
      queueEventModal({
        label: "Overlord Punishment",
        title: `${factionById(overlordQueenId).leader} Punishes You`,
        body: `You fail to complete: ${task.title}.\n\n${punishmentText}`,
        portrait: queenPortraits[overlordQueenId] || QUEEN_PORTRAITS[overlordQueenId],
        cta: "Endure It",
      });
    }

    function resolveOverlordTurn() {
      if (gameMode !== "servitude" || !resistanceState.currentTask) return;
      const task = resistanceState.currentTask;
      const progress = currentOverlordTaskProgress(task);
      if (progress.complete) rewardOverlordTask(task);
      else punishOverlordTask(task);
      resistanceState.currentTask = null;
    }

    function queueOverlordReaction(title, label, body) {
      queueEventModal({
        label,
        title,
        body,
        portrait: queenPortraits[overlordQueenId] || QUEEN_PORTRAITS[overlordQueenId],
        cta: "Continue",
      });
    }

    function performOverlordAudience(kind) {
      if (gameMode !== "servitude" || overlordQueenId === null) return;
      const st = currentOverlordEntry();
      const overlord = factionById(overlordQueenId);
      if (st.lastAudienceTurn === diplomacyTurnNumber) {
        addLog(`${overlord.leader} will not grant you another audience this turn.`);
        return;
      }
      st.lastAudienceTurn = diplomacyTurnNumber;
      resistanceState.turnAudience += 1;

      if (kind === "petition") {
        const score = st.trust * 0.6 + resistanceState.devotion * 0.35 + st.romance * 0.12 - st.hate * 0.45 + randomBetween(-24, 24);
        if (score >= 28) {
          const cap = playerCapitalTile();
          if (cap) cap.troops += 2;
          st.trust = Math.min(100, st.trust + 5);
          st.hate = Math.max(0, st.hate - 2);
          const claimed = claimedServiceHaremQueens();
          if (claimed.length && haremAutonomyScore() >= 95 && Math.random() < 0.45) {
            const releasedId = randomItem(claimed);
            const released = queenEntry(releasedId);
            released.overlordClaimed = false;
            queueOverlordReaction(`${overlord.leader} Grants Your Petition`, "Audience", `${overlord.leader} hears you out and grants a measured favor.\n\nShe even returns ${QUEEN_POWERS[releasedId].title} to your supervision, widening your authority over the harem.`);
          } else {
            queueOverlordReaction(`${overlord.leader} Grants Your Petition`, "Audience", `${overlord.leader} hears you out and grants a measured favor.\n\nYou leave with a little more authority and support than before.`);
          }
        } else if (score >= -8) {
          st.trust = Math.min(100, st.trust + 1);
          queueOverlordReaction(`${overlord.leader} Listens Coldly`, "Audience", `${overlord.leader} allows you to speak, but gives little away.\n\nYou are heard, though not embraced.`);
        } else {
          st.trust = Math.max(-100, st.trust - 4);
          st.hate = Math.min(100, st.hate + 3);
          queueOverlordReaction(`${overlord.leader} Cuts You Off`, "Audience", `${overlord.leader} dismisses your plea with visible impatience.\n\nYou leave the audience chamber with less standing than before.`);
        }
      } else if (kind === "praise") {
        const score = resistanceState.devotion * 0.4 + st.trust * 0.35 - st.hate * 0.25 + randomBetween(-18, 20);
        if (score >= 18) {
          st.trust = Math.min(100, st.trust + 4);
          st.romance = Math.min(100, st.romance + 2);
          resistanceState.devotion = Math.min(100, resistanceState.devotion + 4);
          queueOverlordReaction(`${overlord.leader} Accepts Your Praise`, "Audience", `Your words please ${overlord.leader}, and she receives them as sincere loyalty.\n\nHer favor toward you deepens.`);
        } else {
          st.trust = Math.max(-100, st.trust - 1);
          queueOverlordReaction(`${overlord.leader} Finds You Transparent`, "Audience", `${overlord.leader} hears the praise, but seems unconvinced by it.\n\nShe is not angry, only unimpressed.`);
        }
      } else if (kind === "flirt") {
        const score = st.romance * 0.55 + st.trust * 0.38 + st.attraction * 0.34 + resistanceState.devotion * 0.14 - st.hate * 0.6 + randomBetween(-34, 34);
        if (score >= 48) {
          st.romance = Math.min(100, st.romance + 14);
          st.attraction = Math.min(100, st.attraction + 7);
          st.trust = Math.min(100, st.trust + 4);
          queueOverlordReaction(`${overlord.leader} Keeps You Near`, "Audience", `${overlord.leader} responds with clear personal interest.\n\nThe audience lingers, and the bond between ruler and servant grows more intimate.`);
        } else if (score >= 12) {
          st.romance = Math.min(100, st.romance + 6);
          st.attraction = Math.min(100, st.attraction + 3);
          queueOverlordReaction(`${overlord.leader} Is Entertained`, "Audience", `${overlord.leader} seems amused and faintly pleased by your boldness.\n\nYou leave having made some impression.`);
        } else if (score >= -12) {
          queueOverlordReaction(`${overlord.leader} Gives Nothing Away`, "Audience", `${overlord.leader} lets the moment pass without rewarding or rebuking you.\n\nHer expression reveals almost nothing.`);
        } else {
          st.romance = Math.max(0, st.romance - 4);
          st.trust = Math.max(-100, st.trust - 4);
          st.hate = Math.min(100, st.hate + 5);
          queueOverlordReaction(`${overlord.leader} Rebukes Your Familiarity`, "Audience", `${overlord.leader} coolly reminds you of your place.\n\nWhat might have charmed her instead earns a sharp correction.`);
        }
      } else if (kind === "leniency") {
        const score = st.trust * 0.5 + st.romance * 0.2 + resistanceState.devotion * 0.4 - st.hate * 0.35 + randomBetween(-18, 18);
        if (score >= 22) {
          resistanceState.exposure = Math.max(0, resistanceState.exposure - 6);
          st.trust = Math.min(100, st.trust + 3);
          queueOverlordReaction(`${overlord.leader} Shows Leniency`, "Audience", `${overlord.leader} softens, easing some pressure around you.\n\nFor now, the court watches you less closely.`);
        } else {
          resistanceState.exposure = Math.min(100, resistanceState.exposure + 2);
          st.hate = Math.min(100, st.hate + 2);
          queueOverlordReaction(`${overlord.leader} Refuses Leniency`, "Audience", `${overlord.leader} denies the request and makes it clear that indulgence must be earned.\n\nThe mood around you hardens instead.`);
        }
      }
      render();
    }

    function proposeOverlordVows() {
      if (gameMode !== "servitude" || overlordQueenId === null) return;
      const st = currentOverlordEntry();
      const overlord = factionById(overlordQueenId);
      if (resistanceState.vowed) {
        addLog(`You are already formally bound to ${overlord.leader}.`);
        return;
      }
      if (!canProposeOverlordVows()) {
        queueOverlordReaction(
          `${overlord.leader} Is Not Ready`,
          "Formal Vows",
          `${overlord.leader} does not reject the idea outright, but she does not yet believe your bond is strong enough for a formal union.\n\nYou need higher devotion, trust, romance, and attraction before she will consider binding you to her permanently.`
        );
        return;
      }
      const score = st.trust + st.romance + st.attraction + resistanceState.devotion - st.hate + randomBetween(-18, 18);
      if (score >= 300) {
        resistanceState.vowed = true;
        st.trust = Math.min(100, st.trust + 8);
        st.romance = Math.min(100, st.romance + 10);
        st.attraction = Math.min(100, st.attraction + 6);
        resistanceState.devotion = Math.min(100, resistanceState.devotion + 10);
        queueOverlordReaction(
          `${overlord.leader} Accepts Your Vows`,
          "Bond Forged",
          `${overlord.leader} accepts your proposal and binds you to her in a formal royal union.\n\nYou are no longer merely a servant in her court. You rise as her chosen consort, sworn to her throne and joined to her cause.`
        );
      } else {
        st.trust = Math.max(-100, st.trust - 4);
        st.romance = Math.max(0, st.romance - 2);
        queueOverlordReaction(
          `${overlord.leader} Defers The Union`,
          "Formal Vows",
          `${overlord.leader} tells you the bond is close, but not complete.\n\nShe expects more proof before she will raise you into a permanent union beside her throne.`
        );
      }
      render();
    }

    function openOverlordAudience() {
      if (gameMode !== "servitude" || overlordQueenId === null) return;
      const st = currentOverlordEntry();
      const progress = currentOverlordTaskProgress();
      const tier = servitudeTierLabel();
      queueEventModal({
        label: "Audience",
        title: `Audience With ${factionById(overlordQueenId).leader}`,
        body: `Tier ${tier}${resistanceState.vowed ? " • Formally Bound" : ""}\nTrust ${st.trust} • Romance ${st.romance} • Attraction ${st.attraction} • Hate ${st.hate} • Devotion ${resistanceState.devotion}\n\nCurrent order: ${resistanceState.currentTask ? resistanceState.currentTask.title : "No standing order"}\n${progress.text}`,
        portrait: queenPortraits[overlordQueenId] || QUEEN_PORTRAITS[overlordQueenId],
        actions: [
          { label: "Petition Her", onClick: () => { dismissEventModal(); performOverlordAudience("petition"); } },
          { label: "Offer Praise", onClick: () => { dismissEventModal(); performOverlordAudience("praise"); } },
          { label: "Flirt", onClick: () => { dismissEventModal(); performOverlordAudience("flirt"); } },
          { label: "Ask For Leniency", onClick: () => { dismissEventModal(); performOverlordAudience("leniency"); } },
          { label: "Converse", onClick: () => { dismissEventModal(); openQueenChat(overlordQueenId); } },
          ...(resistanceState.vowed ? [] : [{ label: "Propose Vows", onClick: () => { dismissEventModal(); proposeOverlordVows(); } }]),
          { label: "Withdraw", onClick: () => dismissEventModal() },
        ],
      });
    }

    function buildHiddenResistance() {
      if (gameMode !== "servitude") return;
      if (resistanceState.built) {
        addLog("Your hidden resistance is already established.");
        return;
      }
      resistanceState.built = true;
      resistanceState.strength = 8;
      resistanceState.exposure = 6;
      addLog("You establish a hidden resistance cell in the shadows of your mistress's realm.");
      queueEventModal({
        label: "Hidden Resistance",
        title: "A Secret Network Is Born",
        body: `Behind closed doors and under loyal cover, you begin building a private resistance.\n\nIt is small, fragile, and dangerous, but it is yours.`,
        cta: "Continue",
      });
      render();
    }

    function smuggleArms() {
      if (gameMode !== "servitude" || !resistanceState.built) return;
      resistanceState.strength = Math.min(99, resistanceState.strength + 7);
      resistanceState.exposure = Math.min(100, resistanceState.exposure + 5);
      resistanceState.devotion = Math.max(0, resistanceState.devotion - 3);
      addLog("You divert troops and coin into your hidden resistance.");
      render();
    }

    function pledgeDevotion() {
      if (gameMode !== "servitude") return;
      resistanceState.devotion = Math.min(100, resistanceState.devotion + 12);
      resistanceState.exposure = Math.max(0, resistanceState.exposure - 4);
      addLog(`You devote yourself more fully to ${factionById(overlordQueenId).leader}'s cause.`);
      render();
    }

    function launchRebellion() {
      if (gameMode !== "servitude" || !resistanceState.built || resistanceState.strength < 18) {
        addLog("Your resistance is too weak to rise.");
        return;
      }
      const overlord = factionById(overlordQueenId);
      const overthrowTiles = shuffled(
        ownedTiles(overlordQueenId).filter(t => t.terrain === "land" && !t.capital)
      ).slice(0, Math.max(2, Math.floor(resistanceState.strength / 10)));
      if (!overthrowTiles.length) {
        addLog("There is nowhere for the rebellion to emerge.");
        return;
      }
      gameMode = "conquest";
      leaderState[0].active = true;
      leaderState[0].defeated = false;
      let raised = 0;
      for (const tile of overthrowTiles) {
        tile.owner = 0;
        tile.troops = Math.max(3, Math.floor(resistanceState.strength / 5));
        if (raised === 0) {
          tile.capital = true;
          tile.estate = "town";
        }
        raised += 1;
      }
      overlordQueenId = null;
      resistanceState = {
        built: false,
        strength: 0,
        exposure: 0,
        devotion: 0,
        vowed: false,
        currentTask: null,
        turnCaptures: 0,
        turnAudience: 0,
        turnDevotionStart: 0,
        turnCapitalTroopsStart: 0,
      };
      currentFactionIndex = 0;
      addLog(`You raise the hidden standard and rebel against ${overlord.leader}.`);
      queueEventModal({
        label: "Rebellion",
        title: "You Rise Against Your Mistress",
        body: `Your secret network finally emerges into the open. Garrisons mutiny, hidden cells arm themselves, and your rebellion begins against ${overlord.name}.`,
        portrait: queenPortraits[overlord.id] || QUEEN_PORTRAITS[overlord.id],
        cta: "Rise",
      });
      render();
    }

    function autoHumanTurn() {
      if (gameOver) return;
      if (!isPlayerControlledFaction(FACTIONS[currentFactionIndex].id)) return;
      pendingQueenFaction = null;
      pendingUnitQueenFaction = null;
      selectedTile = null;
      hoveredTile = null;
      endTurnBtn.disabled = true;
      autoTurnBtn.disabled = true;
      addLog("Your queens take command and play the turn for you.");
      render();
      runAiTurn(playerFactionId());
    }

    function openResistanceActions() {
      if (gameMode !== "servitude") return;
      const st = currentOverlordEntry();
      const task = resistanceState.currentTask;
      const progress = currentOverlordTaskProgress(task);
      const tier = servitudeTierLabel();
      const autonomy = haremAutonomyLabel();
      const haremSummary = serviceHaremQueens().length
        ? `${availableServiceHaremQueens().length} under you • ${claimedServiceHaremQueens().length} claimed by her • Autonomy ${autonomy}`
        : "No captured queens beyond your original court.";
      const status = resistanceState.built
        ? `Strength ${resistanceState.strength} • Exposure ${resistanceState.exposure} • Devotion ${resistanceState.devotion}`
        : `No hidden network exists yet. Devotion ${resistanceState.devotion}`;
      queueEventModal({
        label: "Servitude",
        title: `Service Under ${factionById(overlordQueenId).leader}`,
        body: `You currently serve your conquering queen in the open.\n\nTier ${tier}${resistanceState.vowed ? " • Royal Union" : ""}\n${status}\nHarem: ${haremSummary}\nTrust ${st.trust} • Romance ${st.romance} • Attraction ${st.attraction} • Hate ${st.hate}\n\nCurrent order: ${task ? task.title : "No standing order"}\n${task ? `${task.body}\n${progress.text}` : "No order is currently active."}\n\nChoose whether to seek favor, deepen your loyalty, or cultivate treason in secret.`,
        actions: [
          { label: "Audience With Her", onClick: () => { dismissEventModal(); openOverlordAudience(); } },
          resistanceState.built
            ? { label: "Smuggle Arms", onClick: () => { dismissEventModal(); smuggleArms(); } }
            : { label: "Build Hideout", onClick: () => { dismissEventModal(); buildHiddenResistance(); } },
          { label: "Pledge Devotion", onClick: () => { dismissEventModal(); pledgeDevotion(); } },
          { label: "Launch Rebellion", onClick: () => { dismissEventModal(); launchRebellion(); } },
          { label: "Continue Service", onClick: () => dismissEventModal() },
        ],
      });
    }

    function renderDiplomacyPanel() {
      diplomacyPanelEl.innerHTML = "";
      const heading = document.createElement("div");
      heading.className = "gallery-sub";
      heading.textContent = "Negotiate with foreign queens through trust, hate, trade, romance, and pressure. Diplomacy actions refresh each of your turns.";
      diplomacyPanelEl.appendChild(heading);

      const grid = document.createElement("div");
      grid.className = "gallery-grid";
      const isHumanTurn = !gameOver && isPlayerControlledFaction(FACTIONS[currentFactionIndex].id);
      for (const f of diplomacyTargetQueens()) {
        const st = updateDiplomacyPressure(f.id);
        const wrap = document.createElement("div");
        wrap.className = "gallery-card";

        const head = document.createElement("div");
        head.className = "gallery-head";
        head.textContent = f.leader;
        wrap.appendChild(head);

        const sub = document.createElement("div");
        sub.className = "gallery-sub";
        sub.textContent = `${f.name} • ${relationLabel(st.trust, st.romance)} • ${f.personality || fallbackPersonality(f.id)} • Treaty: ${st.treaty}`;
        wrap.appendChild(sub);

        if (queenPortraits[f.id]) {
          const img = document.createElement("img");
          img.className = "leader-portrait";
          img.src = queenPortraits[f.id];
          img.alt = `${f.leader} portrait`;
          wrap.appendChild(img);
        }

        const info = document.createElement("div");
        info.className = "tiny";
        const rebelAgainst = leaderState[f.id]?.rebelAgainst;
        info.textContent =
          `Trust ${st.trust} • Hate ${st.hate} • Romance ${st.romance} • Attraction ${st.attraction} • Fear ${st.fear}` +
          ` • Talk Taste ${st.talkAffinity} • Flirt Taste ${st.flirtAffinity}` +
          ` • Affair ${affairStatusLabel(f.id)}` +
          ` • ${pregnancyStatusLabel(f.id)}` +
          ` • Style ${describePersonality(f.personality || fallbackPersonality(f.id))}` +
          ` • ${summarizeExternalRelations(f.id)}` +
          `${st.trade ? " • Trade Active" : ""}` +
          `${rebelAgainst !== null && rebelAgainst !== undefined ? ` • Rebelling against ${factionById(rebelAgainst)?.leader || "a rival"}` : ""}`;
        wrap.appendChild(info);

        const rowA = document.createElement("div");
        rowA.className = "row";
        const actionsA = [
          ["Talk", st.lastTalkTurn !== diplomacyTurnNumber, () => { diplomacyRoll(f.id, "talk"); render(); }],
          ["Request Aid", st.lastRequestTurn !== diplomacyTurnNumber, () => { diplomacyRoll(f.id, "request"); render(); }],
          [st.trade ? "Trade Open" : "Open Trade", st.lastTradeTurn !== diplomacyTurnNumber && !st.trade, () => { diplomacyRoll(f.id, "trade"); render(); }],
        ];
        for (const [label, enabled, fn] of actionsA) {
          const btn = document.createElement("button");
          btn.textContent = label;
          btn.disabled = !isHumanTurn || !enabled;
          btn.addEventListener("click", fn);
          rowA.appendChild(btn);
        }
        wrap.appendChild(rowA);

        const rowB = document.createElement("div");
        rowB.className = "row";
        const actionsB = [
          ["Offer Truce", st.lastTreatyTurn !== diplomacyTurnNumber && st.treaty === "none", () => { diplomacyRoll(f.id, "treaty"); render(); }],
          ["Flirt", st.lastFlirtTurn !== diplomacyTurnNumber, () => { diplomacyRoll(f.id, "flirt"); render(); }],
          ["Secret Letter", st.lastAffairTurn !== diplomacyTurnNumber && st.romance >= 25 && st.attraction >= 35, () => { diplomacyRoll(f.id, "affair"); render(); }],
          ["Propose Marriage", st.lastMarriageTurn !== diplomacyTurnNumber && st.romance >= 55 && st.trust >= 25, () => { diplomacyRoll(f.id, "marriage"); render(); }],
        ];
        for (const [label, enabled, fn] of actionsB) {
          const btn = document.createElement("button");
          btn.textContent = label;
          btn.disabled = !isHumanTurn || !enabled;
          btn.addEventListener("click", fn);
          rowB.appendChild(btn);
        }
        wrap.appendChild(rowB);

        const intentBtn = document.createElement("button");
        intentBtn.textContent = "Ask Intentions";
        intentBtn.disabled = !isHumanTurn;
        intentBtn.addEventListener("click", () => askQueenIntentions(f.id));
        wrap.appendChild(intentBtn);

        const chatBtn = document.createElement("button");
        chatBtn.textContent = "Converse";
        chatBtn.addEventListener("click", () => openQueenChat(f.id));
        wrap.appendChild(chatBtn);

        const surrenderBtn = document.createElement("button");
        surrenderBtn.textContent = "Surrender To Her";
        surrenderBtn.disabled = !isHumanTurn || !leaderState[f.id]?.active;
        surrenderBtn.addEventListener("click", () => humanSurrenderTo(f.id));
        wrap.appendChild(surrenderBtn);

        grid.appendChild(wrap);
      }
      diplomacyPanelEl.appendChild(grid);
    }

    function renderLeaderPanel() {
      leaderStatusEl.innerHTML = "";
      const heading = document.createElement("div");
      heading.className = "gallery-sub";
      heading.textContent = "Active enemy kingdoms and their ruling queens.";
      leaderStatusEl.appendChild(heading);

      const grid = document.createElement("div");
      grid.className = "gallery-grid";
      const leaders = FACTIONS.filter(f => !f.isHuman && leaderState[f.id]?.active && !leaderState[f.id]?.defeated);
      if (!leaders.length) {
        leaderStatusEl.appendChild(document.createTextNode("No active rival queens remain."));
        return;
      }
      for (const f of leaders) {
        const status = leaderState[f.id].defeated
          ? "Defeated"
          : (leaderState[f.id].active ? "Active" : "Reserve");
        const wrap = document.createElement("div");
        wrap.className = "gallery-card";

        const head = document.createElement("div");
        head.className = "gallery-head";
        head.textContent = f.leader;
        wrap.appendChild(head);

        const sub = document.createElement("div");
        sub.className = "gallery-sub";
        sub.textContent = `${f.name} • ${status} • ${f.personality || fallbackPersonality(f.id)}`;
        wrap.appendChild(sub);

        if (queenPortraits[f.id]) {
          const img = document.createElement("img");
          img.className = "leader-portrait";
          img.src = queenPortraits[f.id];
          img.alt = `${f.leader} portrait`;
          wrap.appendChild(img);
        }

        const divider = document.createElement("div");
        divider.className = "gallery-divider";
        wrap.appendChild(divider);

        const row = document.createElement("div");
        row.className = "tiny";
        row.innerHTML = `Status: <strong>${status}</strong> • ${describePersonality(f.personality || fallbackPersonality(f.id))} • ${summarizeExternalRelations(f.id)}`;
        wrap.appendChild(row);
        grid.appendChild(wrap);
      }
      leaderStatusEl.appendChild(grid);
    }

    function renderUnderworldPanel() {
      underworldPanelEl.innerHTML = "";
      const shell = document.createElement("div");
      shell.className = "underworld-shell";

      const summary = document.createElement("div");
      summary.className = "underworld-note";
      const rebelCount = underworldRebelQueens().length;
      const kingdomlessCount = kingdomlessUnderworldQueens().length;
      const operatives = eligibleUnderworldQueens().filter(id => queenEntry(id).underworldAssigned).length;
      summary.textContent = gameMode === "servitude"
        ? `Hidden network: ${resistanceState.built ? `Strength ${resistanceState.strength} • Exposure ${resistanceState.exposure}` : "Not yet established"} • Underworld operatives ${operatives} • Rebel contacts ${rebelCount} • Reserve contacts ${kingdomlessCount}.`
        : `Your criminal web now handles smuggling, private romance, and rebel contacts abroad. Treasury ${treasury} • Operatives ${operatives} • Rebel contacts ${rebelCount} • Reserve contacts ${kingdomlessCount}.`;
      shell.appendChild(summary);

      if (gameMode === "servitude" && !resistanceState.built) {
        const buildCard = document.createElement("div");
        buildCard.className = "gallery-card";
        const btn = document.createElement("button");
        btn.textContent = "Found Hidden Underworld";
        btn.addEventListener("click", () => buildHiddenResistance());
        buildCard.appendChild(btn);
        shell.appendChild(buildCard);
      }

      const domesticCard = document.createElement("div");
      domesticCard.className = "gallery-card";
      const domesticHead = document.createElement("div");
      domesticHead.className = "gallery-head";
      domesticHead.textContent = "Off-Field Queens";
      domesticCard.appendChild(domesticHead);
      const domesticSub = document.createElement("div");
      domesticSub.className = "gallery-sub";
      domesticSub.textContent = "Queens without deployed units can gather in the underworld to conspire, romance, and help rebellion plots.";
      domesticCard.appendChild(domesticSub);

      const domesticGrid = document.createElement("div");
      domesticGrid.className = "gallery-grid";
      const underworldQueens = eligibleUnderworldQueens();
      if (!underworldQueens.length) {
        const none = document.createElement("div");
        none.className = "tiny";
        none.textContent = "No eligible queens are off-field right now.";
        domesticCard.appendChild(none);
      } else {
        for (const queenFaction of underworldQueens) {
          const queen = QUEEN_POWERS[queenFaction];
          const st = queenEntry(queenFaction);
          const card = document.createElement("div");
          card.className = "gallery-card";
          card.innerHTML = `
            <div class="gallery-head">${queen.title}</div>
            <div class="gallery-sub">${st.underworldAssigned ? "Assigned To The Underworld" : "Available For Conspiracy"} • Affair ${affairStatusLabel(queenFaction)}</div>
            <div class="tiny">Morale ${st.morale} • Trust ${st.trust} • Romance ${st.romance} • Attraction ${st.attraction} • ${pregnancyStatusLabel(queenFaction)}</div>
          `;
          if (queenPortraits[queenFaction]) {
            const img = document.createElement("img");
            img.className = "leader-portrait";
            img.src = queenPortraits[queenFaction];
            img.alt = `${queen.title} portrait`;
            card.appendChild(img);
          }
          const row = document.createElement("div");
          row.className = "row";
          const assignBtn = document.createElement("button");
          assignBtn.textContent = st.underworldAssigned ? "Withdraw" : "Assign";
          assignBtn.addEventListener("click", () => toggleUnderworldQueen(queenFaction));
          row.appendChild(assignBtn);
          const conspireBtn = document.createElement("button");
          conspireBtn.textContent = "Conspire";
          conspireBtn.disabled = !st.underworldAssigned || st.underworldUsedThisTurn;
          conspireBtn.addEventListener("click", () => conspireWithQueen(queenFaction));
          row.appendChild(conspireBtn);
          const romanceBtn = document.createElement("button");
          romanceBtn.textContent = "Underworld Date";
          romanceBtn.disabled = !st.underworldAssigned || st.underworldRomanceUsedThisTurn;
          romanceBtn.addEventListener("click", () => romanceUnderworldQueen(queenFaction));
          row.appendChild(romanceBtn);
          card.appendChild(row);
          domesticGrid.appendChild(card);
        }
        domesticCard.appendChild(domesticGrid);
      }
      shell.appendChild(domesticCard);

      const rebelCard = document.createElement("div");
      rebelCard.className = "gallery-card";
      const rebelHead = document.createElement("div");
      rebelHead.className = "gallery-head";
      rebelHead.textContent = "Rebel Queens";
      rebelCard.appendChild(rebelHead);
      const rebelSub = document.createElement("div");
      rebelSub.className = "gallery-sub";
      rebelSub.textContent = "Support active rebel queens with soldiers, money routes, safehouses, and secret romance.";
      rebelCard.appendChild(rebelSub);
      const rebelGrid = document.createElement("div");
      rebelGrid.className = "gallery-grid";
      const rebels = underworldRebelQueens();
      if (!rebels.length) {
        const none = document.createElement("div");
        none.className = "tiny";
        none.textContent = "No rebel queens currently need underworld support.";
        rebelCard.appendChild(none);
      } else {
        for (const faction of rebels) {
          const st = queenEntry(faction.id);
          const cap = factionCapitalTile(faction.id);
          const card = document.createElement("div");
          card.className = "gallery-card";
          card.innerHTML = `
            <div class="gallery-head">${faction.leader}</div>
            <div class="gallery-sub">${faction.name} • Rebelling against ${factionById(leaderState[faction.id]?.rebelAgainst)?.leader || "a rival"}</div>
            <div class="tiny">Trust ${st.trust} • Romance ${st.romance} • Attraction ${st.attraction} • Affair ${affairStatusLabel(faction.id)} • ${pregnancyStatusLabel(faction.id)}${cap ? ` • Capital troops ${cap.troops}` : ""}</div>
          `;
          if (queenPortraits[faction.id]) {
            const img = document.createElement("img");
            img.className = "leader-portrait";
            img.src = queenPortraits[faction.id];
            img.alt = `${faction.leader} portrait`;
            card.appendChild(img);
          }
          const row = document.createElement("div");
          row.className = "row";
          const aidBtn = document.createElement("button");
          aidBtn.textContent = "Send 4 Troops";
          aidBtn.disabled = st.lastUnderworldAidTurn === diplomacyTurnNumber;
          aidBtn.addEventListener("click", () => sendArmyToRebelQueen(faction.id, 4));
          row.appendChild(aidBtn);
          const romanceBtn = document.createElement("button");
          romanceBtn.textContent = "Moonlit Rendezvous";
          romanceBtn.disabled = st.lastUnderworldRomanceTurn === diplomacyTurnNumber;
          romanceBtn.addEventListener("click", () => romanceRebelQueenInUnderworld(faction.id));
          row.appendChild(romanceBtn);
          card.appendChild(row);
          rebelGrid.appendChild(card);
        }
        rebelCard.appendChild(rebelGrid);
      }
      shell.appendChild(rebelCard);

      const exileCard = document.createElement("div");
      exileCard.className = "gallery-card";
      const exileHead = document.createElement("div");
      exileHead.className = "gallery-head";
      exileHead.textContent = "Reserve Queens Under Authority";
      exileCard.appendChild(exileHead);
      const exileSub = document.createElement("div");
      exileSub.className = "gallery-sub";
      exileSub.textContent = "These reserve queens still live under the authority of active rulers. Your money can help them rebel, escape and found their own realm, or flee directly into your protection. Some will betray you the moment they are free.";
      exileCard.appendChild(exileSub);
      const exileGrid = document.createElement("div");
      exileGrid.className = "gallery-grid";
      const exiles = kingdomlessUnderworldQueens();
      if (!exiles.length) {
        const none = document.createElement("div");
        none.className = "tiny";
        none.textContent = "No reserve queens are currently reachable through the underworld.";
        exileCard.appendChild(none);
      } else {
        for (const faction of exiles) {
          const st = queenEntry(faction.id);
          const authorityId = reserveAuthorityForQueen(faction.id);
          const authority = authorityId === null || authorityId === undefined ? null : factionById(authorityId);
          const card = document.createElement("div");
          card.className = "gallery-card";
          card.innerHTML = `
            <div class="gallery-head">${faction.leader}</div>
            <div class="gallery-sub">${authority ? `Under ${authority.leader} Authority` : "Between Courts"} • Affair ${affairStatusLabel(faction.id)}</div>
            <div class="tiny">Trust ${st.trust} • Romance ${st.romance} • Attraction ${st.attraction} • Hate ${st.hate} • Breakout momentum ${st.underworldRiseSupport} • ${pregnancyStatusLabel(faction.id)}</div>
          `;
          if (queenPortraits[faction.id]) {
            const img = document.createElement("img");
            img.className = "leader-portrait";
            img.src = queenPortraits[faction.id];
            img.alt = `${faction.leader} portrait`;
            card.appendChild(img);
          }
          const row = document.createElement("div");
          row.className = "row";
          const fundBtn = document.createElement("button");
          fundBtn.textContent = "Fund Rebellion / Escape (3)";
          fundBtn.disabled = st.lastUnderworldRiseTurn === diplomacyTurnNumber;
          fundBtn.addEventListener("click", () => fundKingdomlessQueen(faction.id, 3));
          row.appendChild(fundBtn);
          const romanceBtn = document.createElement("button");
          romanceBtn.textContent = "Court In Secret";
          romanceBtn.disabled = st.lastUnderworldRomanceTurn === diplomacyTurnNumber;
          romanceBtn.addEventListener("click", () => romanceKingdomlessQueen(faction.id));
          row.appendChild(romanceBtn);
          card.appendChild(row);
          exileGrid.appendChild(card);
        }
        exileCard.appendChild(exileGrid);
      }
      shell.appendChild(exileCard);

      underworldPanelEl.appendChild(shell);
    }

    function applySceneChoice(draft, branch) {
      const queenFaction = Number(draft.queenFaction);
      const st = queenEntry(queenFaction);
      const queen = QUEEN_POWERS[queenFaction];
      const moraleDelta = Number(draft[`option${branch}Morale`] || 0);
      const trustDelta = Number(draft[`option${branch}Trust`] || 0);
      const romanceDelta = Number(draft[`option${branch}Romance`] || 0);
      const attractionDelta = Number(draft[`option${branch}Attraction`] || 0);
      st.morale = clamp(st.morale + moraleDelta, 0, 100);
      st.trust = clamp(st.trust + trustDelta, -100, 100);
      st.romance = clamp(st.romance + romanceDelta, 0, 100);
      st.attraction = clamp(st.attraction + attractionDelta, 0, 100);
      const sceneText = `${draft.title} ${draft.summary} ${draft[`option${branch}`]} ${draft[`option${branch}Text`]}`.toLowerCase();
      if (/(intimacy|encounter|night|lover|private|hungry|tender)/.test(sceneText)) {
        tryPlayerPregnancy(queenFaction, `Dev Scene: ${draft[`option${branch}`]}`, 0.72);
      }
      developerState.sceneHistory.unshift({
        queenFaction,
        branch,
        title: draft.title,
        at: new Date().toISOString(),
      });
      developerState.sceneHistory = developerState.sceneHistory.slice(0, 8);
      addLog(`Dev scene applied to ${queen.title}: ${draft[`option${branch}`]}.`);
      dismissEventModal(true);
      render();
    }

    function previewDevScene() {
      const draft = ensureSceneDraft();
      const queenFaction = Number(draft.queenFaction);
      const queen = QUEEN_POWERS[queenFaction];
      queueEventModal({
        label: "Dev Scene",
        title: draft.title,
        body: `${draft.summary}\n\nA. ${draft.optionA}: ${draft.optionAText}\n\nB. ${draft.optionB}: ${draft.optionBText}\n\nAftercare: ${draft.aftercare}`,
        portrait: queenPortraits[queenFaction] || QUEEN_PORTRAITS[queenFaction],
        actions: [
          { label: draft.optionA, onClick: () => applySceneChoice(draft, "A") },
          { label: draft.optionB, onClick: () => applySceneChoice(draft, "B") },
          { label: "Close Preview", onClick: () => dismissEventModal() },
        ],
      });
    }

    function openDevSceneLab(queenFaction) {
      developerState.enabled = true;
      developerState.selectedQueenFaction = queenFaction;
      developerState.sceneDraft = defaultSceneDraft(queenFaction);
      setMenuTab("dev");
    }

    function renderDevPanel() {
      devPanelEl.innerHTML = "";
      const shell = document.createElement("div");
      shell.className = "dev-shell";

      const options = developerQueenOptions();
      if (!options.length) {
        const empty = document.createElement("div");
        empty.textContent = "Capture at least one queen first, or use the harem panel after the opening court is available.";
        devPanelEl.appendChild(empty);
        return;
      }

      if (!developerState.selectedQueenFaction || !QUEEN_POWERS[developerState.selectedQueenFaction]) {
        developerState.selectedQueenFaction = options[0].id;
      }
      const draft = ensureSceneDraft(developerState.selectedQueenFaction);

      const toggleCard = document.createElement("div");
      toggleCard.className = "dev-card";
      toggleCard.innerHTML = `<label class="dev-toggle"><input type="checkbox" ${developerState.enabled ? "checked" : ""}> Developer mode enabled</label>`;
      const toggleInput = toggleCard.querySelector("input");
      toggleInput.addEventListener("change", () => {
        developerState.enabled = toggleInput.checked;
        renderDevPanel();
        if (activeMenuTab === "harem") renderHaremPanel();
      });
      shell.appendChild(toggleCard);

      const queenCard = document.createElement("div");
      queenCard.className = "dev-card";
      const queenSelect = document.createElement("select");
      for (const option of options) {
        const opt = document.createElement("option");
        opt.value = option.id;
        opt.textContent = option.title;
        opt.selected = option.id === Number(draft.queenFaction);
        queenSelect.appendChild(opt);
      }
      queenSelect.addEventListener("change", () => {
        developerState.selectedQueenFaction = Number(queenSelect.value);
        developerState.sceneDraft = defaultSceneDraft(developerState.selectedQueenFaction);
        renderDevPanel();
      });
      queenCard.appendChild(queenSelect);

      const quickRow = document.createElement("div");
      quickRow.className = "dev-inline";
      for (const [label, mutate] of [
        ["+10 Morale", () => { const st = queenEntry(Number(queenSelect.value)); st.morale = clamp(st.morale + 10, 0, 100); render(); renderDevPanel(); }],
        ["+10 Trust", () => { const st = queenEntry(Number(queenSelect.value)); st.trust = clamp(st.trust + 10, -100, 100); render(); renderDevPanel(); }],
        ["+10 Romance", () => { const st = queenEntry(Number(queenSelect.value)); st.romance = clamp(st.romance + 10, 0, 100); render(); renderDevPanel(); }],
        ["Reset Draft", () => { developerState.sceneDraft = defaultSceneDraft(Number(queenSelect.value)); renderDevPanel(); }],
      ]) {
        const btn = document.createElement("button");
        btn.textContent = label;
        btn.addEventListener("click", mutate);
        quickRow.appendChild(btn);
      }
      queenCard.appendChild(quickRow);
      shell.appendChild(queenCard);

      const sceneCard = document.createElement("div");
      sceneCard.className = "dev-card";
      const fields = [
        ["title", "Scene title"],
        ["summary", "Scene setup"],
        ["optionA", "Option A label"],
        ["optionAText", "Option A scene text"],
        ["optionB", "Option B label"],
        ["optionBText", "Option B scene text"],
        ["aftercare", "Aftercare / next hook"],
      ];
      for (const [key, label] of fields) {
        const el = key === "summary" || key.endsWith("Text") || key === "aftercare"
          ? document.createElement("textarea")
          : document.createElement("input");
        el.value = draft[key] || "";
        el.placeholder = label;
        el.addEventListener("input", () => { draft[key] = el.value; });
        sceneCard.appendChild(el);
      }

      const statGrid = document.createElement("div");
      statGrid.className = "dev-grid";
      for (const key of ["optionAMorale", "optionATrust", "optionARomance", "optionAAttraction", "optionBMorale", "optionBTrust", "optionBRomance", "optionBAttraction"]) {
        const input = document.createElement("input");
        input.type = "number";
        input.value = draft[key];
        input.placeholder = key;
        input.addEventListener("input", () => { draft[key] = Number(input.value || 0); });
        statGrid.appendChild(input);
      }
      sceneCard.appendChild(statGrid);

      const actionRow = document.createElement("div");
      actionRow.className = "dev-inline";
      for (const [label, fn] of [
        ["Preview Scene", () => previewDevScene()],
        ["Open From Harem", () => setMenuTab("harem")],
      ]) {
        const btn = document.createElement("button");
        btn.textContent = label;
        btn.addEventListener("click", fn);
        actionRow.appendChild(btn);
      }
      sceneCard.appendChild(actionRow);

      const exportBlock = document.createElement("div");
      exportBlock.className = "dev-code";
      exportBlock.textContent = JSON.stringify(draft, null, 2);
      sceneCard.appendChild(exportBlock);
      shell.appendChild(sceneCard);

      if (developerState.sceneHistory.length) {
        const historyCard = document.createElement("div");
        historyCard.className = "dev-card";
        historyCard.innerHTML = developerState.sceneHistory
          .map((entry) => `${formatTimestamp(entry.at)} - ${QUEEN_POWERS[entry.queenFaction]?.title || "Queen"} - ${entry.title} [${entry.branch}]`)
          .join("<br>");
        shell.appendChild(historyCard);
      }

      devPanelEl.appendChild(shell);
    }

    function renderHaremPanel() {
      haremPanelEl.innerHTML = "";
      if (capturedQueens.length === 0) {
        haremPanelEl.textContent = "No captured queens yet.";
        return;
      }

      const heading = document.createElement("div");
      heading.className = "gallery-sub";
      heading.textContent = gameMode === "servitude"
        ? `Manage morale, assignments, powers, and units. Your overlord can restrict or claim queens. Harem autonomy: ${haremAutonomyLabel()}.`
        : "Manage morale, assignments, powers, and units.";
      haremPanelEl.appendChild(heading);

      const grid = document.createElement("div");
      grid.className = "gallery-grid";
      const isHumanTurn = !gameOver && isPlayerControlledFaction(FACTIONS[currentFactionIndex].id);
      for (const queenFaction of capturedQueens) {
        const queen = QUEEN_POWERS[queenFaction];
        const st = queenEntry(queenFaction);
        const rank = queenRelationshipRank(queenFaction);
        const unit = queenUnitForFaction(queenFaction);
        const wrap = document.createElement("div");
        wrap.className = "gallery-card";

        const title = document.createElement("div");
        title.className = "gallery-head";
        title.textContent = queen.title;
        wrap.appendChild(title);

        const sub = document.createElement("div");
        sub.className = "gallery-sub";
        sub.textContent = `${queen.powerName} • ${queen.unitName}`;
        wrap.appendChild(sub);

        if (queenPortraits[queenFaction]) {
          const img = document.createElement("img");
          img.className = "leader-portrait";
          img.src = queenPortraits[queenFaction];
          img.alt = `${queen.title} portrait`;
          wrap.appendChild(img);
        }

        const tag = document.createElement("div");
        tag.className = "tag";
        tag.textContent = `Assignment: ${st.assignment}`;
        wrap.appendChild(tag);

        const moraleText = document.createElement("div");
        moraleText.className = "tiny";
        moraleText.textContent = `Morale: ${st.morale}${st.refusedThisTurn ? " (Refusing this turn)" : ""}`;
        wrap.appendChild(moraleText);

        const rankText = document.createElement("div");
        rankText.className = "tiny";
        rankText.textContent = `Bond: ${rank.id} • War +${rank.warBonus} • Court +${rank.serveBonus}`;
        wrap.appendChild(rankText);

        const serviceText = document.createElement("div");
        serviceText.className = "tiny";
        serviceText.textContent = gameMode === "servitude" ? haremStatusText(queenFaction) : "Under your supervision";
        wrap.appendChild(serviceText);

        const familyText = document.createElement("div");
        familyText.className = "tiny";
        familyText.textContent = `Family: ${pregnancyStatusLabel(queenFaction)}`;
        wrap.appendChild(familyText);

        const moraleWrap = document.createElement("div");
        moraleWrap.className = "morale-wrap";
        const moraleFill = document.createElement("div");
        moraleFill.className = "morale-fill";
        moraleFill.style.width = `${st.morale}%`;
        moraleWrap.appendChild(moraleFill);
        wrap.appendChild(moraleWrap);

        const info = document.createElement("div");
        info.className = "tiny";
        info.textContent = `${queen.powerName}: ${queen.summary} Unlock: ${rank.unlock}`;
        wrap.appendChild(info);

        const chatBtn = document.createElement("button");
        chatBtn.textContent = "Converse";
        chatBtn.addEventListener("click", () => openQueenChat(queenFaction));
        wrap.appendChild(chatBtn);

        const assignRow = document.createElement("div");
        assignRow.className = "row";
        for (const mode of ["court", "war", "intrigue"]) {
          const assignBtn = document.createElement("button");
          assignBtn.textContent = mode[0].toUpperCase() + mode.slice(1);
          assignBtn.disabled = !isHumanTurn || st.assignment === mode || !haremQueenUsable(queenFaction);
          assignBtn.addEventListener("click", () => {
            st.assignment = mode;
            addLog(`${queen.title} is now assigned to ${mode}.`);
            render();
          });
          assignRow.appendChild(assignBtn);
        }
        wrap.appendChild(assignRow);

        const supportBtn = document.createElement("button");
        supportBtn.textContent = "Hold Court (+8 Morale)";
        supportBtn.disabled = !isHumanTurn || st.tendUsedThisTurn || !haremQueenUsable(queenFaction);
        supportBtn.addEventListener("click", () => {
          st.morale = Math.min(100, st.morale + 8);
          st.trust = Math.min(100, st.trust + 3 + rank.serveBonus);
          st.tendUsedThisTurn = true;
          addLog(`${queen.title} gains morale from court attention.`);
          render();
        });
        wrap.appendChild(supportBtn);

        const personalRow = document.createElement("div");
        personalRow.className = "row";

        const intimacyBtn = document.createElement("button");
        intimacyBtn.textContent = "Intimacy (+12 Morale)";
        intimacyBtn.disabled = !isHumanTurn || st.intimacyUsedThisTurn || !haremQueenUsable(queenFaction);
        intimacyBtn.addEventListener("click", () => {
          st.morale = Math.min(100, st.morale + 12);
          st.romance = Math.min(100, st.romance + 5 + rank.serveBonus);
          st.trust = Math.min(100, st.trust + 2);
          st.intimacyUsedThisTurn = true;
          tryPlayerPregnancy(queenFaction, "Harem Intimacy", 1.12);
          addLog(`${queen.title} spends private, intimate time with you and softens.`);
          render();
        });
        personalRow.appendChild(intimacyBtn);

        const giftBtn = document.createElement("button");
        giftBtn.textContent = "Gift Finery (+7 Morale)";
        giftBtn.disabled = !isHumanTurn || st.giftUsedThisTurn || !haremQueenUsable(queenFaction);
        giftBtn.addEventListener("click", () => {
          st.morale = Math.min(100, st.morale + 7);
          st.trust = Math.min(100, st.trust + 4);
          st.hate = Math.max(-100, st.hate - 2);
          st.giftUsedThisTurn = true;
          addLog(`${queen.title} accepts your lavish gift with visible pleasure.`);
          render();
        });
        personalRow.appendChild(giftBtn);

        const confideBtn = document.createElement("button");
        confideBtn.textContent = "Confide In Her";
        confideBtn.disabled = !isHumanTurn || st.confideUsedThisTurn || !haremQueenUsable(queenFaction);
        confideBtn.addEventListener("click", () => {
          st.morale = Math.min(100, st.morale + 5);
          st.trust = Math.min(100, st.trust + 5 + rank.serveBonus);
          st.confideUsedThisTurn = true;
          for (const queenFaction of diplomacyTargetQueens()) {
            const dst = queenEntry(queenFaction);
            dst.trust = Math.min(100, dst.trust + 1);
          }
          addLog(`${queen.title} hears your private thoughts and feels more personally bound to your court.`);
          render();
        });
        personalRow.appendChild(confideBtn);

        wrap.appendChild(personalRow);

        if (developerState.enabled) {
          const devSceneBtn = document.createElement("button");
          devSceneBtn.textContent = "Dev Scene Lab";
          devSceneBtn.addEventListener("click", () => openDevSceneLab(queenFaction));
          wrap.appendChild(devSceneBtn);
        }

        const btn = document.createElement("button");
        btn.textContent = pendingQueenFaction === queenFaction ? "Selected" : "Deploy";
        btn.disabled = !isHumanTurn || queenUsedThisTurn || st.refusedThisTurn || !haremQueenUsable(queenFaction);
        btn.addEventListener("click", () => {
          pendingUnitQueenFaction = null;
          pendingQueenFaction = queenFaction;
          selectedTile = null;
          addLog(`${queen.title} is ready. Click one of your tiles to deploy.`);
          render();
        });
        wrap.appendChild(btn);

        const unitInfo = document.createElement("div");
        unitInfo.className = "tiny";
        unitInfo.textContent = unit
          ? `${queen.unitName} active at (${unit.q},${unit.r}) mode=${unit.mode}`
          : `${queen.unitName} not deployed`;
        wrap.appendChild(unitInfo);

        const unitRow = document.createElement("div");
        unitRow.className = "row";

        const recruitBtn = document.createElement("button");
        recruitBtn.textContent = pendingUnitQueenFaction === queenFaction ? "Placement..." : "Recruit Unit";
        recruitBtn.disabled = !isHumanTurn || st.refusedThisTurn || Boolean(unit) || !haremQueenUsable(queenFaction);
        recruitBtn.addEventListener("click", () => {
          pendingQueenFaction = null;
          pendingUnitQueenFaction = queenFaction;
          selectedTile = null;
          addLog(`Choose one of your tiles to deploy ${queen.unitName}.`);
          render();
        });
        unitRow.appendChild(recruitBtn);

        if (unit) {
          const toggleModeBtn = document.createElement("button");
          toggleModeBtn.textContent = unit.mode === "fight" ? "Set Serve Mode" : "Set Fight Mode";
          toggleModeBtn.disabled = !isHumanTurn || !haremQueenUsable(queenFaction);
          toggleModeBtn.addEventListener("click", () => {
            unit.mode = unit.mode === "fight" ? "serve" : "fight";
            addLog(`${queen.unitName} switched to ${unit.mode} mode.`);
            render();
          });
          unitRow.appendChild(toggleModeBtn);
        }
        wrap.appendChild(unitRow);
        grid.appendChild(wrap);
      }
      haremPanelEl.appendChild(grid);
    }

    function renderGovernmentPanel() {
      if (!governmentPanelEl) return;
      governmentPanelEl.innerHTML = "";
      const heading = document.createElement("div");
      heading.className = "gallery-sub";
      heading.textContent = "Manage duchesses, provincial stability, and your captured queens.";
      governmentPanelEl.appendChild(heading);

      const provinces = tiles.filter((tile) => tile.owner === playerFactionId());
      const ownedDuchesses = duchesses.filter((duchess) => duchess.ownerFaction === playerFactionId() && duchess.assignedTile);
      const vacantProvinces = provinces.filter((tile) => tile.terrain === "land" && !tile.duchessId);
      const summary = document.createElement("div");
      summary.className = "tile-command-meta";
      summary.textContent = `Provinces: ${provinces.length} • Assigned Duchesses: ${ownedDuchesses.length} • Vacant Provinces: ${vacantProvinces.length} • Captured Queens: ${capturedQueens.length}`;
      governmentPanelEl.appendChild(summary);

      const provinceList = document.createElement("div");
      provinceList.className = "gallery-card";
      provinceList.style.marginBottom = "1rem";
      provinceList.innerHTML = `<strong>Your Provinces</strong><br>${provinces.length > 0 ? provinces.map((tile) => `${tile.q},${tile.r}`).join(" • ") : "None"}`;
      governmentPanelEl.appendChild(provinceList);

      const duchessGrid = document.createElement("div");
      duchessGrid.className = "gallery-grid";
      if (ownedDuchesses.length === 0) {
        const none = document.createElement("div");
        none.className = "gallery-card";
        none.textContent = "No duchesses are currently assigned to your provinces.";
        duchessGrid.appendChild(none);
      } else {
        for (const duchess of ownedDuchesses) {
          const card = document.createElement("div");
          card.className = "gallery-card";

          const title = document.createElement("div");
          title.className = "gallery-head";
          title.textContent = duchess.title;
          card.appendChild(title);

          if (duchess.portrait) {
            const img = document.createElement("img");
            img.className = "leader-portrait";
            img.src = duchess.portrait;
            img.alt = `${duchess.name} portrait`;
            img.style.maxWidth = "100%";
            img.style.marginBottom = "0.75rem";
            card.appendChild(img);
          }

          const nameLine = document.createElement("div");
          nameLine.className = "tiny";
          nameLine.textContent = `Name: ${duchess.name} • Archetype: ${getArchetypeLabel(duchess.archetype)}`;
          card.appendChild(nameLine);

          const statusLine = document.createElement("div");
          statusLine.className = "tiny";
          statusLine.textContent = `Loyalty ${duchess.loyalty} • Influence ${duchess.localInfluence} • Corruption ${duchess.corruption}`;
          card.appendChild(statusLine);

          const bondLine = document.createElement("div");
          bondLine.className = "tiny";
          bondLine.textContent = `Trust ${duchess.trust} • Romance ${duchess.romance} • Attraction ${duchess.attraction} • ${duchessPregnancyStatusLabel(duchess)}`;
          card.appendChild(bondLine);

          const tileLine = document.createElement("div");
          tileLine.className = "tiny";
          tileLine.textContent = `Province: ${duchess.assignedTile}`;
          card.appendChild(tileLine);

          const actionRow = document.createElement("div");
          actionRow.className = "row";
          for (const [label, handler] of [
            ["Talk", () => {
              const coords = duchess.assignedTile.split(",");
              const tile = getTile(Number(coords[0]), Number(coords[1]));
              openDuchessActionModal(tile, "talk");
            }],
            ["Reward", () => {
              const coords = duchess.assignedTile.split(",");
              const tile = getTile(Number(coords[0]), Number(coords[1]));
              openDuchessActionModal(tile, "reward");
            }],
            ["Flirt", () => {
              const coords = duchess.assignedTile.split(",");
              const tile = getTile(Number(coords[0]), Number(coords[1]));
              openDuchessActionModal(tile, "flirt");
            }],
            ["Gift", () => {
              const coords = duchess.assignedTile.split(",");
              const tile = getTile(Number(coords[0]), Number(coords[1]));
              openDuchessActionModal(tile, "gift");
            }],
            ["Court", () => {
              const coords = duchess.assignedTile.split(",");
              const tile = getTile(Number(coords[0]), Number(coords[1]));
              openDuchessActionModal(tile, "court");
            }],
            ["Confide", () => {
              const coords = duchess.assignedTile.split(",");
              const tile = getTile(Number(coords[0]), Number(coords[1]));
              openDuchessActionModal(tile, "confide");
            }],
            ["Intimacy", () => {
              const coords = duchess.assignedTile.split(",");
              const tile = getTile(Number(coords[0]), Number(coords[1]));
              openDuchessActionModal(tile, "intimacy");
            }],
            ["Inspect", () => {
              const coords = duchess.assignedTile.split(",");
              const tile = getTile(Number(coords[0]), Number(coords[1]));
              openDuchessActionModal(tile, "inspect");
            }],
            ["Replace", () => {
              const coords = duchess.assignedTile.split(",");
              const tile = getTile(Number(coords[0]), Number(coords[1]));
              openDuchessActionModal(tile, "replace");
            }],
          ]) {
            const btn = document.createElement("button");
            btn.textContent = label;
            btn.addEventListener("click", (ev) => {
              ev.preventDefault();
              ev.stopPropagation();
              handler();
            });
            actionRow.appendChild(btn);
          }
          card.appendChild(actionRow);
          duchessGrid.appendChild(card);
        }
      }
      governmentPanelEl.appendChild(duchessGrid);

      if (vacantProvinces.length > 0) {
        const vacancyHeading = document.createElement("div");
        vacancyHeading.className = "gallery-sub";
        vacancyHeading.textContent = "Vacant Provinces";
        governmentPanelEl.appendChild(vacancyHeading);

        const vacancyGrid = document.createElement("div");
        vacancyGrid.className = "gallery-grid";
        for (const tile of vacantProvinces) {
          const card = document.createElement("div");
          card.className = "gallery-card";

          const title = document.createElement("div");
          title.className = "gallery-head";
          title.textContent = duchessRegionName(tile);
          card.appendChild(title);

          const systems = ensureTileSystems(tile);
          const meta = document.createElement("div");
          meta.className = "tiny";
          meta.textContent = `(${tile.q}, ${tile.r}) • Loyalty ${systems.loyalty} • Unrest ${systems.unrest} • Prosperity ${systems.prosperity}`;
          card.appendChild(meta);

          const appointBtn = document.createElement("button");
          appointBtn.textContent = "Appoint Duchess";
          appointBtn.addEventListener("click", (ev) => {
            ev.preventDefault();
            ev.stopPropagation();
            openAppointDuchessModal(tile);
          });
          card.appendChild(appointBtn);
          vacancyGrid.appendChild(card);
        }
        governmentPanelEl.appendChild(vacancyGrid);
      }

      const queenHeading = document.createElement("div");
      queenHeading.className = "gallery-sub";
      queenHeading.textContent = "Captured Queens";
      governmentPanelEl.appendChild(queenHeading);

      const queenGrid = document.createElement("div");
      queenGrid.className = "gallery-grid";
      if (capturedQueens.length === 0) {
        const none = document.createElement("div");
        none.className = "gallery-card";
        none.textContent = "No queens have been brought into your court yet.";
        queenGrid.appendChild(none);
      } else {
        for (const queenFaction of capturedQueens) {
          const queen = QUEEN_POWERS[queenFaction];
          const queenCard = document.createElement("div");
          queenCard.className = "gallery-card";

          const title = document.createElement("div");
          title.className = "gallery-head";
          title.textContent = queen.title;
          queenCard.appendChild(title);

          if (queenPortraits[queenFaction]) {
            const img = document.createElement("img");
            img.className = "leader-portrait";
            img.src = queenPortraits[queenFaction];
            img.alt = `${queen.title} portrait`;
            img.style.maxWidth = "100%";
            img.style.marginBottom = "0.75rem";
            queenCard.appendChild(img);
          }

          const powerLine = document.createElement("div");
          powerLine.className = "tiny";
          powerLine.textContent = `${queen.powerName}: ${queen.summary}`;
          queenCard.appendChild(powerLine);

          const talkBtn = document.createElement("button");
          talkBtn.textContent = "Converse";
          talkBtn.addEventListener("click", () => openQueenChat(queenFaction));
          queenCard.appendChild(talkBtn);

          queenGrid.appendChild(queenCard);
        }
      }
      governmentPanelEl.appendChild(queenGrid);
    }

    function distance2(x1, y1, x2, y2) {
      const dx = x1 - x2;
      const dy = y1 - y2;
      return dx * dx + dy * dy;
    }

    function nearestTileFromCandidates(x, y, candidates) {
      let best = null;
      let bestD = Infinity;
      for (const tile of candidates) {
        const d = distance2(x, y, tile.cx, tile.cy);
        if (d < bestD) {
          bestD = d;
          best = tile;
        }
      }

      return best && Math.sqrt(bestD) <= hexSize * 0.94 ? best : null;
    }

    function tileAtPointFast(x, y) {
      const axial = pixelToAxial(x, y);
      const rounded = roundAxial(axial.q, axial.r);
      const candidates = [getTile(rounded.q, rounded.r)].filter(Boolean);
      for (const [dq, dr] of HEX_DIRS) {
        const neighbor = getTile(rounded.q + dq, rounded.r + dr);
        if (neighbor) candidates.push(neighbor);
      }
      return nearestTileFromCandidates(x, y, candidates);
    }

    function tileAtPoint(x, y) {
      return nearestTileFromCandidates(x, y, tiles);
    }

    function hexDistance(a, b) {
      const dq = a.q - b.q;
      const dr = a.r - b.r;
      const ds = (a.q + a.r) - (b.q + b.r);
      return Math.max(Math.abs(dq), Math.abs(dr), Math.abs(ds));
    }

    function inTroopRange(a, b, range = TROOP_RANGE) {
      return hexDistance(a, b) <= range;
    }

    function tilesInTroopRange(tile, range = TROOP_RANGE) {
      return tiles.filter((candidate) => candidate !== tile && inTroopRange(tile, candidate, range));
    }

    function animateArmyMove(fromTile, toTile, owner, amount) {
      moveAnimation = {
        from: { q: fromTile.q, r: fromTile.r, cx: fromTile.cx, cy: fromTile.cy },
        to: { q: toTile.q, r: toTile.r, cx: toTile.cx, cy: toTile.cy },
        owner,
        amount,
        tier: armyTier(amount),
        startedAt: performance.now(),
        duration: 360,
      };
      return new Promise((resolve) => {
        function step() {
          if (!moveAnimation) {
            resolve();
            return;
          }
          scheduleBoardRender();
          const elapsed = performance.now() - moveAnimation.startedAt;
          if (elapsed >= moveAnimation.duration) {
            moveAnimation = null;
            render();
            resolve();
            return;
          }
          requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }

    function spreadControlFrom(tile, factionId) {
      let flipped = 0;
      for (const nearby of neighbors(tile)) {
        if (nearby.terrain !== "land") continue;
        if (nearby.owner === factionId) continue;
        if (nearby.capital || nearby.estate) continue;
        nearby.owner = factionId;
        transferDuchessWithProvince(nearby, factionId);
        nearby.troops = Math.max(1, Math.min(nearby.troops || 1, 2));
        const systems = ensureTileSystems(nearby);
        systems.loyalty = clamp(systems.loyalty - 6, 0, 100);
        systems.unrest = clamp(systems.unrest + 6, 0, 100);
        flipped += 1;
      }
      return flipped;
    }

    function resolveMove(fromTile, toTile, factionId, forceAmount = null, attackBonus = 0) {
      if (fromTile.terrain === "ocean" || toTile.terrain === "ocean") return null;
      const playerId = playerFactionId();
      const amount = Math.min(fromTile.troops, forceAmount ?? Math.floor(fromTile.troops / 2));
      if (amount < 1) return null;
      if (toTile.owner === factionId) {
        fromTile.troops -= amount;
        toTile.troops += amount;
        return {
          mode: "reinforce",
          amount,
          effective: amount,
          captured: false,
          defenderId: factionId,
          beforeTroops: toTile.troops - amount,
          targetWasCapital: false,
        };
      }

      const defenderId = toTile.owner;
      if (factionId === playerId && defenderId >= 0 && defenderId !== playerId) {
        const st = queenEntry(defenderId);
        breakHumanTreatyWith(defenderId, "Your attack breaks the truce.");
        st.hate = Math.min(100, st.hate + 12);
      } else if (defenderId === playerId && factionId > 0) {
        const st = queenEntry(factionId);
        if (st.treaty !== "none" || st.trade) {
          st.treaty = "none";
          st.trade = false;
          st.trust = Math.max(-100, st.trust - 18);
          st.hate = Math.min(100, st.hate + 20);
          addLog(`${factionById(factionId).leader} breaks her truce with you and attacks.`);
        } else {
          st.hate = Math.min(100, st.hate + 10);
        }
      } else if (defenderId >= 0 && factionId >= 0 && defenderId !== factionId) {
        const rel = adjustWorldRelation(factionId, defenderId, -4, 18);
        if (rel.status === "alliance" || rel.status === "truce") {
          setTreatyStatusBetween(factionId, defenderId, "war");
          addLog(`${factionById(factionId).leader} betrays ${factionById(defenderId).leader} and opens war.`);
        }
      }
      const beforeTroops = toTile.troops;
      const targetWasCapital = toTile.capital;
      const defenseBonus = tileDefenseBonus(toTile) + (toTile.estate === "palace" ? 1 : 0);
      const effective = amount + attackBonus;
      fromTile.troops -= amount;
      const defenseTotal = toTile.troops + defenseBonus;
      if (effective > defenseTotal) {
        const remain = effective - defenseTotal;
        toTile.owner = factionId;
        transferDuchessWithProvince(toTile, factionId);
        toTile.troops = remain;
        const capturedSystems = ensureTileSystems(toTile);
        capturedSystems.loyalty = clamp(capturedSystems.loyalty - 12, 0, 100);
        capturedSystems.unrest = clamp(capturedSystems.unrest + 10, 0, 100);
        if (toTile.estate === "relic" && factionId === playerId) {
          const cap = playerCapitalTile();
          if (cap) cap.troops += 2;
        }
        if (gameMode === "servitude" && factionId === playerId && defenderId >= 0 && defenderId !== playerId) {
          resistanceState.turnCaptures += 1;
        }
        if (targetWasCapital && defenderId !== factionId) {
          onCapitalTaken(defenderId, factionId);
          toTile.capital = false;
        }
      } else {
        toTile.troops = Math.max(0, beforeTroops - Math.max(0, effective - defenseBonus));
      }
      return {
        mode: "attack",
        amount,
        effective,
        captured: toTile.owner === factionId,
        defenderId,
        beforeTroops,
        targetWasCapital,
      };
    }

    function onCapitalTaken(defenderId, winnerId) {
      if (leaderState[defenderId].defeated) return;
      const escapedRebelEligible =
        leaderState[defenderId].rebelAgainst !== null &&
        leaderState[defenderId].rebelAgainst !== undefined &&
        winnerId !== 0;
      leaderState[defenderId].defeated = true;
      leaderState[defenderId].active = false;
      leaderState[defenderId].rebelAgainst = null;
      campaignStats.factionsCollapsed += 1;
      const loser = factionById(defenderId);
      const winner = factionById(winnerId);
      addLog(`${winner.name} defeated ${loser.leader}.`);
      let eventBody = `${winner.leader} of ${winner.name} has conquered ${loser.leader} of ${loser.name}.\n\n${loser.name} collapses and its remaining territory is absorbed by the victor.`;
      const playerId = playerFactionId();

      if (winnerId === playerId && QUEEN_POWERS[defenderId] && !capturedQueens.includes(defenderId)) {
        capturedQueens.push(defenderId);
        queenEntry(defenderId);
        const queen = QUEEN_POWERS[defenderId];
        addLog(`${queen.title} has joined your harem.`);
        eventBody += `\n\n${queen.title} has been taken into your harem.`;
      }

      for (const tile of tiles) {
        if (tile.owner === defenderId) {
          tile.owner = winnerId;
          transferDuchessWithProvince(tile, winnerId);
          tile.capital = false;
          tile.troops = Math.max(1, tile.troops);
        }
      }

      if (gameMode === "servitude" && defenderId === overlordQueenId) {
        gameOver = true;
        endTurnBtn.disabled = true;
        autoTurnBtn.disabled = true;
        resistanceBtn.disabled = true;
        addLog(`${winner.leader} destroys the throne you served beneath. Your servitude ends in ruin.`);
        eventBody = `${winner.leader} has crushed ${loser.name}, the realm you had sworn to serve.\n\nWithout your mistress's throne, your service collapses and your campaign ends in failure.`;
      } else if (defenderId === 0) {
        gameOver = true;
        endTurnBtn.disabled = true;
        autoTurnBtn.disabled = true;
        resistanceBtn.disabled = true;
        addLog("Your leader has fallen. Defeat.");
        eventBody = `${winner.leader} has captured your capital and shattered the Verdant Crown.\n\nYour reign ends here.`;
      }

      cleanupUnits();
      if (escapedRebelEligible && Math.random() < 0.5) {
        escapeAndResettleRebelQueen(defenderId, winnerId);
      }
      queueEventModal({
        label: defenderId === playerId ? "Defeat" : (winnerId === playerId ? "Queen Captured" : "Kingdom Conquered"),
        title: defenderId === playerId
          ? "Your Capital Has Fallen"
          : `${loser.leader} Has Been Defeated`,
        body: eventBody,
        portrait: queenPortraits[defenderId] || QUEEN_PORTRAITS[defenderId],
        banner: `linear-gradient(135deg, ${winner.color}, ${loser.color})`,
      });
      if (gameOver) {
        showEndingScreen(
          defenderId === 0 ? "Defeat" : "Faction Collapse",
          eventBody,
          winnerId
        );
      }
    }

    function deployQueenPower(queenFaction, tile) {
      if (tile.owner !== playerFactionId()) {
        addLog("Queen powers require one of your tiles.");
        return false;
      }

      const st = queenEntry(queenFaction);
      if (!haremQueenUsable(queenFaction)) {
        addLog(`${QUEEN_POWERS[queenFaction].title} is not available to you right now.`);
        return false;
      }
      if (st.refusedThisTurn) {
        addLog("That queen refuses to deploy this turn.");
        return false;
      }
      const tier = moraleTierBonus(st.morale);
      const abilityType = QUEEN_POWERS[queenFaction].abilityType;

      if (abilityType === "edict") {
        const gain = Math.max(2, 3 + tier);
        tile.troops += gain;
        st.morale = Math.max(0, st.morale - 1);
        addLog(`${QUEEN_POWERS[queenFaction].title} issues ${QUEEN_POWERS[queenFaction].powerName}: +${gain} troops.`);
        return true;
      }

      if (abilityType === "banner") {
        const gain = Math.max(2, 4 + tier);
        tile.troops += gain;
        st.morale = Math.max(0, st.morale - 2);
        addLog(`${QUEEN_POWERS[queenFaction].title} deploys ${QUEEN_POWERS[queenFaction].powerName}: +${gain} troops.`);
        return true;
      }

      if (abilityType === "raid") {
        let hit = 0;
        const damage = Math.max(1, 2 + tier);
        for (const n of neighbors(tile)) {
          if (n.owner >= 0 && n.owner !== playerFactionId()) {
            n.troops = Math.max(0, n.troops - damage);
            if (n.troops === 0) n.owner = NEUTRAL;
            hit += 1;
          }
        }
        if (hit === 0) {
          addLog("Night Raid needs enemy tiles next to the chosen tile.");
          return false;
        }
        st.morale = Math.max(0, st.morale - 2);
        addLog(`${QUEEN_POWERS[queenFaction].title} deploys ${QUEEN_POWERS[queenFaction].powerName} (${damage}) on ${hit} neighboring enemy tiles.`);
        cleanupUnits();
        return true;
      }

      if (abilityType === "hex") {
        let hit = 0;
        const damage = Math.max(1, 1 + tier);
        for (const n of neighbors(tile)) {
          if (n.owner >= 0 && n.owner !== playerFactionId()) {
            n.troops = Math.max(0, n.troops - damage);
            if (n.troops === 0) n.owner = NEUTRAL;
            hit += 1;
          }
        }
        tile.troops += Math.max(1, 1 + tier);
        if (hit === 0) {
          addLog("Veil Hex needs enemy tiles next to the chosen tile.");
          return false;
        }
        st.morale = Math.max(0, st.morale - 2);
        addLog(`${QUEEN_POWERS[queenFaction].title} casts ${QUEEN_POWERS[queenFaction].powerName}, weakening ${hit} adjacent enemy tiles.`);
        cleanupUnits();
        return true;
      }

      if (abilityType === "tithe") {
        const gain = Math.max(3, 4 + tier);
        tile.troops += gain;
        st.morale = Math.min(100, st.morale + 2);
        addLog(`${QUEEN_POWERS[queenFaction].title} levies ${QUEEN_POWERS[queenFaction].powerName}: +${gain} troops and +2 morale.`);
        return true;
      }

      if (abilityType === "storm") {
        const gain = Math.max(2, 2 + tier);
        tile.troops += gain;
        for (const n of neighbors(tile)) {
          if (n.owner === playerFactionId()) n.troops += 1;
        }
        st.morale = Math.max(0, st.morale - 2);
        addLog(`${QUEEN_POWERS[queenFaction].title} unleashes ${QUEEN_POWERS[queenFaction].powerName}: +${gain} troops here and drills nearby allies.`);
        return true;
      }

      return false;
    }

    function deployQueenUnit(queenFaction, tile) {
      if (tile.owner !== playerFactionId()) {
        addLog("Units must deploy on one of your tiles.");
        return false;
      }
      if (!haremQueenUsable(queenFaction)) {
        addLog(`${QUEEN_POWERS[queenFaction].title} is not available to you right now.`);
        return false;
      }
      if (getUnitAtTile(tile)) {
        addLog("That tile already has a unit.");
        return false;
      }
      if (queenUnitForFaction(queenFaction)) {
        addLog("That queen already has an active unit.");
        return false;
      }
      const st = queenEntry(queenFaction);
      if (st.refusedThisTurn) {
        addLog("That queen refuses to deploy a unit this turn.");
        return false;
      }
      queenUnits.push({
        id: nextUnitId++,
        queenFaction,
        owner: playerFactionId(),
        q: tile.q,
        r: tile.r,
        mode: "fight",
        usedThisTurn: false,
      });
      st.morale = Math.max(0, st.morale - 1);
      addLog(`${QUEEN_POWERS[queenFaction].unitName} deployed at (${tile.q},${tile.r}).`);
      return true;
    }

    function isNeighbor(a, b) {
      return inTroopRange(a, b);
    }

    function maybeFinishGame() {
      const alive = activeFactions();
      if (alive.length === 1 && dormantQueens().length === 0) {
        const winner = alive[0];
        gameOver = true;
        endTurnBtn.disabled = true;
        autoTurnBtn.disabled = true;
        resistanceBtn.disabled = true;
        addLog(`${winner.name} wins the map.`);
        const devotedEnding = gameMode === "servitude" && overlordQueenId !== null && winner.id === overlordQueenId;
        const vowedEnding = devotedEnding && resistanceState.vowed;
        queueEventModal({
          label: vowedEnding ? "Royal Union" : (devotedEnding ? "Devoted Ending" : (winner.id === 0 ? "Victory" : "Campaign End")),
          title: vowedEnding ? `You Stand Beside ${winner.leader}` : (devotedEnding ? `You Secure ${winner.name}` : (winner.id === 0 ? "Victory" : `${winner.leader} Wins`)),
          body: vowedEnding
            ? `Every rival throne has fallen beneath ${winner.leader}'s banner.\n\nBound to her by formal vows, you do not end as a mere servant. You stand beside her as chosen consort, joined permanently to the throne you helped secure.`
            : devotedEnding
            ? `Every rival throne has been destroyed under ${winner.leader}'s banner.\n\nYou remain in her service as the architect of her final victory, with no rival power left to challenge the realm you helped build.`
            : winner.id === 0
              ? "The last rival throne has fallen. Your banner stands alone over the realm."
              : `${winner.leader} has outlasted every rival and now rules the map uncontested.`,
          portrait: queenPortraits[winner.id] || QUEEN_PORTRAITS[winner.id],
          banner: `linear-gradient(135deg, ${winner.color}, #23180e)`,
        });
        showEndingScreen(
          winner.id === 0 ? "Conquest Victory" : `${winner.leader} Triumphs`,
          winner.id === 0
            ? "The last rival throne has fallen. Your banner stands alone over the realm."
            : `${winner.leader} secures the last crown and closes the campaign on her terms.`,
          winner.id
        );
        render();
      }
    }

    function cycleTurn() {
      if (gameOver) return;
      if (gameBooted && tiles.length) saveGame("auto");
      selectedTile = null;
      if (gameMode === "servitude" && isPlayerControlledFaction(FACTIONS[currentFactionIndex].id)) {
        resolveOverlordTurn();
        if (gameOver) return;
      }
      const aliveIds = activeFactions().map(f => f.id);
      if (aliveIds.length <= 1) {
        maybeFinishGame();
        return;
      }

      let tries = 0;
      do {
        currentFactionIndex = (currentFactionIndex + 1) % FACTIONS.length;
        if (currentFactionIndex === 0) {
          round += 1;
          resolvePregnancies();
          runWorldQueenDiplomacy();
          triggerWorldEvents();
        }
        tries += 1;
      } while (!aliveIds.includes(FACTIONS[currentFactionIndex].id) && tries < 10);

      startTurn(FACTIONS[currentFactionIndex].id);
    }

    async function handleHumanClick(tile) {
      const humanId = FACTIONS[currentFactionIndex].id;
      if (gameOver) return;
      if (moveAnimation) return;
      if (!isPlayerControlledFaction(humanId)) {
        addLog("Wait for your turn.");
        return;
      }
      if (tile.terrain === "ocean") {
        addLog("Ocean tile is impassable.");
        return;
      }

      if (pendingQueenFaction !== null) {
        const ok = deployQueenPower(pendingQueenFaction, tile);
        if (ok) {
          queenUsedThisTurn = true;
          pendingQueenFaction = null;
          maybeFinishGame();
          render();
        }
        return;
      }

      if (pendingUnitQueenFaction !== null) {
        const ok = deployQueenUnit(pendingUnitQueenFaction, tile);
        if (ok) {
          pendingUnitQueenFaction = null;
          render();
        }
        return;
      }

      if (!selectedTile) {
        if (tile.owner === humanId && tile.troops > 1) {
          selectedTile = tile;
          inspectedTile = tile;
        } else if (tile.owner !== humanId) {
          addLog("That is not your tile.");
        } else {
          addLog("Need at least 2 troops to move from that tile.");
        }
        render();
        return;
      }

      if (tile === selectedTile) {
        inspectedTile = tile;
        selectedTile = null;
        render();
        return;
      }

      if (!isNeighbor(selectedTile, tile)) {
        if (tile.owner === humanId && tile.troops > 1) {
          selectedTile = tile;
          inspectedTile = tile;
          render();
        } else {
          addLog(`Target must be within ${TROOP_RANGE} tiles.`);
        }
        return;
      }

      if (selectedTile.troops <= 1) {
        selectedTile = null;
        render();
        return;
      }

      const beforeOwner = tile.owner;
      const send = sendAmountForTile(selectedTile);
      const selectedUnit = getUnitAtTile(selectedTile);
      let unitBonus = 0;
      if (selectedUnit && selectedUnit.mode === "fight" && !selectedUnit.usedThisTurn && beforeOwner !== humanId) {
        const st = queenEntry(selectedUnit.queenFaction);
        const base = QUEEN_POWERS[selectedUnit.queenFaction].unitFightBonus;
        unitBonus = Math.max(1, base + moraleTierBonus(st.morale) + relationBonus(st, "war"));
      }
      const attackBonus = beforeOwner === humanId ? 0 : passiveWarBonus() + unitBonus;
      const result = resolveMove(selectedTile, tile, humanId, send, attackBonus);
      if (!result) return;
      await animateArmyMove(selectedTile, tile, humanId, send);
      let spreadCount = 0;
      if (result.captured && beforeOwner !== humanId) {
        spreadCount = spreadControlFrom(tile, humanId);
      }
      if (beforeOwner !== humanId && unitBonus > 0 && selectedUnit) {
        selectedUnit.usedThisTurn = true;
      }
      if (beforeOwner === humanId) {
        addLog(`You reinforced (${tile.q},${tile.r}) with ${send}.`);
      } else if (tile.owner === humanId) {
        addLog(`You captured (${tile.q},${tile.r}) with ${tile.troops} left.`);
        if (spreadCount > 0) {
          addLog(`The victory spreads your control into ${spreadCount} surrounding frontier tile${spreadCount === 1 ? "" : "s"}.`);
        }
      } else {
        if (attackBonus > 0) {
          addLog(`You attacked (${tile.q},${tile.r}) for ${result.effective} (${send}+${attackBonus}).`);
        } else {
          addLog(`You attacked (${tile.q},${tile.r}) for ${send} damage.`);
        }
      }

      if (selectedTile.troops <= 1) selectedTile = null;
      cleanupUnits();
      maybeFinishGame();
      if (!gameOver) {
        humanMovesRemaining = Math.max(0, humanMovesRemaining - 1);
        if (humanMovesRemaining === 0) {
          addLog("You used all 5 moves. Turn ended.");
          render();
          cycleTurn();
          return;
        }
      }
      render();
    }

    function aiPickAction(factionId) {
      const humanTreaty = queenEntry(factionId).treaty;
      const playerId = playerFactionId();
      const faction = factionById(factionId);
      const personality = faction.personality || fallbackPersonality(factionId);
      const sources = ownedTiles(factionId)
        .filter(t => t.troops > 1)
        .sort((a, b) => b.troops - a.troops);

      for (const src of sources) {
        const neigh = tilesInTroopRange(src);

        const enemyTargets = neigh
          .filter(n => {
            if (n.terrain !== "land" || n.owner === factionId) return false;
            if (n.owner >= 0) {
              const treaty = treatyStatusBetween(factionId, n.owner);
              if (treaty === "truce" || treaty === "alliance") return false;
            }
            if (n.owner === playerId && (humanTreaty === "truce" || humanTreaty === "alliance")) return false;
            return true;
          })
          .sort((a, b) => {
            const treatyA = a.owner >= 0 ? treatyStatusBetween(factionId, a.owner) : "neutral";
            const treatyB = b.owner >= 0 ? treatyStatusBetween(factionId, b.owner) : "neutral";
            const scoreA =
              estatePriority(a) +
              (a.capital ? 18 : 0) +
              (treatyA === "war" ? 10 : 0) +
              (personality === "Aggressive" ? 8 : 0) +
              (personality === "Opportunist" ? Math.max(0, 8 - a.troops) : 0) +
              (personality === "Rebel-maker" && (a.estate === "town" || a.estate === "palace") ? 6 : 0) +
              (personality === "Swarm-expander" && a.owner === NEUTRAL ? 7 : 0) -
              a.troops;
            const scoreB =
              estatePriority(b) +
              (b.capital ? 18 : 0) +
              (treatyB === "war" ? 10 : 0) +
              (personality === "Aggressive" ? 8 : 0) +
              (personality === "Opportunist" ? Math.max(0, 8 - b.troops) : 0) +
              (personality === "Rebel-maker" && (b.estate === "town" || b.estate === "palace") ? 6 : 0) +
              (personality === "Swarm-expander" && b.owner === NEUTRAL ? 7 : 0) -
              b.troops;
            return scoreB - scoreA;
          });

        if (enemyTargets.length) {
          const target = enemyTargets[0];
          const send = Math.floor(src.troops / 2);
          const commitRoll =
            personality === "Aggressive" ? 0.62 :
            personality === "Opportunist" ? 0.46 :
            personality === "Diplomat" ? 0.18 :
            personality === "Defensive" ? 0.2 :
            0.35;
          if (send > target.troops || Math.random() < commitRoll) {
            return { src, target, send };
          }
        }

        const allyTargets = neigh
          .filter(n => n.terrain === "land" && n.owner === factionId)
          .sort((a, b) => a.troops - b.troops);

        if (allyTargets.length && Math.random() < (personality === "Defensive" ? 0.54 : 0.2)) {
          return { src, target: allyTargets[0], send: Math.floor(src.troops / 2) };
        }
      }

      return null;
    }

    async function runAiTurn(factionId) {
      let actions = 0;
      while (actions < HUMAN_MOVES_PER_TURN) {
        const pick = aiPickAction(factionId);
        if (!pick) break;

        const beforeOwner = pick.target.owner;
        const beforeTroops = pick.target.troops;
        const result = resolveMove(pick.src, pick.target, factionId, pick.send, 0);
        if (!result) break;
        await animateArmyMove(pick.src, pick.target, factionId, pick.send);
        let spreadCount = 0;
        if (result.captured && beforeOwner !== factionId) {
          spreadCount = spreadControlFrom(pick.target, factionId);
        }

        const fac = factionById(factionId);
        if (beforeOwner === factionId) {
          addLog(`${fac.name} reinforces (${pick.target.q},${pick.target.r}).`);
        } else if (pick.target.owner === factionId) {
          addLog(`${fac.name} captures (${pick.target.q},${pick.target.r}) with ${pick.target.troops} left.`);
          if (spreadCount > 0) {
            addLog(`${fac.name} overruns ${spreadCount} surrounding frontier tile${spreadCount === 1 ? "" : "s"}.`);
          }
        } else {
          addLog(`${fac.name} attacks (${pick.target.q},${pick.target.r}).`);
        }

        actions += 1;
      }

      cleanupUnits();
      maybeFinishGame();
      render();
      setTimeout(cycleTurn, 420);
    }

    canvas.addEventListener("mousemove", (ev) => {
      if (isDraggingBoard) return;
      const pt = pointerToBoard(ev);
      const x = pt.x;
      const y = pt.y;
      const tile = tileAtPointFast(x, y) || tileAtPoint(x, y);
      if (tile !== hoveredTile) {
        hoveredTile = tile;
        if (tile) inspectedTile = tile;
        scheduleBoardRender();
      }
    });

    canvas.addEventListener("mouseleave", () => {
      if (hoveredTile !== null) {
        hoveredTile = null;
        scheduleBoardRender();
      }
    });

    boardWrapEl.addEventListener("wheel", (ev) => {
      // Mouse wheel always controls map zoom.
      ev.preventDefault();
      const step = ev.deltaY > 0 ? -0.1 : 0.1;
      zoomBoard(boardScale + step, ev.clientX, ev.clientY);
    }, { passive: false });

    function onBoardPointerDown(ev) {
      if (ev.button !== 0) return;
      isDraggingBoard = true;
      dragMoved = false;
      dragArmed = false;
      dragPointerId = ev.pointerId;
      dragOriginX = ev.clientX;
      dragOriginY = ev.clientY;
      dragLastX = ev.clientX;
      dragLastY = ev.clientY;
      if (ev.currentTarget && ev.currentTarget.setPointerCapture) {
        ev.currentTarget.setPointerCapture(ev.pointerId);
      }
      boardWrapEl.style.cursor = "grab";
      if (dragHoldTimer) clearTimeout(dragHoldTimer);
      dragHoldTimer = setTimeout(() => {
        if (isDraggingBoard && dragPointerId === ev.pointerId) {
          dragArmed = true;
          boardWrapEl.style.cursor = "grabbing";
        }
      }, BOARD_DRAG_HOLD_MS);
      ev.preventDefault();
    }

    function onBoardPointerMove(ev) {
      if (!isDraggingBoard || ev.pointerId !== dragPointerId) return;
      if (!dragArmed) {
        const preArmDx = ev.clientX - dragOriginX;
        const preArmDy = ev.clientY - dragOriginY;
        if (Math.abs(preArmDx) > BOARD_DRAG_THRESHOLD || Math.abs(preArmDy) > BOARD_DRAG_THRESHOLD) {
          if (dragHoldTimer) {
            clearTimeout(dragHoldTimer);
            dragHoldTimer = null;
          }
          stopBoardDrag(ev);
        }
        return;
      }
      const totalDx = ev.clientX - dragOriginX;
      const totalDy = ev.clientY - dragOriginY;
      if (!dragMoved) {
        if (Math.abs(totalDx) < BOARD_DRAG_THRESHOLD && Math.abs(totalDy) < BOARD_DRAG_THRESHOLD) {
          return;
        }
        dragMoved = true;
      }
      const dx = ev.clientX - dragLastX;
      const dy = ev.clientY - dragLastY;
      boardWrapEl.scrollLeft -= dx;
      boardWrapEl.scrollTop -= dy;
      dragLastX = ev.clientX;
      dragLastY = ev.clientY;
      ev.preventDefault();
    }

    function stopBoardDrag(ev) {
      if (!isDraggingBoard) return;
      if (ev && dragPointerId !== null && ev.pointerId !== dragPointerId) return;
      if (dragHoldTimer) {
        clearTimeout(dragHoldTimer);
        dragHoldTimer = null;
      }
      isDraggingBoard = false;
      dragArmed = false;
      dragPointerId = null;
      boardWrapEl.style.cursor = "grab";
    }

    function onBoardPointerUp(ev) {
      if (!isDraggingBoard || ev.pointerId !== dragPointerId) {
        stopBoardDrag(ev);
        return;
      }

      const movedX = Math.abs(ev.clientX - dragOriginX);
      const movedY = Math.abs(ev.clientY - dragOriginY);
      const shouldActivate = !dragMoved && movedX < BOARD_DRAG_THRESHOLD && movedY < BOARD_DRAG_THRESHOLD;

      stopBoardDrag(ev);

      if (!shouldActivate) return;

      const pt = pointerToBoard(ev);
      const tile = tileAtPoint(pt.x, pt.y);
      if (!tile) return;
      handleHumanClick(tile);
    }

    for (const el of [boardWrapEl, canvas]) {
      el.addEventListener("pointerdown", onBoardPointerDown);
      el.addEventListener("pointermove", onBoardPointerMove);
      el.addEventListener("pointerup", onBoardPointerUp);
      el.addEventListener("pointercancel", stopBoardDrag);
    }

    tabOverviewBtn.addEventListener("click", () => setMenuTab("overview"));
    tabLeadersBtn.addEventListener("click", () => setMenuTab("leaders"));
    tabDiplomacyBtn.addEventListener("click", () => setMenuTab("diplomacy"));
    tabHaremBtn.addEventListener("click", () => setMenuTab("harem"));
    tabGovernmentBtn.addEventListener("click", () => setMenuTab("government"));
    tabUnderworldBtn.addEventListener("click", () => setMenuTab("underworld"));
    tabDevBtn.addEventListener("click", () => setMenuTab("dev"));
    for (const btn of mirroredTabButtons) {
      btn.addEventListener("click", () => {
        const target = document.getElementById(btn.dataset.mirror || "");
        if (target) target.click();
      });
    }
    modalCloseBtn.addEventListener("click", () => {
      if (activeMenuTab === "event") dismissEventModal();
      else setMenuTab("overview");
    });
    modalOverlayEl.addEventListener("click", (ev) => {
      if (ev.target !== modalOverlayEl) return;
      if (activeMenuTab === "event") dismissEventModal();
      else setMenuTab("overview");
    });
    document.addEventListener("keydown", (ev) => {
      if (activeMenuTab !== "tile" || !tileSceneState) return;
      if (ev.key === "ArrowUp" || ev.key === "w" || ev.key === "W") {
        ev.preventDefault();
        provinceKeys.up = true;
      } else if (ev.key === "ArrowDown" || ev.key === "s" || ev.key === "S") {
        ev.preventDefault();
        provinceKeys.down = true;
      } else if (ev.key === "ArrowLeft" || ev.key === "a" || ev.key === "A") {
        ev.preventDefault();
        provinceKeys.left = true;
      } else if (ev.key === "ArrowRight" || ev.key === "d" || ev.key === "D") {
        ev.preventDefault();
        provinceKeys.right = true;
      } else if (ev.key === "Enter" || ev.key === " ") {
        ev.preventDefault();
        interactTileScene();
      }
    });
    document.addEventListener("keyup", (ev) => {
      if (ev.key === "ArrowUp" || ev.key === "w" || ev.key === "W") {
        provinceKeys.up = false;
      } else if (ev.key === "ArrowDown" || ev.key === "s" || ev.key === "S") {
        provinceKeys.down = false;
      } else if (ev.key === "ArrowLeft" || ev.key === "a" || ev.key === "A") {
        provinceKeys.left = false;
      } else if (ev.key === "ArrowRight" || ev.key === "d" || ev.key === "D") {
        provinceKeys.right = false;
      }
    });
    document.addEventListener("keydown", (ev) => {
      if (ev.key === "Escape" && modalOverlayEl.classList.contains("open")) {
        if (activeMenuTab === "event") dismissEventModal();
        else setMenuTab("overview");
      }
      if (ev.key === "Escape" && endingOverlayEl.classList.contains("open")) {
        endingOverlayEl.classList.remove("open");
      }
    });

    endTurnBtn.addEventListener("click", () => {
      if (gameOver) return;
      if (!isPlayerControlledFaction(FACTIONS[currentFactionIndex].id)) return;
      cycleTurn();
    });

    autoTurnBtn.addEventListener("click", () => {
      if (gameOver) return;
      if (!isPlayerControlledFaction(FACTIONS[currentFactionIndex].id)) return;
      autoHumanTurn();
    });

    resistanceBtn.addEventListener("click", () => {
      if (gameOver || gameMode !== "servitude") return;
      if (!isPlayerControlledFaction(FACTIONS[currentFactionIndex].id)) return;
      openResistanceActions();
    });

    sendModeBtn.addEventListener("click", () => {
      sendModeIndex = (sendModeIndex + 1) % SEND_OPTIONS.length;
      updateHUD();
    });

    restartBtn.addEventListener("click", buildMap);
    startGameBtn.addEventListener("click", startCampaignFromMenu);
    if (continueGameBtn) continueGameBtn.addEventListener("click", () => loadGameFromStorage());
    saveGameBtn.addEventListener("click", () => saveGame("manual"));
    loadGameBtn.addEventListener("click", () => loadGameFromStorage());
    menuMusicBtn.addEventListener("click", toggleMenuMusic);
    if (menuMuteBtn) menuMuteBtn.addEventListener("click", () => {
      audioSettings.muted = !audioSettings.muted;
      applyAudioSettings();
      syncAmbienceTrack();
    });
    if (audioMuteBtn) audioMuteBtn.addEventListener("click", () => {
      audioSettings.muted = !audioSettings.muted;
      applyAudioSettings();
      syncAmbienceTrack();
    });
    if (menuVolumeRange) menuVolumeRange.addEventListener("input", () => {
      audioSettings.volume = Number(menuVolumeRange.value) / 100;
      applyAudioSettings();
    });
    if (audioVolumeRange) audioVolumeRange.addEventListener("input", () => {
      audioSettings.volume = Number(audioVolumeRange.value) / 100;
      applyAudioSettings();
    });
    endingCloseBtn.addEventListener("click", () => endingOverlayEl.classList.remove("open"));

    setMenuTab(activeMenuTab);
    boardWrapEl.style.cursor = "grab";
    applyAudioSettings();
    updateContinueAvailability();
    updateSaveStatus("No campaign loaded.", "warn");
    syncAmbienceTrack();
