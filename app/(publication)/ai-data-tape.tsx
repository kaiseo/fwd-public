"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { AiAdoptionTape } from "./ai-adoption-tape"

const symbols = ["NVDA", "AVGO", "MSFT", "AMZN", "GOOGL", "PLTR"]

export function MarketsTape({ watchlist = false }: { watchlist?: boolean }) {
  const widget = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<"loading" | "ready" | "unavailable" | "reduced">("loading")

  useEffect(() => {
    const host = widget.current
    if (!host) return

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
    const narrowScreen = window.matchMedia("(max-width: 620px)")
    const tickerTag = watchlist ? "tv-tickers" : "tv-ticker-tape"
    let timeout: number | undefined

    function fitWatchlist(ticker: HTMLElement) {
      ticker.setAttribute("direction", narrowScreen.matches ? "vertical" : "horizontal")
      ticker.setAttribute("item-size", narrowScreen.matches ? "compact" : "normal")
    }

    function resizeWatchlist() {
      const ticker = host?.querySelector<HTMLElement>(tickerTag)
      if (ticker) fitWatchlist(ticker)
    }

    function loadWidget() {
      if (!host) return
      window.clearTimeout(timeout)
      host.replaceChildren()
      if (!watchlist && preference.matches) {
        setState("reduced")
        return
      }
      setState("loading")
      const ticker = document.createElement(tickerTag)
      ticker.setAttribute("symbols", symbols.map(symbol => "NASDAQ:" + symbol).join(","))
      ticker.setAttribute("theme", "dark")
      ticker.setAttribute("transparent", "")
      ticker.setAttribute("item-size", "compact")
      if (watchlist) fitWatchlist(ticker)
      ticker.setAttribute("hide-chart", "")
      ticker.setAttribute("hide-logo", "")
      ticker.setAttribute("show-hover", "")
      ticker.setAttribute("hover-type", "chart")
      host.append(ticker)
      if (customElements.get(tickerTag)) {
        setState("ready")
        return
      }

      const script = document.createElement("script")
      script.type = "module"
      script.src = `https://widgets.tradingview-widget.com/w/en/${tickerTag}.js`
      const unavailable = () => {
        if (!host.contains(ticker)) return
        window.clearTimeout(timeout)
        host.replaceChildren()
        setState("unavailable")
      }
      script.addEventListener("load", () => {
        if (!host.contains(ticker)) return
        if (!customElements.get(tickerTag)) {
          unavailable()
          return
        }
        window.clearTimeout(timeout)
        setState("ready")
      }, { once: true })
      script.addEventListener("error", unavailable, { once: true })
      timeout = window.setTimeout(unavailable, 12000)
      host.append(script)
    }

    loadWidget()
    if (watchlist) narrowScreen.addEventListener("change", resizeWatchlist)
    else preference.addEventListener("change", loadWidget)
    return () => {
      narrowScreen.removeEventListener("change", resizeWatchlist)
      preference.removeEventListener("change", loadWidget)
      window.clearTimeout(timeout)
      host.replaceChildren()
    }
  }, [watchlist])

  return <section className="markets-tape" aria-label="AI stock prices">
    <div ref={widget} className="markets-widget" />
    {state === "loading" && <p role="status">Loading market prices…</p>}
    {(state === "unavailable" || state === "reduced") && <div className="markets-fallback">
      {state === "unavailable" && <span>Quotes unavailable.</span>}
      {symbols.map(symbol => <a key={symbol} href={"https://www.tradingview.com/symbols/NASDAQ-" + symbol + "/"}>{symbol}</a>)}
    </div>}
    {(!watchlist || state === "unavailable") && <a className="markets-source" href="https://www.tradingview.com/">Market data by TradingView · Quotes may be delayed</a>}
  </section>
}

export function AiDataTape() {
  const [view, setView] = useState<"adoption" | "markets">("adoption")
  return <div className="ai-data-tape">
    <div className="data-tape-header"><div className="data-tape-switch" role="group" aria-label="Select data tape">
      <button type="button" aria-pressed={view === "adoption"} onClick={() => setView("adoption")}>AI Adoption</button>
      <button type="button" aria-pressed={view === "markets"} onClick={() => setView("markets")}>AI Markets</button>
    </div><Link href="/data" className="data-tape-tracker-link">AI Tracker ↗</Link></div>
    {view === "adoption" ? <AiAdoptionTape /> : <MarketsTape />}
  </div>
}
