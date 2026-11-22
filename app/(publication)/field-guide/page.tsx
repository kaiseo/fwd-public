import { topics } from "@/lib/editorial/field-guide"
import { siteOrigin } from "@/lib/editorial/reports"
import { GuideHeading } from "../reader-guides"
import { GuideIndex } from "./guide-index"

const description = "Choose a coverage area to explore the decisions teams face when they put AI to work."
export const metadata = { metadataBase: siteOrigin, title: "Field guide | FWD", description, alternates: { canonical: "/fwd-public/field-guide" } }

export default function FieldGuide() {
  return <main id="content" className="article"><GuideHeading title="Field guide" description={description} />
    <GuideIndex entries={topics.map(topic => ({ ...topic, href: "/field-guide/" + topic.slug }))} />
  </main>
}
