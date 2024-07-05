import { Box, Button, Icon, TextField, Typography } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import React, { useState } from "react";
import { auth, firestore } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function ExistingAdmin() {

    const [email,setemail]=useState();
    const [password,setpassword]=useState();

    const [rocket,setrocket]=useState(false);

    const navigate=useNavigate();

    const handleSubmit=async(e)=>
        {
            e.preventDefault();

            const userCredentails= await signInWithEmailAndPassword(auth,email,password);

            const user=userCredentails.user;

            console.log(user.uid);

            if (user)
             {
              setrocket(!rocket)
              setTimeout(() => {
                navigate('/AdminDashboard',{replace:true}); 
              }, 2000);
            }

        }    

    return (
        <>

      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',fontFamily:'cursive',width:'60%',height:'500px',margin:'50px auto',padding:'10px',borderRadius:'30px',backdropFilter:'blur(50px)',background:'whitesmoke'}}>

      
        <div >
          <h1>Welcome Back,</h1>
          <img src="Rocket.png" width={'200px'} alt="" 
          
          style={
            rocket
            ?
            {
              position:"absolute",
              top:'0px'
            }
            :
            {}
          }

          className="Change"
     />
        </div>

        <div style={{ margin: "200px auto", width: "50%" }}>
                <Box
                  sx={{
                    width: '100%',
                    height: 380,
                    borderRadius: 2,
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    display: "flex",
                    flexDirection: "column",
                    // padding: "10px",
                  }}
        
                  component='form'
                  onSubmit={(e)=>handleSubmit(e)}
                >
                 
        
                  <Typography
                    level="h1"
                    variant="h5"
                    sx={{ padding: "10px 10px" }}
                    color="whitesmoke"
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
        
                  <Button variant="outlined"  sx={{ margin: "10px",background:'rgb(77 208 225)',fontWeight:600,color:'black' }} type="submit" >
                    Login
                  </Button>

                  <Button onClick={(e)=>navigate('/adminCreate') } sx={{color:'black',background:'rgb(77 208 225)',margin:'10px',fontWeight:600}}  >For Sign Up</Button>

                  <Button variant="outlined" onClick={(e)=>navigate('/userExist')} sx={{margin:"10px", color:'black',background:'rgb(77 208 225)',fontWeight:600}}>For User</Button>
        
                </Box>
              </div>
          </div>


            </>
  )
}
