import Link from "next/link"
import { siteOrigin } from "@/lib/editorial/reports"
import { GuideHeading } from "../reader-guides"

const description = "How FWD examines the business decisions behind AI."
export const metadata = { metadataBase: siteOrigin, title: "How we report | FWD", description, alternates: { canonical: "/fwd-public/how-we-report" } }

export default function MethodPage() {
  return <main id="content" className="article guide-page">
    <GuideHeading title="How we report" description={description} />
    <section><h2>Start with a decision</h2><p>Who gains the authority to act, and who carries the cost if something goes wrong? In our bank-run preview, the decision is whether a customer’s original permission should still let an agent move money when conditions change.</p></section>
    <section><h2>Trace the evidence</h2><p>We look for the original filing, product documentation, or test results behind a claim. For a payments experiment, a useful record would show when the customer withdrew permission, when the bank received that instruction, and when the transfer settled.</p></section>
    <section><h2>Ask what the result supports</h2><p>A sandbox can show how a control behaved under the conditions tested. To assess how it might work across a market, readers also need to know which participants took part, how long the test ran, and which conditions it left out.</p></section>
    <Link className="return-link" href="/glossary">Explore the glossary →</Link>
  </main>
}
