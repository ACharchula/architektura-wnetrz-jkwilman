# Jolanta Kwilman – Pracownia Architektury Wnętrz

Modern website built with Next.js 15, showcasing interior design portfolio.

🌐 **Live Site:** [https://kwilman.com](https://kwilman.com)

## Tech Stack

- **Next.js 15.1.3** - React framework with App Router
- **Tailwind CSS v4** - Utility-first styling
- **TypeScript** - Type-safe development
- **Google Fonts** - Titillium Web & Roboto

## Features

✅ **50 Portfolio Projects** - Private and public utility interiors  
✅ **50+ Publications** - Magazine features and press  
✅ **Dynamic Routing** - Single template for all projects  
✅ **Image Galleries** - Lightbox with keyboard navigation  
✅ **Pagination** - 9 items per page  
✅ **WebP Support** - Modern image formats  
✅ **SEO Optimized** - Sitemap, robots.txt, structured data  
✅ **Fully Responsive** - Mobile-first design  
✅ **Accessible** - ARIA labels, keyboard navigation

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

```
new-site/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout with SEO
│   ├── page.tsx                  # Homepage
│   ├── robots.ts                 # robots.txt generator
│   ├── sitemap.ts                # Dynamic sitemap
│   ├── icon.tsx                  # Favicon generator
│   ├── apple-icon.tsx            # iOS icon
│   ├── opengraph-image.tsx       # Social media preview
│   ├── oferta/                   # Services page
│   ├── realizacje/               # Portfolio
│   │   ├── [category]/[slug]/   # Dynamic project pages
│   │   ├── wnetrza-prywatne/    # Private interiors
│   │   └── wnetrza-uzytecznosci-publicznej/
│   ├── publikacje/               # Publications
│   ├── referencje/               # References
│   └── kontakt/                  # Contact
├── components/                   # React components
│   ├── Header.tsx                # Navigation
│   ├── Footer.tsx                # Footer
│   ├── PageTitle.tsx             # Page titles
│   ├── PortfolioGrid.tsx         # Project grid
│   ├── ProjectGallery.tsx        # Image gallery
│   ├── ReferencjeGallery.tsx     # References gallery
│   ├── Pagination.tsx            # Pagination
│   └── RealizacjeClient.tsx      # Client-side filtering
├── data/                         # Content data
│   ├── projects.json             # All projects (50)
│   └── publications.json         # All publications
├── public/                       # Static assets
│   ├── projects/                 # Project images
│   ├── publications/             # Publication images
│   └── referencje/               # Reference images
└── scripts/                      # Utility scripts
    ├── add-images-to-projects.js
    └── add-new-projects.js
```

## Adding New Projects

### Quick Start

1. **Add images** to folder:
```
public/projects/wnetrza-prywatne/new-project-name/
  001.jpg
  002.jpg
  ...
```

2. **Add entry** to `data/projects.json` (at the beginning for newest first):
```json
{
  "slug": "new-project-name",
  "title": "Project Title – pow. 100 m2",
  "category": "wnetrza-prywatne",
  "galleryFolder": "new-project-name",
  "firstImage": "001.jpg",
  "images": []
}
```

3. **Run script** to populate images:
```bash
node scripts/add-images-to-projects.js
```

4. **Done!** Project automatically appears at `/realizacje/wnetrza-prywatne/new-project-name`

### Categories

- **`wnetrza-prywatne`** - Private interiors (apartments, houses)
- **`wnetrza-uzytecznosci-publicznej`** - Public utility (offices, salons, clinics)

### Supported Image Formats

- `.jpg` / `.JPG` - JPEG images
- `.webp` / `.WEBP` - WebP images (smaller, faster)
- **Mix formats** - Use both in same project

### Project Title Format

Include size in title for automatic extraction:
```
"Mieszkanie w Warszawie – pow. 47 m2"
```

Will display as:
- **Title:** Mieszkanie w Warszawie
- **Size:** Powierzchnia 47 m²

## SEO Features

### Automatic SEO

- ✅ **Sitemap** - Auto-generated at `/sitemap.xml` (~110 URLs)
- ✅ **robots.txt** - Crawler instructions at `/robots.txt`
- ✅ **Structured Data** - JSON-LD schema for rich snippets
- ✅ **Meta Tags** - Title, description, keywords per page
- ✅ **Open Graph** - Social media previews
- ✅ **Twitter Cards** - Enhanced Twitter sharing
- ✅ **Canonical URLs** - Duplicate content prevention

### Setup After Deployment

1. **Verify URLs:**
```
https://kwilman.com/robots.txt
https://kwilman.com/sitemap.xml
```

2. **Google Search Console:**
   - Add property: `https://kwilman.com`
   - Submit sitemap: `https://kwilman.com/sitemap.xml`
   - Monitor indexing

3. **Expected Results:**
   - 3 months: +30-50% organic traffic
   - 6 months: Top 10 for main keywords
   - 12 months: Top 3 for "architekt wnętrz Warszawa"

## Deployment

### GitHub Pages (Current Setup)

The site is configured for automatic deployment to GitHub Pages.

**Quick Deploy:**

```bash
# Push to GitHub
git add .
git commit -m "Deploy site"
git push origin main

# Deployment happens automatically via GitHub Actions
```

**First Time Setup:**

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete instructions.

**Key Features:**
- ✅ Automatic deployment on push to `main`
- ✅ Custom domain: kwilman.com
- ✅ Free hosting
- ✅ Global CDN
- ✅ HTTPS enabled

### Local Static Export

Test the static build locally:

```bash
npm run build
npx serve out
```

### Environment Variables

No environment variables required.

## Configuration

### Domain

Update domain in:
- `app/layout.tsx` - `metadataBase`
- `app/robots.ts` - `baseUrl`
- `app/sitemap.ts` - `baseUrl`
- `app/realizacje/[category]/[slug]/page.tsx` - `baseUrl`

### Styling

Colors defined in `app/globals.css`:
- `--background: #f7f7f7` - Page background
- `--foreground: #333` - Text color
- `--link-color: inherit` - Link color

### Content

All content stored in JSON files:
- `data/projects.json` - Portfolio projects
- `data/publications.json` - Publications

Edit these files directly or use scripts.

## Performance

### Optimizations

- ✅ **Image optimization** - Next.js Image component
- ✅ **Static generation** - All pages pre-rendered
- ✅ **Code splitting** - Automatic by Next.js
- ✅ **WebP images** - 25-35% smaller than JPEG
- ✅ **Lazy loading** - Images load on demand
- ✅ **Font optimization** - Google Fonts preloaded

### Lighthouse Scores

Target scores (after deployment):
- **Performance:** 90+
- **Accessibility:** 95+
- **Best Practices:** 95+
- **SEO:** 100

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS & Android)

## Scripts

### Development

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

### Content Management

```bash
# Add images to all projects
node scripts/add-images-to-projects.js

# Add new projects (edit script first)
node scripts/add-new-projects.js
```

## Troubleshooting

### Images Not Showing

1. Check file extensions (`.jpg`, `.webp`)
2. Run `node scripts/add-images-to-projects.js`
3. Clear Next.js cache: `rm -rf .next && npm run dev`

### Pages Not Found (404)

1. Check `data/projects.json` structure
2. Verify folder names match slugs
3. Rebuild: `npm run build`

### Menu Not Closing on Mobile

Fixed - menu closes on all link clicks now.

### WebP Images Not Loading

WebP supported by all modern browsers (95%+ coverage). Use `.jpg` fallbacks if needed.

## License

© 2025 Jolanta Kwilman. All Rights Reserved.

## Support

For issues or questions:
- Check this README
- Review `data/projects.json` structure
- Verify file paths in `public/` directory

## Version

- **Next.js:** 15.1.3
- **React:** 19
- **Tailwind CSS:** 4.0
- **Last Updated:** January 2025
