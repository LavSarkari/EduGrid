export const metadata = { title: "Create Timetable • EduGrid" };

const sections = [
  "Institution Details",
  "Classrooms",
  "Batches",
  "Subjects",
  "Classes per day/week",
  "Faculty availability",
  "Leaves info",
  "Fixed classes",
];

export default function CreateTimetablePage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Create Timetable</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {sections.map((title) => (
          <div key={title} className="card">
            <div className="card-header">{title}</div>
            <div className="card-content text-sm text-muted">
              Configure {title.toLowerCase()} here.
            </div>
          </div>
        ))}
      </div>
      <div>
        <button className="btn-primary">Generate Timetable</button>
      </div>
    </div>
  );
}

 
