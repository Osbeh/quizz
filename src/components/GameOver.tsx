import React, { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { axiosPost } from "../api/axioshiscore"
import styles from "../styles/GameOver.module.css"

type GameOverProps = {
    count: number,
    retryGame: () => void
}


export default function GameOver({ count, retryGame }:GameOverProps) {

    const [input, setInput] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (event:React.FormEvent) => {
        event.preventDefault();
        axiosPost({"name":input, "score":count}).then(res => navigate("/highscores", {state:count})).catch(err => console.error(err))
      }

    return (
        <div className={styles.gameOver}>
            <h2 className={styles.header}>Game Over</h2>
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