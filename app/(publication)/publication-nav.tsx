"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const destinations = [
  { href: "/reports", label: "Reports" },
  { href: "/field-guide", label: "Field guide" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/about", label: "About" },
]

export function PublicationNav() {
  const pathname = usePathname()
  return <nav aria-label="Main">{destinations.map(({ href, label }) => {
    const current = pathname === href ? "page" : pathname.startsWith(href + "/") ? "location" : undefined
    return <Link key={href} href={href} aria-current={current}>{label}</Link>
  })}</nav>
}
