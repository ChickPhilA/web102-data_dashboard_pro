import { Link } from 'react-router'

const NotFound = () => {
    return(
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "80vh", textAlign: "center", gap: "0.75rem" }}>
            <div> Sorry, this page does not exist! :( </div>
            <div> <Link to="/"> {"Click here to return to the Home page."} </Link> </div>
        </div>
    )
}

export default NotFound