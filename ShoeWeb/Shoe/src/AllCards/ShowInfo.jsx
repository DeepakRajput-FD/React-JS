import { Star } from "@mui/icons-material";
import { Box, Button, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { json, useNavigate } from "react-router-dom";

export default function ShowInfo() {

  

  let data = useSelector((state, action) => {
    return state.data1.addData;
  });

  if (data == "") {

    data = JSON.parse(localStorage.getItem("ShowInfo"));
  }

  const AddData = () => {
    let locastorageData = JSON.parse(localStorage.getItem("CardData")) || [];
    // console.log(locastorageData);

    // console.log(data);

    localStorage.setItem(
      "CardData",
      JSON.stringify([...locastorageData, data])
    );
  };

  const navigate = useNavigate();

  const backpage = () => {
    localStorage.removeItem("ShowInfo");
    navigate(-1);
  };

  const Buynow=()=>{

    console.log(data);
    
   let getoldData= JSON.parse(localStorage.getItem('BuyItems'))||[];

    localStorage.setItem('BuyItems',JSON.stringify([...getoldData,data]));

  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "90%",
          margin: "50px auto",
          height: { xs: "1500px", sm: "1400px", md: "1250px", lg: "600px" },
          background: "whitesmoke",
          borderRadius: "20px",
          padding: "10px",
          filter: "drop-shadow(20px 10px 40px)",
          alignItems: "center",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
          },
        }}
      >
        <Box
          sx={{
            fontFamily: "monospace",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: { sm: "300px", md: "400px" },
          }}
        >
          <Button
            variant="contained"
            sx={{ width: "100px", mt: 0, }}
            onClick={backpage}
          >
            Back
          </Button>

          <Typography variant="h4" sx={{ fontFamily: "inherit" }}>
            {data.name}
          </Typography>
          <Typography variant="h4" sx={{ fontFamily: "inherit" }}>
            {data.description}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "inherit",
              display: "flex",
              gap: 1,
              alignItems: "center",
            }}
          >
            {data.rating} <Star sx={{ color: "orange", fontSize: "30px" }} />{" "}
          </Typography>

          <Typography
            variant="h4"
            sx={{
              width: "120px",
              background: "#e6b878",
              color: "#54563d",
              padding: 1,
              borderRadius: 1,
            }}
          >
            {data.price}$
          </Typography>

          <Button
            variant="contained"
            sx={{ width: "150px", mt: 2, padding: 1.5 }}
            onClick={AddData}
          >
            Add to Cart
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: { xs: "210px", sm: "400px", md: "400px" },
              marginTop: "20px",
            }}
          >
            <img
              src={data.image}
              alt="image"
              style={{
                width: "100%",
                height: "400px",
                filter: "drop-shadow(16px 16px 40px transparent)",
                borderRadius: "50px",
                objectFit: "contain",
              }}
            />
          </Box>

          <Box>
            <Typography variant="h5">Customer Reviews</Typography>
            {data.reviews.map((e, i) => {
              return (
                <Box sx={{ display: "flex", gap: 1 }} key={i}>
                  <Typography>{e.user}</Typography>
                  <Typography>{e.text}</Typography>
                  <Typography sx={{ display: "flex", alignItems: "center" }}>
                    {e.rating}{" "}
                    <Star sx={{ color: "orange", fontSize: "22px" }} />{" "}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            width: "400px",
          }}
        >
          <Typography variant="h4">{data.category}</Typography>
          <Typography variant="h5">{data.brand}</Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h6">Colors</Typography>
            {data.color.map((e, i) => {
              return (
                <Typography
                  key={i}
                  variant="h5"
                  sx={{
                    width: "80px",
                    background: e,
                    height: "40px",
                    borderRadius: "20px",
                  }}
                ></Typography>
              );
            })}
          </Box>

          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Typography variant="h6">Size</Typography>
            {data.size.map((e, i) => {
              return (
                <Typography key={i} variant="h5">
                  {e}
                </Typography>
              );
            })}
          </Box>

            <Button variant="contained" onClick={Buynow} >Buy Now</Button>

        </Box>
      </Box>

      {/* {data.name} */}
    </>
  );
}
