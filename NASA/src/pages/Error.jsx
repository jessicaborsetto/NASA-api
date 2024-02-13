import BackBtn from "../components/BackBtn"
import { Link } from "react-router-dom"

function Error(){
    return(
        <>
        <h2 className="text-7xl text-center my-10 container p-5 mx-auto">Ci dispiace c'è stato un errore &#128534;</h2>
        <Link className="nav-link fixed bottom-0 left-0 right-5" to="/" ><BackBtn ></BackBtn></Link>
        </>
    )
}

export default Error