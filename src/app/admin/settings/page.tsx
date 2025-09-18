export const metadata = { title: "Settings • EduGrid" };

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Settings</h2>

      <div className="card">
        <div className="card-header">General</div>
        <div className="card-content grid gap-4 md:grid-cols-2">
          <label className="flex items-center gap-3">
            <input type="checkbox" className="accent-primary" defaultChecked />
            <span className="text-sm">Enable conflict auto-detection</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="accent-primary" />
            <span className="text-sm">Email notifications for approvals</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="accent-primary" defaultChecked />
            <span className="text-sm">Allow teachers to request swaps</span>
          </label>
        </div>
      </div>

      <div className="card">
        <div className="card-header">Institute</div>
        <div className="card-content grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-sm">Institute Name</label>
            <input className="mt-1 w-full rounded-lg border border-border px-3 py-2" defaultValue="EduGrid Institute" />
          </div>
          <div>
            <label className="text-sm">Academic Week</label>
            <select className="mt-1 w-full rounded-lg border border-border px-3 py-2">
              <option>Mon–Fri</option>
              <option>Mon–Sat</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="btn-secondary">Discard</button>
        <button className="btn-primary">Save Changes</button>
      </div>
    </div>
  );
}


