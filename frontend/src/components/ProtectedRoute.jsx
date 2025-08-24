import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) navigate("/login");
    });
    return unsubscribe;
  }, [navigate]);

  return children;
}
