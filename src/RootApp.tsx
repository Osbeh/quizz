import App from "./App";
import { Route, Routes } from "react-router-dom"
import Highscores from "./components/Highscores";
import NavBar from "./components/NavBar";

export default function RootApp() {
    return (
        <>
        <NavBar/>
        <h1 className="m-4 font-semibold font-mono text-indigo-700">Quizz!</h1>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/highscores" element={<Highscores/>}/>
            </Routes>
        </>
    )
}