// import { getHighScores } from "../api/highscore"

import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { axiosHighscore } from "../api/axioshiscore"
import Score from "./Score"
import styles from "../styles/HighScores.module.css"

type HighScoreProp = {
    _id: string,
    name: string,
    score: number
}

export default function Highscores() {

    const [highScores, setHighScores] = useState<HighScoreProp[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [topTen, setTopTen] = useState<HighScoreProp[]>([])

    const location = useLocation()
    const navigate = useNavigate()

   useEffect(() => {
     const getHighscores = async () => {
        const highscoresFromServer = await axiosHighscore()
        if (highscoresFromServer) {
            highscoresFromServer.sort((a:HighScoreProp, b:HighScoreProp) => b.score - a.score)
          setHighScores(highscoresFromServer)
          setTopTen(highscoresFromServer.slice(0,10))
        } else {
            setError(true)
        }
        setLoading(false)
     }
     getHighscores()
   }, [])

   if (loading) return <div>Loading...</div>
   if (error) return <div>Something went wrong...</div>

   console.log(location.state)

    return (
        <div className={styles.highscores}>
            <h2>Top players:</h2>
            <ol className={styles.scoreList}>
            {topTen.map((highscore) => (
                <Score key={highscore._id} name={highscore.name} score={highscore.score}/>
            ))
            }
            </ol>
            {location.state && `Your score was ${location.state}`}
            <button onClick={() => navigate("/")}>Play again</button>
        </div>
    )
}