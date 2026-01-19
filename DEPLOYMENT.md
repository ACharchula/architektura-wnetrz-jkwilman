# GitHub Pages Deployment Guide

This site is configured for automatic deployment to GitHub Pages using GitHub Actions.

## Prerequisites

- GitHub account
- Git repository
- Custom domain: `kwilman.com`

## Setup Steps

### 1. Create GitHub Repository

```bash
# Initialize git (if not already done)
git init

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Add all files
git add .

# Commit
git commit -m "Initial commit - Jolanta Kwilman website"

# Push to GitHub
git push -u origin main
```

### 2. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Build and deployment**:
   - **Source:** Select "GitHub Actions"
   - Leave other settings as default

### 3. Domain Configuration

The `CNAME` file is already configured with `kwilman.com`.

#### Update DNS Records

In your domain registrar (where you bought kwilman.com):

**For apex domain (kwilman.com):**
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

**Note:** Replace `YOUR_USERNAME` with your actual GitHub username.

### 4. Enable HTTPS

1. In GitHub Pages settings
2. Check **Enforce HTTPS**
3. Wait for certificate to provision (can take up to 24 hours)

## Automatic Deployment

The site will automatically deploy when you push to the `main` branch.

### Workflow File

Location: `.github/workflows/deploy.yml`

This workflow:
- Triggers on push to `main` branch
- Installs dependencies
- Builds the Next.js static site
- Deploys to GitHub Pages

### Manual Deployment

You can also trigger deployment manually:

1. Go to **Actions** tab in your repository
2. Click **Deploy to GitHub Pages**
3. Click **Run workflow**

## Local Build & Test

Test the static export locally before deploying:

```bash
# Install dependencies
npm install

# Build static site
npm run build

# The static files will be in the 'out' directory
# Test with a local server
npx serve out
```

Visit `http://localhost:3000` to preview.

## File Structure

```
.github/
  workflows/
    deploy.yml          # GitHub Actions workflow

public/
  CNAME                 # Custom domain configuration
  .nojekyll             # Disable Jekyll processing

next.config.ts          # Next.js configuration with static export

out/                    # Generated static files (gitignored)
```

## Configuration Files

### next.config.ts

```typescript
const nextConfig: NextConfig = {
  output: 'export',           // Enable static export
  images: {
    unoptimized: true,        // Disable image optimization
  },
  trailingSlash: true,        // Add trailing slashes to URLs
};
```

### public/CNAME

```
kwilman.com
```

### public/.nojekyll

Empty file that prevents GitHub Pages from using Jekyll processing.

## Deployment Checklist

- [ ] Repository created on GitHub
- [ ] All files committed and pushed
- [ ] GitHub Pages enabled with "GitHub Actions" source
- [ ] DNS records configured at domain registrar
- [ ] HTTPS enabled in GitHub Pages settings
- [ ] Workflow run successfully
- [ ] Site accessible at https://kwilman.com

## Monitoring Deployment

### Check Workflow Status

1. Go to **Actions** tab
2. Click on the latest workflow run
3. Check for green checkmarks
4. View logs if there are errors

### Common Issues

**Build Fails:**
- Check the Actions log for error details
- Ensure all dependencies are in package.json
- Test build locally: `npm run build`

**Domain Not Working:**
- Wait 24-48 hours for DNS propagation
- Verify DNS records with: `dig kwilman.com`
- Check CNAME file exists in out/ directory after build

**404 Errors:**
- Check `trailingSlash: true` in next.config.ts
- Verify routes match Next.js file structure

**Images Not Loading:**
- Ensure `unoptimized: true` in images config
- Check image paths are relative (start with /)

## Updating the Site

```bash
# Make your changes
git add .
git commit -m "Description of changes"
git push

# Deployment happens automatically
# Check the Actions tab to monitor progress
```

The site will be live within 2-5 minutes after a successful push.

## Branch Protection (Optional)

For production sites, consider:

1. **Settings** → **Branches** → **Add rule**
2. Branch name pattern: `main`
3. Enable:
   - Require pull request before merging
   - Require status checks to pass

This ensures the build succeeds before deploying.

## Performance

The static site will be:
- ⚡ **Fast** - Pre-rendered HTML
- 🌍 **Global** - Served from GitHub's CDN
- 🆓 **Free** - GitHub Pages is free for public repos
- 🔒 **Secure** - HTTPS enabled by default

## Support

For issues:
- Check GitHub Actions logs
- Review [Next.js Static Export docs](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- Check [GitHub Pages docs](https://docs.github.com/en/pages)

## URLs

- **Production:** https://kwilman.com
- **GitHub Pages:** https://YOUR_USERNAME.github.io/YOUR_REPO_NAME
- **Repository:** https://github.com/YOUR_USERNAME/YOUR_REPO_NAME

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual values.

## Estimated Deployment Time

- Initial setup: 10-15 minutes
- DNS propagation: 1-48 hours
- Each subsequent deployment: 2-5 minutes

## Next Steps After First Deployment

1. ✅ Verify site loads at https://kwilman.com
2. ✅ Test all pages and navigation
3. ✅ Check mobile responsiveness
4. ✅ Submit sitemap to Google Search Console
5. ✅ Test contact form (if applicable)
6. ✅ Monitor Google Analytics (if configured)

---

**Note:** This is a static site. Dynamic features requiring server-side code will not work. All content is generated at build time.
