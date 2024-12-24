import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"], // "latins" est incorrect
  variable: "--font-inter",
});

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"], // Correction de "Weight"
  variable: "--font-ibm-plex-serif", // Correction de "Variable"
});




export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is a modern Banking plateform for everyone",
  icons:{
    icon:'/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
