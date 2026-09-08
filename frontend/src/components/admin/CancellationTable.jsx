export default function CancellationTable({ cancellations }) {
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
          Cancellations & Reschedules
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

            <th>Room</th>

            <th>Module</th>

            <th>Schedule Change</th>

            <th>Reason</th>

            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {cancellations.map((item) => (
            <tr
              key={item.id}
              className="
              border-b
              last:border-none
              hover:bg-gray-50
              "
            >
              {/* Date */}

              <td
                className="
                px-5
                py-4
                font-medium
                text-slate-800
                "
              >
                {item.date}
              </td>

              {/* Room */}

              <td>
                <p
                  className="
                  font-semibold
                  text-slate-700
                  "
                >
                  {item.room}
                </p>

                <p
                  className="
                  text-xs
                  text-slate-400
                  "
                >
                  {item.building} · {item.floor} · {item.side}
                </p>
              </td>

              {/* Module */}

              <td>
                <p
                  className="
                  font-medium
                  "
                >
                  {item.module}
                </p>

                <p
                  className="
                  text-xs
                  text-slate-500
                  "
                >
                  {item.lecturer}
                </p>
              </td>

              {/* Time Change */}

              <td>
                {item.type === "Cancelled" ? (
                  <span
                    className="
                    text-red-600
                    font-semibold
                    "
                  >
                    {item.oldTime}
                  </span>
                ) : (
                  <div
                    className="
                    text-xs
                    "
                  >
                    <p
                      className="
                      text-red-500
                      line-through
                      "
                    >
                      {item.oldTime}
                    </p>

                    <p
                      className="
                      text-green-600
                      font-semibold
                      mt-1
                      "
                    >
                      {item.newTime}
                    </p>
                  </div>
                )}
              </td>

              {/* Reason */}

              <td
                className="
                text-slate-500
                max-w-xs
                "
              >
                {item.reason}
              </td>

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
                    item.type === "Cancelled"
                      ? "bg-red-100 text-red-600"
                      : "bg-yellow-100 text-yellow-600"
                  }

                  `}
                >
                  {item.type}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
