import Link from "next/link";
import ContactForm from "./contact-form";

const contactChannels = [
  {
    number: "01",
    title: "Email",
    description: "lilbeka33@gmail.com",
    href: "mailto:lilbeka33@gmail.com",
  },
  {
    number: "02",
    title: "Phone",
    description: "+251911973827",
  },
  {
    number: "03",
    title: "Location",
    description: "Ambo, Ethiopia",
    href: "https://www.google.com/maps/@8.979952,37.833486,765m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI2MTExMC4wIKXMDSoASAFQAw%3D%3D",
  },
];

export default function Contact() {
  return (
      <section className="contact-page" aria-labelledby="contact-title">
        <div className="contact-hero">
          <p className="about-eyebrow">We’re here to connect</p>
          <h1 id="contact-title">Let’s make a difference together.</h1>
          <p>
            Whether you want to learn about our work, explore a partnership, or
            support children in Ambo, we look forward to hearing from you.
          </p>
        </div>

        <section className="contact-panel" aria-labelledby="contact-options-title">
          <div className="contact-panel-heading">
            <p className="about-eyebrow">Other ways to connect</p>
            <h2 id="contact-options-title">Contact information</h2>
            <p>
              You can reach us by email, phone, or at our Ambo location.
            </p>
          </div>
          <div className="contact-options">
            {contactChannels.map((channel) => (
              <article className="contact-option" key={channel.title}>
                <span className="contact-option-number">{channel.number}</span>
                <h3>{channel.title}</h3>
                {channel.title === "Email" ? (
                  <a className="contact-phone-link" href={channel.href}>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                      <rect
                        x="3.5"
                        y="5.5"
                        width="17"
                        height="13"
                        rx="1.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                      <path
                        d="m4.5 7 7.5 6 7.5-6"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                      />
                    </svg>
                    {channel.description}
                  </a>
                ) : channel.title === "Phone" ? (
                  <a className="contact-phone-link" href="tel:+251911973827">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7.2 3.5h2.5l1.2 4.1-1.8 1.8a15 15 0 0 0 5.5 5.5l1.8-1.8 4.1 1.2v2.5a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 5.2 5.7a2 2 0 0 1 2-2.2Z"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                      />
                    </svg>
                    {channel.description}
                  </a>
                ) : (
                  <p>{channel.description}</p>
                )}
                {channel.title === "Location" && channel.href && (
                  <a
                    className="contact-location-link"
                    href={channel.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                      <circle
                        cx="12"
                        cy="10"
                        r="2.25"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    Open in Google Maps
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <div className="contact-next-step">
          <div>
            <p className="about-eyebrow">Learn about our work</p>
            <h2>Every child deserves care, protection, and hope.</h2>
          </div>
          <Link className="more-info-button" href="/about">
            Visit our About page
          </Link>
        </div>

        <ContactForm />
      </section>
  );
}
