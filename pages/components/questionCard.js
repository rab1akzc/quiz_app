import React, { useEffect, useState } from "react";

const QuestionCard = ({ question, count, finishedQuiz, setCount, setFinishedQuiz, answers, setAnswers }) => {
    const [timer, setTimer] = useState(30);
    // const [answers, setAnswers] = useState([]);
    const [disableButon, setDisableButton] = useState(true)
    const [answerA, setAnswerA] = useState();
    const [answerB, setAnswerB] = useState();
    const [answerC, setAnswerC] = useState();
    const [answerD, setAnswerD] = useState();

    const getRandomElements = (array, counts) => {
        const randomrnd = array.sort(() => 0.5 - Math.random());
        return randomrnd.slice(0, counts);

    };

    const makeAnswers = () => {
        const sentence = question[count].body
        const words = sentence.split(" ");
        const randomSelect = getRandomElements(words, 4);
        setAnswerA(randomSelect[0]);
        setAnswerB(randomSelect[1])
        setAnswerC(randomSelect[2])
        setAnswerD(randomSelect[3])
    }

    const approvedChoise = (e) => {
        let newAnswer = {};
        setCount(count + 1)
        if (count === 9) {
            setFinishedQuiz(true)
        }
        setTimer(30)
        setProgress(100);
        setDisableButton(true)
        if (e !== "emptyQuestion") {
            newAnswer = {
                "soru": e.target.id,
                "cevap": e.target.value,
                "text": e.target.name
            };
            setAnswers(prevAnswers => [...prevAnswers, newAnswer]);
        } else {
            newAnswer = {
                "soru": question[count].body,
                "cevap": "",
                "text": ""
            }
            setAnswers(prevAnswers => [...prevAnswers, newAnswer]);
        }
    }
    const [progress, setProgress] = useState(100);
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - (100 / 30); // 30 saniyede 100% dolması için
            });
        }, 1000); // Her saniye güncelle

        return () => clearInterval(interval); // Temizleme
    }, [count, timer]);
    useEffect(() => {
        makeAnswers()
    }, [count])
    useEffect(() => {
        const interval = setInterval(() => {
            if (timer <= 20) {
                setDisableButton(false)
            }
            if (timer > 0) {
                setTimer(timer - 1)
            }
            if (timer === 0 && count < 10) {
                setCount(count + 1)
                setTimer(30)
                setProgress(100);
                approvedChoise("emptyQuestion")
            } else if (count >= 10) {
                setFinishedQuiz(true)
            }
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [count, timer])

    return (
        <>
            <div class="wave-container">
                <h2 class="animated mb-4">QUİZ APP</h2>
            </div>
            <div className="containerQuestions">
                <div className="containerHeader mt-mb-3">
                    <div className="timerBack">
                        <h5 className="title">
                            {timer}
                        </h5>
                    </div>
                    <div className="timerBack">
                        <h5 className="title">
                            {count + 1}/10
                        </h5>
                    </div>
                </div>

                <div className="question">
                    {question[count].body}
                </div>
                <div className="answers">
                    <ul className="answersList mb-4">
                        <li><button className={disableButon !== true ? "buttonAnswers" : "buttonAnswers-disabled"} disabled={disableButon}
                            onClick={approvedChoise} id={question[count].body} value={"A"} name={answerA}  >{"A)" + `${answerA}`}</button></li>
                        <li> <button className={disableButon !== true ? "buttonAnswers" : "buttonAnswers-disabled"} disabled={disableButon}
                            onClick={approvedChoise} id={question[count].body} value={"B"} name={answerB}>{"B)" + `${answerB}`}</button></li>
                        <li><button className={disableButon !== true ? "buttonAnswers" : "buttonAnswers-disabled"} disabled={disableButon}
                            onClick={approvedChoise} id={question[count].body} value="C" name={answerC}>{"C)" + `${answerC}`}</button></li>
                        <li><button className={disableButon !== true ? "buttonAnswers" : "buttonAnswers-disabled"} disabled={disableButon}
                            onClick={approvedChoise} id={question[count].body} value="D" name={answerD}>{"D)" + `${answerD}`}</button></li>

                    </ul>
                </div>
                <div className="d-flex justify-content-end">
                    <button className="nextQuestions" onClick={() => { approvedChoise("emptyQuestion") }}>Sonraki</button>
                </div>
                <div className="progress mt-3">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${progress}%` }}
                        aria-valuenow={progress}
                        aria-valuemin="0"
                        aria-valuemax="100"
                    >
                    </div>
                </div>
            </div>
        </>
    )
}
export default QuestionCard
