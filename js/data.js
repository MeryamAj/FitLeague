const challenges = [
  {
    "id": "ch_101",
    "title": "Défi 50km Course à pied",
    "sport": "Course à pied",
    "description": "Courir une distance totale de 50 km avant la fin du mois.",
    "goalValue": 50,
    "deadline": "2027-11-30",
    "status": "Completed",
    "imageUrl": "Assets/images/running.png"
  },
  {
    "id": "ch_102",
    "title": "100 Pompes par jour",
    "sport": "Musculation",
    "description": "Réaliser 100 pompes chaque jour pendant une semaine complète.",
    "goalValue": 700,
    "deadline": "2027-11-05",
    "status": "Active",
    "imageUrl": "assets/images/musculation.png"
  },
  {
    "id": "ch_103",
    "title": "Marathon Cycliste 150km",
    "sport": "Cyclisme",
    "description": "Parcourir 150 kilomètres à vélo sur des parcours en extérieur.",
    "goalValue": 150,
    "deadline": "2027-11-25",
    "status": "Active",
    "imageUrl": "assets/images/cyclisme.png"
  },
  {
    "id": "ch_104",
    "title": "Yoga Matinal Doux",
    "sport": "Yoga",
    "description": "Pratiquer 20 minutes de séances de yoga réparateur chaque matin.",
    "goalValue": 300,
    "deadline": "2027-11-30",
    "status": "Completed",
    "imageUrl": "assets/images/yoga.png"
  },
  {
    "id": "ch_105",
    "title": "Endurance en Natation",
    "sport": "Natation",
    "description": "Nager une distance cumulée de 10 kilomètres en piscine.",
    "goalValue": 10,
    "deadline": "2027-11-20",
    "status": "Active",
    "imageUrl": "assets/images/natation.png"
  },
  {
    "id": "ch_106",
    "title": "Sprint HIIT Intensif",
    "sport": "Fitness",
    "description": "Compléter 10 routines d'entraînements à haute intensité (HIIT).",
    "goalValue": 10,
    "deadline": "2027-11-15",
    "status": "Active",
    "imageUrl": "assets/images/fitness.png"
  },
  {
    "id": "ch_107",
    "title": "10 000 Pas Quotidiens",
    "sport": "Marche",
    "description": "Maintenir une moyenne de 10 000 pas par jour pendant deux semaines.",
    "goalValue": 140000,
    "deadline": "2026-11-14",
    "status": "Completed",
    "imageUrl": "assets/images/marche.png"
  },
  {
    "id": "ch_108",
    "title": "Maître du Squat",
    "sport": "Musculation",
    "description": "Accumuler un total de 500 répétitions de squats.",
    "goalValue": 500,
    "deadline": "2027-11-28",
    "status": "Active",
    "imageUrl": "assets/images/musculation.png"
  },
  {
    "id": "ch_109",
    "title": "Prépa Semi-Marathon",
    "sport": "Course à pied",
    "description": "Courir 100 km pour se préparer pour le prochain semi-marathon.",
    "goalValue": 100,
    "deadline": "2027-12-05",
    "status": "Active",
    "imageUrl": "assets/images/running.png"
  },
  {
    "id": "ch_110",
    "title": "Défi Gainage Absolu",
    "sport": "Fitness",
    "description": "Accumuler un temps total de 60 minutes de planche/gainage.",
    "goalValue": 60,
    "deadline": "2027-11-18",
    "status": "Completed",
    "imageUrl": "assets/images/fitness.png"
  }
]; 


const participants = [
  {
    "id": "pa_101",
    "name": "Zakaria Afifi",
    "pseudo": "zakFit",
    "challengeIds": [
      "ch_101",
      "ch_125"
    ]
  },
  {
    "id": "pa_102",
    "name": "Amine Benali",
    "pseudo": "amine_runner",
    "challengeIds": [
      "ch_102",
      "ch_115"
    ]
  },
  {
    "id": "pa_103",
    "name": "Fatima Zohra Mansouri",
    "pseudo": "fz_fit",
    "challengeIds": [
      "ch_103"
    ]
  },
  {
    "id": "pa_104",
    "name": "Youssef El Amraoui",
    "pseudo": "youssef_fit",
    "challengeIds": [
      "ch_101",
      "ch_104"
    ]
  },
  {
    "id": "pa_105",
    "name": "Sara Idrissi",
    "pseudo": "sara_strong",
    "challengeIds": [
      "ch_102",
      "ch_110"
    ]
  },
  {
    "id": "pa_106",
    "name": "Mehdi Tazi",
    "pseudo": "mehdi_runner",
    "challengeIds": [
      "ch_103",
      "ch_125"
    ]
  },
  {
    "id": "pa_107",
    "name": "Salma Chraibi",
    "pseudo": "salma_cardio",
    "challengeIds": [
      "ch_101",
      "ch_115"
    ]
  },
  {
    "id": "pa_108",
    "name": "Omar Bennani",
    "pseudo": "omar_lift",
    "challengeIds": [
      "ch_104",
      "ch_120"
    ]
  },
  {
    "id": "pa_109",
    "name": "Mariam Bakkali",
    "pseudo": "mariam_fit",
    "challengeIds": [
      "ch_102",
      "ch_105"
    ]
  },
  {
    "id": "pa_110",
    "name": "Hamza Kacemi",
    "pseudo": "hamza_active",
    "challengeIds": [
      "ch_103",
      "ch_130"
    ]
  }
];

const performance = [
  {
    "id": "pf_101",
    "challengeId": "ch_101",
    "participantId": "pa_101",
    "value": 12.5,
    "date": "2026-10-15"
  },
  {
    "id": "pf_102",
    "challengeId": "ch_101",
    "participantId": "pa_101",
    "value": 18.0,
    "date": "2026-10-20"
  },
  {
    "id": "pf_103",
    "challengeId": "ch_110",
    "participantId": "pa_101",
    "value": 50,
    "date": "2026-10-24"
  },
  {
    "id": "pf_104",
    "challengeId": "ch_102",
    "participantId": "pa_102",
    "value": 14.2,
    "date": "2026-10-16"
  },
  {
    "id": "pf_105",
    "challengeId": "ch_105",
    "participantId": "pa_102",
    "value": 22.5,
    "date": "2026-10-22"
  },
  {
    "id": "pf_106",
    "challengeId": "ch_103",
    "participantId": "pa_103",
    "value": 30.0,
    "date": "2026-10-18"
  },
  {
    "id": "pf_107",
    "challengeId": "ch_101",
    "participantId": "pa_104",
    "value": 11.0,
    "date": "2026-10-15"
  },
  {
    "id": "pf_108",
    "challengeId": "ch_104",
    "participantId": "pa_104",
    "value": 45.0,
    "date": "2026-10-25"
  },
  {
    "id": "pf_109",
    "challengeId": "ch_102",
    "participantId": "pa_105",
    "value": 16.8,
    "date": "2026-10-17"
  },
  {
    "id": "pf_110",
    "challengeId": "ch_110",
    "participantId": "pa_105",
    "value": 12.0,
    "date": "2026-10-21"
  }
];