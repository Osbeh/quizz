import './App.css'
import { useState } from 'react'
import Answers from './components/Answers'
import getQuestion from './hooks/getQuestion'
import Heart from './components/Heart'

function App() {

  const [count, setCount] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [refetch, setRefetch] = useState("")
  const [skipUsed, setSkipUsed] = useState(false)
  const [removeTwoUsed, setRemoveTwoUsed] = useState(false)
  const [lives, setLives] = useState(3)

  const { data, isLoading, isError, status} = getQuestion(refetch, count)


  if (isLoading) return <h1>Loading</h1>
  if (isError) return <pre>{JSON.stringify(status)}</pre>

  const gameControl = (answerText:string) => {
    if (answerText === "skip") {
      setRefetch(answerText)
      setSkipUsed(true)
      return;
    }
    if (answerText === "remove2") {
      setRemoveTwoUsed(true)
      return;
    }
    setTimeout(() => {
      if (answerText !== correctAnswer) {
        setLives((prevLives) => prevLives -1)

        if (lives === 1) {
          setGameOver(true)
          return;
        }
        setRefetch(answerText)

     } else {
       setCount((prevCount) => prevCount + 1)
       setRefetch(answerText)
     }
    }, 1000)
  }

  const retryGame = () => {
    setCount(0)
    setSkipUsed(false)
    setRemoveTwoUsed(false)
    setGameOver(false)
    setLives(3)
    setRefetch("newGame")
  }

  const livesArray = [
    ...Array(lives),
  ]

  // const correctAnswer = questionQuery.data.results[0].correct_answer
  const correctAnswer = data.results[0].correct_answer

 // const incAnswers = questionQuery.data.results[0].incorrect_answers
  const incAnswers = data.results[0].incorrect_answers

  return (
    <div className="App">
      <div style={{position:"absolute", top:"2rem", right:"2rem"}}>Your score: {count}</div>
      <div style={{position:"absolute", top:"2rem", left:"2rem", display:"flex", flexDirection:"row", gap:"1rem"}}>
        {livesArray.map((value: undefined, index: number) => (
              <Heart key={index}/>
            ))}
      </div>
      
          {gameOver? <>
            <h2>Game Over</h2>
            Your score was {count} 
            <button onClick={() => retryGame()}>Try again</button>
          </>
            : 
          <> 
            <h2>{decodeURIComponent(data.results[0].question)}</h2>
            <Answers correctAnswer={correctAnswer} incorrectAnswers={incAnswers} gameControl={gameControl} skipUsed={skipUsed} removeTwoUsed={removeTwoUsed}/>
          </>
        }
    </div>
  )
}

export default App
