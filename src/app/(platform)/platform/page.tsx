// apps/nexus-console/src/app/(platform)/platform/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useMemo, useState } from "react";

/**
 * Full-bleed section title with purple→blue→white lines (same treatment as your homepage).
 */
function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div style={styles.sectionTitleBleed}>
      <div style={styles.sectionTitleOuter}>
        <div style={styles.sectionTitleLineLeft} aria-hidden="true" />
        <div style={styles.sectionTitleCenter}>
          <h3 style={styles.sectionTitleText}>{title}</h3>
          {subtitle ? (
            <div style={styles.sectionSubtitle}>{subtitle}</div>
          ) : null}
        </div>
        <div style={styles.sectionTitleLineRight} aria-hidden="true" />
      </div>
    </div>
  );
}

function ArchitectureStack() {
  return (
    <div style={styles.archStackWrap}>
      {/* central vertical beam */}
      <div style={styles.archRail} aria-hidden="true" />

      {/* PLATFORM */}
      <div style={{ ...styles.archBox, ...styles.archBoxTop }}>
        PLATFORM
        {/* bright centered glow under box */}
        <div style={styles.archUnderGlow} aria-hidden="true" />
      </div>

      {/* connector */}
      <div style={styles.archConnector}>
        <div style={styles.archConnectorGlow} aria-hidden="true" />
        <div style={styles.archConnectorDot} aria-hidden="true" />
      </div>

      {/* SUITES */}
      <div style={{ ...styles.archBox, ...styles.archBoxMid }}>
        SUITES
        {/* a slightly stronger glow under SUITES like your reference */}
        <div style={styles.archUnderGlowStrong} aria-hidden="true" />
      </div>

      {/* connector */}
      <div style={styles.archConnector}>
        <div style={styles.archConnectorGlow} aria-hidden="true" />
        <div style={styles.archConnectorDot} aria-hidden="true" />
      </div>

      {/* ENGINES */}
      <div style={{ ...styles.archBox, ...styles.archBoxBot }}>ENGINES</div>
    </div>
  );
}

type NotCard = { title: string; body: string };

export default function PlatformPage() {
  const cards: NotCard[] = useMemo(
    () => [
      {
        title: "Not a Dashboard",
        body: "No static dashboards here. Nexus produces the data that feeds your operational workflows.",
      },
      {
        title: "Not a Single Product",
        body: "Nexus is a platform of capabilities — not a singular tool or packaged app.",
      },
      {
        title: "Not a GIS Tool",
        body: "Nexus is the system behind the systems. It can generate the GIS tools you might display.",
      },
    ],
    [],
  );

  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((v) => (v - 1 + cards.length) % cards.length);
  const next = () => setIdx((v) => (v + 1) % cards.length);

  return (
    <div style={styles.pageBg}>
      {/* Background image (put your background-only export at /public/platform-bg.png) */}
      <div style={styles.bgImage} aria-hidden="true" />
      <div style={styles.bgVignette} aria-hidden="true" />
      <div style={styles.bgNoise} aria-hidden="true" />

      <div style={styles.wrapper}>
        {/* HERO */}
        <section style={styles.hero}>
          <div style={styles.heroGrid}>
            <div>
              <div style={styles.heroBrand}>
                <span style={styles.heroBrandWord}>Waypoint</span>{" "}
                <span style={styles.heroBrandEmph}>Nexus</span>
              </div>

              <div style={styles.heroTagline}>
                The operational backbone
                <br />
                behind spatial intelligence systems.
              </div>

              <div style={styles.heroBtns}>
                <Link href="/suites" style={styles.primary}>
                  VIEW SUITES
                </Link>
                <Link href="/demo" style={styles.secondary}>
                  ENTER DEMO
                </Link>
              </div>
            </div>

            <div style={styles.heroLogo}>
              <Image
                src="/nexus-logo.png"
                alt="Waypoint Nexus"
                width={560}
                height={560}
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section style={styles.archSection}>
          <SectionTitle
            title="The Nexus Architecture"
            subtitle="An orchestrated system for spatial-temporal intelligence."
          />
          <ArchitectureStack />
        </section>

        {/* WHAT NEXUS IS */}
        <section style={styles.isSection}>
          <SectionTitle title="What Nexus Is" />

          <div style={styles.isGrid}>
            {/* Orchestration & Tenancy */}
            <div style={styles.isCard}>
              <div
                style={{
                  ...styles.isMediaBase,
                  backgroundImage: "url('/orchestration-tenancy.png')",
                }}
              >
                <div style={styles.isMediaOverlay} />
              </div>
              <div style={styles.isCardBody}>
                <div style={styles.isCardTitle}>
                  Orchestration &amp; Tenancy
                </div>
                <div style={styles.isCardText}>
                  Providing a secure and scalable orchestration layer. Enabling
                  multi-tenant architecture for isolated projects.
                </div>
              </div>
            </div>

            {/* Intelligence Pipelines */}
            <div style={styles.isCard}>
              <div
                style={{
                  ...styles.isMediaBase,
                  backgroundImage: "url('/intelligence-pipelines.png')",
                }}
              >
                <div style={styles.isMediaOverlay} />
              </div>
              <div style={styles.isCardBody}>
                <div style={styles.isCardTitle}>Intelligence Pipelines</div>
                <div style={styles.isCardText}>
                  Transforming spatial and temporal inputs into actionable
                  datasets.
                </div>
              </div>
            </div>

            {/* Artifact Lifecycle */}
            <div style={styles.isCard}>
              <div
                style={{
                  ...styles.isMediaBase,
                  backgroundImage: "url('/artifact-lifecycle.png')",
                }}
              >
                <div style={styles.isMediaOverlay} />
              </div>
              <div style={styles.isCardBody}>
                <div style={styles.isCardTitle}>Artifact Lifecycle</div>
                <div style={styles.isCardText}>
                  Managing the lifecycle of digital twins, dashboards, reports,
                  and more.
                </div>
              </div>
            </div>

            {/* Systems Integration */}
            <div style={styles.isCard}>
              <div
                style={{
                  ...styles.isMediaBase,
                  backgroundImage: "url('/systems-integration.png')",
                }}
              >
                <div style={styles.isMediaOverlay} />
              </div>
              <div style={styles.isCardBody}>
                <div style={styles.isCardTitle}>Systems Integration</div>
                <div style={styles.isCardText}>
                  Deploying outputs to other systems, APIs, and destinations.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT NEXUS IS NOT */}
        <section style={styles.notSection}>
          <SectionTitle title="What Nexus Is Not" />

          <div style={styles.notCarouselWrap}>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous"
              style={styles.arrowBtn}
            >
              ‹
            </button>

            <div style={styles.notCard}>
              <div style={styles.notCardTitle}>{cards[idx].title}</div>
              <div style={styles.notCardText}>{cards[idx].body}</div>
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next"
              style={styles.arrowBtn}
            >
              ›
            </button>
          </div>

          <div style={styles.dots} aria-hidden="true">
            {cards.map((_, i) => (
              <div
                key={i}
                style={{
                  ...styles.dot,
                  ...(i === idx ? styles.dotActive : null),
                }}
              />
            ))}
          </div>

          <div style={styles.bottomBtns}>
            <Link href="/suites" style={styles.primary}>
              VIEW SUITES
            </Link>
            <Link href="/demo" style={styles.secondary}>
              ENTER DEMO
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  // ===== BACKGROUND =====
  pageBg: { position: "relative", width: "100%", overflow: "hidden" },
  bgImage: {
    position: "fixed",
    inset: 0,
    backgroundImage: "url('/platform-bg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    transform: "scale(1.02)",
    filter: "saturate(1.05) contrast(1.05)",
    zIndex: -3,
  },
  bgVignette: {
    position: "fixed",
    inset: 0,
    background:
      "radial-gradient(900px 600px at 50% 20%, rgba(50,140,255,.10) 0%, rgba(0,0,0,.62) 60%, rgba(0,0,0,.85) 100%)",
    zIndex: -2,
    pointerEvents: "none",
  },
  bgNoise: {
    position: "fixed",
    inset: 0,
    backgroundImage:
      "linear-gradient(0deg, rgba(255,255,255,.035) 1px, rgba(0,0,0,0) 1px)",
    backgroundSize: "1px 6px",
    opacity: 0.1,
    zIndex: -1,
    pointerEvents: "none",
    mixBlendMode: "overlay",
  },

  // ===== LAYOUT =====
  wrapper: { maxWidth: 1080, margin: "0 auto", padding: "0 40px 110px" },

  // ===== HERO =====
  hero: { padding: "72px 0 34px" },
  heroGrid: {
    display: "grid",
    gridTemplateColumns: "1.05fr .95fr",
    alignItems: "center",
    gap: 24,
  },
  heroBrand: {
    fontSize: 46,
    fontWeight: 800,
    letterSpacing: 0.2,
    textShadow: "0 1px 26px rgba(0,0,0,.55)",
    marginBottom: 8,
  },
  heroBrandWord: { color: "rgba(255,255,255,.92)" },
  heroBrandEmph: { color: "rgba(120,210,255,.95)" },
  heroTagline: {
    fontSize: 14,
    letterSpacing: 0.2,
    opacity: 0.8,
    lineHeight: 1.6,
    textShadow: "0 1px 18px rgba(0,0,0,.55)",
    marginBottom: 18,
    maxWidth: 420,
  },
  heroBtns: { display: "flex", gap: 12, flexWrap: "wrap", marginTop: 10 },
  heroLogo: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    opacity: 0.98,
    filter: "drop-shadow(0 14px 38px rgba(60,160,255,.25))",
  },

  // ===== BUTTONS (your existing tokens) =====
  primary: {
    padding: "11px 18px",
    border: "1px solid rgba(90,190,255,.75)",
    background: "rgba(25,120,220,.18)",
    borderRadius: 10,
    textDecoration: "none",
    color: "white",
    letterSpacing: 1,
    fontSize: 12,
    boxShadow: "0 0 18px rgba(70,170,255,.15)",
  },
  secondary: {
    padding: "11px 18px",
    border: "1px solid rgba(255,255,255,.26)",
    background: "rgba(0,0,0,.22)",
    borderRadius: 10,
    textDecoration: "none",
    color: "white",
    letterSpacing: 1,
    fontSize: 12,
  },

  // ===== FULL-BLEED SECTION TITLES (purple/blue/white lines) =====
  sectionTitleBleed: {
    width: "100vw",
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    margin: "0 0 18px",
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
  sectionTitleCenter: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    alignItems: "center",
  },
  sectionTitleText: {
    margin: 0,
    fontSize: 22,
    fontWeight: 800,
    letterSpacing: 0.2,
    textAlign: "center",
    textShadow: "0 1px 18px rgba(0,0,0,.55)",
    whiteSpace: "nowrap",
  },
  sectionSubtitle: {
    opacity: 0.72,
    fontSize: 13,
    lineHeight: 1.6,
    textAlign: "center",
    textShadow: "0 1px 14px rgba(0,0,0,.45)",
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

  // ===== ARCHITECTURE =====
  archSection: { padding: "18px 0 56px", textAlign: "center" },
  archStackWrap: {
    position: "relative",
    margin: "0 auto",
    width: "100%",
    maxWidth: 560,
    padding: "14px 0 20px",
  },
  archRail: {
    position: "absolute",
    left: "50%",
    top: 6,
    bottom: 6,
    width: 2,
    transform: "translateX(-50%)",
    background:
      "linear-gradient(180deg," +
      "rgba(255,255,255,0) 0%," +
      "rgba(120,210,255,.55) 18%," +
      "rgba(120,210,255,.25) 55%," +
      "rgba(170,120,255,.18) 78%," +
      "rgba(255,255,255,0) 100%)",
    boxShadow: "0 0 14px rgba(80,170,255,.18), 0 0 28px rgba(80,170,255,.10)",
    opacity: 0.95,
  },
  archBox: {
    position: "relative", // needed for the under-glow
    margin: "0 auto",
    width: "86%",
    padding: "14px 18px",
    borderRadius: 12,
    color: "rgba(255,255,255,.92)",
    fontWeight: 800,
    letterSpacing: 2,
    fontSize: 12,
    textShadow: "0 1px 18px rgba(0,0,0,.55)",
    backdropFilter: "blur(7px)",
    border: "1px solid rgba(120,210,255,.32)",
    background:
      "linear-gradient(180deg, rgba(10,18,30,.62) 0%, rgba(0,0,0,.30) 100%)",
    boxShadow:
      "0 0 18px rgba(80,170,255,.14)," +
      "0 0 34px rgba(80,170,255,.08)," +
      "inset 0 0 0 1px rgba(255,255,255,.05)",
  },
  archBoxTop: { width: "72%" },
  archBoxMid: { width: "94%", padding: "18px 18px" },
  archBoxBot: { width: "62%" },

  archConnector: {
    position: "relative",
    height: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  archConnectorGlow: {
    position: "absolute",
    left: "50%",
    top: 2,
    width: 2,
    height: 14,
    transform: "translateX(-50%)",
    background: "rgba(120,210,255,.55)",
    boxShadow: "0 0 16px rgba(80,170,255,.22)",
  },
  archConnectorDot: {
    width: 6,
    height: 6,
    borderRadius: 999,
    background: "rgba(160,230,255,.95)",
    boxShadow: "0 0 10px rgba(140,220,255,.45), 0 0 18px rgba(80,170,255,.20)",
  },

  // bright centered glow under PLATFORM / SUITES (what you asked for)
  archUnderGlow: {
    position: "absolute",
    left: "50%",
    bottom: -10,
    width: "60%",
    height: 18,
    transform: "translateX(-50%)",
    background:
      "radial-gradient(closest-side, rgba(170,120,255,.22) 0%, rgba(90,170,255,.32) 35%, rgba(255,255,255,.38) 55%, rgba(255,255,255,0) 100%)",
    filter: "blur(2px)",
    opacity: 0.95,
    pointerEvents: "none",
  },
  archUnderGlowStrong: {
    position: "absolute",
    left: "50%",
    bottom: -12,
    width: "72%",
    height: 22,
    transform: "translateX(-50%)",
    background:
      "radial-gradient(closest-side, rgba(170,120,255,.26) 0%, rgba(90,170,255,.40) 35%, rgba(255,255,255,.46) 58%, rgba(255,255,255,0) 100%)",
    filter: "blur(2.2px)",
    opacity: 1,
    pointerEvents: "none",
  },

  // ===== WHAT NEXUS IS =====
  isSection: { padding: "10px 0 54px" },
  isGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 16,
    marginTop: 18,

    // keeps the section from looking too “tall” and improves alignment
    alignItems: "stretch",
  },

  isCard: {
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,.10)",
    background: "rgba(0,0,0,.22)",
    overflow: "hidden",
    boxShadow: "0 0 22px rgba(20,90,160,.10)",
    backdropFilter: "blur(6px)",

    // ✅ forces consistent card height
    display: "flex",
    flexDirection: "column",
    minHeight: 220,
  },

  // ✅ smaller image header
  isMediaBase: {
    height: 300, // was ~150
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
    backgroundRepeat: "no-repeat",
    borderBottom: "1px solid rgba(255,255,255,.08)",
  },

  isMediaOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(0,0,0,.06) 0%, rgba(0,0,0,.78) 100%)",
  },

  // ✅ more space for copy, consistent layout
  isCardBody: {
    padding: "14px 16px 16px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  isCardTitle: {
    fontWeight: 800,
    fontSize: 13,
    letterSpacing: 0.3,
    opacity: 0.95,
    marginBottom: 8,
  },

  isCardText: {
    opacity: 0.74,
    fontSize: 12,
    lineHeight: 1.65,
    margin: 0,
    maxWidth: 520,
  },

  // ===== WHAT NEXUS IS NOT =====
  notSection: { padding: "10px 0 0", textAlign: "center" },
  notCarouselWrap: {
    margin: "18px auto 10px",
    display: "grid",
    gridTemplateColumns: "44px 1fr 44px",
    alignItems: "center",
    gap: 12,
    maxWidth: 820,
  },
  arrowBtn: {
    width: 44,
    height: 44,
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(0,0,0,.28)",
    color: "rgba(255,255,255,.88)",
    cursor: "pointer",
    fontSize: 26,
    lineHeight: "42px",
    boxShadow: "0 0 18px rgba(80,170,255,.08)",
    userSelect: "none",
  },
  notCard: {
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,.10)",
    background: "rgba(0,0,0,.22)",
    padding: "18px 18px 16px",
    textAlign: "left",
    backdropFilter: "blur(6px)",
    boxShadow: "0 0 22px rgba(20,90,160,.10)",
    minHeight: 96,
  },
  notCardTitle: {
    fontWeight: 800,
    letterSpacing: 0.3,
    marginBottom: 6,
    opacity: 0.95,
  },
  notCardText: { opacity: 0.72, fontSize: 12, lineHeight: 1.6, margin: 0 },
  dots: {
    display: "flex",
    justifyContent: "center",
    gap: 8,
    margin: "8px 0 18px",
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 999,
    background: "rgba(255,255,255,.16)",
    border: "1px solid rgba(255,255,255,.10)",
  },
  dotActive: {
    background: "rgba(140,220,255,.75)",
    boxShadow: "0 0 14px rgba(80,170,255,.25)",
    border: "1px solid rgba(120,210,255,.35)",
  },
  bottomBtns: {
    display: "flex",
    justifyContent: "center",
    gap: 12,
    flexWrap: "wrap",
    paddingTop: 6,
  },
};
