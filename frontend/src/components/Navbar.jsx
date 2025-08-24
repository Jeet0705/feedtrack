import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/dashboard" className="text-xl font-bold text-blue-600">
          FeedTrack
        </Link>

        <div className="flex items-center gap-6">
          {user ? (
            <>
              <div className="flex gap-4 text-sm">
                <Link to="/dashboard" className="hover:text-blue-800">
                  Dashboard
                </Link>
                <Link to="/feedback" className="hover:text-blue-800">
                  Feedback
                </Link>
                <Link to="/chatbot" className="hover:text-blue-800">
                  Chatbot
                </Link>
              </div>
              <button
                onClick={handleSignOut}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
              >
                Sign Out
              </button>
            </>
          ) : (
            <div className="flex gap-4">
              <Link to="/login" className="text-blue-600 hover:underline">
                Login
              </Link>
              <Link to="/signup" className="text-blue-600 hover:underline">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
