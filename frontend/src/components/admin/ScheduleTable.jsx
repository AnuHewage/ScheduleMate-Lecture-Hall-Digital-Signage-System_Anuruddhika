export default function ScheduleTable({ schedules, onCancel, onReschedule }) {
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

            <th>Day</th>

            <th>Time</th>

            <th>Module</th>

            <th>Type</th>

            <th>Room</th>

            <th>Lecturer</th>

            <th>Status</th>

            <th>Action</th>
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

              <td>{schedule.day}</td>

              <td>{schedule.time}</td>

              <td>
                <span
                  className="
                    font-medium
                    text-slate-800
                    "
                >
                  {schedule.module}
                </span>
              </td>

              <td>{schedule.type}</td>

              <td>
                <span
                  className="
                    font-semibold
                    text-slate-700
                    "
                >
                  {schedule.room}
                </span>
              </td>

              <td>{schedule.lecturer}</td>

              {/* Status */}

              <td>
                <span
                  className={`

                    px-3
                    py-1
                    rounded-full
                    text-xs
                    font-semibold


                    ${
                      schedule.status === "Ongoing"
                        ? "bg-blue-100 text-blue-600"
                        : schedule.status === "Scheduled"
                          ? "bg-green-100 text-green-600"
                          : schedule.status === "Cancelled"
                            ? "bg-red-100 text-red-600"
                            : schedule.status === "Rescheduled"
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-gray-100 text-gray-600"
                    }

                    `}
                >
                  {schedule.status}
                </span>
              </td>

              {/* Action */}

              <td className="px-4">
                {schedule.status === "Cancelled" ? (
                  <button
                    className="
      text-green-600
      text-sm
      font-semibold
      "
                  >
                    Restore
                  </button>
                ) : schedule.status === "Completed" ? (
                  <span>-</span>
                ) : (
                  <div className="flex gap-3">
                    <button
                      onClick={() => onReschedule(schedule)}
                      className="
        text-blue-600
        text-sm
        font-semibold
        "
                    >
                      Reschedule
                    </button>

                    <button
                      onClick={() => onCancel(schedule)}
                      className="
        text-red-500
        text-sm
        font-semibold
        "
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
