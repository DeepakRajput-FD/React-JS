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

export default function MenShoes() {
  



  const menShoes = [
    {
      id: 1,
      name: "Leather Loafers",
      description: "Classic leather loafers for a polished look.",
      price: 99.99,
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/4/DG/WC/KO/8852934/loafers-shoes.JPG",
      category: "Formal",
      brand: "Acme Shoes",
      size: ["7", "8", "9", "10"],
      color: ["brown", "black"],
      rating: 4.5,
      reviews: [
        { user: "John Doe", rating: 5, text: "Great shoes!" },
        { user: "Jane Smith", rating: 4, text: "Comfortable." },
      ],
    },
    {
      id: 2,
      name: "Sneakers",
      description: "Comfortable and stylish sneakers for everyday wear.",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
      category: "Casual",
      brand: "Nike",
      size: ["7", "8", "9", "10", "11"],
      color: ["white", "black", "blue"],
      rating: 4.2,
      reviews: [{ user: "Alex Brown", rating: 4, text: "Nice shoes!" }],
    },
    {
      id: 3,
      name: "Oxford Shoes",
      description: "Formal oxford shoes for business attire.",
      price: 129.99,
      image:
        "https://www.hatsoffaccessories.com/wp-content/uploads/2020/05/694A9327-final-m.jpg",
      category: "Formal",
      brand: "Clarks",
      size: ["7.5", "8.5", "9.5", "10.5"],
      color: ["black", "brown"],
      rating: 4.8,
      reviews: [{ user: "Emily Johnson", rating: 5, text: "Elegant shoes!" }],
    },
    {
      id: 4,
      name: "Boots",
      description: "Warm and durable winter boots.",
      price: 149.99,
      image:
        "https://cdn.anscommerce.com/image/tr:e-sharpen-01,h-822,w-940,cm-pad_resize/data/ruosh/10012024/1221437070_11.jpg",
      category: "Casual",
      brand: "Timberland",
      size: ["7", "8", "9", "10"],
      color: ["brown", "black"],
      rating: 4.3,
      reviews: [{ user: "Michael Davis", rating: 4, text: "Keeps feet warm." }],
    },
    {
      id: 5,
      name: "Sandals",
      description: "Comfortable sandals for summer.",
      price: 39.99,
      image:
        "https://rukminim2.flixcart.com/image/850/1000/kqpj4i80/slipper-flip-flop/i/t/w/12-4127920-7854-havaianas-white-original-imag4nva68cpqavc.jpeg?q=90&crop=false",
      category: "Casual",
      brand: "Havaianas",
      size: ["8", "9", "10", "11"],
      color: ["black", "blue", "brown"],
      rating: 4.7,
      reviews: [
        { user: "Olivia Carter", rating: 5, text: "Perfect for summer!" },
      ],
    },
    {
      id: 6,
      name: "Running Shoes",
      description: "Lightweight running shoes for athletes.",
      price: 89.99,
      image:
        "https://assets.ajio.com/medias/sys_master/root/20230906/iWOA/64f8eb0dddf7791519bb7784/-473Wx593H-469496363-blue-MODEL.jpg",
      category: "Athletic",
      brand: "Adidas",
      size: ["7", "8", "9", "10", "11"],
      color: ["black", "blue", "red"],
      rating: 4.4,
      reviews: [
        { user: "William Miller", rating: 4, text: "Comfortable for running." },
      ],
    },
    {
      id: 7,
      name: "Dress Shoes",
      description: "Formal dress shoes for special occasions.",
      price: 199.99,
      image:
        "https://n.nordstrommedia.com/id/sr3/4cd163cc-ed03-4eef-ac42-8ce0a4e5dc92.jpeg?h=365&w=240&dpr=2",
      category: "Formal",
      brand: "Allen Edmonds",
      size: ["7.5", "8.5", "9.5", "10.5"],
      color: ["black", "brown"],
      rating: 4.6,
      reviews: [
        { user: "Sophia Taylor", rating: 5, text: "Elegant and stylish." },
      ],
    },
    {
      id: 8,
      name: "Slip-on Sneakers",
      description: "Casual slip-on sneakers for easy wear.",
      price: 69.99,
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/9/340892982/UJ/ND/GI/187501904/vans-shoes-500x500.jpg",
      category: "Casual",
      brand: "Vans",
      size: ["7", "8", "9", "10"],
      color: ["black", "white", "grey"],
      rating: 4.2,
      reviews: [
        { user: "Ethan Wilson", rating: 4, text: "Comfortable and stylish." },
      ],
    },
    {
      id: 9,
      name: "Hiking Boots",
      description: "Durable hiking boots for outdoor adventures.",
      price: 129.99,
      image:
        "https://images-cdn.ubuy.ae/648631e0be4e8f294763b580-merrell-accentor-3-sport-gtx-men-39-s.jpg",
      category: "Outdoor",
      brand: "Merrell",
      size: ["7", "8", "9", "10", "11"],
      color: ["brown", "black", "grey"],
      rating: 4.8,
      reviews: [{ user: "Ava Anderson", rating: 5, text: "Great for hiking!" }],
    },
    {
      id: 10,
      name: "Boat Shoes",
      description: "Casual boat shoes for summer.",
      price: 79.99,
      image:
        "https://images-cdn.ubuy.co.in/634d19205cf80542d9699812-sperry-men-39-s-authentic-original.jpg",
      category: "Casual",
      brand: "Sperry",
      size: ["7", "8", "9", "10"],
      color: ["brown", "white", "blue"],
      rating: 4.7,
      reviews: [
        { user: "Benjamin Thomas", rating: 4, text: "Perfect for summer!" },
      ],
    },
  ];

  const [shoesData, setshoesData] = useState([]);

  useEffect(() => {
    setshoesData(menShoes);
  }, []);

  const handleChange = (value) => {
    // setSelectedValue(value);

    const getData = shoesData;
    setshoesData(menShoes);

    if (value == "<4.2") {
      const completed = menShoes.filter((e, i) => e.rating <= 4.2);
      setshoesData(completed);
    } else if (value == ">4.2") {
      const completed = menShoes.filter((e, i) => e.rating > 4.2);
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
    setshoesData(menShoes);
    setsearchingTrue(!searchingTrue);
  };

  const [shoeSelect, setselectShoe] = useState(true);
  const [shoeSelect2, setselectShoe2] = useState(true);
  const [shoeSelect3, setselectShoe3] = useState(true);

  const findShoes = (value, e) => {
    const getdata = shoesData;

    if (e.target.checked == true) {
      const senddata = menShoes.filter((e, i) => e.brand === value);

      setshoesData(senddata);
    } else {
      e.target.checked = false;
      setshoesData(menShoes);
    }
  };

  const findPrice1 = (value, e) => {
    const getData = shoesData;

    if (e.target.checked == true) {
      const matchData = menShoes.filter((e, i) => e.price < value);
      setshoesData(matchData);
    } else {
      setshoesData(menShoes);
    }
    setselectShoe2(!shoeSelect2);
  };

  const findPrice2 = (value, e) => {
    const getData = shoesData;

    if (shoeSelect2 == true) {
      const matchData = menShoes.filter(
        (e, i) => e.price > value && e.price <= 150
      );
      setshoesData(matchData);
    } else {
      setshoesData(menShoes);
    }
    setselectShoe2(!shoeSelect2);
  };

  const findPrice3 = (value, e) => {
    console.log(value);

    const getData = shoesData;

    if (e.target.checked == true) {
      const matchData = menShoes.filter((e, i) => e.price > value);
      setshoesData(matchData);
    } else {
      setshoesData(menShoes);
    }
    setselectShoe3(!shoeSelect2);
  };

  let AddData = (data) => {
    let locastorageData = JSON.parse(localStorage.getItem("CardData")) || [];
    // console.log(locastorageData);

    localStorage.setItem("CardData",JSON.stringify([...locastorageData, data]));
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
          {shoesData.length} men's shoes
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
                name="Acme Shoes"
              />
              Acme Shoes
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
                name="Timberland"
              />
              Timberland
            </Box>

            <Box>
              <Checkbox
                onChange={(e) => findShoes(e.target.name, e)}
                name="Adidas"
              />
              Adidas
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
              <Card sx={{ maxWidth: "345px" }} key={i}>
                <CardActionArea onClick={() => goAnotherPage(menShoes[i])}>
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
