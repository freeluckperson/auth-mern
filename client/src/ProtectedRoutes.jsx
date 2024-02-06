import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const ProtectedRoutes = () => {
  const { loading, isAuthenticated } = useAuth();

  if (loading) return <h2>Loading...</h2>;
  if (!loading && !isAuthenticated) return <Navigate to="login" replace />;

  return <Outlet />;
};

export default ProtectedRoutes;
