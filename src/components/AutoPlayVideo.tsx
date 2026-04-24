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
  const [audioUnlocked, setAudioUnlocked] = useState(false)
  const [wantsSoundNow, setWantsSoundNow] = useState(false)

  useEffect(() => {
    // Browsers require a user gesture once to allow unmuted playback.
    // We "unlock" audio on the first pointer/key interaction anywhere on the page.
    const unlock = () => setAudioUnlocked(true)
    window.addEventListener('pointerdown', unlock, { once: true })
    window.addEventListener('keydown', unlock, { once: true })
    return () => {
      window.removeEventListener('pointerdown', unlock)
      window.removeEventListener('keydown', unlock)
    }
  }, [])

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
    } else {
      el.pause()
    }
  }, [isActive])

  useEffect(() => {
    const el = videoRef.current
    if (!el) return

    // Autoplay policies: sound is allowed only after a user gesture (click/tap).
    // We keep it muted until the user interacts, then we can unmute when wanted.
    const shouldUnmute = isActive && audioUnlocked && wantsSoundNow
    el.muted = !shouldUnmute
  }, [audioUnlocked, isActive, wantsSoundNow])

  const unlockAudioAndPlay = () => {
    const el = videoRef.current
    if (!el) return

    setAudioUnlocked(true)
    setWantsSoundNow(true)
    void el.play().catch(() => {
      // If play fails, user can tap again or enable controls.
    })
  }

  return (
    <div
      onPointerEnter={() => setWantsSoundNow(true)}
      onPointerLeave={() => setWantsSoundNow(false)}
      onFocus={() => setWantsSoundNow(true)}
      onBlur={() => setWantsSoundNow(false)}
      onClick={unlockAudioAndPlay}
      style={{ width: '100%' }}
      role="button"
      tabIndex={0}
      aria-label="Vidéo. Cliquez pour activer le son."
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') unlockAudioAndPlay()
      }}
    >
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
      />
    </div>
  )
}

