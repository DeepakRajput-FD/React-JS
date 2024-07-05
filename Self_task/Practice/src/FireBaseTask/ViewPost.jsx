import { collection, getDoc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { firestore } from '../firebaseConfig'
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography } from '@mui/material';
import Loader from './Loader';
import { ExpandMore, ExpandMoreOutlined, FavoriteOutlined, Share } from '@mui/icons-material';

export default function ViewPost() {

    // const [post,setpost]=useState("");
    // const [users,setusers]=useState([]);
 
    useEffect(()=>
        {
            FetchPost();
            UsersData();
        },[])

        // const FetchPost=async()=>
        //     {
        //         const QuerySnapShot=await getDocs(collection(firestore,'Post'));
        //         // console.log(QuerySnapShot);

        //         const fetchData=[];

        //         QuerySnapShot.forEach((doc)=>
        //             {
        //                 const record=doc.data();
        //                 console.log('record',record);

        //                 fetchData.push({
        //                     userId:record.userId,
        //                     description:record.description,
        //                     post:record.post,
        //                     title:record.title
        //                 })
        //             })

        //             setpost(fetchData);

        //     }

            // const UsersData=async()=>
            //   {
            //      const QuerySnapShot= await getDocs(collection(firestore,'UserData'));

            //      const users={};

            //      QuerySnapShot.forEach((doc)=>
            //       {
            //           const record=doc.data();

            //           users[doc.id]=record.name;

            //       })

            //       setusers(users)
            //       console.log(users);

            //   }
              

    return (
    <>

        {

            post
            ?
        <Box sx={{width:'50%',margin:'80px auto',display:'flex',gap:'20px',flexDirection:'column'}}>

        {
            post.map((SinglePost,index)=>
                {
                   return <Card sx={{ width:'100%' }}>
                   <CardHeader
                     avatar={
                       <Avatar sx={{ background: 'red' }} aria-label="recipe">
                         <img src={SinglePost.post} style={{objectFit:'contain'}} alt="" />
                       </Avatar>
                     }
                     action={
                       <IconButton aria-label="settings">
                         {/* <MoreVertIcon /> */}
                       </IconButton>
                     }
                     title={users[SinglePost.userId]}
                     subheader="September 14, 2016"
                   />
                   <CardMedia
                     component="img"
                     height="194"
                     image={SinglePost.post}
                     alt="Paella dish"
                   />
                   <CardContent>
                   <Typography variant="body1" sx={{color:'black'}} color="text.secondary">
                       {SinglePost.title}
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                       {SinglePost.description}
                     </Typography>
                   </CardContent>
                   <CardActions disableSpacing>
                     <IconButton aria-label="add to favorites">
                       <FavoriteOutlined />
                     </IconButton>
                     <IconButton aria-label="share">
                       <Share />
                     </IconButton>
                     <ExpandMore
                       
                       aria-label="show more"
                     >
                       <ExpandMoreOutlined />
                     </ExpandMore>
                   </CardActions>
                   
                 </Card>
        })

        }
        </Box>

        :
        <Loader/>
        }

    </>
  )
}
