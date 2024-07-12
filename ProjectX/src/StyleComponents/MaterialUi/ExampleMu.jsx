import { Delete, Edit } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import React from 'react'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

export default function ExampleMu() {
  return (
    <div>
        {/* simple button */}
        <button>Base Ui design</button>

        {/* matrial ui */}

        <Button>Material Ui</Button>
        <br></br>

    {/* sx means style */}

        <h5>for style</h5>

        <Box sx={{'& button':{m:1}}}>
            <Button variant='text'>text button</Button>
            <Button variant='outlined'>outlined button</Button>
            <Button variant='contained'>Contained button</Button>
        </Box>

        {/* for icons */}

        <h5>for icons</h5>

        <Box sx={{'& button' : {m:1}}}>
            <Button variant='outlined'  startIcon={<Edit/>}>Edit </Button>
            <Button variant='contained' endIcon={<Delete/>}>Delete </Button>
            <Button variant='outlined' endIcon={<AccountBalanceWalletIcon/>}>Balance</Button>
        </Box>

    </div>
  )
}
