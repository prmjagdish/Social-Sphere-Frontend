import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {

  const token = localStorage.getItem("token"); 

  if (!token) {
    return <Navigate to="/login" replace />; 
  }
  console.log("ProtectedRoute accessed with valid token.");
  return <Outlet />; 
}

export default ProtectedRoute;
