# GitHub Pages - Quick Setup Guide

## ✅ Files Ready for Deployment

All necessary files have been configured for GitHub Pages deployment.

### Configuration Files Created

1. **`.github/workflows/deploy.yml`** - Automatic deployment workflow
2. **`public/CNAME`** - Custom domain configuration (kwilman.com)
3. **`public/.nojekyll`** - Disables Jekyll processing
4. **`next.config.ts`** - Static export configuration
5. **`DEPLOYMENT.md`** - Complete deployment guide

## Quick Start (5 Steps)

### 1. Create GitHub Repository

```bash
cd new-site
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO` with your GitHub username and repository name.

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. **Settings** → **Pages**
3. **Source:** Select "GitHub Actions"
4. Save

### 3. Configure Custom Domain DNS

Add these DNS records at your domain registrar:

```
Type: A
Name: @
Values: 
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
```

```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

### 4. Wait for Deployment

- GitHub Actions will automatically build and deploy
- Check the **Actions** tab for progress
- First deployment takes 5-10 minutes

### 5. Verify

Visit https://kwilman.com (after DNS propagates - can take 1-48 hours)

## What Happens Automatically

When you push to `main` branch:

1. ✅ GitHub Actions runs
2. ✅ Dependencies installed
3. ✅ Next.js builds static site
4. ✅ Site deployed to GitHub Pages
5. ✅ Available at kwilman.com

## DNS Verification

Check DNS propagation:

```bash
# Check A records
dig kwilman.com

# Check CNAME
dig www.kwilman.com
```

## Manual Build Test (Optional)

Test locally before pushing:

```bash
npm install
npm run build
npx serve out
```

Visit http://localhost:3000

## Monitoring Deployment

- **Actions Tab:** See build status and logs
- **Settings → Pages:** See deployment URL and status
- **Commits:** Green checkmark = successful deployment

## Current Configuration

| Setting | Value |
|---------|-------|
| Domain | kwilman.com |
| Branch | main |
| Build Tool | Next.js 15 |
| Deploy Method | GitHub Actions |
| Cost | Free |

## Files Structure

```
new-site/
├── .github/
│   └── workflows/
│       └── deploy.yml          ← Deployment automation
├── public/
│   ├── CNAME                   ← Domain configuration
│   └── .nojekyll               ← GitHub Pages setting
├── next.config.ts              ← Static export enabled
├── DEPLOYMENT.md               ← Full guide
└── README.md                   ← Updated with deploy info
```

## After First Deployment

1. ✅ Test all pages
2. ✅ Check mobile view
3. ✅ Submit sitemap to Google: https://kwilman.com/sitemap.xml
4. ✅ Enable HTTPS in GitHub Pages settings
5. ✅ Set up Google Analytics (optional)

## Troubleshooting

**"Actions not running"**
- Check repository settings → Actions are enabled

**"Build failed"**
- View logs in Actions tab
- Test locally: `npm run build`

**"Domain not working"**
- Wait 24-48 hours for DNS
- Verify CNAME file in output: `cat out/CNAME`

**"404 errors"**
- Check `trailingSlash: true` in next.config.ts
- Rebuild and redeploy

## Need Help?

- 📖 See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed guide
- 📖 See [README.md](./README.md) for general documentation
- 🔧 Check GitHub Actions logs for build errors
- 🌐 Test DNS with https://dnschecker.org

## Ready to Deploy?

```bash
git push origin main
```

That's it! Your site will be live in minutes. 🚀

---

**Note:** The site is a static export. All pages are pre-rendered at build time. Perfect for portfolios, blogs, and documentation sites.
