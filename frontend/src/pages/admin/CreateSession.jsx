import PageHeader from "../../components/admin/PageHeader";
import SessionForm from "../../components/admin/SessionForm";
import RoomAvailabilityCard from "../../components/admin/RoomAvailabilityCard";

export default function CreateSession() {
  return (
    <div
      className="
      space-y-6
      "
    >
      {/* Page Header */}

      <PageHeader
        title="Create New Session"
        description="Create and allocate a new lecture session"
      />

      {/* Main Content */}

      <div
        className="
        grid
        grid-cols-1
        xl:grid-cols-3
        gap-6
        "
      >
        {/* Session Form */}

        <div
          className="
          xl:col-span-2
          "
        >
          <SessionForm />
        </div>

        {/* Availability */}

        <div
          className="
          space-y-6
          "
        >
          <RoomAvailabilityCard
            room="M05A-L01"
            date="2026-09-09"
            startTime="08:00"
            endTime="10:00"
          />

          {/* Optional Info Card */}

          <div
            className="
            bg-white
            border
            border-gray-200
            rounded-xl
            p-5
            "
          >
            <h3
              className="
              font-semibold
              text-slate-900
              mb-3
              "
            >
              Session Guidelines
            </h3>

            <ul
              className="
              text-sm
              text-slate-500
              space-y-2
              "
            >
              <li>• Check room availability before saving</li>

              <li>• Avoid overlapping sessions</li>

              <li>• Assign correct lecturer and room</li>

              <li>• Cancelled sessions can be managed later</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
