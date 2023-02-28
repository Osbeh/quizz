import axios from "axios";
import { ScoreProps } from "../components/Score";

export function axiosHighscore() {
    return axios.get('http://localhost:4000/highscores').then(res=> res.data)
}

export function axiosPost(data:ScoreProps) {
     return axios.post('http://localhost:4000/highscores', data)
}