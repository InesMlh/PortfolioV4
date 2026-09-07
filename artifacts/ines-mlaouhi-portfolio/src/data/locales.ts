export type Language = 'en' | 'fr' | 'de' | 'es';

export const languageLabels: Record<Language, string> = {
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
  es: 'Español',
};

export type Translation = {
  home: string;
  work: string;
  services: string;
  about: string;
  trainings: string;
  contact: string;
  openMenu: string;
  closeMenu: string;
  language: string;
  backToTop: string;
  exploreWork: string;
  heroPrefix: string;
  heroArticle: string;
  heroWords: string[];
  heroWorld: string;
  heroEnding: string;
  heroBody: string;
  portfolioLabel: string;
  discover: string;
  discoverKicker: string;
  discoverTitle: string;
  discoverBody: string;
  selectedWork: string;
  selectedWorkNote: string;
  seeAll: string;
  marquee: string;
  servicesKicker: string;
  servicesTitle: string;
  servicesBody: string;
  servicesNote: string;
  blog: string;
  blogNote: string;
  readArticle: string;
  articleKicker: string;
  articleTitle: string;
  contactKicker: string;
  contactTitle: string;
  contactBody: string;
  startConversation: string;
  footerLine: string;
  archiveKicker: string;
  archiveTitle: string;
  archiveBody: string;
  noProjects: string;
  nextProject: string;
  role: string;
  category: string;
  tags: string;
  client: string;
  toolsLabel: string;
  visitProject: string;
  thinking: string;
  placeholder: string;
  name: string;
  email: string;
  message: string;
  sendMessage: string;
  emailReady: string;
  yourName: string;
  yourEmail: string;
  tellMe: string;
  aboutKicker: string;
  aboutTitle: string;
  aboutBody: string;
  toolsTitle: string;
  tools: string[];
  aboutIntroTitle: string;
  aboutIntroBody: string;
  aboutSecondBody: string;
  approachTitle: string;
  approachBody: string;
  portraitPlaceholder: string;
  contactHeading: string;
  filterProjects: string;
  primaryNavigation: string;
  loading: string;
  copyright: string;
  trainingKicker: string;
  trainingTitle: string;
  trainingBody: string;
  trainingLabel: string;
  trainingProjectBody: string;
  trainingApproachTitle: string;
  trainingApproachBody: string;
  notFoundKicker: string;
  notFoundTitle: string;
  notFoundBody: string;
  editorialProjects: string;
  scrollProgress: string;
  previousProject: string;
  allProjects: string;
  openImage: string;
  subject: string;
  subjectPlaceholder: string;
  serviceNeeded: string;
  chooseService: string;
  serviceOptions: string[];
  serviceFormKicker: string;
  serviceFormTitle: string;
  serviceFormBody: string;
  processTitle: string;
  processNote: string;
  processSteps: string[];
  previousPage: string;
  nextPage: string;
  projectDescription: string;
  projectDescriptionPlaceholder: string;
  requiredField: string;
  invalidEmail: string;
  chooseServiceError: string;
  formError: string;
  formSubmitError: string;
  emailFallback: string;
  menuPages: string;
  menuProjects: string;
  menuConnect: string;
  basedIn: string;
  projectContentNotice: string;
  analyticsTitle: string;
  analyticsBody: string;
  acceptAnalytics: string;
  declineAnalytics: string;
  categoryLabels: Record<string, string>;
  roleLabels: Record<string, string>;
  serviceItems: Array<{ title: string; description: string; skills: string }>;
};

export const translations: Record<Language, Translation> = {
  en: {
     home: 'Home', work: 'Projects', services: 'Services', about: 'About Me', trainings: 'Trainings', contact: 'Contact',
    openMenu: 'Open menu', closeMenu: 'Close menu', language: 'Language', backToTop: 'Back to top',
    exploreWork: 'Explore projects', heroPrefix: 'Designing', heroArticle: 'a', heroWords: ['Graphic', 'Brand', 'Experience'], heroWorld: 'world', heroEnding: 'with intent.', heroBody: 'I’m Ines, a graphic designer working across brand identity, UX/UI, motion and visual communication.', portfolioLabel: 'Portfolio',
    discover: 'Discover me', discoverKicker: 'A multidisciplinary designer',
    discoverTitle: 'One practice.<br />Many ways to make <em>meaning.</em>',
    discoverBody: 'I’m Ines Mlaouhi, a graphic designer working between brand identity, UX/UI, motion and visual communication. I like the moment when a clear idea becomes something people can feel, use and remember.',
    selectedWork: 'Selected work', selectedWorkNote: 'A few projects, studies<br />and visual experiments.', seeAll: 'View all projects', marquee: 'Visual communication · Graphic design · Brand identity · UX/UI · Motion ·',
    servicesKicker: 'What I can bring to the table', servicesTitle: 'Design that starts<br /><em>with listening.</em>',
    servicesBody: 'From a first question to a considered final frame, I bring visual thinking, digital understanding and a love of details that make an experience feel intentional.',
     servicesNote: 'Services / approach', serviceFormKicker: 'Start with a question', serviceFormTitle: 'Let’s talk about<br />your project.', serviceFormBody: 'If one of these services feels close to what you need, send a few details and I’ll reply by email.', processTitle: 'A clear path<br /><em>through the work.</em>', processNote: 'The process stays open and practical: understand the question, explore the right direction, then deliver a visual system that can be used with confidence.', processSteps: ['Listen / understand the brief', 'Explore / make the direction visible', 'Deliver / refine the final system'], blog: 'From the blog', blogNote: 'A conversation about<br />clarity and experience.',
    readArticle: 'Read the article', articleKicker: 'Attention Insight / Feature', articleTitle: 'From clarity to experience: a conversation with UX/UI designer Ines Mlaouhi.', contactKicker: 'Have a project in mind?', contactTitle: 'Let’s make<br /><em>something visible.</em>',
    contactBody: 'My inbox is open for thoughtful collaborations, design questions, workshops and new ideas.',
    startConversation: 'Start a conversation', footerLine: 'Graphic designer · Brand & UX/UI designer · Tunisia',
     archiveKicker: 'Portfolio / selected projects', archiveTitle: 'Projects with<br /><em>a point of view.</em>',
    archiveBody: 'A collection of identities, digital products, social stories, publications and experiments. Different formats, same curiosity.',
    noProjects: 'Nothing here yet. Try another lens.', nextProject: 'Next project', role: 'Role', category: 'Category', tags: 'Tags', client: 'Client', toolsLabel: 'Tools', visitProject: 'Visit project',
    thinking: 'The thinking<br /><em>behind it.</em>', placeholder: 'Image placeholder', name: 'Name', email: 'Email', message: 'Message',
     sendMessage: 'Send message', emailReady: 'Thanks — your message has been sent directly to Ines.',
    yourName: 'Your name', yourEmail: 'you@example.com', tellMe: 'Tell me a little about it...',
    aboutKicker: 'About / the person behind the work', aboutTitle: 'Hello, I’m<br /><em>Ines.</em>',
     aboutBody: 'Graphic designer, brand and UX/UI designer — curious about how a visual idea becomes something people can understand, use and remember.',
     approachTitle: 'How I approach<br /><em>projects.</em>', approachBody: 'I start by listening, stay open to questions and turn a clear idea into something people can understand, use and remember. My process is practical, observant and grounded in visual communication.',
     toolsTitle: 'Tools I<br /><em>reach for.</em>', tools: ['Figma / interface & prototyping', 'Adobe Illustrator / graphic language', 'Adobe Photoshop / image making', 'After Effects / motion studies', 'HTML, CSS & JavaScript / digital context'], aboutIntroTitle: 'Visual thinking<br /><em>with range.</em>', aboutIntroBody: 'I’m from Tunisia and currently pursuing a bachelor’s degree in multimedia communication at the Higher Institute of Multimedia Arts in Manouba. My interest in associative life, design and making things shapes the way I work: open, observant and hands-on.', aboutSecondBody: 'I’m building toward a practice in Brand and UX/UI Design, with a background in graphic design, visual communication and web development.', portraitPlaceholder: 'Portrait placeholder', contactHeading: 'Write<br /><em>to me.</em>', filterProjects: 'Filter projects', primaryNavigation: 'Primary navigation', loading: 'Loading portfolio', copyright: 'All rights reserved.', trainingKicker: 'Training / workshops', trainingTitle: 'Sharing the tools<br /><em>to look closer.</em>', trainingBody: 'A dedicated space for my graphic design training, workshops and educational activities.', trainingLabel: 'Graphic Design Training', trainingProjectBody: 'Teaching the fundamentals of visual communication through practical, generous exercises.', trainingApproachTitle: 'How I run<br /><em>trainings.</em>', trainingApproachBody: 'I create a welcoming space to ask questions, try things and build confidence through practice. Each workshop connects a clear visual principle to an exercise people can take into their own work.', notFoundKicker: '404 / archive', notFoundTitle: 'This page took<br /><em>another route.</em>', notFoundBody: 'The work you’re looking for isn’t here, but there’s plenty more to explore.', menuPages: 'Pages', menuProjects: 'Selected projects', menuConnect: 'Connect',
     basedIn: 'Based in Tunisia / working everywhere', analyticsTitle: 'A little note about analytics', analyticsBody: 'This portfolio uses privacy-conscious analytics to understand visits and improve the experience. Google Analytics only runs if you allow it.', acceptAnalytics: 'Accept', declineAnalytics: 'Decline',
      projectContentNotice: 'Project story in English draft — translations can be added to this project’s optional language fields.',
     editorialProjects: 'Editorial project slider', scrollProgress: 'Page scroll progress', previousProject: 'Previous project', allProjects: 'All projects', openImage: 'Open project image', previousPage: 'Previous', nextPage: 'Next',
     subject: 'Project / subject', subjectPlaceholder: 'What would you like to make?', serviceNeeded: 'Service needed', chooseService: 'Choose a service', serviceOptions: ['UX/UI Design', 'Graphic Design', 'Brand Identity', 'Motion Design', 'Training / Workshops', 'Other'], projectDescription: 'Message / project description', projectDescriptionPlaceholder: 'Tell me about the project, context and what you need...', requiredField: 'Required', invalidEmail: 'Please enter a valid email address.', chooseServiceError: 'Please choose a service.', formError: 'Please check the highlighted fields before sending.', formSubmitError: 'Your message could not be sent. Please try again in a moment.', emailFallback: 'The form service is not configured yet. Add the endpoint listed in the deployment guide.',
     categoryLabels: { All: 'All', 'UI/UX': 'UI/UX', 'UX/UI': 'UI/UX', 'Graphic Design': 'Graphic Design', 'Brand Identity': 'Brand Identity', 'Motion Design': 'Motion Design', Web: 'Web', Mobile: 'Mobile', 'Data Visualization': 'Data Visualization', Other: 'Other', 'Social Media': 'Social Media', Workshops: 'Workshops', '3D': '3D' },
    roleLabels: { 'UX/UI design': 'UX/UI design', '3D / motion design': '3D / motion design', 'Brand identity / digital': 'Brand identity / digital', 'Graphic design': 'Graphic design', 'Visual communication': 'Visual communication', 'Editorial design': 'Editorial design', 'Training / workshops': 'Training / workshops' },
    serviceItems: [
      { title: 'UX/UI design', description: 'I turn complex needs into interfaces that feel natural to use — from early flows and wireframes to a considered final UI.', skills: 'Research · User flows · Wireframes · UI systems' },
      { title: 'Graphic design', description: 'Posters, social content, editorial pieces and visual communication with a strong eye for hierarchy and rhythm.', skills: 'Art direction · Editorial · Print · Social' },
      { title: 'Brand identity', description: 'I build flexible identities that can hold a point of view across touchpoints without losing their human edge.', skills: 'Concept · Identity systems · Art direction' },
      { title: 'Motion design', description: 'Movement as a design material: a way to reveal, explain and give a visual language a little more life.', skills: '3D · Animation · Visual storytelling' },
    ],
  },
  fr: {
     home: 'Accueil', work: 'Projets', services: 'Services', about: 'À propos de moi', trainings: 'Formations', contact: 'Contact',
    openMenu: 'Ouvrir le menu', closeMenu: 'Fermer le menu', language: 'Langue', backToTop: 'Retour en haut',
    exploreWork: 'Découvrir mes projets', heroPrefix: 'Créer', heroArticle: 'un', heroWords: ['Graphique', 'Marque', 'Expérience'], heroWorld: 'monde', heroEnding: 'avec intention.', heroBody: 'Je suis Ines, designer graphique entre identité de marque, UX/UI, motion et communication visuelle.', portfolioLabel: 'Portfolio',
    discover: 'Me découvrir', discoverKicker: 'Une designer pluridisciplinaire',
    discoverTitle: 'Une pratique.<br />Plusieurs façons de créer du <em>sens.</em>',
    discoverBody: 'Je suis Ines Mlaouhi, designer graphique entre identité de marque, UX/UI, motion et communication visuelle. J’aime le moment où une idée claire devient quelque chose que l’on ressent, utilise et retient.',
    selectedWork: 'Projets sélectionnés', selectedWorkNote: 'Quelques projets, études<br />et expérimentations visuelles.', seeAll: 'Voir tous les projets', marquee: 'Communication visuelle · Design graphique · Identité de marque · UX/UI · Motion ·',
    servicesKicker: 'Ce que je peux apporter', servicesTitle: 'Le design commence<br /><em>par l’écoute.</em>',
    servicesBody: 'De la première question à l’image finale, j’associe pensée visuelle, compréhension du digital et attention aux détails.',
     servicesNote: 'Services / approche', serviceFormKicker: 'Commencer par une question', serviceFormTitle: 'Parlons de<br />votre projet.', serviceFormBody: 'Si l’un de ces services correspond à votre besoin, envoyez-moi quelques détails et je vous répondrai par email.', processTitle: 'Un chemin clair<br /><em>dans le projet.</em>', processNote: 'L’approche reste ouverte et concrète : comprendre la question, explorer la bonne direction, puis livrer un système visuel utilisable avec confiance.', processSteps: ['Écouter / comprendre le brief', 'Explorer / rendre la direction visible', 'Livrer / affiner le système final'], blog: 'Dans le blog', blogNote: 'Une conversation autour de<br />la clarté et de l’expérience.',
    readArticle: 'Lire l’article', articleKicker: 'Attention Insight / Article', articleTitle: 'De la clarté à l’expérience : conversation avec la designer UX/UI Ines Mlaouhi.', contactKicker: 'Un projet en tête ?', contactTitle: 'Rendons<br /><em>une idée visible.</em>',
    contactBody: 'Ma boîte mail est ouverte aux collaborations réfléchies, aux questions de design, aux ateliers et aux nouvelles idées.',
    startConversation: 'Démarrer une conversation', footerLine: 'Designer graphique · Designer marque & UX/UI · Tunisie',
    archiveKicker: 'Portfolio / projets sélectionnés', archiveTitle: 'Des projets avec<br /><em>un point de vue.</em>',
    archiveBody: 'Une collection d’identités, produits digitaux, publications, contenus sociaux et expérimentations.',
    noProjects: 'Rien ici pour le moment. Essayez un autre filtre.', nextProject: 'Projet suivant', role: 'Rôle', category: 'Catégorie', tags: 'Mots-clés', client: 'Client', toolsLabel: 'Outils', visitProject: 'Voir le projet',
    thinking: 'La réflexion<br /><em>derrière le projet.</em>', placeholder: 'Emplacement image', name: 'Nom', email: 'Email', message: 'Message',
     sendMessage: 'Envoyer le message', emailReady: 'Merci — votre message a été envoyé directement à Ines.',
    yourName: 'Votre nom', yourEmail: 'vous@exemple.com', tellMe: 'Parlez-moi un peu du projet...',
    aboutKicker: 'À propos / derrière le travail', aboutTitle: 'Bonjour, je suis<br /><em>Ines.</em>',
     aboutBody: 'Designer graphique, marque et UX/UI — curieuse de la manière dont une idée visuelle devient une expérience claire et mémorable.',
     approachTitle: 'Ma façon d’aborder<br /><em>les projets.</em>', approachBody: 'Je commence par écouter, je reste ouverte aux questions et je transforme une idée claire en quelque chose que l’on peut comprendre, utiliser et retenir. Mon approche est concrète, attentive et ancrée dans la communication visuelle.',
     toolsTitle: 'Les outils<br /><em>que j’utilise.</em>', tools: ['Figma / interfaces & prototypage', 'Adobe Illustrator / langage graphique', 'Adobe Photoshop / création d’images', 'After Effects / études de mouvement', 'HTML, CSS & JavaScript / contexte digital'], aboutIntroTitle: 'Une pensée visuelle<br /><em>avec amplitude.</em>', aboutIntroBody: 'Je viens de Tunisie et je poursuis actuellement une licence en communication multimédia à l’Institut Supérieur des Arts Multimédia de la Manouba. Mon intérêt pour la vie associative, le design et la création nourrit une façon de travailler ouverte, attentive et concrète.', aboutSecondBody: 'Je construis une pratique en identité de marque et UX/UI, avec un parcours en design graphique, communication visuelle et développement web.', portraitPlaceholder: 'Emplacement portrait', contactHeading: 'Écrivez<br /><em>-moi.</em>', filterProjects: 'Filtrer les projets', primaryNavigation: 'Navigation principale', loading: 'Chargement du portfolio', copyright: 'Tous droits réservés.', trainingKicker: 'Formations / ateliers', trainingTitle: 'Partager les outils<br /><em>pour mieux regarder.</em>', trainingBody: 'Un espace dédié à mes formations en design graphique, ateliers et activités pédagogiques.', trainingLabel: 'Formation en design graphique', trainingProjectBody: 'Enseigner les fondamentaux de la communication visuelle grâce à des exercices pratiques et généreux.', trainingApproachTitle: 'Ma façon d’animer<br /><em>les formations.</em>', trainingApproachBody: 'Je crée un espace accueillant pour poser des questions, essayer et gagner en confiance par la pratique. Chaque atelier relie un principe visuel clair à un exercice que l’on peut réutiliser dans son propre travail.', notFoundKicker: '404 / archive', notFoundTitle: 'Cette page a pris<br /><em>un autre chemin.</em>', notFoundBody: 'Le projet recherché n’est pas ici, mais il reste beaucoup à découvrir.', menuPages: 'Pages', menuProjects: 'Projets sélectionnés', menuConnect: 'Me contacter',
     basedIn: 'Basée en Tunisie / je travaille partout', analyticsTitle: 'Une petite note sur les statistiques', analyticsBody: 'Ce portfolio utilise des statistiques respectueuses de la vie privée pour comprendre les visites et améliorer l’expérience. Google Analytics ne fonctionne qu’avec votre accord.', acceptAnalytics: 'Accepter', declineAnalytics: 'Refuser',
     projectContentNotice: 'Étude de cas en anglais — des traductions peuvent être ajoutées dans les champs de langue du projet.',
      editorialProjects: 'Slider de projets éditoriaux', scrollProgress: 'Progression de la page', previousProject: 'Projet précédent', allProjects: 'Tous les projets', openImage: 'Ouvrir l’image du projet', previousPage: 'Précédent', nextPage: 'Suivant',
      subject: 'Projet / sujet', subjectPlaceholder: 'Que souhaitez-vous créer ?', serviceNeeded: 'Service recherché', chooseService: 'Choisir un service', serviceOptions: ['Design UX/UI', 'Design graphique', 'Identité de marque', 'Motion design', 'Formation / ateliers', 'Autre'], projectDescription: 'Message / description du projet', projectDescriptionPlaceholder: 'Parlez-moi du projet, de son contexte et de vos besoins...', requiredField: 'Obligatoire', invalidEmail: 'Veuillez saisir une adresse email valide.', chooseServiceError: 'Veuillez choisir un service.', formError: 'Vérifiez les champs signalés avant l’envoi.', formSubmitError: 'Votre message n’a pas pu être envoyé. Veuillez réessayer dans un instant.', emailFallback: 'Le service de formulaire n’est pas encore configuré. Ajoutez l’endpoint indiqué dans le guide de déploiement.',
     categoryLabels: { All: 'Tout', 'UI/UX': 'UI/UX', 'UX/UI': 'UI/UX', 'Graphic Design': 'Design graphique', 'Brand Identity': 'Identité de marque', 'Motion Design': 'Motion design', Web: 'Web', Mobile: 'Mobile', 'Data Visualization': 'Datavisualisation', Other: 'Autre', 'Social Media': 'Réseaux sociaux', Workshops: 'Ateliers', '3D': '3D' },
    roleLabels: { 'UX/UI design': 'design UX/UI', '3D / motion design': '3D / motion design', 'Brand identity / digital': 'identité de marque / digital', 'Graphic design': 'design graphique', 'Visual communication': 'communication visuelle', 'Editorial design': 'design éditorial', 'Training / workshops': 'formation / ateliers' },
    serviceItems: [
      { title: 'Design UX/UI', description: 'Je transforme des besoins complexes en interfaces naturelles, des parcours aux wireframes jusqu’à l’UI finale.', skills: 'Recherche · Parcours · Wireframes · Systèmes UI' },
      { title: 'Design graphique', description: 'Affiches, contenus sociaux, éditorial et communication visuelle avec une attention particulière à la hiérarchie.', skills: 'Direction artistique · Éditorial · Print · Social' },
      { title: 'Identité de marque', description: 'Je construis des identités souples qui gardent un point de vue humain sur tous les supports.', skills: 'Concept · Systèmes d’identité · Direction artistique' },
      { title: 'Motion design', description: 'Le mouvement comme matière pour révéler, expliquer et donner vie à un langage visuel.', skills: '3D · Animation · Narration visuelle' },
    ],
  },
  de: {
    home: 'Startseite', work: 'Projekte', services: 'Leistungen', about: 'Über mich', trainings: 'Workshops', contact: 'Kontakt',
    openMenu: 'Menü öffnen', closeMenu: 'Menü schließen', language: 'Sprache', backToTop: 'Nach oben',
    exploreWork: 'Meine Projekte entdecken', heroPrefix: 'Gestalten', heroArticle: 'eine', heroWords: ['Grafik', 'Marke', 'Erlebnis'], heroWorld: 'Welt', heroEnding: 'mit Absicht.', heroBody: 'Ich bin Ines, Grafikdesignerin für Markenidentität, UX/UI, Motion und visuelle Kommunikation.', portfolioLabel: 'Portfolio',
    discover: 'Mich entdecken', discoverKicker: 'Eine multidisziplinäre Designerin',
    discoverTitle: 'Eine Praxis.<br />Viele Wege, um <em>Bedeutung</em> zu schaffen.',
    discoverBody: 'Ich bin Ines Mlaouhi, Grafikdesignerin für Markenidentität, UX/UI, Motion und visuelle Kommunikation. Mich interessiert der Moment, in dem eine klare Idee spürbar, nutzbar und erinnerbar wird.',
    selectedWork: 'Ausgewählte Projekte', selectedWorkNote: 'Einige Projekte, Studien<br />und visuelle Experimente.', seeAll: 'Alle Projekte ansehen', marquee: 'Visuelle Kommunikation · Grafikdesign · Markenidentität · UX/UI · Motion ·',
    servicesKicker: 'Was ich einbringen kann', servicesTitle: 'Gutes Design beginnt<br /><em>mit Zuhören.</em>',
    servicesBody: 'Von der ersten Frage bis zum finalen Bild verbinde ich visuelles Denken, digitales Verständnis und Liebe zum Detail.',
     servicesNote: 'Leistungen / Ansatz', serviceFormKicker: 'Mit einer Frage beginnen', serviceFormTitle: 'Sprechen wir über<br />dein Projekt.', serviceFormBody: 'Wenn eine dieser Leistungen zu deinem Bedarf passt, schick mir ein paar Details und ich antworte per E-Mail.', processTitle: 'Ein klarer Weg<br /><em>durch das Projekt.</em>', processNote: 'Der Prozess bleibt offen und praktisch: die Frage verstehen, die richtige Richtung erkunden und ein visuelles System liefern, das sicher eingesetzt werden kann.', processSteps: ['Zuhören / Brief verstehen', 'Erkunden / Richtung sichtbar machen', 'Liefern / System verfeinern'], blog: 'Aus dem Blog', blogNote: 'Ein Gespräch über<br />Klarheit und Erfahrung.',
    readArticle: 'Artikel lesen', articleKicker: 'Attention Insight / Artikel', articleTitle: 'Von Klarheit zu Erfahrung: ein Gespräch mit der UX/UI-Designerin Ines Mlaouhi.', contactKicker: 'Ein Projekt im Kopf?', contactTitle: 'Lass uns<br /><em>etwas sichtbar machen.</em>',
    contactBody: 'Mein Posteingang ist offen für durchdachte Kooperationen, Designfragen, Workshops und neue Ideen.',
    startConversation: 'Gespräch beginnen', footerLine: 'Grafikdesignerin · Brand & UX/UI Designerin · Tunesien',
    archiveKicker: 'Portfolio / ausgewählte Projekte', archiveTitle: 'Arbeit mit<br /><em>einer Haltung.</em>',
    archiveBody: 'Eine Sammlung von Identitäten, digitalen Produkten, Social Stories, Publikationen und Experimenten.',
    noProjects: 'Noch nichts vorhanden. Versuche einen anderen Filter.', nextProject: 'Nächstes Projekt', role: 'Rolle', category: 'Kategorie', tags: 'Tags', client: 'Auftraggeber', toolsLabel: 'Werkzeuge', visitProject: 'Projekt ansehen',
    thinking: 'Die Idee<br /><em>dahinter.</em>', placeholder: 'Bildplatzhalter', name: 'Name', email: 'E-Mail', message: 'Nachricht',
     sendMessage: 'Nachricht senden', emailReady: 'Danke — deine Nachricht wurde direkt an Ines gesendet.',
    yourName: 'Dein Name', yourEmail: 'du@beispiel.de', tellMe: 'Erzähl mir etwas darüber...',
    aboutKicker: 'Über mich / hinter der Arbeit', aboutTitle: 'Hallo, ich bin<br /><em>Ines.</em>',
     aboutBody: 'Grafik-, Brand- und UX/UI-Designerin — neugierig darauf, wie eine visuelle Idee verständlich und erinnerbar wird.',
     approachTitle: 'So gehe ich<br /><em>Projekte an.</em>', approachBody: 'Ich beginne mit Zuhören, bleibe offen für Fragen und übersetze eine klare Idee in etwas Verständliches, Nutzbares und Erinnerbares. Mein Ansatz ist praktisch, aufmerksam und visuell fundiert.',
     toolsTitle: 'Meine<br /><em>Werkzeuge.</em>', tools: ['Figma / Interfaces & Prototyping', 'Adobe Illustrator / grafische Sprache', 'Adobe Photoshop / Bildgestaltung', 'After Effects / Bewegungsstudien', 'HTML, CSS & JavaScript / digitaler Kontext'], aboutIntroTitle: 'Visuelles Denken<br /><em>mit Weite.</em>', aboutIntroBody: 'Ich komme aus Tunesien und studiere derzeit Multimedia-Kommunikation am Higher Institute of Multimedia Arts in Manouba. Mein Interesse an Vereinsleben, Design und dem Machen prägt meine offene, aufmerksame und praktische Arbeitsweise.', aboutSecondBody: 'Ich entwickle eine Praxis in Brand- und UX/UI-Design, mit einem Hintergrund in Grafikdesign, visueller Kommunikation und Webentwicklung.', portraitPlaceholder: 'Portrait-Platzhalter', contactHeading: 'Schreib<br /><em>mir.</em>', filterProjects: 'Projekte filtern', primaryNavigation: 'Hauptnavigation', loading: 'Portfolio wird geladen', copyright: 'Alle Rechte vorbehalten.', trainingKicker: 'Training / Workshops', trainingTitle: 'Werkzeuge teilen,<br /><em>um genauer zu sehen.</em>', trainingBody: 'Ein eigener Bereich für Grafikdesign-Trainings, Workshops und Bildungsaktivitäten.', trainingLabel: 'Grafikdesign-Training', trainingProjectBody: 'Grundlagen visueller Kommunikation durch praktische und großzügige Übungen vermitteln.', trainingApproachTitle: 'So gestalte ich<br /><em>Trainings.</em>', trainingApproachBody: 'Ich schaffe einen offenen Raum zum Fragen, Ausprobieren und Wachsen durch Praxis. Jeder Workshop verbindet ein klares visuelles Prinzip mit einer Übung, die du in deine eigene Arbeit mitnehmen kannst.', notFoundKicker: '404 / Archiv', notFoundTitle: 'Diese Seite nahm<br /><em>einen anderen Weg.</em>', notFoundBody: 'Das gesuchte Projekt ist nicht hier, aber es gibt noch viel zu entdecken.', menuPages: 'Seiten', menuProjects: 'Ausgewählte Projekte', menuConnect: 'Kontakt',
     basedIn: 'In Tunesien / arbeite überall', analyticsTitle: 'Ein Hinweis zu Analytics', analyticsBody: 'Dieses Portfolio nutzt datenschutzfreundliche Statistiken, um Besuche zu verstehen und die Erfahrung zu verbessern. Google Analytics läuft nur mit deiner Zustimmung.', acceptAnalytics: 'Akzeptieren', declineAnalytics: 'Ablehnen',
     projectContentNotice: 'Projektgeschichte als englischer Entwurf — Übersetzungen können in den optionalen Sprachfeldern ergänzt werden.',
      editorialProjects: 'Slider für Editorial-Projekte', scrollProgress: 'Seitenfortschritt', previousProject: 'Vorheriges Projekt', allProjects: 'Alle Projekte', openImage: 'Projektbild öffnen', previousPage: 'Zurück', nextPage: 'Weiter',
      subject: 'Projekt / Thema', subjectPlaceholder: 'Was möchtest du gestalten?', serviceNeeded: 'Gesuchte Leistung', chooseService: 'Leistung auswählen', serviceOptions: ['UX/UI Design', 'Grafikdesign', 'Markenidentität', 'Motion Design', 'Training / Workshops', 'Andere'], projectDescription: 'Nachricht / Projektbeschreibung', projectDescriptionPlaceholder: 'Erzähl mir vom Projekt, Kontext und deinen Bedürfnissen...', requiredField: 'Pflichtfeld', invalidEmail: 'Bitte gib eine gültige E-Mail-Adresse ein.', chooseServiceError: 'Bitte wähle eine Leistung.', formError: 'Bitte überprüfe die markierten Felder.', formSubmitError: 'Deine Nachricht konnte nicht gesendet werden. Bitte versuche es gleich noch einmal.', emailFallback: 'Der Formularservice ist noch nicht konfiguriert. Füge den Endpoint aus dem Deployment-Leitfaden hinzu.',
     categoryLabels: { All: 'Alle', 'UI/UX': 'UI/UX', 'UX/UI': 'UI/UX', 'Graphic Design': 'Grafikdesign', 'Brand Identity': 'Markenidentität', 'Motion Design': 'Motion Design', Web: 'Web', Mobile: 'Mobile', 'Data Visualization': 'Datenvisualisierung', Other: 'Andere', 'Social Media': 'Social Media', Workshops: 'Workshops', '3D': '3D' },
    roleLabels: { 'UX/UI design': 'UX/UI-Design', '3D / motion design': '3D / Motion Design', 'Brand identity / digital': 'Markenidentität / digital', 'Graphic design': 'Grafikdesign', 'Visual communication': 'Visuelle Kommunikation', 'Editorial design': 'Editorial Design', 'Training / workshops': 'Training / Workshops' },
    serviceItems: [
      { title: 'UX/UI Design', description: 'Ich verwandle komplexe Anforderungen in natürliche Interfaces – von Flows und Wireframes bis zur finalen UI.', skills: 'Recherche · User Flows · Wireframes · UI-Systeme' },
      { title: 'Grafikdesign', description: 'Poster, Social Content, Editorial und visuelle Kommunikation mit einem sicheren Gefühl für Hierarchie und Rhythmus.', skills: 'Art Direction · Editorial · Print · Social' },
      { title: 'Markenidentität', description: 'Ich entwickle flexible Identitäten, die über alle Kontaktpunkte eine menschliche Haltung bewahren.', skills: 'Konzept · Identitätssysteme · Art Direction' },
      { title: 'Motion Design', description: 'Bewegung als Gestaltungsmaterial: zum Enthüllen, Erklären und Beleben einer visuellen Sprache.', skills: '3D · Animation · Visuelles Storytelling' },
    ],
  },
  es: {
    home: 'Inicio', work: 'Proyectos', services: 'Servicios', about: 'Sobre mí', trainings: 'Formación', contact: 'Contacto',
    openMenu: 'Abrir menú', closeMenu: 'Cerrar menú', language: 'Idioma', backToTop: 'Volver arriba',
    exploreWork: 'Explora mi trabajo', heroPrefix: 'Diseñar', heroArticle: 'un', heroWords: ['Gráfico', 'Marca', 'Experiencia'], heroWorld: 'mundo', heroEnding: 'con intención.', heroBody: 'Soy Ines, diseñadora gráfica entre identidad de marca, UX/UI, motion y comunicación visual.', portfolioLabel: 'Portfolio',
    discover: 'Descúbreme', discoverKicker: 'Una diseñadora multidisciplinar',
    discoverTitle: 'Una práctica.<br />Muchas formas de crear <em>sentido.</em>',
    discoverBody: 'Soy Ines Mlaouhi, diseñadora gráfica entre identidad de marca, UX/UI, motion y comunicación visual. Me interesa cuando una idea clara se convierte en algo que se puede sentir, usar y recordar.',
    selectedWork: 'Proyectos seleccionados', selectedWorkNote: 'Algunos proyectos, estudios<br />y experimentos visuales.', seeAll: 'Ver todos los proyectos', marquee: 'Comunicación visual · Diseño gráfico · Identidad de marca · UX/UI · Motion ·',
    servicesKicker: 'Lo que puedo aportar', servicesTitle: 'El buen diseño empieza<br /><em>escuchando.</em>',
    servicesBody: 'Desde la primera pregunta hasta la imagen final, combino pensamiento visual, comprensión digital y atención a los detalles.',
     servicesNote: 'Servicios / enfoque', serviceFormKicker: 'Empezar con una pregunta', serviceFormTitle: 'Hablemos de<br />tu proyecto.', serviceFormBody: 'Si uno de estos servicios se acerca a lo que necesitas, envíame algunos detalles y responderé por email.', processTitle: 'Un camino claro<br /><em>por el proyecto.</em>', processNote: 'El proceso se mantiene abierto y práctico: entender la pregunta, explorar la dirección adecuada y entregar un sistema visual que se pueda usar con confianza.', processSteps: ['Escuchar / entender el brief', 'Explorar / hacer visible la dirección', 'Entregar / afinar el sistema final'], blog: 'Desde el blog', blogNote: 'Una conversación sobre<br />claridad y experiencia.',
    readArticle: 'Leer el artículo', articleKicker: 'Attention Insight / Artículo', articleTitle: 'De la claridad a la experiencia: una conversación con la diseñadora UX/UI Ines Mlaouhi.', contactKicker: '¿Tienes un proyecto?', contactTitle: 'Hagamos<br /><em>algo visible.</em>',
    contactBody: 'Mi bandeja está abierta a colaboraciones cuidadas, preguntas de diseño, talleres y nuevas ideas.',
    startConversation: 'Empezar una conversación', footerLine: 'Diseñadora gráfica · Diseñadora de marca y UX/UI · Túnez',
    archiveKicker: 'Portfolio / proyectos seleccionados', archiveTitle: 'Trabajo con<br /><em>un punto de vista.</em>',
    archiveBody: 'Una colección de identidades, productos digitales, historias sociales, publicaciones y experimentos.',
    noProjects: 'Todavía no hay nada aquí. Prueba otro filtro.', nextProject: 'Siguiente proyecto', role: 'Rol', category: 'Categoría', tags: 'Etiquetas', client: 'Cliente', toolsLabel: 'Herramientas', visitProject: 'Ver proyecto',
    thinking: 'La idea<br /><em>detrás.</em>', placeholder: 'Espacio para imagen', name: 'Nombre', email: 'Email', message: 'Mensaje',
     sendMessage: 'Enviar mensaje', emailReady: 'Gracias — tu mensaje se ha enviado directamente a Ines.',
    yourName: 'Tu nombre', yourEmail: 'tu@ejemplo.com', tellMe: 'Cuéntame un poco sobre el proyecto...',
    aboutKicker: 'Sobre mí / detrás del trabajo', aboutTitle: 'Hola, soy<br /><em>Ines.</em>',
     aboutBody: 'Diseñadora gráfica, de marca y UX/UI — curiosa por cómo una idea visual se convierte en algo claro y memorable.',
     approachTitle: 'Cómo abordo<br /><em>los proyectos.</em>', approachBody: 'Empiezo escuchando, mantengo la curiosidad ante las preguntas y convierto una idea clara en algo que se puede entender, usar y recordar. Mi enfoque es práctico, atento y basado en la comunicación visual.',
     toolsTitle: 'Las herramientas<br /><em>que uso.</em>', tools: ['Figma / interfaces y prototipos', 'Adobe Illustrator / lenguaje gráfico', 'Adobe Photoshop / creación de imágenes', 'After Effects / estudios de movimiento', 'HTML, CSS y JavaScript / contexto digital'], aboutIntroTitle: 'Pensamiento visual<br /><em>con amplitud.</em>', aboutIntroBody: 'Soy de Túnez y actualmente estudio una licenciatura en comunicación multimedia en el Higher Institute of Multimedia Arts de Manouba. Mi interés por la vida asociativa, el diseño y la creación da forma a una manera de trabajar abierta, atenta y práctica.', aboutSecondBody: 'Estoy construyendo una práctica en diseño de marca y UX/UI, con experiencia en diseño gráfico, comunicación visual y desarrollo web.', portraitPlaceholder: 'Espacio para retrato', contactHeading: 'Escríbeme<br /><em>a mí.</em>', filterProjects: 'Filtrar proyectos', primaryNavigation: 'Navegación principal', loading: 'Cargando portfolio', copyright: 'Todos los derechos reservados.', trainingKicker: 'Formación / talleres', trainingTitle: 'Compartir herramientas<br /><em>para mirar mejor.</em>', trainingBody: 'Un espacio dedicado a mis formaciones de diseño gráfico, talleres y actividades educativas.', trainingLabel: 'Formación en diseño gráfico', trainingProjectBody: 'Enseñar los fundamentos de la comunicación visual con ejercicios prácticos y generosos.', trainingApproachTitle: 'Cómo desarrollo<br /><em>las formaciones.</em>', trainingApproachBody: 'Creo un espacio acogedor para preguntar, probar y ganar confianza con la práctica. Cada taller conecta un principio visual claro con un ejercicio que se puede llevar al propio trabajo.', notFoundKicker: '404 / archivo', notFoundTitle: 'Esta página tomó<br /><em>otro camino.</em>', notFoundBody: 'El proyecto que buscas no está aquí, pero queda mucho por explorar.', menuPages: 'Páginas', menuProjects: 'Proyectos seleccionados', menuConnect: 'Contacto',
     basedIn: 'En Túnez / trabajando en todas partes', analyticsTitle: 'Una nota sobre las estadísticas', analyticsBody: 'Este portfolio utiliza estadísticas respetuosas con la privacidad para comprender las visitas y mejorar la experiencia. Google Analytics solo funciona con tu permiso.', acceptAnalytics: 'Aceptar', declineAnalytics: 'Rechazar',
     projectContentNotice: 'Caso de estudio en inglés — se pueden añadir traducciones en los campos de idioma opcionales del proyecto.',
      editorialProjects: 'Slider de proyectos editoriales', scrollProgress: 'Progreso de la página', previousProject: 'Proyecto anterior', allProjects: 'Todos los proyectos', openImage: 'Abrir imagen del proyecto', previousPage: 'Anterior', nextPage: 'Siguiente',
      subject: 'Proyecto / asunto', subjectPlaceholder: '¿Qué te gustaría crear?', serviceNeeded: 'Servicio necesario', chooseService: 'Elegir un servicio', serviceOptions: ['Diseño UX/UI', 'Diseño gráfico', 'Identidad de marca', 'Motion design', 'Formación / talleres', 'Otro'], projectDescription: 'Mensaje / descripción del proyecto', projectDescriptionPlaceholder: 'Cuéntame sobre el proyecto, su contexto y lo que necesitas...', requiredField: 'Obligatorio', invalidEmail: 'Introduce un email válido.', chooseServiceError: 'Elige un servicio.', formError: 'Revisa los campos marcados antes de enviar.', formSubmitError: 'No se ha podido enviar tu mensaje. Vuelve a intentarlo en un momento.', emailFallback: 'El servicio de formularios aún no está configurado. Añade el endpoint del manual de despliegue.',
     categoryLabels: { All: 'Todo', 'UI/UX': 'UI/UX', 'UX/UI': 'UI/UX', 'Graphic Design': 'Diseño gráfico', 'Brand Identity': 'Identidad de marca', 'Motion Design': 'Motion design', Web: 'Web', Mobile: 'Móvil', 'Data Visualization': 'Visualización de datos', Other: 'Otro', 'Social Media': 'Redes sociales', Workshops: 'Talleres', '3D': '3D' },
    roleLabels: { 'UX/UI design': 'diseño UX/UI', '3D / motion design': '3D / motion design', 'Brand identity / digital': 'identidad de marca / digital', 'Graphic design': 'diseño gráfico', 'Visual communication': 'comunicación visual', 'Editorial design': 'diseño editorial', 'Training / workshops': 'formación / talleres' },
    serviceItems: [
      { title: 'Diseño UX/UI', description: 'Convierto necesidades complejas en interfaces naturales, desde los flujos y wireframes hasta la UI final.', skills: 'Investigación · Flujos · Wireframes · Sistemas UI' },
      { title: 'Diseño gráfico', description: 'Carteles, contenido social, editorial y comunicación visual con una mirada clara sobre la jerarquía.', skills: 'Dirección de arte · Editorial · Print · Social' },
      { title: 'Identidad de marca', description: 'Creo identidades flexibles que mantienen una voz propia y humana en todos los soportes.', skills: 'Concepto · Sistemas de identidad · Dirección de arte' },
      { title: 'Motion design', description: 'El movimiento como material para revelar, explicar y dar vida a un lenguaje visual.', skills: '3D · Animación · Narrativa visual' },
    ],
  },
};