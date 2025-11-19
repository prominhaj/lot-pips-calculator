# Popup Calculator Usage Guide

## Overview

The popup calculator is a standalone tool that works independently of TradingView. Click the extension icon to access it anytime.

## Features

- ✅ 13 pre-configured symbols
- ✅ Multi-currency risk input (USD, EUR, GBP, %)
- ✅ Real-time exchange rates
- ✅ Instant calculations
- ✅ No TradingView required

## Step-by-Step Guide

### 1. Open Calculator
- Click the extension icon in your browser toolbar
- Popup window appears (340px × auto height)

### 2. Select Symbol
Choose from dropdown:
- **Forex:** EURUSD, GBPUSD, USDJPY
- **Gold:** XAUUSD
- **Crypto:** BTCUSD, ETHUSD
- **Indices:** GER30, GER40, DAX30, DAX40, US30, NAS100, SPX500

### 3. Enter Trade Details

#### Entry Price
- Current market price or planned entry
- Example: `23258.67` for GER30

#### Stop Loss
- Your stop loss price
- Example: `23197.95` (60.72 points below entry)

#### Take Profit
- Your target price
- Example: `23319.39` (60.72 points above entry)

#### Leverage
- Your broker's leverage
- Default: `100`
- Common: 50, 100, 200, 500

### 4. Set Risk Amount

#### Option A: Fixed USD
```
Risk Amount: 10
Type: USD
```
Risk exactly $10 on this trade.

#### Option B: Fixed EUR/GBP
```
Risk Amount: 10
Type: EUR
```
Risk 10 EUR (auto-converts to ~$10.85 USD).

#### Option C: Percentage
```
Risk Amount: 2
Type: %
Account Size: 1000
```
Risk 2% of $1000 = $20.

### 5. Click Calculate

Results appear instantly:
- **LOT:** Calculated lot size (e.g., 0.16)
- **MARGIN:** Required margin (e.g., $37.21)
- **SL:** Stop loss in pips and dollars (e.g., 60.7p · $9.72)
- **TP:** Take profit in pips and dollars (e.g., 60.7p · $9.72)
- **R/R:** Risk/Reward ratio (e.g., 1.00)

## Examples

### Example 1: GER30 Day Trade

**Setup:**
```
Symbol: GER30
Entry Price: 23258.67
Stop Loss: 23197.95
Take Profit: 23319.39
Risk Amount: 10
Risk Type: USD
Leverage: 100
```

**Click Calculate**

**Results:**
```
LOT: 0.16
MARGIN: $37.21
SL: 60.7p · $9.72
TP: 60.7p · $9.72
R/R: 1.00
```

**Interpretation:**
- Trade 0.16 lots
- Need $37.21 margin
- Risk $9.72 to make $9.72
- 1:1 risk/reward ratio

### Example 2: EURUSD with % Risk

**Setup:**
```
Symbol: EURUSD
Entry Price: 1.0850
Stop Loss: 1.0800
Take Profit: 1.0950
Risk Amount: 2
Risk Type: %
Account Size: 1000
Leverage: 100
```

**Click Calculate**

**Results:**
```
LOT: 0.37
MARGIN: $40.15
SL: 50.0p · $18.50
TP: 100.0p · $37.00
R/R: 2.00
```

**Interpretation:**
- 2% of $1000 = $20 risk
- Trade 0.37 lots
- Risk $18.50 to make $37.00
- 2:1 risk/reward ratio

### Example 3: XAUUSD with EUR Risk

**Setup:**
```
Symbol: XAUUSD
Entry Price: 2650.00
Stop Loss: 2640.00
Take Profit: 2670.00
Risk Amount: 10
Risk Type: EUR
Leverage: 100
```

**Click Calculate**

**Results:**
```
LOT: 0.01
MARGIN: $26.50
SL: 1000.0p · $10.00
TP: 2000.0p · $20.00
R/R: 2.00
```

**Interpretation:**
- 10 EUR ≈ $10.85 USD
- Trade 0.01 lots (1 micro lot)
- Risk $10 to make $20
- 2:1 risk/reward ratio

## Risk Type Comparison

| Type | Input | Calculation | Use Case |
|------|-------|-------------|----------|
| USD | 10 | Direct | US-based traders |
| EUR | 10 | 10 × EUR/USD rate | EU-based traders |
| GBP | 10 | 10 × GBP/USD rate | UK-based traders |
| % | 2 | (2/100) × Account Size | Professional risk management |

## Tips & Tricks

### 1. Pre-Trade Planning
Use popup before entering TradingView:
- Calculate multiple scenarios
- Compare different symbols
- Optimize risk/reward

### 2. Quick Lot Size Check
Already on TradingView but want quick check:
- Click extension icon
- Enter same values
- Verify lot size

### 3. Multi-Currency Accounts
If your account is in EUR:
- Set Risk Type to EUR
- Enter EUR amount
- Get USD-equivalent calculations

### 4. Percentage Risk Management
Professional approach:
- Always use % risk
- Set account size once
- Adjust % per trade (1-2%)

### 5. Mobile Trading
On Kiwi Browser (Android):
- Tap extension icon
- Use popup calculator
- Copy lot size to broker app

## Keyboard Shortcuts

- **Tab:** Move between fields
- **Enter:** Calculate (when focused on button)
- **Esc:** Close popup (browser default)

## Common Issues

### Issue 1: Wrong Lot Size
**Problem:** Lot size seems incorrect  
**Solution:** 
- Verify symbol selection
- Check entry/stop prices
- Confirm risk amount and type

### Issue 2: Exchange Rate Not Loading
**Problem:** EUR/GBP not converting  
**Solution:**
- Check internet connection
- Refresh popup
- Use USD as fallback

### Issue 3: Margin Too High
**Problem:** Margin exceeds account  
**Solution:**
- Reduce lot size (increase stop loss distance)
- Increase leverage
- Reduce risk amount

## Advanced Usage

### Scenario Testing
Test multiple scenarios quickly:

**Scenario 1: Tight Stop**
```
Entry: 23258.67
Stop: 23248.67 (10 points)
Risk: $10
Result: LOT 1.00, Margin $232.59
```

**Scenario 2: Wide Stop**
```
Entry: 23258.67
Stop: 23158.67 (100 points)
Risk: $10
Result: LOT 0.10, Margin $23.26
```

### Risk Optimization
Find optimal risk/reward:

1. Enter entry and stop
2. Try different TP levels
3. Compare R/R ratios
4. Choose best setup

### Position Sizing
Calculate max position:

1. Set risk to 1% of account
2. Adjust stop loss distance
3. See resulting lot size
4. Ensure margin is acceptable

## Integration with TradingView

### Workflow 1: Plan → Execute
1. Use popup to plan trade
2. Note lot size
3. Open TradingView
4. Enter position with calculated lot size

### Workflow 2: Verify → Confirm
1. Set up position in TradingView
2. Click Calculate in TradingView
3. Open popup to verify
4. Confirm both match

### Workflow 3: Quick Check
1. Already in TradingView
2. Quick popup check
3. Adjust if needed
4. Execute trade

## Mobile Optimization

The popup is mobile-friendly:
- Touch-optimized inputs
- Large buttons
- Readable fonts
- Compact layout

**On Kiwi Browser:**
1. Tap menu (3 dots)
2. Tap extension icon
3. Use popup normally
4. Pinch to zoom if needed

## Troubleshooting

### Calculator Not Opening
- Ensure extension is enabled
- Check browser permissions
- Reload extension

### Wrong Calculations
- Verify symbol matches your broker
- Check contract specifications
- Test with known values

### Slow Performance
- Close other extensions
- Clear browser cache
- Update browser

## Best Practices

1. **Always verify** calculations with broker specs
2. **Test on demo** before live trading
3. **Use % risk** for consistency
4. **Double-check** entry/stop prices
5. **Keep leverage** reasonable (≤100)

## Support

Need help?
- [Report Issue](../../issues/new?labels=bug)
- [Ask Question](../../issues/new?labels=question)
- [Request Feature](../../issues/new?labels=enhancement)

---

**Quick Reference:**
- [GER30/DAX Guide](GER30_GUIDE.md)
- [New Features](FEATURES_v1.1.md)
- [Main README](README.md)
