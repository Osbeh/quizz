import { Link } from "react-router-dom";

export default function NavBar() {
    return(
        <nav className="nav">
            <a className="nav-item">Home</a>
            {/* <ul> */}
                <Link className={"nav-item"} to="/highscores">
                    {/* <li>Highscores</li> */}
                    Highscores
                </Link>
            {/* </ul> */}
        </nav>
    )
}