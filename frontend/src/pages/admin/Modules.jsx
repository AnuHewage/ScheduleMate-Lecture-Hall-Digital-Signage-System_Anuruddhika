import { useState } from "react";

import ModuleTable from "../../components/admin/ModuleTable";
import PageHeader from "../../components/admin/PageHeader";
import ModuleModal from "../../components/admin/ModuleModal";

import { modules as moduleData } from "../../data/moduleData";

export default function Modules() {
  const [modules, setModules] = useState(moduleData);

  const [search, setSearch] = useState("");

  const [department, setDepartment] = useState("All Departments");

  const [selectedModule, setSelectedModule] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add Module

  const handleAddModule = () => {
    setSelectedModule(null);

    setIsModalOpen(true);
  };

  // Edit Module

  const handleEditModule = (module) => {
    setSelectedModule(module);

    setIsModalOpen(true);
  };

  // Delete Module

  const handleDeleteModule = (id) => {
    const confirmDelete = window.confirm("Delete this module?");

    if (confirmDelete) {
      setModules(modules.filter((module) => module.id !== id));
    }
  };

  // Filter Logic

  const filteredModules = modules.filter((module) => {
    const matchSearch = module.moduleName
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchDepartment =
      department === "All Departments" || module.department === department;

    return matchSearch && matchDepartment;
  });

  return (
    <div
      className="
      space-y-6
      "
    >
      {/* Header */}

      <div
        className="
        flex
        justify-between
        items-center
        "
      >
        <PageHeader
          title="Modules"
          description="Manage academic modules and session information"
        />

        <button
          onClick={handleAddModule}
          className="
          bg-[#0b1220]
          text-white
          px-4
          py-2
          rounded-lg
          text-sm
          font-semibold
          hover:bg-slate-800
          "
        >
          + Add Module
        </button>
      </div>

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
        {/* Department */}

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="
          border
          rounded-lg
          px-3
          py-2
          text-sm
          "
        >
          <option>All Departments</option>

          <option>Computing</option>

          <option>Engineering</option>

          <option>Business</option>

          <option>Management</option>
        </select>

        {/* Search */}

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Module Name..."
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

      <ModuleTable
        modules={filteredModules}
        onEdit={handleEditModule}
        onDelete={handleDeleteModule}
      />

      {/* Modal */}

      {isModalOpen && (
        <ModuleModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          module={selectedModule}
          onSave={(data) => {
            if (selectedModule) {
              // Edit existing module

              setModules(
                modules.map((item) =>
                  item.id === selectedModule.id
                    ? {
                        ...data,
                        id: selectedModule.id,
                      }
                    : item,
                ),
              );
            } else {
              // Add new module

              setModules([
                ...modules,
                {
                  ...data,
                  id: Date.now(),
                },
              ]);
            }

            setIsModalOpen(false);
          }}
        />
      )}
    </div>
  );
}
