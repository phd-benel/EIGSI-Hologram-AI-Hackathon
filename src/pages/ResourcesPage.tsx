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
            <h1 className="pageTitle">Documentation</h1>
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

          <div className="spacer24" aria-hidden="true" />

          <h2 className="sectionTitle">2. Ressources pour l’application</h2>
          <div className="resourceCard">
            <p className="resourceIntro">
              <strong>VOICI UN EXEMPLE DE PROTOTYPE SIMPLIFIÉ POUR COMMENCER ...</strong>
              <br />
              L’idée est de transformer votre smartphone en <strong>“cerveau”</strong> et{' '}
              <strong>“projecteur”</strong> en même temps. Votre application ne doit pas être une simple
              vidéo, mais un système <strong>réactif</strong> qui tourne en boucle. Voici les 3 piliers
              de votre projet :
            </p>

            <div className="resourceGrid">
              <div className="resourceBlock">
                <h3 className="resourceH3">1. Le Logiciel IA (Le Cerveau)</h3>
                <p className="resourceP">
                  Plutôt que de tout coder, utilisez une <strong>IA de type LLM</strong> (comme Qween3.5:2b). Le mieux pour votre prototype est d’avoir l’IA qui tourne sur votre
                  téléphone ou sur un PC à proximité ou via une API Cloud.
                </p>
                <ul className="resourceList">
                  <li>
                    <strong>Workflow</strong> : le téléphone écoute (STT - Speech to Text), envoie la
                    question à l’IA, et l’IA génère une réponse textuelle pédagogique.
                  </li>
                  
                </ul>
              </div>

              <div className="resourceBlock">
                <h3 className="resourceH3">2. L’Animation et le Lip-Sync (Le Visage)</h3>
                <p className="resourceP">
                  C’est ici que la magie opère. Vous avez déjà une image de votre professeur sur{' '}
                  <strong>fond noir</strong>. Pour le faire bouger en fonction du son de la réponse :
                </p>
                <ul className="resourceList">
                  <li>
                    <strong>Le Framework</strong> : utilisez un script (Python ou Kotlin) intégrant des
                    modèles comme <strong>Wav2Lip</strong> ou <strong>LipGAN</strong> ou <strong>LipGAN</strong> ou <strong>pytoon</strong> . Ces modèles sont
                    “légers” et capables de modifier la bouche d’une image fixe en temps réel pour
                    qu’elle corresponde au son de la voix.
                  </li>
                
                </ul>
              </div>

              <div className="resourceBlock">
                <h3 className="resourceH3">3. L’Interface Holographique (La Projection)</h3>
                <p className="resourceP">
                  Votre application mobile doit afficher le professeur sur un <strong>fond noir absolu</strong>.
                  Pourquoi ? Parce que dans votre projecteur (la boîte en verre à 45°), le noir ne se
                  reflète pas. Seul le professeur et ses gestes apparaîtront comme s’ils flottaient dans
                  le vide.
                </p>
              </div>
            </div>

            <div className="resourceQuote" role="note" aria-label="Résumé">
              <p className="resourceP" style={{ margin: 0 }}>
                <strong>En résumé :</strong> votre application mobile doit être un chef d’orchestre.
                Elle active le micro, demande à l’IA de répondre, génère la voix (TTS), et synchronise
                instantanément les lèvres de l’image du prof avec ce son. Posez ensuite votre téléphone
                sur (ou sous) votre <strong>Boîtier Holographique DIY</strong>, et vous aurez un assistant
                vivant qui répond à vos questions en 3D !
              </p>
            </div>

            <p className="resourceStrongLine">
              “L’IA doit rester active : dès que le prof finit de parler, l’app repasse en mode écoute
              automatique pour continuer la discussion sans que vous ayez à toucher l’écran !”
            </p>
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

