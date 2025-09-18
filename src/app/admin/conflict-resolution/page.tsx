export const metadata = { title: "Conflict Resolution • EduGrid" };

const issues = [
  { id: 1, text: "Overlap detected: Class B.Tech CSE-2, Period 3, Room R102", solution: "Move to Period 5 or change room to R104" },
  { id: 2, text: "Faculty unavailable: Dr. Sharma on leave Tue", solution: "Assign substitute or shift to Wed" },
];

export default function AdminConflictResolution() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Conflict Resolution</h2>
      <div className="text-sm text-muted">
        Some conflicts were detected during timetable generation, possibly due to overlapping classes,
        unavailable teachers, or room capacity limits.
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          {issues.map((i) => (
            <div key={i.id} className="card">
              <div className="card-content space-y-1">
                <div className="font-medium">{i.text}</div>
                <div className="text-sm text-muted">Suggested: {i.solution}</div>
                <div className="flex gap-2 pt-2">
                  <button className="btn-secondary">Apply Fix</button>
                  <button className="btn-primary">Generate Again</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          <div className="card p-4 text-sm">Fix_tt1</div>
          <div className="card p-4 text-sm">Fix_tt2</div>
        </div>
      </div>
    </div>
  );
}

