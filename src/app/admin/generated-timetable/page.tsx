export const metadata = { title: "Generated Timetables • EduGrid" };
import { days, periods, demoTimetable } from "@/data/demo";
import Controls from "./Controls";
const folders = ["CSE-2 Week 12", "ECE-3 Week 12", "ME-1 Week 12", "CSE-1 Week 11"];

export default function GeneratedTimetablePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <h2 className="text-2xl font-semibold">Generated Timetables</h2>
        <Controls />
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {folders.map((f) => (
          <div key={f} className="card p-4 text-sm">{f}</div>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="p-2 border-b border-border">Day / Period</th>
              {periods.map((p) => (
                <th key={p} className="p-2 border-b border-border">{p}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {days.map((d) => (
              <tr key={d}>
                <td className="p-2 border-b border-border font-medium">{d}</td>
                {periods.map((p) => (
                  <td key={`${d}-${p}`} className="p-3 border-b border-l border-border align-top">
                    {demoTimetable[d]?.[p] ? (
                      <>
                        <div className="text-xs text-muted">{demoTimetable[d][p]!.subject}</div>
                        <div className="text-sm">{demoTimetable[d][p]!.room}</div>
                      </>
                    ) : (
                      <div className="text-xs text-muted">—</div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

 
