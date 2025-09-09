export const metadata = { title: "Settings • EduGrid" };

export default function TeacherSettingsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Settings</h2>

      <div className="card">
        <div className="card-header">Preferences</div>
        <div className="card-content grid gap-4 md:grid-cols-2">
          <label className="flex items-center gap-3">
            <input type="checkbox" className="accent-primary" defaultChecked />
            <span className="text-sm">Show next class on dashboard</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="accent-primary" defaultChecked />
            <span className="text-sm">Email reminders</span>
          </label>
        </div>
      </div>

      <div className="card">
        <div className="card-header">Profile</div>
        <div className="card-content grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-sm">Display Name</label>
            <input className="mt-1 w-full rounded-lg border border-border px-3 py-2" defaultValue="Teacher" />
          </div>
          <div>
            <label className="text-sm">Contact Email</label>
            <input className="mt-1 w-full rounded-lg border border-border px-3 py-2" defaultValue="teacher@college.edu" />
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


