import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Container,
    CssBaseline,
    FormControlLabel,
    Grid,
    TextField,
    Typography,
  } from "@mui/material";
import { useEffect, useState } from "react";
//   import React, { useEffect, useState } from "react";
  import { json, Link, useNavigate } from "react-router-dom";
  
export default function LoginPage() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [loginData,setloginData]=useState([]);

  const navigate=useNavigate();

  useEffect(()=>{
    const oldData=JSON.parse(localStorage.getItem('SignUp'));
    setloginData(oldData)
  },[])

  const handleSubmit=()=>{
   const match= loginData.filter((e,i)=>{ return e.email==email&&e.password==password&&e.id});
    const [person]=match;
    console.log(person.id);
    
    (match)?navigate('/Homepage',{replace:true,state:person.id}):'';
    
  }

    return (
        <>
          <Box
            sx={{
              margin: "50px auto",
              width: { xs: "100%", sm: "80%", md: "30%" },
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Avatar sx={{ margin: "0 auto" }} />
              <Typography component="h1" variant="h5" sx={{ padding: 1 }}>
                Login
              </Typography>
            </Box>
    
            <Box>
    
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => setemail(e.target.value.trim())}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(e) => setpassword(e.target.value.trim())}
                  />
                </Grid>
              
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ margin: "20px 0px" }}
                onClick={handleSubmit}
              >
                Sign Up
              </Button>
              <Link
              to={'/SignUp'}
                variant="body2"
                style={{ fontSize: "20px", fontStyle: "oblique" }}
              >
                 create new account / Sign Up
              </Link>
            </Box>
    
          </Box>
        </>
      );
}
