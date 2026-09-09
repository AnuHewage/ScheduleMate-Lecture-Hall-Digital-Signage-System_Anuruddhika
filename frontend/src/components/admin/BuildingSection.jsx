import FloorTable from "./FloorTable";

export default function BuildingSection({ building }) {
  return (
    <div
      className="
mt-8
"
    >
      <h2
        className="
text-xl
font-bold
text-slate-900
mb-4
"
      >
        {building.name}
      </h2>

      <FloorTable building={building} />
    </div>
  );
}
