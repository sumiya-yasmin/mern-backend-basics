import { DataGrid } from '@mui/x-data-grid';
import useUsers from '../hooks/useUsers';
import { useMemo } from 'react';
import { Box, Button } from '@mui/material';



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
    width: 100,
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'email',
    width: 120,
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
  {
    field: 'action',
    headerName: 'Action',
    headerAlign: 'center',
    width: 160,
    sortable: false,
    renderCell: () => {
      return(
        <Box display= 'flex'>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </Box>
      )
    }
  }
];

export function UserTable() {
  const {userQuery} = useUsers();
   const formattedRows = useMemo(
        () =>
          userQuery.data?
          userQuery.data.map((user, index) => ({
            sl: index + 1,
            id: user._id,
            name: user.name,
            email: user.email,
            userId: user.userId,
            password: user.password,
            action: "action"
          }))
        : [],
        [userQuery.data]
      );
      return (
        <Box sx={{ height: 400, width: '100%', minWidth: 800 }}>
      <DataGrid
        loading= {userQuery.isLoading}
        rows={formattedRows}
        columns={columns}
        disableRowSelectionOnClick
        />
    </Box>
  );
}

