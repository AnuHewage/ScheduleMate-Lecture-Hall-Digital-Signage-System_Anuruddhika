export default function LecturerTable({ lecturers }) {
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
          Lecturers
        </h2>

        <button
          className="
          bg-[#0b1220]
          text-white
          px-4
          py-2
          rounded-lg
          text-sm
          font-semibold
          hover:bg-slate-800
          transition
          "
        >
          + Add Lecturer
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
            <th className="px-5 py-3">Employee ID</th>

            <th>Lecturer Name</th>

            <th>Department</th>

            <th>Email</th>

            <th>Phone</th>

            <th>Specialization</th>
          </tr>
        </thead>

        <tbody>
          {lecturers.map((lecturer) => (
            <tr
              key={lecturer.id}
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
                font-semibold
                text-slate-800
                "
              >
                {lecturer.employeeId}
              </td>

              <td
                className="
                font-medium
                text-slate-700
                "
              >
                {lecturer.name}
              </td>

              <td>{lecturer.department}</td>

              <td
                className="
                text-slate-500
                "
              >
                {lecturer.email}
              </td>

              <td
                className="
                text-slate-500
                "
              >
                {lecturer.phone}
              </td>

              <td>
                <span
                  className="
                  px-3
                  py-1
                  rounded-full
                  bg-purple-100
                  text-purple-600
                  text-xs
                  font-semibold
                  "
                >
                  {lecturer.specialization}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
