import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";

import Dashboard from "../pages/admin/Dashboard";
import BuildingsFloors from "../pages/admin/BuildingsFloors";
import RoomsLabs from "../pages/admin/RoomsLabs";
import Modules from "../pages/admin/Modules";
import Lecturers from "../pages/admin/Lecturers";
import ScheduleManagement from "../pages/admin/ScheduleManagement";
import Cancellations from "../pages/admin/CancellationReschedule";
import Announcements from "../pages/admin/NoticesAnnouncements";
import CreateSession from "../pages/admin/CreateSession";
import CancellationReschedule from "../pages/admin/CancellationReschedule";
import DisplayConfiguration from "../pages/admin/DisplayConfiguration";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="buildings" element={<BuildingsFloors />} />

          <Route path="rooms" element={<RoomsLabs />} />

          <Route path="modules" element={<Modules />} />

          <Route path="lecturers" element={<Lecturers />} />

          <Route path="schedule" element={<ScheduleManagement />} />

          <Route path="cancellations" element={<Cancellations />} />

          <Route path="announcements" element={<Announcements />} />

          <Route path="create-session" element={<CreateSession />} />

          <Route
            path="cancellation-reschedule"
            element={<CancellationReschedule />}
          />

          <Route path="devices" element={<DisplayConfiguration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
