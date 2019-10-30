import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import SurveyQuestions from "./SurveyQuestions.js";

export default function TestSurvey() {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    axios
      .get("http://0.tcp.ngrok.io:11626/survey")
      .then(res => console.log(res))
      .catch(err => {
        console.log(err);
      });
  });

  return (
    <div>
      <h1>Test Surveys</h1>

      {surveys.map(survey => (
        <div>
          <h2>{survey.name}</h2>
          <p>Survey Start Message: {survey.startMessage}</p>
          <SurveyQuestions questions={survey.surveyQuestionList} />
        </div>
      ))}
    </div>
  );
}
