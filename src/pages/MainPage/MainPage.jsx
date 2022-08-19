import './main-page.sass'
import Counter from '../../components/Counter/Counter'

export default function MainPage() {
  return (
    <div className="container">
      <div className="page-wrapper">
        <h1>Redux Toolkit</h1>
        <Counter />
      </div>
    </div>
  )
}
