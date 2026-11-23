import { newsletterSignupAction } from "@/lib/editorial/newsletter"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { featuredReport, reportPath, siteOrigin } from "@/lib/editorial/reports"
import { FoldWordmark } from "../fold-wordmark"

export const metadata: Metadata = {
  metadataBase: siteOrigin,
  title: "Newsletter | FWD",
  description: "Read a sample of FWD’s email briefing on the business decisions behind AI.",
  alternates: { canonical: "/fwd-public/newsletter" },
}

export default function NewsletterPage() {
  const signupAction = newsletterSignupAction()
  return <main id="content" className="newsletter-page">
    <div className="newsletter-intro">
      <h1>FWD Newsletter</h1>
      <p>One business decision, the evidence behind it, and a question to take back to your team.</p>
      {signupAction && <form id="subscribe" className="newsletter-signup" method="post" action={signupAction}>
        <label htmlFor="newsletter-email">Email address</label>
        <input id="newsletter-email" type="email" name="email" autoComplete="email" required />
        <input type="hidden" name="embed" value="1" />
        <button type="submit">Subscribe</button>
      </form>}
      <a href="#sample-issue">Read the sample issue ↓</a>
    </div>
    <article id="sample-issue" aria-labelledby="issue-title" className="newsletter-issue">
      <div className="issue-mast"><FoldWordmark /><span>Sample issue</span></div>
      <div className="issue-copy">
        <p className="issue-category">{featuredReport.category}</p>
        <h2 id="issue-title">Who can stop an AI payment?</h2>
        <p>A customer gives an agent permission to move idle cash. Later, a rumor spreads about the bank. Should that first instruction still be enough to let the agent transfer the entire balance?</p>
      </div>
      <Image src="/fwd-public/editorial/bank-run-desktop.png" width={641} height={328} alt={featuredReport.imageAlt} className="issue-art" />
      <div className="issue-copy">
        <h3>Why it matters</h3>
        <p>{featuredReport.summary}</p>
        <h3>What to watch</h3>
        <p>If a customer revokes permission while a transfer is queued, does the bank stop it before settlement? A test that records both timestamps could answer that question.</p>
        <Link href={reportPath(featuredReport)}>Read the report {featuredReport.status === "preview" ? "preview" : ""} →</Link>
      </div>
    </article>
  </main>
}
