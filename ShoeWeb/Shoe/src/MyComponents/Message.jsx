import { Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Message() {
  const navigate = useNavigate();

  return (
    <>
      <Typography variant="h2">
        please log in with your email and password
      </Typography>

      <Button variant="contained" onClick={() => navigate("/")}>
        Login
      </Button>
    </>
  );
}
