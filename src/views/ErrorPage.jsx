import { Link } from "react-router-dom"

const ErrorPage = () => {
    return(
        <>
            <h1>Oh no! The Page your looking for doesn't exist</h1>
            <button><Link to='/'>Go Back!</Link></button>
        </>
    )
}


export default ErrorPage