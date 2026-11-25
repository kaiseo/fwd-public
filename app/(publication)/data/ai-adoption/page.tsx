import Link from "next/link"
import { adoption, adoptionDate, adoptionDateLabel, adoptionSource } from "@/lib/editorial/ai-adoption"
import { siteOrigin } from "@/lib/editorial/reports"
import { GuideHeading } from "../../reader-guides"

const description = "The share of U.S. employer businesses that reported using AI in the past two weeks, with comparisons for two sectors."

export const metadata = {
  metadataBase: siteOrigin,
  title: "U.S. business AI use | FWD",
  description,
  alternates: { canonical: "/fwd-public/data/ai-adoption/" },
}

export default function AiAdoptionPage() {
  const [national] = adoption
  return <main id="content" className="article adoption-detail">
    <GuideHeading title="U.S. business AI use" description={description} />
    <p>Survey period ending <time dateTime={adoptionDate}>{adoptionDateLabel}</time></p>
    <section aria-labelledby="adoption-comparison">
      <h2 id="adoption-comparison">Compare AI use</h2>
      <ul className="adoption-comparison">
        {adoption.map(({ id, label, rate }) => (
          <li id={id} key={id} tabIndex={-1}>
            <h3>{label}</h3><strong>{rate}%</strong>
            <div className="adoption-bar" aria-hidden="true"><div style={{ width: rate + "%" }} /></div>
            <p>{id === national.id
              ? "National benchmark for U.S. employer businesses."
              : `${(rate - national.rate).toFixed(1)} percentage points above the national benchmark.`}</p>
          </li>
        ))}
      </ul>
    </section>
    <section>
      <h2>About the survey</h2>
      <p>The Census Bureau’s Business Trends and Outlook Survey asks employers about AI use in any business function over the preceding two weeks. The published estimates cover U.S. employer businesses excluding farms.</p>
      <a href={adoptionSource}>View the Census analysis and charts ↗</a>
    </section>
    <Link className="return-link" href="/">← Back to FWD</Link>
  </main>
}
