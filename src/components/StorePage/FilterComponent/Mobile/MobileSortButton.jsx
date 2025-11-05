function MobileSortButton({ sortOptions, setSortOptions }) {
  function handleKeyDown(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const sortElement = document.getElementById("sortProductBy");
      sortElement.focus();
    }
  }
  return (
    <fieldset className="sort-container">
      <legend className="visually-hidden">Sort Products</legend>
      <label
        htmlFor="sortProductBy"
        className="sort-dropdown-btn "
        onKeyDown={handleKeyDown}
      >
        Sort
      </label>
      <select
        name="sort"
        id="sortProductBy"
        value={sortOptions}
        onChange={(e) => setSortOptions(e.target.value)}
      >
        <option value="Recommended">Recommended</option>
        <option value="What's new">What's New</option>
        <option value="Price low to high">Price low to high</option>
        <option value="Price high to low">Price high to low</option>
      </select>
    </fieldset>
  );
}

export default MobileSortButton;
