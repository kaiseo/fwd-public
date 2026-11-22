import Link from "next/link"
import { CopyReportLink } from "../copy-report-link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { reports, reportPath, siteOrigin } from "@/lib/editorial/reports"

type Props = { params: Promise<{ slug: string }> }
async function getReport({ params }: Props) {
  const { slug } = await params
  return reports.find(report => report.slug === slug) ?? notFound()
}
export async function generateMetadata(props: Props): Promise<Metadata> {
  const report = await getReport(props)
  const title = report.shareTitle ?? report.title + " | FWD"
  const description = report.shareDescription ?? report.summary
  const images = [{ url: "/fwd-public" + report.shareImage, alt: report.shareImageAlt ?? report.imageAlt }]
  const url = reportPath(report)
  return { metadataBase: siteOrigin, title, description, alternates: { canonical: "/fwd-public" + url },
    robots: { index: report.status === "published" },
    openGraph: { type: "article", title, description, url: "/fwd-public" + url, images },
    twitter: { card: "summary_large_image", title, description, images } }
}
export default async function ReportPage(props: Props) {
  const report = await getReport(props)
  const preview = report.status === "preview"
  return <main id="content" className="article"><article>
    <div className="category">{report.category}{preview && <span> / Preview</span>}</div>
    <h1>{report.title}</h1><p className="subtitle">{report.subtitle}</p>
    {!preview && report.publishedAt && <time dateTime={report.publishedAt}>{report.publishedAt}</time>}
    {!preview && report.lead && <p className="report-lead">{report.lead}</p>}
    {preview && <p className="notice">This report is in preview. The full text and sources will appear here after editorial review.</p>}
    {preview ? (
      <section className="preview-outline" aria-labelledby="outline-title">
        <h2 id="outline-title">Report outline</h2>
        <ol>{report.body.map(section => <li key={section.heading}>{section.heading}</li>)}</ol>
      </section>
    ) : report.body.map(section => <section key={section.heading}><h2>{section.heading}</h2>
      {section.paragraphs.map((p,i) => <p key={i}>{p}</p>)}</section>)}
    {!preview && report.sources.length > 0 && <section><h2>Sources</h2><ol>{report.sources.map(source =>
      <li key={source.url}><a href={source.url}>{source.title}</a></li>)}</ol></section>}
    {!preview && Object.entries(report.channels).map(([channel,url]) => <a key={channel} href={url}>{channel}</a>)}
    {report.slug === "ai-agents-bank-run" && <aside className="related-issue">
      <span>From the newsletter</span>
      <Link href="/newsletter#sample-issue">Who can stop an AI payment? <span aria-hidden="true">→</span></Link>
    </aside>}
    <CopyReportLink url={new URL("/fwd-public" + reportPath(report), siteOrigin).href} />
  </article>
    <a className="return-link" href="/fwd-public/#featured"><span aria-hidden="true">←</span> Back to featured report</a>
  </main>
}

export function generateStaticParams() { return reports.map(({ slug }) => ({ slug })) }
