import { Box, Button, Drawer } from '@mui/material'
import './App.css'
import { UserTable } from './components/UserTable'
import QueryProvider from './Providers/QueryProvider'
import { useState } from 'react'
import { UserForm } from './components'


function App() {
  const [open, setOpen] =useState(false)
  const productPlaceholder = {
    name: "",
    image: "",
    userId: "",
    password: ""

  }
  return (
    <>
     <QueryProvider>
      <Box>
      <Box display='flex' width='100%' justifyContent='flex-end'>
      <Button variant="contained" onClick={()=> setOpen(true)}>Add Users</Button>
      </Box>
      <UserTable/>
      <Drawer
      anchor={'right'}
      open={open}
      onClose={()=>setOpen(false)}
    >
      <Box sx={{width: '500px', display: 'flex', justifyContent: 'center'}}>
      <UserForm placeholder={productPlaceholder} />
      </Box>
    </Drawer>
      </Box>
     </QueryProvider>
    </>
  )
}

export default App
