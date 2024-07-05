import { Box, Button, Icon, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function MainRole() {
  
    const navigate=useNavigate();

    return (
    <>

<div style={{ margin: "200px auto", width: "20%" }}>
        <Box
          sx={{
            width: 400,
            height: 200,
            borderRadius: 2,
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            display: "flex",
            flexDirection: "column",
            padding: "30px 10px",
            gap:'10px'
              }}
        >
         
          <Button variant="contained" onClick={()=>navigate('/adminCreate')} color="warning" >Join As Admin</Button>
          
          <Button variant="contained" onClick={()=>navigate('/CreateUser')} >Join As User</Button>


         

         
        </Box>
      </div>

    </>
  )
}
