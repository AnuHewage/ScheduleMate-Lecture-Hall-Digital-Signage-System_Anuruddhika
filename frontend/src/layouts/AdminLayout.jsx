import Sidebar from "../components/admin/Sidebar";
import Topbar from "../components/admin/Topbar";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 flex flex-col">
        <Topbar title="Dashboard" />

        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
