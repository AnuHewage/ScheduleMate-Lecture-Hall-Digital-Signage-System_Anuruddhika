import { useState } from "react";
import ScheduleTable from "../../components/admin/ScheduleTable";
import { schedules } from "../../data/scheduleData";
import PageHeader from "../../components/admin/PageHeader";


export default function ScheduleManagement() {


  const [building, setBuilding] = useState("All Buildings");
  const [floor, setFloor] = useState("All Floors");
  const [side, setSide] = useState("All Sides");

  const [type, setType] = useState("All Types");

  const [status, setStatus] = useState("All Status");

  const [date, setDate] = useState("");

  const [search, setSearch] = useState("");




  const filteredSchedules = schedules.filter((schedule)=>{


    const buildingMatch =
      building === "All Buildings" ||
      schedule.building === building;



    const floorMatch =
      floor === "All Floors" ||
      schedule.floor === floor;



    const sideMatch =
      side === "All Sides" ||
      schedule.side === side;



    const typeMatch =
      type === "All Types" ||
      schedule.type === type;



    const statusMatch =
      status === "All Status" ||
      schedule.status === status;



    const dateMatch =
      date === "" ||
      schedule.date === date;



    const searchMatch =
      search === "" ||
      schedule.module
      .toLowerCase()
      .includes(search.toLowerCase())

      ||

      schedule.room
      .toLowerCase()
      .includes(search.toLowerCase())

      ||

      schedule.lecturer
      .toLowerCase()
      .includes(search.toLowerCase());




    return (
      buildingMatch &&
      floorMatch &&
      sideMatch &&
      typeMatch &&
      statusMatch &&
      dateMatch &&
      searchMatch
    );


  });





  return (
    <div className="space-y-6">
      <PageHeader
        title="Schedule Management"
        description="Manage lecture hall schedules, sessions and room allocations"
        actionText="Create Session"
        actionPath="/admin/create-session"
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
        flex-wrap
        gap-4
        "
      >
        {/* Search */}

        <input
          type="text"
          placeholder="Search module, room or lecturer"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
          border
          rounded-lg
          px-3
          py-2
          text-sm
          w-64
          "
        />

        <select
          value={building}
          onChange={(e) => setBuilding(e.target.value)}
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
          value={floor}
          onChange={(e) => setFloor(e.target.value)}
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

          <option>Floor 06</option>

          <option>Floor 12</option>

          <option>Floor 14</option>
        </select>

        <select
          value={side}
          onChange={(e) => setSide(e.target.value)}
          className="
          border
          rounded-lg
          px-3
          py-2
          text-sm
          "
        >
          <option>All Sides</option>

          <option>A</option>

          <option>B</option>

          <option>G</option>

          <option>F</option>
        </select>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="
          border
          rounded-lg
          px-3
          py-2
          text-sm
          "
        >
          <option>All Types</option>

          <option>Lecture</option>

          <option>Lab</option>
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="
          border
          rounded-lg
          px-3
          py-2
          text-sm
          "
        >
          <option>All Status</option>

          <option>Scheduled</option>

          <option>Ongoing</option>

          <option>Cancelled</option>

          <option>Rescheduled</option>

          <option>Completed</option>
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="
          border
          rounded-lg
          px-3
          py-2
          text-sm
          "
        />
      </div>

      <ScheduleTable schedules={filteredSchedules} />
    </div>
  );

}