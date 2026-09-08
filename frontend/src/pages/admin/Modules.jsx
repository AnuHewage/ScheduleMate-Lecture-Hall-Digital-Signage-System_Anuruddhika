import ModuleTable from "../../components/admin/ModuleTable";
import { modules } from "../../data/moduleData";

export default function Modules() {
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
          Modules
        </h1>

        <p
          className="
          text-sm
          text-slate-500
          mt-1
          "
        >
          Manage academic modules offered by Sparkline Academy
        </p>
      </div>

      {/* Module Table */}

      <ModuleTable modules={modules} />
    </div>
  );
}
