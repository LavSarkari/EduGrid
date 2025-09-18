import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-dvh flex items-center justify-center px-6">
      <main className="w-full max-w-md text-center space-y-6">
        <Image
          src="/LOGO.jpg"
          alt="EduGrid logo"
          width={96}
          height={96}
          className="mx-auto rounded-full ring-1 ring-border"
          priority
        />
        <h1 className="text-4xl font-bold tracking-tight">EduGrid</h1>
        <p className="text-sm text-muted">A teacher-friendly timetable scheduler</p>
        <div className="pt-2">
          <Link href="/login" className="btn-primary w-full">Login</Link>
        </div>
        <p className="text-xs text-muted">Developed for SIH 2025 by Team BrainBox</p>
      </main>
    </div>
  );
}
