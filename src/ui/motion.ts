export const pageMotion = {
  initial: { opacity: 0, y: 18, filter: 'blur(6px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -18, filter: 'blur(6px)' },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
}

