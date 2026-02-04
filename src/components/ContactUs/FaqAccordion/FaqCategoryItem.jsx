function FaqCategoryItem({
  category,
  handleKeyDown,
  activeCategory,
  handleQuestionSelected,
  index,
}) {
  return (
    <li role="tab">
      <button
        onKeyDown={(e) => handleKeyDown(e, index)}
        aria-selected={activeCategory === category}
        className={`faq-category-item ${
          activeCategory === category ? "category-active" : ""
        }`}
        onClick={() => handleQuestionSelected(category)}
        id={`tab-${index}`}
        aria-controls={`tabpanel-${index}`}
      >
        {category}
      </button>
    </li>
  );
}

export default FaqCategoryItem;
