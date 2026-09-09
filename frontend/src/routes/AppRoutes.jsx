import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminLogin from "../pages/auth/AdminLogin";
import AdminProfile from "../pages/admin/AdminProfile";
import ProtectedRoute from "./ProtectedRoute";

import AdminLayout from "../layouts/AdminLayout";

import Dashboard from "../pages/admin/Dashboard";
import LiveRoomStatus from "../pages/admin/LiveRoomStatus";
import BuildingsFloors from "../pages/admin/BuildingsFloors";
import RoomsLabs from "../pages/admin/RoomsLabs";
import Modules from "../pages/admin/Modules";
import Lecturers from "../pages/admin/Lecturers";
import ScheduleManagement from "../pages/admin/ScheduleManagement";
import CancellationReschedule from "../pages/admin/CancellationReschedule";
import NoticesAnnouncements from "../pages/admin/NoticesAnnouncements";
import CreateSession from "../pages/admin/CreateSession";
import DisplayConfiguration from "../pages/admin/DisplayConfiguration";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin Login */}

        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Admin Layout */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          {/* Profile */}
          <Route path="profile" element={<AdminProfile />} />
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="status" element={<LiveRoomStatus />} />
          <Route path="buildings" element={<BuildingsFloors />} />

          <Route path="rooms" element={<RoomsLabs />} />

          <Route path="modules" element={<Modules />} />

          <Route path="lecturers" element={<Lecturers />} />

          <Route path="schedule" element={<ScheduleManagement />} />

          <Route path="create-session" element={<CreateSession />} />

          <Route path="cancellations" element={<CancellationReschedule />} />

          <Route path="announcements" element={<NoticesAnnouncements />} />

          <Route path="devices" element={<DisplayConfiguration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
