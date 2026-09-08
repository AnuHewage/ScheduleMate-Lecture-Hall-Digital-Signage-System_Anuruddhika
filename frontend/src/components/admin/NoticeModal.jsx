import { useEffect, useState } from "react";

export default function NoticeModal({ isOpen, onClose, notice, onSave }) {
  const empty = {
    title: "",
    message: "",
    type: "General",
    target: "All Displays",
    status: "Active",
  };

  const [form, setForm] = useState(empty);

  useEffect(() => {
    if (notice) {
      setForm(notice);
    } else {
      setForm(empty);
    }
  }, [notice]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
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
        <div
          className="
px-6
py-4
border-b
flex
justify-between
"
        >
          <h2 className="font-semibold">
            {notice ? "Edit Notice" : "Create Notice"}
          </h2>

          <button onClick={onClose}>✕</button>
        </div>

        <div
          className="
p-6
space-y-4
"
        >
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Notice Title"
            className="
w-full
border
rounded-lg
px-3
py-2
"
          />

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="
w-full
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

          <select
            name="target"
            value={form.target}
            onChange={handleChange}
            className="
w-full
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

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Notice message"
            rows="4"
            className="
w-full
border
rounded-lg
px-3
py-2
"
          />

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="
w-full
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
"
          >
            Cancel
          </button>

          <button
            onClick={() => onSave(form)}
            className="
bg-[#0b1220]
text-white
px-4
py-2
rounded-lg
"
          >
            Save Notice
          </button>
        </div>
      </div>
    </div>
  );
}
