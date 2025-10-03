import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function ResultWidget({ handleAnimation, achievement, result }) {
  const { ref: resultRef, inView: resultInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <article
      ref={resultRef}
      className={`result-widget ${handleAnimation(resultInView)}`}
      role="listitem"
      aria-label={`Achievement: ${achievement}, Result: ${result}`}
    >
      <h1 className="result-widget-heading std-heading">{achievement}</h1>
      <p className="result-widget-name">{result}</p>
    </article>
  );
}

export default ResultWidget;
