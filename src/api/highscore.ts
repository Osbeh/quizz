import axios from "axios";

export function getHighScores() {
    return axios
        .get(`http://localhost:4000/highscores`)
        .then(res => res.data)
}