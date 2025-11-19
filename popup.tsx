import { useState, useEffect } from "react"
import "./style.css"

function IndexPopup() {
  const [symbol, setSymbol] = useState("")
  const [entryPrice, setEntryPrice] = useState("")
  const [stopPrice, setStopPrice] = useState("")
  const [takeProfitPrice, setTakeProfitPrice] = useState("")
  const [riskAmount, setRiskAmount] = useState("")
  const [riskType, setRiskType] = useState("USD")
  const [accountSize, setAccountSize] = useState("1000")
  const [leverage, setLeverage] = useState("100")
  const [result, setResult] = useState<any>(null)
  const [exchangeRates, setExchangeRates] = useState<any>({})

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('lotPipsCalc')
    console.log({ saved })
    if (saved) {
      const data = JSON.parse(saved)
      setSymbol(data.symbol || "EURUSD")
      setEntryPrice(data.entryPrice || "")
      setStopPrice(data.stopPrice || "")
      setTakeProfitPrice(data.takeProfitPrice || "")
      setRiskAmount(data.riskAmount || "")
      setRiskType(data.riskType || "USD")
      setAccountSize(data.accountSize || "1000")
      setLeverage(data.leverage || "100")
      setResult(data.result || null)
    } else {
      setSymbol("EURUSD")
    }

    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then(r => r.json())
      .then(data => setExchangeRates(data.rates))
      .catch(() => { })

    const cleanup = () => localStorage.removeItem('lotPipsCalc')
    window.addEventListener('beforeunload', cleanup)
    return () => window.removeEventListener('beforeunload', cleanup)
  }, [])

  // Save to localStorage on state change
  useEffect(() => {
    const data = { symbol, entryPrice, stopPrice, takeProfitPrice, riskAmount, riskType, accountSize, leverage, result }
    localStorage.setItem('lotPipsCalc', JSON.stringify(data))
  }, [symbol, entryPrice, stopPrice, takeProfitPrice, riskAmount, riskType, accountSize, leverage, result])

  const getSymbolConfig = (sym: string) => {
    const s = sym.toUpperCase()
    if (s.includes('XAU') || s.includes('GOLD')) return { contractSize: 100, pipSize: 0.01, pipValue: 1, type: 'Gold' }
    if (s.includes('BTC') || s.includes('ETH')) return { contractSize: 1, pipSize: 1, pipValue: 1, type: 'Crypto' }
    if (s.includes('GER') || s.includes('DAX')) return { contractSize: 1, pipSize: 1, pipValue: 1, type: 'Index' }
    if (s.includes('US30') || s.includes('NAS100') || s.includes('SPX')) return { contractSize: 1, pipSize: 1, pipValue: 1, type: 'Index' }
    return { contractSize: 100000, pipSize: 0.0001, pipValue: null, type: 'Forex' }
  }

  const calculate = () => {
    const entry = parseFloat(entryPrice)
    const stop = parseFloat(stopPrice)
    const tp = parseFloat(takeProfitPrice)
    const lev = parseFloat(leverage) || 100
    let risk = parseFloat(riskAmount)
    const accSize = parseFloat(accountSize)

    if (!entry || !stop || !risk) return

    // Convert risk to USD
    if (riskType === '%') {
      risk = (risk / 100) * accSize
    } else if (riskType !== 'USD' && exchangeRates[riskType]) {
      risk = risk / exchangeRates[riskType]
    }

    const config = getSymbolConfig(symbol)
    let pipValue = config.pipValue

    if (config.type === 'Forex') {
      pipValue = (config.contractSize * config.pipSize) / entry
    }

    const stopLossPips = Math.abs(entry - stop) / config.pipSize
    const lotSize = risk / (stopLossPips * pipValue)
    const profitPips = tp ? Math.abs(tp - entry) / config.pipSize : 0
    const marginRequired = (lotSize * config.contractSize * entry) / lev
    const stopLossDollar = lotSize * stopLossPips * pipValue
    const profitDollar = lotSize * profitPips * pipValue
    const rrRatio = profitPips / stopLossPips

    setResult({
      lotSize: lotSize.toFixed(2),
      margin: marginRequired.toFixed(2),
      slPips: stopLossPips.toFixed(1),
      slDollar: stopLossDollar.toFixed(2),
      tpPips: profitPips.toFixed(1),
      tpDollar: profitDollar.toFixed(2),
      rr: rrRatio.toFixed(2)
    })
  }

  return (
    <div className="p-3 w-[340px] bg-[#131722] text-[#d1d4dc] font-sans">
      <h3 className="m-0 mb-3 text-base text-white font-semibold">Lot & Pips Calculator</h3>

      <div className="mb-2">
        <label className="text-[11px] text-[#787b86] block mb-1">Symbol</label>
        <select value={symbol} onChange={e => setSymbol(e.target.value)} className="w-full px-2 py-1.5 bg-[#1e222d] border border-[#2a2e39] rounded text-white text-xs">
          <option>EURUSD</option>
          <option>GBPUSD</option>
          <option>USDJPY</option>
          <option>AUDUSD</option>
          <option>NZDUSD</option>
          <option>USDCAD</option>
          <option>USDCHF</option>
          <option>EURGBP</option>
          <option>EURJPY</option>
          <option>GBPJPY</option>
          <option>XAUUSD</option>
          <option>BTCUSD</option>
          <option>ETHUSD</option>
          <option>GER30</option>
          <option>GER40</option>
          <option>DAX30</option>
          <option>DAX40</option>
          <option>US30</option>
          <option>NAS100</option>
          <option>SPX500</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-2">
        <div>
          <label className="text-[11px] text-[#787b86] block mb-1">Entry Price</label>
          <input type="number" value={entryPrice} onChange={e => setEntryPrice(e.target.value)} className="w-full px-2 py-1.5 bg-[#1e222d] border border-[#2a2e39] rounded text-white text-xs" />
        </div>
        <div>
          <label className="text-[11px] text-[#787b86] block mb-1">Stop Loss</label>
          <input type="number" value={stopPrice} onChange={e => setStopPrice(e.target.value)} className="w-full px-2 py-1.5 bg-[#1e222d] border border-[#2a2e39] rounded text-white text-xs" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-2">
        <div>
          <label className="text-[11px] text-[#787b86] block mb-1">Take Profit</label>
          <input type="number" value={takeProfitPrice} onChange={e => setTakeProfitPrice(e.target.value)} className="w-full px-2 py-1.5 bg-[#1e222d] border border-[#2a2e39] rounded text-white text-xs" />
        </div>
        <div>
          <label className="text-[11px] text-[#787b86] block mb-1">Leverage</label>
          <input type="number" value={leverage} onChange={e => setLeverage(e.target.value)} className="w-full px-2 py-1.5 bg-[#1e222d] border border-[#2a2e39] rounded text-white text-xs" />
        </div>
      </div>

      <div className="grid grid-cols-[2fr_1fr] gap-2 mb-2">
        <div>
          <label className="text-[11px] text-[#787b86] block mb-1">Risk Amount</label>
          <input type="number" value={riskAmount} onChange={e => setRiskAmount(e.target.value)} className="w-full px-2 py-1.5 bg-[#1e222d] border border-[#2a2e39] rounded text-white text-xs" />
        </div>
        <div>
          <label className="text-[11px] text-[#787b86] block mb-1">Type</label>
          <select value={riskType} onChange={e => setRiskType(e.target.value)} className="w-full px-2 py-1.5 bg-[#1e222d] border border-[#2a2e39] rounded text-white text-xs">
            <option>USD</option>
            <option>EUR</option>
            <option>GBP</option>
            <option>%</option>
          </select>
        </div>
      </div>

      {riskType === '%' && (
        <div className="mb-2">
          <label className="text-[11px] text-[#787b86] block mb-1">Account Size (USD)</label>
          <input type="number" value={accountSize} onChange={e => setAccountSize(e.target.value)} className="w-full px-2 py-1.5 bg-[#1e222d] border border-[#2a2e39] rounded text-white text-xs" />
        </div>
      )}

      <button onClick={calculate} className="w-full py-2 bg-[#2962ff] text-white border-none rounded cursor-pointer text-[13px] font-semibold mb-3 hover:bg-[#1e53e5]">Calculate</button>

      {result && (
        <div>
          <div className="grid grid-cols-2 gap-1.5 mb-1.5">
            <div className="bg-[#1e222d] p-2 rounded">
              <div className="text-[#787b86] text-[10px] mb-0.5">LOT</div>
              <div className="text-white font-semibold text-[13px]">{result.lotSize}</div>
            </div>
            <div className="bg-[#1e222d] p-2 rounded">
              <div className="text-[#787b86] text-[10px] mb-0.5">MARGIN</div>
              <div className="text-white font-semibold text-[13px]">${result.margin}</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1.5 mb-1.5">
            <div className="bg-[#1e222d] p-2 rounded">
              <div className="text-[#787b86] text-[10px] mb-0.5">SL</div>
              <div className="text-[#f23645] font-semibold text-xs">{result.slPips}p · ${result.slDollar}</div>
            </div>
            <div className="bg-[#1e222d] p-2 rounded">
              <div className="text-[#787b86] text-[10px] mb-0.5">TP</div>
              <div className="text-[#089981] font-semibold text-xs">{result.tpPips}p · ${result.tpDollar}</div>
            </div>
          </div>
          <div className="bg-[#1e222d] p-2 rounded text-center">
            <div className="text-[#787b86] text-[10px] mb-0.5">R/R</div>
            <div className="text-white font-semibold text-sm">{result.rr}</div>
          </div>
        </div>
      )}

      <p className="text-[11px] text-[#787b86] mt-3 mb-0">Or use TradingView Long/Short Position settings</p>
    </div>
  )
}

export default IndexPopup
