import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const admin =
    localStorage.getItem("admin") || sessionStorage.getItem("admin");

  if (!admin) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
