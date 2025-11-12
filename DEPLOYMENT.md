# Deployment Guide

## 🚀 Quick Deploy to GitHub

### 1. Initialize Git (if not done)
```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. Create GitHub Repository
1. Go to https://github.com/new
2. Name: `lot-pips-calculator`
3. Description: `TradingView Lot & Pips Calculator Extension`
4. Make it **Public** (so anyone can download)
5. Click "Create repository"

### 3. Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/lot-pips-calculator.git
git branch -M main
git push -u origin main
```

### 4. Create First Release

#### Option A: Automatic (Recommended)
```bash
# Build the extension
npm run build

# Create and push a tag
git tag v1.0.0
git push origin v1.0.0
```
GitHub Actions will automatically build and create the release!

#### Option B: Manual
1. Run `release.bat` (Windows) to build
2. Go to your GitHub repo
3. Click "Releases" → "Create a new release"
4. Tag: `v1.0.0`
5. Title: `v1.0.0 - Initial Release`
6. Upload `lot-pips-calculator.zip`
7. Click "Publish release"

## 📦 What Users Will See

After publishing, users can:
1. Go to your repo's Releases page
2. Download `lot-pips-calculator.zip`
3. Extract and install (see INSTALL.md)

## 🔄 Update Extension

When you make changes:

```bash
# Make your changes
git add .
git commit -m "Fix crypto calculation"

# Create new version
git tag v1.0.1
git push origin main
git push origin v1.0.1
```

GitHub Actions will auto-build the new release!

## 🌐 Share Your Extension

Share this link with users:
```
https://github.com/YOUR_USERNAME/lot-pips-calculator/releases
```

Or create a short link:
```
https://github.com/YOUR_USERNAME/lot-pips-calculator
```

## ✅ Checklist

- [ ] Repository is **Public**
- [ ] README.md has installation instructions
- [ ] First release (v1.0.0) is published
- [ ] ZIP file is attached to release
- [ ] Tested installation on Chrome/Edge
- [ ] Tested on Kiwi Browser (Android)

## 📱 Distribution Options

### Free Options:
1. **GitHub Releases** (Current) - ✅ Free, unlimited downloads
2. **Chrome Web Store** - $5 one-time fee, easier for users
3. **Edge Add-ons** - Free, reaches Edge users

### Recommended:
Start with GitHub (free), then publish to Chrome Web Store later for easier installation.

## 🛠️ Chrome Web Store (Optional)

If you want easier installation:

1. Go to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
2. Pay $5 one-time registration fee
3. Upload `lot-pips-calculator.zip`
4. Fill in details
5. Submit for review (1-3 days)

Benefits:
- One-click install
- Auto-updates
- More professional

## 📊 Track Downloads

GitHub shows download counts on Releases page automatically!
