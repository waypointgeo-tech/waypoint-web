import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.inner}>
        {/* HOME LINK (Logo + Brand) */}
        <Link href="/" style={styles.homeLink}>
          <div style={styles.left}>
            <div style={styles.logoWrap}>
              <Image
                src="/logo.png"
                alt="Waypoint Geospatial"
                width={200}
                height={200}
                priority
                style={styles.logoImg}
              />
            </div>

            <div style={styles.brand}>
              <div style={styles.title}>WAYPOINT</div>
              <div style={styles.subtitle}>GEOSPATIAL</div>
            </div>
          </div>
        </Link>

        {/* NAV */}
        <nav style={styles.nav}>
          <Link href="/platform" style={styles.link}>
            Platform
          </Link>
          <Link href="/suites" style={styles.link}>
            Suites
          </Link>
          <Link href="/artifacts" style={styles.link}>
            Artifacts
          </Link>
          <Link href="/demo" style={styles.link}>
            Demo
          </Link>
          <Link href="/knowledge" style={styles.link}>
            Knowledge
          </Link>
          <Link href="/access" style={styles.linkStrong}>
            Access
          </Link>
        </nav>

        <Link href="/contact" style={styles.contactBtn}>
          Contact
        </Link>
      </div>

      <div style={styles.glowLine} />
    </header>
  );
}

const styles: Record<string, any> = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: 110,
    zIndex: 10,
    background: "rgba(6, 8, 20, 0.35)",
    backdropFilter: "blur(12px)",
  },

  inner: {
    height: "100%",
    maxWidth: 1500,
    margin: "0 auto",
    padding: "0 60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  homeLink: {
    textDecoration: "none",
    cursor: "pointer",
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: 18,
  },

  logoWrap: {
    width: 150,
    height: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: "translateY(4px)",
  },

  logoImg: {
    width: 250,
    height: 250,
    objectFit: "contain",
  },

  brand: {
    display: "flex",
    flexDirection: "column",
    lineHeight: 1,
    transform: "translateY(2px)",
  },

  title: {
    fontSize: 22,
    fontWeight: 700,
    letterSpacing: 2,
    color: "rgba(255,255,255,0.95)",
  },

  subtitle: {
    fontSize: 12,
    letterSpacing: 6,
    opacity: 0.7,
    marginTop: 6,
    color: "rgba(255,255,255,0.7)",
  },

  nav: {
    display: "flex",
    alignItems: "center",
    gap: 36,
  },

  link: {
    textDecoration: "none",
    fontSize: 15,
    color: "rgba(255,255,255,0.78)",
  },

  linkStrong: {
    textDecoration: "none",
    fontSize: 15,
    color: "rgba(255,255,255,0.92)",
  },

  contactBtn: {
    textDecoration: "none",
    fontSize: 15,
    color: "rgba(255,255,255,0.9)",
    border: "1px solid rgba(255,255,255,0.35)",
    padding: "9px 20px",
    borderRadius: 8,
    background: "rgba(255,255,255,0.05)",
  },

  glowLine: {
    height: 2,
    background:
      "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(70,200,255,0.7) 25%, rgba(130,240,255,1) 50%, rgba(70,200,255,0.7) 75%, rgba(0,0,0,0) 100%)",
    boxShadow: "0 0 14px rgba(90,220,255,0.7), 0 0 28px rgba(90,220,255,0.35)",
  },
};
