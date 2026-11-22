import Link from "next/link"

export function GuideIndex({ entries }: { entries: { href: string; title: string; summary: string }[] }) {
  return <ul className="field-index">{entries.map(entry => <li key={entry.href}>
    <Link href={entry.href}><h2>{entry.title}</h2><p>{entry.summary}</p><span aria-hidden="true">↗</span></Link>
  </li>)}</ul>
}
