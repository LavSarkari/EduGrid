import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-dvh flex items-center justify-center px-6">
      <main className="w-full max-w-md text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">EduGrid</h1>
        <p className="text-sm text-muted">A teacher-friendly timetable scheduler</p>
        <div className="pt-2">
          <Link href="/login" className="btn-primary w-full">Login</Link>
        </div>
        <p className="text-xs text-muted">Developed for SIH 2025</p>
      </main>
    </div>
  );
}
