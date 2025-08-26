import "./Search.css";
import searchIcon from "../assets/searchIcon.svg";

export type SearchProps = {
  placeholder?: string;
  ariaLabel?: string;
  name?: string;
};

export function Search({
  placeholder = "Search for products",
  ariaLabel = "Search for products",
  name = "q",
}: SearchProps) {
  return (
    <div className="search" role="search">
      <img src={searchIcon} className="search__icon" alt="" aria-hidden="true" />
      <input
        className="search__input"
        type="search"
        placeholder={placeholder}
        aria-label={ariaLabel}
        enterKeyHint="search"
        name={name}
      />
    </div>
  );
}


