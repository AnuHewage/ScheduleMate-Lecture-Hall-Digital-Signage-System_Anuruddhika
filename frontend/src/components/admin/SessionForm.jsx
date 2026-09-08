import { useState } from "react";

export default function SessionForm() {
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;

    setDate(selectedDate);

    if (selectedDate) {
      const dateObj = new Date(selectedDate);

      const dayName = dateObj.toLocaleDateString("en-US", {
        weekday: "long",
      });

      setDay(dayName);
    } else {
      setDay("");
    }
  };

  return (
    <div
      className="
      bg-white
      border
      border-gray-200
      rounded-xl
      p-6
      "
    >
      <div
        className="
        grid
        grid-cols-2
        gap-8
        "
      >
        {/* LEFT SIDE */}

        <div className="space-y-5">
          <h2
            className="
            text-base
            font-semibold
            text-slate-900
            "
          >
            Session Details
          </h2>

          {/* Module */}

          <div>
            <label className="text-sm text-slate-600">Module</label>

            <select
              className="
              w-full
              border
              rounded-lg
              px-3
              py-2
              mt-1
              text-sm
              "
            >
              <option>Select Module</option>

              <option>IT1130 - Software Engineering</option>

              <option>IT2205 - Database Systems</option>
            </select>
          </div>

          {/* Session Type */}

          <div>
            <label className="text-sm text-slate-600">Session Type</label>

            <select
              className="
              w-full
              border
              rounded-lg
              px-3
              py-2
              mt-1
              text-sm
              "
            >
              <option>Lecture</option>

              <option>Lab</option>
            </select>
          </div>

          {/* Date + Day */}

          <div
            className="
            grid
            grid-cols-2
            gap-4
            "
          >
            <div>
              <label className="text-sm text-slate-600">Date</label>

              <input
                type="date"
                value={date}
                onChange={handleDateChange}
                className="
                w-full
                border
                rounded-lg
                px-3
                py-2
                mt-1
                text-sm
                "
              />
            </div>

            <div>
              <label className="text-sm text-slate-600">Day</label>

              <input
                value={day}
                readOnly
                placeholder="Auto generated"
                className="
                w-full
                border
                rounded-lg
                px-3
                py-2
                mt-1
                text-sm
                bg-gray-100
                "
              />
            </div>
          </div>

          {/* Time Section */}

          <div
            className="
            bg-gray-50
            border
            rounded-lg
            p-4
            "
          >
            <h3
              className="
              text-sm
              font-semibold
              text-slate-700
              mb-3
              "
            >
              Session Time
            </h3>

            <div
              className="
              grid
              grid-cols-2
              gap-4
              "
            >
              <div>
                <label className="text-xs text-slate-500">Start Time</label>

                <input
                  type="time"
                  className="
                  w-full
                  border
                  rounded-lg
                  px-3
                  py-2
                  mt-1
                  bg-white
                  text-sm
                  "
                />
              </div>

              <div>
                <label className="text-xs text-slate-500">End Time</label>

                <input
                  type="time"
                  className="
                  w-full
                  border
                  rounded-lg
                  px-3
                  py-2
                  mt-1
                  bg-white
                  text-sm
                  "
                />
              </div>
            </div>
          </div>

          {/* Lecturer */}

          <div>
            <label className="text-sm text-slate-600">Lecturer</label>

            <select
              className="
              w-full
              border
              rounded-lg
              px-3
              py-2
              mt-1
              text-sm
              "
            >
              <option>Select Lecturer</option>

              <option>Dr. Nimal Perera</option>

              <option>Mr. Kasun Silva</option>
            </select>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="space-y-5">
          <h2
            className="
            text-base
            font-semibold
            text-slate-900
            "
          >
            Room Allocation
          </h2>

          {/* Building */}

          <div>
            <label className="text-sm text-slate-600">Building</label>

            <select
              className="
              w-full
              border
              rounded-lg
              px-3
              py-2
              mt-1
              text-sm
              "
            >
              <option>Select Building</option>

              <option>Main Building</option>

              <option>New Building</option>
            </select>
          </div>

          {/* Floor + Side */}

          <div
            className="
            grid
            grid-cols-2
            gap-4
            "
          >
            <div>
              <label className="text-sm text-slate-600">Floor</label>

              <select
                className="
                w-full
                border
                rounded-lg
                px-3
                py-2
                mt-1
                text-sm
                "
              >
                <option>Select Floor</option>

                <option>Floor 05</option>

                <option>Floor 06</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-slate-600">Side</label>

              <select
                className="
                w-full
                border
                rounded-lg
                px-3
                py-2
                mt-1
                text-sm
                "
              >
                <option>A</option>

                <option>B</option>

                <option>G</option>

                <option>F</option>
              </select>
            </div>
          </div>

          {/* Room */}

          <div>
            <label className="text-sm text-slate-600">Room</label>

            <select
              className="
              w-full
              border
              rounded-lg
              px-3
              py-2
              mt-1
              text-sm
              "
            >
              <option>Select Room</option>

              <option>M05A-L01</option>

              <option>M05A-L02</option>
            </select>
          </div>

          {/* Notes */}

          <div>
            <label className="text-sm text-slate-600">Additional Notes</label>

            <textarea
              rows="5"
              placeholder="Add any notes about this session..."
              className="
              w-full
              border
              rounded-lg
              px-3
              py-2
              mt-1
              text-sm
              resize-none
              "
            />
          </div>
        </div>
      </div>

      {/* ACTION BUTTONS */}

      <div
        className="
        mt-8
        pt-5
        border-t
        flex
        justify-end
        gap-3
        "
      >
        <button
          className="
          px-5
          py-2
          border
          rounded-lg
          text-sm
          hover:bg-gray-50
          "
        >
          Cancel
        </button>

        <button
          className="
          px-5
          py-2
          bg-[#0b1220]
          text-white
          rounded-lg
          text-sm
          font-semibold
          hover:bg-slate-800
          "
        >
          Save Session
        </button>
      </div>
    </div>
  );
}
