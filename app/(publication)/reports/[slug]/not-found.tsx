import type { Metadata } from "next"

export const metadata: Metadata = { title: "Report not found | FWD" }

export default function ReportNotFound() {
  return (
    <main id="content" className="article">
      <p className="category">404</p>
      <h1>Report not found</h1>
      <p className="subtitle">We couldn’t find a report at this address.</p>
      <a className="return-link" href="/fwd-public/reports">
        <span aria-hidden="true">←</span> Browse FWD reports
      </a>
    </main>
  )
}
