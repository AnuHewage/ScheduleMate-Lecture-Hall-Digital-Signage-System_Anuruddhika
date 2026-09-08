export default function RescheduledTable({ sessions }) {
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
        <h2 className="font-semibold text-slate-900">Rescheduled Sessions</h2>
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

            <th>Original</th>

            <th>New Schedule</th>

            <th>Room</th>

            <th>Lecturer</th>

            <th>Changed By</th>

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

              <td>
                {item.oldDate}
                <br />

                {item.oldTime}
              </td>

              <td>
                {item.newDate}
                <br />

                {item.newTime}
              </td>

              <td>{item.room}</td>

              <td>{item.lecturer}</td>

              <td>{item.changedBy}</td>

              <td>
                <button
                  className="
text-blue-600
text-sm
font-medium
"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
