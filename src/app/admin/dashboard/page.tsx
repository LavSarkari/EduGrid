import Link from "next/link";
import { approvedTimetables } from "@/data/demo";

export const metadata = { title: "Admin Dashboard • EduGrid" };

export default async function AdminDashboard({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const sp = await searchParams;
  const user = typeof sp?.user === "string" && sp.user.length > 0 ? sp.user : "admin@college.edu";
  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className="rounded-2xl p-6 md:p-8 text-primary-foreground" style={{background:"linear-gradient(135deg,#0d9488,#14b8a6)", position:"relative"}}>
        <div className="relative z-10">
          <div className="text-xs font-medium opacity-90">SMARTCLASS</div>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold">Welcome, {user}!</h1>
          <p className="mt-2 text-sm opacity-90">Plan classes, manage resources, and generate conflict-free timetables effortlessly.</p>
          <div className="mt-5 flex gap-3 flex-wrap">
            <Link href="/admin/create-timetable" className="btn-primary">Generate Timetable</Link>
            <Link href="/admin/generated-timetable" className="btn-secondary">View Timetable</Link>
          </div>
        </div>
        <div style={{position:"absolute", inset:0, backgroundImage:"radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)", backgroundSize:"16px 16px"}} />
      </div>

      {/* KPIs */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="card">
          <div className="card-content">
            <div className="text-sm text-muted">Pending Approvals</div>
            <div className="mt-1 text-2xl font-semibold">3</div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="text-sm text-muted">Conflicts Detected</div>
            <div className="mt-1 text-2xl font-semibold">2</div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="text-sm text-muted">Faculty On Leave</div>
            <div className="mt-1 text-2xl font-semibold">1</div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="text-sm text-muted">Datasets Updated</div>
            <div className="mt-1 text-2xl font-semibold">Today</div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {/* Approvals table */}
        <div className="card md:col-span-2 overflow-hidden">
          <div className="card-header">Awaiting Approval</div>
          <div className="card-content p-0 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="p-3 border-b border-border">Timetable</th>
                  <th className="p-3 border-b border-border">Owner</th>
                  <th className="p-3 border-b border-border">Updated</th>
                  <th className="p-3 border-b border-border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {approvedTimetables.map((t) => (
                  <tr key={t.id} className="border-b border-border last:border-0">
                    <td className="p-3">{t.title}</td>
                    <td className="p-3">{t.owner}</td>
                    <td className="p-3">{t.updatedAt}</td>
                    <td className="p-3 flex gap-2">
                      <button className="btn-secondary">Review</button>
                      <button className="btn-primary">Approve</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick links */}
        <div className="card">
          <div className="card-header">Quick Links</div>
          <div className="card-content grid gap-2">
            <Link href="/admin/input-data" className="btn-secondary">Manage Data</Link>
            <Link href="/admin/generated-timetable" className="btn-secondary">View Timetables</Link>
            <Link href="/admin/conflict-resolution" className="btn-secondary">Resolve Conflicts</Link>
          </div>
        </div>
      </div>
    </div>
  );
}


