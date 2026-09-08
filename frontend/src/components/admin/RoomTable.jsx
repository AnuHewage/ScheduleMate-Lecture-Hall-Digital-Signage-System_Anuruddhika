export default function RoomTable({ rooms, onEdit, onAdd }) {
  return (
    <div
      className="
      bg-white
      border
      border-gray-200
      rounded-lg
      overflow-hidden
      "
    >
      {/* Header */}

      <div
        className="
        px-5
        py-4
        border-b
        border-gray-200
        flex
        justify-between
        items-center
        "
      >
        <h2 className="font-semibold text-slate-900">Rooms & Labs</h2>

        <button
          onClick={onAdd}
          className="
  bg-[#0b1220]
  text-white
  px-4
  py-2
  rounded-lg
  text-sm
  font-semibold
  hover:bg-slate-800
  transition
  "
        >
          + Add Room
        </button>
      </div>

      {/* Table */}

      <table className="w-full text-sm">
        <thead>
          <tr
            className="
            text-left
            text-xs
            text-slate-400
            border-b
            "
          >
            <th className="px-5 py-3">Room Code</th>

            <th>Building</th>

            <th>Floor</th>

            <th>Side</th>

            <th>Type</th>

            <th>Capacity</th>

            <th>Status</th>

            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {rooms.map((room) => (
            <tr
              key={room.id}
              className="
              border-b
              last:border-none
              hover:bg-gray-50
              "
            >
              <td
                className="
                px-5
                py-4
                font-semibold
                text-slate-800
                "
              >
                {room.roomCode}
              </td>

              <td>{room.building}</td>

              <td>{room.floor}</td>

              <td>{room.side}</td>

              <td>{room.type}</td>

              <td>{room.capacity}</td>

              <td>
                <span
                  className={`
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  font-semibold

                  ${
                    room.status === "Available"
                      ? "bg-green-100 text-green-600"
                      : room.status === "Occupied"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-red-100 text-red-600"
                  }

                  `}
                >
                  {room.status}
                </span>
              </td>

              {/* Action */}

              <td>
                <button
                  onClick={() => onEdit(room)}
                  className="
                  text-blue-600
                  text-sm
                  font-semibold
                  hover:underline
                  "
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
