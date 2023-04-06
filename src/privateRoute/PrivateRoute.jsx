import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Home from '../page/Home';

const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  useEffect(() => {
      setIsAuthenticated(localStorage.getItem("LoginUser"))
  }, []);
  return isAuthenticated ? children : <Navigate to="/login" />;
};


export default PrivateRoute;