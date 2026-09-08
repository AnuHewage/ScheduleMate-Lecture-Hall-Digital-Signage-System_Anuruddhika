export const stats = [
  {
    title: "Rooms live now",
    value: "18",
    suffix: "/ 96",
    accent: "green",
  },
  {
    title: "Upcoming (next 2h)",
    value: "24",
    accent: "blue",
  },
  {
    title: "Cancelled today",
    value: "3",
    accent: "red",
  },
  {
    title: "Displays online",
    value: "12",
    suffix: "/ 14",
    accent: "yellow",
  },
];



export const sessions = [
  {
    id: 1,
    time: "08:00 AM - 10:00 AM",
    room: "M05A-L01",
    module: "IT1130 - Database Systems",
    lecturer: "Dr. N. Perera",
    status: "Ongoing",
  },

  {
    id: 2,
    time: "10:00 AM - 12:00 PM",
    room: "M05A-L02",
    module: "SE2040 - Software Engineering",
    lecturer: "Ms. R. Silva",
    status: "Upcoming",
  },

  {
    id: 3,
    time: "01:00 PM - 03:00 PM",
    room: "N12G-LB01",
    module: "IT2205 - Network Lab",
    lecturer: "Mr. K. Fernando",
    status: "Ongoing",
  },

  {
    id: 4,
    time: "03:00 PM - 05:00 PM",
    room: "M06A-LB02",
    module: "DS1050 - Data Science Lab",
    lecturer: "Dr. H. Gunawardena",
    status: "Cancelled",
  },
];



export const alerts = [
  {
    title: "DS1050 Lab cancelled",
    detail:
      "M06A-LB02 · Today 03:00 PM · Lecturer unavailable",
  },

  {
    title: "IT2110 Lecture rescheduled",
    detail:
      "M07B-L01 → M07B-L02 · Changed time 1 hour",
  },

  {
    title: "Display N14F offline",
    detail:
      "New Building · Floor 14 · F Side",
  },
];



export const occupancy = [
  {
    name: "Main Building",
    detail: "10 Floors · A/B Side",
    percentage: 61,
  },

  {
    name: "New Building",
    detail: "14 Floors · G/F Side",
    percentage: 46,
  },
];