import { Button } from '@mui/material';
import React, { useState } from 'react'
import { auth, db, storage } from '../firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';

export default function NewPost() {

    const [title,setitle]=useState("");
    const [description,setdescription]=useState('');
    const [imageLink,setImageLink]=useState('');
    
    const handleSubmit=async()=>
        {
            const user=auth.currentUser;
            const StorageRef= ref(storage,`post/${user.uid}/${Date.now()}`);
            await uploadBytes(StorageRef,imageLink);

            const downloadUrl=await getDownloadURL(StorageRef);

            await setDoc(doc(db,'Post',`${Date.now()}`),
            {
                title:title,
                description:description,
                post:downloadUrl,
                userId:user.uid,
                'time':Date.now()
            })

        }

    return (
    <>
    <h1>Add new post</h1>

    <input type="text" placeholder='Enter title : ' onChange={(e)=>setitle(e.target.value)} />
    <br />
    <textarea placeholder='Enter Description : ' onChange={(e)=>setdescription(e.target.value)}/ >
        <br />
    <input type="file"  onChange={(e)=>setImageLink(e.target.files[0])} />
        <br />
        <Button variant='contained' onClick={handleSubmit} >Submit</Button>

    </>
  )
}
