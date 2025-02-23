import { QuizData } from "./QuizQuestion"
import { useState, useEffect } from 'react'
import QuizResult from "./QuizResult";

export default function Quiz() {
    const [currentQues, setCurrentQues] = useState(0)
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0)
    const [canShowResult, setCanShowResult] = useState(false)
    const changeQuestion = () => {
        updateScore();
        if (currentQues < QuizData.length - 1) {
            setCurrentQues(currentQues + 1)
        } else {
            setCanShowResult(true)
        }
    }

    const updateScore = () => {
        if (clickedOption === QuizData[currentQues].answer) {
            setScore(score + 1);
            console.warn(score);
        }
    }

    const resetAll = () => {
        setCurrentQues(0);
        setScore(0);
        setClickedOption(0);
        setCanShowResult(false);
    }
    return (
        <div className="quiz">
            <h1>Quiz App</h1>
            {
                canShowResult ? (<QuizResult score={score} total={QuizData.length} tryAgain={resetAll}/>) : (
                    <>
                        <div className="quiz-ques"><span>{currentQues + 1}.</span> <span>{QuizData[currentQues].question}</span></div>

                        <div className="quiz-option">

                            {
                                QuizData[currentQues].options.map((option, index) => (

                                    <button id="quiz-option" key={index}
                                        className={`option-btn ${clickedOption == index + 1 ? "checked" : null
                                            }`}
                                        onClick={() => setClickedOption(index + 1)}>{option}</button>


                                )
                                )
                            }

                        </div>
                        <button className="quiz-next" onClick={() => changeQuestion()}>Next</button>
                    </>
                )
            }

        </div >
    )
}