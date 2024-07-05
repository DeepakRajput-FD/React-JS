import { Box, Button, Icon, TextField, Typography } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import React, { useState } from "react";
import { auth, firestore } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Existing() {

    const [email,setemail]=useState();
    const [password,setpassword]=useState();

    const navigate=useNavigate();

    const handleSubmit=async(e)=>
        {
            e.preventDefault();

            const userCredentails= await signInWithEmailAndPassword(auth,email,password);

            const user=userCredentails.user;

            console.log(user.uid);

            if (user)
             {
               navigate('/userbar',{replace:true});
              
            }



        }    

    return (
    <>

<div style={{ margin: "200px auto", width: "20%" }}>
        <Box
          sx={{
            width: 400,
            height: 350,
            borderRadius: 2,
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            display: "flex",
            flexDirection: "column",
            padding: "10px",
            background:'whitesmoke'
          }}

          component='form'
          onSubmit={(e)=>handleSubmit(e)}
        >
         

          <Typography
            level="h1"
            variant="h5"
            sx={{ padding: "10px 10px" }}
            color="primary"
          >
            Sign In 
          </Typography>

          <TextField label="Email *" type="" sx={{ padding: "10px" }} onChange={(e)=>setemail(e.target.value)} />

          <TextField
            label="Password *"
            type="password"
            sx={{ padding: "10px" }}
            onChange={(e)=>setpassword(e.target.value)}
          />

          <Button variant="contained"  sx={{ margin: "10px",background:'#708F96',color:'whitesmoke' }} type="submit" >
            Login
          </Button>

          <Button variant="outlined" onClick={()=>navigate('/CreateUser')}  sx={{ margin: "10px",background:'#708F96',color:'whitesmoke' }} type="submit" >
            For Sign Up
          </Button>


        </Box>
      </div>

    </>
  )
}
