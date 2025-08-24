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
        <Link to="/" className="text-xl font-bold text-blue-600">
          FeedTrack
        </Link>

        <div className="flex items-center gap-6">
          {user ? (
            <>
              <span className="text-gray-700 text-sm">Hello, {user.email}</span>
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
