// import { useState } from "react"
import { useAuth } from "../../store/auth"

import { useState, CSSProperties } from "react";
import HashLoader from "react-spinners/HashLoader";
import './quiz.css'
import fail from '../../images/failed.png'
import ProgressChart from "../ProgressChart";


const Quiz = () => {
    const {quizes} = useAuth();
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answerIdx,setAnswerIdx ] = useState(null);
    const [finalanswer,setFinalanswer ] = useState(null);
    const [isActive, setIsActive] = useState(false);
    const {user} = useAuth();
    
    const resultInitialState = {
        score:0,
        correctAnswers:0,
        wrongAnswers:0
    }
    const [result,setResult ] = useState(resultInitialState);
    const [showResult,setShowResult ] = useState(false);
    

    if (!quizes || quizes.length === 0) {
        return <HashLoader color="#36d7b7" />; // or any other loading indicator
    }
  
    const {question, options, answer} = quizes[currentQuestion]
    const onAnswerClick = (finalanswer, index) => {
        setAnswerIdx(index);
        if(finalanswer === answer) {
            setFinalanswer(true)
        } else {
            setFinalanswer(false)
        }
    }


    const onClickNext = () => {
        setIsActive(false);
        setAnswerIdx(null)
        setResult((prev) => ({
            ...prev,
            score: finalanswer ? prev.score + 5 : prev.score,
            correctAnswers: finalanswer ? prev.correctAnswers + 1 : prev.correctAnswers,
            wrongAnswers: finalanswer ? prev.wrongAnswers : prev.wrongAnswers + 1,
        }))
        

        if (currentQuestion !== quizes.length - 1) {
            setCurrentQuestion((prev) => prev + 1)
        } else {
            setCurrentQuestion(0);
            setShowResult(true)
        }
    }
    const onTryAgain = () => {
        setResult(resultInitialState);
        setShowResult(false)
    }

    const handleClick = event => {
        setIsActive(true);
      };

    return (
        <div className="quizWrap flex flex-wrap place-items-center place-content-center  py-20">

        <div>
              {!showResult? 
              (<>
                <form action="" className="overflow-hidden relative">
                    <div className="rounded-xl questionCard bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white max-w-xl mx-auto p-7">
                        <h1 className="text-3xl font-bold mb-2 text-center">Skill Test</h1>
                        <span className="block mb-2">Hi, <em>{user.username}</em></span>
                        <div className="topBar absolute top-2 right-2">
                            <span className="activeQuestion font-bold text-1xl w-10 h-10 border-2 border-green-600 flex flex-wrap place-items-center place-content-center border-solid bg-green-600 rounded-full">{currentQuestion +1}</span>
                            <span className="totalQuestion ">{quizes.length}</span>
                        </div>
                        <h2 className="text-center text-xl mb-5">{question}</h2>
                    
                        {
                            options.map((selectedAnswer,index) => {
                                return (
                                    <div className="checkWrap" key={index}>
                                        <input type="radio" className={`absolute -top-full -left-full ${isActive ? 'active' : ''}`} name="quiz" id={selectedAnswer} value={{selectedAnswer}} onClick={handleClick} group="quiz"/>
                                        <label 
                                        onClick={() => onAnswerClick(selectedAnswer,index)}
                                        className="text-center cursor-pointer alternate bg-purple-900 font-bold rounded-full border-solid px-5 py-4 mb-3 shadow-md shadow-slate-400" htmlFor={selectedAnswer}>{selectedAnswer}</label>
                                    </div>
                                )
                            })
                        }
                        <button className="but12" onClick={onClickNext} disabled={answerIdx === null}>
                            <svg><rect></rect></svg>
                            {currentQuestion === quizes.length - 1 ? 'Submit' : 'Next'}
                        </button>
                        <div className="infoWrap flex flex-wrap place-items-center place-content-between pt-5">
                            {/* <strong className="">Current Score: {score}</strong> */}
                            {/* <strong className="">Question {currentQuestion + 1} out of {quizes.length}</strong> */}
                        </div>
                    </div>
                </form>
              </>) :<div className={`result bg-white p-6 rounded `}>
                    <h3 className="text-3xl font-bold mb-2 text-center text-green-800">Result</h3>
                    <strong className="block mb-2">Out of <span>{quizes.length} you answered {result.correctAnswers} questions correct.</span></strong>
                    <div className="chartWrap relative">
                        <ProgressChart dataItem={[result.correctAnswers , result.wrongAnswers]}/>
                        <strong className="percentage">{result.score}%</strong>
                    </div>
                    <button className="but12" onClick={onTryAgain}>
                        <svg><rect></rect></svg>
                        {
                            result.score >= 75 ? 'Restart' : 'Try Again'
                        }
                    </button>
                </div>}
                        
            </div>
        </div>
    )
}

export default Quiz