import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";

import Dashboard from "../pages/admin/Dashboard";
import BuildingsFloors from "../pages/admin/BuildingsFloors";
import RoomsLabs from "../pages/admin/RoomsLabs";
import Modules from "../pages/admin/Modules";
import Lecturers from "../pages/admin/Lecturers";
import ScheduleManagement from "../pages/admin/ScheduleManagement";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
