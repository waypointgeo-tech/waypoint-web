import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={styles.body}>
        <Header />
        <main style={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

const styles: Record<string, any> = {
  body: {
    margin: 0,
    color: "white",
    backgroundColor: "#050510",

    // Full-page scrolling background (moves with page)
    backgroundImage: "url('/home-bg.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top",

    // Less “zoomed” than cover:
    // - 100% width keeps the composition consistent
    // - height auto allows you to scroll “through” the image as content grows
    backgroundSize: "100% auto",
  },

  main: {
    paddingTop: 140, // match your fixed header height
  },
};
