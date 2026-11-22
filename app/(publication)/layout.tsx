import { PublicationNav } from "./publication-nav"
import { FoldWordmark } from "./fold-wordmark"
import { featuredReport, reportPath, socialProfiles } from "@/lib/editorial/reports"
import Link from "next/link"
import "./publication.css"

export default function PublicationLayout({ children }: { children: React.ReactNode }) {
  const featureUrl = reportPath(featuredReport)
  const channels = Object.entries(socialProfiles)
  return <div lang="en" className="publication"><div className="paper">
    <a className="skip" href="#content">Skip to content</a>
    <header id="page-top" tabIndex={-1}><FoldWordmark />
      <PublicationNav /></header>
    {children}
    <footer className="publication-footer">
      <div className="footer-signature">
        <FoldWordmark />
        <p>Business, after AI.</p>
      </div>
      <nav aria-label="Footer">
        <div>
          <p>Publication</p>
          <Link href="/">Home</Link>
          <Link href="/reports">Reports</Link>
          <Link href="/newsletter">Newsletter</Link> <Link href="/about">About FWD</Link>
        </div>
        <div>
          <p>Featured report</p>
          <Link href={featureUrl}>{featuredReport.status === "preview" ? "Read preview" : "Read report"}</Link>
          {featuredReport.status === "preview" && <a href={"/fwd-public" + featureUrl + "#outline-title"}>Report outline</a>}
          <a href="#page-top">Back to top ↑</a>
        </div>
        <div>
          <p>Reader guides</p>
          <Link href="/field-guide">Field guide</Link>
          <Link href="/how-we-report">How we report</Link>
          <Link href="/glossary">Glossary</Link>
        </div>
        {channels.length > 0 && <div>
          <p>Follow FWD</p>
          {channels.map(([channel, url]) => <a key={channel} href={url}>{channel}</a>)}
        </div>}
      </nav>
    </footer>

  </div></div>
}
