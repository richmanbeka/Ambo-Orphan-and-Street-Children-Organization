import Image from "next/image";
import Link from "next/link";
import DonateButton from "../donate-button";

const values = [
  {
    title: "Love and compassion",
    description: "Serving children with genuine care and respect.",
  },
  {
    title: "Child protection",
    description: "Supporting a safe and nurturing environment for every child.",
  },
  {
    title: "Integrity and accountability",
    description: "Acting responsibly and transparently in our work.",
  },
  {
    title: "Hope and empowerment",
    description: "Helping children discover their abilities and build a future.",
  },
  {
    title: "Partnership",
    description: "Working with supporters and communities to make a difference.",
  },
];

const teamMembers = [
  { name: "Eyu Kebede", role: "Founder", photo: "/eyu-kebede.png" },
  {
    name: "Masresha Tilaye",
    role: "Project Manager",
    photo: "/masresha-tilaye.png",
  },
  { name: "Team member 3", role: "Name and role to be added" },
  { name: "Team member 4", role: "Name and role to be added" },
  { name: "Team member 5", role: "Name and role to be added" },
  { name: "Team member 6", role: "Name and role to be added" },
];

export default function About() {
  return (
    <>
      <section className="about-page" aria-labelledby="about-title">
        <div className="about-page-heading about-enter">
          <p className="about-eyebrow">Who we are</p>
          <h1 id="about-title">Building hope, together</h1>
          <p>
            Every child deserves to grow up with care, protection, and the
            opportunity to reach their full potential.
          </p>
        </div>

        <section className="values-section" aria-labelledby="values-title">
          <div className="values-heading about-enter">
            <p className="about-eyebrow">What guides us</p>
            <h2 id="values-title">Our core values</h2>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <article
                className="value-card about-enter"
                key={value.title}
              >
                <span className="value-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="about-pillars">
          <article className="about-pillar about-enter">
            <span className="pillar-label">Our vision</span>
            <h2>A future where every child can thrive</h2>
            <p>
              A world where every vulnerable child experiences love,
              protection, opportunity, and the chance to reach their full
              potential.
            </p>
          </article>
          <article className="about-pillar about-enter">
            <span className="pillar-label">Our mission</span>
            <h2>Care that creates lasting hope</h2>
            <p>
              To provide vulnerable children with holistic care, education, and
              support through compassion, accountability, and partnership.
            </p>
          </article>
        </div>

        <div className="about-frame about-enter">
          <div className="about-copy">
            <p className="about-eyebrow">Our story</p>
            <h2>Ambo Orphan and Street Children Organization</h2>
            <p className="about-description">
              Ambo Orphan and Street Children Organization (AOSCO) is a
              child-focused, non-profit organization committed to protecting,
              caring for, and empowering vulnerable children in Ethiopia.
            </p>
            <p className="about-description">
              We provide holistic care that supports children&apos;s physical,
              educational, emotional, social, and spiritual needs. Through
              daily care, nutrition, education support, healthcare, and life
              skills development, we work to create a safe, family-like
              environment where children can grow with dignity, love, and hope.
            </p>
            <p className="about-description">
              With the support of compassionate individuals, partners, and
              friends, we help children build confidence, discover their
              abilities, and become responsible members of their communities.
            </p>
            <div className="about-actions">
              <Link className="more-info-button" href="/contact">
                Contact us
              </Link>
              <DonateButton />
            </div>
          </div>
          <figure className="about-photo">
            <Image
              src="/about-our-story.png"
              alt="Children together in the AOSCO community outdoors"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 42vw"
            />
            <figcaption className="about-photo-caption">
              Care, opportunity, and hope for every child
            </figcaption>
          </figure>
        </div>

        <section className="work-video-section" aria-labelledby="founder-video-title">
          <div className="work-video-heading">
            <p className="about-eyebrow">A message from our founder</p>
            <h2 id="founder-video-title">The story behind our work</h2>
          </div>
          <div className="work-video-frame founder-video-frame">
            <iframe
              src="https://www.youtube.com/embed/5n_SUICOYYo?si=jEIDQnzyhr6nH6QJ"
              title="Our founder talks about this work"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </section>

        <section className="team-section" aria-labelledby="team-title">
          <div className="team-heading about-enter">
            <p className="about-eyebrow">Our people</p>
            <h2 id="team-title">Meet our team</h2>
            <p>
              The people who work together to support children and strengthen
              our community.
            </p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <article className="team-card about-enter" key={member.name}>
                <div className="team-photo-placeholder">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={`${member.name} with children`}
                      fill
                      sizes="(max-width: 760px) 50vw, 33vw"
                    />
                  ) : (
                    <span>Photo coming soon</span>
                  )}
                </div>
                <div className="team-card-copy">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

      </section>
    </>
  );
}
