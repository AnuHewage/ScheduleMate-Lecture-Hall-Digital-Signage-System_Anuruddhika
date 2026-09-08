import { Outlet } from "react-router-dom";

import Sidebar from "../components/admin/Sidebar";
import Topbar from "../components/admin/Topbar";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 flex flex-col">
        <Topbar />

        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
