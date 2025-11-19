# GER30/DAX Calculation Guide

## Supported Indices

- **GER30** / **GER40** (Germany DAX)
- **DAX30** / **DAX40**
- **US30** (Dow Jones)
- **NAS100** (NASDAQ)
- **SPX500** (S&P 500)

## How GER30/DAX Works

### 1. Pip Definition
- **1 pip (point)** = 1.0 price move
- Example: `23258.67` → `23259.67` = **+1 pip**
- Example: `23258.67` → `23268.67` = **+10 pips**

### 2. Contract Specifications
- **Contract Size:** 1 index unit per lot
- **Pip Value:** $1 per pip per lot (typically)
- **Pip Size:** 1.0

### 3. Calculation Formulas

#### Pip Value
```
Pip Value = ContractSize × LotSize × PointValue
          = 1 × LotSize × 1
          = LotSize
```

**Examples:**
- 0.10 lot → $0.10 per pip
- 0.50 lot → $0.50 per pip
- 1.00 lot → $1.00 per pip

#### Lot Size from Risk
```
LotSize = RiskAmount / (StopLossPips × PipValuePerLot)
```

**Example 1:**
- Risk: $10
- Stop Loss: 20 points
- Pip Value: $1/point

```
LotSize = 10 / (20 × 1) = 0.50 lots
```

**Example 2:**
- Risk: $50
- Stop Loss: 100 points
- Pip Value: $1/point

```
LotSize = 50 / (100 × 1) = 0.50 lots
```

#### Margin Required
```
Margin = (LotSize × ContractSize × EntryPrice) / Leverage
```

**Example:**
- Lot Size: 0.50
- Entry Price: 23258.67
- Leverage: 100

```
Margin = (0.50 × 1 × 23258.67) / 100 = $116.29
```

## Using the Calculator

### Method 1: Popup Calculator

1. Click extension icon
2. Select **GER30**, **GER40**, **DAX30**, or **DAX40**
3. Enter:
   - Entry Price: `23258.67`
   - Stop Loss: `23197.95`
   - Take Profit: `23319.39`
   - Risk Amount: `10`
   - Risk Type: `USD` or `%` or `EUR`
   - Leverage: `100`
4. Click **Calculate**

### Method 2: TradingView Integration

1. Open TradingView chart for GER30/DAX
2. Add **Long Position** or **Short Position** tool
3. Click position → Open settings
4. Fill in:
   - Entry Price
   - Stop Loss Price
   - Take Profit Price
   - Risk Amount (supports % or USD)
   - Account Size (if using %)
   - Leverage
5. Click **Calculate** button

## Risk Types Supported

### 1. Fixed USD Amount
- Risk: `10` USD
- Direct calculation

### 2. Percentage of Account
- Risk: `2` %
- Account Size: `1000` USD
- Actual Risk: `$20`

### 3. Other Currencies (EUR, GBP)
- Risk: `10` EUR
- Converts to USD automatically
- Uses live exchange rates

## Complete Example

**Trade Setup:**
- Symbol: GER30
- Entry: 23258.67
- Stop Loss: 23197.95 (60.72 points below)
- Take Profit: 23319.39 (60.72 points above)
- Risk: $10 USD
- Leverage: 100

**Calculations:**
```
Stop Loss Pips = |23258.67 - 23197.95| / 1 = 60.72 pips
Pip Value = 1 (for indices)
Lot Size = 10 / (60.72 × 1) = 0.16 lots

Margin = (0.16 × 1 × 23258.67) / 100 = $37.21

Take Profit Pips = |23319.39 - 23258.67| / 1 = 60.72 pips
TP Dollar = 0.16 × 60.72 × 1 = $9.72
SL Dollar = 0.16 × 60.72 × 1 = $9.72

R/R Ratio = 60.72 / 60.72 = 1.00
```

## Broker Variations

Some brokers may have different contract sizes:
- **1 lot = 1 index** → Pip Value = $1
- **1 lot = 10 indices** → Pip Value = $10

Always check your broker's contract specifications!

## Tips

1. **Verify Contract Size:** Check your broker's specs
2. **Use Proper Leverage:** Higher leverage = lower margin
3. **Risk Management:** Never risk more than 1-2% per trade
4. **Test First:** Use demo account to verify calculations

## Supported Symbols Summary

| Symbol | Type | Pip Size | Contract Size | Pip Value |
|--------|------|----------|---------------|-----------|
| GER30/40 | Index | 1.0 | 1 | $1 |
| DAX30/40 | Index | 1.0 | 1 | $1 |
| US30 | Index | 1.0 | 1 | $1 |
| NAS100 | Index | 1.0 | 1 | $1 |
| SPX500 | Index | 1.0 | 1 | $1 |
| XAUUSD | Gold | 0.01 | 100 | $1 |
| BTCUSD | Crypto | 1.0 | 1 | $1 |
| EURUSD | Forex | 0.0001 | 100000 | Variable |
