import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Add, Person, Visibility } from "@mui/icons-material";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, firestore, storage } from "../firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Box } from "@mui/material";
import Loader from "./Loader";
import NavBar from "./NavBar";
import ViewPost from "./ViewPost";
export default function UserDashBoard() {

  const [data,setdata]=useState('');

  const navigate=useNavigate();

  // for imf
  const [path,setpath]=useState();

  // for profile url
  const [profileUrl,setProfileUrl]=useState();

  useEffect(() =>
     {
      // it is the firebase event when change on firebase event
      // user is the current value which is inserted by user || it is give the current user value
      const sub=onAuthStateChanged(auth,(user)=>
        {
          if(user)
            {
              handleData(user)
            }

        })

     }, []);

  const handleData=async(user)=>
    {
      if (user)
         {
          const userdata= await getDoc(doc(firestore,'UserData',user.uid)) 
            console.log(userdata.data());
            setdata(userdata.data())
        }

    }

    let handleLogOut=async()=>
      {
          await signOut(auth);
          navigate('/',{replace:true})
      }

    const handleUpload=async()=>
      {
          const user=auth.currentUser;

          const storageRef= await ref(storage,`Pictures/${user.uid}`);
          await uploadBytes(storageRef,profileUrl);

          // for url
          const downloadUrl= await getDownloadURL(storageRef);

          await updateDoc(doc(firestore,'UserData',user.uid),
          {
            profileUrl:downloadUrl
          })

          setpath(downloadUrl);

      }

  return (

    data
    ?

    <Box sx={{display:'flex', justifyContent:'center',gap:'50px'}} >

      <Card
        sx={{
          maxWidth: 365,
          boxShadow:
            "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
            background:'white',
        backdropFilter:'blur(20px)',
        borderRadius:'20px',
          }}
      >

        <Typography variant="body"  sx={{padding:'10px',color:'black',textAlign:'center',fontFamily:'cursive'}}  component='h2' >
          MyProfile
        </Typography>

        <CardMedia
          component="img"
         
          sx={
            {
              height: 140,width:'200px',borderRadius:'20px' ,margin:'10px auto',objectFit:'contain'   
            }
          }

          image={path||data.profileUrl}
          alt="image"
        />

        <input type="file" style={{margin:'5px'}} onChange={(e)=>setProfileUrl(e.target.files[0])} />

        <Button onClick={handleUpload} variant="contained" sx={{color:'white',background:'#708F96',fontWeight:'600',margin:'5px'}} >Upload</Button>
     

        <CardContent>
          <Typography sx={{color:''}} gutterBottom variant="h5" >
          Player : User
          </Typography>

          <Typography  gutterBottom variant="h5" >
          {
            (data)
            ?
            'Welcome , '+data.name 
            :
            'Loading....'
            }
          </Typography>

          <Typography  gutterBottom variant="h6" >
          
         {
           (data)
           ?
           'Surname : '+data.lastname 
           :
           'Loading....'
           }
            
          </Typography>
         

          <Typography variant="body1" sx={{padding:1,color:'black'}} >
          {
            (data)
            ?
            'Email : '+data.email 
            :
            'Loading....'
          }
          </Typography>

          <Typography variant="body1" sx={{padding:1,color:'black'}} color="text.secondary">
          {
            (data)
            ?
            'Contact no : '+data.contact 
            :
            'Loading....'
          }
          </Typography>

          <Typography variant="body1" sx={{padding:1,color:'black'}} color="text.secondary">
          {
            (data)
            ?
            'Bio : '+data.bio 
            :
            'Loading....'
          }
          </Typography>

          <Typography variant="body1" sx={{padding:1,color:'black'}} color="text.secondary">
          {
            (data)
            ?
            'City : '+data.city 
            :
            'Loading....'
          }
          </Typography>

          <CardActions>

            <Button variant="contained" sx={{color:'white',background:'#708F96',fontWeight:600}} onClick={handleLogOut} >
              Log Out
            </Button>

            <Button variant="contained" sx={{color:'white',background:'#708F96',fontWeight:600}} onClick={()=>navigate(-1)} >
              Back to Page
            </Button>


          </CardActions>

        </CardContent>
       
      </Card>


    </Box>

          :
          <Loader/>

  );
}
