// Import functions from React
import { useNavigate } from "react-router-dom";

// Import functions from React
import { Link } from "react-router-dom"


// useNaviage to go back
export default function NotFoundPage() {
    const navigate = useNavigate();

    // RENDER
    return (

        <>
            <div className="notfound-banner">

            </div >



            {/* 


            <p>404 Not Found</p>
            <Link to={"/"}>
                <button className="btn">Torna alla Home</button>
            </Link> */}



        </>
    );
}