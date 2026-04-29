const mapW = 28;
    const mapH = 28;
    const hexSize = 27;
    const sqrt3 = Math.sqrt(3);
    const HUMAN_MOVES_PER_TURN = 5;
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
const SAVE_VERSION = 1;

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
    const logEl = document.getElementById("log");
    const saveStatusEl = document.getElementById("saveStatus");
    const leaderStatusEl = document.getElementById("leaderStatus");
    const diplomacyPanelEl = document.getElementById("diplomacyPanel");
    const haremPanelEl = document.getElementById("haremPanel");
    const eventPanelEl = document.getElementById("eventPanel");
    const overviewTabEl = document.getElementById("overviewTab");
    const leadersTabEl = document.getElementById("leadersTab");
    const diplomacyTabEl = document.getElementById("diplomacyTab");
    const haremTabEl = document.getElementById("haremTab");
    const eventTabEl = document.getElementById("eventTab");
    const modalOverlayEl = document.getElementById("modalOverlay");
    const modalWindowEl = modalOverlayEl.querySelector(".modal-window");
    const modalBodyEl = modalOverlayEl.querySelector(".modal-body");
    const modalCloseBtn = document.getElementById("modalCloseBtn");
    const modalTitleEl = document.getElementById("modalTitle");
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
    let audioSettings = {
      volume: 0.55,
      muted: false,
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
    let sendModeIndex = 1;
    let hoveredTile = null;
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
      const total = mapImages.length + portraitSources.length + 4;
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

      await new Promise((resolve) => {
        const doneAudio = () => {
          menuMusicEl.removeEventListener("canplaythrough", doneAudio);
          menuMusicEl.removeEventListener("error", doneAudio);
          step("Tuning the court musicians...");
          resolve();
        };
        if (menuMusicEl.readyState >= 4) {
          doneAudio();
          return;
        }
        menuMusicEl.addEventListener("canplaythrough", doneAudio);
        menuMusicEl.addEventListener("error", doneAudio);
        menuMusicEl.load();
      });

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
        dayNightPhase = (dayNightPhase + 0.0012) % 1;
        scheduleBoardRender();
      }, 900);
    }

    function factionById(id) {
      return FACTIONS.find(f => f.id === id);
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
          lastTreatyTurn: -1,
          lastMarriageTurn: -1,
          talkAffinity: 0,
          flirtAffinity: 0,
          joinOfferPending: false,
          lastAudienceTurn: -1,
          overlordClaimed: false,
          forbiddenThisTurn: false,
          summonedThisTurn: false,
        };
      }
      return queenState[queenFaction];
    }

    function setMenuTab(tabName) {
      activeMenuTab = tabName;
      if (tabName === "leaders" || tabName === "diplomacy" || tabName === "harem" || tabName === "event") {
        modalOverlayEl.classList.add("open");
        modalOverlayEl.classList.toggle("event-mode", tabName === "event");
        modalWindowEl.classList.toggle("event-mode", tabName === "event");
        modalBodyEl.classList.toggle("event-mode", tabName === "event");
        leadersTabEl.classList.toggle("active", tabName === "leaders");
        diplomacyTabEl.classList.toggle("active", tabName === "diplomacy");
        haremTabEl.classList.toggle("active", tabName === "harem");
        eventTabEl.classList.toggle("active", tabName === "event");
        modalTitleEl.textContent =
          tabName === "leaders" ? "Enemy Leaders" :
          (tabName === "diplomacy" ? "Diplomacy" :
          (tabName === "harem" ? "Harem Management" : "Major Event"));
        modalCloseBtn.textContent = tabName === "event" ? "Continue" : "Close";
        if (tabName === "leaders") renderLeaderPanel();
        if (tabName === "diplomacy") renderDiplomacyPanel();
        if (tabName === "harem") renderHaremPanel();
        if (tabName === "event") renderEventPanel();
      } else {
        modalOverlayEl.classList.remove("open");
        modalOverlayEl.classList.remove("event-mode");
        modalWindowEl.classList.remove("event-mode");
        modalBodyEl.classList.remove("event-mode");
        leadersTabEl.classList.remove("active");
        diplomacyTabEl.classList.remove("active");
        haremTabEl.classList.remove("active");
        eventTabEl.classList.remove("active");
        modalCloseBtn.textContent = "Close";
      }
      overviewTabEl.classList.add("active");
      tabOverviewBtn.classList.toggle("active-tab", tabName === "overview");
      tabLeadersBtn.classList.toggle("active-tab", tabName === "leaders");
      tabDiplomacyBtn.classList.toggle("active-tab", tabName === "diplomacy");
      tabHaremBtn.classList.toggle("active-tab", tabName === "harem");
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
      if (menuMusicEl.paused) {
        menuMusicEl.play().catch(() => {});
        menuMusicBtn.textContent = "Pause Theme";
      } else {
        menuMusicEl.pause();
        menuMusicBtn.textContent = "Play Theme";
      }
    }

    function applyAudioSettings() {
      const level = audioSettings.muted ? 0 : clamp(audioSettings.volume, 0, 1);
      menuMusicEl.volume = level;
      if (audioVolumeRange) audioVolumeRange.value = `${Math.round(audioSettings.volume * 100)}`;
      if (menuVolumeRange) menuVolumeRange.value = `${Math.round(audioSettings.volume * 100)}`;
      if (audioMuteBtn) audioMuteBtn.textContent = audioSettings.muted ? "Unmute" : "Mute";
      if (menuMuteBtn) menuMuteBtn.textContent = audioSettings.muted ? "Unmute Theme" : "Mute Theme";
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
        tiles.push(tile);
        tileIndex.set(tileKey(tile.q, tile.r), tile);
      }
    }

    function updateContinueAvailability() {
      const exists = Boolean(localStorage.getItem(SAVE_KEY));
      if (continueGameBtn) continueGameBtn.disabled = !exists;
      if (loadGameBtn) loadGameBtn.disabled = !exists;
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
          currentFactionIndex,
          round,
          gameOver,
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
          gameMode,
          overlordQueenId,
          resistanceState,
          sendModeIndex,
          hoveredTile: hoveredTile ? { q: hoveredTile.q, r: hoveredTile.r } : null,
          boardScale,
          dayNightPhase,
          campaignStats,
          audioSettings,
        },
      };
    }

    function saveGame(mode = "manual") {
      if (!tiles.length) return false;
      if (mode === "auto") campaignStats.autosaves += 1;
      const payload = buildSavePayload();
      localStorage.setItem(SAVE_KEY, JSON.stringify(payload));
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
      leaderState = snapshot.leaderState || {};
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
      gameMode = snapshot.gameMode || "conquest";
      overlordQueenId = snapshot.overlordQueenId ?? null;
      resistanceState = snapshot.resistanceState || resistanceState;
      sendModeIndex = snapshot.sendModeIndex || 1;
      hoveredTile = snapshot.hoveredTile ? getTile(snapshot.hoveredTile.q, snapshot.hoveredTile.r) : null;
      boardScale = snapshot.boardScale || 1;
      dayNightPhase = snapshot.dayNightPhase || 0.18;
      campaignStats = snapshot.campaignStats || campaignStats;
      audioSettings = snapshot.audioSettings || audioSettings;
      applyAudioSettings();
      buildTerrainBackdrops();
      ensureStaticBoardCanvas();
      syncCanvasDisplaySize();
      cleanupUnits();
      updateHUD();
      render();
    }

    function loadGameFromStorage() {
      const raw = localStorage.getItem(SAVE_KEY);
      if (!raw) {
        updateSaveStatus("No campaign save found.", "warn");
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
          };
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
      }
      seedSettlements();

      selectedTile = null;
      currentFactionIndex = 0;
      round = 1;
      gameOver = false;
      endingShown = false;
      gameMode = "conquest";
      overlordQueenId = null;
      campaignStats = {
        factionsCollapsed: 0,
        autosaves: 0,
        lastSaveAt: null,
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
        };
      }
      addLog("New game started.");
      addLog("Queen Elara, your native queen, starts in your harem.");
      addLog("Tip: select one of your green tiles with 2+ troops, then click an adjacent tile.");
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
      for (const tile of tiles) {
        drawHex(tile.cx, tile.cy, hexSize - 1);
        ctx.globalAlpha = tile.owner === NEUTRAL ? 0.08 : 0.16;
        ctx.fillStyle = tileFillColor(tile);
        ctx.fill();
        ctx.globalAlpha = 1;

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
          if (tile.owner !== NEUTRAL) {
            const sprite = getArmySprite(tile.owner, armyTier(tile.troops));
            if (sprite) {
              ctx.globalAlpha = 0.96;
              ctx.drawImage(sprite, tile.cx - 13, tile.cy - 12, 26, 26);
              ctx.globalAlpha = 1;
            }
          }
          const showTroops = hoveredTile === tile || selectedTile === tile;
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
      }
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
      const daylight = (Math.sin(dayNightPhase * Math.PI * 2 - Math.PI / 2) + 1) / 2;
      const darkness = Math.max(0, 1 - daylight * 1.22);
      const nightAlpha = 0.72 * darkness;
      if (nightAlpha > 0.01) {
        ctx.fillStyle = `rgba(6, 10, 26, ${nightAlpha})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const moonWash = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        moonWash.addColorStop(0, `rgba(70, 96, 156, ${nightAlpha * 0.24})`);
        moonWash.addColorStop(0.5, `rgba(22, 34, 74, ${nightAlpha * 0.18})`);
        moonWash.addColorStop(1, `rgba(4, 8, 18, ${nightAlpha * 0.3})`);
        ctx.fillStyle = moonWash;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const moonGlow = ctx.createRadialGradient(
          canvas.width * 0.78, canvas.height * 0.2, 0,
          canvas.width * 0.78, canvas.height * 0.2, canvas.width * 0.42
        );
        moonGlow.addColorStop(0, `rgba(188, 214, 255, ${nightAlpha * 0.16})`);
        moonGlow.addColorStop(0.42, `rgba(96, 128, 204, ${nightAlpha * 0.08})`);
        moonGlow.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = moonGlow;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      const duskStrength = Math.max(0, 1 - Math.abs(dayNightPhase - 0.5) / 0.2) * Math.max(0, 1 - daylight * 1.05);
      if (duskStrength > 0) {
        const sunsetGlow = ctx.createLinearGradient(0, 0, 0, canvas.height);
        sunsetGlow.addColorStop(0, `rgba(255, 172, 92, ${Math.max(0, duskStrength) * 0.24})`);
        sunsetGlow.addColorStop(0.45, `rgba(226, 98, 72, ${Math.max(0, duskStrength) * 0.14})`);
        sunsetGlow.addColorStop(1, `rgba(52, 30, 62, ${Math.max(0, duskStrength) * 0.18})`);
        ctx.fillStyle = sunsetGlow;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const horizonGlow = ctx.createRadialGradient(
          canvas.width * 0.52, canvas.height * 0.24, 0,
          canvas.width * 0.52, canvas.height * 0.24, canvas.width * 0.7
        );
        horizonGlow.addColorStop(0, `rgba(255, 214, 132, ${Math.max(0, duskStrength) * 0.22})`);
        horizonGlow.addColorStop(0.55, `rgba(232, 125, 68, ${Math.max(0, duskStrength) * 0.1})`);
        horizonGlow.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = horizonGlow;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }

    function renderPanels() {
      if (activeMenuTab === "leaders") renderLeaderPanel();
      if (activeMenuTab === "diplomacy") renderDiplomacyPanel();
      if (activeMenuTab === "harem") renderHaremPanel();
      if (activeMenuTab === "event") renderEventPanel();
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
        eventPanelEl.textContent = "No major event is waiting.";
        return;
      }

      const shell = document.createElement("div");
      shell.className = "event-shell";

      const card = document.createElement("div");
      card.className = "event-card";

      const banner = document.createElement("div");
      banner.className = "event-banner";
      banner.textContent = event.title;
      card.appendChild(banner);

      const body = document.createElement("div");
      body.className = "event-body";

      if (event.portrait) {
        const img = document.createElement("img");
        img.className = "event-portrait";
        img.src = event.portrait;
        img.alt = `${event.title} portrait`;
        body.appendChild(img);
      }

      const textWrap = document.createElement("div");
      textWrap.className = "event-copy";

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
      const eventActions = event.actions?.length
        ? event.actions
        : [{
            label: event.cta || (eventQueue.length > 1 ? "Continue" : "Acknowledge"),
            onClick: () => dismissEventModal(),
          }];
      for (const action of eventActions) {
        const btn = document.createElement("button");
        btn.className = "event-continue";
        btn.textContent = action.label;
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
      const ucount = towns > 0 ? Math.max(1, Math.floor((lands + ports * 5 + roads * 2) / towns)) : 0;
      return { lands, towns, ports, forts, relics, palaces, roads, ucount };
    }

    function activeFactions() {
      return FACTIONS.filter(f => leaderState[f.id]?.active && !leaderState[f.id]?.defeated);
    }

    function dormantQueens() {
      return FACTIONS.filter(f => !f.isHuman && !leaderState[f.id]?.active && !leaderState[f.id]?.defeated);
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
    }

    function spawnFrontierQueen(factionId) {
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

      addLog(`${faction.leader} rises from the frontier and founds ${faction.name}.`);
      queueEventModal({
        label: "Queen Rising",
        title: `${faction.leader} Rises`,
        body: `${faction.leader} has emerged from the frontier and founded ${faction.name}.\n\nA new queen now claims territory on the map and enters the struggle for dominion.`,
        portrait: queenPortraits[factionId] || QUEEN_PORTRAITS[factionId],
        banner: `linear-gradient(135deg, ${faction.color}, #23180e)`,
      });
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

    function triggerWorldEvents() {
      if (round < 3) return;
      const reserve = dormantQueens();
      const eventFns = [
        () => fireBorderDefectionEvent(),
        () => fireEscapePlotEvent(),
        () => fireTributeEvent(),
        () => fireRebellionSpreadsEvent(),
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
        if (Math.random() < 0.24 && fn()) break;
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
      for (const tile of factionTiles) {
        if (tile.capital) {
          tile.troops += 1 + eco.ucount;
        } else if (tile.estate === "town") {
          tile.troops += eco.ucount;
        } else if (tile.estate === "port") {
          tile.troops += Math.max(1, Math.floor(eco.ucount / 2));
        } else if (tile.estate === "fort") {
          tile.troops += Math.max(1, Math.ceil(eco.ucount / 2));
        } else if (tile.estate === "relic") {
          tile.troops += 1;
        } else if (tile.estate === "palace") {
          tile.troops += 1;
          const captured = capturedQueens.filter(q => q !== 0);
          if (captured.length) {
            const target = queenEntry(randomItem(captured));
            target.morale = Math.min(100, target.morale + 2);
          }
        } else if (tile.estate === "road") {
          tile.troops += 1;
        }
      }
      const fac = factionById(factionId);
      addLog(`${fac.name} gains reinforcements (land ${eco.lands}, towns ${eco.towns}, ports ${eco.ports}, forts ${eco.forts}, relics ${eco.relics}, palaces ${eco.palaces}, roads ${eco.roads}).`);

      if (!isPlayerControlledFaction(factionId)) {
        endTurnBtn.disabled = true;
        autoTurnBtn.disabled = true;
        resistanceBtn.disabled = true;
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
        if (gameMode === "servitude") {
          maybeApplyOverlordHaremPressure();
        }
        for (const queenFaction of diplomacyTargetQueens()) {
          updateDiplomacyPressure(queenFaction);
          maybeQueueJoinOffer(queenFaction);
        }
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
      }
      turnInfo.textContent += ` • ${dayPhaseLabel()}`;
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
      capturedQueens.push(queenFaction);
      const st = queenEntry(queenFaction);
      st.joinOfferPending = false;
      st.treaty = "alliance";
      st.trade = false;
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
      if (st.joinOfferPending || capturedQueens.includes(queenFaction) || leaderState[queenFaction]?.defeated) return;
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
          ` • Style ${describePersonality(f.personality || fallbackPersonality(f.id))}` +
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
        row.innerHTML = `Status: <strong>${status}</strong> • ${describePersonality(f.personality || fallbackPersonality(f.id))}`;
        wrap.appendChild(row);
        grid.appendChild(wrap);
      }
      leaderStatusEl.appendChild(grid);
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
      }
      const beforeTroops = toTile.troops;
      const targetWasCapital = toTile.capital;
      const defenseBonus =
        toTile.estate === "fort" ? 2 :
        toTile.estate === "palace" ? 1 :
        0;
      const effective = amount + attackBonus;
      fromTile.troops -= amount;
      const defenseTotal = toTile.troops + defenseBonus;
      if (effective > defenseTotal) {
        const remain = effective - defenseTotal;
        toTile.owner = factionId;
        toTile.troops = remain;
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
      return neighbors(a).some(n => n === b);
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
          triggerWorldEvents();
        }
        tries += 1;
      } while (!aliveIds.includes(FACTIONS[currentFactionIndex].id) && tries < 10);

      startTurn(FACTIONS[currentFactionIndex].id);
    }

    function handleHumanClick(tile) {
      const humanId = FACTIONS[currentFactionIndex].id;
      if (gameOver) return;
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
        } else if (tile.owner !== humanId) {
          addLog("That is not your tile.");
        } else {
          addLog("Need at least 2 troops to move from that tile.");
        }
        render();
        return;
      }

      if (tile === selectedTile) {
        selectedTile = null;
        render();
        return;
      }

      if (!isNeighbor(selectedTile, tile)) {
        if (tile.owner === humanId && tile.troops > 1) {
          selectedTile = tile;
          render();
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
      if (beforeOwner !== humanId && unitBonus > 0 && selectedUnit) {
        selectedUnit.usedThisTurn = true;
      }
      if (beforeOwner === humanId) {
        addLog(`You reinforced (${tile.q},${tile.r}) with ${send}.`);
      } else if (tile.owner === humanId) {
        addLog(`You captured (${tile.q},${tile.r}) with ${tile.troops} left.`);
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
        const neigh = neighbors(src);

        const enemyTargets = neigh
          .filter(n => {
            if (n.terrain !== "land" || n.owner === factionId) return false;
            if (factionId === playerId && n.owner > 0 && n.owner !== playerId) {
              const treaty = queenEntry(n.owner).treaty;
              if (treaty === "truce" || treaty === "alliance") return false;
            }
            if (n.owner === playerId && (humanTreaty === "truce" || humanTreaty === "alliance")) return false;
            return true;
          })
          .sort((a, b) => {
            const scoreA =
              estatePriority(a) +
              (a.capital ? 18 : 0) +
              (personality === "Aggressive" ? 8 : 0) +
              (personality === "Opportunist" ? Math.max(0, 8 - a.troops) : 0) +
              (personality === "Rebel-maker" && (a.estate === "town" || a.estate === "palace") ? 6 : 0) +
              (personality === "Swarm-expander" && a.owner === NEUTRAL ? 7 : 0) -
              a.troops;
            const scoreB =
              estatePriority(b) +
              (b.capital ? 18 : 0) +
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

    function runAiTurn(factionId) {
      let actions = 0;
      while (actions < HUMAN_MOVES_PER_TURN) {
        const pick = aiPickAction(factionId);
        if (!pick) break;

        const beforeOwner = pick.target.owner;
        const beforeTroops = pick.target.troops;
        const result = resolveMove(pick.src, pick.target, factionId, pick.send, 0);
        if (!result) break;

        const fac = factionById(factionId);
        if (beforeOwner === factionId) {
          addLog(`${fac.name} reinforces (${pick.target.q},${pick.target.r}).`);
        } else if (pick.target.owner === factionId) {
          addLog(`${fac.name} captures (${pick.target.q},${pick.target.r}) with ${pick.target.troops} left.`);
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
    });
    if (audioMuteBtn) audioMuteBtn.addEventListener("click", () => {
      audioSettings.muted = !audioSettings.muted;
      applyAudioSettings();
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
    menuMusicEl.play().then(() => {
      menuMusicBtn.textContent = "Pause Theme";
    }).catch(() => {});
