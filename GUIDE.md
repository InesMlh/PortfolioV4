# Ines Mlaouhi Portfolio — Editing Guide

This guide explains the parts of the portfolio that are intended to be edited over time: the page text, translations, projects, and media placeholders.

The live portfolio is the React application inside:

```text
artifacts/ines-mlaouhi-portfolio/
```

The older HTML portfolio files also remain in `public/portfolio/`, but the current routed site is the React application described below. When you open the portfolio preview, edit the React files and React media paths, not the old standalone HTML pages.

## 1. What this project is built with

The current site is:

- **React 19.1.0** — the library used to build the pages and reusable interface pieces.
- **TypeScript 5.9.3** — JavaScript with type checking, used by all of the application files.
- **Vite 7.3.6** — the development server and production build tool.
- **Wouter 3.3.5** — the small routing library that switches between Home, Projects, Services, About, Trainings, Contact, and project-detail pages.
- **pnpm workspaces** — the package manager and workspace structure used by the repository.
- **CSS** — the visual design is primarily in `src/index.css`, with CSS variables and responsive rules rather than a separate page for every route.

The exact portfolio package is:

```text
artifacts/ines-mlaouhi-portfolio/package.json
```

The installed versions are recorded in the root lockfile:

```text
pnpm-lock.yaml
```

### Translation and language files

All visible interface copy and translations live in:

```text
artifacts/ines-mlaouhi-portfolio/src/data/locales.ts
```

The available languages are:

- English: `en`
- French: `fr`
- German: `de`
- Spanish: `es`

When changing a label, title, button, form message, service description, or page paragraph, update the same field in every language you want to support. The language provider and language-switching helpers are in:

```text
artifacts/ines-mlaouhi-portfolio/src/lib/locale-provider.tsx
artifacts/ines-mlaouhi-portfolio/src/hooks/use-locale.ts
```

## 2. Project folder structure, simply

Only the folders normally relevant to content editing are listed here.

```text
/
├── GUIDE.md
├── artifacts/
│   └── ines-mlaouhi-portfolio/
│       ├── src/
│       │   ├── App.tsx
│       │   ├── data/
│       │   │   ├── projects.ts
│       │   │   └── locales.ts
│       │   ├── lib/
│       │   │   └── locale-provider.tsx
│       │   └── index.css
│       ├── public/
│       │   └── portfolio/
│       │       └── assets/
│       ├── IMAGES-NEEDED.md
│       └── DEPLOYMENT.md
└── pnpm-lock.yaml
```

### What each important file does

#### `src/App.tsx`

This is the main React page file. It contains the page sections, project cards, project-detail pages, forms, navigation, and the route list.

You normally do **not** need to edit it for ordinary text or project additions. Use it only when a new type of content needs a new component or when a placeholder must be connected to a new media field.

#### `src/data/projects.ts`

This is the real project list. Every project shown in the Projects archive, the homepage selected-work section, and the project-detail routes starts as one object in the `projects` array.

This is the file to edit when adding, removing, renaming, categorising, featuring, or adding media to a project.

#### `src/data/locales.ts`

This contains the page copy and the translations for English, French, German, and Spanish. It also contains service-card text, service form options, category labels, and validation messages.

#### `src/index.css`

This controls colours, typography, spacing, responsive behaviour, placeholder appearance, and the circular atmosphere decorations. It is not normally needed for changing content.

#### `public/portfolio/assets/`

This is the public media folder. A file placed here can be referenced by a URL beginning with:

```text
/portfolio/assets/
```

The recommended new convention is to keep each project's media in its own folder:

```text
public/portfolio/assets/projects/<project-slug>/
```

#### `IMAGES-NEEDED.md`

This is the shorter media-only reference. `GUIDE.md` is the fuller explanation of the project structure and editing workflow.

## 3. Where to put images and videos

### Important current behaviour

The current React site intentionally displays labeled placeholders until a media path is connected to the relevant project data.

For **project media**, saving files with the names below and adding their paths to the matching project record is the supported workflow.

For the **About portrait**, **Attention Insight article image**, and **training Reel**, the current page components still render a placeholder directly. The reserved paths and filenames are documented below, but saving those files alone will not replace those three placeholders until the corresponding component is connected.

Use these general rules:

- Put new React-site media inside `artifacts/ines-mlaouhi-portfolio/public/portfolio/assets/`.
- Use lowercase filenames for new media.
- Prefer **WebP** for images, **PNG** when transparency is needed, and **MP4/H.264** for video.
- Keep the recommended aspect ratio. The dimensions are recommendations for sharp display, not strict upload limits.
- In a data file, public paths start with `/portfolio/assets/`, not `public/`.

### Site-wide visual placeholders

| Visual | Exact folder | Exact filename | Recommended size and ratio | Format | Current note |
| --- | --- | --- | --- | --- | --- |
| About Me portrait | `artifacts/ines-mlaouhi-portfolio/public/portfolio/assets/` | `ines-portrait.webp` | 1200 × 1500 px, 4:5 | WebP | Reserved filename; the About component currently renders a portrait placeholder directly. |
| Attention Insight article image | `artifacts/ines-mlaouhi-portfolio/public/portfolio/assets/` | `attention-insight.webp` | 1600 × 1000 px, 8:5 | WebP | Reserved filename; the homepage article card currently uses a project placeholder. |
| Training gallery image 1 | `artifacts/ines-mlaouhi-portfolio/public/portfolio/assets/training/` | `training-01.webp` | 1600 × 1000 px, 8:5 | WebP | The current training gallery is data-ready through the training project's `gallery` field. |
| Training gallery image 2 | `artifacts/ines-mlaouhi-portfolio/public/portfolio/assets/training/` | `training-02.webp` | 1600 × 1000 px, 8:5 | WebP | The current training gallery is data-ready through the training project's `gallery` field. |
| Training gallery image 3 | `artifacts/ines-mlaouhi-portfolio/public/portfolio/assets/training/` | `training-03.webp` | 1600 × 1000 px, 8:5 | WebP | The current training gallery is data-ready through the training project's `gallery` field. |
| Training / Instagram Reel | `artifacts/ines-mlaouhi-portfolio/public/portfolio/assets/training/` | `training-reel.mp4` | 1080 × 1920 px, 9:16 | MP4, H.264 | Reserved filename; the current Trainings page renders a vertical video placeholder and does not yet read a video field. |

### Project media convention

Every project can use these five filenames inside its own folder:

```text
artifacts/ines-mlaouhi-portfolio/public/portfolio/assets/projects/<project-slug>/cover.webp
artifacts/ines-mlaouhi-portfolio/public/portfolio/assets/projects/<project-slug>/gallery-01.webp
artifacts/ines-mlaouhi-portfolio/public/portfolio/assets/projects/<project-slug>/gallery-02.webp
artifacts/ines-mlaouhi-portfolio/public/portfolio/assets/projects/<project-slug>/gallery-03.webp
artifacts/ines-mlaouhi-portfolio/public/portfolio/assets/projects/<project-slug>/video.mp4
```

Use:

- `cover.webp`: 1600 × 1000 px, 8:5. Used on the homepage selected-work cards and the Projects archive.
- `gallery-01.webp` through `gallery-03.webp`: 1920 × 1200 px, 8:5. Used by the project-detail gallery and lightbox.
- `video.mp4`: 1920 × 1080 px, 16:9 for a normal motion reel, or 1080 × 1920 px, 9:16 for a vertical social video.

The current React `PlaceholderVisual` reads `coverImage` for cover cards and the first item in `gallery` for detail/gallery visuals. The `video` field exists in the project data type, but the current project-detail component still shows a motion placeholder rather than rendering the video file. Add the video path for future use, but do not expect the file to appear until that component is wired.

These are the exact current project folders. Use the project slug exactly as written:

| Project | Folder |
| --- | --- |
| SAVEIT App | `public/portfolio/assets/projects/saveit-app/` |
| 3D Fox Character Modeling | `public/portfolio/assets/projects/3d-fox-character-modeling/` |
| VIATOPIA | `public/portfolio/assets/projects/viatopia/` |
| EUROPCAR Tunisie | `public/portfolio/assets/projects/europcar-tunisie/` |
| French-African Foundation | `public/portfolio/assets/projects/french-african-foundation/` |
| SAVEIT Report | `public/portfolio/assets/projects/saveit-report/` |
| ViaTopia's Website | `public/portfolio/assets/projects/viatopias-website/` |
| Kidows Platform | `public/portfolio/assets/projects/kidows-platform/` |
| Graphic Design Training | `public/portfolio/assets/projects/graphic-design-training/` |
| Forum ISAMM Entreprise | `public/portfolio/assets/projects/forum-isamm-entreprise/` |
| Open House | `public/portfolio/assets/projects/open-house/` |
| ISAMM Innov'Project 2.0 | `public/portfolio/assets/projects/isamm-innovproject-2-0/` |
| Forum ISAMM Entreprise — print | `public/portfolio/assets/projects/forum-isamm-entreprise-print/` |
| Tunisian Red Crescent | `public/portfolio/assets/projects/tunisian-red-crescent/` |
| Smoking Effects | `public/portfolio/assets/projects/smoking-effects/` |
| Medina of Tunis | `public/portfolio/assets/projects/medina-of-tunis/` |
| Sponsorship Dossier | `public/portfolio/assets/projects/sponsorship-dossier/` |
| KIDOWS brand | `public/portfolio/assets/projects/kidows-brand/` |
| Eid Al-Adha | `public/portfolio/assets/projects/eid-al-adha/` |
| Algesic | `public/portfolio/assets/projects/algesic/` |
| 3D Axolotl Character Design | `public/portfolio/assets/projects/3d-axolotl-character-design/` |
| 3D Chair Capsule | `public/portfolio/assets/projects/3d-chair-capsule/` |

For example, the first project's complete media set would be:

```text
artifacts/ines-mlaouhi-portfolio/public/portfolio/assets/projects/saveit-app/cover.webp
artifacts/ines-mlaouhi-portfolio/public/portfolio/assets/projects/saveit-app/gallery-01.webp
artifacts/ines-mlaouhi-portfolio/public/portfolio/assets/projects/saveit-app/gallery-02.webp
artifacts/ines-mlaouhi-portfolio/public/portfolio/assets/projects/saveit-app/gallery-03.webp
artifacts/ines-mlaouhi-portfolio/public/portfolio/assets/projects/saveit-app/video.mp4
```

You can omit gallery files that do not exist. Only add a video path when the project really has a video.

### Existing legacy media

There is also an older collection of media under:

```text
artifacts/ines-mlaouhi-portfolio/public/portfolio/assets/Projects/
artifacts/ines-mlaouhi-portfolio/public/portfolio/assets/Projects/details/
artifacts/ines-mlaouhi-portfolio/public/portfolio/assets/Projects/vids/
```

Those files support the older standalone HTML pages in `public/portfolio/`. They are not the data-driven media convention used by the current React project records. For new React project media, use the lowercase `projects/<project-slug>/` convention above instead of adding more files to the legacy folders.

## 4. How to add a new project

### Step 1: Open the project data file

Open:

```text
artifacts/ines-mlaouhi-portfolio/src/data/projects.ts
```

Find the `projects` array and duplicate the existing project object that is most similar to the new work.

### Step 2: Create a unique slug

The `slug` is the lowercase web-safe name used in the project URL. Use hyphens instead of spaces:

```ts
slug: 'new-project-name'
```

The project page will use a URL like:

```text
/work/new-project-name
```

Do not reuse a slug. Every project must have a different one.

### Step 3: Fill in the project fields

The project record supports these fields:

| Field | What to enter |
| --- | --- |
| `slug` | Unique lowercase URL name with hyphens. |
| `title` | The project name shown to visitors. |
| `category` | One main category used by the Projects filter. |
| `tags` | One or more category/tag values. The project also appears in a filter when a tag matches. |
| `shortDescription` | Optional shorter summary if you later need one for a compact card. |
| `description` | Main project summary shown on the project page. |
| `year` | The project year, such as `'2024'`. |
| `role` | Your role, such as `'UX/UI design'` or `'Graphic design'`. |
| `client` | Optional client or organisation name. |
| `tools` | Optional list such as `['Figma', 'Illustrator']`. |
| `layoutType` | Card arrangement: `'grid-a'`, `'grid-b'`, or `'grid-c'`. |
| `detailLayout` | Optional detail style: `'brand'`, `'interface'`, or `'motion'`. If omitted, it is chosen from the category. |
| `featured` | Set to `true` to make it eligible for the homepage selected-work section. |
| `published` | Optional data field reserved for publication status; the current archive does not filter on it. |
| `sortOrder` | Optional ordering value; the current archive follows the array order, so place the object where you want it displayed. |
| `context` | The background or situation behind the project. |
| `approach` | The short explanation of how you worked on it. |
| `problem`, `research`, `insights`, `process`, `wireframes`, `design`, `finalResult`, `outcome` | Optional longer case-study text fields available for future project-story sections. |
| `coverImage` | Public path to the project's `cover.webp`. |
| `gallery` | Array of public paths to `gallery-01.webp`, `gallery-02.webp`, and `gallery-03.webp`. |
| `video` | Optional public path to `video.mp4`. The field is available, but the current detail page still displays a motion placeholder. |
| `behanceUrl`, `githubUrl`, `externalUrl` | Optional external links. The current detail page displays `externalUrl` when provided. |
| `placeholderTone` | One of `'violet'`, `'lime'`, `'blue'`, `'coral'`, or `'sand'`. This is the fallback placeholder colour. |
| `translations` | Optional French, German, and Spanish versions of the title, description, context, and approach. |

A small project entry can look like this:

```ts
{
  slug: 'new-project-name',
  title: 'New Project Name',
  category: 'UI/UX',
  tags: ['UI/UX'],
  description: 'A short explanation of what the project is.',
  year: '2024',
  role: 'UX/UI design',
  layoutType: 'grid-a',
  featured: false,
  placeholderTone: 'violet',
  context: 'Why the project existed.',
  approach: 'How you approached the work.',
  coverImage: '/portfolio/assets/projects/new-project-name/cover.webp',
  gallery: [
    '/portfolio/assets/projects/new-project-name/gallery-01.webp',
    '/portfolio/assets/projects/new-project-name/gallery-02.webp',
  ],
}
```

### Step 4: Decide whether it is featured

Use:

```ts
featured: true
```

when the project should be eligible for the homepage's selected-work section.

The homepage currently takes the first four projects that have `featured: true`, so if you feature more than four projects, only the first four featured records in the array appear there. All projects can still appear on the Projects page.

Use `featured: false` or omit the field for a normal archive project.

### Step 5: Choose the category and tags

The current category list is in the same file:

```ts
export const categories = [
  'All',
  'UI/UX',
  'Social Media',
  'Graphic Design',
  'Brand Identity',
  'Motion Design',
];
```

The Projects page includes a project when either its `category` or one of its `tags` matches the selected filter.

For an existing category, copy its spelling exactly. For example:

```ts
category: 'Brand Identity',
tags: ['Brand Identity'],
```

If you create a brand-new category, add it in three places:

1. The `categories` array in `src/data/projects.ts`.
2. `categoryLabels` inside the English translation in `src/data/locales.ts`.
3. The matching `categoryLabels` object for French, German, and Spanish if the new category should be translated.

### Step 6: Add the media

Create this folder:

```text
artifacts/ines-mlaouhi-portfolio/public/portfolio/assets/projects/<your-project-slug>/
```

Save the files using the exact names:

```text
cover.webp
gallery-01.webp
gallery-02.webp
gallery-03.webp
video.mp4
```

Then add the matching public paths to the project object. The path in `projects.ts` must begin with `/portfolio/assets/`; do not write the filesystem prefix `public/`.

### Step 7: Add translations if needed

If the project title or story should change when the visitor switches language, add the optional `translations` field:

```ts
translations: {
  fr: {
    title: 'Nom du projet',
    description: 'Résumé en français.',
    context: 'Contexte en français.',
    approach: 'Approche en français.',
  },
}
```

The available translation keys are `fr`, `de`, and `es`. English is the main project record.

### Step 8: Check the result

Open the Projects page and check:

1. The project appears in the archive.
2. Its category filter finds it.
3. Its cover image appears instead of the placeholder.
4. Its project URL uses the intended slug.
5. The detail page shows the gallery images.
6. The title, role, year, tags, context, and approach are correct.

If it does not appear:

- Check that the object is inside the exported `projects` array.
- Check for a missing comma between objects.
- Check that the slug is unique and uses only the intended lowercase spelling.
- Check that `category` and `tags` match the exact spelling in `categories`.
- Check that every media path starts with `/portfolio/assets/`.
- Check that the file is inside `public/portfolio/assets/`, not beside it.
- Check capitalization and spaces in every filename.
- Remember that a `video` path is currently stored as data but is not yet rendered by the current detail component.

## 5. Keep edits non-technical

The safest content-editing routine is:

1. Change page wording in `src/data/locales.ts`.
2. Change project information and media paths in `src/data/projects.ts`.
3. Put new project media in the matching `public/portfolio/assets/projects/<slug>/` folder.
4. Keep slugs, filenames, categories, and paths consistent.
5. Preview the relevant page before publishing.

Avoid editing the old files in `public/portfolio/*.html` when you want to change the current React portfolio. Those pages are legacy standalone pages and are separate from the current route-driven site.

If a page stops loading after an edit, the most common causes are:

- a missing comma in `projects.ts` or `locales.ts`;
- a quote or bracket that was accidentally removed;
- a filename that does not exactly match its data path;
- a category name that does not exactly match the `categories` array.
