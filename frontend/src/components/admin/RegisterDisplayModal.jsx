import { useState } from "react";

export default function RegisterDisplayModal({ onClose, onSave }) {
  const [formData, setFormData] = useState({
    deviceId: "",
    building: "",
    floor: "",
    side: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = () => {
    const newDevice = {
      id: Date.now(),

      deviceId: formData.deviceId,

      label: `${formData.floor} · ${formData.side}`,

      building: formData.building,

      floor: formData.floor,

      side: formData.side,

      status: "Online",

      lastSynced: "Just now",

      currentSlide: "Upcoming",
    };

    onSave(newDevice);

    onClose();
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
rounded-xl
w-[450px]
p-6
shadow-xl
"
      >
        <h2
          className="
text-lg
font-semibold
text-slate-900
"
        >
          Register New Display
        </h2>

        <p
          className="
text-sm
text-slate-500
mt-1
"
        >
          Add a new digital signage device
        </p>

        <div
          className="
mt-5
space-y-4
"
        >
          <input
            name="deviceId"
            value={formData.deviceId}
            onChange={handleChange}
            placeholder="Device ID (DEV-M05A)"
            className="
w-full
border
rounded-lg
px-3
py-2
"
          />

          <select
            name="building"
            value={formData.building}
            onChange={handleChange}
            className="
w-full
border
rounded-lg
px-3
py-2
"
          >
            <option value="">Select Building</option>

            <option>Main Building</option>

            <option>New Building</option>
          </select>

          <input
            name="floor"
            value={formData.floor}
            onChange={handleChange}
            placeholder="Floor (Floor 05)"
            className="
w-full
border
rounded-lg
px-3
py-2
"
          />

          <select
            name="side"
            value={formData.side}
            onChange={handleChange}
            className="
w-full
border
rounded-lg
px-3
py-2
"
          >
            <option value="">Select Side</option>

            <option>A Side</option>

            <option>B Side</option>

            <option>G Side</option>

            <option>F Side</option>
          </select>
        </div>

        <div
          className="
mt-6
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
            onClick={handleRegister}
            className="
bg-[#0b1220]
text-white
px-4
py-2
rounded-lg
text-sm
font-semibold
"
          >
            Register Display
          </button>
        </div>
      </div>
    </div>
  );
}
