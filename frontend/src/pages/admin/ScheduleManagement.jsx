import { useState } from "react";
import ScheduleTable from "../../components/admin/ScheduleTable";
import { schedules } from "../../data/scheduleData";
import PageHeader from "../../components/admin/PageHeader";

export default function ScheduleManagement() {
  const [building, setBuilding] = useState("All Buildings");
  const [status, setStatus] = useState("All Status");
  const [date, setDate] = useState("");

  const filteredSchedules = schedules.filter((schedule) => {
    const buildingMatch =
      building === "All Buildings" || schedule.building === building;

    const statusMatch = status === "All Status" || schedule.status === status;

    const dateMatch = date === "" || schedule.date === date;

    return buildingMatch && statusMatch && dateMatch;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <PageHeader
        title="Schedule Management"
        description="Manage lecture hall schedules, sessions and room allocations"
        actionText="Create Session"
      />

      {/* Filters */}

      <div
        className="
        bg-white
        border
        border-gray-200
        rounded-lg
        p-4
        flex
        gap-4
        "
      >
        <select
          value={building}
          onChange={(e) => setBuilding(e.target.value)}
          className="
border
rounded-lg
px-3
py-2
text-sm
text-slate-600
"
        >
          <option>All Buildings</option>
          <option>Main Building</option>
          <option>New Building</option>
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="
border
rounded-lg
px-3
py-2
text-sm
text-slate-600
"
        >
          <option>All Status</option>
          <option>Scheduled</option>
          <option>Cancelled</option>
          <option>Rescheduled</option>
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="
border
rounded-lg
px-3
py-2
text-sm
text-slate-600
"
        />
      </div>

      {/* Schedule Table */}

      <ScheduleTable schedules={filteredSchedules} />
    </div>
  );
}
