import { Height } from "@mui/icons-material";
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

export default function Card1() {
    const [shoes, setshoes] = useState([]);

    const whiteShoes = [
        {
            title: "Classic White Sneakers",
            price: 59.99,
            description:
                "Comfortable and stylish white sneakers perfect for everyday wear.",
            imageUrl:
                "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQf0swLY_wR9srb8wk5mBv5eTN7VvSnIPGkNeZtJifPtnEbhwWsQftSdQHeEMQo0GIG39kVgUsjXjM7C0NCdjk3lVOBMop9A-qthZWYF8AqEzLpQWF8zcpghw&usqp=CAE",
        },
        {
            title: "Sporty White Running Shoes",
            price: 79.99,
            description:
                "Durable running shoes with excellent grip and breathability.",
            imageUrl: "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019480223_437Wx649H_202309282213172.jpeg",
        },
        {
            title: "White Leather High-Tops",
            price: 89.99,
            description: "Premium leather high-top sneakers with a sleek design.",
            imageUrl: "https://www.romeroferrera.com/cdn/shop/products/shoepassion_58ms-02.jpg?v=1603442705&width=1445",
        },
        {
            title: "Minimalist White Trainers",
            price: 49.99,
            description: "Minimalist design for a clean and modern look.",
            imageUrl: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5382515642324a369d42af5e0092750f_9366/Court_Revival_Shoes_White_HP2602_01_standard.jpg",
        },
       
        
    ];

    useEffect(() => {
        setshoes(whiteShoes);
    }, []);

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    gap: 4,
                    width: "100%",
                    overflow: "scroll",
                    scrollbarWidth: "none",
                    alignItems:'center',
                    marginBottom:'20px',
                    flexWrap:{lg:'nowrap',md:'nowarp',sm:'wrap',xs:'wrap'}
                }}
            >
                {shoes.map((e, i) => {
                    return (
                        <Card sx={{ width: '345px',height:"420px",border:'1px solid black' }} key={i}>
                            <CardMedia
                                component="img"
                                alt="Image is not avaliable"
                                height="200"
                                image={e.imageUrl}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" >
                                    {e.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                {e.description}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{display:'flex',gap:2}} >
                           <Typography sx={{paddingLeft:'10px',fontSize:"20px",color:'black'}} >{Math.round(e.price*83.95)+'₹' }</Typography>
                            </CardActions>

                        </Card>
                    );
                })}
            </Box>
        </>
    );
}
