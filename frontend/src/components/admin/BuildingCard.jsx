export default function BuildingCard({ building, onView, onEdit, expanded }) {
  return (
    <div
      className="
bg-white
border
border-gray-200
rounded-xl
p-5
hover:shadow-sm
transition
"
    >
      <div
        className="
flex
justify-between
items-start
"
      >
        <div>
          <h2
            className="
text-lg
font-semibold
text-slate-900
"
          >
            {building.name}
          </h2>

          <p
            className="
text-sm
text-slate-500
mt-1
"
          >
            {building.totalFloors} Floors
          </p>
        </div>

        <span
          className="
text-xs
font-semibold
text-slate-500
border
px-3
py-1
rounded-full
"
        >
          {building.code}
        </span>
      </div>

      <div
        className="
mt-4
text-sm
text-slate-600
space-y-2
"
      >
        <p>
          Floor Sides :
          <span
            className="
font-semibold
text-slate-900
ml-2
"
          >
            {building.sides.join(" / ")}
          </span>
        </p>

        <p>
          Special Lab Floors :
          <span
            className="
font-semibold
text-slate-900
ml-2
"
          >
            {building.specialFloors.join(", ")}
          </span>
        </p>
      </div>

      <div
        className="
mt-5
flex
justify-end
gap-4
"
      >
        <button
          onClick={onView}
          className="
text-sm
font-semibold
text-slate-700
hover:underline
"
        >
          {expanded ? "Hide Floors ↑" : "View Floors →"}
        </button>

        <button
          onClick={onEdit}
          className="
text-sm
font-semibold
text-blue-600
hover:underline
"
        >
          Edit
        </button>
      </div>
    </div>
  );
}
