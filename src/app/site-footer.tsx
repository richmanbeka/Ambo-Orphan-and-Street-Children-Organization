import Image from "next/image";
import Link from "next/link";
import DonateButton from "./donate-button";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Link
            className="footer-logo"
            href="/#top"
            aria-label="Ambo Orphan and Street Children Organization home"
          >
            <Image
              src="/acco-logo-current.png"
              alt=""
              width={1152}
              height={768}
              sizes="180px"
            />
          </Link>
          <p>
            Building hope, restoring dignity, and nurturing the future of
            children in Ambo.
          </p>
          <nav className="footer-social" aria-label="Social media">
            <a
              href="https://www.youtube.com/results?search_query=Ambo+Orphan+and+Street+Children+Organization"
              target="_blank"
              rel="noreferrer"
              aria-label="Find AOSCO on YouTube"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M23 12s0-3.5-.45-5.17a3 3 0 0 0-2.12-2.12C18.76 4.25 12 4.25 12 4.25S5.24 4.25 3.57 4.71a3 3 0 0 0-2.12 2.12C1 8.5 1 12 1 12s0 3.5.45 5.17a3 3 0 0 0 2.12 2.12c1.67.46 8.43.46 8.43.46s6.76 0 8.43-.46a3 3 0 0 0 2.12-2.12C23 15.5 23 12 23 12Z" />
                <path className="footer-social-cutout" d="m9.75 15.5 6-3.5-6-3.5v7Z" />
              </svg>
            </a>
            <a
              href="https://x.com/search?q=AOSCO%20Ethiopia"
              target="_blank"
              rel="noreferrer"
              aria-label="Find AOSCO on X"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.45 22H3.33l7.25-8.29L2.98 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.84h1.72L8.43 4.05H6.58L17.8 19.84Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/search/results/companies/?keywords=AOSCO%20Ambo"
              target="_blank"
              rel="noreferrer"
              aria-label="Find AOSCO on LinkedIn"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M5.32 7.9H1.4V22h3.92V7.9ZM3.36 2A2.36 2.36 0 1 0 3.36 6.72 2.36 2.36 0 0 0 3.36 2ZM22.5 13.95c0-4.24-2.26-6.21-5.28-6.21a4.56 4.56 0 0 0-4.13 2.27V7.9H9.17V22h3.92v-6.99c0-1.84.35-3.63 2.64-3.63 2.25 0 2.28 2.11 2.28 3.75V22h3.92l-.43-8.05Z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/search?q=AOSCO%20Ambo"
              target="_blank"
              rel="noreferrer"
              aria-label="Find AOSCO on TikTok"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M16.65 2c.28 2.12 1.43 3.54 3.35 3.83v3.42a7.36 7.36 0 0 1-3.35-.86v6.2a7.21 7.21 0 1 1-6.23-7.14v3.55a3.64 3.64 0 1 0 2.23 3.36V2h3.99Z" />
              </svg>
            </a>
            <a
              href="https://wa.me/251911973827"
              target="_blank"
              rel="noreferrer"
              aria-label="Chat with AOSCO on WhatsApp"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M20.52 3.48A11.82 11.82 0 0 0 12.06 0C5.57 0 .28 5.29.28 11.79c0 2.08.54 4.11 1.57 5.9L.15 24l6.46-1.69a11.75 11.75 0 0 0 5.44 1.39h.01c6.49 0 11.79-5.29 11.79-11.78 0-3.15-1.22-6.11-3.33-8.44Zm-8.46 18.12h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.83 1 1.02-3.73-.23-.38a9.78 9.78 0 0 1-1.51-5.23A9.82 9.82 0 0 1 12.06 2.1a9.75 9.75 0 0 1 6.95 2.88 9.77 9.77 0 0 1 2.87 6.94c0 5.43-4.42 9.68-9.82 9.68Zm5.38-7.3c-.29-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.67.15-.2.29-.77.96-.94 1.15-.17.2-.35.22-.64.07-.29-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.52.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.19 5.06 4.47.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.08 1.74-.71 1.99-1.4.25-.69.25-1.28.17-1.4-.07-.13-.27-.2-.56-.35Z" />
              </svg>
            </a>
          </nav>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <h2>Explore</h2>
          <Link href="/#top">Home</Link>
          <Link href="/about">About us</Link>
          <Link href="/our-work">Our work</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="footer-cta">
          <h2>Make a difference</h2>
          <p>Your support can help children grow with care and opportunity.</p>
          <DonateButton />
        </div>

        <div className="footer-location">
          <h2>Find us</h2>
          <p>Ambo, Ethiopia</p>
          <a
            className="footer-map-placeholder"
            href="https://www.google.com/maps/@8.979952,37.833486,765m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI2MTExMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noreferrer"
            aria-label="Open our location in Google Maps"
          >
            <span className="footer-map-pin" aria-hidden="true">
              <span />
            </span>
            <span className="footer-map-caption">Open in Google Maps</span>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Ambo Orphan and Street Children Organization</p>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}
