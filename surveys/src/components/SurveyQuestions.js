import React from "react";

const SurveyQuestions = props => {
  return (
    <div>
      {props.questions.map(question => (
        <div>
          <p>{question.type}</p>
          <p>{question.question}</p>
        </div>
      ))}
    </div>
  );
};

export default SurveyQuestions;
