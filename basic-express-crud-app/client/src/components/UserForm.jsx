import { Box, Button, Stack, TextField } from "@mui/material";

export function UserForm() {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', width : '100%'}}>
    <Stack spacing={2} sx={{width : '100%', padding: '20px'}}>
    <TextField  label="Name" variant="outlined" required type="text"/>
    <TextField  label="Email" variant="outlined" required type="email"/>
    <TextField  label="User Id" variant="outlined" required type="text" />
    <TextField  label="Password" variant="outlined" required type="password"/> 
    </Stack>
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px'}}>
    <Button variant="contained">Submit</Button>
    <Button variant="contained">Reset</Button>
    </Box>
    </Box>
  )
}
