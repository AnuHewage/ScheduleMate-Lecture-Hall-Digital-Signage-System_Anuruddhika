import { buildings } from "../../data/buildingData";

export default function BuildingsFloors() {
  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex justify-between items-center">
        <div>
          <h1
            className="
            text-xl
            font-bold
            text-slate-900
          "
          >
            Buildings & Floors
          </h1>

          <p
            className="
            text-sm
            text-slate-500
            mt-1
          "
          >
            Manage academy buildings, floors and floor-side locations
          </p>
        </div>

        <button
          className="
            bg-[#0b1220]
            text-white
            px-4
            py-2
            rounded-lg
            text-sm
            font-semibold
          "
        >
          + Add Building
        </button>
      </div>

      {/* Building Cards */}

      <div
        className="
        grid
        grid-cols-2
        gap-5
      "
      >
        {buildings.map((building) => (
          <div
            key={building.id}
            className="
              bg-white
              border
              border-gray-200
              rounded-xl
              p-5
            "
          >
            <h2
              className="
              text-lg
              font-bold
              text-slate-900
            "
            >
              {building.name}
            </h2>

            <div
              className="
              mt-4
              space-y-2
              text-sm
              text-slate-600
            "
            >
              <p>
                Floors :
                <span className="font-semibold text-slate-900">
                  {" "}
                  {building.floors}
                </span>
              </p>

              <p>
                Floor Sides :
                <span className="font-semibold text-slate-900">
                  {" "}
                  {building.sides}
                </span>
              </p>

              <p>
                Total Rooms :
                <span className="font-semibold text-slate-900">
                  {" "}
                  {building.rooms}
                </span>
              </p>
            </div>

            <button
              className="
                mt-5
                text-sm
                text-blue-600
                font-semibold
              "
            >
              View Floors →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
