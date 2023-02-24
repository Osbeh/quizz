import { useEffect, useState } from "react";
import { Button, ListGroup, Stack } from "react-bootstrap";
import { answerObject } from "./Answers";

type Answer = {
    answer: answerObject
    // chooseAnswer: (arg0: answerObject) => void,
    correctAnswer: string,
    gameControl: (answerText:string) => void
}

export default function Answer ({ answer, correctAnswer, gameControl }:Answer) {

    const [btnClass, setBtnClass] = useState<string>("")

    
    function chooseAnswer(chosenAnswer:answerObject) {
        console.log(chosenAnswer)
        setBtnClass("activeButton")

        setTimeout(() => {
            if (chosenAnswer.text === correctAnswer) {
                console.log("YAY!")
                setBtnClass("correctButton")
                gameControl(chosenAnswer.text)
            } else {
                setBtnClass("incorrectButton")
                gameControl(chosenAnswer.text)
            }
        }, 1000)
          
        
    }

    return (
        <div style={{marginBottom:"1rem"}}>
            <Button className={btnClass} style={{width:"100%"}} onClick={() => chooseAnswer(answer)}>{decodeURIComponent(answer.text)}</Button>
        </div>
    )
}