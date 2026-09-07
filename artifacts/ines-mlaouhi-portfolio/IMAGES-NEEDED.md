# Portfolio image and video guide

This guide lists every visual placeholder in the portfolio and the exact place to add a replacement.

## Shared rules

- Put new media inside `public/portfolio/assets/`.
- Use lowercase filenames and folders for new additions.
- Prefer WebP for photographs and project artwork, PNG when transparency is needed, and MP4 (H.264) for video.
- Keep the original aspect ratio. The dimensions below are recommendations for crisp display, not hard upload limits.

## Site visuals

| Visual | File path | Exact filename | Recommended size |
| --- | --- | --- | --- |
| About Me portrait | `public/portfolio/assets/` | `ines-portrait.webp` | 1200 × 1500 px, 4:5 |
| Blog / Attention Insight feature image | `public/portfolio/assets/` | `attention-insight.webp` | 1600 × 1000 px, 8:5 |
| Training gallery image 1 | `public/portfolio/assets/training/` | `training-01.webp` | 1600 × 1000 px, 8:5 |
| Training gallery image 2 | `public/portfolio/assets/training/` | `training-02.webp` | 1600 × 1000 px, 8:5 |
| Training gallery image 3 | `public/portfolio/assets/training/` | `training-03.webp` | 1600 × 1000 px, 8:5 |
| Training / Instagram Reel | `public/portfolio/assets/training/` | `training-reel.mp4` | 1080 × 1920 px, 9:16 |

The current React page intentionally keeps these as labeled placeholders until the matching fields are filled in. The vertical training Reel placeholder is designed for a 9:16 video.

## Project visuals

Each project can have one cover, up to three detail/gallery images, and an optional motion video. Use this exact pattern:

```text
public/portfolio/assets/projects/<project-slug>/cover.webp
public/portfolio/assets/projects/<project-slug>/gallery-01.webp
public/portfolio/assets/projects/<project-slug>/gallery-02.webp
public/portfolio/assets/projects/<project-slug>/gallery-03.webp
public/portfolio/assets/projects/<project-slug>/video.mp4
```

- `cover.webp`: 1600 × 1000 px, 8:5. Used by the homepage and All Projects archive.
- `gallery-01.webp` through `gallery-03.webp`: 1920 × 1200 px, 8:5. Used by the project detail page.
- `video.mp4`: 1920 × 1080 px, 16:9 for motion project reels, or 1080 × 1920 px, 9:16 for vertical social video.

Use these project slugs from `src/data/projects.ts`:

`saveit-app`, `3d-fox-character-modeling`, `viatopia`, `europcar-tunisie`, `french-african-foundation`, `saveit-report`, `viatopias-website`, `kidows-platform`, `graphic-design-training`, `forum-isamm-entreprise`, `open-house`, `isamm-innovproject-2-0`, `forum-isamm-entreprise-print`, `tunisian-red-crescent`, `smoking-effects`, `medina-of-tunis`, `sponsorship-dossier`, `kidows-brand`, `eid-al-adha`, `algesic`, `3d-axolotl-character-design`, `3d-chair-capsule`.

After adding files, update the matching project record in `src/data/projects.ts`:

```ts
coverImage: '/portfolio/assets/projects/saveit-app/cover.webp',
gallery: [
  '/portfolio/assets/projects/saveit-app/gallery-01.webp',
  '/portfolio/assets/projects/saveit-app/gallery-02.webp',
  '/portfolio/assets/projects/saveit-app/gallery-03.webp',
],
video: '/portfolio/assets/projects/saveit-app/video.mp4',
```

Only add `video` when the project really has a video. Empty gallery slots can be omitted.

## Adding a brand-new project later

1. Create a new folder at `public/portfolio/assets/projects/<new-project-slug>/`.
2. Add `cover.webp` and any `gallery-01.webp` to `gallery-03.webp` files using the dimensions above.
3. Open `src/data/projects.ts` and duplicate the closest existing project object.
4. Replace its `slug`, `title`, `category`, `tags`, `description`, `year`, `role`, `context`, `approach`, `placeholderTone`, and any optional links.
5. Add the `coverImage`, `gallery`, and optional `video` paths shown above.
6. Set `featured: true` only when it should appear in the homepage selected-work section.
7. Add `translations` for French, German, or Spanish if the title and story should change with the language switcher.
8. If the project uses a category not already present, add that category to the `categories` array and to each locale's `categoryLabels`.

No other page file needs to be duplicated. The archive, homepage cards, project detail route, lightbox, and previous/next navigation all read from this project record.