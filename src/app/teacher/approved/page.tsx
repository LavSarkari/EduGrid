export const metadata = { title: "Approved Timetables • EduGrid" };
import { approvedTimetables } from "@/data/demo";

export default async function ApprovedForMe({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const sp = await searchParams;
  const user = typeof sp?.user === "string" && sp.user.length > 0 ? sp.user : "teacher@college.edu";
  const mine = approvedTimetables.filter((t) => t.assignedToEmails.includes(user));
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Approved for Me</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {mine.map((t) => (
          <div key={t.id} className="card p-4 text-sm">
            <div className="font-medium">{t.title}</div>
            <div className="text-xs text-muted">Owner: {t.owner}</div>
            <div className="text-xs text-muted">{t.week} • {t.updatedAt}</div>
          </div>
        ))}
        {mine.length === 0 && <div className="text-sm text-muted">No approved timetables assigned yet.</div>}
      </div>
    </div>
  );
}


