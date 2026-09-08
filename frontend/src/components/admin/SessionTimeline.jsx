import { ChevronRight } from "lucide-react";

export default function SessionTimeline({ sessions }) {
  return (
    <div
      className="
        bg-white
        rounded-lg
        border
        border-gray-200
      "
    >
      {/* Header */}

      <div
        className="
          px-5
          py-4
          border-b
          flex
          justify-between
          items-center
        "
      >
        <h2
          className="
            font-semibold
            text-slate-900
          "
        >
          Today's Session Timeline
        </h2>

        <button
          className="
            flex
            items-center
            gap-1
            text-sm
            font-semibold
            text-blue-600
            hover:text-blue-800
          "
        >
          View full schedule
          <ChevronRight size={15} />
        </button>
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
            <th className="px-5 py-3">Time</th>

            <th>Room</th>

            <th>Module</th>

            <th>Lecturer</th>

            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {sessions.map((session) => (
            <tr
              key={session.room}
              className="
                border-b
                last:border-none
              "
            >
              <td className="px-5 py-4 font-medium">{session.time}</td>

              <td>{session.room}</td>

              <td>{session.module}</td>

              <td>{session.lecturer}</td>

              <td>
                <span
                  className={`
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    font-semibold

                    ${
                      session.status === "Ongoing"
                        ? "bg-green-100 text-green-600"
                        : session.status === "Upcoming"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-red-100 text-red-600"
                    }
                  `}
                >
                  {session.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
