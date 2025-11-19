# Fixes v1.1.2 - State Reset & TradingView Button Fix

## ✅ Issues Fixed

### 1. **Popup State Reset on Close** ✅
**Problem:** Old values persisted when reopening popup

**Solution:**
- Removed sessionStorage completely
- Popup now always starts with default values
- Clean state on every open

### 2. **TradingView Calculate Button Not Working** ✅
**Problem:** Button click not showing results

**Solution:**
- Simplified content.ts code
- Removed unnecessary logging
- Fixed button onclick handler
- Streamlined calculate function

---

## 📝 Changes

### popup.tsx
**Before:**
```tsx
// Complex sessionStorage logic
useEffect(() => {
  const saved = sessionStorage.getItem('lotPipsCalc')
  // Load saved state...
}, [])

useEffect(() => {
  // Save state...
}, [symbol, entryPrice, ...])
```

**After:**
```tsx
// Simple initialization
useEffect(() => {
  setSymbol("EURUSD")
  fetch('https://api.exchangerate-api.com/v4/latest/USD')
    .then(r => r.json())
    .then(data => setExchangeRates(data.rates))
    .catch(() => {})
}, [])
```

### content.ts
**Before:**
- Complex error handling
- Excessive console logging
- addEventListener with preventDefault
- Multiple checks

**After:**
- Simple try-catch
- Minimal logging
- Direct onclick handler
- Clean code

---

## 🧪 Testing

### Test Popup Reset
1. Open popup
2. Enter values
3. Close popup
4. Reopen popup
5. ✅ All fields should be empty/default

### Test TradingView Button
1. Open TradingView chart
2. Add Long Position tool
3. Fill: Entry, SL, TP, Risk
4. Click Calculate button
5. ✅ Results should appear immediately

---

## 📦 Version

**Previous:** v1.1.1
**Current:** v1.1.2

**Status:** ✅ Both Issues Fixed
