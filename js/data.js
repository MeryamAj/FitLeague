const challenges = [
  {
    "id": "ch_101",
    "title": "Défi 50km Course à pied",
    "sport": "Course à pied",
    "description": "Courir une distance totale de 50 km avant la fin du mois.",
    "goalValue": 50,
    "deadline": "2026-11-30",
    "status": "inactif",
    "imageUrl": "Assets/images/running.png"
  },
  {
    "id": "ch_102",
    "title": "100 Pompes par jour",
    "sport": "Musculation",
    "description": "Réaliser 100 pompes chaque jour pendant une semaine complète.",
    "goalValue": 700,
    "deadline": "2026-11-05",
    "status": "actif",
    "imageUrl": "assets/images/musculation.png"
  },
  {
    "id": "ch_103",
    "title": "Marathon Cycliste 150km",
    "sport": "Cyclisme",
    "description": "Parcourir 150 kilomètres à vélo sur des parcours en extérieur.",
    "goalValue": 150,
    "deadline": "2026-11-25",
    "status": "actif",
    "imageUrl": "assets/images/cyclisme.png"
  },
  {
    "id": "ch_104",
    "title": "Yoga Matinal Doux",
    "sport": "Yoga",
    "description": "Pratiquer 20 minutes de séances de yoga réparateur chaque matin.",
    "goalValue": 300,
    "deadline": "2026-11-30",
    "status": "inactif",
    "imageUrl": "assets/images/yoga.png"
  },
  {
    "id": "ch_105",
    "title": "Endurance en Natation",
    "sport": "Natation",
    "description": "Nager une distance cumulée de 10 kilomètres en piscine.",
    "goalValue": 10,
    "deadline": "2026-11-20",
    "status": "actif",
    "imageUrl": "assets/images/natation.png"
  },
  {
    "id": "ch_106",
    "title": "Sprint HIIT Intensif",
    "sport": "Fitness",
    "description": "Compléter 10 routines d'entraînements à haute intensité (HIIT).",
    "goalValue": 10,
    "deadline": "2026-11-15",
    "status": "actif",
    "imageUrl": "assets/images/fitness.png"
  },
  {
    "id": "ch_107",
    "title": "10 000 Pas Quotidiens",
    "sport": "Marche",
    "description": "Maintenir une moyenne de 10 000 pas par jour pendant deux semaines.",
    "goalValue": 140000,
    "deadline": "2026-11-14",
    "status": "inactif",
    "imageUrl": "assets/images/marche.png"
  },
  {
    "id": "ch_108",
    "title": "Maître du Squat",
    "sport": "Musculation",
    "description": "Accumuler un total de 500 répétitions de squats.",
    "goalValue": 500,
    "deadline": "2026-11-28",
    "status": "actif",
    "imageUrl": "assets/images/musculation.png"
  },
  {
    "id": "ch_109",
    "title": "Prépa Semi-Marathon",
    "sport": "Course à pied",
    "description": "Courir 100 km pour se préparer pour le prochain semi-marathon.",
    "goalValue": 100,
    "deadline": "2026-12-05",
    "status": "actif",
    "imageUrl": "assets/images/running.png"
  },
  {
    "id": "ch_110",
    "title": "Défi Gainage Absolu",
    "sport": "Fitness",
    "description": "Accumuler un temps total de 60 minutes de planche/gainage.",
    "goalValue": 60,
    "deadline": "2026-11-18",
    "status": "inactif",
    "imageUrl": "assets/images/fitness.png"
  },
  {
    "id": "ch_111",
    "title": "Rando & Dénivelé",
    "sport": "Randonnée",
    "description": "Franchir un dénivelé positif total de 2000 mètres en montagne.",
    "goalValue": 2000,
    "deadline": "2026-11-22",
    "status": "actif",
    "imageUrl": "assets/images/randonnee.png"
  },
  {
    "id": "ch_112",
    "title": "Challenge Vitesse 5K",
    "sport": "Course à pied",
    "description": "Compléter 5 sessions individuelles de 5km de course rapide.",
    "goalValue": 5,
    "deadline": "2026-11-25",
    "status": "actif",
    "imageUrl": "assets/images/running.png"
  },
  {
    "id": "ch_113",
    "title": "Sculpture du Haut du Corps",
    "sport": "Musculation",
    "description": "Effectuer 400 tractions au cours du mois.",
    "goalValue": 400,
    "deadline": "2026-11-30",
    "status": "inactif",
    "imageUrl": "assets/images/musculation.png"
  },
  {
    "id": "ch_114",
    "title": "Flexibilité & Mobilité",
    "sport": "Yoga",
    "description": "Consacrer 180 minutes aux étirements et au travail de mobilité.",
    "goalValue": 180,
    "deadline": "2026-11-20",
    "status": "actif",
    "imageUrl": "assets/images/yoga.png"
  },
  {
    "id": "ch_115",
    "title": "Intervalle Sprint",
    "sport": "Course à pied",
    "description": "Réaliser 15 sessions de sprints fractionnés à haute intensité.",
    "goalValue": 15,
    "deadline": "2026-11-16",
    "status": "actif",
    "imageUrl": "assets/images/running.png"
  },
  {
    "id": "ch_116",
    "title": "Circuit Full Body",
    "sport": "Fitness",
    "description": "Compléter 12 entraînements complets en circuit pour tout le corps.",
    "goalValue": 12,
    "deadline": "2026-11-26",
    "status": "inactif",
    "imageUrl": "assets/images/fitness.png"
  },
  {
    "item": "ch_117",
    "id": "ch_117",
    "title": "Cyclisme Nocturne Urbain",
    "sport": "Cyclisme",
    "description": "Parcourir 80 km à vélo sur des pistes et routes urbaines.",
    "goalValue": 80,
    "deadline": "2026-11-19",
    "status": "actif",
    "imageUrl": "assets/images/cyclisme.png"
  },
  {
    "id": "ch_118",
    "title": "Défi Abdos d'Acier",
    "sport": "Fitness",
    "description": "Faire 1000 abdominaux au total sur une période de deux semaines.",
    "goalValue": 1000,
    "deadline": "2026-11-12",
    "status": "actif",
    "imageUrl": "assets/images/fitness.png"
  },
  {
    "id": "ch_119",
    "title": "Grande Marche d'Endurance",
    "sport": "Marche",
    "description": "Marcher une distance cumulée de 75 km.",
    "goalValue": 75,
    "deadline": "2026-11-29",
    "status": "inactif",
    "imageUrl": "assets/images/marche.png"
  },
  {
    "id": "ch_120",
    "title": "Force & Powerlifting",
    "sport": "Musculation",
    "description": "Compléter 20 séances intensives de travail de force basique.",
    "goalValue": 20,
    "deadline": "2026-11-30",
    "status": "actif",
    "imageUrl": "assets/images/musculation.png"
  },
  {
    "id": "ch_121",
    "title": "Natation Eau Libre",
    "sport": "Natation",
    "description": "Compléter 5 000 mètres au total de nage dynamique.",
    "goalValue": 5000,
    "deadline": "2026-11-24",
    "status": "actif",
    "imageUrl": "assets/images/natation.png"
  },
  {
    "id": "ch_122",
    "title": "Jogging du Matin",
    "sport": "Course à pied",
    "description": "Parcourir 30 km en petites sessions avant 8h00 du matin.",
    "goalValue": 30,
    "deadline": "2026-11-15",
    "status": "inactif",
    "imageUrl": "assets/images/running.png"
  },
  {
    "id": "ch_123",
    "title": "Pilates Core Power",
    "sport": "Yoga",
    "description": "Suivre et réussir 10 séances complètes de Pilates centrées sur le buste.",
    "goalValue": 10,
    "deadline": "2026-11-21",
    "status": "actif",
    "imageUrl": "assets/images/yoga.png"
  },
  {
    "id": "ch_124",
    "title": "Grimpeur du Week-end",
    "sport": "Cyclisme",
    "description": "Grimper 10 côtes ou cols exigeants à vélo.",
    "goalValue": 10,
    "deadline": "2026-11-27",
    "status": "actif",
    "imageUrl": "assets/images/cyclisme.png"
  },
  {
    "id": "ch_125",
    "title": "Burnout Burpees",
    "sport": "Fitness",
    "description": "Réaliser un total de 250 burpees au cours d'une semaine.",
    "goalValue": 250,
    "deadline": "2026-11-10",
    "status": "inactif",
    "imageUrl": "assets/images/fitness.png"
  },
  {
    "id": "ch_126",
    "title": "Ascension des Escaliers",
    "sport": "Marche",
    "description": "Montez l'équivalent de 50 étages ou volées d'escaliers.",
    "goalValue": 50,
    "deadline": "2026-11-22",
    "status": "actif",
    "imageUrl": "assets/images/marche.png"
  },
  {
    "id": "ch_127",
    "title": "Développé Épaules Halteres",
    "sport": "Musculation",
    "description": "Réaliser 300 répétitions de développé militaire aux haltères.",
    "goalValue": 300,
    "deadline": "2026-11-25",
    "status": "actif",
    "imageUrl": "assets/images/musculation.png"
  }
  
]; 


const participants = [
  {
    "id": "pa_1761512400000",
    "name": "Zakaria Afifi",
    "pseudo": "zakFit",
    "challengeIds": [
      "ch_101",
      "ch_125"
    ]
  },
  {
    "id": "pa_1761512400001",
    "name": "Amine Benali",
    "pseudo": "amine_runner",
    "challengeIds": [
      "ch_102",
      "ch_115"
    ]
  },
  {
    "id": "pa_1761512400002",
    "name": "Fatima Zohra Mansouri",
    "pseudo": "fz_fit",
    "challengeIds": [
      "ch_103"
    ]
  },
  {
    "id": "pa_1761512400003",
    "name": "Ahmed El Amrani",
    "pseudo": "ahmed_power",
    "challengeIds": [
      "ch_104",
      "ch_120"
    ]
  },
  {
    "id": "pa_1761512400004",
    "name": "Youssef Alami",
    "pseudo": "youssef_stride",
    "challengeIds": [
      "ch_105",
      "ch_110"
    ]
  },
  {
    "id": "pa_1761512400005",
    "name": "Khadija Chraibi",
    "pseudo": "khadija_pulse",
    "challengeIds": [
      "ch_106"
    ]
  },
  {
    "id": "pa_1761512400006",
    "name": "Omar Berrada",
    "pseudo": "omar_beast",
    "challengeIds": [
      "ch_107",
      "ch_118",
      "ch_128"
    ]
  },
  {
    "id": "pa_1761512400007",
    "name": "Sanae Tazi",
    "pseudo": "sanae_active",
    "challengeIds": [
      "ch_108"
    ]
  },
  {
    "id": "pa_1761512400008",
    "name": "Hamza Bennani",
    "pseudo": "hamza_iron",
    "challengeIds": [
      "ch_109",
      "ch_121"
    ]
  },
  {
    "id": "pa_1761512400009",
    "name": "Meryem Ouaali",
    "pseudo": "mery_strong",
    "challengeIds": [
      "ch_110",
      "ch_125"
    ]
  },
  {
    "id": "pa_1761512400010",
    "name": "Othmane Idrisi",
    "pseudo": "othmane_flex",
    "challengeIds": [
      "ch_111"
    ]
  },
  {
    "id": "pa_1761512400011",
    "name": "Imane Said",
    "pseudo": "imane_dash",
    "challengeIds": [
      "ch_112",
      "ch_124"
    ]
  },
  {
    "id": "pa_1761512400012",
    "name": "Mehdi Kabbaj",
    "pseudo": "mehdi_pacer",
    "challengeIds": [
      "ch_113"
    ]
  },
  {
    "id": "pa_1761512400013",
    "name": "Salma Fassi",
    "pseudo": "salma_cardio",
    "challengeIds": [
      "ch_114"
    ]
  },
  {
    "id": "pa_1761512400014",
    "name": "Bilal El Harrak",
    "pseudo": "bilal_lift",
    "challengeIds": [
      "ch_115",
      "ch_122"
    ]
  },
  {
    "id": "pa_1761512400015",
    "name": "Hajar Zerouali",
    "pseudo": "hajar_moves",
    "challengeIds": [
      "ch_116"
    ]
  },
  {
    "id": "pa_1761512400016",
    "name": "Ayoub Mountassir",
    "pseudo": "ayoub_speed",
    "challengeIds": [
      "ch_117"
    ]
  },
  {
    "id": "pa_1761512400017",
    "name": "Zineb Bennis",
    "pseudo": "zineb_fit",
    "challengeIds": [
      "ch_118",
      "ch_127"
    ]
  },
  {
    "id": "pa_1761512400018",
    "name": "Saad Bennaceur",
    "pseudo": "saad_sprint",
    "challengeIds": [
      "ch_119"
    ]
  },
  {
    "id": "pa_1761512400019",
    "name": "Noura Toumi",
    "pseudo": "noura_energy",
    "challengeIds": [
      "ch_120"
    ]
  },
  {
    "id": "pa_1761512400020",
    "name": "Reda Naciri",
    "pseudo": "reda_push",
    "challengeIds": [
      "ch_121"
    ]
  },
  {
    "id": "pa_1761512400021",
    "name": "Asmaa Belhaj",
    "pseudo": "asmaa_glow",
    "challengeIds": [
      "ch_122"
    ]
  },
  {
    "id": "pa_1761512400022",
    "name": "Tariq Slimani",
    "pseudo": "tariq_titan",
    "challengeIds": [
      "ch_123",
      "ch_128"
    ]
  },
  {
    "id": "pa_1761512400023",
    "name": "Houda Kassi",
    "pseudo": "houda_stride",
    "challengeIds": [
      "ch_124"
    ]
  },
  {
    "id": "pa_1761512400024",
    "name": "Walid Regragui",
    "pseudo": "walid_coach",
    "challengeIds": [
      "ch_125"
    ]
  },
  {
    "id": "pa_1761512400025",
    "name": "Chaimae Boutaleb",
    "pseudo": "chaimae_zen",
    "challengeIds": [
      "ch_126"
    ]
  },
  {
    "id": "pa_1761512400026",
    "name": "Karim Bouazza",
    "pseudo": "karim_apex",
    "challengeIds": [
      "ch_127"
    ]
  },
  {
    "id": "pa_1761512400027",
    "name": "Latifa Mahfoud",
    "pseudo": "latifa_pace",
    "challengeIds": [
      "ch_128"
    ]
  },
  {
    "id": "pa_1761512400040",
    "name": "Marouane Fellaini",
    "pseudo": "marouane_head",
    "challengeIds": [
      "ch_101",
      "ch_121"
    ]
  },
  {
    "id": "pa_1761512400041",
    "name": "Ghita Laraqui",
    "pseudo": "ghita_motion",
    "challengeIds": [
      "ch_102",
      "ch_122"
    ]
  },
  {
    "id": "pa_1761512400042",
    "name": "Hicham El Guerrouj",
    "pseudo": "hicham_legend",
    "challengeIds": [
      "ch_103",
      "ch_123"
    ]
  },
  {
    "id": "pa_1761512400043",
    "name": "Ikram Meziane",
    "pseudo": "ikram_flow",
    "challengeIds": [
      "ch_104",
      "ch_124"
    ]
  },
  {
    "id": "pa_1761512400044",
    "name": "Anass Jamai",
    "pseudo": "anass_surge",
    "challengeIds": [
      "ch_105",
      "ch_125"
    ]
  },
  {
    "id": "pa_1761512400045",
    "name": "Siham Bennani",
    "pseudo": "siham_stamina",
    "challengeIds": [
      "ch_106",
      "ch_126"
    ]
  },
  {
    "id": "pa_1761512400046",
    "name": "Ismail Kadiri",
    "pseudo": "ismail_pro",
    "challengeIds": [
      "ch_107",
      "ch_127"
    ]
  },
  {
    "id": "pa_1761512400047",
    "name": "Nawal El Moutawakel",
    "pseudo": "nawal_gold",
    "challengeIds": [
      "ch_108",
      "ch_128"
    ]
  },
  {
    "id": "pa_1761512400048",
    "name": "Moncef Slaoui",
    "pseudo": "moncef_focus",
    "challengeIds": [
      "ch_109"
    ]
  },
  {
    "id": "parser_49",
    "name": "Yasmina Khadra",
    "pseudo": "yasmina_fit",
    "challengeIds": [
      "ch_110"
    ]
  }
];

const performance =
[
  {
    "id": "pf_101",
    "challengeId": "ch_101",
    "participantId": "pa_1761512400000",
    "value": 12.5,
    "date": "2026-10-15"
  },
  {
    "id": "pf_102",
    "challengeId": "ch_101",
    "participantId": "pa_1761512400000",
    "value": 18.0,
    "date": "2026-10-20"
  },
  {
    "id": "pf_103",
    "challengeId": "ch_125",
    "participantId": "pa_1761512400000",
    "value": 50,
    "date": "2026-10-24"
  },
  {
    "id": "pf_104",
    "challengeId": "ch_102",
    "participantId": "pa_1761512400001",
    "value": 100,
    "date": "2026-10-18"
  },
  {
    "id": "pf_105",
    "challengeId": "ch_102",
    "participantId": "pa_1761512400001",
    "value": 100,
    "date": "2026-10-21"
  },
  {
    "id": "pf_106",
    "challengeId": "ch_115",
    "participantId": "pa_1761512400001",
    "value": 5,
    "date": "2026-10-23"
  },
  {
    "id": "pf_107",
    "challengeId": "ch_103",
    "participantId": "pa_1761512400002",
    "value": 45.0,
    "date": "2026-10-16"
  },
  {
    "id": "pf_109",
    "challengeId": "ch_104",
    "participantId": "pa_1761512400003",
    "value": 60,
    "date": "2026-10-19"
  },
  {
    "id": "pf_110",
    "challengeId": "ch_120",
    "participantId": "pa_1761512400003",
    "value": 5,
    "date": "2026-10-25"
  },
  {
    "id": "pf_111",
    "challengeId": "ch_105",
    "participantId": "pa_1761512400004",
    "value": 2.5,
    "date": "2026-10-17"
  },
  {
    "id": "pf_112",
    "challengeId": "ch_110",
    "participantId": "pa_1761512400004",
    "value": 20,
    "date": "2026-10-21"
  },
  {
    "id": "pf_113",
    "challengeId": "ch_106",
    "participantId": "pa_1761512400005",
    "value": 3,
    "date": "2026-10-20"
  },
  {
    "id": "pf_115",
    "challengeId": "ch_107",
    "participantId": "pa_1761512400006",
    "value": 11500,
    "date": "2026-10-18"
  },
  {
    "id": "pf_116",
    "challengeId": "ch_118",
    "participantId": "pa_1761512400006",
    "value": 200,
    "date": "2026-10-22"
  },
  {
    "id": "pf_117",
    "challengeId": "ch_108",
    "participantId": "pa_1761512400006",
    "value": 150,
    "date": "2026-10-19"
  },
  {
    "id": "pf_119",
    "challengeId": "ch_109",
    "participantId": "pa_1761512400006",
    "value": 21.0,
    "date": "2026-10-15"
  },
  {
    "id": "pf_120",
    "challengeId": "ch_121",
    "participantId": "pa_1761512400006",
    "value": 1500,
    "date": "2026-10-20"
  },
  {
    "id": "pf_121",
    "challengeId": "ch_110",
    "participantId": "pa_1761512400009",
    "value": 15,
    "date": "2026-10-17"
  },
  {
    "id": "pf_122",
    "challengeId": "ch_125",
    "participantId": "pa_1761512400006",
    "value": 60,
    "date": "2026-10-22"
  },
  {
    "id": "pf_123",
    "challengeId": "ch_111",
    "participantId": "pa_1761512400011",
    "value": 750,
    "date": "2026-10-19"
  },
  {
    "id": "pf_125",
    "challengeId": "ch_112",
    "participantId": "pa_1761512400011",
    "value": 2,
    "date": "2026-10-21"
  },
  {
    "id": "pf_126",
    "challengeId": "ch_124",
    "participantId": "pa_1761512400011",
    "value": 3,
    "date": "2026-10-24"
  },
  {
    "id": "pf_127",
    "challengeId": "ch_113",
    "participantId": "pa_1761512400011",
    "value": 50,
    "date": "2026-10-18"
  },
  {
    "id": "pf_129",
    "challengeId": "ch_114",
    "participantId": "pa_1761512400011",
    "value": 40,
    "date": "2026-10-20"
  },
  {
    "id": "pf_131",
    "challengeId": "ch_115",
    "participantId": "pa_1761512400011",
    "value": 4,
    "date": "2026-10-19"
  },
  {
    "id": "pf_132",
    "challengeId": "ch_122",
    "participantId": "pa_1761512400014",
    "value": 10.0,
    "date": "2026-10-22"
  },
  {
    "id": "pf_133",
    "challengeId": "ch_116",
    "participantId": "pa_1761512400015",
    "value": 3,
    "date": "2026-10-21"
  },
  {
    "id": "pf_135",
    "challengeId": "ch_117",
    "participantId": "pa_1761512400016",
    "value": 30.0,
    "date": "2026-10-17"
  },
  {
    "id": "pf_137",
    "challengeId": "ch_118",
    "participantId": "pa_1761512400017",
    "value": 150,
    "date": "2026-10-20"
  },
  {
    "id": "pf_138",
    "challengeId": "ch_127",
    "participantId": "pa_1761512400017",
    "value": 60,
    "date": "2026-10-24"
  },
  {
    "id": "pf_139",
    "challengeId": "ch_119",
    "participantId": "pa_1761512400018",
    "value": 18.0,
    "date": "2026-10-18"
  },
  {
    "id": "pf_141",
    "challengeId": "ch_120",
    "participantId": "pa_1761512400019",
    "value": 4,
    "date": "2026-10-19"
  },
  {
    "id": "pf_143",
    "challengeId": "ch_101",
    "participantId": "pa_1761512400040",
    "value": 20.0,
    "date": "2026-10-16"
  },
  {
    "id": "pf_144",
    "challengeId": "ch_102",
    "participantId": "pa_1761512400041",
    "value": 100,
    "date": "2026-10-20"
  },
  {
    "id": "pf_145",
    "challengeId": "ch_103",
    "participantId": "pa_1761512400042",
    "value": 50.0,
    "date": "2026-10-18"
  },
  {
    "id": "pf_146",
    "challengeId": "ch_104",
    "participantId": "pa_1761512400043",
    "value": 45,
    "date": "2026-10-21"
  },
  {
    "id": "pf_147",
    "challengeId": "ch_105",
    "participantId": "pa_1761512400044",
    "value": 3.5,
    "date": "2026-10-22"
  },
  {
    "id": "pf_148",
    "challengeId": "ch_106",
    "participantId": "pa_1761512400045",
    "value": 4,
    "date": "2026-10-23"
  },
  {
    "id": "pf_149",
    "challengeId": "ch_107",
    "participantId": "pa_1761512400046",
    "value": 13000,
    "date": "2026-10-24"
  },
  {
    "id": "pf_150",
    "challengeId": "ch_108",
    "participantId": "pa_1761512400047",
    "value": 200,
    "date": "2026-10-25"
  }
];