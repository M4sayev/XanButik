import React, { useContext, useState } from "react";
import "./FaqAccordion.css";
import { askedQuestions } from "../../../assets/assets";
import QuestionItem from "./QuestionItem";
import { useInView } from "react-intersection-observer";
import { StoreContext } from "../../../context/StoreContext"

function FaqAccordion() {
  const [accordionItems, setAccordionItems] = useState(askedQuestions);
  const [activeCategory, setActiveCategory] = useState("All Questions");
  const [isFiltered, setIsFiltered] = useState(false);

  const { ref: headingRef, inView: headingInView } = useInView();
  const { handleAnimation } = useContext(StoreContext);

  const allCategories = [
    "All Questions",
    ...new Set(askedQuestions.map((item) => item.category)),
  ];

  const filterItems = (category) => {
    // to collapse all the questions when the category changes
    setIsFiltered(!isFiltered);
    //
    if (category === "All Questions") {
      setAccordionItems(askedQuestions);
      return;
    }
    const newAccordionItems = askedQuestions.filter(
      (accordionItem) => accordionItem.category === category
    );
    setAccordionItems(newAccordionItems);
  };

  const handleQuestionSelected = (category) => {
    setActiveCategory(category);
    filterItems(category);
  };

  return (
    <section className="faq-accordion-section">
      <div className="faq-accordion-contents">
        <h1 
          ref={headingRef}
          className={`std-heading faq-heading ${handleAnimation(headingInView)}`}
        >Frequently asked questions</h1>
        <div className="faq-accordion-container">
          <ul className="faq-question-categories">
            {allCategories.map((category, index) => {
              return (
                <li
                  className={`faq-category-item ${
                    activeCategory === category ? "category-active" : ""
                  }`}
                  key={index}
                  onClick={() => handleQuestionSelected(category)}
                >
                  {category}
                </li>
              );
            })}
          </ul>
          <div className="faq-accordion">
            {accordionItems.map((questionItem, index) => {
              return (
                <QuestionItem
                  key={index}
                  {...questionItem}
                  isFiltered={isFiltered}
                  handleAnimation={handleAnimation}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqAccordion;
