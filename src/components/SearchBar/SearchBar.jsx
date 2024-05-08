import s from "./SearchBar.module.css";
import { useState } from "react";

export const SearchBar = ({ onSearch }) => {
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchPhoto = form.elements.searchPhoto.value;
    if (searchPhoto.trim() === "") {
      setError("Please enter search term!");
      return;
    } else {
      setError("");
      onSearch(searchPhoto);
      form.reset();
    }
  };

  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            autoComplete="off"
            name="searchPhoto"
            autoFocus
            placeholder="Search images and photos"
            className={s.input}
          />
          <button type="submit" className={s.button}>
            Search
          </button>
        </div>
        {error && <div className={s.error}>{error}</div>}
      </form>
    </header>
  );
};

// export default SearchBar;
