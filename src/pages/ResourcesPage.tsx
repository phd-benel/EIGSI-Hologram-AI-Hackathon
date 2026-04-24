import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { pageMotion } from '../ui/motion'

const yt = [
  { id: '7YWTtCsvgvg', href: 'https://www.youtube.com/watch?v=7YWTtCsvgvg' },
  { id: 'xZQVfzHZwao', href: 'https://www.youtube.com/watch?v=xZQVfzHZwao' },
  { id: 'Iv8X3yldbPk', href: 'https://www.youtube.com/watch?v=Iv8X3yldbPk' },
]

export function ResourcesPage() {
  return (
    <motion.main
      className="page"
      initial={pageMotion.initial}
      animate={pageMotion.animate}
      exit={pageMotion.exit}
      transition={pageMotion.transition}
    >
      <header className="topbar">
        <div className="container topbarInner">
          <div>
            <p className="eyebrow">Ressources techniques</p>
            <h1 className="pageTitle"> Documentation</h1>
          </div>
          <div className="topbarActions">
            <Link className="btn ghost" to="/">
              Retour
            </Link>
          </div>
        </div>
      </header>

      <section className="section" id="grid">
        <div className="container">
          <h2 className="sectionTitle">1. Fabrication du Boîtier (DIY &amp; Low-Cost)</h2>
          <p className="muted" style={{ marginTop: 10, maxWidth: 860 }}>
            Cliquez sur une miniature pour ouvrir la vidéo complète sur YouTube.
          </p>

          <div className="ytRow" aria-label="Vidéos YouTube">
            {yt.map((v) => (
              <a
                key={v.id}
                className="ytCard"
                href={v.href}
                target="_blank"
                rel="noreferrer"
                aria-label="Ouvrir sur YouTube"
              >
                <img
                  className="ytThumb"
                  src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                  alt="Miniature vidéo YouTube"
                  loading="lazy"
                />
                <div className="ytPlay" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerInner">
          <span className="muted">
            Propulsé par Le Cercle des Innovateurs de EIGSI CASABLANCA © {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </motion.main>
  )
}

