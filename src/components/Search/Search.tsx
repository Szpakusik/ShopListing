import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import searchIcon from "../../assets/searchIcon.svg";
import "./Search.css";

export function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const [inputValue, setInputValue] = useState(query);

  const update = (value: string) => {
    const next = new URLSearchParams(searchParams);

    if (value) {
      next.set("q", value);
    } else {
      next.delete("q");
    }
    
    setSearchParams(next, { replace: true });
  };

  useEffect(() => {
    const handle = setTimeout(() => {
      if (inputValue !== query) {
        update(inputValue);
      }
    }, 300);

    return () => clearTimeout(handle);
  }, [inputValue, query]);

  return (
    <div className="search" role="search">
      <img
        src={searchIcon}
        className="search__icon"
        alt=""
        aria-hidden="true"
      />
      <input
        className="search__input"
        type="search"
        placeholder="Search for products"
        aria-label="Search for products"
        enterKeyHint="search"
        name="q"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}
