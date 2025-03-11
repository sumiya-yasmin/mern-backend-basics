import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

export function UserForm({placeholder}) {
  const [user, setUser] =useState(placeholder);
  const handleOnChange = (event) =>{
    const {name, value} = event.target;
    setUser((prev)=> ({...prev, [name]: value}))
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(user)
  }
  return (
    <form onSubmit={handleSubmit}>
    <Box sx={{display: 'flex', flexDirection: 'column', width : '100%'}}>
    <Stack spacing={2} sx={{width : '100%', padding: '20px'}}>
    <TextField  label="Name" variant="outlined" required name='name' type="text" onChange={handleOnChange}/>
    <TextField  label="Email" variant="outlined" required name='email' type="email" onChange={handleOnChange}/>
    <TextField  label="User Id" variant="outlined" required name='userId' type="text" onChange={handleOnChange}/>
    <TextField  label="Password" variant="outlined" required name='password' type="password" onChange={handleOnChange}/> 
    </Stack>
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px'}}>
    <Button variant="contained" type="submit" >Submit</Button>
    <Button variant="contained" type="reset">Reset</Button>
    </Box>
    </Box>
    </form>
  )
}
