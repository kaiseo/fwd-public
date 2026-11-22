import Image from "next/image"
import type { ReportFigureData } from "@/lib/editorial/reports"

export function ReportFigure({ figure }: { figure: ReportFigureData }) {
  return <figure className="report-figure">
    <Image src={figure.src} alt={figure.alt} width={figure.width} height={figure.height}
      sizes="(max-width: 760px) calc(100vw - 44px), 740px" />
    {(figure.caption || figure.credit) && <figcaption>
      {figure.caption && <span>{figure.caption}</span>}
      {figure.credit && <small>{figure.credit}</small>}
    </figcaption>}
  </figure>
}
