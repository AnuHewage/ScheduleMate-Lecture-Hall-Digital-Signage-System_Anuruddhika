import { useState } from "react";

import PageHeader from "../../components/admin/PageHeader";
import NoticeTable from "../../components/admin/NoticeTable";
import NoticeModal from "../../components/admin/NoticeModal";

import { notices as initialNotices } from "../../data/noticeData";

export default function NoticesAnnouncements() {
  const [notices, setNotices] = useState(initialNotices);

  const [open, setOpen] = useState(false);

  const [selected, setSelected] = useState(null);

  const handleSave = (data) => {
    if (selected) {
      setNotices(
        notices.map((n) =>
          n.id === selected.id ? { ...selected, ...data } : n,
        ),
      );
    } else {
      setNotices([
        ...notices,
        {
          id: Date.now(),
          ...data,
          createdBy: "Admin - S. Jayalal",
        },
      ]);
    }

    setOpen(false);
    setSelected(null);
  };

  const handleEdit = (notice) => {
    setSelected(notice);
    setOpen(true);
  };

  const handleDelete = (id) => {
    setNotices(notices.filter((n) => n.id !== id));
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Notices & Announcements"
        description="Manage announcements displayed on digital signage"
        actionText="New Notice"
        actionPath="#"
      />

      <div
        className="
bg-red-900
text-white
rounded-xl
p-5
flex
justify-between
items-center
"
      >
        <div>
          <h2 className="font-semibold">Emergency Announcement</h2>

          <p className="text-sm text-red-200">
            Broadcast immediately to all displays.
          </p>
        </div>

        <button
          className="
bg-red-500
px-4
py-2
rounded-lg
"
        >
          + Broadcast Emergency
        </button>
      </div>

      <NoticeTable
        notices={notices}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <NoticeModal
        isOpen={open}
        notice={selected}
        onClose={() => {
          setOpen(false);
          setSelected(null);
        }}
        onSave={handleSave}
      />
    </div>
  );
}
