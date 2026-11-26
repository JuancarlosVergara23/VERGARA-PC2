import {Navigate, Outlet} from 'react-router-dom';
import {getToken} from '../storage';

export default function ProtectedRoute() {

  if (!getToken()) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}
