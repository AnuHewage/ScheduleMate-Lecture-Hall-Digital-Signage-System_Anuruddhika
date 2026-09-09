import { useState } from "react";

export default function RescheduleSessionModal({
  session,
  onClose,
  onConfirm,
}) {
  const [form, setForm] = useState({
    day: "",
    room: "",
    startTime: "",
    endTime: "",
    reason: "",
  });

  if (!session) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleConfirm = () => {
    onConfirm({
      ...session,
      ...form,
    });
  };

  return (
    <div
      className="
fixed
inset-0
z-50
flex
items-center
justify-center
bg-slate-900/50
p-4
"
    >
      <div
        className="
w-full
max-w-lg
bg-white
rounded-2xl
shadow-xl
"
      >
        <div
          className="
h-1
bg-amber-500
rounded-t-2xl
"
        />

        <div
          className="
px-6
py-5
border-b
flex
justify-between
"
        >
          <div>
            <h2
              className="
text-lg
font-semibold
"
            >
              Reschedule session
            </h2>

            <p
              className="
text-sm
text-slate-500
"
            >
              Move this session to a new day, time or room.
            </p>
          </div>

          <button onClick={onClose}>✕</button>
        </div>

        <div
          className="
px-6
py-5
space-y-4
"
        >
          <div
            className="
bg-slate-50
rounded-xl
p-4
text-sm
"
          >
            <p className="font-semibold">{session.module}</p>

            <p>
              {session.day} · {session.time}
            </p>

            <p>
              {session.room} · {session.lecturer}
            </p>
          </div>

          <h3
            className="
text-xs
font-semibold
text-amber-600
"
          >
            NEW SCHEDULE
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <input
              name="day"
              placeholder="New Day"
              onChange={handleChange}
              className="border rounded-lg px-3 py-2"
            />

            <input
              name="room"
              placeholder="New Room"
              onChange={handleChange}
              className="border rounded-lg px-3 py-2"
            />

            <input
              name="startTime"
              placeholder="Start Time"
              onChange={handleChange}
              className="border rounded-lg px-3 py-2"
            />

            <input
              name="endTime"
              placeholder="End Time"
              onChange={handleChange}
              className="border rounded-lg px-3 py-2"
            />
          </div>

          <input
            name="reason"
            placeholder="Reason for reschedule"
            onChange={handleChange}
            className="
w-full
border
rounded-lg
px-3
py-2
"
          />

          <div
            className="
bg-amber-50
rounded-lg
p-3
text-sm
text-amber-700
"
          >
            Displays update instantly
          </div>
        </div>

        <div
          className="
flex
gap-3
border-t
px-6
py-5
"
        >
          <button
            onClick={onClose}
            className="
flex-1
border
rounded-lg
py-2
"
          >
            Cancel
          </button>

          <button
            onClick={handleConfirm}
            className="
flex-1
bg-amber-500
text-white
rounded-lg
py-2
"
          >
            Confirm reschedule
          </button>
        </div>
      </div>
    </div>
  );
}
