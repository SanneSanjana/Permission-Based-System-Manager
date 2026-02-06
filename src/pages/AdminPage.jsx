import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function AdminPage() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.role !== "Admin") {
      navigate("/unauthorized");
    }
  }, [user]);

  return <h2>Admin Only Page</h2>;
}
