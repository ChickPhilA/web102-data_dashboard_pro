import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'


const PubDetail = () => {

    const { id } = useParams()
    const URL = `https://api.openbrewerydb.org/v1/breweries/${id}`
    const [fullDetails, setFullDetails] = useState(null)


    useEffect(() => {
        console.log("fetching!")
        const requestCoinDetail = async () => {
        console.log("im going to get the data now")
        try {
            const response = await axios.get(URL)
            setFullDetails(response.data)
            console.log("Here is your data:")
            console.table(response.data)

            } catch (error) {
            console.error("Something went wrong:", error)
        }
        }
        requestCoinDetail()
    }, [id]
)

    {/* conditional rendering in case the API doesn't load back */}
    if (!fullDetails) {
        return <p>Loading...</p>
    }

    return(
        <>
            <h2 className="pub-name">{fullDetails.name}</h2>
            <table className="pub-detail-table">
                <tbody>
                    <tr>
                        <td>🍺 Type</td>
                        <td>{fullDetails.brewery_type}</td>
                    </tr>
                    <tr>
                        <td>📍 Street</td>
                        <td>{fullDetails.street}</td>
                    </tr>
                    <tr>
                        <td>🏙️ City</td>
                        <td>{fullDetails.city}</td>
                    </tr>
                    <tr>
                        <td>🗺️ State</td>
                        <td>{fullDetails.state}</td>
                    </tr>
                    <tr>
                        <td>📮 Postal Code</td>
                        <td>{fullDetails.postal_code}</td>
                    </tr>
                    <tr>
                        <td>🌎 Country</td>
                        <td>{fullDetails.country}</td>
                    </tr>
                    <tr>
                        <td>☎️ Phone</td>
                        <td>{fullDetails.phone}</td>
                    </tr>
                    <tr>
                        <td>🔗 Website</td>
                        <td>
                            <a href={fullDetails.website_url} target="_blank" rel="noreferrer">
                                {fullDetails.website_url}
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>🧭 Coordinates</td>
                        <td>{fullDetails.latitude}, {fullDetails.longitude}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default PubDetail