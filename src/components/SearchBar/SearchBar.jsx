import s from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchPhoto = form.elements.searchPhoto.value;
    if (searchPhoto.trim() === "") {
      alert("Please enter search term!");
      return;
    }
    onSearch(searchPhoto);
    form.reset();
  };

  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={handleSubmit}>
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
      </form>
    </header>
  );
};

export default SearchBar;
