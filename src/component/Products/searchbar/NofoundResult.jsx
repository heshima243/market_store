import { Container, Typography } from '@mui/material'
import React from 'react'

export default function NofoundResult() {
  return (
    <Container sx={{ marginTop: "70px",textAlign:'center' }}>
   <Typography variant="h5" color="initial"> <span style={{color:'red'}}>0</span> product found, <span style={{fontFamily:'italic'}}>Essaye avec une autre orthographe</span> </Typography>
  </Container>
  )
}
