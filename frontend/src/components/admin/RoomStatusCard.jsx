import StatusBadge from "./StatusBadge";

export default function RoomStatusCard({ room }) {
  const borderColors = {
    "Ongoing Now": "border-l-emerald-500",

    "Upcoming Soon": "border-l-blue-500",

    Available: "border-l-slate-300",

    "Temporarily Unavailable": "border-l-rose-500",
  };

  const bgColors = {
    "Ongoing Now": "bg-emerald-50/30",

    "Upcoming Soon": "bg-blue-50/30",

    Available: "bg-white",

    "Temporarily Unavailable": "bg-rose-50/30",
  };

  return (
    <div
      className={`
      rounded-xl
      border
      border-slate-200
      border-l-4
      p-5
      shadow-sm
      hover:shadow-md
      transition
      ${borderColors[room.status]}
      ${bgColors[room.status]}
      `}
    >
      {/* Header */}

      <div
        className="
        flex
        justify-between
        items-start
        "
      >
        <div>
          <h3
            className="
            font-mono
            text-sm
            font-bold
            text-slate-900
            "
          >
            {room.room}
          </h3>

          <p
            className="
            mt-1
            text-xs
            text-slate-400
            "
          >
            {room.building} · {room.floor} · {room.side}
          </p>
        </div>

        <StatusBadge status={room.status} />
      </div>

      {/* Session Details */}

      <div
        className="
        mt-5
        border-t
        border-slate-100
        pt-4
        space-y-2
        "
      >
        <p
          className="
          text-sm
          font-semibold
          text-slate-800
          "
        >
          {room.module}
        </p>

        {room.lecturer && (
          <p
            className="
            text-xs
            text-slate-500
            "
          >
            👤 {room.lecturer}
          </p>
        )}

        <p
          className="
          text-xs
          text-slate-500
          "
        >
          🕒 {room.time}
        </p>
      </div>

      {/* Footer Indicator */}

      <div
        className="
        mt-4
        flex
        items-center
        justify-between
        text-xs
        "
      >
        <span
          className="
          text-slate-400
          "
        >
          Live Status
        </span>

        <span
          className="
          font-semibold
          text-slate-700
          "
        >
          {room.status}
        </span>
      </div>
    </div>
  );
}
