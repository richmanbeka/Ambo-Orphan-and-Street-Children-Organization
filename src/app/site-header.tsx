"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DonateButton from "./donate-button";

const links = [
  { label: "Home", href: "/home" },
  { label: "About us", href: "/about" },
  { label: "Our work", href: "/our-work" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header className="site-header" id="top">
        <nav className="navigation" aria-label="Main navigation">
          <Link
            className="brand"
            href="/home"
            aria-label="Ambo Orphan and Street Children Organization home"
          >
            <Image
              src="/acco-logo-current.png"
              alt="Ambo Orphan and Street Children Organization"
              width={1152}
              height={768}
              priority
            />
          </Link>

          <details className="mobile-navigation">
            <summary aria-label="Toggle navigation">
              <span />
              <span />
              <span />
            </summary>
            <div className="mobile-menu">
              {links.map((link) => {
                const isActive = link.href === pathname;

                return (
                  <Link
                    aria-current={isActive ? "page" : undefined}
                    className={isActive ? "is-active" : undefined}
                    key={link.label}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <DonateButton />
            </div>
          </details>

          <div className="desktop-navigation">
            {links.map((link) => {
              const isActive = link.href === pathname;

              return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={isActive ? "is-active" : undefined}
                  key={link.label}
                  href={link.href}
                >
                  {link.label}
                </Link>
              );
            })}
            <DonateButton />
          </div>
        </nav>
      </header>
    </>
  );
}
