import './TopNavigation.css'
import logo from '../assets/logo.svg'

export function TopNavigation() {
  return (
    <header className="top-nav">
      <div className="top-nav__inner">
        <div className="brand">
          <img src={logo} className="brand__icon" alt="" />
          <span className="brand__name">ShopOnline</span>
        </div>
        <div className="search">
          <span className="search__icon" />
          <input className="search__input" placeholder="Search for products" />
        </div>
      </div>
    </header>
  )
}


