import React, { useEffect, useState } from "react";

export default function First() {
  const [data, setdata] = useState([]);

  const myfun = () => {
    const promise1 = new Promise(async (res, rej) => {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data2 = await data.json();
      res(data2);
    }).then((res, rej) => {
      setdata(res);
    });
  };

  useEffect(() => {
    myfun();
  }, []);


  return (
    <>
      {data.map((e, i) => {
        return (
          <div key={i}>
            <h5>{e.userId}</h5>
            <h5>{e.title}</h5>
            <h5>{e.body}</h5>
          </div>
        );
      })}
    </>
  );
}
