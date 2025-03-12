import http from '../config/http';
import { useMutation, useQuery, useQueryClient} from '@tanstack/react-query';


function useUsers() {
  const QueryClient = useQueryClient()

    const userQuery = useQuery({ 
        queryKey: ['users'],
        queryFn: () => fetchUsers()
     })
  
  const createUserMutation = useMutation({
        mutationFn: createUsers,
        onSuccess: ()=>{
          QueryClient.invalidateQueries(['users']);
        },
        onError: (error)=>{
          alert('Failed to create user')
          console.log(error)
        }
  })
  
  return {userQuery, createUserMutation}
}

const fetchUsers = async ()=>{
    const { data } = await http.get('/users');
    return data;
}
const createUsers = async (newUser)=>{
  const {data} = await http.post('/users', newUser)
  return data;
}
export default useUsers


/*
    const [users, setUsers] = useState([]);
    const fetchUsers = useCallback(async () => {
      try {
        const { data } = await http.get('/users');
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    }, []);
    useEffect(() => {
      fetchUsers();
    }, [fetchUsers]);
  
    const formattedRows = useMemo(
      () =>
        users.map((user, index) => ({
          sl: index + 1,
          id: user._id,
          name: user.name,
          email: user.email,
          userId: user.userId,
          password: user.password,
        })),
      [users]
    );
  return {formattedRows}
}*/