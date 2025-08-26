import "./TopNavigation.css";
import logo from "../assets/logo.svg";

export function TopNavigation() {
  return (
    <header className="top-nav">
      <div className="top-nav__inner">
        <div className="brand">
          <img src={logo} className="brand__icon" alt="" />
          <span className="brand__name">ShopOnline</span>
        </div>
        <div className="search" role="search">
          <span className="search__icon" aria-hidden="true" />
          <input
            className="search__input"
            type="search"
            placeholder="Search for products"
            aria-label="Search for products"
            enterKeyHint="search"
            name="q"
          />
        </div>
      </div>
    </header>
  );
}
