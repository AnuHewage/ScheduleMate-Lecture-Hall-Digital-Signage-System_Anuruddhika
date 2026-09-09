import { useEffect, useState } from "react";

const buildingOptions = ["Main Building", "New Building"];

const floorOptions = ["Floor 05", "Floor 12", "Floor 14"];

const sideOptions = ["A Side", "F Side", "G Side"];

const durationOptions = ["5 seconds", "7 seconds", "10 seconds", "15 seconds"];

export default function ConfigureDisplayModal({ device, onClose, onSave }) {
  const [deviceId, setDeviceId] = useState(device?.deviceId || "DEV-N12G");

  const [building, setBuilding] = useState(device?.building || "New Building");

  const [floor, setFloor] = useState(device?.floor || "Floor 12");

  const [side, setSide] = useState(device?.side || "G Side");

  const [duration, setDuration] = useState(device?.duration || "7 seconds");

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString("en-GB");

  const handleSave = () => {
    onSave?.({
      deviceId,
      building,
      floor,
      side,
      duration,
    });

    onClose();
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
rounded-2xl
bg-white
shadow-xl
"
      >
        {/* Header */}

        <div
          className="
flex
justify-between
border-b
px-7
py-5
"
        >
          <div>
            <h2
              className="
text-lg
font-semibold
text-slate-900
"
            >
              Configure Display
            </h2>

            <p
              className="
text-sm
text-slate-500
mt-1
"
            >
              Assign monitor location and display settings
            </p>
          </div>

          <button
            onClick={onClose}
            className="
w-8
h-8
rounded-full
bg-slate-100
text-slate-500
"
          >
            ✕
          </button>
        </div>

        {/* Body */}

        <div
          className="
px-7
py-6
space-y-5
"
        >
          <div>
            <label
              className="
text-xs
font-semibold
text-slate-400
"
            >
              Device ID
            </label>

            <input
              value={deviceId}
              readOnly
              className="
w-full
mt-2
border
rounded-lg
px-3
py-2
bg-slate-50
"
            />
          </div>

          <div
            className="
grid
grid-cols-2
gap-4
"
          >
            <div>
              <label>Building</label>

              <select
                value={building}
                onChange={(e) => setBuilding(e.target.value)}
                className="
w-full
border
rounded-lg
px-3
py-2
mt-1
"
              >
                {buildingOptions.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>

            <div>
              <label>Floor</label>

              <select
                value={floor}
                onChange={(e) => setFloor(e.target.value)}
                className="
w-full
border
rounded-lg
px-3
py-2
mt-1
"
              >
                {floorOptions.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>

          <div
            className="
grid
grid-cols-2
gap-4
"
          >
            <div>
              <label>Side</label>

              <select
                value={side}
                onChange={(e) => setSide(e.target.value)}
                className="
w-full
border
rounded-lg
px-3
py-2
mt-1
"
              >
                {sideOptions.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>

            <div>
              <label>Slide Duration</label>

              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="
w-full
border
rounded-lg
px-3
py-2
mt-1
"
              >
                {durationOptions.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Preview */}

          <div>
            <label
              className="
text-xs
font-semibold
text-slate-400
"
            >
              Preview
            </label>

            <div
              className="
mt-2
bg-[#0b1220]
rounded-xl
p-5
"
            >
              <div
                className="
text-yellow-400
text-xs
font-semibold
"
              >
                ● SCHEDULEMATE · SPARKLINE ACADEMY
              </div>

              <div
                className="
flex
justify-between
mt-3
"
              >
                <h3
                  className="
text-white
font-semibold
"
                >
                  {building}
                  <br />
                  {floor} · {side}
                </h3>

                <span
                  className="
text-white
font-mono
"
                >
                  {formattedTime}
                </span>
              </div>

              <div
                className="
flex
gap-2
mt-4
"
              >
                <span
                  className="
bg-slate-700
text-white
px-3
py-2
rounded-lg
text-xs
"
                >
                  Lecture Hall 01
                </span>

                <span
                  className="
bg-slate-700
text-white
px-3
py-2
rounded-lg
text-xs
"
                >
                  Lecture Hall 02
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}

        <div
          className="
border-t
px-7
py-5
flex
gap-3
"
        >
          <button
            onClick={onClose}
            className="
flex-1
border
rounded-lg
py-2
text-sm
"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="
flex-1
bg-[#0b1220]
text-white
rounded-lg
py-2
text-sm
font-semibold
"
          >
            Save & Sync
          </button>
        </div>
      </div>
    </div>
  );
}
