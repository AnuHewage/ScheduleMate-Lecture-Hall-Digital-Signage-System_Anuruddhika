import { useEffect, useState } from "react";

export default function LecturerModal({ isOpen, onClose, lecturer, onSave }) {
  const emptyForm = {
    employeeId: "",
    name: "",
    department: "",
    email: "",
    phone: "",
    specialization: "",
    avatar: "",
  };

  const [formData, setFormData] = useState(emptyForm);

  useEffect(() => {
    if (lecturer) {
      setFormData(lecturer);
    } else {
      setFormData({
        ...emptyForm,
        employeeId: generateEmployeeId(),
      });
    }
  }, [lecturer]);

  if (!isOpen) return null;

  function generateEmployeeId() {
    return "EMP" + Math.floor(1000 + Math.random() * 9000);
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

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

  // Future image upload handler

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);

      setFormData({
        ...formData,

        avatar: imageUrl,
      });
    }
  };

  return (
    <div
      className="
      fixed
      inset-0
      bg-black/40
      flex
      items-center
      justify-center
      z-50
      "
    >
      <div
        className="
        bg-white
        w-[760px]
        rounded-xl
        shadow-xl
        "
      >
        {/* Header */}

        <div
          className="
          px-6
          py-5
          border-b
          flex
          justify-between
          items-center
          "
        >
          <h2
            className="
            text-lg
            font-semibold
            text-slate-900
            "
          >
            {lecturer ? "Edit Lecturer" : "Add Lecturer"}
          </h2>

          <button
            onClick={onClose}
            className="
            text-slate-500
            hover:text-black
            text-xl
            "
          >
            ✕
          </button>
        </div>

        {/* Body */}

        <div className="p-6">
          <div
            className="
            grid
            grid-cols-3
            gap-8
            "
          >
            {/* Profile Section */}

            <div
              className="
              border
              rounded-xl
              p-6
              flex
              flex-col
              items-center
              "
            >
              {formData.avatar ? (
                <img
                  src={formData.avatar}
                  alt="Lecturer"
                  className="
                    w-28
                    h-28
                    rounded-full
                    object-cover
                    border
                    "
                />
              ) : (
                <div
                  className="
                    w-28
                    h-28
                    rounded-full
                    bg-yellow-500
                    flex
                    items-center
                    justify-center
                    text-3xl
                    font-bold
                    text-black
                    "
                >
                  {getInitials(formData.name)}
                </div>
              )}

              <input
                type="file"
                accept="image/*"
                id="lecturer-photo"
                className="hidden"
                onChange={handlePhotoChange}
              />

              <label
                htmlFor="lecturer-photo"
                className="
                mt-4
                px-4
                py-2
                bg-slate-100
                rounded-lg
                text-sm
                cursor-pointer
                hover:bg-slate-200
                "
              >
                {formData.avatar ? "Upload New Photo" : "Upload Photo"}
              </label>

              <p
                className="
                text-xs
                text-slate-400
                text-center
                mt-2
                "
              >
                JPG, PNG
                <br />
                Maximum 2 MB
              </p>
            </div>

            {/* Right Form */}

            <div
              className="
              col-span-2
              space-y-4
              "
            >
              <div>
                <label className="text-sm text-slate-600">Employee ID</label>

                <input
                  value={formData.employeeId}
                  readOnly
                  className="
                  w-full
                  mt-1
                  border
                  rounded-lg
                  px-3
                  py-2
                  bg-gray-100
                  "
                />
              </div>

              <div>
                <label className="text-sm text-slate-600">Lecturer Name</label>

                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Dr. Nimal Perera"
                  className="
                  w-full
                  mt-1
                  border
                  rounded-lg
                  px-3
                  py-2
                  "
                />
              </div>

              <div>
                <label className="text-sm text-slate-600">Department</label>

                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="
                  w-full
                  mt-1
                  border
                  rounded-lg
                  px-3
                  py-2
                  "
                >
                  <option value="">Select Department</option>

                  <option>Computing</option>

                  <option>Engineering</option>

                  <option>Business</option>

                  <option>Management</option>
                </select>
              </div>
            </div>
          </div>

          {/* Bottom Fields */}

          <div
            className="
            grid
            grid-cols-2
            gap-5
            mt-6
            "
          >
            <div>
              <label className="text-sm text-slate-600">Email</label>

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@sparkline.edu"
                className="
                w-full
                mt-1
                border
                rounded-lg
                px-3
                py-2
                "
              />
            </div>

            <div>
              <label className="text-sm text-slate-600">Phone Number</label>

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="0771234567"
                className="
                w-full
                mt-1
                border
                rounded-lg
                px-3
                py-2
                "
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="text-sm text-slate-600">Specialization</label>

            <input
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              placeholder="Software Engineering"
              className="
              w-full
              mt-1
              border
              rounded-lg
              px-3
              py-2
              "
            />
          </div>
        </div>

        {/* Footer */}

        <div
          className="
          border-t
          px-6
          py-4
          flex
          justify-end
          gap-3
          "
        >
          <button
            onClick={onClose}
            className="
            border
            rounded-lg
            px-5
            py-2
            text-sm
            "
          >
            Cancel
          </button>

          <button
            onClick={() => onSave(formData)}
            className="
            bg-[#0b1220]
            text-white
            rounded-lg
            px-5
            py-2
            text-sm
            font-semibold
            "
          >
            Save Lecturer
          </button>
        </div>
      </div>
    </div>
  );
}
