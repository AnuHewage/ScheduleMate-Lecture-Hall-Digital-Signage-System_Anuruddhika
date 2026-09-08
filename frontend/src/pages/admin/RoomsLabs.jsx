import { useState } from "react";

import RoomTable from "../../components/admin/RoomTable";
import RoomModal from "../../components/admin/RoomModal";
import { rooms as roomData } from "../../data/roomData";

import PageHeader from "../../components/admin/PageHeader";

export default function RoomsLabs() {
  const [rooms, setRooms] = useState(roomData);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedRoom, setSelectedRoom] = useState(null);

  // Add Room

  const handleAddRoom = () => {
    setSelectedRoom(null);

    setIsModalOpen(true);
  };

  // Edit Room

  const handleEditRoom = (room) => {
    setSelectedRoom(room);

    setIsModalOpen(true);
  };

  // Save Room

  const handleSaveRoom = () => {
    if (selectedRoom) {
      // update existing room

      setRooms(
        rooms.map((room) =>
          room.id === selectedRoom.id ? selectedRoom : room,
        ),
      );
    } else {
      // create new room

      const newRoom = {
        id: Date.now(),

        roomCode: "NEW-ROOM",

        building: "Main Building",

        floor: "Floor 01",

        side: "A",

        type: "Lecture Hall",

        capacity: 100,

        status: "Available",
      };

      setRooms([...rooms, newRoom]);
    }

    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}

      <PageHeader
        title="Rooms & Labs"
        description="Manage lecture halls, labs and room allocations"
      />

      {/* Filters */}

      <div
        className="
        bg-white
        border
        border-gray-200
        rounded-lg
        p-4
        flex
        gap-4
        "
      >
        <select
          className="
          border
          rounded-lg
          px-3
          py-2
          text-sm
          "
        >
          <option>All Buildings</option>

          <option>Main Building</option>

          <option>New Building</option>
        </select>

        <select
          className="
          border
          rounded-lg
          px-3
          py-2
          text-sm
          "
        >
          <option>All Floors</option>

          <option>Floor 05</option>

          <option>Floor 12</option>
        </select>

        <select
          className="
          border
          rounded-lg
          px-3
          py-2
          text-sm
          "
        >
          <option>All Sides</option>

          <option>A Side</option>

          <option>B Side</option>

          <option>G Side</option>

          <option>F Side</option>
        </select>

        <input
          placeholder="Search Room Code..."
          className="
          border
          rounded-lg
          px-3
          py-2
          text-sm
          flex-1
          "
        />
      </div>

      {/* Table */}

      <RoomTable rooms={rooms} onEdit={handleEditRoom} onAdd={handleAddRoom} />

      {/* Modal */}

      <RoomModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        room={selectedRoom}
        onSave={handleSaveRoom}
      />
    </div>
  );
}
