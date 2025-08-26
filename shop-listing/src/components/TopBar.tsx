import "./TopBar.css";
import logo from "../assets/logo.svg";
import { Search } from "./Search";

export function TopBar() {
  return (
    <header className="top-nav">
      <div className="top-nav__inner">
        <div className="brand">
          <img src={logo} className="brand__icon" alt="" />
          <span className="brand__name">ShopOnline</span>
        </div>
        <Search />
      </div>
    </header>
  );
}
