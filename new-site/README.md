# Jolanta Kwilman – Interior Design Portfolio

Next.js + Tailwind CSS migration of the WordPress site.

## Project Status

✅ **Completed Migration Steps:**

1. **Base Project Setup** - Next.js 16 with Tailwind CSS v4
2. **Styling & Fonts** - Matched old site's look with Titillium Web and Roboto fonts, colors (#eee background, #444 text)
3. **Header Component** - Responsive navigation with dropdown menu for Realizacje
4. **Footer Component** - Simple footer with back-to-top button
5. **Kontakt Page** - Contact information with profile photo
6. **Oferta Page** - Services offered with detailed lists
7. **Referencje Page** - Gallery of 6 reference images
8. **Publikacje Page** - Publications list (2007-2015)
9. **Realizacje Pages** - Portfolio with two categories:
   - Wnętrza prywatne (Private Interiors)
   - Wnętrza użyteczności publicznej (Public Utility Interiors)
10. **Main Page** - Latest projects ("Najnowsze realizacje")

## Tech Stack

- **Next.js 16.1.3** - React framework with App Router
- **Tailwind CSS v4** - Utility-first CSS framework
- **TypeScript** - Type-safe development
- **Google Fonts** - Titillium Web & Roboto

## Project Structure

```
new-site/
├── app/                      # App Router pages
│   ├── kontakt/             # Contact page
│   ├── oferta/              # Services page
│   ├── publikacje/          # Publications page
│   ├── realizacje/          # Portfolio pages
│   │   ├── wnetrza-prywatne/
│   │   └── wnetrza-uzytecznosci-publicznej/
│   ├── referencje/          # References page
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with Header/Footer
│   └── page.tsx             # Home page
├── components/              # React components
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   └── PortfolioGrid.tsx   # Portfolio items grid
└── public/                  # Static assets
    ├── profile.jpg         # Contact page photo
    └── referencje/         # Reference images

```

## Development

```bash
npm run dev    # Start development server at http://localhost:3000
npm run build  # Build for production
npm run start  # Start production server
```

## Content Migration Status

✅ **COMPLETED**

### Migrated Content
- ✅ All 45 portfolio projects with images (~1,150+ images)
- ✅ Individual project detail pages with full galleries
- ✅ Real project data from old WordPress site
- ✅ Publication images (41 galleries)
- ✅ Reference images (6 images)
- ✅ All images organized in well-named folders

See [MIGRATION.md](./MIGRATION.md) for detailed migration report.

## Next Steps / TODO

### Features to Add
- [ ] Image lightbox/gallery for project photos
- [ ] Pagination for portfolio pages
- [ ] Image optimization with Next.js Image component
- [ ] SEO optimization (meta tags, structured data)
- [ ] Contact form functionality
- [ ] Image lazy loading
- [ ] Responsive image sizes

### CMS Integration (Optional)
- [ ] Consider adding a headless CMS (e.g., Sanity, Contentful, or Strapi)
- [ ] Create content models for projects, publications
- [ ] Set up image hosting/CDN

### Performance
- [ ] Optimize images (WebP format, proper sizing)
- [ ] Add loading states for dynamic content
- [ ] Implement ISR (Incremental Static Regeneration) for portfolio pages

### Design Polish
- [ ] Fine-tune responsive breakpoints
- [ ] Add animations/transitions
- [ ] Improve accessibility (ARIA labels, keyboard navigation)
- [ ] Add breadcrumbs for navigation

## Notes

### Color Scheme
- Background: `#eeeeee`
- Text: `#444444`
- Links/Primary: `#333333`

### Font Configuration
- **Primary**: Titillium Web (300, 400, 600 weights)
- **Secondary**: Roboto (300, 400, 700 weights)
- **Base Size**: 15px
- **Line Height**: 1.5em

### Current Limitations
1. Portfolio items use mock data - need to migrate real content
2. Project detail pages are placeholders - need individual project galleries
3. Images are placeholders - need to copy and optimize actual images
4. Publications are listed without detail pages

### Migration from Old Site
The old WordPress site used:
- **Theme**: Gridframe
- **Plugin**: NextGEN Gallery for image galleries
- **Structure**: Category-based organization (Realizacje, Publikacje)

## Deployment

This project can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any Node.js hosting platform**

```bash
# Build for production
npm run build

# Test production build locally
npm run start
```

## License

© 2025 Jolanta Kwilman. All Rights Reserved.
