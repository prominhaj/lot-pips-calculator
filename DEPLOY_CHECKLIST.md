# 📋 Deployment Checklist

Follow these steps to deploy your extension to GitHub:

## ✅ Step 1: Prepare Repository

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial release - Lot & Pips Calculator"
```

## ✅ Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `lot-pips-calculator`
3. Description: `TradingView Lot & Pips Calculator - Forex, Gold & Crypto`
4. **Important:** Select **Public** (so users can download)
5. **Don't** initialize with README (you already have one)
6. Click "Create repository"

## ✅ Step 3: Push to GitHub

Replace `YOUR_USERNAME` with your GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/lot-pips-calculator.git
git branch -M main
git push -u origin main
```

## ✅ Step 4: Update README Badges

Edit `README.md` and replace `YOUR_USERNAME` with your actual GitHub username in the badge URLs.

## ✅ Step 5: Build Extension

Run this command:

```bash
npm run build
```

Or double-click `release.bat` (Windows)

This creates:
- `build/chrome-mv3-prod` folder
- `lot-pips-calculator.zip` file

## ✅ Step 6: Create First Release

### Option A: Automatic (Recommended)

```bash
# Create and push tag
git tag v1.0.0
git push origin v1.0.0
```

GitHub Actions will automatically:
- Build the extension
- Create ZIP file
- Create release with download link

### Option B: Manual

1. Go to your GitHub repo
2. Click "Releases" → "Draft a new release"
3. Click "Choose a tag" → Type `v1.0.0` → "Create new tag"
4. Release title: `v1.0.0 - Initial Release`
5. Description:
```markdown
## 🎉 First Release

### Features
- ✅ Forex lot size calculation
- ✅ Gold (XAUUSD) support
- ✅ Crypto (BTC/ETH) support
- ✅ Auto symbol detection
- ✅ Risk/Reward calculator

### Installation
Download `lot-pips-calculator.zip` and follow [Installation Guide](INSTALL.md)

### Supported Browsers
- Chrome, Edge, Brave (Desktop)
- Kiwi Browser (Android)
```
6. Upload `lot-pips-calculator.zip`
7. Click "Publish release"

## ✅ Step 7: Test Installation

1. Go to your releases page: `https://github.com/YOUR_USERNAME/lot-pips-calculator/releases`
2. Download the ZIP
3. Extract and install in Chrome
4. Test on TradingView

## ✅ Step 8: Share with Users

Your extension is now available at:
```
https://github.com/YOUR_USERNAME/lot-pips-calculator/releases
```

Share this link anywhere:
- Trading forums
- Social media
- Discord/Telegram groups
- Reddit (r/Forex, r/TradingView)

## 🎯 What Users Will Do

1. Visit your releases page
2. Download `lot-pips-calculator.zip`
3. Extract the ZIP
4. Open `chrome://extensions/`
5. Enable "Developer mode"
6. Click "Load unpacked"
7. Select extracted folder
8. Done! ✅

## 🔄 Future Updates

When you make changes:

```bash
# Make changes to code
git add .
git commit -m "Fix: Improved crypto calculation"

# Create new version
git tag v1.0.1
git push origin main
git push origin v1.0.1
```

GitHub Actions will auto-create new release!

## 📊 Monitor Usage

- GitHub shows download counts automatically
- Check "Insights" → "Traffic" for repo visits
- See "Releases" for download statistics

## 🆘 Troubleshooting

**GitHub Actions not running?**
- Make sure `.github/workflows/release.yml` exists
- Check "Actions" tab is enabled in repo settings

**Build fails?**
- Run `npm install` first
- Make sure Node.js 18+ is installed
- Check `npm run build` works locally

**Users can't download?**
- Make sure repository is **Public**
- Check release is published (not draft)
- Verify ZIP file is attached

## ✨ Optional: Chrome Web Store

For easier installation (one-click install):

1. Pay $5 registration at [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
2. Upload `lot-pips-calculator.zip`
3. Fill in details
4. Submit for review (1-3 days)

Benefits:
- One-click install for users
- Auto-updates
- Better discoverability
- More professional

## 🎉 You're Done!

Your extension is now:
- ✅ Free to download
- ✅ Available on all devices (Desktop + Android)
- ✅ Auto-updates via GitHub Releases
- ✅ Open source (users can see code)

Congratulations! 🎊
