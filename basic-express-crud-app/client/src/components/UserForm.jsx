import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
export function UserForm({ placeholder }) {
  // const [user, setUser] =useState(placeholder);
  // const handleOnChange = (event) =>{
  //   const {name, value} = event.target;
  //   setUser((prev)=> ({...prev, [name]: value}))
  // }
  const handleSubmit = (data) => {
    console.log(data);
  };
  const userFormSchema = z.object({
    name: z.string().min(3, { message: 'Name must be at least 3 characters' }).max(100),
    image: z.string().optional(),
    email: z.string().email(),
    userId: z.string().min(3,{ message: "User ID must be at least 3 characters" }),
    password: z.string().min(8,{ message: "Password must be at least 8 characters" }),
  });
  const form = useForm({
    defaultValues: placeholder,
    resolver: zodResolver(userFormSchema),
  });
  return (
    <form
      onSubmit={form.handleSubmit(handleSubmit, (errors) => console.log(errors))}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Stack spacing={2} sx={{ width: '100%', padding: '20px' }}>
          <TextField
            label="Name"
            variant="outlined"
            type="text"
            {...form.register('name')}
            error={Boolean(form.formState.errors.name)}
            helperText={form.formState.errors.name?.message} 
          />
            {/* {form.formState.errors?.name &&(
              <Typography color='error'>
                {form.formState.errors?.name.message}
              </Typography>
            )} */}


          <TextField
            label="Email"
            variant="outlined"
            type="email"
            {...form.register('email')}
            error={Boolean(form.formState.errors.email)}
            helperText={form.formState.errors.email?.message} 
            />
          <TextField
            label="User Id"
            variant="outlined"
            type="text"
            {...form.register('userId')}
            error={Boolean(form.formState.errors.userId)}
            helperText={form.formState.errors.userId?.message} 
          />
          <TextField
            label="Password"
            variant="outlined"
            
            type="password"
            {...form.register('password')}
            error={Boolean(form.formState.errors.password)}
            helperText={form.formState.errors.password?.message} 
          />
        </Stack>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <Button variant="contained" type="submit">
            Submit
          </Button>
          <Button variant="contained" type="reset">
            Reset
          </Button>
        </Box>
      </Box>
    </form>
  );
}
