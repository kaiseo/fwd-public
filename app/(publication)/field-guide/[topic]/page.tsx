import Link from "next/link"
import { notFound } from "next/navigation"
import { topics } from "@/lib/editorial/field-guide"
import { siteOrigin } from "@/lib/editorial/reports"
import { GuideHeading } from "../../reader-guides"
import { GuideIndex } from "../guide-index"

type Props = { params: Promise<{ topic: string }> }
async function getTopic({ params }: Props) {
  const { topic } = await params
  return topics.find(item => item.slug === topic) ?? notFound()
}
export async function generateMetadata(props: Props) {
  const topic = await getTopic(props)
  return { metadataBase: siteOrigin, title: topic.title + " field guide | FWD", description: topic.summary, alternates: { canonical: "/fwd-public/field-guide/" + topic.slug } }
}
export default async function TopicPage(props: Props) {
  const topic = await getTopic(props)
  return <main id="content" className="article"><Link href="/field-guide">← Field guide</Link>
    <GuideHeading title={topic.title} description={topic.summary} />
    <GuideIndex entries={topic.guides.map(guide => ({ ...guide, href: "/field-guide/" + topic.slug + "/" + guide.slug }))} />
  </main>
}

export function generateStaticParams() { return topics.map(({ slug }) => ({ topic: slug })) }
