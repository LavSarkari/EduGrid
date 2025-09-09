export default function NotFound() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center text-center gap-4 px-6">
      <h1>Page not found</h1>
      <p className="text-muted">The page you are looking for doesn’t exist or moved.</p>
      <a href="/" className="btn-primary">Go Home</a>
    </div>
  );
}


