"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>("teal");
  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const next = saved || "teal";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next === "blue" ? "blue" : "teal");
  }, []);
  function toggle() {
    const next = theme === "blue" ? "teal" : "blue";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next === "blue" ? "blue" : "teal");
    localStorage.setItem("theme", next);
  }
  return (
    <button className="btn-secondary" onClick={toggle}>{theme === "blue" ? "Teal Theme" : "Blue Theme"}</button>
  );
}


