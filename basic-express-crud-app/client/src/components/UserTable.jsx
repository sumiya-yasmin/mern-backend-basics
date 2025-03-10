import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import useUsers from '../hooks/useUsers';
import { useMemo } from 'react';



const columns = [
  { field: 'sl', headerName: 'SL', width: 90 },
  { field: 'id', headerName: 'ID', width: 220 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
  },
  {
    field: 'image',
    headerName: 'Image',
    width: 150,
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'email',
    width: 110,
  },
  {
    field: 'userId',
    headerName: 'User Id',
    width: 150,
  },
  {
    field: 'password',
    headerName: 'Password',
    width: 140,
  },
];

export function UserTable() {
  const {userQuery} = useUsers();
   const formattedRows = useMemo(
        () =>
          userQuery.data?.map((user, index) => ({
            sl: index + 1,
            id: user._id,
            name: user.name,
            email: user.email,
            userId: user.userId,
            password: user.password,
          })),
        [userQuery.data]
      );
      return (
        <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        loading= {userQuery.isLoading}
        rows={formattedRows}
        columns={columns}
        disableRowSelectionOnClick
        />
    </Box>
  );
}

