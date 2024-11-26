import React, { useState } from "react";

export default function CRUD1() {
  const [data, setdata] = useState([]);

  const [name, setname] = useState("");

  const [change, setchange] = useState(false);

  const [index, setindex] = useState();

  let obj = {
    name,
  };

  const handleAdd = () => {
    setdata([...data, obj]);
    setname("");
  };

  const handleEdit = (index) => {
    // console.log(index);
    const filterData = data[index];
    setname(filterData.name);
    console.log(filterData.name);
    setindex(index);
    setchange(!change)
  };

  const handleRemove = (index) => {
    console.log(index);
    const filterData = data.filter((e, i) => i !== index);
    console.log(filterData);
    setdata(filterData);
  };

  const handleUpdate = () => {
    let filterData=data;
    filterData[index].name=name;
    // console.log(filterData);
    setdata(filterData)
    setchange(!change)
    setname('');
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setname(e?.target?.value)}
      />
      {change ? (
          <button onClick={handleUpdate}>Update</button>
        ) : (
        <button onClick={handleAdd}>add</button>
        )}

      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => {
            return (
              <tr key={i}>
                <td>{e.name}</td>
                <td>
                  <button onClick={() => handleEdit(i)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => handleRemove(i)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
