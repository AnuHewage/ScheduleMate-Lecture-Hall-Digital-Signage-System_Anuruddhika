import { useState } from "react";

import PageHeader from "../../components/admin/PageHeader";
import LecturerCard from "../../components/admin/LecturerCard";
import LecturerModal from "../../components/admin/LecturerModal";
import { lecturers as lecturerData } from "../../data/lecturerData";

export default function Lecturers() {
  const [lecturers, setLecturers] = useState(lecturerData);

  const [search, setSearch] = useState("");

  const [department, setDepartment] = useState("All Departments");

  const [selectedLecturer, setSelectedLecturer] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add Lecturer

  const handleAddLecturer = () => {
    setSelectedLecturer(null);

    setIsModalOpen(true);
  };

  // Edit Lecturer

  const handleEditLecturer = (lecturer) => {
    setSelectedLecturer(lecturer);

    setIsModalOpen(true);
  };

  // Delete Lecturer

  const handleDeleteLecturer = (id) => {
    const confirmDelete = window.confirm("Delete this lecturer?");

    if (confirmDelete) {
      setLecturers(lecturers.filter((lecturer) => lecturer.id !== id));
    }
  };

  // Filter

  const filteredLecturers = lecturers.filter((lecturer) => {
    const matchSearch = lecturer.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchDepartment =
      department === "All Departments" || lecturer.department === department;

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
          title="Lecturers"
          description="Manage lecturer profiles and academic information"
        />

        <button
          onClick={handleAddLecturer}
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
          + Add Lecturer
        </button>
      </div>

      {/* Search & Filter */}

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

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Lecturer Name..."
          className="
          flex-1
          border
          rounded-lg
          px-3
          py-2
          text-sm
          "
        />
      </div>

      {/* Lecturer Cards */}

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-5
        "
      >
        {filteredLecturers.map((lecturer) => (
          <LecturerCard
            key={lecturer.id}
            lecturer={lecturer}
            onEdit={handleEditLecturer}
            onDelete={handleDeleteLecturer}
          />
        ))}
      </div>

      {/* Modal */}

      {isModalOpen && (
        <LecturerModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          lecturer={selectedLecturer}
          onSave={(data) => {
            if (selectedLecturer) {
              setLecturers(
                lecturers.map((item) =>
                  item.id === selectedLecturer.id
                    ? {
                        ...data,
                        id: selectedLecturer.id,
                      }
                    : item,
                ),
              );
            } else {
              setLecturers([
                ...lecturers,

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
