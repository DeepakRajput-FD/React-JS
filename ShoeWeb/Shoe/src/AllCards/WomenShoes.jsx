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
import { useDispatch } from "react-redux";
import { Addingdata } from "../../public/Redux/Slice1";
import { useLocation, useNavigate } from "react-router-dom";

export default function WowomensShoes() {


  const womensShoes = [
    {
      id: 1,
      name: "Oxfords",
      description: "Classic and professional oxfords for women.",
      price: 129.99,
      image: "https://m.media-amazon.com/images/I/71-Pwh8SxaL._AC_UY1000_.jpg",
      category: "Formal",
      brand: "Cole Haan",
      size: ["5", "5.5", "6", "6.5", "7", "7.5", "8"],
      color: ["black", "brown"],
      rating: 4.7,
      reviews: [
        { user: "Olivia Carter", rating: 5, text: "Perfect for work!" },
      ],
    },
    {
      id: 2,
      name: "Ballet Flats",
      description: "Elegant and comfortable ballet flats for everyday wear.",
      price: 69.99,
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/3/292142355/WY/IU/VP/182365761/81uuuc5r6rs-ac-ul1500-.jpg",
      category: "Casual",
      brand: "Repetto",
      size: ["5", "5.5", "6", "6.5", "7", "7.5", "8"],
      color: ["black", "pink", "nude"],
      rating: 4.5,
      reviews: [{ user: "Emily Brown", rating: 4, text: "So comfortable!" }],
    },
    {
      id: 3,
      name: "Over-the-Knee Boots",
      description: "Stylish and sexy over-the-knee boots.",
      price: 199.99,
      image:
        "https://teakwoodleathers.com/cdn/shop/products/T_SH_TW_LB01_BR37_1_1080x.jpg?v=1669031252",
      category: "Casual",
      brand: "Stuart Weitzman",
      size: ["5", "5.5", "6", "6.5", "7"],
      color: ["black", "brown", "red"],
      rating: 4.9,
      reviews: [{ user: "Sarah Jones", rating: 5, text: "Love these boots!" }],
    },
    {
      id: 4,
      name: "Mules",
      description: "Trendy and versatile mules for any occasion.",
      price: 89.99,
      image: "https://m.media-amazon.com/images/I/61b4MOeyPbL._AC_UY1000_.jpg",
      category: "Casual",
      brand: "Zara",
      size: ["5", "5.5", "6", "6.5", "7"],
      color: ["black", "white", "gold"],
      rating: 4.3,
      reviews: [
        { user: "Lily Smith", rating: 4, text: "So comfortable and stylish!" },
      ],
    },
    {
      id: 5,
      name: "Espadrilles",
      description: "Casual and breezy espadrilles for summer.",
      price: 59.99,
      image:
        "https://assets.ajio.com/medias/sys_master/root/h82/he2/17035467685918/-473Wx593H-460528194-black-MODEL.jpg",
      category: "Casual",
      brand: "Castaner",
      size: ["5", "5.5", "6", "6.5", "7", "7.5", "8"],
      color: ["white", "navy", "red"],
      rating: 4.2,
      reviews: [
        { user: "Emily Brown", rating: 4, text: "Perfect for summer!" },
      ],
    },
    {
      id: 6,
      name: "Clogs",
      description: "Comfortable and stylish clogs for everyday wear.",
      price: 89.99,
      image: "https://m.media-amazon.com/images/I/71zPgz+m5PL._AC_UY1000_.jpg",
      category: "Casual",
      brand: "Crocs",
      size: ["5", "5.5", "6", "6.5", "7", "7.5", "8"],
      color: ["black", "white", "pink"],
      rating: 4.1,
      reviews: [{ user: "Olivia Carter", rating: 4, text: "So comfy!" }],
    },
    {
      id: 7,
      name: "Mary Janes",
      description: "Classic and feminine Mary Janes for a timeless look.",
      price: 79.99,
      image:
        "https://images-cdn.ubuy.co.in/633ffbc5a55a8a507657943e-womens-block-chunky-heel-mary-janes.jpg",
      category: "Casual",
      brand: "Clarks",
      size: ["5", "5.5", "6", "6.5", "7", "7.5", "8"],
      color: ["black", "brown", "red"],
      rating: 4.3,
      reviews: [
        { user: "Sarah Jones", rating: 4, text: "Love the retro style!" },
      ],
    },
    {
      id: 8,
      name: "Platform Sneakers",
      description: "Trendy and edgy platform sneakers for a bold look.",
      price: 99.99,
      image:
        "https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/w_403,c_limit/95bbb321-f170-408c-b5d6-256c4e8e7875/the-best-nike-platform-sneakers.jpg",
      category: "Casual",
      brand: "Stella McCartney",
      size: ["5", "5.5", "6", "6.5", "7", "7.5", "8"],
      color: ["white", "black", "silver"],
      rating: 4.6,
      reviews: [{ user: "Lily Smith", rating: 5, text: "So stylish!" }],
    },
    {
      id: 9,
      name: "Cowboy Boots",
      description: "Western-inspired cowboy boots for a unique look.",
      price: 149.99,
      image:
        "https://images-cdn.ubuy.co.in/6559b61b94e6b026df794de4-ymiytan-cowboy-boots-for-women-pull-on.jpg",
      category: "Casual",
      brand: "Stuart Weitzman",
      size: ["5", "5.5", "6", "6.5", "7"],
      color: ["brown", "black"],
      rating: 4.5,
      reviews: [
        { user: "Ava Anderson", rating: 4, text: "Love the western vibe!" },
      ],
    },
    {
      id: 10,
      name: "Gladiator Sandals",
      description: "Summery and bohemian gladiator sandals.",
      price: 69.99,
      image:
        "https://parmarboothouse.com/StoreImages/extralarge/1573LC-12CAMEL.jpg",
      category: "Casual",
      brand: "Zara",
      size: ["5", "5.5", "6", "6.5", "7"],
      color: ["brown", "gold", "silver"],
      rating: 4.2,
      reviews: [
        { user: "Emily Brown", rating: 4, text: "Perfect for beach days!" },
      ],
    },
    {
      id: 11,
      name: "Jelly Shoes",
      description: "Nostalgic and fun jelly shoes for summer.",
      price: 39.99,
      image: "https://m.media-amazon.com/images/I/81DRiaigg9L._AC_UY1000_.jpg",
      category: "Casual",
      brand: "Melissa",
      size: ["5", "5.5", "6", "6.5", "7"],
      color: ["pink", "blue", "clear"],
      rating: 4.1,
      reviews: [{ user: "Lily Smith", rating: 4, text: "So cute and comfy!" }],
    },
    {
      id: 12,
      name: "Rain Boots",
      description: "Practical and stylish rain boots for rainy days.",
      price: 89.99,
      image: "https://m.media-amazon.com/images/I/71ATTrPAY0L._AC_UY1000_.jpg",
      category: "Casual",
      brand: "Hunter",
      size: ["5", "5.5", "6", "6.5", "7"],
      color: ["red", "black", "green"],
      rating: 4.3,
      reviews: [
        { user: "Olivia Carter", rating: 4, text: "Keeps my feet dry!" },
      ],
    },
    {
      id: 13,
      name: "Slides",
      description: "Relaxed and casual slides for everyday wear.",
      price: 49.99,
      image:
        "https://dxkvlfvncvqr8.cloudfront.net/media/product-image/PUL-105-BKBR-1.jpg",
      category: "Casual",
      brand: "Adidas",
      size: ["5", "5.5", "6", "6.5", "7"],
      color: ["white", "black", "pink"],
      rating: 4.2,
      reviews: [
        { user: "Sarah Jones", rating: 4, text: "So comfy for lounging!" },
      ],
    },
  ];

  const [shoesData, setshoesData] = useState([]);

  useEffect(() => {
    setshoesData(womensShoes);
  }, []);

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (value) => {
    // setSelectedValue(value);

    const getData = shoesData;
    setshoesData(womensShoes);

    if (value == "<4.2") {
      const completed = womensShoes.filter((e, i) => e.rating <= 4.2);
      setshoesData(completed);
    } else if (value == ">4.2") {
      const completed = womensShoes.filter((e, i) => e.rating > 4.2);
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
    setshoesData(womensShoes);
    setsearchingTrue(!searchingTrue);
  };

  const [shoeSelect, setselectShoe] = useState(true);
  const [shoeSelect2, setselectShoe2] = useState(true);
  const [shoeSelect3, setselectShoe3] = useState(true);

  const findShoes = (value, e) => {
    const getdata = shoesData;

    if (e.target.checked == true) {
      const senddata = womensShoes.filter((e, i) => e.brand === value);

      setshoesData(senddata);
    } else {
      e.target.checked = false;
      setshoesData(womensShoes);
    }
  };

  const [shoePrice, setshoeprice] = useState("");

  const findPrice1 = (value, e) => {
    const getData = shoesData;

    if (e.target.checked == true) {
      const matchData = womensShoes.filter((e, i) => e.price < value);
      setshoesData(matchData);
    } else {
      setshoesData(womensShoes);
    }
    setselectShoe2(!shoeSelect2);
  };

  const findPrice2 = (value, e) => {
    const getData = shoesData;

    if (shoeSelect2 == true) {
      const matchData = womensShoes.filter(
        (e, i) => e.price > value && e.price <= 150
      );
      setshoesData(matchData);
    } else {
      setshoesData(womensShoes);
    }
    setselectShoe2(!shoeSelect2);
  };

  const findPrice3 = (value, e) => {
    console.log(value);

    const getData = shoesData;

    if (e.target.checked == true) {
      const matchData = womensShoes.filter((e, i) => e.price > value);
      setshoesData(matchData);
    } else {
      setshoesData(womensShoes);
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

    localStorage.setItem('ShowInfo',JSON.stringify(Data))

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
          flexWrap: { xs: "wrap", sm: "wrap" },
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontFamily: "fantasy", textTransform: "capitalize" }}
        >
          {shoesData.length} Women's shoes
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
            height: "700px",
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
              width: { xs: "80px", sm: "120px", md: "200px" },
            }}
          >
            <Typography variant="h6" sx={{ paddingTop: 1 }}>
              Brand
            </Typography>

            <Box>
              <Checkbox
                onChange={(e) => findShoes(e.target.name, e)}
                name="Repetto"
              />
              Repetto
            </Box>

            <Box>
              <Checkbox
                onChange={(e) => findShoes(e.target.name, e)}
                name="Zara"
              />
              Zara
            </Box>

            <Box>
              <Checkbox
                onChange={(e) => findShoes(e.target.name, e)}
                name="Castaner"
              />
              Castaner
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
              width: { xs: "80px", sm: "120px", md: "200px" },
            }}
          >
            <Typography variant="h6" sx={{ paddingTop: 1 }}>
              Price
            </Typography>

            <Box>
              <Checkbox
                onChange={(e) => findPrice1(e.target.name, e)}
                name={`${100}`}
              />
              Under 100$
            </Box>

            <Box>
              <Checkbox
                onChange={(e) => findPrice2(e.target.name, e)}
                name={`${100}`}
              />
              100 $ to 150$
            </Box>

            <Box>
              <Checkbox
                onChange={(e) => findPrice3(e.target.name, e)}
                name={`${150}`}
              />
              150$ and above
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              padding: 1,
              paddingLeft: 2,
              flexDirection: "column",
              width: { xs: "80px", sm: "120px", md: "200px" },
            }}
          >
            <Typography variant="h6" sx={{ paddingTop: 1 }}>
              Rating
            </Typography>

            <RadioGroup name="rating">
              <FormControlLabel
                value={"<4.2"}
                onChange={(e) => handleChange(e.target.value)}
                control={<Radio />}
                label="Below 4.2"
              />
              <FormControlLabel
                value={">4.2"}
                onChange={(e) => handleChange(e.target.value)}
                control={<Radio />}
                label="Above 4.2"
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
          }}
        >
          {shoesData.map((e, i) => {
            return (
              <Card sx={{ maxWidth: "300px" }} key={i}>
                <CardActionArea onClick={() => goAnotherPage(womensShoes[i])} >
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
