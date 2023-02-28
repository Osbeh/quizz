// import { getHighScores } from "../api/highscore"

import { useEffect, useState } from "react"
import { axiosHighscore } from "../api/axioshiscore"
import Score from "./Score"

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

   console.log(topTen)

    return (
        <div className="highscores">
            <ol>
            {highScores.map((highscore) => (
                <Score key={highscore._id} name={highscore.name} score={highscore.score}/>
            ))
            }
            </ol>
        </div>
    )
}