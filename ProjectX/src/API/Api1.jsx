import React, { useEffect, useState } from 'react'

export default function Api1() {
  
    let [data,setdata]=useState(null);

    useEffect(()=>
        {
            handleAllData();
        })

        let handleAllData=async()=>
            {
                let responsedata=await fetch('https://reqres.in/api/users?page=2');
                let secondData=await responsedata.json();
                setdata(secondData);
            }

    return (
    <div>
        {
            data ?
            data.data.map((e,i)=>
                {
                    return<div key={i}>
                    <img src={e.avatar} className="card-img-top" alt="..." />
                    <h2>{e.id}</h2>
                    <h2>{e.email}</h2>
                    <h2>{e.first_name}</h2>
                    <h2>{e.last_name}</h2>
                    </div> 
                })
                :
                <p>...Loading</p>
        }
    </div>
  )
}
