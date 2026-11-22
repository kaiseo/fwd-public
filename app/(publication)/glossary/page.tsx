import Link from "next/link"
import { featuredReport, reportPath, siteOrigin } from "@/lib/editorial/reports"
import { Definition, GuideHeading } from "../reader-guides"

const description = "Terms used in FWD’s coverage of AI agents, finance, and payments."
export const metadata = { metadataBase: siteOrigin, title: "Glossary | FWD", description, alternates: { canonical: "/fwd-public/glossary" } }

export default function GlossaryPage() {
  return <main id="content" className="article guide-page">
    <GuideHeading title="Glossary" description={description} />
    <section aria-labelledby="payments-terms"><h2 id="payments-terms">AI &amp; Finance</h2>
      <Definition term="Bank run">A rush of withdrawals as depositors lose confidence that a bank can return their money. The timing matters because some of the bank’s assets take longer to turn into cash.</Definition>
      <Definition term="Delegated payment">A payment initiated by someone or something acting with the account holder’s permission. For an AI agent, that permission might specify a recipient, a spending limit, or an expiry time.</Definition>
      <Definition term="Regulatory sandbox">A supervised setting where participants can test a product or process under agreed limits. The scope of a test determines what its results can tell us.</Definition>
      <Definition term="Settlement">The transfer of funds that discharges a payment obligation. A customer can submit a payment instruction before settlement occurs.</Definition>
    </section>
    <Link className="return-link" href={reportPath(featuredReport)}>Read the bank-run {featuredReport.status === "preview" ? "preview" : "report"} →</Link>
  </main>
}
