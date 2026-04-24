import { useEffect, useRef, useState } from 'react'

type Props = {
  src: string
  className?: string
  poster?: string
  ariaLabel?: string
}

export function AutoPlayVideo({ src, className, poster, ariaLabel }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        setIsActive(Boolean(entry?.isIntersecting))
      },
      { threshold: 0.6 },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const el = videoRef.current
    if (!el) return

    if (isActive) {
      void el.play().catch(() => {
        // Autoplay can be blocked in some browsers; user interaction will enable play.
      })
      return
    }

    el.pause()
  }, [isActive])

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      poster={poster}
      muted
      playsInline
      loop
      preload="metadata"
      aria-label={ariaLabel}
      // controls={true} // décommente si tu veux des contrôles visibles
    />
  )
}

