import React, { useEffect, useState } from "react";

export default function DashBoard() {
  const [title, settitle] = useState("");
  const [Description, setDescription] = useState("");
  const [status, setStatus] = useState(true);
  const [priority, setpriority] = useState("");

  const [data, setdata] = useState([]);

  const [change, setchange] = useState(true);

  useEffect(() => {
    const oldData = JSON.parse(localStorage.getItem("TaskManager")) || [];
    console.log(oldData);
    setdata(oldData);
  }, []);

  const obj = {
    title: title,
    description: Description,
    priority: priority,
    status: status,
  };

  const handleSave = () => {
    setdata([...data, obj]);
    localStorage.setItem("TaskManager", JSON.stringify([...data, obj]));
    settitle("");
    setDescription("");
  };

  const handleDelete = (index) => {
    const singleData = data;
    // console.log(singleData[index]);
    const changeData = singleData.filter((e, i) => i !== index);
    setdata(changeData);
    localStorage.setItem("TaskManager", JSON.stringify(changeData));
  };

  const changes = (index) => {
    const newData = data.map((item, i) =>
      i === index ? { ...item, status: !item.status } : item
    );
    setdata(newData);
    localStorage.setItem("TaskManager", JSON.stringify(newData));   

  };

  const selectAllcheckbox = () => {
    const oldData = data;
    
    setchange(!change)

    oldData.map((item, index) => {
      change ? item.status=true : item.status=false;
    });
    setdata(oldData);
    localStorage.setItem('TaskManager',JSON.stringify(oldData))
  };

const allPendingData=()=>{

  const oldData=JSON.parse(localStorage.getItem('TaskManager'));
  console.log(oldData);

 const second = oldData.filter((e,i)=>e.status==false)

 console.log(second);
  setdata(second);
}

const CompletedData=()=>{

  const oldData=JSON.parse(localStorage.getItem('TaskManager'));

  const second=oldData.filter((e,i)=>e.status==true);
 
  setdata(second);

}

const AllTask=()=>{
  
  const oldData=JSON.parse(localStorage.getItem('TaskManager'));
 
  setdata(oldData);
}

const HigherPriority=()=>{
  
  const higher=JSON.parse(localStorage.getItem('TaskManager'));
    const high=higher.filter((e,i)=>e.priority=="High");
  setdata(high);
  }


const LowerPriority=()=>{
  const lower=JSON.parse(localStorage.getItem('TaskManager'));
    const low=lower.filter((e,i)=>e.priority=="Low");
    setdata(low)
}


  return (
    <>
      <input
        type="text"
        placeholder="Enter Title "
        value={title}
        onChange={(e) => settitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Description "
        value={Description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select onChange={(e) => setpriority(e.target.value)}>
        <option value="">Select</option>
        <option value="Low">Low</option>
        <option value="High">High</option>
      </select>

      <label htmlFor="pending">pending</label>
      <input type="radio" name="status" onChange={(e) => setStatus(!status)} />

      <label htmlFor="completed">Completed</label>
      <input type="radio" name="status" onChange={(e) => setStatus(true)} />

      <button onClick={handleSave}>Save</button>

      <br />

      <label htmlFor="Allcheckbox">Select All checkbox</label>
      <input type="checkbox" name="Allcheckbox"  onChange={selectAllcheckbox} />


    <button onClick={allPendingData} >Pending Task</button>

    <button onClick={CompletedData} >Completed Task</button>

    <button onClick={AllTask}>All Task</button>

    <br />

<br />
    <button onClick={HigherPriority}>Higher Priority</button>
    <button onClick={LowerPriority}>Lower Priority</button>

      <table
        border={1}
        style={{ margin: "50px auto", width: "50%", fontFamily: "sans-serif" }}
      >
        <thead>
          <tr>
            <th>Set completed</th>
            <th>Title</th>
            <th>Description</th>
            <th>priority</th>
            <th>status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => {
            return (
              <tr key={i}>
                {e.status ? (
                  <td>
                    <input
                      type="checkbox"
                      onChange={() => changes(i)}
                      checked
                    />
                  </td>
                ) : (
                  <td>
                    <input type="checkbox" onChange={() => changes(i)} />
                  </td>
                )}
                <td>{e.title}</td>
                <td>{e.description}</td>
                <td>{e.priority}</td>
                <td>{e.status ? "compeletd" : "pending"}</td>
                <td>
                  <button onClick={() => handleDelete(i)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
