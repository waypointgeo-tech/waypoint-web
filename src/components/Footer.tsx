import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      {/* Top blue glow line (matches header) */}
      <div style={styles.topGlow} />

      <div style={styles.inner}>
        {/* BRAND BLOCK */}
        <div style={styles.brandBlock}>
          <Image
            src="/logo.png"
            alt="Waypoint Geospatial"
            width={260}
            height={260}
            style={styles.logo}
          />

          <div style={styles.brandText}>
            <div style={styles.brandTitle}>WAYPOINT</div>
            <div style={styles.brandSubtitle}>GEOSPATIAL</div>
            <div style={styles.tagline}>
              Operational intelligence infrastructure.
            </div>
          </div>
        </div>

        {/* CENTER DIVIDER (purple → blue → white → blue → purple) */}
        <div style={styles.centerDivider} />

        {/* BOTTOM ROW */}
        <div style={styles.bottomRow}>
          <div style={styles.copy}>© {year} Waypoint Geospatial</div>

          <div style={styles.links}>
            <Link href="/privacy" style={styles.link}>
              Privacy
            </Link>
            <Link href="/security" style={styles.link}>
              Security
            </Link>
            <Link href="/legal" style={styles.link}>
              Legal
            </Link>
          </div>

          <div style={styles.powered}>
            Powered by{" "}
            <Link href="/platform" style={styles.poweredLink}>
              Waypoint Nexus
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

const styles: Record<string, any> = {
  footer: {
    position: "relative",
    padding: "20px 0 18px",
    background: "rgba(5,5,16,.55)",
  },

  /* ---------- TOP HEADER-STYLE GLOW ---------- */

  topGlow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 2,
    background:
      "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(80,190,255,.6) 20%, rgba(80,190,255,1) 50%, rgba(80,190,255,.6) 80%, rgba(0,0,0,0) 100%)",
    boxShadow: "0 0 18px rgba(80,190,255,.35), 0 0 32px rgba(80,190,255,.18)",
  },

  inner: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 24px",
  },

  /* ---------- BRAND BLOCK ---------- */

  brandBlock: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
    paddingTop: 3,
    paddingBottom: 3,
  },

  logo: {
    objectFit: "contain",
  },

  brandText: {
    display: "flex",
    flexDirection: "column",
    lineHeight: 1.1,
  },

  brandTitle: {
    fontSize: 30,
    fontWeight: 700,
    letterSpacing: 2,
  },

  brandSubtitle: {
    fontSize: 12,
    letterSpacing: 6,
    opacity: 0.75,
    marginTop: 3,
  },

  tagline: {
    fontSize: 14,
    opacity: 0.65,
    marginTop: 6,
  },

  /* ---------- CENTER DIVIDER ---------- */

  centerDivider: {
    height: 2,
    borderRadius: 999,
    margin: "0 auto 22px",
    width: "100%",
    background:
      "linear-gradient(90deg," +
      "rgba(170,120,255,.35) 0%," + // purple edge
      "rgba(90,170,255,.65) 25%," + // blue ramp
      "rgba(255,255,255,1) 50%," + // white center
      "rgba(90,170,255,.65) 75%," + // blue ramp
      "rgba(170,120,255,.35) 100%)", // purple edge
    boxShadow: "0 0 12px rgba(170,120,255,.2), 0 0 22px rgba(90,170,255,.25)",
  },

  /* ---------- BOTTOM ROW ---------- */

  bottomRow: {
    display: "grid",
    gridTemplateColumns: "1fr auto 1fr",
    alignItems: "center",
    gap: 12,
  },

  copy: {
    fontSize: 12,
    opacity: 0.55,
  },

  links: {
    display: "flex",
    gap: 22,
    justifyContent: "center",
  },

  link: {
    fontSize: 13,
    opacity: 0.85,
    textDecoration: "none",
    color: "white",
  },

  powered: {
    fontSize: 12,
    opacity: 0.55,
    textAlign: "right",
  },

  poweredLink: {
    color: "rgba(120,200,255,.95)",
    textDecoration: "none",
  },
};
