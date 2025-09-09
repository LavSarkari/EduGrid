"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Table, HelpCircle, LogOut, CalendarCheck } from "lucide-react";
import ThemeToggle from "@/app/theme-toggle";

const nav = [
  { href: "/teacher/dashboard", label: "My Timetables", icon: Table },
  { href: "/teacher/approved", label: "Approved for Me", icon: CalendarCheck },
  { href: "/teacher/help", label: "Help", icon: HelpCircle },
];

export default function TeacherLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="min-h-dvh grid md:grid-cols-[240px_1fr]">
      <aside className="hidden md:flex flex-col border-r border-border p-4 gap-4">
        <Link href="/teacher/dashboard" className="text-xl font-semibold tracking-tight px-3">EduGrid Teacher</Link>
        <nav className="flex-1 space-y-1">
          {nav.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link key={href} href={href} className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors ${active ? "bg-primary text-primary-foreground" : "hover:bg-gray-50"}`}>
                <Icon size={18} />
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>
        <Link href="/login" className="btn-secondary w-full justify-start gap-3"><LogOut size={18} /> Logout</Link>
      </aside>
      <div className="flex flex-col min-h-dvh">
        <header className="border-b border-border">
          <div className="container-responsive h-14 flex items-center justify-between gap-4">
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link className={`hover:opacity-80 ${pathname.startsWith('/teacher/dashboard') ? 'font-semibold' : ''}`} href="/teacher/dashboard">Dashboard</Link>
              <Link className={`hover:opacity-80 ${pathname.startsWith('/teacher/approved') ? 'font-semibold' : ''}`} href="/teacher/approved">Approved</Link>
              <Link className="hover:opacity-80" href="/teacher/help">Help</Link>
            </nav>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Link href="/login" className="btn-secondary">Logout</Link>
            </div>
          </div>
        </header>
        <main className="container-responsive py-6 space-y-6 flex-1">{children}</main>
      </div>
    </div>
  );
}


