import ModuleTable from "../../components/admin/ModuleTable";
import { modules } from "../../data/moduleData";
import PageHeader from "../../components/admin/PageHeader";

export default function Modules() {
  return (
    <div
      className="
      space-y-6
      "
    >
      {/* Page Header */}

      <PageHeader
        title="Module Management"
        description="Manage academic modules and module information"
      />

      {/* Module Table */}

      <ModuleTable modules={modules} />
    </div>
  );
}
