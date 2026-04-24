import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { pageMotion } from '../ui/motion'

type ProgramRow = { time: string; title: string; detail?: string }

const program: ProgramRow[] = [
  { time: '09:00', title: 'Accueil', detail: 'À la bibliothèque' },
  { time: '09:00–11:00', title: 'Séance de travail', detail: 'Avec mentors/coachs' },
  { time: '11:00–11:20', title: 'Pause café', detail: 'Réseautage avec les mentors' },
  { time: '11:20', title: 'Début des présentations', detail: '10 min par groupe devant le jury' },
  { time: '12:00–12:10', title: 'Délibération du jury', detail: '—' },
  { time: '12:10–12:30', title: 'Remise des prix', detail: 'Clôture' },
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
        <div className="container">
          <div className="heroCard" aria-label="Bannière du hackathon">
            <img className="heroImg" src="/Figures/Header.png" alt="Hackathon Assistant IA" />
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

          <div className="programNote" aria-label="Consignes de présentation">
            <h3 className="programNoteTitle">À présenter</h3>
            <div className="programNoteGrid">
              <div className="programNoteBlock">
                <p className="programNoteLabel">Idéalement : prototype fonctionnel</p>
                <ul className="programNoteList">
                  <li>
                    <strong>Basique</strong> : l’IA comprend la voix de l’utilisateur et génère une
                    réponse personnalisée (Texte-à-Parole) avec synchronisation des lèvres.
                  </li>
                  <li>
                    <strong>Avancé</strong> : l’assistant affiche des médias dynamiques (molécules,
                    graphiques Excel, schémas techniques) à côté de lui dans l’hologramme, selon le
                    contexte.
                  </li>
                </ul>
              </div>

              <div className="programNoteBlock">
                <p className="programNoteLabel">Au minimum : idéation avancée</p>
                <ul className="programNoteList">
                  <li>Idée claire de la conception et des parcours utilisateur.</li>
                  <li>Technologies à utiliser (stack, APIs, voix, TTS, 3D/AR si besoin).</li>
                  <li>Étude de budget, risques, contraintes et plan d’exécution.</li>
                </ul>
              </div>
            </div>

            <p className="programNoteBottom">
              <strong>Une seule équipe gagnante</strong> sera suivie via un monitoring prêt pour
              améliorer la solution et viser un <strong>Brevet National (Brevet d’invention)</strong>.
              Vous avez <strong>2 semaines</strong> pour concevoir et développer un prototype
              d’assistant pédagogique holographique propulsé par l’IA.
              <br />
              <br />
              <strong>Le 24 Avril</strong>, venez finaliser votre dispositif et convaincre notre jury
              d’experts. À la clé : un accompagnement exclusif pour transformer votre invention en un
              Brevet National.
              <br />
              <br />
              <strong>Innovez. Répondez. Gagnez.</strong>
            </p>
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

