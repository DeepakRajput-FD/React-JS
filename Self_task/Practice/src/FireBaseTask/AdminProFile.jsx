import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Input,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, firestore, storage } from "../firebaseConfig";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Loader from "./Loader";

export default function AdminProFile() {
  const [path, setpath] = useState();
  const [data, setdata] = useState("");
  const [profileUrl, setProfileUrl] = useState();

  //   image upload
  const handleUpload = async () => {
    const user = auth.currentUser;

    const storageRef = await ref(storage, `Pictures/${user.uid}`);
    await uploadBytes(storageRef, profileUrl);

    // for url
    const downloadUrl = await getDownloadURL(storageRef);

    await updateDoc(doc(firestore, "AdminData", user.uid), {
      profileUrl: downloadUrl,
    });
    

    setpath(downloadUrl);
  };

  useEffect(() => {
    // it is the firebase event when change on firebase event
    // user is the current value which is inserted by user || it is give the current user value
    const sub = onAuthStateChanged(auth, (user) => {
      if (user) {
        handleData(user);
      }
    });
  }, []);

  const handleData = async (user) => {
    if (user) {
      const userdata = await getDoc(doc(firestore, "AdminData", user.uid));
      console.log(userdata.data());
      setdata(userdata.data());
    }
  };


//   Use Navigate

  const navigate=useNavigate();

  return (
    <>

    {
      data
      ?
      
      <Card
        sx={{
          maxWidth: 365,
          margin: "20px auto",
          boxShadow:
            "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
            background:'white',
            backdropFilter: "blur(50px)",
          borderRadius:'20px',
        }}
      >
        <Typography
          variant="body"
          sx={{
            padding: "10px",
            color: "black",
            textAlign: "center",
            fontFamily: "cursive",
          }}
          component="h2"
        >
          MyProfile
        </Typography>

        <CardMedia
          component="img"
          sx={{
            height: 140,
            width: "200px",
            borderRadius: "20px",
            margin: "0 auto",
          }}
          image={path || data.profileUrl}
          alt="image"
        />

        <Input type="file" onChange={(e) => setProfileUrl(e.target.files[0])} sx={{padding:1,color:'black'}} />

        <Button onClick={handleUpload} variant="contained" sx={{background:"green",margin:'10px'}} >
          Upload
        </Button>

        <CardContent>

          <Typography gutterBottom variant="h5" sx={{color: "black"}}>
          {data ? "Welcome , " + data.name : "Loading...."}
          </Typography>

          <Typography gutterBottom variant="h5" sx={{color: "black"}}>
          {data ? "Surname : " + data.lastname : "Loading...."}
          </Typography>

          <Typography gutterBottom variant="h6" sx={{color: "black"}} >
            Role : Admin
          </Typography>

          <Typography
            variant="body2"
            sx={{ padding: 1,color: "black" }}>
                
            {data ? "Email : " + data.email : "Loading...."}
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "black",padding: 1 }}
            color="text.secondary"
          >
            {data ? "Contact No : " + data.contact : "Loading...."}
          </Typography>

          <Typography
            variant="body2"
            sx={{ padding: 1,color: "black" }}
            color="text.secondary"
          >
            {data ? "Bio : " + data.bio : "Loading...."}
          </Typography>

          <Typography
            variant="body2"
            sx={{ padding: 1,color: "black" }}
            color="text.secondary"
          >
            {data ? "City : " + data.city : "Loading...."}
          </Typography>

          <CardActions sx={{display:'flex',flexDirection:'column',gap:1}}>
            <Button variant="contained" sx={{background:'rgb(109 140 147)',fontWeight:600}} >Edit Info</Button>
            
            <Button variant="contained" sx={{background:'rgb(109 140 147)',fontWeight:600}} onClick={()=>navigate(-1)} >Back TO Page</Button>

          </CardActions>
        </CardContent>
      </Card>

          :
          <Loader/>

        }

    </>
  );
}
