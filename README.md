<div align="center">

# Lot & Pips Calculator for TradingView

[![Download](https://img.shields.io/github/downloads/YOUR_USERNAME/lot-pips-calculator/total?label=Downloads&style=for-the-badge)](../../releases)
[![Release](https://img.shields.io/github/v/release/YOUR_USERNAME/lot-pips-calculator?style=for-the-badge)](../../releases/latest)

A browser extension that calculates lot size, pips, and risk/reward for TradingView's Long/Short Position tools.

**[📥 Download Now](../../releases)** | **[📖 Installation Guide](INSTALL.md)** | **[🚀 Quick Start](QUICK_START.md)**

</div>

---

## ✨ Features

- ✅ Universal calculation for Forex, Gold (XAUUSD), Crypto, and Indices
- ✅ **NEW:** GER30/DAX, US30, NAS100, SPX500 support
- ✅ **NEW:** Risk in USD, EUR, GBP, or % of account
- ✅ **NEW:** Standalone popup calculator
- ✅ Auto-detects symbol from TradingView
- ✅ Shows Lot Size, Margin, Stop Loss ($), Take Profit ($), and R/R ratio
- ✅ Compact UI with no scrollbars
- ✅ Mobile-friendly design
- ✅ Works on both Long and Short positions

## 🚀 Quick Install (No Coding Required)

### Desktop (Chrome/Edge/Brave/Opera)

1. **Download Extension**
   - Go to [Releases](../../releases)
   - Download `lot-pips-calculator.zip`
   - Extract the ZIP file

2. **Install in Browser**
   - Open `chrome://extensions/` (or `edge://extensions/`)
   - Enable "Developer mode" (top-right toggle)
   - Click "Load unpacked"
   - Select the extracted folder

### Mobile (Android - Kiwi Browser)

1. **Install Kiwi Browser**
   - Download from [Google Play Store](https://play.google.com/store/apps/details?id=com.kiwibrowser.browser)

2. **Download Extension**
   - Download `lot-pips-calculator.zip` from [Releases](../../releases)
   - Extract using any file manager

3. **Install Extension**
   - Open Kiwi Browser
   - Go to `chrome://extensions/`
   - Enable "Developer mode"
   - Tap "Load unpacked"
   - Select the extracted folder

### Mobile (iOS - Safari)

iOS doesn't support Chrome extensions. Use TradingView mobile app instead.

## 👨‍💻 For Developers

### Build from Source

1. Install dependencies:
```bash
npm install
```

2. Build production version:
```bash
npm run build
```

3. Output: `build/chrome-mv3-prod`

## 📖 How to Use

### Method 1: Popup Calculator (NEW)

1. Click the extension icon in your browser
2. Select your symbol (EURUSD, GER30, BTCUSD, etc.)
3. Enter trade details:
   - Entry Price
   - Stop Loss
   - Take Profit
   - Risk Amount (USD/EUR/GBP/%)
   - Leverage
4. Click **Calculate**

### Method 2: TradingView Integration

1. Open TradingView chart
2. Add **Long Position** or **Short Position** drawing tool
3. Click on the position → Open settings
4. Fill in your trade details:
   - Entry Price
   - Stop Loss Price
   - Take Profit Price
   - Risk Amount ($ or %)
   - Account Size (if using %)
   - Leverage
5. Scroll to bottom → Click **"Calculate"** button

### Results Display:
- 📊 **Lot Size** (2 decimals)
- 💰 **Margin Required**
- 🔴 **Stop Loss** (pips + $)
- 🟢 **Take Profit** (pips + $)
- ⚖️ **Risk/Reward Ratio**

## 🧮 Calculation Formulas

<details>
<summary><b>Gold (XAUUSD)</b></summary>

- **Pip Size:** 0.01
- **Pip Value:** $1 per lot
- **Lot Size:** Risk / (Stop Loss Pips × $1)

</details>

<details>
<summary><b>Forex (EURUSD, GBPUSD, etc.)</b></summary>

- **Pip Size:** 0.0001
- **Pip Value:** (100,000 × 0.0001) / Entry Price
- **Lot Size:** Risk / (Stop Loss Pips × Pip Value)

</details>

<details>
<summary><b>Crypto (BTCUSD, ETHUSD)</b></summary>

- **Pip Size:** 1
- **Pip Value:** $1 per lot
- **Lot Size:** Risk / (Stop Loss Pips × $1)

</details>

<details>
<summary><b>Indices (GER30, DAX, US30, NAS100, SPX500)</b></summary>

- **Pip Size:** 1.0 (1 point)
- **Pip Value:** $1 per lot per point
- **Lot Size:** Risk / (Stop Loss Points × $1)
- **Example:** Entry 23258.67, SL 23197.95 = 60.72 points

**[📖 Full GER30/DAX Guide](GER30_GUIDE.md)**

</details>

## 📊 Supported Symbols

| Type | Symbols | Pip Size | Status |
|------|---------|----------|--------|
| Forex | EURUSD, GBPUSD, USDJPY, etc. | 0.0001 | ✅ |
| Gold | XAUUSD, GOLD | 0.01 | ✅ |
| Crypto | BTCUSD, ETHUSD | 1.0 | ✅ |
| Indices | GER30, GER40, DAX30, DAX40 | 1.0 | ✅ |
| Indices | US30, NAS100, SPX500 | 1.0 | ✅ |

### Risk Types Supported

- 💵 **USD** - Fixed dollar amount
- 💶 **EUR** - Auto-converts to USD
- 💷 **GBP** - Auto-converts to USD  
- 📊 **%** - Percentage of account size

## 💻 Support

- **Desktop:** Chrome, Edge, Brave, Opera
- **Mobile:** Kiwi Browser (Android)
- **TradingView:** All chart types
- **Currencies:** USD, EUR, GBP, % of account
- **Symbols:** Forex, Gold, Crypto, Indices

## 🐛 Issues & Support

Found a bug or need help?
- 🐞 [Report Bug](../../issues/new?labels=bug)
- ❓ [Ask Question](../../issues/new?labels=question)
- 💡 [Request Feature](../../issues/new?labels=enhancement)

## 📝 License

MIT - Free to use and modify

## ⭐ Support This Project

If this extension helps your trading:
- ⭐ Star this repository
- 👥 Share with other traders
- 🐛 Report bugs to improve it

---

<div align="center">

**Made with ❤️ for traders**

[Download Now](../../releases) • [Installation Guide](INSTALL.md) • [Report Issue](../../issues)

</div>
