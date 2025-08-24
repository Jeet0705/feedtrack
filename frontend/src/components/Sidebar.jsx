import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-blue-800 text-white min-h-screen">
      <div className="p-4 text-xl font-bold border-b">FeedTrack</div>
      <nav className="mt-4">
        <Link to="/dashboard" className="block px-4 py-2 hover:bg-blue-700">
          Dashboard
        </Link>
        <Link to="/feedback" className="block px-4 py-2 hover:bg-blue-700">
          Feedback Form
        </Link>
        <Link to="/charts" className="block px-4 py-2 hover:bg-blue-700">
          Charts
        </Link>
      </nav>
    </div>
  );
}
