export default function NoticeTable({ notices }) {
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
          Notices & Announcements
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
          + Add Notice
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
            <th className="px-5 py-3">Date</th>

            <th>Title</th>

            <th>Target</th>

            <th>Priority</th>

            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {notices.map((notice) => (
            <tr
              key={notice.id}
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
                {notice.date}
              </td>

              {/* Title */}

              <td>
                <p
                  className="
                  font-semibold
                  text-slate-800
                  "
                >
                  {notice.title}
                </p>

                <p
                  className="
                  text-xs
                  text-slate-500
                  mt-1
                  max-w-xs
                  "
                >
                  {notice.message}
                </p>
              </td>

              {/* Target */}

              <td
                className="
                text-slate-600
                "
              >
                {notice.target}
              </td>

              {/* Priority */}

              <td>
                <span
                  className={`
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  font-semibold

                  ${
                    notice.priority === "Urgent"
                      ? "bg-red-100 text-red-600"
                      : notice.priority === "Important"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-blue-100 text-blue-600"
                  }

                  `}
                >
                  {notice.priority}
                </span>
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
                    notice.status === "Published"
                      ? "bg-green-100 text-green-600"
                      : "bg-gray-100 text-gray-600"
                  }

                  `}
                >
                  {notice.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
