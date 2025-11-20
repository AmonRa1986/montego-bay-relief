# GitHub Pages Deployment Guide for Montego Bay Relief Website

This guide provides step-by-step instructions for deploying your Montego Bay Relief nonprofit website to GitHub Pages with your custom domain.

---

## Prerequisites

- GitHub account
- Git installed on your local machine
- Your custom domain (e.g., `montegobayrelief.org`)
- Access to your domain's DNS settings

---

## Part 1: Prepare the Website for Deployment

### Step 1: Build the Production Version

The website needs to be built for production before deployment. Run these commands in your terminal:

```bash
cd /path/to/montego_bay_relief_website
pnpm install
pnpm run build
```

This creates a `dist` folder containing the optimized production files.

### Step 2: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository settings:
   - **Repository name**: `montego-bay-relief-website` (or your preferred name)
   - **Description**: "Official website for Montego Bay Relief, Inc. - Hurricane Melissa disaster relief nonprofit"
   - **Visibility**: Public (required for free GitHub Pages)
   - **Do NOT** initialize with README, .gitignore, or license
4. Click **"Create repository"**

---

## Part 2: Deploy to GitHub Pages

### Step 3: Initialize Git and Push to GitHub

From your project directory, run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Montego Bay Relief nonprofit website"

# Add GitHub repository as remote (replace with your actual repository URL)
git remote add origin https://github.com/YOUR_USERNAME/montego-bay-relief-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Replace** `YOUR_USERNAME` with your actual GitHub username.

### Step 4: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - **Branch**: `main`
   - **Folder**: `/root` (or `/docs` if you move your built files there)
5. Click **"Save"**

### Step 5: Add GitHub Actions for Automatic Deployment

Create a file at `.github/workflows/deploy.yml` in your repository:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '22'
      
      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Build
        run: pnpm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './client/dist'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

Commit and push this file:

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions deployment workflow"
git push
```

Your website will now automatically deploy whenever you push changes to the `main` branch.

---

## Part 3: Connect Your Custom Domain

### Step 6: Add Custom Domain in GitHub

1. Go to your repository **Settings** → **Pages**
2. Under **"Custom domain"**, enter your domain: `montegobayrelief.org`
3. Click **"Save"**
4. Check **"Enforce HTTPS"** (may take a few minutes to become available)

### Step 7: Configure DNS Settings

Log in to your domain registrar (e.g., GoDaddy, Namecheap, Google Domains) and update your DNS records:

#### Option A: Apex Domain (montegobayrelief.org)

Add these **A records**:

| Type | Name | Value              | TTL  |
|------|------|--------------------|------|
| A    | @    | 185.199.108.153    | 3600 |
| A    | @    | 185.199.109.153    | 3600 |
| A    | @    | 185.199.110.153    | 3600 |
| A    | @    | 185.199.111.153    | 3600 |

#### Option B: Subdomain (www.montegobayrelief.org)

Add this **CNAME record**:

| Type  | Name | Value                                    | TTL  |
|-------|------|------------------------------------------|------|
| CNAME | www  | YOUR_USERNAME.github.io                  | 3600 |

**Replace** `YOUR_USERNAME` with your GitHub username.

#### Recommended: Use Both

Set up both the apex domain and www subdomain:

1. Add all four **A records** (from Option A)
2. Add the **CNAME record** for `www` (from Option B)

### Step 8: Verify DNS Configuration

DNS changes can take 24-48 hours to propagate, but usually complete within a few hours.

**Check DNS propagation:**
- Visit [whatsmydns.net](https://www.whatsmydns.net)
- Enter your domain name
- Select "A" or "CNAME" record type
- Verify the correct IP addresses appear globally

**Test your website:**
- Visit `https://montegobayrelief.org`
- Visit `https://www.montegobayrelief.org`
- Both should load your website with HTTPS (secure padlock icon)

---

## Part 4: Update Website Configuration

### Step 9: Update Base URL (if needed)

If your site has routing issues, update the `vite.config.ts` file:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Use '/' for custom domain
});
```

### Step 10: Create CNAME File

Create a file named `CNAME` (no extension) in your `client/public/` directory:

```
montegobayrelief.org
```

This ensures GitHub Pages knows your custom domain even after rebuilds.

---

## Part 5: Ongoing Maintenance

### Making Updates to Your Website

1. **Edit files locally** in your project directory
2. **Test changes** by running `pnpm run dev`
3. **Commit changes**:
   ```bash
   git add .
   git commit -m "Update: description of changes"
   git push
   ```
4. GitHub Actions will automatically rebuild and deploy your site (takes 2-5 minutes)

### Monitoring Deployments

- Go to your repository → **Actions** tab
- View deployment status and logs
- Green checkmark = successful deployment
- Red X = deployment failed (click to see error logs)

---

## Troubleshooting

### Issue: Website shows 404 error

**Solution:**
- Verify GitHub Pages is enabled in Settings → Pages
- Check that the correct branch and folder are selected
- Ensure the `dist` folder contains your built files

### Issue: Custom domain not working

**Solution:**
- Verify DNS records are correct (use whatsmydns.net)
- Wait 24-48 hours for DNS propagation
- Clear your browser cache
- Try accessing in incognito/private browsing mode

### Issue: HTTPS not working

**Solution:**
- Wait a few minutes after adding custom domain
- Uncheck and re-check "Enforce HTTPS" in GitHub Pages settings
- Verify DNS records point to correct GitHub IPs

### Issue: Styles or images not loading

**Solution:**
- Check `vite.config.ts` has `base: '/'`
- Verify all asset paths use relative URLs (e.g., `/logo.png` not `./logo.png`)
- Clear browser cache and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

---

## Security Best Practices

1. **Enable HTTPS**: Always enforce HTTPS in GitHub Pages settings
2. **Keep dependencies updated**: Run `pnpm update` regularly
3. **Monitor repository**: Enable GitHub security alerts for vulnerabilities
4. **Protect sensitive data**: Never commit API keys or passwords to GitHub

---

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domain Setup Guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

---

## Support

If you encounter issues during deployment:

1. Check the **Actions** tab in your GitHub repository for error logs
2. Review the [GitHub Pages troubleshooting guide](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites)
3. Verify your DNS settings with your domain registrar's support team

---

**Congratulations!** Your Montego Bay Relief website is now live and accessible to donors worldwide. 🎉
