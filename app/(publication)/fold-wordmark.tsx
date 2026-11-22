import { useId } from "react"
import Link from "next/link"

export function FoldWordmark() {
  const crease = useId()
  return (
    <Link href="/" className="wordmark" aria-label="FWD home">
      <svg width="136" height="39" viewBox="0 0 877 248" fill="currentColor" aria-hidden="true">
        <defs>
          <linearGradient id={crease} x1="0%" y1="0%" x2="85%" y2="100%">
            <stop stopColor="var(--fold-2)" />
            <stop offset=".55" stopColor="var(--fold-3)" />
            <stop offset="1" stopColor="currentColor" />
          </linearGradient>
        </defs>
        <path d="M0 0H222V67H75V104H223L165 168H75V216L0 248Z" />
        <path d="M225 0H290L330 132L394 0H443L499 132L564 0H617V57L521 247H469L414 109L346 247H290L225 66Z" />
        <path fill="var(--fold-1)" d="M330 132L394 0L414 109L357 224Z" />
        <path fill="var(--fold-2)" d="M394 0H443L414 109Z" />
        <path fill={`url(#${crease})`} d="M443 0L499 132L521 247H469L414 109Z" />
        <path fillRule="evenodd" d="M620 0H789L877 86V160L789 247H620ZM692 67V176H808V67Z" />
        <path fill="var(--fold-2)" d="M789 0L877 86V160L789 247L808 176V67Z" />
      </svg>
    </Link>
  )
}
