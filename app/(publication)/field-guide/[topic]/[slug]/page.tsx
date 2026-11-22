import Link from "next/link"
import { notFound } from "next/navigation"
import { topics } from "@/lib/editorial/field-guide"
import { siteOrigin } from "@/lib/editorial/reports"
import { GuideHeading } from "../../../reader-guides"

type Props = { params: Promise<{ topic: string; slug: string }> }
async function getGuide({ params }: Props) {
  const { topic: topicSlug, slug } = await params
  const topic = topics.find(item => item.slug === topicSlug) ?? notFound()
  const guide = topic.guides.find(item => item.slug === slug) ?? notFound()
  return { topic, guide }
}
export async function generateMetadata(props: Props) {
  const { topic, guide } = await getGuide(props)
  return { metadataBase: siteOrigin, title: guide.title + " | FWD", description: guide.summary, alternates: { canonical: "/fwd-public/field-guide/" + topic.slug + "/" + guide.slug } }
}
export default async function GuidePage(props: Props) {
  const { topic, guide } = await getGuide(props)
  return <main id="content" className="article">
    <Link href={"/field-guide/" + topic.slug}>← {topic.title} field guide</Link>
    <GuideHeading title={guide.title} description={guide.summary} />
    <section><h2>A worked example</h2><p>{guide.scenario}</p></section>
    <section><h2>What to check</h2><p>{guide.check}</p></section>
    <aside className="field-question"><h2>Ask your team</h2><p>{guide.question}</p></aside>
    <Link className="return-link" href="/field-guide">Browse all field guides →</Link>
  </main>
}

export function generateStaticParams() { return topics.flatMap(topic => topic.guides.map(({ slug }) => ({ topic: topic.slug, slug }))) }
