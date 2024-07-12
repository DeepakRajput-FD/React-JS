import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductDisplay() {

    const navigate=useNavigate('');

  const [productData, setProductData] = useState([]);

  const [data,setdata]=useState('');

  useEffect(() => {
    myfetchRecord();
  }, [data]);

  let myfetchRecord = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${data}`);
    console.log(response.data);
    setProductData(response.data);
  };

  if (productData.length==0)
     {
    <p>Loading</p>
  }

  let handleData=(e)=>
    {
      console.log('category/'+e.target.value);

      setdata('category/'+e.target.value)
    }

    let reverse=()=>
      {
        let arr2=[]
        console.log([productData].sort());

        for (let i = productData.length; i >= 0; i--)
           {
              console.log(productData[i]);
              arr2.push(productData[i])
              }
              console.log(arr2);
            setProductData([...arr2])
              }
 

  return (
    <>
        
        <h2>The Hub</h2>

        <button onClick={(e)=>reverse()}>old to new</button>

        <select onChange={(e)=>handleData(e)} >
            <option  >select category</option>
            <option value="electronics" >electronics</option>
            <option value="jewelery" >jewelery</option>
            <option value="men's clothing" >men's clothing</option>
            <option value="women's clothing" >women's clothing</option>
        </select>

        {data}

        <div className="Allcard">

            {productData.map((e, i) => {
                return <div className="card"  key={i}>
                    <div id="image">
              <img src={e.image} className="card-img-top" alt='image' />
                    </div>
              <div className="card-body">
                <h5 className="card-title">{e.title}</h5>
                <h5 style={{color:'red'}}>{e.price+'$'}</h5>
                <h6>{e.category}</h6>
                <button className="buttons" onClick={()=>navigate(`/display/${e.id}`)}  >View</button>
              </div>
            </div>
             
             })}

         
            </div>

    </>
  );
}


