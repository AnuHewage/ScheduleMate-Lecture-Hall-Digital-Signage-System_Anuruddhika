import StatCard from "../../components/admin/StatCard";
import SessionTimeline from "../../components/admin/SessionTimeline";
import AlertPanel from "../../components/admin/AlertPanel";
import OccupancyCard from "../../components/admin/OccupancyCard";

import { stats, sessions, alerts, occupancy } from "../../data/dashboardData";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}

      <div
        className="
          grid
          grid-cols-4
          gap-4
        "
      >
        {stats.map((item) => (
          <StatCard key={item.title} item={item} />
        ))}
      </div>

      {/* Main Content */}

      <div
        className="
          grid
          grid-cols-3
          gap-5
        "
      >
        {/* Session Timeline */}

        <div
          className="
            col-span-2
          "
        >
          <SessionTimeline sessions={sessions} />
        </div>

        {/* Right Side */}

        <div
          className="
            space-y-5
          "
        >
          <div className="space-y-5">
            <AlertPanel alerts={alerts} />

            <OccupancyCard occupancy={occupancy} />
          </div>
        </div>
      </div>
    </div>
  );
}
