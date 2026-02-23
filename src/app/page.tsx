import Link from "next/link";
import Image from "next/image";
import React from "react";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div style={styles.sectionTitleBleed}>
      <div style={styles.sectionTitleOuter}>
        <div style={styles.sectionTitleLineLeft} aria-hidden="true" />
        <h3 style={styles.sectionTitleText}>{children}</h3>
        <div style={styles.sectionTitleLineRight} aria-hidden="true" />
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div style={styles.wrapper}>
      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>
          Building long-term platforms for spatial intelligence, digital twins,
          and decision infrastructure.
        </h1>

        <div style={styles.heroBtns}>
          <Link href="/platform" style={styles.primary}>
            EXPLORE PLATFORM
          </Link>
          <Link href="/demo" style={styles.secondary}>
            ENTER DEMO
          </Link>
        </div>
      </section>

      {/* PLATFORM */}
      <section style={styles.platformSection}>
        <div style={styles.platformGrid}>
          <div>
            {/* You asked for "Our Platform" to be H2 */}
            <h2 style={styles.kicker}>Our Platform</h2>

            <h2 style={styles.heading}>Waypoint Nexus:</h2>
            <div style={styles.subheading}>
              Spatial Intelligence &amp; Operations
            </div>

            <p style={styles.paragraph}>
              A unified platform for leveraging spatial, temporal, and
              operational data. Powering advanced systems and analytical
              processes that inform critical decisions.
            </p>

            <Link href="/platform" style={styles.inlineBtn}>
              DISCOVER WAYPOINT NEXUS
            </Link>
          </div>

          <div style={styles.centerLogo}>
            <Image
              src="/nexus-logo.png"
              alt="Waypoint Nexus"
              width={760}
              height={760}
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      </section>

      {/* DOMAINS */}
      <section style={styles.domainSection}>
        <SectionTitle>
          Powering Insights &amp; Operations Across Domains
        </SectionTitle>

        <div style={styles.domainGrid}>
          {/* Aviation */}
          <div style={styles.domainCard}>
            <div
              style={{
                ...styles.domainMediaBase,
                ...styles.domainMediaAviation,
              }}
            >
              <div style={styles.domainMediaOverlay} />
            </div>
            <div style={styles.domainCardTitle}>Aviation Operations</div>
            <div style={styles.domainCardText}>
              Optimizing airspace, fleet, and safety.
            </div>
          </div>

          {/* Property */}
          <div style={styles.domainCard}>
            <div
              style={{
                ...styles.domainMediaBase,
                ...styles.domainMediaProperty,
              }}
            >
              <div style={styles.domainMediaOverlay} />
            </div>
            <div style={styles.domainCardTitle}>Property Intelligence</div>
            <div style={styles.domainCardText}>
              Elevating site analytics and property evaluations.
            </div>
          </div>

          {/* Infrastructure */}
          <div style={styles.domainCard}>
            <div
              style={{
                ...styles.domainMediaBase,
                ...styles.domainMediaInfrastructure,
              }}
            >
              <div style={styles.domainMediaOverlay} />
            </div>
            <div style={styles.domainCardTitle}>
              Infrastructure &amp; Assets
            </div>
            <div style={styles.domainCardText}>
              Managing infrastructure, risk and compliance.
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={styles.finalCta}>
        <SectionTitle>Generating Artifacts That Drive Action</SectionTitle>

        <p style={styles.finalText}>
          Explore the capabilities of Waypoint Nexus through our interactive
          demo sandbox.
        </p>

        <div style={styles.heroBtns}>
          <Link href="/demo" style={styles.primary}>
            ENTER DEMO
          </Link>
          <Link href="/access" style={styles.secondary}>
            REQUEST ACCESS
          </Link>
        </div>
      </section>
    </div>
  );
}

const styles: Record<string, any> = {
  wrapper: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 40px 120px",
  },

  // HERO
  hero: {
    textAlign: "center",
    padding: "110px 0 120px",
  },
  heroTitle: {
    fontSize: 34,
    fontWeight: 700,
    lineHeight: 1.25,
    maxWidth: 980,
    margin: "0 auto 22px",
    textShadow: "0 1px 24px rgba(0,0,0,.55)",
  },
  heroBtns: {
    display: "flex",
    justifyContent: "center",
    gap: 14,
    flexWrap: "wrap",
  },

  // Buttons
  primary: {
    padding: "12px 20px",
    border: "1px solid rgba(90,190,255,.75)",
    background: "rgba(25,120,220,.18)",
    borderRadius: 10,
    textDecoration: "none",
    color: "white",
    letterSpacing: 1,
    fontSize: 13,
    boxShadow: "0 0 18px rgba(70,170,255,.15)",
  },
  secondary: {
    padding: "12px 20px",
    border: "1px solid rgba(255,255,255,.28)",
    background: "rgba(0,0,0,.22)",
    borderRadius: 10,
    textDecoration: "none",
    color: "white",
    letterSpacing: 1,
    fontSize: 13,
  },

  // Platform section
  platformSection: { padding: "70px 0 90px" },
  platformGrid: {
    display: "grid",
    gridTemplateColumns: "1.1fr .9fr",
    alignItems: "center",
    gap: 60,
  },
  kicker: {
    opacity: 0.78,
    margin: "0 0 10px",
    fontSize: 26, // "Our Platform" heading size
    fontWeight: 700,
  },
  heading: { fontSize: 44, margin: "8px 0", fontWeight: 800 },
  subheading: { opacity: 0.85, marginBottom: 14, fontSize: 15 },
  paragraph: {
    opacity: 0.78,
    lineHeight: 1.75,
    marginBottom: 18,
    maxWidth: 720,
  },
  inlineBtn: {
    padding: "10px 16px",
    border: "1px solid rgba(90,190,255,.55)",
    borderRadius: 10,
    textDecoration: "none",
    color: "white",
    letterSpacing: 1,
    fontSize: 12,
    background: "rgba(25,120,220,.12)",
  },
  centerLogo: { display: "flex", justifyContent: "center" },

  // FULL-BLEED TITLE WRAP (lines reach near viewport edges)
  sectionTitleBleed: {
    width: "100vw",
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    margin: "0 0 44px",
    padding: "0 40px",
    boxSizing: "border-box",
  },
  sectionTitleOuter: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 18,
  },
  sectionTitleText: {
    margin: 0,
    fontSize: 28,
    fontWeight: 800,
    letterSpacing: 0.2,
    textAlign: "center",
    textShadow: "0 1px 18px rgba(0,0,0,.55)",
    whiteSpace: "nowrap",
  },
  sectionTitleLineLeft: {
    flex: 1,
    height: 2,
    borderRadius: 999,
    background:
      "linear-gradient(90deg," +
      "rgba(170,120,255,.18) 0%," +
      "rgba(170,120,255,.28) 30%," +
      "rgba(90,170,255,.55) 62%," +
      "rgba(255,255,255,.92) 92%," +
      "rgba(255,255,255,0) 100%)",
    boxShadow:
      "0 0 10px rgba(170,120,255,.12), 0 0 18px rgba(90,170,255,.18), 0 0 26px rgba(90,170,255,.12)",
    opacity: 1,
  },
  sectionTitleLineRight: {
    flex: 1,
    height: 2,
    borderRadius: 999,
    background:
      "linear-gradient(270deg," +
      "rgba(170,120,255,.18) 0%," +
      "rgba(170,120,255,.28) 30%," +
      "rgba(90,170,255,.55) 62%," +
      "rgba(255,255,255,.92) 92%," +
      "rgba(255,255,255,0) 100%)",
    boxShadow:
      "0 0 10px rgba(170,120,255,.12), 0 0 18px rgba(90,170,255,.18), 0 0 26px rgba(90,170,255,.12)",
    opacity: 1,
  },

  // Domains
  domainSection: { padding: "80px 0 90px", textAlign: "center" },
  domainGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: 18,
  },
  domainCard: {
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,.10)",
    background: "rgba(0,0,0,.18)",
    overflow: "hidden",
    textAlign: "left",
  },

  // ✅ Card image area
  domainMediaBase: {
    height: 140,
    position: "relative",
    borderBottom: "1px solid rgba(255,255,255,.08)",
    backgroundSize: "cover",
    backgroundPosition: "center 35%",
    backgroundRepeat: "no-repeat",
  },
  domainMediaOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(0,0,0,.12) 0%, rgba(0,0,0,.70) 100%)",
  },
  domainMediaAviation: {
    backgroundImage: "url('/home-aviation-operations-graphic.png')",
  },
  domainMediaProperty: {
    backgroundImage: "url('/home-property-intelligence-graphic.png')",
  },
  domainMediaInfrastructure: {
    backgroundImage: "url('/home-infrastructure-assets-graphic.png')",
  },

  domainCardTitle: {
    padding: "16px 16px 6px",
    fontWeight: 700,
    opacity: 0.95,
  },
  domainCardText: {
    padding: "0 16px 16px",
    opacity: 0.72,
    fontSize: 13,
    lineHeight: 1.5,
  },

  // Final CTA
  finalCta: { padding: "70px 0 20px", textAlign: "center" },
  finalText: {
    margin: "0 auto 22px",
    maxWidth: 820,
    opacity: 0.75,
    lineHeight: 1.7,
    fontSize: 15,
    textShadow: "0 1px 14px rgba(0,0,0,.45)",
  },
};
