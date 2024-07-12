import {
  FieldValue,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  arrayUnion
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";
import { Description, Favorite, FavoriteBorder } from "@mui/icons-material";
import { Button } from "@mui/material";
// import { arrayUnion } from "firebase/firestore/lite";

export default function ViewPost() {
  const [post, setpost] = useState([]);
  const [users, setusers] = useState([]);

  const [clicked,setclicked]=useState(false);

  const [comment,setcomment]=useState('');

  useEffect(() => {
    fetchPostdata();
    FetchUsers();
  }, []);

  const FetchUsers = async () => {
    const QuerySnapShot = await getDocs(collection(db, "Student"));
    const users = {};
    console.log(QuerySnapShot);
    QuerySnapShot.forEach((doc) => {
      const record = doc.data();
      console.log("record====", record);
      console.log("------>doc id", doc.id);
      users[doc.id] = record.name;
      // console.log(e.id);
    });
    // it will work on key value
    setusers(users);
  };

  const timeAgo = (timestamp) => {
    const now = Date.now();
    const seconds = Math.floor((now - timestamp) / 1000);

    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
      return `${interval} years ago`;
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return `${interval} months ago`;
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return `${interval} days ago`;
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return `${interval} hours ago`;
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return `${interval} minutes ago`;
    }
    return `${Math.floor(seconds)} seconds ago`;
  };

  const fetchPostdata = async () => {
    const QuerySnapShot = await getDocs(collection(db, "Post"));

    const fetchpost = [];

    QuerySnapShot.forEach((doc) => {
      const record = doc.data();
      console.log("records", record);

      fetchpost.push({
        id: doc.id,
        title: record.title,
        description: record.description,
        post: record.post,
        likes: record.likes || [],
        userId: record.userId,
        time: timeAgo(record.time),
        comments:record.comments||[]
      });

      // console.log(record);
    });


    setpost(fetchpost);
  };

  const handleLike = async (postid) => {
    console.log(postid);
    const specificPost = await getDoc(doc(db, "Post", postid));

    const postDataLikeList = (await specificPost.data().likes) || [];

    console.log("======>post data", postDataLikeList);

    const user = auth.currentUser;

    if (postDataLikeList.includes(user.uid)) return;

    console.log("adding list");

    await updateDoc(doc(db, "Post", postid), {
      likes: [...postDataLikeList, user.uid],
    });

    const updatePost = post.map((post) =>
      post.id == postid ? { ...post, likes: [...post.likes, user.uid] } : post
    );

    setpost(updatePost);

    setclicked(!clicked)

  };

  const handleUnlike=async(postid)=>
    {
      const specificPost=await getDoc(doc(db,'Post',postid));
      console.log(specificPost.id);
      const specificLike= await specificPost.data().likes;
      const user=auth.currentUser;

    const filterValue = await specificLike.filter((item)=>item!==user.uid);

    console.log(filterValue);

      await updateDoc(doc(db,'Post',postid),
      {
        likes:filterValue
      })

      const updatePost = post.map((post) =>
        post.id == postid ? { ...post, likes: [post.likes] } : post
      );
  
      setpost(updatePost);
    setclicked(!clicked)


    }

    const handleComment=async(postid)=>
      { 
        console.log('post id : ',postid);
        const user=auth.currentUser;
        console.log('Current User Id : ',user.uid);

        const newCommentObj={
          text:comment,
          userId:user.uid,
          time:Date.now()
        }

        await updateDoc(doc(db,'Post',postid),
        {
          'comments':arrayUnion(newCommentObj)
        })
        setcomment("");

        const updateCommentPost= await post.map((post)=>post.id===postid ? {...post,'comments':[...post.comments,newCommentObj]} :post )
        setpost(updateCommentPost)

        console.log('New post : ',post);

        console.log(updateCommentPost);

      }

  return (
    <>
      <h2>View Post</h2>

      {post.map((singlepost, index) => {
        return (
          <div key={index}>
            <h2>{singlepost.title}</h2>
            <h3>posted by {users[singlepost.userId]}</h3>
            <p>{singlepost.description}</p>
            <img src={singlepost.post} width={"50px"} height={"50px"} alt="" />
            <h4>{singlepost.time}</h4>
            <br />

            {singlepost.likes.length}
          {
            clicked
            ?
            <Button
              variant="outlined"
              onClick={() => handleLike(singlepost.id)}
            >
              Like <FavoriteBorder  />
            </Button>
            :
            <Button variant="outlined" onClick={()=>handleUnlike(singlepost.id)}> <Favorite/> Dislike</Button>

          }

          <br />

          <h3>comment sections</h3>
          <input type="text"  onChange={(e)=>setcomment(e.target.value)}  placeholder="type your comment" />
          <button onClick={()=>handleComment(singlepost.id)}>Add Comment</button>

              <h5>All Comments</h5>

              <h2 style={{color:'red'}}>{
                // singlepost.comments[0].userId
              }
              </h2>

              {singlepost.comments?.length >0 ? singlepost.comments.map((comment,index)=>
                {
                  return <div key={index}>
                    <p>posted by :{users[comment.userId]} = {comment.text} AT = {timeAgo(comment.time)} </p>
                  </div>
                }) : <p>Commments Not Found</p>}

          </div>
        );
      })}
    </>
  );
}
