import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function Dashboard() {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="#" className="p-6 bg-white shadow rounded-lg">
            <h2 className="text-xl font-semibold">Total Feedbacks</h2>
            <p className="text-3xl font-bold text-blue-600">12</p>
          </Link>
          <Link to="#" className="p-6 bg-white shadow rounded-lg">
            <h2 className="text-xl font-semibold">Avg Rating</h2>
            <p className="text-3xl font-bold text-green-600">4.2</p>
          </Link>
          <Link to="#" className="p-6 bg-white shadow rounded-lg">
            <h2 className="text-xl font-semibold">New This Week</h2>
            <p className="text-3xl font-bold text-purple-600">5</p>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
