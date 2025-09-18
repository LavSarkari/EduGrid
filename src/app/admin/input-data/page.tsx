export const metadata = { title: "Input Data • EduGrid" };

import { faculty as demoFaculty } from "@/data/demo";

export default function AdminInputDataPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Input Data</h2>
      <div className="card">
        <div className="card-header">Faculty</div>
        <div className="card-content overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-muted">
              <tr className="border-b border-border">
                <th className="py-2 pr-4">Name</th>
                <th className="py-2 pr-4">ID</th>
                <th className="py-2 pr-4">Subject</th>
                <th className="py-2 pr-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {demoFaculty.map((f) => (
                <tr key={f.id} className="border-b border-border last:border-0">
                  <td className="py-2 pr-4"><input className="w-full rounded-lg border border-border px-2 py-1" defaultValue={f.name} /></td>
                  <td className="py-2 pr-4"><input className="w-full rounded-lg border border-border px-2 py-1" defaultValue={f.id} /></td>
                  <td className="py-2 pr-4"><input className="w-full rounded-lg border border-border px-2 py-1" defaultValue={f.subject} /></td>
                  <td className="py-2 pr-4"><button className="btn-secondary">Save</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

