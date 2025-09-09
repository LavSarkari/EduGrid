export type Faculty = { id: string; name: string; subject: string };
export type Room = { code: string; capacity: number; type?: string };
export type Batch = { code: string; program: string; year: number; section: string };
export type PeriodCell = { subject: string; room: string; faculty: string } | null;

export const faculty: Faculty[] = [
  { id: "FAC001", name: "Dr. A. Sharma", subject: "Operating Systems" },
  { id: "FAC002", name: "Prof. R. Iyer", subject: "Data Structures" },
  { id: "FAC003", name: "Dr. S. Banerjee", subject: "Discrete Maths" },
  { id: "FAC004", name: "Prof. K. Rao", subject: "DBMS" },
  { id: "FAC005", name: "Dr. N. Singh", subject: "Computer Networks" },
];

export const rooms: Room[] = [
  { code: "R101", capacity: 60, type: "Lecture" },
  { code: "R203", capacity: 45, type: "Lecture" },
  { code: "LAB-1", capacity: 30, type: "Lab" },
  { code: "LAB-2", capacity: 30, type: "Lab" },
];

export const batches: Batch[] = [
  { code: "CSE-1", program: "B.Tech CSE", year: 3, section: "A" },
  { code: "CSE-2", program: "B.Tech CSE", year: 3, section: "B" },
  { code: "ECE-3", program: "B.Tech ECE", year: 2, section: "C" },
];

export const subjects = [
  "Operating Systems",
  "Data Structures",
  "Discrete Maths",
  "DBMS",
  "Computer Networks",
  "Software Engineering",
];

export const notices = [
  "Dept. meeting at 4 PM in Room A101",
  "Upload attendance by Friday 5 PM",
  "Internal assessment schedule shared on email",
];

export const days = ["Mon", "Tue", "Wed", "Thu", "Fri"] as const;
export const periods = [1, 2, 3, 4, 5, 6] as const;

// simple demo timetable for CSE-2
export const demoTimetable: Record<string, Record<number, PeriodCell>> = {
  Mon: {
    1: { subject: "Operating Systems", room: "R203", faculty: "Dr. A. Sharma" },
    2: { subject: "Data Structures", room: "R101", faculty: "Prof. R. Iyer" },
    3: null,
    4: { subject: "DBMS", room: "R101", faculty: "Prof. K. Rao" },
    5: null,
    6: { subject: "CN", room: "LAB-1", faculty: "Dr. N. Singh" },
  },
  Tue: {
    1: { subject: "Discrete Maths", room: "R203", faculty: "Dr. S. Banerjee" },
    2: null,
    3: { subject: "Operating Systems", room: "R203", faculty: "Dr. A. Sharma" },
    4: null,
    5: { subject: "DBMS", room: "R101", faculty: "Prof. K. Rao" },
    6: null,
  },
  Wed: { 1: null, 2: null, 3: null, 4: null, 5: null, 6: null },
  Thu: { 1: null, 2: null, 3: null, 4: null, 5: null, 6: null },
  Fri: { 1: null, 2: null, 3: null, 4: null, 5: null, 6: null },
};

export type ApprovedTimetable = {
  id: string;
  title: string;
  owner: string; // faculty name
  ownerEmail: string;
  assignedToEmails: string[]; // teachers who can view in Approved
  updatedAt: string; // human readable
  week: string;
};

export const approvedTimetables: ApprovedTimetable[] = [
  {
    id: "tt-cse2-w12",
    title: "CSE-2 Week 12",
    owner: "Dr. A. Sharma",
    ownerEmail: "a.sharma@college.edu",
    assignedToEmails: ["teacher@college.edu", "dr.sharma@college.edu"],
    updatedAt: "Today",
    week: "Week 12",
  },
  {
    id: "tt-ece3-w12",
    title: "ECE-3 Week 12",
    owner: "Prof. R. Iyer",
    ownerEmail: "r.iyer@college.edu",
    assignedToEmails: ["r.iyer@college.edu"],
    updatedAt: "1d ago",
    week: "Week 12",
  },
  {
    id: "tt-cse1-w11",
    title: "CSE-1 Week 11",
    owner: "Prof. K. Rao",
    ownerEmail: "k.rao@college.edu",
    assignedToEmails: ["k.rao@college.edu"],
    updatedAt: "3d ago",
    week: "Week 11",
  },
];


