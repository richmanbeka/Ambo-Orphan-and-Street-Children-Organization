
import type { Metadata } from "next";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ambo Orphan and Street Children Organization",
  description:
    "Ambo Orphan and Street Children Organization supports vulnerable children in Ambo, Ethiopia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
