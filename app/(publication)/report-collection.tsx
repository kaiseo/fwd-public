import Image from "next/image"
import Link from "next/link"
import { featuredReport as feature, publishedReports, reportPath } from "@/lib/editorial/reports"

export function ReportCollection({ archiveHeading = "Reports" }: { archiveHeading?: string }) {
  const published = publishedReports()
  return <>
    <section aria-labelledby="featured"><h2 className="section-label" id="featured" tabIndex={-1}>Featured report</h2>
      <Link className="feature" href={reportPath(feature)}>
        <picture>
          {feature.illustration && <source media="(max-width: 760px)" srcSet={feature.illustration.mobile} />}
          <Image src={feature.illustration?.desktop ?? feature.shareImage} alt={feature.imageAlt} width={641} height={328} unoptimized={Boolean(feature.illustration)} loading="eager" />
        </picture>
        <div className="feature-copy"><div className="category">{feature.category}{feature.status === "preview" && <span> / Preview</span>}</div>
          <h3>{feature.title}</h3><p>{feature.summary}</p></div>
      </Link></section>
    <section id="reports" className="index-section"><h2>{archiveHeading}</h2><div>
      {published.length === 0 ? <p>No reports published yet. <Link className="preview-link" href={reportPath(feature)}>Read the featured preview</Link></p> : published.map(report =>
        <Link className="report-row" key={report.slug} href={reportPath(report)}><div className="category">{report.category}</div><h3>{report.title}</h3><p>{report.summary}</p>
          {report.publishedAt && <time dateTime={report.publishedAt}>{report.publishedAt}</time>}</Link>)}
    </div></section>
  </>
}
