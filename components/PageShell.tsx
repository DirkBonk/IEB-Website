// components/PageShell.tsx
export default function PageShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className={className}>{children}</div>
    </main>
  );
}