import { Box, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MediaCard from '../../components/Card';
import Spinner from '../../components/Spinner';
const Products = () => {
  const [products,setProducts] = useState([]);
  useEffect(()=>{
    axios('https://dummyjson.com/products')
    .then(res => {
      setProducts(res.data.products);
      console.log(res.data.products);
      
    })
    .catch(err => {
      console.log(err);
    })
  }, []);
  return (
    <>
      <Typography className='text-center mt-4 mb-5' variant='h4'>
        All Products
      </Typography>
    <Box className="d-flex justify-content-center gap-5 mb-5 align-items-center flex-wrap">
      {products.length > 0 ? 
        (products.map((item)=>{
        return <MediaCard key={item.id} item={item} title={item.title} description={item.description} image={item.images[0]} id={item.id}/>
        }))
          : <Spinner/>}
    </Box>
      </>
  )
}

export default Products