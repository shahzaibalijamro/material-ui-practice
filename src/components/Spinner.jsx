import { CircularProgress } from '@mui/material'
import React from 'react'

const Spinner = () => {
  return (
    <div style={{
        display : 'flex',
        height : '80vh',
        alignItems : 'center',
        justifyContent : 'center'
    }}>
    <CircularProgress />
    </div>
  )
}

export default Spinner