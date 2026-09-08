export default function RoomAvailabilityCard({
  room,
  date,
  startTime,
  endTime,
}) {
  const checkAvailability = () => {
    if (!room) {
      return {
        status: "waiting",
        text: "Select a room to check availability",
      };
    }

    // Temporary mock checking

    if (room === "M05A-L01") {
      return {
        status: "available",
        text: "Room is available",
      };
    }

    if (room === "M05A-L02") {
      return {
        status: "occupied",
        text: "Room already has a scheduled session",
      };
    }

    return {
      status: "available",
      text: "Room is available",
    };
  };

  const availability = checkAvailability();

  return (
    <div
      className="
      bg-white
      border
      border-gray-200
      rounded-xl
      p-5
      "
    >
      <h2
        className="
        font-semibold
        text-slate-900
        mb-4
        "
      >
        Room Availability
      </h2>

      <div
        className={`
        rounded-lg
        p-4
        text-sm
        
        ${
          availability.status === "available"
            ? "bg-green-50 text-green-700 border border-green-200"
            : availability.status === "occupied"
              ? "bg-red-50 text-red-700 border border-red-200"
              : "bg-gray-50 text-gray-500 border border-gray-200"
        }

        `}
      >
        <p
          className="
          font-semibold
          "
        >
          {availability.status === "available" && "🟢 Available"}

          {availability.status === "occupied" && "🔴 Occupied"}

          {availability.status === "waiting" && "⚪ Waiting"}
        </p>

        <p className="mt-1">{availability.text}</p>
      </div>

      {room && (
        <div
          className="
            mt-5
            text-sm
            text-slate-500
            space-y-2
            "
        >
          <p>
            <span className="font-medium text-slate-700">Room:</span> {room}
          </p>

          <p>
            <span className="font-medium text-slate-700">Date:</span>{" "}
            {date || "-"}
          </p>

          <p>
            <span className="font-medium text-slate-700">Time:</span>{" "}
            {startTime || "--"}
            {" - "}
            {endTime || "--"}
          </p>
        </div>
      )}
    </div>
  );
}
