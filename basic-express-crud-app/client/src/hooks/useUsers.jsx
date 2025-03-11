import http from '../config/http';
import { useQuery} from '@tanstack/react-query';


function useUsers() {
 

    const userQuery = useQuery({ 
        queryKey: ['users'],
        queryFn: () => fetchUsers()
     })
  return {userQuery}
}
const fetchUsers = async ()=>{
    const { data } = await http.get('/users');
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