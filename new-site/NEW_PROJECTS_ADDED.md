# New Projects Added - January 19, 2025

## Summary

Added 5 new projects to the **Wnętrza prywatne** category. All projects were added at the top of the list and will appear first on the main page.

## New Projects

1. **Mieszkanie w Warszawie – pow. 29 m2**
   - Slug: `mieszkanie-w-warszawie-pow-29-m2`
   - Images: 16 photos (8 WebP + 8 JPG)
   - First image: `1.webp`
   - **Note:** First project to use WebP format

2. **Mieszkanie w Warszawie – pow. 47 m2** (4th version)
   - Slug: `mieszkanie-w-warszawie-pow-47-m2-4`
   - Images: 21 photos
   - First image: `1.jpg`

3. **Mieszkanie w Warszawie – pow. 34 m2**
   - Slug: `mieszkanie-w-warszawie-pow-34-m2`
   - Images: 19 photos
   - First image: `1.jpg`

4. **Dom pod Warszawa – pow. 270 m2**
   - Slug: `dom-pod-warszawa-pow-270-m2`
   - Images: 33 photos
   - First image: `001.JPG`
   - Note: Uses uppercase `.JPG` extension

5. **Mieszkanie w Warszawie – pow. 42 m2**
   - Slug: `mieszkanie-w-warszawie-pow-42-m2`
   - Images: 23 photos
   - First image: `1.jpg`

## Changes Made

### 1. Updated Scripts

**`scripts/add-images-to-projects.js`**
- Modified to handle both `.jpg` and `.JPG` file extensions
- **Added WebP support:** Now also processes `.webp` and `.WEBP` files
- Changed filter to support multiple image formats
- Images are sorted numerically regardless of format

**`scripts/add-new-projects.js`** (New)
- Created script to add new projects to the beginning of `projects.json`
- Automatically maintains proper order

**`scripts/update-first-image.js`** (New)
- Created script to update firstImage field for specific projects
- Used to set `1.webp` as the first image for mieszkanie-w-warszawie-pow-29-m2

### 2. Updated Data

**`data/projects.json`**
- Added 5 new project entries at the beginning
- All projects have populated image arrays
- Total projects: **50** (41 private + 9 public utility)

### 3. Updated Documentation

**`HOW_TO_ADD_PROJECTS.md`**
- Added note about supporting both `.jpg` and `.JPG` extensions
- Clarified automatic numerical sorting of images

## Project Statistics

### Before
- Private interiors: 36 projects
- Public utility: 9 projects
- **Total: 45 projects**

### After
- Private interiors: **41 projects** (+5)
- Public utility: 9 projects
- **Total: 50 projects**

## Display Order

The 5 new projects now appear at the top of:
- Main page ("Najnowsze realizacje")
- Realizacje page
- Wnętrza prywatne category page

Previous projects maintain their original order after the new additions.

## WebP Image Support

### Added Support for Modern Image Formats

The site now supports **WebP images** in addition to JPEG:

- ✅ **WebP** (.webp, .WEBP) - Modern, efficient format
- ✅ **JPEG** (.jpg, .JPG) - Traditional format
- ✅ **Mixed formats** - Can use both in the same project

### Benefits of WebP

- **Smaller file sizes** - Typically 25-35% smaller than JPEG
- **Better quality** - Superior compression algorithms
- **Native browser support** - Supported by all modern browsers
- **Next.js optimized** - Automatic format conversion and optimization

### Example: Mieszkanie w Warszawie – pow. 29 m2

This project demonstrates mixed format usage:
- 8 WebP images (1.webp - 8.webp, 11.webp, 15.webp)
- 8 JPEG images (9.jpg, 10.jpg, 12.jpg - 14.jpg, 16.jpg)
- All sorted numerically and displayed seamlessly

## Automatic Features

All new projects automatically include:
- ✅ Dynamic page generation via `[category]/[slug]` route
- ✅ Image galleries with lightbox
- ✅ Pagination (9 images per page)
- ✅ Size extraction and display
- ✅ Category breadcrumbs
- ✅ Responsive design

## Files Modified

1. `data/projects.json` - Added 5 entries
2. `scripts/add-images-to-projects.js` - Case-insensitive JPG handling
3. `scripts/add-new-projects.js` - New script created
4. `HOW_TO_ADD_PROJECTS.md` - Updated documentation
5. `NEW_PROJECTS_ADDED.md` - This file

## Next Steps

No further action required. The new projects are:
- ✅ Live and accessible via dynamic routes
- ✅ Visible on all listing pages
- ✅ Properly categorized
- ✅ Fully functional with all features
