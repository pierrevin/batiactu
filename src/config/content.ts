// Configuration centralisée du contenu du site
// Modifiez ce fichier pour changer tout le contenu facilement

export const siteConfig = {
  // === MÉTADONNÉES ===
  title: "Site Scrolltelling Innovation Éditoriale BTP",
  
  // === HERO SECTION ===
  hero: {
    mainTitle: {
      part1: "Innover",
      part2: "sans trahir",
      part3: "l'info"
    },
    subtitle: "Transformer l'expérience éditoriale de batiactu avec",
    highlight: "7 formats innovants",
    
    // Section "Ce que veulent les pros"
    prosSection: {
      icon: "✓",
      title: "Ce que veulent les lecteurs",
      text: "Information",
      highlight: "rigoureuse, fiable, actionnable",
      badge: "Prêts à payer pour la qualité"
    },
    
    // Section "Leur réalité"
    realitySection: {
      icon: "!",
      title: "Leur réalité quotidienne",
      text: "70-400 notifications/jour",
      badge: "30 secondes par article"
    },
    
    // Thèse centrale
    thesis: {
      title: "Constat",
      text: "Le format est désormais aussi stratégique que le fond",
      highlight1: "Le format",
      highlight2: "aussi stratégique"
    },
    
    scrollText: "Découvrez les 7 formats"
  },

  // === NAVIGATION ===
  navigation: {
    sections: [
      { id: 'hero', title: 'Accueil' },
      { id: 'axis-1', title: 'Journalisme en Série' },
      { id: 'axis-2', title: 'Immersion Visuelle' },
      { id: 'axis-3', title: 'Réseaux Sociaux' },
      { id: 'axis-4', title: 'Formats Concis' },
      { id: 'axis-5', title: 'Ludification' },
      { id: 'axis-6', title: 'Formats Audio' },
      { id: 'axis-7', title: 'Communauté' },
      { id: 'tensions', title: 'Tensions' },
      { id: 'conclusion', title: 'Conclusion' }
    ]
  },

  // === AXES ÉDITORIAUX ===
  axes: [
    {
      id: 'axis-1',
      title: 'L\'actu en séries',
      subtitle: 'Créer des Rendez-vous narratifs',
      concept: 'Transformer l\'information en une narration feuilletonnante incitant les lecteurs à revenir pour la suite, créant une "dette d\'attention". Chaque épisode développe l\'histoire et se termine par une ouverture à suspense ou une tension.',
      examples: [
        {
          title: 'Les Jours – Obsessions',
          description: 'Modèle d\'abonnement basé sur les "obsessions" (séries d\'articles sur un sujet unique). Génère 2,5 fois plus d\'abonnements.',
          url: 'https://lesjours.fr/obsessions/la-fete-du-stream-6/ep1-bonnes-feuilles-pelly/'
        },
        {
          title: 'Le Monde - Les seigneurs de la tech (6 épisodes)',
          description: 'Série immersive sur les grands patrons de la tech, de Zukerberg à Musk.',
          url: 'https://www.lemonde.fr/series-d-ete/article/2025/07/23/de-mark-zuckerberg-a-elon-musk-le-boys-club-de-palo-alto_6623267_3451060.html'
        },
        {
          title: 'Le Figaro séries été',
          description: 'Même dans la présentation, les séries se démarquent (page moderne, pleine largeur, police différente du reste du site).',
          url: 'https://www.lefigaro.fr/economie/dossier/patrimoine-vivant-les-tresors-du-made-in-france'
        }
      ],
      applications: [
        'Sagas Grand Paris Express : Suivi épisodique des grands projets d\'infrastructure avec personnages clés',
        'RE2020 : La Bataille du Bas-Carbone : Saga réglementaire en épisodes avec enjeux et acteurs',
        'L\'Empire Vinci : Enquêtes sur les acteurs clés du BTP avec révélations progressives'
      ],
      practices: [
        'Définir un "fil rouge" fort : chaque série doit avoir une thématique claire et un arc narratif sur le long terme',
        'Structurer en chapitres digestes : découper l\'information complexe en épisodes réguliers et accessibles',
        'Utiliser l\'incarnation et les personnages : mettre en scène des acteurs clés (architectes, ingénieurs)',
        'Créer l\'attente : conclure chaque épisode par une ouverture ou un suspense',
        'Intégrer le multimédia : compléter la narration textuelle avec des visuels et éléments interactifs'
      ],
      faisabilite: 'Élevé',
      paywall: 'Élevé',
      icon: 'BookOpen'
    },
    {
      id: 'axis-2',
      title: 'Immersion visuelle & Data journalisme',
      subtitle: 'Raconter par l\'image et l\'interactivité',
      concept: 'Scrollytelling, visualisations interactives et narration en V. Transformer le lecteur en explorateur actif grâce à une structure narrative captivante. Le défilement orchestre l\'apparition et la transformation des éléments visuels.',
      examples: [
        {
          title: 'The Guardian – As countries scramble for minerals, the seabed beckons. Will mining it be a disaster? – visual explainer',
          description: 'Récit immersif sur l\’exploitation minière des grands fonds marins qui attire de plus en plus d’intérêts mais suscite de vives inquiétudes écologiquess.',
          url: 'https://www.theguardian.com/environment/ng-interactive/2025/mar/12/as-countries-scramble-for-minerals-the-seabed-beckons-will-mining-it-be-a-disaster-visual-explainer'
        },
        {
          title: 'The Pudding – Women\'s Pockets',
          description: 'Essais visuels basés sur des données rigoureuses, avec interactivité ludique et révélations progressives.',
          url: 'https://pudding.cool/2018/08/pockets/'
        },
        {
          title: 'Trente ans après la chute de l\’URSS, visualisez la dislocation de l\’empire soviétique, de la Lituanie au Kazakhstan',
          description: 'Scrollytelling qui montre par des cartes la sislocation de l\'URSS.',
          url: 'https://www.lemonde.fr/les-decodeurs/article/2021/12/20/trente-ans-apres-la-chute-de-l-urss-visualisez-la-dislocation-de-l-empire-sovietique-de-la-lituanie-au-kazakhstan_6106803_4355770.html/'
        }
      ],
      applications: [
        'Visites de chantier immersives : scrollytelling avec drone, animations 3D, infos matériaux interactives et visite virtuelle',
        'Dossiers techniques visuels : schémas d\'isolation animés avec fiches techniques interactives et comparateurs',
        'Le graphique de la semaine : dataviz sur coûts, délais, énergie, avec transparence méthodologique complète'
      ],
      practices: [
        'Orchestration au défilement : synchroniser l\'apparition des textes, images, vidéos et animations avec le scroll',
        'Design esthétique et fonctionnel : créer des visuels beaux et informatifs, décomposant les récits complexes',
        'Miser sur l\'interactivité : transformer le lecteur en explorateur actif via cartes, graphiques cliquables',
        'Structurer le récit à travers les données : utiliser les données comme moteur narratif principal',
        'Transparence méthodologique : toujours expliquer "Comment nous l\'avons vérifié"'
      ],
      // Colonne de droite - Focus techniques
      rightColumn: {
        vNarrative: {
          title: 'Focus : Narration en V',
          principe: 'Partir d\'une vue d\'ensemble, se resserrer sur un point de donnée crucial (le climax), puis élargir à nouveau pour montrer les conséquences globales.',
          avantage: 'Transforme une analyse complexe en récit captivant, avec un effet de tension et de relâchement comme dans une intrigue.',
          exemple: 'The Pudding suit cette structure dans ses visual essays (vue macro → détail frappant → ouverture sur le contexte plus large).'
        },
        scrollytelling: {
          title: 'Focus : Scrollytelling',
          principe: 'Synchroniser le contenu (texte, images, vidéos, animations) avec le défilement de la page pour créer une expérience narrative immersive.',
          avantage: 'Le lecteur devient acteur de sa propre découverte, avec un contrôle total sur le rythme de lecture et l\'exploration.',
          exemple: 'NYT Snow Fall : le texte apparaît progressivement pendant que les images et animations se déclenchent au scroll, créant une expérience cinématographique.'
        }
      },
      faisabilite: 'Moyen',
      paywall: 'Élevé',
      icon: 'BarChart3'
    },
    {
      id: 'axis-3',
      title: 'Formats inspirés des réseaux sociaux',
      subtitle: 'Capter l\'attention',
      concept: 'Codes natifs (vidéos verticales, stories, threads), vitrine pour rediriger vers le site. Créer du contenu adapté à chaque plateforme.',
      examples: [
        {
          title: 'Brut – Chaîne YouTube',
          description: 'Vidéos courtes, percutantes, verticales, sous-titrées, rythme rapide, narration incarnée.',
          url: 'https://youtube.com/shorts/1govVKZgpag?si=9hv4x_56yh-bhX-F'
        },
        {
          title: 'Vidéos décryptages du Monde',
          description: 'Adapte le journalisme sérieux avec humour et créativité, incarné par les journalistes de la rédaction.',
          url: 'https://www.instagram.com/reel/DDuYF1HNfsg/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
        },
        {
          title: 'The Economist – Instagram',
          description: 'Contenu visuel adapté aux codes de la plateforme avec infographies et stories.',
          url: 'https://www.instagram.com/theeconomist/'
        },
          {
            title: 'Alternative Eco',
            description: 'Le stopmotion en Playmobil.',
            url: 'https://www.instagram.com/reel/DOEP_pRle9p/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
          },
          {
            title: 'Les Echos',
            description: 'Vidéos verticales de décryptage avec des images agences',
            url: 'https://www.instagram.com/reel/DNEJZWuJj3f/?igsh=Y2dyaWFmMjMwajd3'
          }
      ],
      applications: [
        'Série "1 Minute Chantier" : décryptage de concepts BTP, normes, astuces pour TikTok, réels, shorts',
        'Portraits d\'experts au format Brut : interviews courtes d\'acteurs clés pour LinkedIn avec sous-titres stylisés',
        'Canal WhatsApp Batiactu : Broadcast pour push ciblés (3-5 par jour max) avec liens vers le site',
        'Story LinkedIn : teaser visuel d\'articles phares avec call-to-action clair'
      ],
      practices: [
        'Penser "mobile-first" et "vertical" : vidéos filmées et montées pour le plein écran smartphone',
        'Utiliser des sous-titres stylisés : essentiels pour la consommation sans son et pour l\'esthétique',
        'Accroche immédiate et rythme rapide : les premières secondes sont cruciales',
        'Narration incarnée et authentique : mettre en scène des journalistes qui montrent leur personnalité',
        'Transparence et sourçage : maintenir la rigueur journalistique quelque soit le format'
      ],
      faisabilite: 'Moyen',
      paywall: 'Moyen',
      icon: 'Smartphone'
    },
    {
      id: 'axis-4',
      title: 'Formats Structurés et Concis',
      subtitle: 'Respecter le Temps',
      concept: 'Clarté, concision, service au lecteur pressé. Structure prévisible qui construit la confiance et justifie le service premium.',
      examples: [
        {
          title: 'Axios – Smart Brevity',
          description: 'Articles en blocs courts et structurés, avec marqueurs en gras. Réduit le temps de lecture de 40%.',
          url: 'https://www.axios.com/2025/09/07/trump-hegseth-venezuela-border-military'
        },
        {
          title: 'Semafor – Semaform',
          description: 'identifier clairement les faits nouveaux, les opinions, etc. Structure l\'article en sections distinctes pour séparer faits et opinion ("The News", "The Reporter\'s View").',
          url: 'https://www.semafor.com/article/09/03/2025/googles-challenge-isnt-antitrust-consequences-but-ai-and-its-own-legacy'
        },
      ],
      applications: [
        'Chapeau Smart Brevity : résumé, "Pourquoi c\'est important", "ce qu\'il faut retenir" pour tous les articles',
        'Pour sujets clivants : structure en blocs "Les Faits", "Analyse Marché", "Objections des Pros"',
      ],
      practices: [
        'Discipline d\'écriture stricte : force à hiérarchiser drastiquement l\'information',
        'Standardiser la structure : utiliser des marqueurs en gras constants pour une lecture prévisible',
        'Utiliser les listes à puces et les espaces blancs : améliore la lisibilité et la scannabilité',
        'Séparer clairement les blocs d\'information : distinguer les faits de l\'analyse, des opinions',
        'Offrir une profondeur optionnelle : permettre d\'aller plus loin via des liens vers l\'article complet'
      ],
      faisabilite: 'Élevé',
      paywall: 'Élevé',
      icon: 'Clock'
    },
    {
      id: 'axis-5',
      title: 'Ludification & Outils Pratiques',
      subtitle: 'Faire Agir et transformer l\'info en outil',
      concept: 'Transformer le lecteur passif en acteur. Donner des outils utiles qui améliorent compréhension et mémorisation.',
      examples: [
        {
          title: 'Petocask (OPPBTP)',
          description: 'Jeu mobile pour former les apprentis BTP à la sécurité. Plus de 80% de rétention des notions.',
          url: 'https://www.oppbtp.fr/formation/prevention-securite/petocask'
        },
          {
          title: 'Le gouvernement Bayrou va-t-il tomber ? Explorez les différents scénarios avec notre simulateur',
          description: 'Graphique interactif pour simuler le vote de confiance.',
          url: 'https://www.lemonde.fr/les-decodeurs/article/2025/08/26/le-gouvernement-bayrou-va-t-il-tomber-explorez-les-differents-scenarios-avec-notre-simulateur_6635755_4355770.html'
        },
        {
          title: 'BatiPerf (FFB)',
          description: 'Outil en ligne de benchmark financier interactif pour l\'auto-évaluation des dirigeants.',
          url: 'https://www.ffbatiment.fr/outils-modeles-document/outils/batiperf'
        },
        {
          title: 'The Uber Game (Financial Times)',
          description: 'Serious game qui immerge le joueur dans la réalité d\'un chauffeur Uber.',
          url: 'https://ig.ft.com/uber-game/'
        },
        {
          title: 'NYT Buy Rent Calculator',
          description: 'Outil interactif d\'aide à la décision immobilière avec paramètres personnalisables.',
          url: 'https://www.nytimes.com/interactive/2014/upshot/buy-rent-calculator.html'
        }
      ],
      applications: [
        'Quiz réglementaires et tests de connaissance BTP : RE2020, normes de sécurité avec scoring et recommandations',
        'Outils de calcul B2B : simulateur de coût de construction',
        'Assistant Q/R chantier : agent IA pour questions sur sécurité, DTU, REP PMCB, sourcées Batiactu',
        'Spécial matériaux interactif : quiz "vrai/faux chantier", comparateurs avec fiches techniques'
      ],
      practices: [
        'Apporter une utilité directe et personnalisée : le contenu doit aider à résoudre un problème concret',
        'S\'associer à des experts : pour les calculateurs, la fiabilité des données et formules est primordiale',
        'Concevoir pour l\'action : chaque interaction doit déclencher une réaction immédiate et pertinente',
        'Intégrer le "serious game" : utiliser la simulation pour expliquer des systèmes complexes',
        'Clarté du feedback : pour les quiz, afficher un score et proposer des liens pour approfondir'
      ],
      faisabilite: 'Moyenne',
      paywall: 'Élevé',
      icon: 'Gamepad2'
    },
    {
      id: 'axis-6',
      title: 'Formats Audio',
      subtitle: 'Informer en mobilité',
      concept: 'Adapter aux temps morts (trajets, multitâche). audio/vidéo = 82% du trafic web. Nouvelle voix du média.',
      examples: [
        {
          title: 'Flash Info Batiactu',
          description: 'Continuez d\'explorer des pistes audio, potentiellement un vrai vecteur de trafic et d\'abonnés',
          url: 'https://www.batiactu.com/'
        },
        {
          title: 'New York Times Audio',
          description: 'Lecture audio automatique des articles via voix IA, directement dans l\'app.',
          url: 'https://www.nytimes.com/audio'
        }
      ],
      applications: [
        'Playlist quotidienne Pro Audio : 5-8 actualités courtes sur marchés, jurisprudence, matériaux',
        'Lecture Audio Automatique des Articles Premium : Pour longs dossiers réglementaires, retours d\'expérience'
      ],
      practices: [
        'Cibler la concision : formats courts (2-3 minutes) pour les flashs d\'actualité et micro-bulletins',
        'Qualité audio professionnelle : indispensable pour l\'écoute en mobilité',
        'Accessibilité : proposer des versions audio pour les articles longs, consommation en "temps mort"',
        'Utilisation intelligente de l\'IA : pour la narration automatique, outil au service des journalistes',
        'Diffusion multicanal : mettre les podcasts sur le site, l\'application et les plateformes de podcast'
      ],
      faisabilite: 'Élevé',
      paywall: 'Moyen',
      icon: 'Headphones'
    },
    {
      id: 'axis-7',
      title: 'Communauté et expertise collective',
      subtitle: 'Valoriser les Pairs',
      concept: 'Renforcer la confiance et créer de la valeur via la communauté. Le média devient facilitateur et amplificateur d\'expertise.',
      examples: [
        {
          title: 'Village de la Justice – Niveaux de lecture',
          description: 'Indicateurs sur les articles pour guider le public hétérogène.',
          url: 'https://www.village-justice.com/articles/obligation-reelle-environnementale-ore-outil-juridique-pour-proteger-les-arbres,54410.html'
        },
        {
          title: 'BBC Verify – Présentation',
          description: 'Unité qui publie des "explainer-clips" et décryptages sur la méthode de vérification.',
          url: 'https://www.bbc.com/news/bbcverify'
        },
        {
      title: 'Chaîne Whatsapp',
          description: 'Diffusion directe d\'actualités avec interaction communautaire (via des emoji).',
          url: 'https://www.lemonde.fr/le-monde-et-vous/article/2023/12/15/l-actualite-nous-rapproche-le-monde-lance-ses-chaines-whatsapp-un-nouvel-espace-pour-s-informer-et-echanger_6205967_6065879.html'
        }
      ],
      applications: [
        'Forum communautaire pour abonnés : AMA avec experts, résolution de problèmes entre pairs',
        'Cartouches "comment on l\'a vérifié" : pour les enquêtes (méthodologie, sources croisées)',
        'Indicateurs de niveau de lecture (ou de temps: Sur chaque article pour guider les lecteurs',
        'Groupes thématiques fermés : WhatsApp et autres plateformes pour discussions spécialisées'
      ],
      practices: [
        'Plateforme adaptée : choisir une plateforme communautaire adaptée au public B2B',
        'Valeur tangible pour les membres : offrir des avantages exclusifs (accès journalistes, AMA experts)',
        'Transparence journalistique : pour les enquêtes, détailler la méthodologie pour renforcer la confiance',
        'Personnalisation de l\'expérience : guider les lecteurs via des indicateurs de niveau de lecture',
        'Modération active : essentielle pour maintenir la qualité des échanges au sein de la communauté'
      ],
      faisabilite: 'Moyen',
      paywall: 'Moyen',
      icon: 'Users'
    }
  ],

  // === TENSIONS ===
  tensions: {
    header: {
      title: "Tensions & Contradictions",
      subtitle: "L'adoption de ces formats n'est pas sans enjeux. Comprendre ces contradictions est clé pour une",
      highlight: "stratégie équilibrée"
    },
    items: [
      {
        title: "Profondeur vs Concision",
        subtitle: "Le Dilemme du Temps",
        contradiction: "Les formats longs (séries, analyses Stratechry) visent la compréhension exhaustive. Les formats courts (Smart Brevity, TikTok) visent l'efficacité cognitive.",
        exemple: "Un dossier RE2020 détaillé est précieux, mais la plupart veulent un résumé opérationnel.",
        analyse: "Ce dilemme renvoie à la segmentation des usages : certains veulent « tout comprendre », d'autres « juste l'essentiel ».",
        gestion: "Décliner chaque contenu en 2 formats (version longue + version Smart Brevity).",
        icon: "Scale"
      },
      {
        title: "Gratuit vs Payant",
        subtitle: "L'Équilibre de la Valeur",
        contradiction: "Le gratuit pour notoriété/acquisition vs le payant pour valeur/fidélisation.",
        exemple: "Une vidéo LinkedIn attire de nouveaux lecteurs, mais l'analyse complète doit être réservée aux abonnés.",
        analyse: "Le gratuit agit comme « bande-annonce » ; le payant comme « film complet ».",
        gestion: "Stratégie d'entonnoir : gratuit comme teaser → payant comme aboutissement.",
        icon: "Users"
      },
      {
        title: "Humain vs IA",
        subtitle: "Le Défi de l'Authenticité",
        contradiction: "L'incarnation humaine (authenticité) vs l'automatisation (efficacité, personnalisation).",
        exemple: "Flash Info IA est rapide, mais la validation humaine garantit la crédibilité.",
        analyse: "L'IA est efficace pour la production, mais seule la voix humaine crée l'émotion et la confiance.",
        gestion: "IA = copilote, validation humaine systématique.",
        icon: "Bot"
      },
      {
        title: "Passif vs Actif",
        subtitle: "Le Choix du Mode",
        contradiction: "Formats passifs (podcasts, lecture auto) vs formats actifs (quiz, simulateurs).",
        exemple: "Certains pros préfèrent écouter un flash info, d'autres tester un simulateur ACV.",
        analyse: "Offrir une pluralité de modes permet d'élargir l'audience et de s'adapter aux temps disponibles.",
        gestion: "Offrir les 3 modes sur un même sujet (à écouter, à survoler, à explorer).",
        icon: "MousePointer"
      }
    ]
  },

  // === CONCLUSION ===
  conclusion: {
    title: "Recapitulatif",
    cards: [
      {
        title: "Se réinventer, sans bouleverser",
        icon: "Target",
        items: [
          "7 formats = leviers puissants pour enrichir l'offre Batiactu",
          "Créateur d'expériences à haute valeur ajoutée", 
          "Prioriser : ne pas tout faire, mais choisir les briques stratégiques"
        ]
      },
      {
        title: "Gestion stratégique",
        icon: "Lightbulb",
        items: [
          "Adopter une stratégie éditoriale moderne",
          "Embrasser les tensions et contradictions",
          "Créer une offre diversifiée et cohérente"
        ]
      },
      {
        title: "On se lance ?",
        icon: "Zap",
        question: "Quelle sera la première brique que nous poserons ?",
        subtitle: "Série ? Data immersive ? Outils pratiques ?",
      }
    ],
    finalQuote: {
      highlight: "Batiactu doit créer des expériences",
    }
  },

  // === MÉTHODE DU SABLIER ===
  sablierMethod: {
    title: "Oubliez la pyramide inversée, optez pour la méthode du sablier",
    subtitle: "Stratégie éditoriale pour articles premium",
    definition: {
      title: "Définition",
      content: "La méthode du sablier est une stratégie éditoriale adaptée aux articles derrière un paywall. <br><br><b>Principe : </b>donner assez d'éléments gratuits pour intéresser le lecteur, <b>mais retenir les réponses essentielles (explications, analyses, révélations) dans la partie réservée aux abonnés</b>. <p>Différence avec la pyramide inversée : au lieu de livrer toutes les infos clés d'entrée, <b>on structure l'article de façon à susciter une attente </b>et à inciter à l'abonnement. </p><br><b>Objectif :</b> transformer un lecteur curieux en abonné, en l'amenant progressivement au point de bascule (le \"col\" du sablier) où il veut absolument connaître la suite."
    },
    practices: [
      {
        title: "1. Soigner le trio Titre – Chapô – Attaque",
        content: "Titre : formuler une promesse ou une question (\"Pourquoi… ?\", \"Comment… ?\"), sans donner la réponse. Chapô : poser le contexte, livrer une info concrète, mais laisser subsister une question essentielle. Attaque : démarrer par une anecdote, une citation ou un chiffre fort, et éviter de répéter le chapô."
      },
      {
        title: "2. Bien placer le paywall",
        content: "Ni trop haut, ni trop bas : assez de matière gratuite pour que le lecteur sente la qualité, mais pas au point de répondre à la question-clé. Idéal : couper juste après un cliffhanger (question laissée en suspens, tension dramatique, donnée intrigante)."
      },
      {
        title: "3. Garder la valeur ajoutée en bas du sablier",
        content: "Mettre dans la partie abonnée : les explications de fond, les analyses exclusives, les données chiffrées détaillées et les témoignages experts. C'est la récompense pour l'abonné : le contenu qui justifie le paiement."
      },
      {
        title: "4. Adapter le degré de teasing",
        content: "Articles exclusifs / enquêtes → sablier fort (mystère, cliffhanger marqué). Brèves d'actualité → sablier léger : donner l'info brute gratuitement, mais réserver l'analyse pour les abonnés."
      },
      {
        title: "5. Tenir sa promesse",
        content: "Toujours répondre à la question posée par le titre ou le chapô dans la partie abonnée. Bannir le sensationnalisme creux : un titre racoleur sans réponse nuit à la confiance et à la fidélité des lecteurs."
      },
      {
        title: "6. Mesurer et ajuster",
        content: "Suivre le taux de scroll jusqu'au paywall et le taux de conversion. Ajuster la longueur de la partie gratuite et le placement de la coupure selon les retours."
      }
    ]
  }
};

// Mapping des icônes pour les composants
export const iconMap = {
  BookOpen: 'BookOpen',
  BarChart3: 'BarChart3', 
  Smartphone: 'Smartphone',
  Clock: 'Clock',
  Gamepad2: 'Gamepad2',
  Headphones: 'Headphones',
  Users: 'Users',
  Scale: 'Scale',
  Bot: 'Bot',
  MousePointer: 'MousePointer',
  Target: 'Target',
  Lightbulb: 'Lightbulb',
  Zap: 'Zap',
  AlertTriangle: 'AlertTriangle'
};