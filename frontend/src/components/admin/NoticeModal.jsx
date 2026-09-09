import { useEffect, useState } from "react";

export default function NoticeModal({ isOpen, onClose, notice, onSave }) {
  const emptyForm = {
    title: "",
    message: "",
    type: "General",
    target: "All Displays",
    status: "Active",
    createdBy: "Admin",
  };

  const [formData, setFormData] = useState(emptyForm);

  useEffect(() => {
    if (notice) {
      setFormData(notice);
    } else {
      setFormData(emptyForm);
    }
  }, [notice]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className="
fixed
inset-0
bg-black/40
flex
items-center
justify-center
z-50
"
    >
      <div
        className="
bg-white
w-[500px]
rounded-xl
shadow-xl
"
      >
        {/* Header */}

        <div
          className="
px-6
py-4
border-b
flex
justify-between
"
        >
          <h2
            className="
font-semibold
text-lg
"
          >
            {notice ? "Edit Notice" : "Create Notice"}
          </h2>

          <button onClick={onClose} className="text-slate-500">
            ✕
          </button>
        </div>

        {/* Form */}

        <div
          className="
p-6
space-y-4
"
        >
          <div>
            <label className="text-sm text-slate-600">Title</label>

            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Notice title"
              className="
w-full
mt-1
border
rounded-lg
px-3
py-2
"
            />
          </div>

          <div>
            <label className="text-sm text-slate-600">Message</label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter notice message"
              rows="4"
              className="
w-full
mt-1
border
rounded-lg
px-3
py-2
"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-600">Type</label>

              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="
w-full
mt-1
border
rounded-lg
px-3
py-2
"
              >
                <option>General</option>
                <option>Academic</option>
                <option>Event</option>
                <option>Maintenance</option>
                <option>Emergency</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-slate-600">Target</label>

              <select
                name="target"
                value={formData.target}
                onChange={handleChange}
                className="
w-full
mt-1
border
rounded-lg
px-3
py-2
"
              >
                <option>All Displays</option>
                <option>Main Building - All Floors</option>
                <option>New Building - All Floors</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm text-slate-600">Status</label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="
w-full
mt-1
border
rounded-lg
px-3
py-2
"
            >
              <option>Active</option>
              <option>Scheduled</option>
              <option>Expired</option>
            </select>
          </div>
        </div>

        {/* Footer */}

        <div
          className="
border-t
px-6
py-4
flex
justify-end
gap-3
"
        >
          <button
            onClick={onClose}
            className="
border
px-4
py-2
rounded-lg
text-sm
"
          >
            Cancel
          </button>

          <button
            onClick={() => onSave(formData)}
            className="
bg-[#0b1220]
text-white
px-4
py-2
rounded-lg
text-sm
"
          >
            Save Notice
          </button>
        </div>
      </div>
    </div>
  );
}
