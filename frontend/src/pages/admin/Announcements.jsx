import NoticeTable from "../../components/admin/NoticeTable";
import { notices } from "../../data/noticeData";

export default function Announcements() {
  return (
    <div className="space-y-6">
      {/* Page Header */}

      <div
        className="
        flex
        justify-between
        items-center
        "
      >
        <div>
          <h1
            className="
            text-xl
            font-bold
            text-slate-900
            "
          >
            Notices & Announcements
          </h1>

          <p
            className="
            text-sm
            text-slate-500
            mt-1
            "
          >
            Manage announcements displayed on digital signage screens
          </p>
        </div>

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
          + Create Notice
        </button>
      </div>

      {/* Filters */}

      <div
        className="
        bg-white
        border
        border-gray-200
        rounded-lg
        p-4
        flex
        gap-4
        "
      >
        <select
          className="
          border
          rounded-lg
          px-3
          py-2
          text-sm
          text-slate-600
          "
        >
          <option>All Priority</option>

          <option>Urgent</option>

          <option>Important</option>

          <option>Normal</option>
        </select>

        <select
          className="
          border
          rounded-lg
          px-3
          py-2
          text-sm
          text-slate-600
          "
        >
          <option>All Status</option>

          <option>Published</option>

          <option>Draft</option>
        </select>

        <input
          type="date"
          className="
          border
          rounded-lg
          px-3
          py-2
          text-sm
          text-slate-600
          "
        />
      </div>

      {/* Table */}

      <NoticeTable notices={notices} />
    </div>
  );
}
