import { Trash2 } from "lucide-react";

export default function NoticeTable({ notices, onEdit, onDelete }) {
  const typeStyle = {
    General: "bg-slate-100 text-slate-600",
    Academic: "bg-blue-100 text-blue-600",
    Event: "bg-orange-100 text-orange-600",
    Maintenance: "bg-amber-100 text-amber-700",
    Emergency: "bg-red-100 text-red-600",
  };

  const statusStyle = {
    Active: "bg-emerald-100 text-emerald-700",
    Scheduled: "bg-indigo-100 text-indigo-600",
    Expired: "bg-slate-200 text-slate-500",
  };

  return (
    <div className="bg-white rounded-xl border overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr
            className="
border-b
text-xs
uppercase
text-slate-400
"
          >
            <th className="px-6 py-3 text-left">Title</th>

            <th className="px-6 py-3">Type</th>

            <th className="px-6 py-3">Target</th>

            <th className="px-6 py-3">Status</th>

            <th className="px-6 py-3">Created By</th>

            <th></th>
          </tr>
        </thead>

        <tbody>
          {notices.map((notice) => (
            <tr
              key={notice.id}
              className="
border-b
hover:bg-slate-50
"
            >
              <td
                className="
px-6
py-4
font-medium
text-slate-800
"
              >
                {notice.title}
              </td>

              <td className="px-6 py-4">
                <span
                  className={`
px-3
py-1
rounded-full
text-xs
font-semibold
${typeStyle[notice.type]}
`}
                >
                  {notice.type}
                </span>
              </td>

              <td
                className="
px-6
py-4
text-slate-600
"
              >
                {notice.target}
              </td>

              <td className="px-6 py-4">
                <span
                  className={`
px-3
py-1
rounded-full
text-xs
font-semibold
${statusStyle[notice.status]}
`}
                >
                  {notice.status}
                </span>
              </td>

              <td
                className="
px-6
py-4
text-slate-600
"
              >
                {notice.createdBy}
              </td>

              <td
                className="
px-6
py-4
flex
gap-4
justify-end
"
              >
                <button
                  onClick={() => onEdit(notice)}
                  className="
text-blue-600
text-sm
font-medium
"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(notice.id)}
                  className="
text-red-500
hover:text-red-700
"
                >
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
