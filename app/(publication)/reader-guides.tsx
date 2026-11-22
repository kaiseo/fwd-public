import { topics } from "@/lib/editorial/field-guide"
import Link from "next/link"

const guides = [
  { href: "/field-guide", title: "Field guide", summary: `Explore ${topics.reduce((total, topic) => total + topic.guides.length, 0)} practical questions across ${topics.length} coverage areas.` },
  { href: "/how-we-report", title: "How we report", summary: "Follow a business question from the first signal to a claim readers can check." },
  { href: "/glossary", title: "Glossary", summary: "Look up the terms behind FWD’s reporting on AI and payments." },
]

export function GuideDirectory() {
  return <section aria-labelledby="guide-title" className="guide-directory">
    <h2 id="guide-title">Reader guides</h2>
    <div>{guides.map(guide => <Link key={guide.href} href={guide.href}>
      <h3>{guide.title} <span aria-hidden="true">↗</span></h3><p>{guide.summary}</p>
    </Link>)}</div>
  </section>
}

export function GuideHeading({ title, description }: { title: string; description: string }) {
  return <><h1>{title}</h1><p className="subtitle about-intro">{description}</p></>
}

export function Definition({ term, children }: { term: string; children: React.ReactNode }) {
  return <details className="definition"><summary>{term}</summary><p>{children}</p></details>
}
