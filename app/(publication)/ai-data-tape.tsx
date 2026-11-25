"use client"

import { useEffect, useRef, useState } from "react"
import { AiAdoptionTape } from "./ai-adoption-tape"

const symbols = ["NVDA", "AVGO", "MSFT", "AMZN", "GOOGL", "PLTR"]

function MarketsTape() {
  const widget = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<"loading" | "ready" | "unavailable" | "reduced">("loading")

  useEffect(() => {
    const host = widget.current
    if (!host) return

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
    let timeout: number | undefined
    let observer: MutationObserver | undefined

    function loadWidget() {
      window.clearTimeout(timeout)
      observer?.disconnect()
      host?.replaceChildren()
      if (preference.matches) {
        setState("reduced")
        return
      }
      if (!host) return

      setState("loading")
      const mount = document.createElement("div")
      mount.className = "tradingview-widget-container__widget"
      const script = document.createElement("script")
      script.async = true
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
      script.textContent = JSON.stringify({
        symbols: symbols.map(symbol => ({ proName: "NASDAQ:" + symbol, title: symbol })),
        colorTheme: "dark", isTransparent: true, displayMode: "regular", showSymbolLogo: false, locale: "en",
      })
      observer = new MutationObserver(() => {
        const frame = host.querySelector("iframe")
        if (!frame) return
        frame.title = "AI stock prices and daily changes from TradingView"
        frame.addEventListener("load", () => {
          window.clearTimeout(timeout)
          setState("ready")
        }, { once: true })
        observer?.disconnect()
      })
      observer.observe(host, { childList: true, subtree: true })
      const unavailable = () => {
        observer?.disconnect()
        host.replaceChildren()
        setState("unavailable")
      }
      script.addEventListener("error", unavailable, { once: true })
      timeout = window.setTimeout(unavailable, 12000)
      host.append(mount, script)
    }

    loadWidget()
    preference.addEventListener("change", loadWidget)
    return () => {
      preference.removeEventListener("change", loadWidget)
      window.clearTimeout(timeout)
      observer?.disconnect()
      host.replaceChildren()
    }
  }, [])

  return <section className="markets-tape" aria-label="AI stock prices">
    <div ref={widget} className="tradingview-widget-container" />
    {state === "loading" && <p role="status">Loading market prices…</p>}
    {(state === "unavailable" || state === "reduced") && <div className="markets-fallback">
      {state === "unavailable" && <span>Quotes unavailable.</span>}
      {symbols.map(symbol => <a key={symbol} href={"https://www.tradingview.com/symbols/NASDAQ-" + symbol + "/"}>{symbol}</a>)}
    </div>}
    <a className="markets-source" href="https://www.tradingview.com/">Market data by TradingView · Quotes may be delayed</a>
  </section>
}

export function AiDataTape() {
  const [view, setView] = useState<"adoption" | "markets">("adoption")
  return <div className="ai-data-tape">
    <div className="data-tape-switch" role="group" aria-label="Select data tape">
      <button type="button" aria-pressed={view === "adoption"} onClick={() => setView("adoption")}>AI Adoption</button>
      <button type="button" aria-pressed={view === "markets"} onClick={() => setView("markets")}>AI Markets</button>
    </div>
    {view === "adoption" ? <AiAdoptionTape /> : <MarketsTape />}
  </div>
}
