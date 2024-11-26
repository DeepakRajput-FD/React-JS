import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "./Redux/Features/Slice1";

export default function Show1() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('hi');
    
    dispatch(FetchData());
  }, []);

  const {products,pending,error} = useSelector((state) => {
    return state.productData;
  });

  console.log(products);

  if (pending) return <h2>loading...</h2>

  if(error) return <h2>have some error</h2>

  return (
    <>
      <table border={1}>
        <thead>
          <tr>
            <th>title</th>
            <th>cateogry</th>
            <th>description</th>
            <th>image</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((e, i) => {
            return (
              <tr key={i}>
                <td>{e.title}</td>
                <td>{e.category}</td>
                <td>{e.description}</td>
                <img src={e.image} width={'50px'} alt="" />
                {/* <td>{e.image}</td> */}
                <td>{e.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
