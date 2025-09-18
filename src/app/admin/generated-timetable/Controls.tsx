"use client";
import { exportCSV } from "./export";

export default function Controls() {
  return (
    <div className="flex items-center gap-2">
      <select className="rounded-xl border border-border px-3 py-2 text-sm">
        <option>All Weeks</option>
        <option>Week 12</option>
        <option>Week 11</option>
      </select>
      <input className="rounded-xl border border-border px-3 py-2 text-sm" placeholder="Search…" />
      <button className="btn-secondary" onClick={() => exportCSV()}>Download CSV</button>
      <button className="btn-primary">Download PDF</button>
    </div>
  );
}


