import Link from "next/link";
import Hero from "@/components/Hero";
import { approvedTimetables, subjects } from "@/data/demo";

export const metadata = { title: "Admin Dashboard • EduGrid" };

export default async function AdminDashboard({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const sp = await searchParams;
  const user = typeof sp?.user === "string" && sp.user.length > 0 ? sp.user : "admin@college.edu";
  return (
    <div className="space-y-6">
      {/* Hero */}
      <Hero
        badge="SMARTCLASS"
        title={`Welcome, ${user}!`}
        subtitle="Plan classes, manage resources, and generate conflict-free timetables effortlessly."
        primaryAction={{ href: "/admin/create-timetable", label: "Generate Timetable" }}
        secondaryAction={{ href: "/admin/generated-timetable", label: "View Timetable" }}
      />

      {/* KPIs removed as requested */}

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

        {/* Subjects list */}
        <div className="card">
          <div className="card-header">Subjects</div>
          <div className="card-content text-sm">
            <ul className="list-disc pl-5 space-y-1">
              {subjects.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


