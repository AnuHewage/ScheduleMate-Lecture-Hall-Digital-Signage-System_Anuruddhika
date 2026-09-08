export default function CancelledTable({ sessions }) {
  return (
    <div
      className="
      bg-white
      border
      rounded-xl
      overflow-hidden
      "
    >
      <div
        className="
        px-5
        py-4
        border-b
        "
      >
        <h2 className="font-semibold text-slate-900">Cancelled Sessions</h2>
      </div>

      <table className="w-full text-sm">
        <thead>
          <tr
            className="
            text-left
            text-xs
            text-slate-400
            border-b
            "
          >
            <th className="px-5 py-3">Module</th>

            <th>Date</th>

            <th>Time</th>

            <th>Room</th>

            <th>Lecturer</th>

            <th>Cancelled By</th>

            <th>Reason</th>

            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {sessions.map((item) => (
            <tr
              key={item.id}
              className="
              border-b
              hover:bg-gray-50
              "
            >
              <td className="px-5 py-4 font-semibold">{item.module}</td>

              <td>{item.date}</td>

              <td>{item.time}</td>

              <td>{item.room}</td>

              <td>{item.lecturer}</td>

              <td>{item.cancelledBy}</td>

              <td>{item.reason}</td>

              <td>
                <button
                  className="
                  text-green-600
                  text-sm
                  font-medium
                  "
                >
                  Restore
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
