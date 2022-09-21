import './header.sass'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <nav className="header-nav">
            <a href="/" className="header-link">
              Home
            </a>
            <a href="/counter" className="header-link">
              Counter
            </a>
            <a href="/api-list" className="header-link">
              Pokemons
            </a>
            <a href="/api-translate" className="header-link">
              Translator
            </a>
            <a href="/api-weather" className="header-link">
              Weather
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
