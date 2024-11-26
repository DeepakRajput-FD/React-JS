import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function UserPage() {
  const [oldData, setoldata] = useState([]);

  const location = useLocation();

  const [change, setchange] = useState(false);

  useEffect(() => {
    const getOldData = JSON.parse(localStorage.getItem("SignUp")) || [];
    const findoutData = getOldData.filter((e, i) => e.id == location.state);
    setoldata(findoutData);
  }, []);

  const navigate = useNavigate("");

  useEffect(() => {
    location.state ? "" : navigate("/message");
  }, []);

  return (
    <>
      <Box
        sx={{
          width: {sm:'60%',md:"30%"},
          margin: "50px auto",
          border: "2px solid black",
          borderRadius: "5px",
          height: "400px",
          background: "#a6522b",
          color: "white",
          alignContent: "center",
        }}
      >
        {oldData.map((e, i) => {
          return (
            <Box
              key={i}
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 3,
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h4">
                {e.name} {e.surname}{" "}
              </Typography>
              <Typography variant="h4">{e.email}</Typography>
              <Typography variant="h6">ID:{e.id}</Typography>
              <Button variant="contained" onClick={() => setchange(!change)}>
                view Password
              </Button>

              {change ? <Typography>{e.password}</Typography> : ""}
              <Button variant="contained" onClick={() => navigate(-1)}>
                Back to Page
              </Button>
            </Box>
          );
        })}
      </Box>
    </>
  );
}
