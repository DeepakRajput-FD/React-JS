import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Add, AddItems, decrmentUserBudget } from "./Redux/Features/Finance";

export default function Manager() {
  const salaryData = useSelector((state) => {
    return state.financeKey.salary;
  });

  const BudgetData = useSelector((state) => {
    return state.financeKey.budget;
  });

  const [salary, setsalary] = useState("");
  const [budget, setbudget] = useState("");

  const dispatch = useDispatch();

  const [item, setitemname] = useState("");
  const [price, setprice] = useState("");

  const handleAdd = () => {
    dispatch(Add({ salary, budget }));
  };

  const handleAddItem = () => {
    dispatch(AddItems({ item, price }));
    dispatch(decrmentUserBudget(price));
    setitemname("");
    setprice("");
  };

  const ItemData = useSelector((state) => {
    return state.financeKey.data;
  });

  return (
    <Box sx={{background:' #89ABE3',width:'100%',height:'600px',borderRadius:'20px',paddingTop:'20px'}} >
      <Box sx={{ display: "flex", justifyContent: "space-around", margin: 2 }}>
        <TextField
          placeholder="enter salary"
          
          onChange={(e) => setsalary(e.target.value)}
        />
        <TextField
          placeholder="enter budget"
          onChange={(e) => setbudget(e.target.value)}
        />

        <Button variant="contained" onClick={handleAdd}>
          Add
        </Button>
      </Box>

      <Box>
        <Typography sx={{ fontSize: "20px", textAlign: "center" }}>
          Salary : {salaryData}
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            textAlign: "center",
            color: BudgetData < 0 ? "red" : "black",
          }}
        >
          Budget : {BudgetData}
        </Typography>
      </Box>

          <Box sx={{display:'flex',justifyContent:'space-around',alignItems:'center'}} >

      <Box
        sx={{
          margin: 2,
          width: "400px",
          height: "300px",
          padding: 2,
          borderRadius:2,
          display:'flex',
          flexDirection:'column',
          gap:1,
          fontFamily:'sans-serif',
          background:'#EA738D'
        }}
      >
        <Typography variant="h5" sx={{color:'white',textAlign:'center',p:1}} >Expenses Added</Typography>

        <TextField
          placeholder="Enter Item Name"
          value={item}
          onChange={(e) => setitemname(e.target.value)}
        />
        <TextField
          placeholder="Enter Item Price"
          value={price}
          onChange={(e) => setprice(e.target.value)}
        />
        <Button variant="contained" onClick={handleAddItem}>
          Add
        </Button>
      </Box>
      <Box sx={{background:'#EA738D',color:'white',display:'flex',flexDirection:'column',justifyContent:'space-between', width: "400px",height: "300px",padding:2,borderRadius:2}} >

        <Typography>All Expenses</Typography>

        {ItemData.map((e, i) => {
          return (
            <Box sx={{display:'flex',gap:2,fontFamily:'sans-serif',textTransform:'capitalize',border:'2px solid white',padding:2,borderRadius:4}} >
              <Typography  >{e.price}</Typography>
              <Typography sx={{color:'black'}} >{e.item}</Typography>
            </Box>
          );
        })}
      </Box>
      </Box>

    </Box>
  );
}
