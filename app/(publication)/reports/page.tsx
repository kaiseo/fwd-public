import type { Metadata } from "next"
import { siteOrigin } from "@/lib/editorial/reports"
import { ReportCollection } from "../report-collection"

export const metadata: Metadata = {
  metadataBase: siteOrigin,
  title: "Reports | FWD",
  description: "Browse FWD’s reporting on how AI changes work, business, and commerce.",
  alternates: { canonical: "/fwd-public/reports" },
}

export default function ReportsPage() {
  return <main id="content">
    <h1 className="collection-title">Reports</h1>
    <ReportCollection archiveHeading="Published reports" />
  </main>
}
