import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import StarRating from '../../components/StarRating';
import Spinner from '../../components/Spinner';

const SingleProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    async function getData() {
      try {
        const res = await axios(`https://dummyjson.com/products/${id}`)
        console.log(res.data);
        setData(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getData();
  }, []);
  return (
    <>
      {data ? (
        <div className='px-4'>
          <h2 className='text-center mt-5'>
            {data.title}
          </h2>
          <div style={{
            maxWidth : '16rem',
          }} className='mt-3 mx-auto'>
            <img style={{
            width : '100%', height : '16rem'
          }} src={data.images[0]} alt="" />
          </div>
          <div className='text-center d-flex flex-column'>
            <h4 className='font-normal mt-5'>
              Price: {data.price} $
            </h4>
            <h4 className='mt-1'>
              Category: {data.category}
            </h4>
          </div>
          <h5 className='text-center font-normal mt-3 text-base sm:text-xl'>
            {data.description}
          </h5>
          <StarRating rating={data.rating} />
        </div>
      ) : <Spinner/>}
    </>
  )
}

export default SingleProduct