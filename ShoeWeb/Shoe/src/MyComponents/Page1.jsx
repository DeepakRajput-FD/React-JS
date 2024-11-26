import {
  CloseOutlined,
  FavoriteBorder,
  InsertEmoticon,
  MenuOutlined,
  PersonOutline,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Menu,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import NavBar1 from "./NavBar1";
import SecondBg2 from "./SecondBg2";
import ThirdBg3 from "./ThirdBg3";
import Card1 from "./Card1";
import Footer from "./Footer";
import { useLocation, useNavigate } from "react-router-dom";

export default function Page1() {
  const [change, setchange] = useState(false);

  const navigate = useNavigate("");

  const location=useLocation();
  console.log(location.state);
  

  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Typography
          sx={{
            textAlign: "center",
            textTransform: "uppercase",
            background: "#8a7351",
            padding: 1,
            borderTopLeftRadius: 5,
            borderStartEndRadius: 5,
            color: "white",
            fontFamily: "inherit",
          }}
        >
          {" "}
          Extra 5% Discount For All Online payments. free returns.{" "}
        </Typography>

        <Box
          sx={{
            background: "black",
            padding: 1,
            color: "white",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            alignContent: "center",
            flexWrap: { lg: "wrap", sm: "wrap", xs: "wrap" },
          }}
        >
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <InsertEmoticon sx={{ color: "white", fontSize: "50px" }} />
            <Typography variant="h6">Feet</Typography>
          </Box>

          <Box
            sx={{
              gap: 2,
              marginBottom: { xs: "20px", xs: "20px", md: "0px", lg: "0px" },
              marginTop: { xs: "20px", xs: "20px", md: "0px", lg: "0px" },
              display: { xs: "none", sm: "none", md: "flex" },
            }}
          >
            <Button
              variant="contained"
              sx={{ fontsize: { xs: "20px", sm: "20px", md: "30px" } }}
              onClick={() => navigate("/Homepage")}
            >
              Home
            </Button>

            <Button
              variant="contained"
              sx={{ fontsize: { xs: "20px", sm: "20px", md: "30px" } }}
              onClick={() => navigate("/Menshoes")}
            >
              Men
            </Button>
            <Button
              variant="contained"
              sx={{ fontsize: { xs: "20px", sm: "20px", md: "30px" } }}
              onClick={() => navigate("/Womenshoes")}
            >
              Women
            </Button>
            <Button
              variant="contained"
              sx={{ fontsize: { xs: "20px", sm: "20px", md: "30px" } }}
              onClick={() => navigate("/Kidsshoes")}
            >
              Kids
            </Button>
            <Button
              variant="contained"
              sx={{ fontsize: { xs: "20px", sm: "20px", md: "30px" } }}
            >
              Sports
            </Button>
          </Box>

          <Box
            sx={{
              gap: 2,
              alignItems: "center",
              display: { xs: "none", sm: "none", md: "flex" },
            }}
          >
            <TextField
              id="outlined-password-input"
              label="Search "
              type="text"
              sx={{
                borderRadius: "10px",
                background: "white",
                width: { lg: "200px", sm: "150px", xs: "100px" },
              }}
            />
            <IconButton sx={{ color: "white" }}>
              <FavoriteBorder
                sx={{ fontSize: { xs: "20px", sm: "35px", md: "30px" } }}
              />
            </IconButton>
            <IconButton sx={{ color: "white" }} onClick={()=>navigate('/userpage',{state:location.state})}>
              <PersonOutline
                sx={{ fontSize: { xs: "20px", sm: "25px", md: "30px" } }}
              />
            </IconButton>
            <IconButton sx={{ color: "white" }} onClick={()=>navigate('/mycart')} >
              <ShoppingCartOutlined
                sx={{ fontSize: { xs: "20px", sm: "25px", md: "30px" }  }}
              />
            </IconButton>
          </Box>

          <IconButton
            sx={{
              display: { xs: "block", sm: "block", md: "none", lg: "none" },
            }}
            onClick={() => setchange(!change)}
          >
            <MenuOutlined sx={{ color: "white", fontSize: "30px" }} />
          </IconButton>
        </Box>

        {change ? (
          <Box
            sx={{
              display: { md: "none", xs: "flex", sx: "flex" },
              flexDirection: "column",
              alignContent: "center",
              gap: "10px",
              background: "black",
              backdropFilter: "blur(20px)",
              color: "white",
              position: "absolute",
              alignItems: "center",
              height: { xs: "882px" },
              padding: "10px",
              width: { xs: "80%", sm: "90%" },
              zIndex: "1",
              top: { xs: "130px", sm: "105px", md: "140px" },
            }}
          >
            <TextField
              id="outlined-password-input"
              label="Search "
              type="text"
              sx={{
                borderRadius: "10px",
                background: "white",
                width: { lg: "200px", sm: "250px", xs: "100px" },
              }}
            />

            <Button
              variant="contained"
              sx={{ fontsize: { xs: "20px", sm: "20px", md: "30px" } }}
              onClick={() => navigate("/Homepage")}
            >
              Home
            </Button>

            <Button
              variant="contained"
              sx={{ fontsize: { xs: "20px", sm: "20px", md: "30px" } }}
              onClick={() => navigate("/Menshoes")}
            >
              Men
            </Button>
            <Button
              variant="contained"
              sx={{ fontsize: { xs: "20px", sm: "20px", md: "30px" } }}
              onClick={() => navigate("/Womenshoes")}
            >
              Women
            </Button>
            <Button
              variant="contained"
              sx={{ fontsize: { xs: "20px", sm: "20px", md: "30px" } }}
              onClick={() => navigate("/Kidsshoes")}
            >
              Kids
            </Button>
            <Button
              variant="contained"
              sx={{ fontsize: { xs: "20px", sm: "20px", md: "30px" } }}
            >
              Sports
            </Button>
            <IconButton sx={{ backgroundColor: "white" }} >
              <FavoriteBorder sx={{ color: "blue", fontSize: "30px" }} />
            </IconButton>
            <IconButton sx={{ background: "white" }} onClick={()=>navigate('/userpage',{state:location.state})} >
              <PersonOutline sx={{ color: "blue", fontSize: "30px" }} />
            </IconButton>
            <IconButton sx={{ background: "white" }} onClick={()=>navigate('/mycart')} >
              <ShoppingCartOutlined sx={{ color: "blue", fontSize: "30px" }} />
            </IconButton>
            <IconButton
              sx={{ background: "white", marginTop: "10px" }}
              onClick={() => setchange(!change)}
            >
              <CloseOutlined sx={{ color: "red", fontSize: "30px" }} />
            </IconButton>
          </Box>
        ) : (
          ""
        )}
      </Box>
    </>
  );
}
