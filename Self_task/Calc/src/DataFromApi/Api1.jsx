import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Mycss.css";

export default function Api1() {
  let [data, setdata] = useState("");

  let cardsColor = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#809980",
    "#E6FF80",
    "#1AFF33",
    "#999933",
    "#FF3380",
    "#CCCC00",
    "#66E64D",
    "#4D80CC",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF",
  ];

  useEffect(() => {
    DataFromApi();
  }, []);

  let DataFromApi = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let AddData = await response.json();
    setdata(AddData);
  };

   let handleData=(i)=>
    {
        console.log(data[i]);
    }

  return (
    <div className="MyAllcards">      

      {data ? (
        data.map((e, i) => {
          
            return (
                
            <div key={i} className="mycard" style={{background:cardsColor[i]}} onClick={()=>handleData(i)} >
              <h2>{e.id}</h2>
              <h2>{e.name}</h2>
              <h2>{e.username}</h2>
              <h2>{e.address.street}</h2>
              <h2>{e.address.suite}</h2>
              <h2>{e.address.city}</h2>
              <h2>{e.address.zipcode}</h2>
            </div>



          );

        })
      ) : (
        <p>loading</p>
      )}
    </div>
  );
}
