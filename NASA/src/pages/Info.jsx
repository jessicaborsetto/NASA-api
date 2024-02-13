import InfoCard from "../components/InfoCard"
import BackBtn from "../components/BackBtn";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

function Info() {
    const [info, setInfo] = useState(null)
    const { infoId: date } = useParams();
    const keyMore = 'idfstdH5cDEk4Rs9k5YYqmqPkf3xmvnUPF0McZBF'
    const urlMore = 'https://api.nasa.gov/planetary/apod?api_key='
    const apiUrlInfo = `${urlMore}${keyMore}&date=${date}`

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrlInfo)
                const newData = await response.json()
                console.log(newData)
                setInfo(newData)
            }
            catch (error) {
                console.error('error')
            }
        }
        fetchData()
    }, [date, keyMore, urlMore])


    return (
        <>
            <div>
                <InfoCard info={info}></InfoCard>
            </div>
            <div>
            <Link className="nav-link fixed bottom-0 left-0 right-5" to="/more" ><BackBtn></BackBtn></Link>
            </div>

        </>
    )
}
export default Info