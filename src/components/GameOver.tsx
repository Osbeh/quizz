import axios from "axios"
import React, { useState } from "react"
import { Button, Form, FormControlProps } from "react-bootstrap"
import FormCheckInput from "react-bootstrap/esm/FormCheckInput"
import { useNavigate } from "react-router-dom"
import { axiosPost } from "../api/axioshiscore"

type GameOverProps = {
    count: number,
    retryGame: () => void
}


export default function GameOver({ count, retryGame }:GameOverProps) {

    const [input, setInput] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (event:React.FormEvent) => {
        event.preventDefault();
        axiosPost({"name":input, "score":count}).then(res => navigate("/highscores")).catch(err => console.error(err))
      }

    return (
        <div className="gameOver">
            <h2>Game Over</h2>
            Your score was {count}
            <Form className="inputForm" onSubmit={handleSubmit}>
                <Form.Label>Your initials: </Form.Label>
                <Form.Control className="nameInput" type="text" placeholder="AAA" onChange={(e) => setInput(e.target.value)} maxLength={3}/>
                <Form.Text>
                    Please enter 1-3 characters
                </Form.Text>
                <Button type="submit">Submit score</Button>
            </Form>
            <button onClick={() => retryGame()}>Try again</button>
        </div>
    )
}