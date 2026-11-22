import type { ReactNode } from "react"
import "./reset.css"
export default function Root({ children }: { children: ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
