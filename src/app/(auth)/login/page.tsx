"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") || "");
    const role = String(form.get("role") || "teacher");
    if (role === "admin") {
      router.push(`/admin/dashboard?user=${encodeURIComponent(email)}`);
    } else {
      router.push(`/teacher/dashboard?user=${encodeURIComponent(email)}`);
    }
  }
  return (
    <div className="min-h-dvh flex items-center justify-center" style={{backgroundImage:"radial-gradient(circle at 20% 10%, #e6fffb 0, rgba(255,255,255,0) 40%), radial-gradient(circle at 80% 20%, #ecfeff 0, rgba(255,255,255,0) 35%)"}}>
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">EduGrid</h1>
          <p className="text-sm text-muted mt-1">Smart Classroom & Timetable Scheduler</p>
        </div>
        <div className="card">
          <div className="card-content space-y-4">
            <form className="space-y-4" onSubmit={onSubmit}>
              <div className="input-group text-left">
                <input id="email" name="email" type="email" required className="input" />
                <label htmlFor="email" className="user-label">Username / Email</label>
              </div>
              <div className="input-group text-left">
                <input id="password" name="password" type="password" required className="input" />
                <label htmlFor="password" className="user-label">Password</label>
              </div>
              <div className="text-left">
                <label className="text-sm font-medium text-foreground">Login as</label>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <label className="flex items-center gap-2 rounded-xl border border-border px-3 py-2 cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="role" value="teacher" defaultChecked className="accent-primary" />
                    <span className="text-sm">Teacher</span>
                  </label>
                  <label className="flex items-center gap-2 rounded-xl border border-border px-3 py-2 cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="role" value="admin" className="accent-primary" />
                    <span className="text-sm">Admin / HoD</span>
                  </label>
                </div>
              </div>
              <button className="btn-primary w-full" type="submit">Login</button>
            </form>
            <div className="text-center">
              <Link href="#" className="text-sm text-muted hover:underline">Forgot password?</Link>
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-muted mt-6">Developed for SIH 2025</p>
      </div>
    </div>
  );
}


