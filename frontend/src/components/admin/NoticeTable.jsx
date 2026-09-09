import { Pencil, Trash2 } from "lucide-react";

export default function NoticeTable({ notices, onEdit, onDelete }) {
  const badge = (value) => {
    switch (value) {
      case "Academic":
        return "bg-blue-100 text-blue-600";

      case "General":
        return "bg-slate-100 text-slate-600";

      case "Event":
        return "bg-orange-100 text-orange-600";

      case "Maintenance":
        return "bg-amber-100 text-amber-700";

      case "Emergency":
        return "bg-red-100 text-red-600";

      case "Active":
        return "bg-green-100 text-green-700";

      case "Scheduled":
        return "bg-indigo-100 text-indigo-600";

      default:
        return "bg-slate-200 text-slate-600";
    }
  };

  return (
    <div className="bg-white rounded-xl border overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-slate-50 text-slate-500">
          <tr>
            <th className="text-left px-5 py-3">Title</th>
            <th className="text-left">Type</th>
            <th className="text-left">Target</th>
            <th className="text-left">Status</th>
            <th className="text-left">Created By</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {notices.map((notice) => (
            <tr key={notice.id} className="border-t hover:bg-slate-50">
              <td className="px-5 py-4 font-medium">{notice.title}</td>

              <td>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${badge(
                    notice.type,
                  )}`}
                >
                  {notice.type}
                </span>
              </td>

              <td>{notice.target}</td>

              <td>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${badge(
                    notice.status,
                  )}`}
                >
                  {notice.status}
                </span>
              </td>

              <td>{notice.createdBy}</td>

              <td>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => onEdit(notice)}
                    className="text-blue-600"
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    onClick={() => onDelete(notice.id)}
                    className="text-red-600"
                  >
                    <Trash2 size={18} />
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
