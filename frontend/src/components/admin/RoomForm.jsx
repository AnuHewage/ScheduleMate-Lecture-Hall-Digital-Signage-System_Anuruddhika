export default function RoomForm({ room, setRoom, onSubmit, mode = "add" }) {
  const handleChange = (e) => {
    setRoom({
      ...room,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm text-slate-600">Room Code</label>

        <input
          name="roomCode"
          value={room.roomCode}
          onChange={handleChange}
          className="
          w-full
          border
          rounded-lg
          px-3
          py-2
          text-sm
          "
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-slate-600">Building</label>

          <select
            name="building"
            value={room.building}
            onChange={handleChange}
            className="
            w-full
            border
            rounded-lg
            px-3
            py-2
            "
          >
            <option>Main Building</option>

            <option>New Building</option>
          </select>
        </div>

        <div>
          <label className="text-sm text-slate-600">Floor</label>

          <input
            name="floor"
            value={room.floor}
            onChange={handleChange}
            className="
            w-full
            border
            rounded-lg
            px-3
            py-2
            "
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-slate-600">Side</label>

          <select
            name="side"
            value={room.side}
            onChange={handleChange}
            className="
            w-full
            border
            rounded-lg
            px-3
            py-2
            "
          >
            <option>A Side</option>
            <option>B Side</option>
            <option>G Side</option>
            <option>F Side</option>
          </select>
        </div>

        <div>
          <label className="text-sm text-slate-600">Type</label>

          <select
            name="type"
            value={room.type}
            onChange={handleChange}
            className="
            w-full
            border
            rounded-lg
            px-3
            py-2
            "
          >
            <option>Lecture Hall</option>

            <option>Laboratory</option>

            <option>Computer Lab</option>
          </select>
        </div>
      </div>

      <div>
        <label className="text-sm text-slate-600">Capacity</label>

        <input
          type="number"
          name="capacity"
          value={room.capacity}
          onChange={handleChange}
          className="
          w-full
          border
          rounded-lg
          px-3
          py-2
          "
        />
      </div>

      <div>
        <label className="text-sm text-slate-600">Status</label>

        <select
          name="status"
          value={room.status}
          onChange={handleChange}
          className="
          w-full
          border
          rounded-lg
          px-3
          py-2
          "
        >
          <option>Available</option>

          <option>Occupied</option>

          <option>Unavailable</option>
        </select>
      </div>

      <button
        onClick={onSubmit}
        className="
        w-full
        bg-[#0b1220]
        text-white
        py-2
        rounded-lg
        font-semibold
        "
      >
        {mode === "add" ? "Save Room" : "Update Room"}
      </button>
    </div>
  );
}
