import React, { useState, useEffect } from "react";
import * as api from './api/api'
import QuestionCard from "./components/questionCard";
import Results from "./components/results";

export default function Quiz() {
  const [allQuestions, setAllQuestions] = useState([]);
  const [count, setCount] = useState(0);
  const [finishedQuiz, setFinishedQuiz] = useState(false);
  const [answers,setAnswers]=useState([])


  const getRandomElements = (array, counts) => {
    const randomrnd = array.sort(() => 0.5 - Math.random());
    return randomrnd.slice(0, counts);
  };


  useEffect(() => {
    const getData = async () => {
      const data = await api.fetchData()
      const randomSelection = getRandomElements(data, 10)
      setAllQuestions(randomSelection)
    }
    getData();
  }, [])

  return (
    <>
      {allQuestions.length !== 0 ? <div>
        {finishedQuiz ? <Results answers={answers} /> : <QuestionCard
          question={allQuestions}
          count={count}
          finishedQuiz={finishedQuiz}
          setCount={setCount}
          answers={answers}
          setAnswers={setAnswers}
          setFinishedQuiz={setFinishedQuiz} />}

      </div> : "Loading"}


    </>
  );
}
