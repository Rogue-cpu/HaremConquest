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

  const DUCHESS_PORTRAIT_POOL = [
    "Duchess/2003_alert_by_lovermam_dhvhez9-pre.jpg",
    "Duchess/2b__nier_automata____who_cares_if_she_s_an_android_by_chromacultfantasies_dlds0da-414w-2x.jpg",
    "Duchess/97b84ad7_24e1_440a_8ba3_4e0506edf3c5_by_pinkulover_dl95duf-414w-2x.jpg",
    "Duchess/absolutely_gorgeous_babes_by_diart1st_djad7g6-pre.jpg",
    "Duchess/absolutely_gorgeous_babes_by_diart1st_djad7gi-pre.jpg",
    "Duchess/absolutely_gorgeous_babes_by_diart1st_djad7kn-pre.jpg",
    "Duchess/adoptable__606_by_jibrilsexyai0_dlmuqwp-414w-2x.png",
    "Duchess/amazing_blonde__by_diart1st_dja4m7i-pre.jpg",
    "Duchess/anime_girl_by_harry645_dl0p028-414w-2x.jpg",
    "Duchess/anime_girl_by_harry645_dl0p02e-414w-2x.jpg",
    "Duchess/anime_girl_by_harry645_dl0p0ua-pre.jpg",
    "Duchess/anime_girl_by_harry645_dlg5vl7-pre.jpg",
    "Duchess/ashley_graham__re4_remake____grasp_of_juicy_meat_by_chromacultfantasies_dlmu3xb-414w-2x.jpg",
    "Duchess/badasss__by_diart1st_djusscn-pre.jpg",
    "Duchess/best_ass_by_diart1st_djf5bt8-pre.jpg",
    "Duchess/best_ass_by_diart1st_djf5cjo-pre.jpg",
    "Duchess/big_bags_by_diart1st_djv9dkd-pre.jpg",
    "Duchess/big_bags_by_diart1st_djv9dki-pre.jpg",
    "Duchess/big_thick_ass_cheeks_by_imsololevelingfan_dk1p58e-fullview.jpg",
    "Duchess/black_widow___marvel_by_giantvixenai_dlz78ks-414w-2x.jpg",
    "Duchess/briar_heavy_bottom_by_fkoyhv_dlz15xt-414w-2x.jpg",
    "Duchess/buttocks_expo_by_diart1st_djvabgx-pre.jpg",
    "Duchess/cleopatra_xxl_by_diart1st_djny7rp-pre.jpg",
    "Duchess/commander_echo_by_misterman4_dkxdh12-pre.jpg",
    "Duchess/devil_girl_by_gazeofnudes_dkn0f2g-pre.jpg",
    "Duchess/elf_archer__goblin_slayer__by_misterman4_dlypfpu-414w-2x.jpg",
    "Duchess/ethereal_girl_with_huge_delicious_ass_by_temptationai_dlfsbqg-375w-2x.jpg",
    "Duchess/eve__stellar_blade____the_ass_of_your_dreams_by_chromacultfantasies_dldrrwo-414w-2x.jpg",
    "Duchess/good_assets__by_diart1st_djusxul-pre.jpg",
    "Duchess/good_assets__by_diart1st_djusxuv-pre.jpg",
    "Duchess/gorgeous_punk__by_diart1st_dja4oku-pre.jpg",
    "Duchess/goth_express___a_certain_sinnoh_champion_by_lovermam_djg0bla-414w-2x.jpg",
    "Duchess/goth_express___can_t_focus__by_lovermam_dj7xmk7-pre.jpg",
    "Duchess/goth_express___cheeks_to_remember__by_lovermam_djjfvt2-414w-2x.jpg",
    "Duchess/goth_express___hexo_grabo_by_lovermam_dk3z6vo-414w-2x.jpg",
    "Duchess/goth_express___huge_____ghostly_balloons____by_lovermam_djsz8kb-414w-2x.jpg",
    "Duchess/goth_express___she_ll_shoot_her_love_to_your_heart_by_lovermam_dk4w4je-414w-2x.jpg",
    "Duchess/goth_express___skull_tat_on_your_ass_by_lovermam_djeuull-414w-2x.jpg",
    "Duchess/goth_express___the_conductor_by_lovermam_djsx72n-pre.jpg",
    "Duchess/great_curves_by_diart1st_djv15xd-pre.jpg",
    "Duchess/great_curves_by_diart1st_djv15xi-pre.jpg",
    "Duchess/hex_maniac__back__za__by_fkoyhv_dkrz7nb-414w-2x.jpg",
    "Duchess/italian_girl_by_gazeofnudes_dlx2939-pre.jpg",
    "Duchess/ivy_valentine__soul_calibur____the_impossible_ass_by_chromacultfantasies_dlmuhqa-414w-2x.jpg",
    "Duchess/juicy_bottoms_by_diart1st_djv9bl5-pre.jpg",
    "Duchess/juicy_bottoms_by_diart1st_djv9bld-pre.jpg",
    "Duchess/juicy_bottoms_by_diart1st_djv9blz-pre.jpg",
    "Duchess/juicy_bottoms_by_diart1st_djv9bps-pre.jpg",
    "Duchess/lara_croft_by_gazeofnudes_djtmqhb-pre.jpg",
    "Duchess/liara__mass_effect____grasp_of_juicy_flesh_by_chromacultfantasies_dlyonyo-414w-2x.jpg",
    "Duchess/mai_shiranui__fatal_fury____nippon_ichi_butt_by_chromacultfantasies_dldrvmp-414w-2x.jpg",
    "Duchess/majestic_by_diart1st_dj9eend-pre.jpg",
    "Duchess/majestic_by_diart1st_dj9eeo9-pre.jpg",
    "Duchess/minerals____yea____by_lovermam_dk753yb-pre.jpg",
    "Duchess/morrigan_by_fkoyhv_dkbjizj-414w-2x.jpg",
    "Duchess/natural_beauty_by_diart1st_djva7u9-pre.jpg",
    "Duchess/nature_is_beautiful_by_diart1st_dj2goxh-pre.jpg",
    "Duchess/neferpitou_by_fkoyhv_dkfs52p-414w-2x.jpg",
    "Duchess/ocean_view_by_diart1st_dj28krz-pre.jpg",
    "Duchess/oooo_mama_by_lovermam_di7qoej-pre.jpg",
    "Duchess/oriental_princess_by_gazeofnudes_dj945zw-pre.jpg",
    "Duchess/persian_princess_by_gazeofnudes_dk4u3de-414w-2x.jpg",
    "Duchess/pink__by_diart1st_djuspwl-pre.jpg",
    "Duchess/poison_heavy_bottom_by_fkoyhv_dlykd77-414w-2x.jpg",
    "Duchess/powerful_babe_by_diart1st_djg9r3l-pre.jpg",
    "Duchess/privacy_by_theapplepot_dk3uyhu-414w-2x.jpg",
    "Duchess/provocation_by_diart1st_dj9m03s-pre.jpg",
    "Duchess/provocation_by_diart1st_dj9m042-pre.jpg",
    "Duchess/ps_chan_break_time__by_lovermam_dhznoxj-pre.jpg",
    "Duchess/read_hair_by_diart1st_djofrzm-pre.jpg",
    "Duchess/revenant__elden_ring__by_misterman4_dlypgm9-414w-2x.jpg",
    "Duchess/rituals_after_moonrise___9_by_nihmaar_dlaxlkc-414w-2x.jpg",
    "Duchess/round_and_soft_by_diart1st_djv9e3t-pre.jpg",
    "Duchess/round_and_soft_by_diart1st_djv9e64-pre.jpg",
    "Duchess/sadako_yamamura__the_ring____the_ass_of_your_dream_by_chromacultfantasies_dlmu7dj-414w-2x.jpg",
    "Duchess/samus_aran__metroid____try_morph_ball_with_that_by_chromacultfantasies_dlmu6fe-414w-2x.jpg",
    "Duchess/sam_concept_rear_view_by_oirts_dg182kv-414w-2x.jpg",
    "Duchess/sequel_to_how_describe_a_mei_mei__by_lovermam_dlstklz-414w-2x.jpg",
    "Duchess/sitting_by_diart1st_djmdho2-pre.jpg",
    "Duchess/sophisticated_by_diart1st_djusqnz-pre.jpg",
    "Duchess/sophisticated_by_diart1st_djusqoa-pre.jpg",
    "Duchess/splendid_by_diart1st_djv1jc8-pre.jpg",
    "Duchess/stewardess_by_gazeofnudes_djkdoap-pre.jpg",
    "Duchess/sue_storm__marvel____the_impossible_ass_by_chromacultfantasies_dlmu390-414w-2x.jpg",
    "Duchess/swordmaiden_weight_gain_page_6_by_oirts_dg9cfa8-414w-2x.jpg",
    "Duchess/teacher2_by_gazeofnudes_djef70s-pre.jpg",
    "Duchess/the_bubble_butt_by_diart1st_djmdg87-pre.jpg",
    "Duchess/the_bubble_butt_by_diart1st_djmdg8l-pre.jpg",
    "Duchess/the_bubble_butt_by_diart1st_djmdg8s-pre.jpg",
    "Duchess/the_most_sexy_poses_by_diart1st_djv9em4-pre.jpg",
    "Duchess/thicc_megumi_by_pinkulover_dlz5xyh-414w-2x.jpg",
    "Duchess/thick_by_diart1st_djv1943-pre.jpg",
    "Duchess/thick_demon_girl_by_temptationai_dlk4x0y-375w-2x.jpg",
    "Duchess/to_the_limit_by_shaliatnaroon_djj6a5q-414w-2x.jpg",
    "Duchess/vanessa__kof_xiii____the_impossible_ass_by_chromacultfantasies_dldrwbr-414w-2x.jpg",
    "Duchess/weiss_schnee___rwby_by_giantvixenai_dlg6kjo-414w-2x.jpg",
    "Duchess/white_hair_pawg_13_by_theapplepot_dg3qtjf-375w-2x.jpg",
    "Duchess/willow_schnee___rwby_by_giantvixenai_dlqataa-375w-2x.jpg",
    "Duchess/yoruichi_by_misterman4_dlvsguh-414w-2x.jpg",
    "Duchess/_exclusive__guild_girl__goblin_slayer__by_misterman4_dlr47un-pre.jpg",
    "Duchess/_exclusive__recluse_by_misterman4_dl809j7-pre.jpg",
    "Duchess/_exclusive__rinko_iori_by_misterman4_dlciuvm-414w-2x.jpg",
    "Duchess/_exclusive__rukia_kuchiki_by_misterman4_dkz32ct-414w-2x.jpg",
    "Duchess/_exclusive__wiz__konosuba__by_misterman4_dlkk2nv-414w-2x.jpg",
    "Duchess/_i_m_an_asshole__series_by_diart1st_dja1z3i-pre.jpg",
    "Duchess/_i_m_an_asshole__series_by_diart1st_dja1z5q-pre.jpg",
    "Duchess/_oc__chloe_by_nobodyhyperai_dlq3o20-414w-2x.jpg",
    "Duchess/_oc__latex_pants_by_lovermam_djmxyfj-pre.jpg",
    "Duchess/_original__afterwork_booty_by_lovermam_di1n6xi-pre.jpg",
    "Duchess/_original__office_flaunt_by_lovermam_di5u23s-pre.jpg",
    "Duchess/_original__pool_cheeks_by_lovermam_di36qzy-pre.jpg",
    "Duchess/_original__show_off_by_lovermam_dhxqkaj-pre.jpg",
    "Duchess/_original__waiting_by_lovermam_dj0pv11-414w-2x.jpg",
    "Duchess/_original__walkin_down_the_path_by_lovermam_dibdjj0-414w-2x.jpg",
    "Duchess/_original__wandering_goth__by_lovermam_dj3881m-414w-2x.jpg",
  ];

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

  function duchessPortraitForTile(tile, takenPortraits = []) {
    const pool = DUCHESS_PORTRAIT_POOL.length ? DUCHESS_PORTRAIT_POOL : Object.values(DUCHESS_PORTRAITS);
    const used = new Set(takenPortraits || []);
    const seed = Math.abs((tile?.q || 0) * 131 + (tile?.r || 0) * 71);
    for (let offset = 0; offset < pool.length; offset += 1) {
      const candidate = pool[(seed + offset) % pool.length];
      if (!used.has(candidate)) return candidate;
    }
    return pool[seed % pool.length] || DUCHESS_PORTRAITS.noble_duchess || "Queens/queen_elara_verdantia.jpg";
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
    PORTRAIT_POOL: DUCHESS_PORTRAIT_POOL,
    createDuchess,
    duchessPortraitForTile,
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
