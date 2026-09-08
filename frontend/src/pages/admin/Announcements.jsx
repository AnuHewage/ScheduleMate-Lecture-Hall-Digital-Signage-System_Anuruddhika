import NoticeTable from "../../components/admin/NoticeTable";
import { notices } from "../../data/noticeData";
import PageHeader from "../../components/admin/PageHeader";

export default function Announcements() {
  return (
    <div className="space-y-6">
      {/* Page Header */}

      <PageHeader
        title="Notices & Announcements"
        description="Manage academy announcements and notices"
        actionText="Add Notice"
      />
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
