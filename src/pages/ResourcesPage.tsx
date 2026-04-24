import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { pageMotion } from '../ui/motion'

type ResourceCard = {
  title: string
  kind: 'Vidéo' | 'Documentation' | 'Outils'
  description: string
  href: string
}

const resources: ResourceCard[] = [
  {
    title: 'React — Docs',
    kind: 'Documentation',
    description: 'Hooks, patterns, accessibilité, performance.',
    href: 'https://react.dev/',
  },
  {
    title: 'Vite — Guide',
    kind: 'Documentation',
    description: 'Build rapide, config, plugins.',
    href: 'https://vite.dev/',
  },
  {
    title: 'Framer Motion — API',
    kind: 'Documentation',
    description: 'Transitions, layout animations, micro-interactions.',
    href: 'https://www.framer.com/motion/',
  },
  {
    title: 'OpenAI — Platform',
    kind: 'Documentation',
    description: 'Modèles, sécurité, bonnes pratiques.',
    href: 'https://platform.openai.com/docs',
  },
  {
    title: 'Prompting — Patterns',
    kind: 'Outils',
    description: 'Structurer les prompts, tests, itérations.',
    href: 'https://www.promptingguide.ai/',
  },
  {
    title: 'Vidéo — Démo (à remplacer)',
    kind: 'Vidéo',
    description: 'Lien vidéo de référence pour inspirer le flow produit.',
    href: 'https://www.youtube.com/',
  },
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
            <h1 className="pageTitle">Vidéos &amp; Documentation</h1>
          </div>
          <div className="topbarActions">
            <Link className="btn ghost" to="/">
              Retour
            </Link>
            <a className="btn primary" href="#grid">
              Voir la grille
            </a>
          </div>
        </div>
      </header>

      <section className="section" id="grid">
        <div className="container">
          <div className="cardsGrid">
            {resources.map((r) => (
              <a
                key={`${r.kind}-${r.title}`}
                className="card"
                href={r.href}
                target="_blank"
                rel="noreferrer"
              >
                <div className="cardTop">
                  <span className="tag">{r.kind}</span>
                  <span className="cardIcon" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <h2 className="cardTitle">{r.title}</h2>
                <p className="cardDesc">{r.description}</p>
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
          <Link className="footerLink" to="/">
            Retour landing
          </Link>
        </div>
      </footer>
    </motion.main>
  )
}

