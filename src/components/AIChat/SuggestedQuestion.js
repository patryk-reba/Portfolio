import React from "react";
import "./SuggestedQuestion.css";

function SuggestedQuestion({ question, onClick }) {
  return (
    <button className="suggested-question" onClick={onClick}>
      {question}
    </button>
  );
}

export default SuggestedQuestion;
