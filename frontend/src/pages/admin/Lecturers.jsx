import LecturerTable from "../../components/admin/LecturerTable";
import { lecturers } from "../../data/lecturerData";
import PageHeader from "../../components/admin/PageHeader";

export default function Lecturers() {
  return (
    <div
      className="
      space-y-6
      "
    >
      {/* Page Header */}

      <PageHeader
        title="Lecturer Management"
        description="Manage lecturer information and assignments"
      />

      {/* Lecturer Table */}

      <LecturerTable lecturers={lecturers} />
    </div>
  );
}
