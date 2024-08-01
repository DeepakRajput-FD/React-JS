import React, { useEffect, useState } from "react";

export default function ApiData() {
  const [data, setdata] = useState(null);
  const [name,setname]=useState('');

  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    const AddData = await fetch("https://jsonplaceholder.typicode.com/users");
    const two = await AddData.json();
    setdata(two);
  };

  const check=(value)=>{

    const FindData=data;
   const two= FindData.map((e,i)=> {return  e.name.toLowerCase()});
    
    const second= FindData.filter((e,i)=>e.name==value);
     console.log(second);
  }

  return (
    <>

    <input type="text" placeholder="Search by Name" onBlur={(e)=>check(e.target.value)} />


      {data == null ? (
        <h1>Loading</h1>
      ) : (
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>username</th>
              <th>email</th>
              <th>zipcode</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.username}</td>
                  <td>{e.email}</td>
                  <td>{e.address.zipcode}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}
