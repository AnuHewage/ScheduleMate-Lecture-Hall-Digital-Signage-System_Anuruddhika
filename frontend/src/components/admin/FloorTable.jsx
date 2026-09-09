export default function FloorTable({ building }) {
  const getFloorDetails = (floor) => {
    const isMain = building.name === "Main Building";

    const isSpecial = building.specialFloors.includes(floor);

    if (isSpecial) {
      return {
        side1: "Laboratory Floor",
        side2: "Laboratory Floor",
      };
    }

    if (building.name === "New Building" && floor === 14) {
      return {
        side1: "Large Lecture Hall",
        side2: "Large Lecture Hall",
      };
    }

    return {
      side1: isMain ? "3 Lecture Rooms + 1 Lab" : "3 Lecture Rooms",

      side2: isMain ? "3 Lecture Rooms + 1 Lab" : "3 Lecture Rooms",
    };
  };

  return (
    <div
      className="
w-full
bg-white
border
border-gray-200
rounded-xl
overflow-hidden
"
    >
      <div
        className="
        px-5
        py-4
        border-b
        border-gray-200
        "
      >
        <h2
          className="
          font-semibold
          text-slate-900
          "
        >
          {building.name} Floor Structure
        </h2>
      </div>

      <table
        className="
        w-full
        text-sm
        table-fixed
        "
      >
        <thead>
          <tr
            className="
            text-left
            text-xs
            text-slate-400
            border-b
            "
          >
            <th
              className="
              px-5
              py-3
              w-[18%]
              "
            >
              Floor
            </th>

            <th
              className="
              w-[32%]
              "
            >
              {building.sides[0]}
            </th>

            <th
              className="
              w-[32%]
              "
            >
              {building.sides[1]}
            </th>

            <th
              className="
              w-[18%]
              "
            >
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {Array.from(
            {
              length: building.totalFloors,
            },
            (_, i) => i + 1,
          ).map((floor) => {
            const details = getFloorDetails(floor);

            return (
              <tr
                key={floor}
                className="
                border-b
                last:border-none
                hover:bg-gray-50
                "
              >
                <td
                  className="
                  px-5
                  py-3
                  font-semibold
                  text-slate-800
                  "
                >
                  Floor {String(floor).padStart(2, "0")}
                </td>

                <td
                  className="
                  text-slate-600
                  "
                >
                  {details.side1}
                </td>

                <td
                  className="
                  text-slate-600
                  "
                >
                  {details.side2}
                </td>

                <td>
                  <button
                    className="
                    text-blue-600
                    text-xs
                    font-semibold
                    hover:underline
                    "
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
