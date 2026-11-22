import type { Metadata } from "next"
import Link from "next/link"
import { siteOrigin } from "@/lib/editorial/reports"

export const metadata: Metadata = {
  metadataBase: siteOrigin,
  title: "About FWD",
  description: "FWD is an independent digital publication covering the business consequences of AI.",
  alternates: { canonical: "/fwd-public/about" },
}

export default function AboutPage() {
  return <main id="content" className="article">
    <h1>About FWD</h1>
    <p className="subtitle about-intro">FWD follows the decisions, experiments, and trade-offs that shape how AI is used in the real world.</p>
    <section>
      <h2>What we cover</h2>
      <p>FWD is an independent digital publication for founders, operators, executives, and product leaders. We follow how companies put AI to work, how buyers decide what to pay for, and who takes responsibility when software gains the authority to act.</p>
    </section>
    <section>
      <h2>How we read the evidence</h2>
      <p>A pilot announcement tells us what a company plans to try. To understand what changed, we look for a baseline, an observation period, and a result readers can check. Filings, product documentation, and usage figures help us trace that change over time.</p>
    </section>
    <Link href="/reports" className="return-link">Explore the reports <span aria-hidden="true">→</span></Link>
  </main>
}
