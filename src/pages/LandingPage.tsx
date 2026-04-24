import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { pageMotion } from '../ui/motion'

type ProgramRow = { time: string; title: string; detail?: string }

const program: ProgramRow[] = [
  { time: '09:00', title: 'Accueil & brief', detail: 'Contexte, règles, critères' },
  { time: '09:30', title: 'Kick-off', detail: 'Formation des équipes, objectifs' },
  { time: '10:00', title: 'Sprint 1', detail: 'Idéation + architecture' },
  { time: '11:00', title: 'Sprint 2', detail: 'Prototypage + itération' },
  { time: '12:00', title: 'Pré-démo', detail: 'Pitch express + alignement' },
  { time: '12:30', title: 'Clôture matinée', detail: 'Récap & suite' },
]

export function LandingPage() {
  return (
    <motion.main
      className="page"
      initial={pageMotion.initial}
      animate={pageMotion.animate}
      exit={pageMotion.exit}
      transition={pageMotion.transition}
    >
      <header id="top" className="hero" aria-label="Bannière Hackathon">
        <div className="heroMedia" role="img" aria-label="Aperçu hologramme subtil" />
        <div className="heroOverlay">
          <div className="container">
            <p className="eyebrow">Hackathon Assistant IA — 20 Ans EIGSI Casablanca</p>
            <h1 className="heroTitle">L&apos;Intelligence qui prend vie</h1>
            <p className="heroSubtitle">
              Une expérience calme, précise, orientée produit. Concevez l’assistant IA de demain.
            </p>
            <div className="heroActions">
              <a className="btn primary" href="#inscription">
                S’inscrire
              </a>
              <Link className="btn ghost" to="/ressources">
                Accéder aux ressources techniques
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="centerBlock">
            <h2 className="sectionTitle">Motivation</h2>
            <p className="lead">
              Célébrons 20 ans d&apos;excellence à l&apos;EIGSI Casablanca. Nous mettons au défi le
              génie de nos étudiants : Construisez l&apos;assistant IA de demain. Prix,
              certifications et accompagnement au Brevet d&apos;Invention National pour l&apos;équipe
              lauréate.
            </p>
          </div>
        </div>
      </section>

      <section className="section subtle">
        <div className="container">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Programme (Matinée)</h2>
            <p className="sectionHint">09h00 → 12h30</p>
          </div>

          <div className="programTable" role="table" aria-label="Planning">
            <div className="programRow programHeader" role="row">
              <div className="programCell time" role="columnheader">
                Heure
              </div>
              <div className="programCell" role="columnheader">
                Activité
              </div>
              <div className="programCell detail" role="columnheader">
                Détails
              </div>
            </div>
            {program.map((row) => (
              <div className="programRow" role="row" key={`${row.time}-${row.title}`}>
                <div className="programCell time" role="cell">
                  {row.time}
                </div>
                <div className="programCell" role="cell">
                  {row.title}
                </div>
                <div className="programCell detail" role="cell">
                  {row.detail ?? '—'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <h2 className="sectionTitle">Ressources</h2>
              <p className="muted">
                Un espace dédié aux vidéos, liens et documents techniques utiles (API, prompts,
                bonnes pratiques, exemples).
              </p>
            </div>
            <div className="splitAction">
              <Link className="btn primary" to="/ressources">
                Accéder aux ressources techniques
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="inscription" className="section subtle">
        <div className="container">
          <div className="split">
            <div>
              <h2 className="sectionTitle">Inscription</h2>
              <p className="muted">
                Inscrivez-vous seul ou avec vos partenaires. Les affectations finales seront
                communiquées par mail.
              </p>
            </div>
            <div className="pillRow" aria-label="Formats d'inscription">
              <span className="pill">Solo</span>
              <span className="pill">Équipe de 4</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="ctaFinal">
            <div className="qrWrap" aria-label="Emplacement QR Code">
              <div className="qr">
                <div className="qrGrid" />
                <div className="qrScanner" aria-hidden="true" />
              </div>
              <div className="qrPulse" aria-hidden="true" />
            </div>

            <div className="ctaText">
              <h2 className="sectionTitle">Scannez pour entrer dans l&apos;histoire de l&apos;EIGSI</h2>
              <p className="boost">
                VOTRE INNOVATION, NOTRE PATRIMOINE. SCANNEZ &amp; CRÉEZ.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerInner">
          <span className="muted">
            Propulsé par Le Cercle des Innovateurs de EIGSI CASABLANCA © {new Date().getFullYear()}
          </span>
          <a className="footerLink" href="#top" aria-label="Remonter">
            ↑ Haut
          </a>
        </div>
      </footer>
    </motion.main>
  )
}

