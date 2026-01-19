# How to Add New Projects (Realizacje)

The site now uses a dynamic routing system, making it easy to add new projects without creating individual page files.

## Steps to Add a New Project

### 1. Prepare Images
Place project images in the appropriate folder:
```
public/projects/[category]/[slug]/
```

**Categories:**
- `wnetrza-prywatne` - Private interiors
- `wnetrza-uzytecznosci-publicznej` - Public utility interiors

**Image formats supported:**
- `.jpg` / `.JPG` - JPEG images
- `.webp` / `.WEBP` - WebP images
- Images are automatically sorted numerically
- All formats can be mixed in the same project folder

**Example:**
```
public/projects/wnetrza-prywatne/mieszkanie-w-krakowie-pow-85-m2/
  001.jpg
  002.jpg
  003.jpg
  ...
```

### 2. Add Project to projects.json
Add your new project **at the beginning** of the `data/projects.json` array to make it appear first on the main page:

```json
[
  {
    "slug": "mieszkanie-w-krakowie-pow-85-m2",
    "title": "Mieszkanie w Krakowie – pow. 85 m2",
    "category": "wnetrza-prywatne",
    "galleryFolder": "mieszkanie-w-krakowie-85",
    "firstImage": "001.jpg",
    "images": []
  },
  ... existing projects ...
]
```

**Important fields:**
- `slug`: URL-friendly identifier (use lowercase, hyphens, include size)
- `title`: Display name (will be split into title + size automatically)
- `category`: Either `wnetrza-prywatne` or `wnetrza-uzytecznosci-publicznej`
- `firstImage`: Thumbnail image for listings
- `images`: Leave empty array, will be populated by script

### 3. Run the Image Update Script
This script will automatically scan your image folder and populate the `images` array:

```bash
cd new-site
node scripts/add-images-to-projects.js
```

### 4. Done!
Your new project will automatically:
- ✅ Appear on the main page (first position)
- ✅ Appear in the appropriate category page
- ✅ Have its own detail page at `/realizacje/[category]/[slug]`
- ✅ Include all images with pagination (9 per page)

## Technical Notes

### Next.js 15+ Compatibility
The dynamic route uses `async/await` for params handling (required in Next.js 15+):
```typescript
export default async function ProjectPage({ 
  params 
}: { 
  params: Promise<{ category: string; slug: string }> 
}) {
  const { category, slug } = await params;
  // ...
}
```

## File Structure

```
new-site/
├── app/
│   └── realizacje/
│       ├── [category]/
│       │   └── [slug]/
│       │       └── page.tsx          # Dynamic route (ONE file for ALL projects)
│       ├── wnetrza-prywatne/
│       │   └── page.tsx              # Category listing
│       └── wnetrza-uzytecznosci-publicznej/
│           └── page.tsx              # Category listing
├── data/
│   └── projects.json                 # Single source of truth
├── public/
│   └── projects/
│       ├── wnetrza-prywatne/
│       │   └── [project-slug]/       # Project images
│       └── wnetrza-uzytecznosci-publicznej/
│           └── [project-slug]/       # Project images
└── scripts/
    └── add-images-to-projects.js     # Updates image lists
```

## Deprecated Scripts

❌ **Do NOT use:** `scripts/generate-project-pages.js`  
This script is no longer needed. We now use a single dynamic page instead of generating 45+ individual pages.

## Benefits of This Approach

1. **Easy to add**: Just add entry to JSON + run script
2. **Automatic ordering**: New items at the top appear first
3. **Single source of truth**: All project data in one JSON file
4. **Easier maintenance**: One dynamic page instead of 45+ static pages
5. **Consistent styling**: All projects use the same template
