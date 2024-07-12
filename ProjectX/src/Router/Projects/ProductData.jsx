import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductData() {
  let [record, setrecord] = useState([]);

  let param = useParams();

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    const respond = await axios.get(
      `https://fakestoreapi.com/products/${param.id}`
    );
    console.log(respond.data);
    let obj = {
      title: respond.data.title,
      price: respond.data.price,
      image: respond.data.image,
      description: respond.data.description,
      category: respond.data.category,
      rate: respond.data.rating.rate,
      count: respond.data.rating.count,
    };
    setrecord([obj]);
  };
  return (
    <div>
      {record.map((e, i) => {

        return (
          <div className="card2 " key={i}>
            <div id="image2">
              <img src={e.image} className="card-img-top" alt="image" />
            </div>
            <div className="card-body">
              <h5 className="card-title">{e.title}</h5>
              <h5 style={{ color: "red" }}>{e.price + "$"}</h5>
              <h6>{e.category}</h6>
              <p>{e.description}</p>
              <h5>{e.rate}</h5>
              <p>{e.count} </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
