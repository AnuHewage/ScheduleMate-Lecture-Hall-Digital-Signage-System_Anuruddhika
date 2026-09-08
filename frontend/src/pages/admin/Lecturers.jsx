import LecturerTable from "../../components/admin/LecturerTable";
import { lecturers } from "../../data/lecturerData";

export default function Lecturers() {
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
          Lecturers
        </h1>

        <p
          className="
          text-sm
          text-slate-500
          mt-1
          "
        >
          Manage lecturer profiles and academic information
        </p>
      </div>

      {/* Lecturer Table */}

      <LecturerTable lecturers={lecturers} />
    </div>
  );
}
