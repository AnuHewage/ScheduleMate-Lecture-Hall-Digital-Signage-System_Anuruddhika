import { useState } from "react";

import PageHeader from "../../components/admin/PageHeader";
import NoticeTable from "../../components/admin/NoticeTable";
import NoticeModal from "../../components/admin/NoticeModal";
import EmergencyBroadcastModal from "../../components/admin/EmergencyBroadcastModal";

import { noticeList } from "../../data/noticeData";

export default function NoticesAnnouncements() {
  const [notices, setNotices] = useState(noticeList);

  const [selectedNotice, setSelectedNotice] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);

  // Save Notice

  const handleSave = (notice) => {
    if (selectedNotice) {
      setNotices(
        notices.map((n) =>
          n.id === selectedNotice.id
            ? {
                ...notice,
                id: selectedNotice.id,
              }
            : n,
        ),
      );
    } else {
      setNotices([
        ...notices,

        {
          ...notice,
          id: Date.now(),
        },
      ]);
    }

    setIsModalOpen(false);

    setSelectedNotice(null);
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Notices & Announcements"
        description="Manage messages displayed on digital signage."
        actionText="New Notice"
        onAction={() => {
          setSelectedNotice(null);

          setIsModalOpen(true);
        }}
      />

      {/* Emergency Banner */}

      <div
        className="
      bg-red-900
      rounded-xl
      p-6
      flex
      justify-between
      items-center
      "
      >
        <div>
          <h2 className="text-white font-semibold">Emergency Announcement</h2>

          <p className="text-red-100 text-sm mt-1">
            Broadcast immediately to all connected displays.
          </p>
        </div>

        <button
          onClick={() => setIsEmergencyModalOpen(true)}
          className="
        bg-red-500
        text-white
        px-4
        py-2
        rounded-lg
        "
        >
          Broadcast Emergency
        </button>
      </div>

      {/* Notice Table */}

      <NoticeTable
        notices={notices}
        onEdit={(notice) => {
          setSelectedNotice(notice);

          setIsModalOpen(true);
        }}
        onDelete={(id) => {
          const confirmDelete = window.confirm(
            "Are you sure you want to delete this notice?",
          );

          if (confirmDelete) {
            setNotices(notices.filter((n) => n.id !== id));
          }
        }}
      />

      {/* Notice Modal */}

      <NoticeModal
        isOpen={isModalOpen}
        notice={selectedNotice}
        onClose={() => {
          setIsModalOpen(false);

          setSelectedNotice(null);
        }}
        onSave={handleSave}
      />

      {/* Emergency Modal */}

      <EmergencyBroadcastModal
        isOpen={isEmergencyModalOpen}
        onClose={() => setIsEmergencyModalOpen(false)}
        onBroadcast={(data) => {
          console.log("Emergency Broadcast:", data);

          alert("Emergency announcement broadcasted!");
        }}
      />
    </div>
  );
}
