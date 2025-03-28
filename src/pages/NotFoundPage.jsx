// Import functions from React
import { useNavigate } from "react-router-dom";

// Import functions from React
import { Link } from "react-router-dom"


// useNaviage to go back
export default function NotFoundPage() {
    const navigate = useNavigate();

    // RENDER
    return (
        <main>
            <div className="notfound">
                <h1>Pagina non trovata</h1>
                <p>404 Not Found</p>
                <Link to={"/"}>
                    <button className="btn">Torna alla Home</button>
                </Link>
            </div>
        </main>
    );
}