import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
}
