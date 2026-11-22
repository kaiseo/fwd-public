"use client"

import { useEffect, useRef, useState } from "react"

export function CopyReportLink({ url }: { url: string }) {
  const [result, setResult] = useState<"idle" | "copied" | "manual">("idle")
  const input = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (result === "manual") {
      input.current?.focus()
      input.current?.select()
    }
  }, [result])

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url)
      setResult("copied")
    } catch {
      setResult("manual")
    }
  }

  return (
    <div className="report-share">
      <button type="button" onClick={copyLink}>Copy report link</button>
      <span role="status">{result === "copied" && "Link copied."}</span>
      {result === "manual" && (
        <label>
          Copy this link manually
          <input ref={input} readOnly value={url} onFocus={event => event.target.select()} />
        </label>
      )}
    </div>
  )
}
