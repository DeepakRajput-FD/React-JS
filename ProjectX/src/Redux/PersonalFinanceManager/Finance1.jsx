import { Box, Button, CircularProgress, IconButton, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  userBudget, userExpenses,  userlosemoney,  userSalary, usersavedMoney } from "./Expenses1";
import { Refresh } from "@mui/icons-material";

export default function Finance1() {
  
    const [salary,Setsalary]=useState('');
    const [Budget,setBudget]=useState('');
    const [Expenses,setexpenses]=useState('');

    const [saveMoney,setsavemoney]=useState('');
    const [losemoney,setlosemoney]=useState('');

    // accessing the state
        const salaryData=useSelector((state)=>{
            return state.ExpensesKey.salary;
        })

        const BudgetData=useSelector((state)=>{
            return state.ExpensesKey.budget;
        })

        const expensesData=useSelector((state)=>{
            return state.ExpensesKey.expenses;
        })

        const expensesMoney=useSelector((state)=>{
            if(state.ExpensesKey.moneyexpense<0)
            {
                return 0
            }
            else
            {
                return state.ExpensesKey.moneyexpense;
            }
        })

        const savedMoney=useSelector((state)=>{
            if (state.ExpensesKey.savedMoney<0)
            {
                return 0;
            }
            else
            {
                return state.ExpensesKey.savedMoney;
            }
        })


        const dispatch=useDispatch();

        const handleSave=()=>{
                dispatch(userSalary(salary));
                dispatch(userBudget(Budget));
                dispatch(userExpenses(Expenses));
                dispatch(userlosemoney({Budget,Expenses}))
                dispatch(usersavedMoney({Budget,Expenses}))
                Setsalary('');
                setBudget('');
                setexpenses('');
        }

        const handlereload=()=>{
            window.location.reload();
        }


    return (
    <>
      <Box>
        <TextField placeholder=" Enter Salary " value={salary} onChange={(e) => Setsalary(e.target.value)} />
        <TextField placeholder=" Enter Budget " value={Budget} onChange={(e) => setBudget(e.target.value)} />
        <TextField placeholder=" Enter Expenses " value={Expenses} onChange={(e) => setexpenses(e.target.value)} />
            <IconButton sx={{background:'blue',margin:1}} onClick={handlereload} ><  Refresh sx={{color:'black'}} /></IconButton>
            <Button variant="contained" onClick={handleSave}  >Check</Button>
      </Box>

        <Box sx={{textTransform:'capitalize',display:'flex',gap:2,background:'brown',padding:1,justifyContent:'center',color:"white",marginTop:1,flexDirection:'column',alignItems:'center'}} >

            <Typography variant="body1" component={'h3'} >
                Salary :{salaryData}
            </Typography>

            <Typography variant="body1" component={'h3'} >
            Budget : {BudgetData}
            </Typography>

            <Typography variant="body1" component={'h3'} sx={{color:expensesData>BudgetData ?'red':'black'}} >
            Expenses : {expensesData}
            </Typography>

            <Typography variant="body1" component={'h3'}  >
            money expense : {expensesMoney  }
            </Typography>

            <Typography variant="body1" component={'h3'} >
            money Saved : {savedMoney   }
            </Typography>

        </Box>


    </>
  );
}
