import React, { useEffect } from 'react'

export default function Api() {
 
   useEffect(()=>{
    
       FetchData()
       
    },[])
    
    const FetchData=async()=>{

        const response=await fetch('https://jsonplaceholder.typicode.com/posts');
        const response2=await response.json();
        console.log(response2);

        // for comment
        const comment=await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
        const commentresponse = await comment.json();
        console.log(commentresponse);

        // post
        const post=await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
        const postData=await post.json();
        console.log(postData);

        // it is easily fetch the data

    }

    return (
    <>
    </>
  )
}
