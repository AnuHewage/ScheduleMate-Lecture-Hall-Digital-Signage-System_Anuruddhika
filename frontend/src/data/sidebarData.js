import {
  LayoutDashboard,
  Radio,
  Building2,
  DoorOpen,
  BookOpen,
  Users,
  CalendarClock,
  RefreshCw,
  Megaphone,
  MonitorSmartphone,
} from "lucide-react";


export const sidebarSections = [
  {
    title: "Overview",
    items: [
      {
        name: "Dashboard",
        icon: LayoutDashboard,
        path: "/admin/dashboard",
      },
      {
        name: "Live Room Status",
        icon: Radio,
        path: "/admin/status",
      },
    ],
  },

  {
    title: "Locations",
    items: [
      {
        name: "Buildings & Floors",
        icon: Building2,
        path: "/admin/buildings",
      },
      {
        name: "Rooms & Labs",
        icon: DoorOpen,
        path: "/admin/rooms",
      },
    ],
  },


  {
    title: "Academics",
    items: [
      {
        name: "Modules",
        icon: BookOpen,
        path: "/admin/modules",
      },
      {
        name: "Lecturers",
        icon: Users,
        path: "/admin/lecturers",
      },
    ],
  },


  {
    title: "Scheduling",
    items: [
      {
        name: "Schedule Management",
        icon: CalendarClock,
        path: "/admin/schedule",
      },
      {
        name: "Cancellations & Reschedules",
        icon: RefreshCw,
        path: "/admin/cancellations",
      },
    ],
  },


  {
    title: "Announcements",
    items:[
      {
        name:"Notices & Announcements",
        icon:Megaphone,
        path:"/admin/announcements"
      }
    ]
  },


  {
    title:"Devices",
    items:[
      {
        name:"Display Devices",
        icon:MonitorSmartphone,
        path:"/admin/devices"
      }
    ]
  }

];