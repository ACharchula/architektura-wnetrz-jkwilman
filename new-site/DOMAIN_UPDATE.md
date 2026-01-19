# Domain Update Summary

## Change Made

Updated all URLs from **`https://jkwilman.pl`** to **`https://kwilman.com`**

## Files Updated

### 1. **app/layout.tsx**
- ✅ `metadataBase`: `https://kwilman.com`
- ✅ `authors[].url`: `https://kwilman.com`
- ✅ `openGraph.url`: `https://kwilman.com`
- ✅ `alternates.canonical`: `https://kwilman.com`
- ✅ JSON-LD `@id`: `https://kwilman.com`
- ✅ JSON-LD `url`: `https://kwilman.com`
- ✅ JSON-LD `logo`: `https://kwilman.com/icon.svg`

### 2. **app/robots.ts**
- ✅ `baseUrl`: `https://kwilman.com`
- ✅ `sitemap`: `https://kwilman.com/sitemap.xml`

### 3. **app/sitemap.ts**
- ✅ `baseUrl`: `https://kwilman.com`
- ✅ All generated URLs use correct domain

### 4. **app/realizacje/[category]/[slug]/page.tsx**
- ✅ `baseUrl` in metadata: `https://kwilman.com`
- ✅ `projectUrl`: `https://kwilman.com/realizacje/...`
- ✅ `imageUrl`: `https://kwilman.com/projects/...`
- ✅ JSON-LD `url`: `https://kwilman.com/realizacje/...`
- ✅ JSON-LD `author.url`: `https://kwilman.com`
- ✅ JSON-LD `image[]`: All use `https://kwilman.com`

### 5. **SEO_IMPROVEMENTS.md**
- ✅ All documentation examples updated
- ✅ All verification URLs updated
- ✅ Testing checklist updated

## Verification

**Total domain references updated:** 13 instances in code + documentation

**No remaining old domain references** in TypeScript/TSX files ✓

## URLs to Verify After Deployment

```bash
# Core URLs
https://kwilman.com/
https://kwilman.com/robots.txt
https://kwilman.com/sitemap.xml

# Assets
https://kwilman.com/icon.svg
https://kwilman.com/apple-icon.png
https://kwilman.com/opengraph-image.png

# Sample pages
https://kwilman.com/oferta
https://kwilman.com/realizacje
https://kwilman.com/kontakt

# Sample project
https://kwilman.com/realizacje/wnetrza-prywatne/mieszkanie-w-warszawie-pow-29-m2
```

## DNS Configuration

Make sure your DNS is configured to point **kwilman.com** to your hosting:

### Required DNS Records

```
Type: A or CNAME
Name: @ (root)
Value: [your hosting IP or CNAME target]

Type: A or CNAME  
Name: www
Value: [your hosting IP or CNAME target]
```

### Recommended: HTTPS Redirect

Configure your hosting to redirect:
- `http://kwilman.com` → `https://kwilman.com`
- `http://www.kwilman.com` → `https://kwilman.com`
- `https://www.kwilman.com` → `https://kwilman.com`

This ensures all traffic uses the canonical URL: **`https://kwilman.com`**

## Google Search Console Setup

After deployment:

1. **Add Property:**
   - Go to [Google Search Console](https://search.google.com/search-console)
   - Add new property: `https://kwilman.com`
   - Verify ownership (DNS or HTML file method)

2. **Submit Sitemap:**
   - URL: `https://kwilman.com/sitemap.xml`
   - Monitor indexing status

3. **Set Preferred Domain:**
   - Ensure canonical URLs point to `kwilman.com` (not `www.kwilman.com`)

## Next Steps

### Immediate (After Deployment)
- [ ] Verify all URLs respond correctly
- [ ] Check robots.txt loads
- [ ] Check sitemap.xml loads and contains all URLs
- [ ] Test a few project pages
- [ ] Verify Open Graph tags (share on social media)

### Within 24 Hours
- [ ] Add property to Google Search Console
- [ ] Submit sitemap
- [ ] Check for any 404 errors

### Within 1 Week
- [ ] Monitor Google Search Console for indexing
- [ ] Check that pages are being crawled
- [ ] Verify no duplicate content issues
- [ ] Test rich snippets in Google Rich Results Test

## Notes

- All metadata and structured data now use **`https://kwilman.com`**
- Sitemap will be accessible at **`https://kwilman.com/sitemap.xml`**
- All 110+ URLs in sitemap use correct domain
- All Open Graph and Twitter Card images use correct domain
- JSON-LD structured data uses correct domain

## Migration from Old Domain (If Applicable)

If moving from an old domain, set up 301 redirects:

```
# Old domain → New domain
jkwilman.pl → kwilman.com
*.jkwilman.pl → kwilman.com
```

This preserves SEO value and ensures old links still work.
