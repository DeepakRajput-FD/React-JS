import { Box, Button, Icon, TextField, Typography } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, firestore } from "../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  
    const [name,setName]=useState();
    const [lastname,setlastname]=useState();
    const [email,setemail]=useState();
    const [password,setpassword]=useState();
    const navigate=useNavigate();

    const handleSubmit=async(e)=>
        {
            e.preventDefault();
            console.log('hii');

            const userCredentails= await createUserWithEmailAndPassword(auth,email,password);

            const user=userCredentails.user;

            if (user)
             {
               await setDoc(doc(firestore,'UserData',user.uid),
                {
                    name,lastname,email
                })
              navigate('/userbar',{replace:true})
            }

        }

    return (
    <>
      <div style={{ margin: "100px auto", width: "20%" }}>
        <Box
          sx={{
            width: 400,
            height: 500,
            borderRadius: 2,
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            display: "flex",
            flexDirection: "column",
            padding: "10px",
            background:'rgb(77 208 225)'
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
           
           

            Sign Up to continue.
          </Typography>

          <TextField label="First Name" type="" sx={{ padding: "10px" }} onChange={(e)=>setName(e.target.value)} />

          <TextField label="Last Name" type="" sx={{ padding: "10px" }} onChange={(e)=>setlastname(e.target.value)} />

          <TextField label="Email" type="" sx={{ padding: "10px" }} onChange={(e)=>setemail(e.target.value)} />

          <TextField
            label="Password"
            type="password"
            sx={{ padding: "10px" }}

            onChange={(e)=>setpassword(e.target.value)}

          />

          <Button variant="contained" type="submit"  sx={{ margin: "10px" }} >
            Register
          </Button>

          <Button onClick={()=>navigate('/userExist')} > Already have an account? Sign in</Button>

        </Box>
      </div>
    </>
  );
}
