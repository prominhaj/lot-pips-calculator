import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://*.tradingview.com/*"],
  all_frames: true,
  run_at: "document_end"
}

function extractValue(propertyId: string): number {
  const input = document.querySelector(`input[data-property-id="${propertyId}"]`) as HTMLInputElement
  return input ? parseFloat(input.value) || 0 : 0
}

function detectSymbol(): { contractSize: number; pipSize: number; isCrypto: boolean; isGold: boolean } {
  const symbolBtn = document.querySelector('.title-l31H9iuA') as HTMLElement
  const symbolText = symbolBtn?.textContent?.toLowerCase() || ''
  const url = window.location.href.toLowerCase()
  
  const isGold = symbolText.includes('gold') || symbolText.includes('xau') || url.includes('xau') || url.includes('gold')
  const isCrypto = symbolText.includes('btc') || symbolText.includes('eth') || url.includes('btc') || url.includes('eth')
  
  if (isGold) return { contractSize: 100, pipSize: 0.01, isCrypto: false, isGold: true }
  if (isCrypto) return { contractSize: 1, pipSize: 1, isCrypto: true, isGold: false }
  return { contractSize: 100000, pipSize: 0.0001, isCrypto: false, isGold: false }
}

function calculate(prefix: string) {
  const entryPrice = extractValue(`Risk/Reward${prefix}EntryPrice`)
  const profitPrice = extractValue(`Risk/Reward${prefix}ProfitLevelPrice`)
  const stopPrice = extractValue(`Risk/Reward${prefix}StopLevelPrice`)
  const risk = extractValue(`Risk/Reward${prefix}Risk`)
  const leverage = extractValue(`Risk/Reward${prefix}LEverage`) || 100

  if (!entryPrice || !stopPrice || !risk) return

  const { contractSize, pipSize, isCrypto, isGold } = detectSymbol()
  const pipValue = isGold ? 1 : isCrypto ? 1 : (contractSize * pipSize) / entryPrice
  
  const stopLossPips = Math.abs(entryPrice - stopPrice) / pipSize
  const lotSize = risk / (stopLossPips * pipValue)
  const profitPips = Math.abs(profitPrice - entryPrice) / pipSize
  const marginRequired = (lotSize * contractSize * entryPrice) / leverage
  const stopLossDollar = lotSize * stopLossPips * pipValue
  const profitDollar = lotSize * profitPips * pipValue

  const resultDiv = document.getElementById(`lot-pips-result-${prefix}`)
  if (resultDiv) {
    resultDiv.innerHTML = `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px">
        <div style="background:#1e222d;padding:6px 8px;border-radius:3px">
          <div style="color:#787b86;font-size:10px;margin-bottom:2px">LOT</div>
          <div style="color:#fff;font-weight:600;font-size:13px">${lotSize.toFixed(2)}</div>
        </div>
        <div style="background:#1e222d;padding:6px 8px;border-radius:3px">
          <div style="color:#787b86;font-size:10px;margin-bottom:2px">MARGIN</div>
          <div style="color:#fff;font-weight:600;font-size:13px">$${marginRequired.toFixed(2)}</div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px">
        <div style="background:#1e222d;padding:6px 8px;border-radius:3px">
          <div style="color:#787b86;font-size:10px;margin-bottom:2px">SL</div>
          <div style="color:#f23645;font-weight:600;font-size:12px">${stopLossPips.toFixed(1)}p · $${stopLossDollar.toFixed(2)}</div>
        </div>
        <div style="background:#1e222d;padding:6px 8px;border-radius:3px">
          <div style="color:#787b86;font-size:10px;margin-bottom:2px">TP</div>
          <div style="color:#089981;font-weight:600;font-size:12px">${profitPips.toFixed(1)}p · $${profitDollar.toFixed(2)}</div>
        </div>
      </div>
      <div style="background:#1e222d;padding:6px 8px;border-radius:3px;text-align:center">
        <div style="color:#787b86;font-size:10px;margin-bottom:2px">R/R</div>
        <div style="color:#fff;font-weight:600;font-size:14px">${(profitPips / stopLossPips).toFixed(2)}</div>
      </div>
    `
  }
}

function injectButton(prefix: string) {
  if (document.getElementById(`lot-pips-calc-btn-${prefix}`)) return

  const accountSizeSection = document.querySelector(`[data-section-name="Risk/Reward${prefix}AccountSize"]`)
  if (!accountSizeSection) return

  const container = document.createElement("div")
  container.className = "cell-tBgV1m0B"
  container.style.cssText = "grid-column:1/-1;margin:0 8px 8px;padding:8px;background:#131722;border-radius:4px"

  const btn = document.createElement("button")
  btn.id = `lot-pips-calc-btn-${prefix}`
  btn.textContent = "Calculate"
  btn.style.cssText = "padding:7px 12px;background:#2962ff;color:#fff;border:none;border-radius:3px;cursor:pointer;font-size:12px;font-weight:600;width:100%;touch-action:manipulation"
  btn.onclick = () => calculate(prefix)

  const resultDiv = document.createElement("div")
  resultDiv.id = `lot-pips-result-${prefix}`
  resultDiv.style.cssText = "margin-top:8px"

  container.appendChild(btn)
  container.appendChild(resultDiv)
  
  const nextElement = accountSizeSection.nextElementSibling?.nextElementSibling
  if (nextElement) {
    nextElement.parentElement?.insertBefore(container, nextElement)
  }
}

function injectButtons() {
  injectButton("long")
  injectButton("short")
}

let debounceTimer: NodeJS.Timeout
const observer = new MutationObserver(() => {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(injectButtons, 300)
})
observer.observe(document.body, { childList: true, subtree: true })
injectButtons()
