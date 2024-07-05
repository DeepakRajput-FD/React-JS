import { Button, Card, CardActions, TextField } from "@mui/material";
import React, { useState } from "react";
import { auth, firestore, storage } from "../firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function AddPost() {
  const [imageLink, setimageLink] = useState("");
  const [title, setitle] = useState("");
  const [description, setdescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const user = auth.currentUser;

    const storageRef = ref(storage, `Posts/${user.uid}/${Date.now()}`);
    await uploadBytes(storageRef, imageLink);

    const downloadUrl = await getDownloadURL(storageRef);

    await setDoc(doc(firestore, "Post", `${Date.now()}`), {
      post: downloadUrl,
      title: title,
      description: description,
      userId: user.uid,
      time:Date.now()
    });

    navigate(-1);
    console.log("Submitted");

  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 365,
          boxShadow:
            "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
          background: "white",
          backdropFilter: "blur(20px)",
          borderRadius: "20px",
        }}
      >
        <CardActions
          sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <TextField
            placeholder="Enter Title : "
            sx={{ fontWeight: 600 }}
            onChange={(e) => setitle(e.target.value)}
          />
          <TextField
            placeholder="Enter Description : "
            sx={{ fontWeight: 600 }}
            onChange={(e) => setdescription(e.target.value)}
          />
          <TextField
            type="file"
            sx={{ fontWeight: 600, width: "220px" }}
            onChange={(e) => setimageLink(e.target.files[0])}
          />

          <Button
            variant="contained"
            sx={{ color: "white", background: "#708F96", fontWeight: 600 }}
            onClick={handleSubmit}
          >
            Upload
          </Button>

          <Button
            variant="contained"
            sx={{ color: "white", background: "#708F96", fontWeight: 600 }}
            onClick={()=>navigate(-1)}
          >
            Back to Page
          </Button>
          
        </CardActions>
      </Card>
    </>
  );
}
