import { useState } from "react";
import CancellationTable from "../../components/admin/CancellationTable";
import { cancellationData } from "../../data/cancellationData";

export default function Cancellations() {
  const [type, setType] = useState("All Changes");
  const [building, setBuilding] = useState("All Buildings");
  const [date, setDate] = useState("");

  const filteredCancellations = cancellationData.filter((item) => {
    const typeMatch = type === "All Changes" || item.type === type;

    const buildingMatch =
      building === "All Buildings" || item.building === building;

    const dateMatch = date === "" || item.date === date;

    return typeMatch && buildingMatch && dateMatch;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}

      <PageHeader
        title="Cancellations & Reschedules"
        description="Manage cancelled sessions and schedule changes"
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
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="
 border
 rounded-lg
 px-3
 py-2
 text-sm
 text-slate-600
 "
        >
          <option>All Changes</option>
          <option>Cancelled</option>
          <option>Rescheduled</option>
        </select>

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

      {/* Table */}

      <CancellationTable cancellations={filteredCancellations} />
    </div>
  );
}
