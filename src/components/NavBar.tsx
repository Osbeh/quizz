import { Link } from "react-router-dom";

export default function NavBar() {
    return(
        <nav className="nav">
            <a className="title" href="/">Home</a>
            {/* <ul> */}
                <Link className={"title"} to="/highscores">
                    {/* <li>Highscores</li> */}
                    Highscores
                </Link>
            {/* </ul> */}
        </nav>
    )
}