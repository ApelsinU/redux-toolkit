import './main-page.sass'

export default function MainPage() {
  return (
    <div className="page-wrapper">
      <div className="container">
        <h1>Redux Toolkit</h1>
        <nav className="nav">
          <a href="/counter" className="link">
            Counter
          </a>
          <a href="/api-list" className="link">
            Api List
          </a>
        </nav>
      </div>
    </div>
  )
}
