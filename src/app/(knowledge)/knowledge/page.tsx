type Row = {
  title: string;
  items: { title: string; meta?: string }[];
};

const rows: Row[] = [
  {
    title: "Foundations",
    items: [
      { title: "Waypoint Nexus - Overview", meta: "Platform" },
      { title: "7-Layer Backbone", meta: "Architecture" },
      { title: "Tenancy & Instances", meta: "Ops Model" },
      { title: "Engines vs Artifacts", meta: "System Logic" },
      { title: "Data Contracts", meta: "Authority" },
    ],
  },
  {
    title: "Suites (VSMs)",
    items: [
      { title: "Aviation & Airport Districts", meta: "VSM" },
      { title: "WOCS - Operational Command System", meta: "Defense Ops" },
      { title: "Land Intelligence Suite", meta: "Land" },
      { title: "Property Intelligence", meta: "Real Estate" },
    ],
  },
  {
    title: "Build Notes",
    items: [
      { title: "Monorepo Bootstrap Runbook", meta: "Infra" },
      { title: "Design Tokens & UI System", meta: "UI" },
      { title: "Supabase Template Plan", meta: "Backend" },
      { title: "Deployment (Netlify/Vercel)", meta: "Ops" },
    ],
  },
];

function Card({ title, meta }: { title: string; meta?: string }) {
  return (
    <div
      style={{
        minWidth: 260,
        maxWidth: 260,
        borderRadius: 16,
        border: "1px solid var(--stroke)",
        background: "var(--panel)",
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <div style={{ fontWeight: 650, lineHeight: 1.2 }}>{title}</div>
      {meta ? (
        <div style={{ color: "var(--muted)", fontSize: 13 }}>{meta}</div>
      ) : null}
      <div style={{ marginTop: 10, color: "var(--c)", fontSize: 13 }}>
        {"Open →"}
      </div>
    </div>
  );
}

function Row({ title, items }: Row) {
  return (
    <section style={{ marginTop: 26 }}>
      <div style={{ fontSize: 18, fontWeight: 650, marginBottom: 10 }}>
        {title}
      </div>
      <div
        style={{
          display: "flex",
          gap: 14,
          overflowX: "auto",
          paddingBottom: 8,
        }}
      >
        {items.map((x) => (
          <Card key={x.title} title={x.title} meta={x.meta} />
        ))}
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main style={{ padding: 8 }}>
      <section
        style={{
          borderRadius: 20,
          border: "1px solid var(--stroke)",
          background:
            "linear-gradient(90deg, rgba(165,120,255,.18), rgba(98,215,255,.10))",
          padding: 28,
        }}
      >
        <div style={{ fontSize: 34, fontWeight: 800 }}>Knowledge</div>
        <div style={{ marginTop: 8, color: "var(--muted)", maxWidth: 860 }}>
          Atlas surface for Waypoint Nexus.
        </div>
      </section>

      {rows.map((r) => (
        <Row key={r.title} title={r.title} items={r.items} />
      ))}
    </main>
  );
}
