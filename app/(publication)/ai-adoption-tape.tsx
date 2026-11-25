"use client"

import { useState } from "react"

import { adoption, adoptionDate, adoptionDateLabel } from "@/lib/editorial/ai-adoption"

export function AiAdoptionTape() {
  const [paused, setPaused] = useState(false)

  return (
    <section className="adoption-tape" aria-labelledby="adoption-tape-title">
      <div className="adoption-tape-context">
        <h2 id="adoption-tape-title">U.S. business AI use</h2>
        <a href="./data/ai-adoption/">Census BTOS · <time dateTime={adoptionDate}>{adoptionDateLabel}</time></a>
      </div>
      <div className="adoption-tape-scroll" data-paused={paused} role="region"
        aria-label="AI use by industry" tabIndex={0}>
        <div className="adoption-tape-track">
          {[false, true].map(duplicate => (
            <ul key={String(duplicate)} aria-hidden={duplicate || undefined}>
              {adoption.map(({ id, label, rate }) => (
                <li key={id}>
                  <a href={`./data/ai-adoption/#${id}`} tabIndex={duplicate ? -1 : undefined}>
                    <span>{label}</span><strong>{rate}%</strong>
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <button className="adoption-tape-toggle" type="button"
        onClick={() => setPaused(value => !value)}>
        {paused ? "Play" : "Pause"}
      </button>
    </section>
  )
}
