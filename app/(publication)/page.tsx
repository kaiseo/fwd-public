import { AiDataTape } from "./ai-data-tape"
import { FeaturedReport } from "./report-collection"
import { newsletterSignupAction } from "@/lib/editorial/newsletter"
import { GuideDirectory } from "./reader-guides"
import type { Metadata } from "next"
import Link from "next/link"
import { featuredReport as feature, publishedReports, reportPath, siteOrigin } from "@/lib/editorial/reports"

const description = "FWD reports on how AI changes the way people work, how businesses operate, and how markets move."
export const metadata: Metadata = {
  metadataBase: siteOrigin, title: "FWD — Business, after AI.", description,
  alternates: { canonical: "/fwd-public/" }, openGraph: { title: "FWD — Business, after AI.", description, url: "/fwd-public/", images: ["/fwd-public/editorial/bank-run.png"] },
}

export default function Home() {
  const published = publishedReports().filter(report => report.slug !== feature.slug)
  const signupOpen = Boolean(newsletterSignupAction())
  return <main id="content" className="modern-home">
    <AiDataTape />
    <section className="modern-intro">
      <h1>How AI is changing work and commerce.</h1>
      <p>Independent reporting for founders, operators, and product leaders.</p>
    </section>
    <FeaturedReport />
    {published.length > 0 && <section className="latest-reporting" id="reports" aria-labelledby="latest-reporting-title">
      <div className="latest-heading">
        <h2 id="latest-reporting-title">Latest reporting</h2>
        <Link href="/reports">All reports <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="latest-grid">
        {published.map((report, index) => (
          <Link className={index === 0 ? "latest-card latest-card-lead" : "latest-card"}
            key={report.slug} href={reportPath(report)}>
            <div className="latest-meta">
              <span>{report.category}{report.status === "preview" ? " / Preview" : ""}</span>
              {report.publishedAt && <time dateTime={report.publishedAt}>{report.publishedAt}</time>}
            </div>
            <h3>{report.title}</h3>
            <p>{report.summary}</p>
            <span className="latest-open">Read {report.status === "preview" ? "preview" : index === 0 ? "the latest report" : "report"} <span aria-hidden="true">↗</span></span>
          </Link>
        ))}
      </div>
    </section>}
    <section className="home-newsletter" aria-labelledby="home-newsletter-title">
      <div>
        <h2 id="home-newsletter-title">FWD in your inbox</h2>
        <p>One business decision, the evidence behind it, and a question to take back to your team.</p>
      </div>
      <div className="home-newsletter-links">
        {signupOpen && <Link className="cta" href="/newsletter#subscribe">Subscribe to FWD <span aria-hidden="true">→</span></Link>}
        <Link className="section-destination" href="/newsletter#sample-issue">Read the sample issue <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
    <GuideDirectory />
    <section id="about" className="index-section"><h2>About</h2><div><p>FWD follows the decisions, experiments, and trade-offs that shape how AI is used&nbsp;in the real world.</p><Link className="section-destination" href="/about">About FWD →</Link></div></section>
  </main>
}
