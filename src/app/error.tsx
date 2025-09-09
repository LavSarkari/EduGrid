"use client";
export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center text-center gap-4 px-6">
      <h1>Something went wrong</h1>
      <p className="text-muted">{error.message || "An unexpected error occurred."}</p>
      <button onClick={reset} className="btn-primary">Try again</button>
    </div>
  );
}


