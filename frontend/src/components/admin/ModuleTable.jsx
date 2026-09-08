export default function ModuleTable({ modules }) {
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
          Modules
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
          + Add Module
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
            <th className="px-5 py-3">Module Code</th>

            <th>Module Name</th>

            <th>Department</th>

            <th>Credits</th>

            <th>Semester</th>
          </tr>
        </thead>

        <tbody>
          {modules.map((module) => (
            <tr
              key={module.id}
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
                {module.code}
              </td>

              <td>{module.name}</td>

              <td>{module.department}</td>

              <td>{module.credits}</td>

              <td>
                <span
                  className="
                  px-3
                  py-1
                  rounded-full
                  bg-blue-100
                  text-blue-600
                  text-xs
                  font-semibold
                  "
                >
                  {module.semester}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
