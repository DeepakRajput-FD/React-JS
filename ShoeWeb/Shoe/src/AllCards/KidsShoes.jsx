import {
  Close,
  Search,
  SearchRounded,
  Star,
  StarBorder,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Page1 from "../MyComponents/Page1";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Addingdata } from "../../public/Redux/Slice1";

export default function KidsShoes() {


  const kidsShoes = [
    {
      id: 1,
      name: "Sneaker Shoes",
      description: "Comfortable and durable sneakers for active kids.",
      price: 49.99,
      image:
        "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/12744c54-a896-4508-a115-f26110030da4/TEAM+HUSTLE+D+11+%28PS%29.png",
      category: "Casual",
      brand: "Nike",
      size: ["10", "11", "12", "13", "1", "2"],
      color: ["blue", "black", "gray"],
      rating: 4.6,
      reviews: [
        { user: "James Smith", rating: 5, text: "Great for running around!" },
      ],
    },
    {
      id: 2,
      name: "Velcro Sandals",
      description: "Easy-to-wear sandals with adjustable straps for kids.",
      price: 34.99,
      image:
        "https://www.jiomart.com/images/product/original/rvd5qg41y5/airfax-velcro-indoor-outdoor-sandals-for-boys-girls-kids-canva-kiddy_black-red_10_kid-product-images-rvd5qg41y5-0-202302170502.jpg?im=Resize=(500,630)",
      category: "Casual",
      brand: "Crocs",
      size: ["10", "11", "12", "13", "1"],
      color: ["red", "blue", "green"],
      rating: 4.3,
      reviews: [
        {
          user: "Sophia Johnson",
          rating: 4,
          text: "So easy for my toddler to put on!",
        },
      ],
    },
    {
      id: 3,
      name: "Rain Boots",
      description: "Bright and fun rain boots for wet weather.",
      price: 39.99,
      image: "https://m.media-amazon.com/images/I/71CFhxkN43L._AC_UY1000_.jpg",
      category: "Casual",
      brand: "Hunter",
      size: ["10", "11", "12", "13", "1"],
      color: ["yellow", "blue", "pink"],
      rating: 4.5,
      reviews: [
        {
          user: "Liam Brown",
          rating: 5,
          text: "Keeps feet dry and they look cool!",
        },
      ],
    },
    {
      id: 4,
      name: "Canvas Sneakers",
      description: "Classic canvas sneakers perfect for everyday wear.",
      price: 29.99,
      image: "https://m.media-amazon.com/images/I/71MsY9uZU5L._AC_UY1000_.jpg",
      category: "Casual",
      brand: "Converse",
      size: ["10", "11", "12", "13", "1", "2"],
      color: ["white", "black", "red"],
      rating: 4.4,
      reviews: [
        {
          user: "Ava Wilson",
          rating: 4,
          text: "Stylish and comfortable for school.",
        },
      ],
    },
    {
      id: 5,
      name: "Boots",
      description: "Warm and cozy boots for colder weather.",
      price: 59.99,
      image:
        "https://5.imimg.com/data5/EE/YY/MY-40683399/kids-boot-500x500.jpg",
      category: "Casual",
      brand: "Ugg",
      size: ["10", "11", "12", "13", "1"],
      color: ["brown", "black", "gray"],
      rating: 4.7,
      reviews: [
        { user: "Mia Martinez", rating: 5, text: "Perfect for snowy days!" },
      ],
    },
    {
      id: 6,
      name: "Slip-On Shoes",
      description: "Convenient slip-on shoes for easy wear.",
      price: 39.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6qZYppnRo6mN_0hB3oTMcG7cue1O_GSFwMA&s",
      category: "Casual",
      brand: "Vans",
      size: ["10", "11", "12", "13", "1"],
      color: ["black", "blue", "red"],
      rating: 4.2,
      reviews: [
        { user: "Oliver Garcia", rating: 4, text: "Great for quick errands!" },
      ],
    },
    {
      id: 7,
      name: "Dress Shoes",
      description: "Stylish dress shoes for special occasions.",
      price: 54.99,
      image:
        "https://images-cdn.ubuy.co.in/635282cb4cd07720494750e4-dadawen-boy-39-s-girl-39-s-classic.jpg",
      category: "Formal",
      brand: "Johnston & Murphy",
      size: ["10", "11", "12", "13", "1"],
      color: ["black", "brown"],
      rating: 4.6,
      reviews: [
        { user: "Ella Davis", rating: 5, text: "Perfect for family events!" },
      ],
    },
    {
      id: 8,
      name: "Water Shoes",
      description:
        "Ideal for beach or pool days, these water shoes are quick-drying and comfortable.",
      price: 24.99,
      image: "https://m.media-amazon.com/images/I/81x7FBswwUL.jpg",
      category: "Casual",
      brand: "Speedo",
      size: ["10", "11", "12", "13", "1"],
      color: ["blue", "green", "pink"],
      rating: 4.4,
      reviews: [
        {
          user: "Lucas Thompson",
          rating: 4,
          text: "Great for the pool and beach!",
        },
      ],
    },
    {
      id: 9,
      name: "High-Top Sneakers",
      description: "Trendy high-top sneakers with extra ankle support.",
      price: 69.99,
      image:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/kids-shoe/x/a/h/3-307762-puma-original-imagt3zgsnz2hbuu.jpeg?q=90&crop=false",
      category: "Casual",
      brand: "Puma",
      size: ["10", "11", "12", "13", "1", "2"],
      color: ["black", "white", "gray"],
      rating: 4.5,
      reviews: [
        {
          user: "Charlotte Anderson",
          rating: 5,
          text: "My kid loves these for skating!",
        },
      ],
    },
    {
      id: 10,
      name: "Trail Shoes",
      description: "Durable trail shoes for outdoor adventures.",
      price: 64.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjWCD_8libTV34h0uUli3TX-ivMPSvufvyGw&s",
      category: "Outdoor",
      brand: "Merrell",
      size: ["10", "11", "12", "13", "1"],
      color: ["brown", "green", "blue"],
      rating: 4.6,
      reviews: [
        {
          user: "Benjamin Harris",
          rating: 5,
          text: "Great for hiking and outdoor play!",
        },
      ],
    },
  ];

  const [shoesData, setshoesData] = useState([]);

  useEffect(() => {
    setshoesData(kidsShoes);
  }, []);

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (value) => {
    // setSelectedValue(value);

    const getData = shoesData;
    setshoesData(kidsShoes);

    if (value == "<4.3") {
      const completed = kidsShoes.filter((e, i) => e.rating <= 4.3);
      setshoesData(completed);
    } else if (value == ">4.3") {
      const completed = kidsShoes.filter((e, i) => e.rating > 4.3);
      setshoesData(completed);
    }
  };

  const [searchingTrue, setsearchingTrue] = useState(false);

  const [find, setfind] = useState("");

  const Search = () => {
    const getData = shoesData;
    let b = getData.filter((e, i) => e.name.toLowerCase() == find);

    setshoesData(b);

    setsearchingTrue(!searchingTrue);
  };

  const closeData = () => {
    setfind("");
    setshoesData(kidsShoes);
    setsearchingTrue(!searchingTrue);
  };

  const [shoeSelect, setselectShoe] = useState(true);
  const [shoeSelect2, setselectShoe2] = useState(true);
  const [shoeSelect3, setselectShoe3] = useState(true);

  const findShoes = (value, e) => {
    const getdata = shoesData;

    if (e.target.checked == true) {
      const senddata = kidsShoes.filter((e, i) => e.brand === value);

      setshoesData(senddata);
    } else {
      e.target.checked = false;
      setshoesData(kidsShoes);
    }
  };

  const [shoePrice, setshoeprice] = useState("");

  const findPrice1 = (value, e) => {
    const getData = shoesData;

    if (e.target.checked == true) {
      const matchData = kidsShoes.filter((e, i) => e.price < value);
      setshoesData(matchData);
    } else {
      setshoesData(kidsShoes);
    }
    setselectShoe2(!shoeSelect2);
  };

  const findPrice3 = (value, e) => {
    console.log(value);

    const getData = shoesData;

    if (e.target.checked == true) {
      const matchData = kidsShoes.filter((e, i) => e.price > value);
      setshoesData(matchData);
    } else {
      setshoesData(kidsShoes);
    }
    setselectShoe3(!shoeSelect2);
  };

  let AddData = (data) => {
    let locastorageData = JSON.parse(localStorage.getItem("CardData")) || [];
    // console.log(locastorageData);

    console.log(data);

    localStorage.setItem(
      "CardData",
      JSON.stringify([...locastorageData, data])
    );
  };

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const goAnotherPage = (Data) => {
    console.log(Data);

    dispatch(Addingdata(Data));

    localStorage.setItem("ShowInfo", JSON.stringify(Data));

    navigate("/showingInfo");
  };

  return (
    <>
      <Page1 />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "fantasy",
            fontSize: { xs: "15px", sm: "22px", md: "30px" },
            display: { xs: "none", sm: "none" },
          }}
        >
          Shoes
        </Typography>

        <Typography
          variant="h5"
          sx={{ fontFamily: "fantasy", textTransform: "capitalize" }}
        >
          {shoesData.length} Kids's shoes
        </Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
          <TextField
            variant="outlined"
            label="Search"
            value={find}
            onChange={(e) => setfind(e.target.value)}
          />
          {searchingTrue ? (
            <IconButton onClick={closeData}>
              <Close sx={{ fontSize: "30px" }} />
            </IconButton>
          ) : (
            <IconButton onClick={Search}>
              <SearchRounded sx={{ fontSize: "30px" }} />
            </IconButton>
          )}
        </Box>
      </Box>

      <Box sx={{ display: "flex", gap: 2, marginTop: 2 }}>
        <Box
          sx={{
            border: "2px solid black",
            display: { xs: "none", sm: "none", md: "flex" },
            alignContent: "center",
            flexDirection: "column",
            alignItems: "baseline",
            borderRadius: 2,
            height: { xs: "800px", md: "700px" },
          }}
        >
          <Typography variant="h5" sx={{ fontFamily: "monospace" }}>
            Filter
          </Typography>{" "}
          <Typography
            variant="h5"
            sx={{ fontFamily: "monospace", paddingLeft: 2, paddingTop: 3 }}
          >
            Select One
          </Typography>
          <Box
            sx={{
              display: "flex",
              padding: 1,
              flexDirection: "column",
              width: { xs: "60px", sm: "120px", md: "200px" },
            }}
          >
            <Typography variant="h6" sx={{ paddingTop: 1 }}>
              Brand
            </Typography>

            <Box>
              <Checkbox
                onChange={(e) => findShoes(e.target.name, e)}
                name="Vans"
              />
              Vans
            </Box>

            <Box>
              <Checkbox
                onChange={(e) => findShoes(e.target.name, e)}
                name="Hunter"
              />
              Hunter
            </Box>

            <Box>
              <Checkbox
                onChange={(e) => findShoes(e.target.name, e)}
                name="Nike"
              />
              Nike
            </Box>

            <Box>
              <Checkbox
                onChange={(e) => findShoes(e.target.name, e)}
                name="Crocs"
              />
              Crocs
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              padding: 1,
              flexDirection: "column",
              width: { xs: "60px", sm: "120px", md: "200px" },
            }}
          >
            <Typography variant="h6" sx={{ paddingTop: 1 }}>
              Price
            </Typography>

            <Box>
              <Checkbox
                onChange={(e) => findPrice1(e.target.name, e)}
                name={`${40}`}
              />
              Under 40$
            </Box>

            <Box>
              <Checkbox
                onChange={(e) => findPrice3(e.target.name, e)}
                name={`${40}`}
              />
              40$ and above
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              padding: 1,
              paddingLeft: 2,
              flexDirection: "column",
              width: { xs: "60px", sm: "120px", md: "200px" },
            }}
          >
            <Typography variant="h6" sx={{ paddingTop: 1 }}>
              Rating
            </Typography>

            <RadioGroup name="rating">
              <FormControlLabel
                value={"<4.3"}
                onChange={(e) => handleChange(e.target.value)}
                control={<Radio />}
                label="Below 4.3"
              />
              <FormControlLabel
                value={">4.3"}
                onChange={(e) => handleChange(e.target.value)}
                control={<Radio />}
                label="Above 4.3"
              />
            </RadioGroup>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 2,
            alignItems: "center",
            alignContent: "center",
          }}
        >
          {shoesData.map((e, i) => {
            return (
              <Card sx={{ maxWidth: "300px" }} key={i}>
                <CardActionArea onClick={() => goAnotherPage(kidsShoes[i])}>
                  <CardMedia
                    component="img"
                    height="240"
                    sx={{ objectFit: "contain" }}
                    image={e.image}
                    alt="image not avaliable"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {e.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {e.description}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.primary"
                      sx={{ fontSize: "20px" }}
                    >
                      {e.price}$
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        fontSize: "20px",
                      }}
                    >
                      {e.rating}{" "}
                      <StarBorder sx={{ color: "orange", fontSize: "20px" }} />
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    onClick={() => AddData(shoesData[i])}
                  >
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </Box>
      </Box>
    </>
  );
}
