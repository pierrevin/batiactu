import React from 'react';
import { 
  BookOpen, 
  BarChart3, 
  Smartphone, 
  Clock, 
  Gamepad2, 
  Headphones, 
  Users 
} from 'lucide-react';
import { ScrollProgress } from './components/ScrollProgress';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { AxisCard } from './components/AxisCard';
import { TransitionSection } from './components/TransitionSection';
import { TensionsSection } from './components/TensionsSection';
import { Conclusion } from './components/Conclusion';

function App() {
  const sections = [
    { id: 'hero', title: 'Accueil' },
    { id: 'axis-1', title: 'Journalisme en Série' },
    { id: 'axis-2', title: 'Immersion Visuelle' },
    { id: 'axis-3', title: 'Réseaux Sociaux' },
    { id: 'axis-4', title: 'Formats Concis' },
    { id: 'axis-5', title: 'Ludification' },
    { id: 'axis-6', title: 'Formats Audio' },
    { id: 'axis-7', title: 'Communauté' },
    { id: 'tensions', title: 'Tensions' },
    { id: 'conclusion', title: 'Conclusion' },
  ];

  const axes = [
    {
      id: 'axis-1',
      title: 'Journalisme en Série',
      subtitle: 'Créer des Rendez-vous Narratifs',
      concept: 'Narration feuilletonnante, cliffhangers, fidélisation par épisodes. Transformer l\'information en récit captivant qui incite à revenir.',
      examples: [
        'Les Jours – Obsessions : Modèle d\'abonnement basé sur les "obsessions" (séries d\'articles sur un sujet unique). Génère 2,5 fois plus d\'abonnements.',
        'Le Figaro – L\'histoire vraie des faussaires de l\'art : Série immersive sur les génies du faux avec narration captivante.',
        'Libération – Et là, tout bascule : Format feuilleton pour raconter les basculements de société avec suspense.'
      ],
      applications: [
        'Sagas Grand Paris Express : Suivi épisodique des grands projets d\'infrastructure avec personnages clés',
        'RE2020 : La Bataille du Bas-Carbone : Saga réglementaire en épisodes avec enjeux et acteurs',
        'L\'Empire Vinci : Enquêtes sur les acteurs clés du BTP avec révélations progressives'
      ],
      practices: [
        'Définir un "fil rouge" fort : Chaque série doit avoir une thématique claire et un arc narratif sur le long terme',
        'Structurer en chapitres digestes : Découper l\'information complexe en épisodes réguliers et accessibles',
        'Utiliser l\'incarnation et les personnages : Mettre en scène des acteurs clés (architectes, ingénieurs)',
        'Créer l\'attente : Conclure chaque épisode par une ouverture ou un "cliffhanger"',
        'Intégrer le multimédia : Compléter la narration textuelle avec des visuels et éléments interactifs'
      ],
      faisabilite: 'Moyenne à Élevée',
      paywall: 'Élevé',
      icon: BookOpen
    },
    {
      id: 'axis-2',
      title: 'Immersion Visuelle & Data Journalisme',
      subtitle: 'Faire Explorer',
      concept: 'Scrollytelling, visualisations interactives et narration en V. Transformer le lecteur en explorateur actif grâce à une structure narrative captivante.',
      examples: [
        'The Guardian – Race to the bottom : Récit immersif sur l\'exploitation minière avec cartes interactives et infographies animées synchronisées.',
        'The Pudding – Women\'s Pockets : Essais visuels basés sur des données rigoureuses, avec interactivité ludique et révélations progressives.',
        'NYT – Snow Fall : Référence du scrollytelling immersif avec narration cinématographique et éléments multimédias.'
      ],
      applications: [
        'Visites de Chantier Immersives : Scrollytelling avec drone, animations 3D, infos matériaux interactives et visite virtuelle',
        'Dossiers Techniques Visuels : Schémas d\'isolation animés avec fiches techniques interactives et comparateurs',
        'Le Graphique de la Semaine : Data-viz sur coûts, délais, énergie, avec transparence méthodologique complète'
      ],
      practices: [
        'Orchestration au défilement : Synchroniser l\'apparition des textes, images, vidéos et animations avec le scroll',
        'Design esthétique et fonctionnel : Créer des visuels beaux et informatifs, décomposant les récits complexes',
        'Miser sur l\'interactivité : Transformer le lecteur en explorateur actif via cartes, graphiques cliquables',
        'Structurer le récit à travers les données : Utiliser les données comme moteur narratif principal',
        'Transparence méthodologique : Toujours expliquer "Comment nous l\'avons vérifié"'
      ],
      vNarrative: {
        principe: 'Partir d\'une vue d\'ensemble, se resserrer sur un point de donnée crucial (le climax), puis élargir à nouveau pour montrer les conséquences globales.',
        avantage: 'Transforme une analyse complexe en récit captivant, avec un effet de tension et de relâchement comme dans une intrigue.',
        exemple: 'The Pudding suit cette structure dans ses visual essays (vue macro → détail frappant → ouverture sur le contexte plus large).'
      },
      faisabilite: 'Élevée',
      paywall: 'Élevé',
      icon: BarChart3,
      vNarrative: {
        principe: 'Partir d\'une vue d\'ensemble, se resserrer sur un point de donnée crucial (le climax), puis élargir à nouveau pour montrer les conséquences globales.',
        avantage: 'Transforme une analyse complexe en récit captivant, avec un effet de tension et de relâchement comme dans une intrigue.',
        exemple: 'The Pudding suit cette structure dans ses visual essays (vue macro → détail frappant → ouverture sur le contexte plus large).'
      }
    },
    {
      id: 'axis-3',
      title: 'Formats Inspirés des Réseaux Sociaux',
      subtitle: 'Capter l\'Attention',
      concept: 'Codes natifs (vidéos verticales, stories, threads), vitrine pour rediriger vers le site. Créer du contenu adapté à chaque plateforme.',
      examples: [
        'Brut – Chaîne YouTube : Vidéos courtes, percutantes, verticales, sous-titrées, rythme rapide, narration incarnée.',
        'Washington Post – Compte TikTok : Adapte le journalisme sérieux avec humour et créativité, incarné par Dave Jorgenson.',
        'The Economist – Instagram : Contenu visuel adapté aux codes de la plateforme avec infographies et stories.',
        'BBC – WhatsApp Channels : Diffusion directe d\'actualités avec liens vers articles complets.'
      ],
      applications: [
        'Série "1 Minute Chantier" : Décryptage de concepts BTP, normes, astuces pour TikTok, Reels, Shorts',
        'Portraits d\'Experts au format Brut : Interviews courtes d\'acteurs clés pour LinkedIn avec sous-titres stylisés',
        'Canal WhatsApp Batiactu : Broadcast pour push ciblés (3-5 par jour max) avec liens vers le site',
        'Story LinkedIn : Teaser visuel d\'articles phares avec call-to-action clair'
      ],
      practices: [
        'Penser "mobile-first" et "vertical" : Vidéos filmées et montées pour le plein écran smartphone',
        'Utiliser des sous-titres stylisés : Essentiels pour la consommation sans son et pour l\'esthétique',
        'Accroche immédiate et rythme rapide : Les premières secondes sont cruciales',
        'Narration incarnée et authentique : Mettre en scène des journalistes qui montrent leur personnalité',
        'Transparence et sourçage : Maintenir la rigueur journalistique même sur TikTok'
      ],
      faisabilite: 'Faible à Moyenne',
      paywall: 'Faible',
      icon: Smartphone
    },
    {
      id: 'axis-4',
      title: 'Formats Structurés et Concis',
      subtitle: 'Respecter le Temps',
      concept: 'Clarté, concision, service au lecteur pressé. Structure prévisible qui construit la confiance et justifie le service premium.',
      examples: [
        'Axios – Smart Brevity : Articles en blocs courts et structurés, avec marqueurs en gras. Réduit le temps de lecture de 40%.',
        'Semafor – Semaform : Structure l\'article en sections distinctes pour séparer faits et opinion ("The News", "The Reporter\'s View").',
        'Stratechry – Newsletter : Newsletter d\'analyse en profondeur avec structure rigoureuse (sous-titres, listes à puces).'
      ],
      applications: [
        'Chapeau Smart Brevity : Résumé, "Pourquoi c\'est important", "Ce qu\'il faut retenir" pour tous les articles',
        'Batia-form pour sujets clivants : Structure en blocs "Les Faits", "Analyse Marché", "Objections des Pros"',
        'Newsletter d\'Analyse Stratégique Premium : Modèle Stratechry adapté au BTP avec analyse approfondie'
      ],
      practices: [
        'Discipline d\'écriture stricte : Force à hiérarchiser drastiquement l\'information',
        'Standardiser la structure : Utiliser des marqueurs en gras constants pour une lecture prévisible',
        'Utiliser les listes à puces et les espaces blancs : Améliore la lisibilité et la scannabilité',
        'Séparer clairement les blocs d\'information : Distinguer les faits de l\'analyse, des opinions',
        'Offrir une profondeur optionnelle : Permettre d\'aller plus loin via des liens vers l\'article complet'
      ],
      faisabilite: 'Faible à Moyenne',
      paywall: 'Élevé',
      icon: Clock
    },
    {
      id: 'axis-5',
      title: 'Ludification & Outils Pratiques',
      subtitle: 'Faire Agir',
      concept: 'Transformer le lecteur passif en acteur. Donner des outils utiles qui améliorent compréhension et mémorisation.',
      examples: [
        'Petocask (OPPBTP) : Jeu mobile pour former les apprentis BTP à la sécurité. Plus de 80% de rétention des notions.',
        'BatiPerf (FFB) : Outil en ligne de benchmark financier interactif pour l\'auto-évaluation des dirigeants.',
        'The Uber Game (Financial Times) : Serious game qui immerge le joueur dans la réalité d\'un chauffeur Uber.',
        'NYT Buy Rent Calculator : Outil interactif d\'aide à la décision immobilière avec paramètres personnalisables.'
      ],
      applications: [
        'Quiz Réglementaires et Tests de Connaissance BTP : RE2020, normes de sécurité avec scoring et recommandations',
        'Outils de Calcul B2B : Calculateur d\'Analyse de Cycle de Vie (ACV) simplifié, Simulateur de Coût de Construction',
        'Assistant Q/R Chantier : IA-guardrailed pour questions sur sécurité, DTU, REP PMCB, sourcées Batiactu',
        'Spécial Matériaux interactif : Quiz "vrai/faux chantier", comparateurs avec fiches techniques'
      ],
      practices: [
        'Apporter une utilité directe et personnalisée : Le contenu doit aider à résoudre un problème concret',
        'S\'associer à des experts : Pour les calculateurs, la fiabilité des données et formules est primordiale',
        'Concevoir pour l\'action : Chaque interaction doit déclencher une réaction immédiate et pertinente',
        'Intégrer le "Serious Game" : Utiliser la simulation pour expliquer des systèmes complexes',
        'Clarté du feedback : Pour les quiz, afficher un score et proposer des liens pour approfondir'
      ],
      faisabilite: 'Variable',
      paywall: 'Très Élevé',
      icon: Gamepad2
    },
    {
      id: 'axis-6',
      title: 'Formats Audio',
      subtitle: 'Informer en Mobilité',
      concept: 'Adapter aux temps morts (trajets, multitâche). Audio/vidéo = 82% du trafic web. Nouvelle voix du média.',
      examples: [
        'Flash Info Batiactu : Podcast quotidien de 3 minutes, généré en partie par IA, sur l\'actualité du BTP.',
        'Lexradio (Lexbase) : Podcast quotidien de 2 minutes sur l\'actualité juridique avec format très structuré.',
        'New York Times Audio : Lecture audio automatique des articles via voix IA, directement dans l\'app.'
      ],
      applications: [
        'Playlist Quotidienne Pro Audio : 5-8 actualités courtes sur marchés, jurisprudence, matériaux',
        'Lecture Audio Automatique des Articles Premium : Pour longs dossiers réglementaires, retours d\'expérience'
      ],
      practices: [
        'Cibler la concision : Formats courts (2-3 minutes) pour les flashs d\'actualité et micro-bulletins',
        'Qualité audio professionnelle : Indispensable pour l\'écoute en mobilité',
        'Accessibilité : Proposer des versions audio pour les articles longs, consommation en "temps mort"',
        'Utilisation intelligente de l\'IA : Pour la narration automatique, outil au service des journalistes',
        'Diffusion multicanal : Mettre les podcasts sur le site, l\'application et les plateformes de podcast'
      ],
      faisabilite: 'Faible à Moyenne',
      paywall: 'Élevé',
      icon: Headphones
    },
    {
      id: 'axis-7',
      title: 'Communauté et Expertise Collective',
      subtitle: 'Valoriser les Pairs',
      concept: 'Renforcer la confiance et créer de la valeur via la communauté. Le média devient facilitateur et amplificateur d\'expertise.',
      examples: [
        'Village de la Justice – Niveaux de lecture : Indicateurs sur les articles pour guider le public hétérogène.',
        'BBC Verify – Présentation : Unité qui publie des "explainer-clips" et décryptages sur la méthode de vérification.',
        'Digiday+ – Communautés exclusives : Communautés d\'abonnés (Slack, Discord, Circle.so) pour échanges et réseautage.',
        'WhatsApp Channels – BBC : Diffusion directe d\'actualités avec interaction communautaire.'
      ],
      applications: [
        'Forum Communautaire pour Abonnés : AMA avec experts, résolution de problèmes entre pairs',
        'Cartouches "Comment on l\'a vérifié" : Pour les enquêtes (méthodologie, sources croisées)',
        'Indicateurs de Niveau de Lecture : Sur chaque article pour guider les lecteurs',
        'Groupes thématiques fermés : WhatsApp et autres plateformes pour discussions spécialisées'
      ],
      practices: [
        'Plateforme adaptée : Choisir une plateforme communautaire adaptée au public B2B avec modération',
        'Valeur tangible pour les membres : Offrir des avantages exclusifs (accès journalistes, AMA experts)',
        'Transparence journalistique : Pour les enquêtes, détailler la méthodologie pour renforcer la confiance',
        'Personnalisation de l\'expérience : Guider les lecteurs via des indicateurs de niveau de lecture',
        'Modération active : Essentielle pour maintenir la qualité des échanges au sein de la communauté'
      ],
      faisabilite: 'Moyenne',
      paywall: 'Élevé',
      icon: Users
    }
  ];

  return (
    <div className="relative">
      <ScrollProgress />
      <Navigation sections={sections} />
      
      <Hero />
      
      {axes.map((axis, index) => (
        <React.Fragment key={axis.id}>
          <TransitionSection 
            number={index + 1}
            title={axis.title}
            subtitle={axis.subtitle || ''}
            icon={axis.icon}
          />
          <AxisCard 
            id={axis.id}
            title={axis.title}
            subtitle={axis.subtitle}
            concept={axis.concept}
            examples={axis.examples}
            applications={axis.applications}
            practices={axis.practices}
            faisabilite={axis.faisabilite}
            paywall={axis.paywall}
            icon={axis.icon}
            index={index}
          />
        </React.Fragment>
      ))}
      
      <TensionsSection />
      <Conclusion />
    </div>
  );
}

export default App;