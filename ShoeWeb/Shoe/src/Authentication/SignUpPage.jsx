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
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  const [name, setname] = useState("");
  const [surname, setsurname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [data, setolddata] = useState([]);

  useEffect(() => {
    const oldData = JSON.parse(localStorage.getItem("SignUp")) || [];
    setolddata(oldData);
  }, []);
  

  const handleSubmit = () => {
    let obj = { name, surname, email, password,id:Date.now() };

    if ((name == "" || surname == "" || email == "", password == "")) {
      alert("it is neccessary");
    } else {
      alert("completed");
      localStorage.setItem("SignUp", JSON.stringify([...data, obj]));
    }
  };

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
            Sign up
          </Typography>
        </Box>

        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(e) => setname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={(e) => setsurname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => setemail(e.target.value)}
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
                onChange={(e) => setpassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
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
          to={'/Login'}
            variant="body2"
            style={{ fontSize: "20px", fontStyle: "oblique" }}
          >
            Already have an account? Sign in
          </Link>
        </Box>
      </Box>
    </>
  );
}
