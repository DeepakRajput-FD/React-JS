import { Firestore, doc, getDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { firestore, storage } from "../firebaseConfig";
import { Box, Button, Card, CardActions, CardMedia, TextField, Typography } from "@mui/material";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export default function UserEditPage() {
  // Use State

  const [name, setname] = useState("");
  const [lastname, setlastname] = useState("");
  const [profilePic, setProfilePic] = useState();
  const [email,setemail]=useState("");
  const navigate=useNavigate(""); 

  const { uid } = useParams();

  useEffect(() => {
    fetchData();
  }, [uid]);

  const fetchData = async () => {
    const userData = await getDoc(doc(firestore, "UserData", uid));
    console.log(userData.data());
    setname(userData.data().name);
    setlastname(userData.data().lastname)
    setemail(userData.data().email)
    setProfilePic(userData.data().profilePic);
  };

  const handleSubmit=async(e)=>
    {
        e.preventDefault();

        const storageRef=ref(storage,`Pictures/${uid}`);

        await uploadBytes(storageRef,profilePic);
        const downloadUrl=await getDownloadURL(storageRef);

        console.log(uid);
    
        console.log(profilePic);

        await updateDoc(doc(firestore,'UserData',uid),
        {
          name:name,
          lastname:lastname,
          profileUrl:downloadUrl  
        })
        

        console.log('hii');

        navigate('/AdminDashboard');

    }

  return (
    <>

    <Box sx={{background:'white',width:'30%',margin:'20px auto',borderRadius:'20px'}} >

    </Box>

    <Card
        sx={{
          width:'30%',
          boxShadow:
            "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
            background:'white',
            backdropFilter:'blur(20px)',
            borderRadius:'20px',
            margin:'0 auto'
          }}
          style={{display:'flex',flexDirection:'column',padding:'10px'}}
      >
          <TextField type="text" variant="outlined" value={name} onChange={(e)=>setname(e.target.value)} style={{margin:'10px'}} />
          <TextField type="text" variant="outlined" value={email} disabled style={{margin:'10px'}} />
          <TextField type="text" variant="outlined" value={lastname} onChange={(e)=>setlastname(e.target.value)} style={{margin:'10px'}} />
          <TextField type="file" variant="outlined" onChange={(e)=>setProfilePic(  e.target.files[0]  )} style={{margin:'10px'}} />
         

          <CardActions>

              <Button type="submit" variant="contained" sx={{color:'white',background:'#708F96',fontWeight:600}} onClick={(e)=>handleSubmit(e)} >Update</Button>
           

          </CardActions>

       
      </Card>

    </>
  );
}
