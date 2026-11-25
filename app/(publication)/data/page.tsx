import type { Metadata } from "next"
import Link from "next/link"
import { adoption, adoptionDate, adoptionDateLabel } from "@/lib/editorial/ai-adoption"
import { siteOrigin } from "@/lib/editorial/reports"
import { MarketsTape } from "../ai-data-tape"

const description = "Track how U.S. businesses use AI and follow the companies supplying AI infrastructure and software."

export const metadata: Metadata = {
  metadataBase: siteOrigin,
  title: "AI Tracker | FWD",
  description,
  alternates: { canonical: "/data" },
}

export default function DataPage() {
  return <main id="content" className="modern-home tracker-page">
    <section className="modern-intro tracker-intro">
      <h1>AI Tracker</h1>
      <p>{description}</p>
      <nav aria-label="Tracker sections">
        <a href="#adoption">AI Adoption ↓</a>
        <a href="#markets">AI Markets ↓</a>
      </nav>
    </section>
    <section id="adoption" className="tracker-section" aria-labelledby="tracker-adoption">
      <div className="latest-heading">
        <h2 id="tracker-adoption">AI Adoption</h2>
        <Link href="/data/ai-adoption">Survey details ↗</Link>
      </div>
      <p>Share of U.S. employers using AI in the previous two weeks. Survey period ending <time dateTime={adoptionDate}>{adoptionDateLabel}</time>.</p>
      <ul className="tracker-adoption-grid">
        {adoption.map(({ id, label, rate }) => <li key={id}>
          <Link href={`/data/ai-adoption#${id}`}>
            <span>{label}</span><strong>{rate}%</strong>
          </Link>
        </li>)}
      </ul>
    </section>
    <section id="markets" className="tracker-section tracker-markets" aria-labelledby="tracker-markets">
      <div className="latest-heading">
        <h2 id="tracker-markets">AI Markets</h2>
        <span>Quotes may be delayed</span>
      </div>
      <MarketsTape watchlist />
      <dl className="tracker-watchlist">
        <div><dt>Chips</dt><dd>NVDA · AVGO</dd></div>
        <div><dt>Cloud</dt><dd>MSFT · AMZN · GOOGL</dd></div>
        <div><dt>Enterprise software</dt><dd>PLTR</dd></div>
      </dl>
    </section>
  </main>
}
