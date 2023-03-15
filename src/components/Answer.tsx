import { useEffect, useState } from "react";
import { Button, ListGroup, Stack } from "react-bootstrap";
import { answerObject } from "./Answers";

type Answer = {
    // answer: answerObject
    answer: string
    // chooseAnswer: (arg0: answerObject) => void,
    correctAnswer: string,
    gameControl: (answerText:string) => void
}

export default function Answer ({ answer, correctAnswer, gameControl }:Answer) {

    const [btnClass, setBtnClass] = useState<string>("")

    
    // function chooseAnswer(chosenAnswer:answerObject) {
    function chooseAnswer(chosenAnswer:string) {
        console.log(chosenAnswer)
        setBtnClass("activeButton")

        setTimeout(() => {
            if (chosenAnswer === correctAnswer) {
                console.log("YAY!")
                setBtnClass("correctButton")
                gameControl(chosenAnswer)
            } else {
                setBtnClass("incorrectButton")
                gameControl(chosenAnswer)
            }
        }, 1000)
          
        
    }

    return (
        <div style={{marginBottom:"1rem"}}>
            <Button className={btnClass} style={{width:"100%"}} onClick={() => chooseAnswer(answer)}>{decodeURIComponent(answer)}</Button>
        </div>
    )
}