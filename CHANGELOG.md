# Changelog

All notable changes to this project will be documented in this file.

## [1.1.0] - 2024

### 🎉 Added
- **GER30/DAX Support:** Full calculation support for German DAX index (GER30, GER40, DAX30, DAX40)
- **US Indices:** Added US30 (Dow Jones), NAS100 (NASDAQ), SPX500 (S&P 500)
- **Multi-Currency Risk:** Support for USD, EUR, GBP, and % of account
- **Popup Calculator:** Standalone calculator accessible via extension icon
- **Live Exchange Rates:** Real-time currency conversion via API
- **13 Pre-configured Symbols:** EURUSD, GBPUSD, USDJPY, XAUUSD, BTCUSD, ETHUSD, GER30, GER40, DAX30, DAX40, US30, NAS100, SPX500

### 📚 Documentation
- Added `GER30_GUIDE.md` - Complete GER30/DAX calculation guide
- Added `FEATURES_v1.1.md` - New features overview
- Added `POPUP_USAGE.md` - Popup calculator usage guide
- Added `CALCULATION_TESTS.md` - Test cases and verification
- Added `IMPLEMENTATION_SUMMARY.md` - Technical implementation details
- Added `QUICK_REFERENCE.md` - Quick reference card
- Updated `README.md` - Added new features and symbols

### 🔧 Changed
- Refactored symbol detection from boolean flags to type-based system
- Enhanced TradingView integration to support % risk
- Improved code structure for better maintainability
- Updated version from 1.0.2 to 1.1.0

### 🐛 Fixed
- Improved accuracy for index calculations
- Better handling of percentage-based risk
- Enhanced symbol detection reliability

### 🎨 UI/UX
- TradingView-inspired dark theme for popup
- Mobile-optimized touch targets
- Compact layout with no scrollbars
- Clear color coding (red for SL, green for TP)

---

## [1.0.2] - Previous Release

### ✨ Features
- Basic Forex calculation (EURUSD, GBPUSD, etc.)
- Gold (XAUUSD) support
- Crypto (BTCUSD, ETHUSD) support
- TradingView Long/Short Position integration
- Calculate button in TradingView settings
- Results display: Lot Size, Margin, SL, TP, R/R

### 📱 Platform Support
- Chrome, Edge, Brave, Opera
- Kiwi Browser (Android)

---

## Version Comparison

| Feature | v1.0.2 | v1.1.0 |
|---------|--------|--------|
| Forex Support | ✅ | ✅ |
| Gold Support | ✅ | ✅ |
| Crypto Support | ✅ | ✅ |
| Indices Support | ❌ | ✅ |
| GER30/DAX | ❌ | ✅ |
| US30/NAS100 | ❌ | ✅ |
| USD Risk | ✅ | ✅ |
| EUR/GBP Risk | ❌ | ✅ |
| % Risk | ❌ | ✅ |
| Popup Calculator | ❌ | ✅ |
| Exchange Rates | ❌ | ✅ |
| Symbols Count | 3 types | 13 symbols |
| Documentation | Basic | Comprehensive |

---

## Upgrade Guide

### From v1.0.2 to v1.1.0

1. **Download Latest Release**
   - Go to [Releases](../../releases)
   - Download v1.1.0 ZIP

2. **Remove Old Version**
   - Go to `chrome://extensions/`
   - Remove old version

3. **Install New Version**
   - Extract new ZIP
   - Load unpacked
   - Select extracted folder

4. **New Features Available**
   - Click extension icon for popup calculator
   - Use % risk in TradingView
   - Trade GER30/DAX and other indices

### Breaking Changes
- None! Fully backward compatible

### Migration Notes
- All existing functionality preserved
- New features are additive
- No configuration changes needed

---

## Roadmap

### v1.2.0 (Planned)
- [ ] More indices (FTSE, CAC40, Nikkei)
- [ ] Custom contract size input
- [ ] Settings page
- [ ] Dark/light theme toggle
- [ ] Offline support

### v1.3.0 (Planned)
- [ ] Multiple position calculator
- [ ] Risk/reward optimizer
- [ ] Trade journal integration
- [ ] Profit calculator
- [ ] Break-even calculator

### v2.0.0 (Future)
- [ ] Advanced risk management
- [ ] Portfolio calculator
- [ ] Correlation analysis
- [ ] Backtesting integration
- [ ] Mobile app

---

## Support

- **Report Bugs:** [GitHub Issues](../../issues/new?labels=bug)
- **Request Features:** [GitHub Issues](../../issues/new?labels=enhancement)
- **Ask Questions:** [GitHub Discussions](../../discussions)

---

## Contributors

- **Author:** prominhaj
- **Contributors:** Open for contributions!

---

## License

MIT License - See [LICENSE](LICENSE) file for details

---

**Latest Version:** 1.1.0  
**Release Date:** 2024  
**Status:** Stable ✅
