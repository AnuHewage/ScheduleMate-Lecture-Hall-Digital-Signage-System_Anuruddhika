import { sidebarSections } from "../../data/sidebarData";
import { useLocation, useNavigate } from "react-router-dom";

import { adminData } from "../../data/adminData";

export default function Sidebar() {
  const admin = adminData;

  const navigate = useNavigate();

  const location = useLocation();

  return (
    <aside
      className="
      fixed
      left-0
      top-0
      w-64
      h-screen
      bg-[#0b1220]
      text-slate-300
      flex
      flex-col
      px-4
      pt-5
      pb-3
      z-50
      "
    >
      {/* Logo */}

      <div
        className="
        flex
        items-center
        gap-2
        text-white
        font-bold
        text-lg
        mb-8
        "
      >
        <span
          className="
          w-2
          h-2
          rounded-full
          bg-yellow-500
          "
        ></span>
        ScheduleMate
      </div>

      {/* Navigation */}

      <div className="flex-1 overflow-hidden">
        {sidebarSections.map((section) => (
          <div key={section.title} className="mb-5">
            <p
              className="
              text-xs
              text-slate-500
              font-semibold
              px-2
              mb-2
              uppercase
              "
            >
              {section.title}
            </p>

            {section.items.map((item) => {
              const Icon = item.icon;

              const active = location.pathname === item.path;

              return (
                <button
                  key={item.name}
                  onClick={() => navigate(item.path)}
                  className={`
                    w-full
                    flex
                    items-center
                    gap-3
                    px-3
                    py-2
                    rounded-md
                    text-sm
                    transition

                    ${
                      active
                        ? "bg-slate-800 text-white shadow-inner border-l-4 border-yellow-500"
                        : "text-slate-400 hover:bg-slate-800 hover:text-white"
                    }

                    `}
                >
                  <Icon size={17} />

                  <span
                    className="
                      whitespace-nowrap
                      text-[13px]
                      text-left
                      "
                  >
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Admin Profile */}

      <div
        className="
        border-t
        border-slate-800
        pt-4
        "
      >
        <div
          className="
          flex
          items-center
          gap-3
          "
        >
          {/* Avatar */}

          <div
            onClick={() => navigate("/admin/profile")}
            className="
            w-9
            h-9
            rounded-full
            bg-yellow-500
            flex
            items-center
            justify-center
            font-bold
            text-black
            text-sm
            shrink-0
            cursor-pointer
            overflow-hidden
            "
          >
            {admin.image ? (
              <img
                src={admin.image}
                className="
              w-full
              h-full
              object-cover
              "
              />
            ) : (
              admin.name.substring(0, 2).toUpperCase()
            )}
          </div>

          {/* Name */}

          <div
            onClick={() => navigate("/admin/profile")}
            className="
            cursor-pointer
            "
          >
            <p
              className="
              text-sm
              text-white
              font-semibold
              "
            >
              {admin.name}
            </p>

            <p
              className="
              text-xs
              text-slate-500
              "
            >
              {admin.role}
            </p>
          </div>
        </div>

        {/* Sign out */}

        <button
          onClick={() => navigate("/admin/login")}
          className="
          mt-3
          text-xs
          text-slate-500
          hover:text-white
          "
        >
          ← Sign out
        </button>
      </div>
    </aside>
  );
}
