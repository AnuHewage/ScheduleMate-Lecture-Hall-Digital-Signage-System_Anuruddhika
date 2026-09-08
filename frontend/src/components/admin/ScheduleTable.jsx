export default function ScheduleTable({ schedules }) {
  return (
    <div
      className="
      bg-white
      border
      border-gray-200
      rounded-lg
      overflow-hidden
      "
    >
      {/* Header */}

      <div
        className="
        px-5
        py-4
        border-b
        border-gray-200
        "
      >
        <h2
          className="
          font-semibold
          text-slate-900
          "
        >
          Lecture Schedule
        </h2>
      </div>

      {/* Table */}

      <table
        className="
        w-full
        text-sm
        "
      >
        <thead>
          <tr
            className="
            text-left
            text-xs
            text-slate-400
            border-b
            "
          >
            <th className="px-5 py-3">Date</th>

            <th>Time</th>

            <th>Room</th>

            <th>Module</th>

            <th>Lecturer</th>

            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {schedules.map((schedule) => (
            <tr
              key={schedule.id}
              className="
              border-b
              last:border-none
              hover:bg-gray-50
              "
            >
              <td
                className="
                px-5
                py-4
                font-medium
                text-slate-800
                "
              >
                {schedule.date}
              </td>

              <td>{schedule.time}</td>

              <td>
                <div
                  className="
                  font-semibold
                  text-slate-700
                  "
                >
                  {schedule.room}
                </div>

                <div
                  className="
                  text-xs
                  text-slate-400
                  "
                >
                  {schedule.building} · {schedule.floor} · {schedule.side}
                </div>
              </td>

              <td>
                <div className="font-medium">{schedule.module}</div>
              </td>

              <td
                className="
                text-slate-600
                "
              >
                {schedule.lecturer}
              </td>

              <td>
                <span
                  className={`
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  font-semibold

                  ${
                    schedule.status === "Scheduled"
                      ? "bg-green-100 text-green-600"
                      : schedule.status === "Rescheduled"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                  }

                  `}
                >
                  {schedule.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
