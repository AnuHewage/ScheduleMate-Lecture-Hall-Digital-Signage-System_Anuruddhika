import { useEffect, useState } from "react";

export default function RoomModal({ isOpen, onClose, room, onSave }) {
  const [building, setBuilding] = useState("Main Building");
  const [floor, setFloor] = useState("");
  const [side, setSide] = useState("");
  const [roomCode, setRoomCode] = useState(room?.roomCode || "");

  useEffect(() => {
    setBuilding(room?.building || "Main Building");

    setFloor(room?.floor || "");

    setSide(room?.side || "");
  }, [room]);

  useEffect(() => {
    if (!floor || !side) {
      setRoomCode("");
      return;
    }

    const buildingCode = building === "Main Building" ? "M" : "N";

    const floorNumber = floor.split(" ")[1];

    const sideCode = side.charAt(0);

    const generatedCode = `${buildingCode}${floorNumber}${sideCode}-L01`;

    setRoomCode(generatedCode);
  }, [building, floor, side]);

  if (!isOpen) return null;

  const floors =
    building === "Main Building"
      ? Array.from(
          { length: 10 },
          (_, i) => `Floor ${String(i + 1).padStart(2, "0")}`,
        )
      : Array.from(
          { length: 14 },
          (_, i) => `Floor ${String(i + 1).padStart(2, "0")}`,
        );

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
        w-[450px]
        rounded-lg
        shadow-lg
        "
      >
        {/* Header */}

        <div
          className="
          px-5
          py-4
          border-b
          flex
          justify-between
          "
        >
          <h2
            className="
            font-semibold
            text-slate-900
            "
          >
            {room ? "Edit Room" : "Add Room"}
          </h2>

          <button onClick={onClose} className="text-slate-500">
            ✕
          </button>
        </div>

        {/* Form */}

        <div
          className="
          p-5
          space-y-4
          "
        >
          {/* Room Code */}

          <div>
            <label className="text-sm text-slate-600">Room Code</label>

            <input
              value={roomCode}
              readOnly
              className="
 w-full
 border
 rounded-lg
 px-3
 py-2
 mt-1
 bg-gray-50
 "
              placeholder="Auto generated"
            />
          </div>

          {/* Building */}

          <div>
            <label className="text-sm text-slate-600">Building</label>

            <select
              value={building}
              onChange={(e) => {
                setBuilding(e.target.value);
                setFloor("");
                setSide("");
              }}
              className="
              w-full
              border
              rounded-lg
              px-3
              py-2
              mt-1
              "
            >
              <option>Main Building</option>

              <option>New Building</option>
            </select>
          </div>

          {/* Floor + Side */}

          <div
            className="
            flex
            gap-3
            "
          >
            <div className="flex-1">
              <label className="text-sm text-slate-600">Floor</label>

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
                <option value="">Select Floor</option>

                {floors.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <label className="text-sm text-slate-600">Side</label>

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
                <option value="">Select Side</option>

                {building === "Main Building" ? (
                  <>
                    <option>A Side</option>
                    <option>B Side</option>
                  </>
                ) : (
                  <>
                    <option>G Side</option>
                    <option>F Side</option>
                  </>
                )}
              </select>
            </div>
          </div>

          {/* Room Type */}

          <div>
            <label className="text-sm text-slate-600">Room Type</label>

            <select
              defaultValue={room?.type || ""}
              className="
              w-full
              border
              rounded-lg
              px-3
              py-2
              mt-1
              "
            >
              <option>Lecture Hall</option>

              <option>Laboratory</option>

              <option>Computer Lab</option>
            </select>
          </div>

          {/* Capacity */}

          <div>
            <label className="text-sm text-slate-600">Capacity</label>

            <input
              type="number"
              defaultValue={room?.capacity || ""}
              className="
              w-full
              border
              rounded-lg
              px-3
              py-2
              mt-1
              "
            />
          </div>

          {/* Status */}

          <div>
            <label className="text-sm text-slate-600">Status</label>

            <select
              defaultValue={room?.status || "Available"}
              className="
              w-full
              border
              rounded-lg
              px-3
              py-2
              mt-1
              "
            >
              <option>Available</option>

              <option>Occupied</option>

              <option>Unavailable</option>
            </select>
          </div>
        </div>

        {/* Footer */}

        <div
          className="
          px-5
          py-4
          border-t
          flex
          justify-end
          gap-3
          "
        >
          <button
            onClick={onClose}
            className="
            px-4
            py-2
            border
            rounded-lg
            text-sm
            "
          >
            Cancel
          </button>

          <button
            onClick={onSave}
            className="
            px-4
            py-2
            bg-[#0b1220]
            text-white
            rounded-lg
            text-sm
            "
          >
            Save Room
          </button>
        </div>
      </div>
    </div>
  );
}
