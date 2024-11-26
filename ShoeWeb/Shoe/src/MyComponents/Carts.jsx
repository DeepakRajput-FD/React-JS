import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Page1 from "./Page1";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export default function Carts() {

    
  // const location=useLocation();
  // // console.log(location.state);

  // const navigate=useNavigate('');

  // useEffect(()=>{
  //   (location.state)?'':navigate('/message');
  // },[])


  const [data, setdata] = useState("");
  const [amount, setamount] = useState("");

  useEffect(() => {
    let getOldData = JSON.parse(localStorage.getItem("BuyItems")) || [];
    // console.log(getOldData);
    setdata(getOldData);
    totalAmount();
  }, []);

  const removeData = (index) => {
    let getOldData = JSON.parse(localStorage.getItem("BuyItems")) || [];
    let changes = getOldData.filter((e, i) => i !== index);
    setdata(changes);
    localStorage.setItem("BuyItems", JSON.stringify(changes));
  };

  const totalAmount = () => {
    let getOldData = JSON.parse(localStorage.getItem("BuyItems")) || [];

    let change = getOldData.map((e, i) => e.price);
    if (change == "") {
      setamount(0);
    } else {
      let contained = change.reduce((acc, curr) => acc + curr);
      setamount(contained);
    }
  };

  return (
    <>
      <Page1 />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Typography variant="h5">My cart</Typography>
        <Typography variant="h5">Total Amount: {amount}$</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 3,
          width: "80%",
          margin: "0 auto",
          padding: "10px",
          borderRadius: "20px",
          flexWrap: "wrap",
        }}
      >
        {data == "" ? (
          <Typography variant="h3" sx={{ display: "flex", margin: "0 auto" }}>
            Data is empty
          </Typography>
        ) : (
          data.map((e, i) => {
            return (
              <Card sx={{ maxWidth: 345 }} key={i}>
                <CardMedia
                  component="img"
                  alt="image"
                  height="140"
                  image={e.image}
                  sx={{ objectFit: "contain" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {e.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {e.description}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {e.price}$
                  </Typography>

                  <Typography variant="h6" color="text.secondary">
                    {e.brand}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="error"
                    variant="contained"
                    onClick={() => removeData(i)}
                  >
                    Remove
                  </Button>
                </CardActions>
              </Card>
            );
          })
        )}
      </Box>
    </>
  );
}
