import type { Metadata } from "next";
import { Inter, Syncopate } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import GlobalCanvas from "@/components/canvas/GlobalCanvas";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syncopate = Syncopate({
  variable: "--font-syncopate",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Faizul Ahamed | Space Portfolio",
  description: "Futuristic Space-Themed Personal Portfolio of Faizul Ahamed M F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syncopate.variable} antialiased`}
    >
      <body>
        <SmoothScrollProvider>
          <GlobalCanvas />
          <main className="relative z-10 w-full min-h-screen">
            {children}
          </main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
