# Version 1.1.0 - New Features

## 🎉 What's New

### 1. GER30/DAX Support
- Full support for German DAX index (GER30, GER40, DAX30, DAX40)
- US indices: US30 (Dow Jones), NAS100 (NASDAQ), SPX500 (S&P 500)
- Accurate pip calculation: 1 pip = 1.0 point
- Contract size: 1 index unit per lot

### 2. Multi-Currency Risk Input
Calculate risk in multiple currencies:
- **USD** - US Dollar (default)
- **EUR** - Euro (auto-converts to USD)
- **GBP** - British Pound (auto-converts to USD)
- **%** - Percentage of account size

### 3. Standalone Popup Calculator
- Click extension icon for instant calculator
- No need to open TradingView
- Pre-calculate trades before entering
- 13 pre-configured symbols

### 4. Enhanced TradingView Integration
- Detects % risk automatically
- Reads account size from TradingView
- Supports all new symbols
- Improved accuracy

## 📊 Supported Symbols (13 Total)

### Forex (4)
- EURUSD
- GBPUSD
- USDJPY
- (All major pairs supported)

### Precious Metals (1)
- XAUUSD (Gold)

### Cryptocurrencies (2)
- BTCUSD
- ETHUSD

### Indices (6)
- GER30 / GER40
- DAX30 / DAX40
- US30
- NAS100
- SPX500

## 🧮 Calculation Examples

### Example 1: GER30 with USD Risk
```
Symbol: GER30
Entry: 23258.67
Stop Loss: 23197.95
Risk: $10 USD
Leverage: 100

Result:
- Stop Loss: 60.72 pips
- Lot Size: 0.16
- Margin: $37.21
- SL Dollar: $9.72
```

### Example 2: EURUSD with % Risk
```
Symbol: EURUSD
Entry: 1.0850
Stop Loss: 1.0800
Risk: 2%
Account Size: $1000
Leverage: 100

Result:
- Risk Amount: $20
- Stop Loss: 50 pips
- Lot Size: 0.37
- Margin: $40.15
```

### Example 3: XAUUSD with EUR Risk
```
Symbol: XAUUSD
Entry: 2650.00
Stop Loss: 2640.00
Risk: 10 EUR (≈ $10.85 USD)
Leverage: 100

Result:
- Stop Loss: 1000 pips (10.00 points)
- Lot Size: 0.01
- Margin: $26.50
```

## 🚀 How to Use New Features

### Popup Calculator
1. Click extension icon
2. Select symbol from dropdown
3. Enter prices and risk
4. Choose risk type (USD/EUR/GBP/%)
5. Click Calculate

### TradingView with %
1. Open Long/Short Position settings
2. Set Risk dropdown to "%"
3. Enter risk percentage (e.g., 2)
4. Enter Account Size
5. Click Calculate button

### GER30/DAX Trading
1. Open GER30 chart on TradingView
2. Add Long/Short Position tool
3. Extension auto-detects GER30
4. Enter trade details
5. Get accurate lot size for indices

## 🔄 Currency Conversion

The extension uses live exchange rates from:
- API: exchangerate-api.com
- Updates: Real-time on popup open
- Fallback: 1:1 if API unavailable

**Supported Conversions:**
- EUR → USD
- GBP → USD
- % → USD (based on account size)

## 📱 Compatibility

### Desktop Browsers
- ✅ Chrome
- ✅ Edge
- ✅ Brave
- ✅ Opera

### Mobile
- ✅ Kiwi Browser (Android)
- ❌ iOS Safari (not supported)

### TradingView
- ✅ All chart types
- ✅ Long Position tool
- ✅ Short Position tool
- ✅ All timeframes

## 🎯 Use Cases

### Day Trading Indices
Perfect for:
- GER30/DAX scalping
- US30 day trading
- NAS100 momentum trading
- Quick lot size calculations

### Forex with % Risk
Ideal for:
- Consistent risk management
- Account growth tracking
- Professional trading
- Multiple currency accounts

### Multi-Currency Accounts
Great for:
- EUR-based accounts
- GBP-based accounts
- International traders
- Automatic conversion

## 💡 Pro Tips

1. **Use % Risk** for consistent risk management
2. **Popup Calculator** for pre-trade planning
3. **Check Broker Specs** for GER30 contract size
4. **Test on Demo** before live trading
5. **Bookmark GER30_GUIDE.md** for reference

## 🐛 Known Limitations

- Exchange rates require internet connection
- Some brokers may have different GER30 contract sizes
- iOS not supported (browser limitation)
- Requires TradingView Pro for some features

## 📚 Documentation

- [GER30/DAX Full Guide](GER30_GUIDE.md)
- [Installation Guide](INSTALL.md)
- [Quick Start](QUICK_START.md)
- [Main README](README.md)

## 🔮 Coming Soon

- More indices (FTSE, CAC40, etc.)
- Custom contract size input
- Trade journal integration
- Risk/Reward optimizer
- Multi-position calculator

---

**Version:** 1.1.0  
**Release Date:** 2024  
**Changelog:** Added GER30/DAX, multi-currency, popup calculator
