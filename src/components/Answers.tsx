import { SetStateAction, useState } from "react";
import { Button } from "react-bootstrap";
import Answer from "./Answer";
import GameButtons from "./GameButtons";

type answerProps = {
    correctAnswer: string,
    incorrectAnswers: Array<string>,
    gameControl: (answerText:string) => void,
    skipUsed: boolean,
    removeTwoUsed: boolean
}

export type answerObject = {
    id: number,
    text: string,
    clicked: boolean
}

export default function Answers({ correctAnswer, incorrectAnswers, gameControl, skipUsed, removeTwoUsed }:answerProps) {

    function removeTwo() {
        incorrectAnswers.pop()
        incorrectAnswers.pop()
        gameControl("remove2")
    }

    const answers = incorrectAnswers.concat(correctAnswer)

    function shuffleArray(array:Array<string>) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
   
    shuffleArray(answers)
    
    return (
        // <div className="answers">
        <>
            {answers.map((answer) => (
                <Answer key={answer} answer={answer} correctAnswer={correctAnswer} gameControl={gameControl}/>
            ) )}
            <GameButtons gameControl={gameControl} skipUsed={skipUsed} removeTwo={removeTwo} removeTwoUsed={removeTwoUsed}/>
        </>
        // </div>
    )
} 