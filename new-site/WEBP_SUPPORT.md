# WebP Image Format Support

## Overview

The site now fully supports **WebP images** alongside traditional JPEG format, enabling modern, efficient image delivery.

## Supported Formats

| Format | Extensions | Use Case |
|--------|-----------|----------|
| **WebP** | `.webp`, `.WEBP` | Modern format with superior compression |
| **JPEG** | `.jpg`, `.JPG` | Traditional format for compatibility |

## Features

### 1. Automatic Detection
- The system automatically detects both WebP and JPEG files
- No configuration needed - just place files in project folders
- Case-insensitive extension handling

### 2. Mixed Format Projects
- Projects can contain both WebP and JPEG images
- Images are sorted numerically regardless of format
- Example: `1.webp`, `2.jpg`, `3.webp` are sorted correctly

### 3. Seamless Integration
- Next.js Image component handles all formats natively
- Automatic optimization and responsive sizing
- Progressive loading and lazy loading
- Format conversion based on browser support

## Technical Implementation

### Script Updates

**`scripts/add-images-to-projects.js`**
```javascript
// Before: Only JPG support
.filter(f => f.toLowerCase().endsWith('.jpg'))

// After: WebP + JPG support
.filter(f => {
  const lower = f.toLowerCase();
  return lower.endsWith('.jpg') || lower.endsWith('.webp');
})
```

### Component Support

Both gallery components use Next.js Image component:
- **`ProjectGallery.tsx`** - Individual project galleries
- **`PortfolioGrid.tsx`** - Grid view thumbnails
- **`ReferencjeGallery.tsx`** - References gallery

All automatically support WebP without modifications.

## Example: Mieszkanie w Warszawie – pow. 29 m2

### File Structure
```
public/projects/wnetrza-prywatne/mieszkanie-w-warszawie-pow-29-m2/
├── 1.webp      ← First image (thumbnail)
├── 2.webp
├── 3.webp
├── 4.webp
├── 5.webp
├── 6.webp
├── 7.webp
├── 8.webp
├── 9.jpg       ← Mixed with JPEG
├── 10.jpg
├── 11.webp
├── 12.jpg
├── 13.jpg
├── 14.jpg
├── 15.webp
└── 16.jpg

Total: 16 images (8 WebP + 8 JPEG)
```

### Project Data
```json
{
  "slug": "mieszkanie-w-warszawie-pow-29-m2",
  "title": "Mieszkanie w Warszawie – pow. 29 m2",
  "firstImage": "1.webp",
  "images": [
    "1.webp", "2.webp", "3.webp", "4.webp", "5.webp",
    "6.webp", "7.webp", "8.webp", "9.jpg", "10.jpg",
    "11.webp", "12.jpg", "13.jpg", "14.jpg", "15.webp", "16.jpg"
  ]
}
```

## Benefits

### Performance
- **25-35% smaller file sizes** compared to JPEG at same quality
- **Faster page loads** - Less data to transfer
- **Better UX** - Images appear faster, especially on mobile

### Quality
- **Superior compression** - Better quality at smaller sizes
- **Alpha transparency** - When needed
- **Flexible quality settings** - Lossless or lossy compression

### Browser Support
- **Chrome** ✓ (Since 2010)
- **Firefox** ✓ (Since 2019)
- **Safari** ✓ (Since 2020)
- **Edge** ✓ (Since 2018)
- **Mobile browsers** ✓ All modern versions

### Next.js Benefits
- **Automatic format conversion** - Serves best format per browser
- **On-demand optimization** - No pre-processing needed
- **CDN-ready** - Optimized images served from edge

## Adding WebP Images

### Quick Start

1. **Export images as WebP** (from Photoshop, online converters, etc.)
2. **Place in project folder** alongside JPG images
3. **Run the script**:
   ```bash
   node scripts/add-images-to-projects.js
   ```
4. **Done!** Images automatically detected and added

### Setting First Image

If you want a specific WebP as the thumbnail:

```bash
# Manually update firstImage in projects.json, or use:
node scripts/update-first-image.js
```

### Best Practices

1. **Use WebP for photos** - Excellent compression for photography
2. **Name numerically** - Files sort correctly (1.webp, 2.webp, etc.)
3. **Mix formats if needed** - System handles both seamlessly
4. **Check browser coverage** - WebP has 95%+ global support (2024)

## Migration Path

### For Existing Projects

You can gradually migrate existing projects:

1. **Keep existing JPG files** - No need to remove
2. **Add WebP versions** - Place alongside JPG
3. **Update firstImage** - If desired (optional)
4. **Re-run script** - Updates image arrays

### Example Migration

```bash
# Before (JPG only)
project-folder/
├── 001.jpg
├── 002.jpg
└── 003.jpg

# After (Mixed)
project-folder/
├── 001.webp  ← Added
├── 001.jpg   ← Keep for fallback
├── 002.webp  ← Added
├── 002.jpg
├── 003.webp  ← Added
└── 003.jpg
```

## Troubleshooting

### Images Not Appearing

1. **Check file extension** - Must be `.webp` or `.WEBP`
2. **Run the script** - Updates image arrays
3. **Clear Next.js cache** - `rm -rf .next && npm run dev`
4. **Check file paths** - Verify folder structure

### Mixed Formats Not Working

1. **Re-run add-images script** - Picks up all formats
2. **Check sort order** - Files should be numbered consistently
3. **Verify format** - Use `file` command to check actual format

## Future Enhancements

Potential improvements:
- AVIF format support (next-generation format)
- PNG support for graphics/screenshots
- GIF support for animations
- Automatic format conversion tools

## Resources

- [WebP Homepage](https://developers.google.com/speed/webp)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Can I Use WebP](https://caniuse.com/webp)
- [WebP Converter Tools](https://squoosh.app/)

## Summary

✅ WebP and JPEG fully supported  
✅ Automatic detection and sorting  
✅ Mixed formats in same project  
✅ Next.js optimization included  
✅ No component changes needed  
✅ Better performance and quality
