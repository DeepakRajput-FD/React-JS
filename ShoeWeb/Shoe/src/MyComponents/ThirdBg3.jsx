import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function ThirdBg3() {
  return (
    <>
      <Box>
        <Box>


          <Box
            sx={{
              backgroundImage: "url(./Images/BackImage3.avif)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "600px",
            }}
          >

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                padding: "80px",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "600",
                  color: "white",
                }}
              >
                Dare To be you
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  padding: "10px",
                  textTransform: "uppercase",
                  fontWeight: "600",
                  color: "white",
                }}
              >
                Alpha Collections
              </Typography>
            </Box>
                <Box sx={{display:'flex',gap:2,justifyContent:'center'}} >
                  <Button variant="contained" sx={{fontWeight:'600'}} >Shop Now</Button>
                  <Button variant="contained" sx={{fontWeight:'600'}} >Shop Rider</Button>
                </Box>


          </Box>




        </Box>

        <Typography sx={{ padding: "15px", background: "white" }}></Typography>
      </Box>

      {/* <Box>
        <Box sx={{background:'hsl(171.43deg 52.24% 73.73%)',padding:'10px',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}} >
        <Typography sx={{fontSize:'25px',fontWeight:"600",fontFamily:'cursive',textTransform:'uppercase'}} >Dare to be you</Typography>
        <Typography sx={{fontSize:'20px',fontWeight:"600",fontFamily:'cursive',textTransform:'uppercase'}} >Alpha collections</Typography>
        <Typography></Typography>
        </Box>
        <Typography sx={{padding:'10px',background:'white'}} ></Typography>
        </Box> */}
    </>
  );
}
