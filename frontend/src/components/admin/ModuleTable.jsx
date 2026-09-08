import { Trash2 } from "lucide-react";

export default function ModuleTable({ modules, onEdit, onDelete }) {
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
          Modules
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
            <th className="px-5 py-3">Module Code</th>

            <th>Module Name</th>

            <th>Department</th>

            <th>Primary Lecturer</th>

            <th>Sessions / Week</th>

            <th>Type</th>

            <th>Status</th>

            <th>Actions</th>
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
              {/* Code */}

              <td
                className="
                  px-5
                  py-4
                  font-semibold
                  text-slate-800
                  "
              >
                {module.moduleCode}
              </td>

              {/* Name */}

              <td>
                <div
                  className="
                    font-medium
                    text-slate-700
                    "
                >
                  {module.moduleName}
                </div>
              </td>

              {/* Department */}

              <td>{module.department}</td>

              {/* Lecturer */}

              <td
                className="
                  text-slate-600
                  "
              >
                {module.primaryLecturer}
              </td>

              {/* Sessions */}
              <td
                className="
  text-slate-700
  font-medium
  "
              >
                {module.sessionsPerWeek}
              </td>

              {/* Type */}

              <td
                className="
 text-slate-600
 "
              >
                {module.sessionTypes.join(" / ")}
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
                      module.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }

                    `}
                >
                  {module.status}
                </span>
              </td>

              {/* Actions */}

              <td>
                <div
                  className="
 flex
 items-center
 gap-4
 "
                >
                  <button
                    onClick={() => onEdit(module)}
                    className="
 text-blue-600
 hover:text-blue-800
 text-sm
 font-medium
 "
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(module.id)}
                    className="
 text-red-500
 hover:text-red-700
 "
                    title="Delete Module"
                  >
                    <Trash2 size={17} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
