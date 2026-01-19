# Icon & Branding Design

## Icon Concept

The site icon uses a **minimalist monogram** design with the initials "JK" (Jolanta Kwilman).

### Design Elements

1. **Monogram Style**
   - Clean, geometric letterforms
   - Bold, easy to read at any size
   - Professional and modern aesthetic
   - Works perfectly as a small favicon

2. **Letter Styling**
   - **J** - Curved line with proper J shape (curves left)
   - **K** - Straight geometric lines
   - Both letters in crisp white for maximum contrast
   - Thick stroke width for clarity at small sizes
   - Rounded caps for softer, elegant appearance

3. **Color Palette**
   - **Background:** `#2C2C2C` (Dark charcoal)
   - **Letters:** `#E8E8E8` (Light gray/white) - clean, high contrast

### Technical Implementation

The icon system uses Next.js 15's built-in icon generation:

- **`icon.tsx`** - Generates 32×32 favicon
- **`apple-icon.tsx`** - Generates 180×180 Apple touch icon
- **`icon.svg`** - High-resolution SVG version
- **`opengraph-image.tsx`** - 1200×630 social media preview

All icons are dynamically generated using `next/og` ImageResponse API, ensuring:
- ✅ Crisp rendering at any resolution
- ✅ No manual PNG export needed
- ✅ Consistent branding across all platforms
- ✅ Automatic optimization by Next.js

## Icon Files

```
app/
├── icon.tsx              # Browser favicon (32×32)
├── apple-icon.tsx        # iOS home screen (180×180)
├── opengraph-image.tsx   # Social media preview (1200×630)

public/
└── icon.svg              # High-res SVG version
```

## Browser Support

The icon system provides optimal display across:
- Modern browsers (Chrome, Firefox, Safari, Edge)
- iOS devices (home screen icon)
- Android devices
- Social media platforms (Facebook, Twitter, LinkedIn)
- Search engines (Google, Bing)

## Customization

To modify the icon design:

1. Edit the SVG elements in `app/icon.tsx`
2. Update colors in the style properties
3. Rebuild the app - Next.js will automatically regenerate all icon formats

```bash
npm run build
```

## Design Philosophy

The minimalist monogram design prioritizes:
- **Clarity at small sizes** - Bold, simple shapes that remain readable as a tiny favicon
- **Brand recognition** - Personal initials create instant brand identity
- **Professional elegance** - Clean geometric forms convey sophistication
- **Scalability** - Works perfectly from 16px favicon to large social media previews
- **Maximum contrast** - Crisp white letters on dark background for instant visibility

### Why This Approach?

After testing, the simplified monogram design significantly outperforms detailed illustrations at favicon size (16-32px). The bold letterforms ensure:
- Instant recognition in browser tabs
- Clear visibility on all backgrounds
- Professional appearance across all devices
- Memorable brand mark that reinforces the personal nature of the design studio
