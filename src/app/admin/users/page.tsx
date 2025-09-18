export const metadata = { title: "Faculty & Batches • EduGrid" };

import { faculty as demoFaculty, batches as demoBatches } from "@/data/demo";

export default function AdminUsersPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Faculty & Batches</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="card">
          <div className="card-header">Faculty</div>
          <div className="card-content overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="p-2 border-b border-border">ID</th>
                  <th className="p-2 border-b border-border">Name</th>
                  <th className="p-2 border-b border-border">Subject</th>
                </tr>
              </thead>
              <tbody>
                {demoFaculty.map((f) => (
                  <tr key={f.id} className="border-b border-border last:border-0">
                    <td className="p-2">{f.id}</td>
                    <td className="p-2">{f.name}</td>
                    <td className="p-2">{f.subject}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <div className="card-header">Batches</div>
          <div className="card-content overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="p-2 border-b border-border">Code</th>
                  <th className="p-2 border-b border-border">Programme</th>
                  <th className="p-2 border-b border-border">Year</th>
                  <th className="p-2 border-b border-border">Section</th>
                </tr>
              </thead>
              <tbody>
                {demoBatches.map((b) => (
                  <tr key={b.code} className="border-b border-border last:border-0">
                    <td className="p-2">{b.code}</td>
                    <td className="p-2">{b.program}</td>
                    <td className="p-2">{b.year}</td>
                    <td className="p-2">{b.section}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}


