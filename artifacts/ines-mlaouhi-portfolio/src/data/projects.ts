export type ProjectLayout = 'grid-a' | 'grid-b' | 'grid-c';
export type ProjectDetailLayout = 'brand' | 'interface' | 'motion';

export type Project = {
  id?: string;
  slug: string;
  title: string;
  category: string;
  tags: string[];
  shortDescription?: string;
  description: string;
  year?: string;
  role?: string;
  client?: string;
  tools?: string[];
  layoutType: ProjectLayout;
  detailLayout?: ProjectDetailLayout;
  featured?: boolean;
  published?: boolean;
  sortOrder?: number;
  context?: string;
  approach?: string;
  problem?: string;
  research?: string;
  insights?: string;
  process?: string;
  wireframes?: string;
  design?: string;
  finalResult?: string;
  outcome?: string;
  coverImage?: string;
  gallery?: string[];
  video?: string;
  behanceUrl?: string;
  githubUrl?: string;
  externalUrl?: string;
  placeholderTone: 'violet' | 'lime' | 'blue' | 'coral' | 'sand';
  translations?: Partial<Record<'fr' | 'de' | 'es', Partial<Pick<Project, 'title' | 'description' | 'context' | 'approach'>>>>;
};

const projectMedia = (slug: string): Pick<Project, 'coverImage' | 'gallery' | 'video'> => ({
  coverImage: `/portfolio/assets/projects/${slug}/cover.jpg`,
  gallery: [
    `/portfolio/assets/projects/${slug}/gallery-01.jpg`,
    `/portfolio/assets/projects/${slug}/gallery-02.jpg`,
    `/portfolio/assets/projects/${slug}/gallery-03.jpg`,
  ],
  video: `/portfolio/assets/projects/${slug}/video.mp4`,
});

const projectList: Project[] = [
  { slug: 'saveit-app', title: 'SAVEIT App', category: 'UI/UX', tags: ['UI/UX'], description: 'A mobile interface study for saving, organising and returning to the things worth keeping.', year: '2023', role: 'UX/UI design', layoutType: 'grid-a', featured: true, placeholderTone: 'violet', context: 'SAVEIT explores a calmer way to collect and revisit inspiration.', approach: 'The work follows a simple rhythm: capture quickly, find easily and leave room for the next idea.' },
  { slug: '3d-fox-character-modeling', title: '3D Fox Character Modeling', category: 'Motion Design', tags: ['Motion Design'], description: 'Character modelling and motion studies built from graphic, playful forms.', year: '2023', role: '3D / motion design', layoutType: 'grid-b', featured: true, placeholderTone: 'coral', context: 'A study in building personality through form, surface and movement.', approach: 'Shape, colour and a small shift in posture carry the visual story.' },
  { slug: 'viatopia', title: 'VIATOPIA', category: 'Brand Identity', tags: ['Brand Identity'], description: 'A visual identity built around movement, curiosity and the feeling of discovering a place.', year: '2023', role: 'Brand identity / digital', layoutType: 'grid-c', featured: true, placeholderTone: 'lime', context: 'VIATOPIA needed a visual system with energy and room to travel across touchpoints.', approach: 'The identity uses movement and a flexible graphic vocabulary instead of predictable travel imagery.' },
  { slug: 'europcar-tunisie', title: 'EUROPCAR Tunisie', category: 'Social Media', tags: ['Social Media'], description: 'Social content designed to make a practical service feel close, clear and memorable.', year: '2022', role: 'Graphic design', layoutType: 'grid-a', placeholderTone: 'blue', context: 'A social media system shaped around useful moments and quick reading.', approach: 'Offers and travel moments become a consistent family of visual compositions.' },
  { slug: 'french-african-foundation', title: 'French-African Foundation', category: 'Social Media', tags: ['Social Media'], description: 'Visual communication for conversations crossing cultures, disciplines and borders.', year: '2022', role: 'Visual communication', layoutType: 'grid-b', placeholderTone: 'sand', context: 'A series of social visuals connecting French and African perspectives.', approach: 'The work balances a strong editorial grid with a warmer, human image treatment.' },
  { slug: 'saveit-report', title: 'SAVEIT Report', category: 'Graphic Design', tags: ['Graphic Design'], description: 'A printed report that turns research and information into something easy to move through.', year: '2023', role: 'Editorial design', layoutType: 'grid-a', placeholderTone: 'violet', context: 'A publication-led extension of the SAVEIT project.', approach: 'Pacing, typographic contrast and moments of visual pause guide the reading experience.' },
  { slug: 'viatopias-website', title: "ViaTopia's Website", category: 'UI/UX', tags: ['UI/UX'], description: 'A digital home for the ViaTopia identity, organised for navigation and discovery.', year: '2023', role: 'UX/UI design', layoutType: 'grid-b', featured: true, placeholderTone: 'lime', context: 'The website extends a place-led identity into a clear digital journey.', approach: 'Content is organised around intent and discovery, with the identity helping people navigate.' },
  { slug: 'kidows-platform', title: 'Kidows Platform', category: 'UI/UX', tags: ['UI/UX'], description: 'A friendly platform experience designed with clarity, play and young audiences in mind.', year: '2023', role: 'UX/UI design', layoutType: 'grid-a', placeholderTone: 'coral', context: 'Kidows is an interface study in making a digital learning space feel welcoming.', approach: 'The path stays lightweight, with clear moments for exploration and action.' },
  { slug: 'graphic-design-training', title: 'Graphic Design Training', category: 'Social Media', tags: ['Social Media'], description: 'A training project about the fundamentals of visual communication through practical exercises.', year: '2023', role: 'Training / workshops', layoutType: 'grid-c', placeholderTone: 'blue', context: 'A learning experience for people building confidence with graphic design.', approach: 'The work makes room for questions, experimentation and small visual discoveries.' },
  { slug: 'forum-isamm-entreprise-social', title: 'Forum ISAMM Entreprise', category: 'Social Media', tags: ['Social Media'], description: 'Social communication for the Forum ISAMM Entreprise project.', year: '2022', role: 'Graphic design', layoutType: 'grid-b', placeholderTone: 'violet', context: 'A social visual system for a forum and its public-facing communication.', approach: 'Information is shaped into a clear, recognisable rhythm for social formats.' },
  { slug: 'open-house', title: 'Open House', category: 'Social Media', tags: ['Social Media'], description: 'Social visuals for an open house communication campaign.', year: '2022', role: 'Graphic design', layoutType: 'grid-a', placeholderTone: 'sand', context: 'A campaign study focused on welcoming people into an event.', approach: 'The compositions make the invitation feel direct, lively and easy to recognise.' },
  { slug: 'isamm-innovproject-2-0', title: "ISAMM Innov'Project 2.0", category: 'Social Media', tags: ['Social Media'], description: 'Social communication for ISAMM Innov’Project 2.0.', year: '2022', role: 'Graphic design', layoutType: 'grid-c', placeholderTone: 'lime', context: 'A visual exploration for an innovation-focused project.', approach: 'The system gives announcements a graphic language that can move across formats.' },
  { slug: 'forum-isamm-entreprise-print', title: 'Forum ISAMM Entreprise', category: 'Graphic Design', tags: ['Graphic Design'], description: 'Print communication for the Forum ISAMM Entreprise project.', year: '2022', role: 'Graphic design', layoutType: 'grid-a', placeholderTone: 'coral', context: 'A print-led companion to the Forum ISAMM Entreprise communication.', approach: 'Hierarchy and contrast help the information stay legible in a physical format.' },
  { slug: 'tunisian-red-crescent', title: 'Tunisian Red Crescent', category: 'Graphic Design', tags: ['Graphic Design'], description: 'A print design project for Tunisian Red Crescent communication.', year: '2022', role: 'Graphic design', layoutType: 'grid-b', placeholderTone: 'coral', context: 'A communication study shaped around a clear public message.', approach: 'The visual treatment keeps the message immediate while giving the page a considered rhythm.' },
  { slug: 'smoking-effects', title: 'Smoking Effects', category: 'Graphic Design', tags: ['Graphic Design'], description: 'A print communication project about the effects of smoking.', year: '2022', role: 'Graphic design', layoutType: 'grid-a', placeholderTone: 'blue', context: 'A visual communication study designed to make a serious message visible.', approach: 'Contrast and direct composition create space for the message to land.' },
  { slug: 'medina-of-tunis', title: 'Medina of Tunis', category: 'Graphic Design', tags: ['Graphic Design'], description: 'A visual exploration rooted in the texture, rhythm and atmosphere of the Medina of Tunis.', year: '2022', role: 'Graphic design', layoutType: 'grid-c', featured: true, placeholderTone: 'sand', context: 'A graphic study drawing from the density and layered signs of the medina.', approach: 'Repetition and contrast create a sense of place without illustrating it literally.' },
  { slug: 'sponsorship-dossier', title: 'Sponsorship Dossier', category: 'Graphic Design', tags: ['Graphic Design'], description: 'An editorial dossier designed to present a sponsorship project clearly.', year: '2022', role: 'Editorial design', layoutType: 'grid-b', placeholderTone: 'violet', context: 'A document-led project where information needs to feel structured and inviting.', approach: 'The layout gives each message a clear place while keeping the reading flow active.' },
  { slug: 'kidows-brand', title: 'KIDOWS (brand)', category: 'Brand Identity', tags: ['Brand Identity'], description: 'A brand identity exploration for KIDOWS.', year: '2023', role: 'Brand identity', layoutType: 'grid-a', placeholderTone: 'lime', context: 'A visual identity study for a friendly, young-facing brand.', approach: 'The system builds recognition through a playful but organised visual language.' },
  { slug: 'eid-al-adha', title: 'Eid Al-Adha', category: 'Motion Design', tags: ['Motion Design'], description: 'A motion design project created around Eid Al-Adha.', year: '2022', role: 'Motion design', layoutType: 'grid-c', placeholderTone: 'sand', context: 'A short motion study shaped around a festive visual moment.', approach: 'Timing, transitions and graphic rhythm carry the feeling of the piece.' },
  { slug: 'algesic', title: 'Algesic', category: 'Motion Design', tags: ['Motion Design'], description: 'A motion design project for Algesic.', year: '2022', role: 'Motion design', layoutType: 'grid-b', placeholderTone: 'blue', context: 'A study in translating a message into movement and visual sequence.', approach: 'The work uses pacing and graphic emphasis to make the content easier to follow.' },
  { slug: '3d-axolotl-character-design', title: '3D Axolotl Character Design', category: 'Motion Design', tags: ['Motion Design'], description: 'A 3D character design study focused on the axolotl form.', year: '2023', role: '3D / motion design', layoutType: 'grid-a', placeholderTone: 'coral', context: 'A character exploration built through modelling, expression and surface.', approach: 'Simple shifts in shape and pose give the character its personality.' },
  { slug: '3d-chair-capsule', title: '3D Chair Capsule', category: 'Motion Design', tags: ['Motion Design'], description: 'A 3D study exploring the chair as an object, shape and capsule.', year: '2023', role: '3D / motion design', layoutType: 'grid-c', placeholderTone: 'violet', context: 'A form study centred on object, proportion and presentation.', approach: 'Light, rotation and surface help the object become a graphic composition.' },
];

export const projects: Project[] = projectList.map((project) => ({
  ...project,
  ...projectMedia(project.slug),
}));

export const categories = ['All', 'UI/UX', 'Social Media', 'Graphic Design', 'Brand Identity', 'Motion Design'];
export const getProject = (slug?: string) => projects.find((project) => project.slug === slug);

export const getProjectDetailLayout = (project: Project): ProjectDetailLayout => {
  if (project.detailLayout) return project.detailLayout;
  if (project.category === 'UI/UX') return 'interface';
  if (project.category === 'Motion Design') return 'motion';
  return 'brand';
};