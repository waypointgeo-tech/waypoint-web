// apps/nexus-console/src/app/(suites)/suites/page.tsx
"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";

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

function HeroRing() {
  return (
    <div style={styles.heroRingWrap} aria-hidden="true">
      <div style={styles.heroRingLine} />
      <div style={styles.heroRingDot} />
    </div>
  );
}

type Suite = {
  title: string;
  desc: string;
  href?: string;
  status: "demo" | "coming";
  image: string;
};

export default function Page() {
  const suites: Suite[] = useMemo(
    () => [
      {
        title: "Aviation Operations",
        desc: "Optimizing airspace, fleet, and safety.",
        href: "/demo",
        status: "demo",
        image: "/suite-aviation-operations.png",
      },
      {
        title: "Property Intelligence",
        desc: "Elevating site analytics and property evaluations.",
        href: "/demo",
        status: "demo",
        image: "/suite-property-intelligence.png",
      },
      {
        title: "Infrastructure & Assets",
        desc: "Managing infrastructure, risk, and compliance.",
        href: "/demo",
        status: "demo",
        image: "/suite-infrastructure-assets.png",
      },
      {
        title: "Hazard Preparedness",
        desc: "Enhancing situational awareness and risk response.",
        href: "/demo",
        status: "demo",
        image: "/suite-hazard-preparedness.png",
      },
    ],
    [],
  );

  const comingSoon: Suite[] = useMemo(
    () => [
      {
        title: "Government & Public Safety",
        desc: "Coming Soon",
        status: "coming",
        image: "/suite-government-public-safety.png",
      },
      {
        title: "Energy Infrastructure",
        desc: "Coming Soon",
        status: "coming",
        image: "/suite-energy-infrastructure.png",
      },
      {
        title: "Insurance Intelligence",
        desc: "Coming Soon",
        status: "coming",
        image: "/suite-insurance-intelligence.png",
      },
    ],
    [],
  );

  const [idx, setIdx] = useState(0);
  const prev = () =>
    setIdx((v) => (v - 1 + comingSoon.length) % comingSoon.length);
  const next = () => setIdx((v) => (v + 1) % comingSoon.length);

  return (
    <div style={styles.pageBg}>
      {/* Background image (use the same background-only export as platform) */}
      <div style={styles.bgImage} aria-hidden="true" />
      <div style={styles.bgVignette} aria-hidden="true" />
      <div style={styles.bgNoise} aria-hidden="true" />

      <div style={styles.wrapper}>
        {/* HERO */}
        <section style={styles.hero}>
          <h1 style={styles.heroTitle}>
            Waypoint <span style={styles.heroEmph}>Suites</span>
          </h1>

          <div style={styles.heroKicker}>
            Domain-specific solutions powered by Waypoint Nexus
          </div>

          <p style={styles.heroBody}>
            Tailored suites of applications designed to harness the full power
            of the Waypoint Nexus platform. Each suite addresses unique
            challenges across domains by transforming spatial, temporal, and
            operational data into actionable intelligence.
          </p>

          <HeroRing />
        </section>

        {/* SUITES GRID */}
        <section style={styles.gridSection}>
          <SectionTitle
            title="The Nexus Suites"
            subtitle="An orchestrated system for spatial-temporal intelligence."
          />

          <div style={styles.suiteGrid}>
            {suites.map((s) => (
              <div key={s.title} style={styles.suiteCard}>
                <div
                  style={{
                    ...styles.suiteMedia,
                    backgroundImage: `url('${s.image}')`,
                  }}
                >
                  <div style={styles.mediaOverlay} />
                </div>

                <div style={styles.suiteBody}>
                  <div style={styles.suiteTitle}>{s.title}</div>
                  <div style={styles.suiteDesc}>{s.desc}</div>

                  {s.status === "demo" && s.href ? (
                    <Link href={s.href} style={styles.tryDemoBtn}>
                      TRY DEMO
                    </Link>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* COMING SOON ROW */}
        <section style={styles.moreSection}>
          <SectionTitle title="And More to Come..." />

          <div style={styles.comingRow}>
            <button
              type="button"
              aria-label="Previous"
              onClick={prev}
              style={styles.arrowBtn}
            >
              ‹
            </button>

            <div style={styles.comingViewport}>
              {comingSoon.map((s, i) => (
                <div
                  key={s.title}
                  style={{
                    ...styles.comingCard,
                    transform: `translateX(${(i - idx) * 104}%)`,
                  }}
                >
                  <div
                    style={{
                      ...styles.comingMedia,
                      backgroundImage: `url('${s.image}')`,
                    }}
                  >
                    <div style={styles.mediaOverlayStrong} />
                  </div>
                  <div style={styles.comingTitle}>{s.title}</div>
                  <div style={styles.comingLabel}>Coming Soon</div>
                </div>
              ))}
            </div>

            <button
              type="button"
              aria-label="Next"
              onClick={next}
              style={styles.arrowBtn}
            >
              ›
            </button>
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

  wrapper: { maxWidth: 1080, margin: "0 auto", padding: "0 40px 120px" },

  // ===== HERO =====
  hero: { padding: "64px 0 18px", textAlign: "center" },
  heroTitle: {
    margin: 0,
    fontSize: 44,
    fontWeight: 800,
    letterSpacing: 0.2,
    textShadow: "0 1px 26px rgba(0,0,0,.55)",
  },
  heroEmph: { color: "rgba(120,210,255,.95)" },
  heroKicker: {
    marginTop: 10,
    opacity: 0.78,
    fontSize: 13,
    letterSpacing: 0.2,
    textShadow: "0 1px 18px rgba(0,0,0,.45)",
  },
  heroBody: {
    margin: "18px auto 0",
    maxWidth: 860,
    opacity: 0.75,
    lineHeight: 1.75,
    fontSize: 13,
    textShadow: "0 1px 14px rgba(0,0,0,.45)",
  },

  // ring line under hero
  heroRingWrap: {
    position: "relative",
    margin: "26px auto 0",
    width: "min(720px, 92vw)",
    height: 62,
  },
  heroRingLine: {
    position: "absolute",
    left: "50%",
    top: 22,
    width: "100%",
    height: 2,
    transform: "translateX(-50%)",
    borderRadius: 999,
    background:
      "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(120,210,255,.45) 35%, rgba(255,255,255,.90) 70%, rgba(255,255,255,0) 100%)",
    boxShadow: "0 0 22px rgba(80,170,255,.18)",
    opacity: 0.9,
  },
  heroRingDot: {
    position: "absolute",
    left: "50%",
    top: 18,
    width: 10,
    height: 10,
    transform: "translateX(-50%)",
    borderRadius: 999,
    background: "rgba(160,230,255,.95)",
    boxShadow: "0 0 10px rgba(140,220,255,.45), 0 0 18px rgba(80,170,255,.25)",
  },

  // ===== FULL-BLEED SECTION TITLES =====
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
    fontSize: 20,
    fontWeight: 800,
    letterSpacing: 0.2,
    textAlign: "center",
    textShadow: "0 1px 18px rgba(0,0,0,.55)",
    whiteSpace: "nowrap",
  },
  sectionSubtitle: {
    opacity: 0.72,
    fontSize: 12,
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

  // ===== SECTIONS =====
  gridSection: { padding: "24px 0 34px" },

  suiteGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: 14,
    marginTop: 16,
  },
  suiteCard: {
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,.10)",
    background: "rgba(0,0,0,.22)",
    overflow: "hidden",
    boxShadow: "0 0 22px rgba(20,90,160,.10)",
    backdropFilter: "blur(6px)",
    display: "flex",
    flexDirection: "column",
    minHeight: 260,
  },
  suiteMedia: {
    height: 126,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    borderBottom: "1px solid rgba(255,255,255,.08)",
  },
  mediaOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(0,0,0,.10) 0%, rgba(0,0,0,.76) 100%)",
  },
  suiteBody: {
    padding: "12px 12px 14px",
    display: "flex",
    flexDirection: "column",
    gap: 8,
    flex: 1,
    justifyContent: "space-between",
  },
  suiteTitle: {
    fontWeight: 800,
    fontSize: 12,
    letterSpacing: 0.2,
    opacity: 0.95,
  },
  suiteDesc: {
    opacity: 0.72,
    fontSize: 11,
    lineHeight: 1.55,
    minHeight: 34,
  },
  tryDemoBtn: {
    alignSelf: "flex-start",
    padding: "7px 11px",
    borderRadius: 10,
    border: "1px solid rgba(90,190,255,.55)",
    background: "rgba(25,120,220,.12)",
    color: "white",
    textDecoration: "none",
    letterSpacing: 1,
    fontSize: 11,
    boxShadow: "0 0 18px rgba(70,170,255,.10)",
  },

  // ===== COMING SOON =====
  moreSection: { padding: "18px 0 0" },
  comingRow: {
    margin: "8px auto 0",
    display: "grid",
    gridTemplateColumns: "44px 1fr 44px",
    alignItems: "center",
    gap: 12,
    maxWidth: 980,
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
  comingViewport: {
    position: "relative",
    overflow: "hidden",
    height: 150,
    borderRadius: 14,
  },
  comingCard: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,.10)",
    background: "rgba(0,0,0,.22)",
    overflow: "hidden",
    transition: "transform 350ms ease",
    boxShadow: "0 0 22px rgba(20,90,160,.10)",
    backdropFilter: "blur(6px)",
  },
  comingMedia: {
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
  },
  mediaOverlayStrong: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(0,0,0,.22) 0%, rgba(0,0,0,.82) 100%)",
  },
  comingTitle: {
    position: "absolute",
    left: 14,
    bottom: 32,
    fontWeight: 800,
    fontSize: 12,
    letterSpacing: 0.2,
    opacity: 0.95,
    textShadow: "0 1px 18px rgba(0,0,0,.55)",
  },
  comingLabel: {
    position: "absolute",
    left: 14,
    bottom: 12,
    opacity: 0.75,
    fontSize: 11,
    textShadow: "0 1px 14px rgba(0,0,0,.55)",
  },
};
