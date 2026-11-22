import { GuideDirectory } from "./reader-guides"
import type { Metadata } from "next"
import { ReportCollection } from "./report-collection"
import Link from "next/link"
import { featuredReport as feature, publishedReports, reportPath, siteOrigin } from "@/lib/editorial/reports"

const description = "FWD reports on how AI changes the way people work, how businesses operate, and how markets move."
export const metadata: Metadata = {
  metadataBase: siteOrigin, title: "FWD — Business, after AI.", description,
  alternates: { canonical: "/fwd-public/" }, openGraph: { title: "FWD — Business, after AI.", description, url: "/fwd-public/", images: ["/fwd-public/editorial/bank-run.png"] },
}

export default function Home() {
  const published = publishedReports()
  return <main id="content">
    <section className="intro"><h1>How AI is changing<br className="wide-break"/> work and commerce.</h1>
      <div><p>{description}</p><Link className="cta" href={reportPath(published[0] ?? feature)}>Read the latest report <span aria-hidden="true">↗</span></Link></div>
    </section>
    <ReportCollection />
    <GuideDirectory />
    <section id="about" className="index-section"><h2>About</h2><div><p>FWD follows the decisions, experiments, and trade-offs that shape how AI is used&nbsp;in the real world.</p><Link className="section-destination" href="/about">About FWD →</Link></div></section>
  </main>
}
