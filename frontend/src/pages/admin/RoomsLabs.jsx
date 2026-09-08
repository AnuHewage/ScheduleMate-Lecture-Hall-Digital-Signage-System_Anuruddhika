import RoomTable from "../../components/admin/RoomTable";
import { rooms } from "../../data/roomData";

export default function RoomsLabs() {
  return (
    <div
      className="
      space-y-6
      "
    >
      {/* Page Header */}

      <div>
        <h1
          className="
          text-2xl
          font-bold
          text-slate-900
          "
        >
          Rooms & Labs
        </h1>

        <p
          className="
          text-sm
          text-slate-500
          mt-1
          "
        >
          Manage lecture halls, laboratories and room availability
        </p>
      </div>

      {/* Room Table */}

      <RoomTable rooms={rooms} />
    </div>
  );
}
