import { sidebarSections } from "../../data/sidebarData";
import { useLocation, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside
      className="
        w-64
        h-screen
        bg-[#0b1220]
        text-slate-300
        flex
        flex-col
        px-4
        pt-5
        pb-3
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
      <div className="flex-1 overflow-y-auto">
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
                  <Icon size={17} className="shrink-0" />

                  <span className="whitespace-nowrap text-[13px] text-left">
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
          <div
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
            "
          >
            SJ
          </div>

          <div>
            <p
              className="
                text-sm
                text-white
                font-semibold
              "
            >
              John
            </p>

            <p
              className="
                text-xs
                text-slate-500
              "
            >
              System Admin
            </p>
          </div>
        </div>

        <button
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
