import React, { useState } from "react";
import "./ProductDescription.css";

function ProductDescription({ description }) {
  const [isDescCollapsed, setIsDescCollapsed] = useState(false);

  const toggleDesc = () => setIsDescCollapsed((prev) => !prev);

  return (
    <article
      className={`pp-description-container ${
        !isDescCollapsed ? "expanded" : "collapsed"
      }`}
    >
      <h1 className="pp-desription-heading">description</h1>
      <p className="std-paragraph pp-description">{description}</p>
      <button className="pp-read-more-btn" onClick={toggleDesc}>
        {isDescCollapsed ? "Read More" : "Show Less"}
      </button>
    </article>
  );
}

export default ProductDescription;
