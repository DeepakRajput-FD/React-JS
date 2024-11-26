import axios from "axios";
import React, { useEffect, useState } from "react";

export default function FetchToken() {
  const [Data, SetData] = useState([]);

  const [title,settitle]=useState('');
  const [body,setBody]=useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try
    {

      const GetData = await axios.get(
        " https://jsonplaceholder.typicode.com/posts"
      );
      const Data2 = await GetData.data;
      SetData(Data2);
    }
    catch(error)
    {
      console.log(error);
      
    }
    // console.log(Data2);
  };

  let obj={
    id:Data.length+1,
    title:title,
    body:body
  }

  
  
  const AddData=async()=>{
    console.log(obj);
    try
    {
      const PostData=await axios.post('https://jsonplaceholder.typicode.com/posts',obj);
      console.log(PostData);
    }
    catch(error)
    {
      console.log(error);
    }
    
  }

  return (
    <>
      <div style={{ padding: "10px", display: "flex", gap: 2 }}>
        <input type="text" placeholder="Enter Title" onChange={(e)=>settitle(e.target.value.trim())} />
        <input type="text" placeholder="Enter Body" onChange={(e)=>setBody(e.target.value.trim())} />
        <button onClick={AddData}>Add</button>
      </div>

      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((e, i) => {
            return (
              <tr key={i}>
                <td>{e.id}</td>
                <td>{e.title}</td>
                <td>{e.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
