export default function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginTop: 22 }}>
      <div style={{ marginBottom: 12 }}>
        <h2>{title}</h2>
        {subtitle ? <p style={{ marginTop: 0 }}>{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}
