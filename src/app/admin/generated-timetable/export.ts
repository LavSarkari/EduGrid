"use client";
import { days, periods, demoTimetable } from "@/data/demo";

export function exportCSV() {
  const rows: string[] = [];
  rows.push(["Day/Period", ...periods].join(","));
  for (const d of days) {
    const cells = periods.map((p) => {
      const cell = demoTimetable[d]?.[p];
      return cell ? `${cell.subject} (${cell.room})` : "";
    });
    rows.push([d, ...cells].join(","));
  }
  const csv = rows.join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "timetable.csv";
  a.click();
  URL.revokeObjectURL(url);
}


