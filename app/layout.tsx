import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GingTrip",
  description: "",
  icons: {
    icon: "/logo-gingtrip.png",
    shortcut: "/logo-gingtrip.png",
    apple: "/logo-gingtrip.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body className="antialiased" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
