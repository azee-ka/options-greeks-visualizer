import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "OptionsSurface - Options Analytics & Visualization",
  description: "Advanced options analytics powered by Black-Scholes mathematics and real-time 3D visualization. Calculate Greeks, visualize volatility surfaces, and analyze multi-leg strategies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}