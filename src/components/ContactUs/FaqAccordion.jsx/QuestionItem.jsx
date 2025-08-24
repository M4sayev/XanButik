import React, { useEffect, useId, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useInView } from "react-intersection-observer";

function QuestionItem({ question, ans, isFiltered, handleAnimation, handleArrows, index}) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { ref: accordionItemRef, inView: accordionItemInView } = useInView();
  const id = useId();

  // collapsing every question on category change
    useEffect(() => setIsCollapsed(true), [isFiltered]);

    
  return (
    <article 
      ref={accordionItemRef} 
      className={`faq-accordion-item ${handleAnimation(accordionItemInView)}`}
      id={`article-${index}`}
    >
      <button
        data-tab-index={`article-button-${index}`}
        id={`faq-button-${id}`}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="faq-accordion-head"
        aria-expanded={!isCollapsed}
        aria-controls={`faq-content-${id}`}
        onKeyDown={(e) => {
          const articles = Array.from(document.querySelectorAll(".faq-accordion-item"));
          const currentIndex = articles.findIndex(el => el.id === `article-${index}`);
          handleArrows(e, currentIndex)
        }}
      >
        <h2 className="std-subtitle-fs faq-accordion-question">{question}</h2>
        <i>
          <IoIosArrowDown
            className={`faq-arrow-icon ${
              !isCollapsed ? "arrow-is-active" : ""
            }`}
            aria-hidden="true"
          />
        </i>
      </button>
      <div
        role="region"
        id={`faq-content-${id}`}
        aria-labelledby={`faq-button-${id}`}
        className={`faq-accordion-body ${!isCollapsed ? "faq-accordion-body-show" : ""}`}
        hidden={isCollapsed}
      >
        <p className="faq-accordion-ans">{ans}</p>
      </div>
    </article>
  );
}

export default QuestionItem;
