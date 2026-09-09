import { Outlet } from "react-router-dom";

import Sidebar from "../components/admin/Sidebar";
import Topbar from "../components/admin/Topbar";

export default function AdminLayout() {
  return (
    <div
      className="
      h-screen
      overflow-hidden
      bg-gray-100
      "
    >
      <Sidebar />

      <main
        className="
        ml-64
        h-screen
        flex
        flex-col
        "
      >
        {/* Top Navigation */}

        <Topbar />

        {/* Scroll Area */}

        <div
          className="
          flex-1
          overflow-y-auto
          p-6
          "
        >
          <Outlet />
        </div>
      </main>
    </div>
  );
}
