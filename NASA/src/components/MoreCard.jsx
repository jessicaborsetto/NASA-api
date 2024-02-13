import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MoreButton from '../components/MoreButton';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter
} from "@material-tailwind/react";

function MoreCard() {
  const keyMore = 'idfstdH5cDEk4Rs9k5YYqmqPkf3xmvnUPF0McZBF'
  const urlMore = 'https://api.nasa.gov/planetary/apod?api_key='
  const startDate = 'start_date=2024-01-01'
  const apiUrlCards = `${urlMore}${keyMore}&${startDate}`

  const [cardData, setCardData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrlCards)
        const newData = await response.json()
        console.log(newData)
        setCardData(newData)
      }
      catch (error) {
        console.error('error')
      }
    }
    fetchData()
  }, [apiUrlCards])

  return (
    <div className='container p-5 mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
      {cardData && cardData.map((cards, index) =>
        <Card className="mt-6 w-100 h-[100%] rounded-2xl border-zinc-400 bg-slate-200 hover:scale-95 shadow-md " key={index}>
          <CardHeader className="relative">

            {cards &&
              <>
                <img src={cards.hdurl} alt="NASA APOD" className='image h-[20rem] max-w-full rounded-t-2xl object-cover object-center' />
              </>
            }

          </CardHeader>
          <CardBody className='p-5 h-40'>
            <div className='border-b-4'>
              {cards && <h6 className='text-end text-sm text-zinc-500 pb-5'>{cards.date}</h6>}
              {cards &&
                <div className='flex justify-between'>
                  <h4 className='text-xl font-semibold'>{cards.title}</h4>
                </div>}
              {/* {cards && <p className="mb-4 font-normal truncate">{cards.explanation}</p>} */}

            </div>



          </CardBody>

          <hr className='border-slate-300' />

          <CardFooter className='pt-5 px-20'>
            <Link className="nav-link w-100" to={`/info/${cards.date}`} ><MoreButton></MoreButton></Link>

          </CardFooter>
        </Card>
      )}



    </div>
  )
}

export default MoreCard