import { useState } from "react";

import PageHeader from "../../components/admin/PageHeader";
import RoomStatusCard from "../../components/admin/RoomStatusCard";

import { liveRoomStatusData } from "../../data/liveRoomStatusData";

export default function LiveRoomStatus() {
  const [building, setBuilding] = useState("Main Building");

  const [floor, setFloor] = useState("Floor 5");

  const [side, setSide] = useState("Both Sides");

  const filteredRooms = liveRoomStatusData.filter((room) => {
    return (
      room.building === building &&
      room.floor === floor &&
      (side === "Both Sides" || room.side === side)
    );
  });

  const summary = {
    "Ongoing Now": filteredRooms.filter((r) => r.status === "Ongoing Now")
      .length,

    "Upcoming Soon": filteredRooms.filter((r) => r.status === "Upcoming Soon")
      .length,

    Available: filteredRooms.filter((r) => r.status === "Available").length,

    "Temporarily Unavailable": filteredRooms.filter(
      (r) => r.status === "Temporarily Unavailable",
    ).length,
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Live Room Status"
        description="Real-time room availability and active lecture sessions."
      />

      <div
        className="
bg-white
rounded-xl
border
p-4
flex
gap-4
"
      >
        <select
          value={building}
          onChange={(e) => setBuilding(e.target.value)}
          className="border rounded-lg px-4 py-2 text-sm"
        >
          <option>Main Building</option>
          <option>New Building</option>
        </select>

        <select
          value={floor}
          onChange={(e) => setFloor(e.target.value)}
          className="border rounded-lg px-4 py-2 text-sm"
        >
          <option>Floor 5</option>
          <option>Floor 12</option>
          <option>Floor 14</option>
        </select>

        <select
          value={side}
          onChange={(e) => setSide(e.target.value)}
          className="border rounded-lg px-4 py-2 text-sm"
        >
          <option>Both Sides</option>
          <option>A Side</option>
          <option>B Side</option>
        </select>
      </div>

      <div
        className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-4
gap-4
"
      >
        {Object.entries(summary).map(([key, value]) => (
          <div
            key={key}
            className="
bg-white
rounded-xl
p-5
shadow-sm
"
          >
            <h2 className="text-2xl font-bold text-slate-900">{value}</h2>

            <p className="text-sm text-slate-500 mt-1">{key}</p>
          </div>
        ))}
      </div>

      <div
        className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-4
gap-4
"
      >
        {filteredRooms.map((room) => (
          <RoomStatusCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
}
