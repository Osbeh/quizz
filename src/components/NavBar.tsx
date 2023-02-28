import { Link } from "react-router-dom";

export default function NavBar() {
    return(
        <nav className="nav">
            <a className="title" href="/">Home</a>
            <ul>
                <Link to="/highscores">
                    <li>Highscores</li>
                </Link>
            </ul>
        </nav>
    )
}