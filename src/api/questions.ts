import axios from "axios";

export function getOneQuestion(difficulty:string) {
    return axios
        .get(`https://opentdb.com/api.php?amount=1&encode=url3986&difficulty=${difficulty}&type=multiple`)
        .then(res => res.data)
}