import Image from "next/image";
import Link from "next/link";
import DonateButton from "./donate-button";
import PhotoCarousel from "./photo-carousel";
import { supportAreas } from "./support-areas";

export default function Home() {
  return (
    <>
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-content">
          <p className="hero-eyebrow">Together, we can make a difference</p>
          <h1 id="hero-title">Every child deserves care, safety, and hope.</h1>
          <p className="hero-description">
            Join us in supporting vulnerable children in Ambo and helping them
            build a brighter future.
          </p>
          <div className="hero-actions">
            <DonateButton />
            <Link className="hero-learn-button" href="/about">
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <section className="home-intro" aria-labelledby="home-intro-title">
        <p className="about-eyebrow">Who we are</p>
        <h2 id="home-intro-title">
          Standing with vulnerable children in Ambo
        </h2>
        <p>
          AOSCO works to give children a safe, caring environment and the
          opportunity to build a hopeful future.
        </p>
        <div className="work-video-frame founder-video-frame home-intro-video">
          <iframe
            src="https://www.youtube.com/embed/pn4mKpH8udE?si=ubtxMAT9NsoTx7fU"
            title="About Ambo Orphan and Street Children Organization"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <Link className="more-info-button" href="/about">
          More about us
        </Link>
      </section>

      <section className="home-work" id="work" aria-labelledby="work-title">
        <div className="home-work-heading" id="programs">
          <p className="about-eyebrow">How we support children</p>
          <h2 id="work-title">Care that helps children thrive</h2>
          <p>
            Every child deserves the support, care, and opportunity to build a
            hopeful future.
          </p>
        </div>
        <PhotoCarousel slides={supportAreas} />
        <Link className="more-info-button" href="/our-work">
          Learn more about our work
        </Link>
      </section>

      <section className="partners-section" id="partners" aria-labelledby="partners-title">
        <div className="partners-content">
          <div className="partners-copy">
            <p className="about-eyebrow">Our partners</p>
            <h2 id="partners-title">Working with trusted partners</h2>
            <p>
              We are grateful to work alongside organizations that share our
              commitment to caring for children with dignity, protection, and
              opportunity. One of our trusted partners is Bethel Apu, whose work
              supports meaningful community care and wellbeing.
            </p>
          </div>
          <a
            className="partners-placeholder partners-link"
            href="https://www.bethelapu.com/tietoa-meista/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Bethel Apu website"
          >
            <Image
              className="partners-logo"
              src="/bethel-apu-logo.webp"
              alt="Bethel Apu logo"
              width={418}
              height={450}
            />
            <span>Bethel Apu</span>
            <strong>Visit our partner</strong>
          </a>
          <a
            className="more-info-button"
            href="https://www.bethelapu.com/tietoa-meista/"
            target="_blank"
            rel="noreferrer"
          >
            Visit our partner
          </a>
        </div>
      </section>

      <section className="home-cta-section" id="donate" aria-labelledby="home-cta-title">
        <div className="home-cta">
          <p className="hero-eyebrow">Be part of the change</p>
          <h2 id="home-cta-title">Help create a brighter future for children.</h2>
          <p>
            Reach out to learn more about supporting AOSCO and the children in
            our care.
          </p>
          <div className="hero-actions">
            <Link className="hero-learn-button" href="/contact#message">
              Ask how to support
            </Link>
            <Link className="hero-learn-button" href="/our-work">
              About our work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
