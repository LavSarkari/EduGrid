export const metadata = { title: "Teacher Dashboard • EduGrid" };
import { days, periods, demoTimetable } from "@/data/demo";

export default async function TeacherDashboard({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const sp = await searchParams;
  const user = typeof sp?.user === "string" && sp.user.length > 0 ? sp.user : "teacher@college.edu";
  // Demo mapping: treat the current user as this faculty for counting
  const currentFacultyName = "Dr. A. Sharma";
  // Determine today's key aligned with demo data (Mon-Fri). Fallback to Mon on weekends
  const jsDay = new Date().getDay(); // 0=Sun ... 6=Sat
  const todayIdx = jsDay === 0 ? 0 : jsDay - 1; // 0..6 -> 0..5
  const todayKey = days[Math.min(todayIdx, days.length - 1)];
  const classesTodayCount = Object.values(demoTimetable[todayKey] || {}).filter((cell) => cell && cell.faculty === currentFacultyName).length;
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Welcome, {user}</h2>
        <div className="text-sm text-muted">Week 12</div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="card md:col-span-1">
          <div className="card-header">Next Class</div>
          <div className="card-content text-sm">
            <div className="font-medium">Operating Systems</div>
            <div className="text-muted">Room R203 • 10:30 - 11:20</div>
            <div className="mt-2 text-muted">Batch: CSE-2</div>
          </div>
        </div>
        <div className="card md:col-span-2">
          <div className="card-header">Classes Today</div>
          <div className="card-content">
            <div className="text-3xl font-semibold">{classesTodayCount}</div>
            <div className="text-sm text-muted mt-1">scheduled for {currentFacultyName} ({todayKey})</div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="p-2 border-b border-border">Day / Period</th>
              {periods.map((p) => (<th key={p} className="p-2 border-b border-border">{p}</th>))}
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


