import { Box, Typography } from '@mui/material'
import React from 'react'

export default function SecondBg2() {
  return (
    <>
    
    <Box >

    <Typography sx={{padding:'20px',background:'#d9d9d9'}} ></Typography>

    <Box sx={{position:"relative"}} >
    <img src="./Images/ShoesImage2.avif" alt=""  style={{width:'100%',height:'600px',objectFit:'cover'}} />

    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',position:'absolute',top:'200px',right:'20px'}} >
        <Typography variant='h4' sx={{textTransform:'capitalize',fontWeight:"600",color:"white"}} >Trending now !</Typography>
        <Typography sx={{width:'100px',background:'white',color:'black',fontWeight:"600",textAlign:'center',marginTop:'10px',padding:'5px',borderRadius:'5px'}} >Men</Typography>
        <Typography sx={{width:'100px',background:'white',color:'black',fontWeight:"600",textAlign:'center',marginTop:'10px',padding:'5px',borderRadius:'5px'}} >Women</Typography>
        <Typography sx={{width:'100px',background:'white',color:'black',fontWeight:"600",textAlign:'center',marginTop:'10px',padding:'5px',borderRadius:'5px'}} >Kids</Typography>
    </Box>
  
    </Box>

    <Typography sx={{padding:'15px',background:'white'}} ></Typography>

    </Box>

    <Box>
        <Box sx={{background:'hsl(171.43deg 52.24% 73.73%)',padding:'10px',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}} >
        <Typography sx={{fontSize:'25px',fontWeight:"600",fontFamily:'cursive'}} >Extra 15% Off an order above ₹7500</Typography>
        <Typography sx={{fontSize:'20px',fontWeight:"600",fontFamily:'cursive'}} >Discount auto applied at checkout</Typography>
        <Typography></Typography>
        </Box>
        <Typography sx={{padding:'10px',background:'white'}} ></Typography>
        </Box>

    </>
  )
}
