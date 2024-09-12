import { Box, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'

const Home = () => {
  return (
    <Box sx={
      {
        height : '80vh'
      }
    } className="d-flex justify-content-center align-items-center">
      <Typography variant='h3'>
        Home
      </Typography>
    </Box>
  )
}

export default Home