import React, { useState,useEffect } from 'react'

export default function ApiComponent() {

    const [data, setData] = useState([]);

  const API = "https://66f8f52d2a683ce97310850a.mockapi.io/UserData";

  useEffect(() => {
    const handleGetdata = async () => {
      const fetchData = await fetch(API);
      const fetchData2 = await fetchData.json();
      // console.log("Fetch Data From the API :::", fetchData2);
      setData(fetchData2);
    };
    handleGetdata();
  }, [setData]);


  // for change to status

  const handleChangeStatus = async (Item) => {
    
    const changeStatus=!Item.status;

    // console.log('status :: ',changeStatus);
    
    const updatedItem={
      ...Item,
      status:changeStatus
    }

    console.log('updated Data :: ',updatedItem);
    
    
    try
    {
      const changeData=fetch(`${API}/${Item.id}`,{
        method:'PUT',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(updatedItem)
      })      

      const getUpdatedData=data.map((userData)=>userData.id==Item.id ? {...userData,status:changeStatus} : userData );

      console.log('getUpdatedData :: ',getUpdatedData);
      
      setData(getUpdatedData)

    }
    catch(error){
      console.log('error Data ::: ',error);
    }

    // console.log(Item.status);
    

  };

  // for Adding Data
  const HandleAddData = async () => {
    const dataObj = {
      id: 10,
      name: "Deepak",
      email: "Deepak@gmail.com",
      lastName: "Rajput",
      status: true,
    };

    try {
      const postData = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataObj),
      });
      console.log("send Data Status :: ", postData.status);
      console.log(JSON.stringify(dataObj));
    } catch (error) {
      console.log("error :: ", error);
      console.log("Sent Data:", JSON.stringify(dataObj));
    }
  };

  const handleDeleteData = async (id) => {
    console.log("ID ::", id);

    const removeData = await fetch(`${API}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("delete status :: ", removeData.status);

    const removedRecord = data.filter((Item) => Item.id !== id);
    console.log(removedRecord);
    setData(removedRecord);
  };


  return (
    <>
    {data.map((Item, index) => {
      return (
        <div key={Item.id} style={{ display: "flex", gap: 20 }}>
          <p>{Item.email}</p>
          <p>{Item.name}</p>
          <p>{Item.lastName}</p>
          <button
            style={{ marginTop: 10 }}
            onClick={() => handleChangeStatus(Item)}
          >
            change Status
          </button>
          <p>{Item.status === true ? "Approved" : "rejected"}</p>
          <button onClick={() => handleDeleteData(Item.id)}>Delete</button>
        </div>
      );
    })}
    <button onClick={HandleAddData}>Add Data</button>
  </>
    )
}
