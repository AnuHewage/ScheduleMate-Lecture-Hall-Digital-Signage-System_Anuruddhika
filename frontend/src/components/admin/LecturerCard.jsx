import { Trash2 } from "lucide-react";

export default function LecturerCard({ lecturer, onEdit, onDelete }) {
  const getInitials = (name) => {
    if (!name) return "LP";

    return name
      .replace(/Dr\.|Mr\.|Mrs\.|Ms\.|Prof\./g, "")
      .trim()
      .split(" ")
      .map((word) => word[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  return (
    <div
      className="
      bg-white
      border
      border-gray-200
      rounded-xl
      p-5
      hover:shadow-md
      transition
      "
    >
      {/* Profile */}

      <div
        className="
        flex
        items-center
        gap-4
        "
      >
        {lecturer.avatar ? (
          <img
            src={lecturer.avatar}
            alt={lecturer.name}
            className="
              w-16
              h-16
              rounded-full
              object-cover
              border
              "
          />
        ) : (
          <div
            className="
              w-16
              h-16
              rounded-full
              bg-yellow-500
              flex
              items-center
              justify-center
              font-bold
              text-black
              text-lg
              "
          >
            {getInitials(lecturer.name)}
          </div>
        )}

        <div>
          <h2
            className="
            font-bold
            text-slate-900
            "
          >
            {lecturer.name}
          </h2>

          <p
            className="
            text-sm
            text-slate-500
            "
          >
            {lecturer.employeeId}
          </p>
        </div>
      </div>

      {/* Details */}

      <div
        className="
        mt-5
        space-y-2
        text-sm
        "
      >
        <p>
          <span className="text-slate-400">Department:</span>{" "}
          {lecturer.department}
        </p>

        <p>
          <span className="text-slate-400">Email:</span> {lecturer.email}
        </p>

        <p>
          <span className="text-slate-400">Phone:</span> {lecturer.phone}
        </p>

        <p>
          <span className="text-slate-400">Specialization:</span>{" "}
          {lecturer.specialization}
        </p>
      </div>

      {/* Actions */}

      <div
        className="
        mt-5
        flex
        justify-end
        gap-4
        "
      >
        <button
          onClick={() => onEdit(lecturer)}
          className="
          text-blue-600
          text-sm
          font-medium
          "
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(lecturer.id)}
          className="
          text-red-500
          hover:text-red-700
          "
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}
