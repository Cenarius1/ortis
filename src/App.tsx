import './App.css'

type Product = {
  name: string
  price: string
  tagline: string
  badge?: string
  image: string
}

const clothes: Product[] = [
  {
    name: 'Koszulka O-Force',
    price: '139 zł',
    tagline: 'Oddychająca, drop-shoulder, gotowa na ciężkie serie.',
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1666358085449-a10a39f33942?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Szorty SteelGrip',
    price: '169 zł',
    tagline: 'Czterokierunkowy stretch, zero podjeżdżania.',
    image: 'https://images.unsplash.com/photo-1617953644310-e690da9be982?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Spodnie Titan',
    price: '229 zł',
    tagline: 'Zwężany krój, wzmocnione szwy.',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

const supplements: Product[] = [
  {
    name: 'Power Surge Pre',
    price: '189 zł',
    tagline: 'Kofeina + beta-alanina na ogień w serii.',
    badge: 'Nowość',
    image: 'https://images.unsplash.com/photo-1559087316-6b27308e53f6?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Recovery Matrix',
    price: '209 zł',
    tagline: 'Izolat + elektrolity na szybkie odnowienie.',
    image: 'https://images.unsplash.com/photo-1602677416425-c84311bd217c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Night Rebuild',
    price: '179 zł',
    tagline: 'Kazeina na spokojną noc i mocny poranek.',
    image: 'https://images.unsplash.com/photo-1574610758891-5b809b6e6e2e?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

const tutorials: Product[] = [
  {
    name: 'Bench 55 kg — perfekcyjna technika',
    price: 'Darmowy',
    tagline: 'Setup, łuk i drive z nóg krok po kroku.',
    image: 'https://images.unsplash.com/photo-1735647134600-fd2b75fba36d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Push/Pull/Legs 5 dni',
    price: '79 zł',
    tagline: 'Plan periodyzowany z deloadem.',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Mobilność pod ciężary',
    price: '49 zł',
    tagline: 'Barki i biodra, by dźwigać długo i zdrowo.',
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=80',
  },
]

function Section<T extends Product>({ title, items }: { title: string; items: T[] }) {
  return (
    <section className="section" id={title.toLowerCase()}>
      <div className="section-header">
        <h2>{title}</h2>
      </div>
      <div className="grid">
        {items.map((item) => (
          <article key={item.name} className="card">
            {item.badge && <span className="pill">{item.badge}</span>}
            <div className="card-thumb">
              <img src={item.image} alt={item.name} loading="lazy" />
            </div>
            <div className="card-top">
              <h3>{item.name}</h3>
              <span className="price">{item.price}</span>
            </div>
            <p className="tagline">{item.tagline}</p>
            <button className="btn ghost">Dodaj do torby</button>
          </article>
        ))}
      </div>
    </section>
  )
}

function App() {
  const twitchParent = typeof window !== 'undefined' ? window.location.hostname : 'localhost'
  return (
    <div className="page">
      <header className="hero">
        <nav className="nav">
          <div className="brand">ORTIS // SIŁA</div>
          <div className="nav-right">
            <div className="nav-links">
              <a href="#ubrania">Ubrania</a>
              <a href="#suplementy">Suplementy</a>
              <a href="#tutoriale">Tutoriale</a>
              <a href="#kontakt">Kontakt</a>
            </div>
            <div className="nav-socials">
              <a
                className="icon-btn"
                href="https://www.twitch.tv/ortis"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitch Ortisa"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M4 3h17v10.5l-4 3.5h-4l-2.8 2.5H7.5V17H4V3Zm2 2v9h3.5v2.5l2.8-2.5H15l3-2.5V5H6Zm8 1.8h2V12h-2V6.8Zm-4 0h2V12h-2V6.8Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                className="icon-btn"
                href="https://www.instagram.com/the_ortis/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Ortisa"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 2.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm5.25-3.4a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
            <button className="btn">Dołącz</button>
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-copy">
            <p className="pill soft">Pozytywna energia · Potężne boje</p>
            <h1>
              Zbudowane przez Ortisa.
              <span>Dźwigaj ciężko. Żyj głośno.</span>
            </h1>
            <p className="lede">
              Twitchowy gigant, 5 lat dźwigania i 55 kg na hantlach w wyciskaniu. Wbijaj po gear, suplementy i plan, który niesie
              tę samą dobrą energię z live’a.
            </p>
            <div className="hero-actions">
              <button className="btn">Sklep</button>
              <button className="btn ghost">Obejrzyj tutoriale</button>
            </div>
            <div className="stats">
              <div>
                <strong>55 kg</strong>
                <br></br>
                <span>Wyciskanie hantlami</span>
              </div>
              <div>
                <strong>24/7</strong>
                <br></br>
                <span>Pozytywne streamy</span>
              </div>
              <div className="stat-social">
                <span className="stat-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 2.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm5.25-3.4a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <div>
                  <strong>11,8 tys.</strong>
                  <span> Obserwujących</span>
                </div>
              </div>
              <div className="stat-social">
                <span className="stat-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M4 3h17v10.5l-4 3.5h-4l-2.8 2.5H7.5V17H4V3Zm2 2v9h3.5v2.5l2.8-2.5H15l3-2.5V5H6Zm8 1.8h2V12h-2V6.8Zm-4 0h2V12h-2V6.8Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <div>
                  <strong>90 882</strong>
                  <span> Obserwujących</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-shot">
            <div className="shot-glow"></div>
            <div className="heat-overlay"></div>
            <div className="flames"></div>
            <img src="/main-ortis.jpg" alt="Ortis w trakcie treningu" />
            <div className="shot-overlay">Siła // Ortis</div>
          </div>

          <div className="hero-panel">
            <div className="glow"></div>
            <div className="panel-card twitch-card">
              <p className="pill soft">Live na Twitchu</p>
              <h3>Oglądaj Ortisa na żywo</h3>
              <div className="twitch-frame">
                <iframe
                  src={`https://player.twitch.tv/?channel=ortis&parent=${twitchParent}`}
                  allowFullScreen
                  scrolling="no"
                  frameBorder="0"
                  title="Twitch stream Ortisa"
                ></iframe>
              </div>
              <a className="btn ghost" href="https://www.twitch.tv/ortis" target="_blank" rel="noreferrer">
                Otwórz na Twitchu
              </a>
            </div>
            <div className="panel-quote">
              „Bądź dobry, bądź silny. Każde powtórzenie to głos na to, kim chcesz być.” — Ortis
            </div>
          </div>
        </div>
      </header>

      <Section title="Ubrania" items={clothes} />
      <Section title="Suplementy" items={supplements} />
      <Section title="Tutoriale" items={tutorials} />

      <section className="contact" id="kontakt">
        <div className="contact-inner">
          <p className="pill soft">Kontakt biznesowy</p>
          <h2>Porozmawiaj z Ortlsem</h2>
          <p className="lede">Współprace, kampanie, partnerstwa — napisz na e-mail.</p>
          <a className="btn" href="mailto:woj.bak95@gmail.com">
            woj.bak95@gmail.com
          </a>
        </div>
      </section>

      <section className="cta">
        <div className="cta-inner">
          <h2>Wejdź do ekipy Ortisa. Bądź nie do zatrzymania.</h2>
          <p>Top informacje na temat aktualności, cotygodniowe wyzwania na siłowni.</p>
          <div className="hero-actions">
            <button className="btn">Członkostwo</button>
            <button className="btn ghost">Discord ekipa</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>Stworzone dla społeczności Ortisa. Projekt edukacyjny.</div>
        <div className="nav-links">
          <a href="#ubrania">Ubrania</a>
          <a href="#suplementy">Suplementy</a>
          <a href="#tutoriale">Tutoriale</a>
        </div>
      </footer>
    </div>
  )
}

export default App
