import {
  Favorite,
  FavoriteBorder,
  FavoriteOutlined,
  InsertEmoticon,
  Person,
  PersonOutline,
  ShoppingCart,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Icon,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SecondBg2 from "./SecondBg2";

export default function NavBar1() {
  const [hours, sethours] = useState(0);

  const [Days, setdays] = useState(0);

  const [image, setimage] = useState("./Images/MainShoes1.png");

  let DateAndTime = () => {
    let date1 = new Date();

    let date2 = new Date("2024/08/15");

    let Comparisiondate = date2.getTime() - date1.getTime();

    let HowManyDay = Math.round(Comparisiondate / (1000 * 3600 * 24));

    setdays(HowManyDay);

    let HowManyhour = Math.round(Comparisiondate / (1000 * 3600));

    let howmanymin = Math.round(Comparisiondate / 1000);

    let min = HowManyhour - HowManyDay * 24;

    console.log("total hours today", min);

    sethours(min);
  };

  // setInterval(DateAndTime, 1000);

  return (
    <>
      <Box>
      

        <Box
          sx={{
            background: "#a6522b",
            height: { xs: "900px", sx: "400px", md: "600px", lg: "600px" },
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              padding: "20px",
              alignItems: "center",
              flexWrap: { xs: "wrap", sm: "wrap", md: "nowrap", lg: "nowrap" },
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "row",
                lg: "row",
                xl:'row'
              },
            }}
          >
            <Box>
              <img
                src={image}
                style={{
                  width: "100%",
                  margin: "20px auto",
                  height: "350px",
                  objectFit: "contain",
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexWrap: { xs: "wrap", sm: "wrap" },
                gap: 2,
                width: { xs: "100%", sm: "100%", md: "40%" },
                height: { xs: "250px", sm: "300px", md: "450px" },
                overflow: { xs: "scroll", sm: "scroll", lg: "scroll" },
                scrollbarWidth: "none",
              }}
            >
              <img
                src="./Images/MainShoes1.png"
                style={{
                  width: "200px",
                  objectFit: "contain",
                  borderRadius: "20px",
                  background: "white",
                }}
                alt="image1"
                onClick={(e) => setimage(e.target.src)}
              />
              <img
                src="./Images/Shoes2.png"
                style={{
                  width: "200px",
                  objectFit: "contain",
                  borderRadius: "20px",
                  background: "white",
                }}
                alt="image2"
                onClick={(e) => setimage(e.target.src)}
              />
              <img
                src="./Images/Shoes3.png"
                style={{
                  width: "200px",
                  objectFit: "contain",
                  borderRadius: "20px",
                  background: "white",
                }}
                alt="image3"
                onClick={(e) => setimage(e.target.src)}
              />
              <img
                src="./Images/Shoes4.png"
                style={{
                  width: "200px",
                  objectFit: "contain",
                  borderRadius: "20px",
                  background: "white",
                }}
                alt="image4"
                onClick={(e) => setimage(e.target.src)}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0px 20px",
              flexDirection:{xs:'column',sm:'column',md:"row"},
              gap:'5px',
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 2,
                color: "white",
                flexDirection: "column",
              }}
            >
              <Typography variant="h5">
                Days {Days < 9 ? "0" + Days : Days} Hours {hours}{" "}
              </Typography>

              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  sx={{
                    color: "black",
                    background: "white",
                    fontSize: "18px",
                  }}
                >
                  Sign Up
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    color: "black",
                    background: "white",
                    fontSize: "18px",
                  }}
                >
                  Explore
                </Button>
              </Box>
            </Box>

            <Box>
              <Typography
                sx={{
                  textTransform: "uppercase",
                  color: "white",
                  fontSize: { xs: "20px", sm: "25px", md: "30px", lg: "30px" },
                  fontWeight: "600",
                }}
              >
                Fancy X happyfeet{" "}
              </Typography>
              <Typography
                sx={{
                  textTransform: "uppercase",
                  fontSize: { xs: "20px", sm: "25px", md: "30px", lg: "30px" },
                  color: "white",
                  fontWeight: "600",
                }}
              >
                available Soon
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
