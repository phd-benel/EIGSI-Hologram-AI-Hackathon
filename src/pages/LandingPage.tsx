import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { pageMotion } from '../ui/motion'
import { AutoPlayVideo } from '../components/AutoPlayVideo'

type ProgramRow = { time: string; title: string; detail?: string }

const program: ProgramRow[] = [
  { time: '14:00', title: 'Accueil', detail: 'À la bibliothèque' },
  { time: '14:00–16:00', title: 'Séance de travail', detail: 'Avec mentors/coachs' },
  { time: '16:00–16:20', title: 'Pause café', detail: 'Réseautage avec les mentors' },
  { time: '16:20', title: 'Début des présentations', detail: '5-10 min par groupe devant le jury' },
  { time: '17:00–17:10', title: 'Délibération du jury', detail: '—' },
  { time: '17:10–17:30', title: 'Remise des prix', detail: 'Clôture' },
]

export function LandingPage() {
  const demoVideoSrc = encodeURI(
    '/Figures/Firefly Scene on a minimalist student desk in a dimly lit room. On the desk, a Virtual Pedagogical A.mp4',
  )

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
            <h2 className="sectionTitle">Nous mettons au défi le génie de nos étudiants : Construisez le dispositif Assistant "Prof IA" du Futur ...</h2>
            <div className="videoCard" aria-label="Aperçu vidéo du dispositif">
              <AutoPlayVideo className="videoEl" src={demoVideoSrc} ariaLabel="Aperçu vidéo" />
            </div>
            <img
              className="certifImg"
              src="/Figures/Certif.png"
              alt="Certificat et récompenses"
              loading="lazy"
            />
            <div className="scrollHint" aria-hidden="true">
              <span className="scrollArrow" />
            </div>
            <span className="programNoteImageWrap">
                <img
                  className="programNoteImage"
                  src="/Figures/Image2.png"
                  alt="Informations clés : 2 semaines, finalisation le 24 Avril, jury et brevet"
                />
              </span>
          </div>
        </div>
      </section>

      <section className="section subtle">
        <div className="container">
          <div className="sectionHeader">
            <div>
              <h3 className="sectionTitle">Programme (Après-Midi) — Durant la semaine du 10 mai 2026</h3>
              <p className="muted" style={{ margin: '6px 0 0', fontSize: 18, lineHeight: 1.55 }}>
                La date exacte de l&apos;après-midi consacrée au HACKATHON vous sera précisée prochainement ...
              </p>
            </div>
            <p className="sectionHint">14h00 → 17h30</p>
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
                    <strong>Basique</strong> : un dispositif holographique simple où le système
                    répond à votre voix. Exemple : vous demandez{' '}
                    <em>« Comment marche un moteur thermique ? »</em> → l’assistant IA
                    répond <strong>à voix haute</strong> (Texte-à-Parole) avec <strong>animation</strong>{' '}
                    et <strong>synchronisation des lèvres</strong>. == En fin de compte, c'est un ChatGPT qui prend vie sous les traits d'un professeur holographique ✨.
                  </li>
                  <li>
                    <strong>Avancé</strong> : même principe, mais avec <strong>affichage en temps réel</strong>{' '}
                    synchronisé avec l’explication. Par exemple, pendant que le “prof” décrit le moteur,
                    vous <strong>visualisez</strong> à côté de lui un moteur (schéma/3D) — et l’affichage évolue au rythme de
                    ce qui est dit (mise en évidence, étapes, zoom, annotations).
                  </li>
                </ul>
              </div>

              <div className="programNoteBlock">
                <p className="programNoteLabel">Au minimum : idéation avancée</p>
                <ul className="programNoteList">
                  <li>Idée claire de la conception et des parcours utilisateur.</li>
                  <li>Technologies à utiliser (stack, APIs, voix, TTS, 3D/AR ...).</li>
                  <li>Étude de budget, risques, contraintes et plan d’exécution.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <h2 className="sectionTitle">Voici quelques ressources pour vous aider à débuter. </h2>
              
            </div>
            <div className="splitAction">
              <Link className="btn primary" to="/ressources">
                Accéder aux ressources techniques
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="scrollHint" aria-hidden="true">
              <span className="scrollArrow" />
      </div>
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
                <img
                  src="/Figures/QRcode.png"
                  alt="QR code d'inscription"
                  className="qrImg"
                  loading="lazy"
                />
              </div>
              <div className="qrPulse" aria-hidden="true" />
            </div>

            <div className="ctaText">
              <h2 className="sectionTitle">
                Passez par le QR code ou appuyez sur ce bouton pour vous inscrire via Microsoft Forms.
              </h2>
              
              
              <div style={{ marginTop: 14 }}>
                <a
                  className="btn primary"
                  href="https://forms.office.com/e/VHKJ7MaNiX?origin=lprLink"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/Figures/FORM.png"
                    alt="Microsoft Forms"
                    style={{ width: 18, height: 18, objectFit: 'contain' }}
                  />
                  Ouvrir le formulaire
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <footer className="footer">
      <section className="section">
        <div className="container">
          <div className="wideCard" aria-label="Bannière finale">
            <img
              className="wideImg"
              src="/Figures/1-Hero-Banner.png"
              alt="EIGSI — École d’ingénieurs"
              loading="lazy"
            />
          </div>
        </div>
      </section>
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

