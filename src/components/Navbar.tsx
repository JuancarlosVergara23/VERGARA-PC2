import {Link,useLocation,useNavigate} from 'react-router-dom';
import {getToken,getUser,logout} from '../storage';

export default function Navbar() {
  const navigate = useNavigate();
  useLocation();
  const token = getToken();
  const user = getUser();

    function handleLogout() {
        logout();
        navigate('/login');
    }

    return (
        <nav className="flex items-center justify-between bg-gray-800 p-4 text-white">
            <span className="text-lg font-semibold">Aula Soporte</span>
            {token && <Link to="/dashboard" className="hover:underline">Dashboard</Link>}
            {token && <Link to="/locations" className="hover:underline">Locations</Link>}
            {token && <Link to="/my-tickets" className="hover:underline">My Tickets</Link>}
            <span className="flex-1">
            

