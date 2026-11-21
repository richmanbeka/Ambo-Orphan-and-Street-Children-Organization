import Image from "next/image";

export default function OurWork() {
  const workStories = [
    {
      title: "Room Improvement - Outside",
      description:
        "We begin improving the living environment around the children's rooms.",
      image: "/our-work/room-1.jpg",
    },
    {
      title: "Room Improvement - First View",
      description:
        "The room is repaired and prepared to become a cleaner, safer place for the children.",
      image: "/our-work/room-2.jpg",
    },
    {
      title: "Room Improvement - Work in Progress",
      description:
        "Repair work continues as we improve the room structure and finish.",
      image: "/our-work/room-3.jpg",
    },
    {
      title: "Room Improvement - Completed Space",
      description:
        "The work creates a welcoming and improved living space for the children.",
      image: "/our-work/room-4.jpg",
    },
    {
      title: "Graduates Supported by the Organization",
      description:
        "We celebrate students who have reached graduation with the support of the organization.",
      image: "/our-work/graduates-1.jpg",
    },
    {
      title: "Graduate Success",
      description:
        "Education support helps children complete their studies and prepare for the future.",
      image: "/our-work/graduates-2.png",
    },
    {
      title: "Shoes and Essential Support",
      description:
        "We provide practical essentials that help children attend school and take part in daily life.",
      image: "/our-work/shoes.jpg",
    },
    {
      title: "Learning and Teaching",
      description:
        "Children take part in guided learning activities that build knowledge, confidence, and creativity.",
      image: "/our-work/teaching.jpg",
    },
    {
      title: "Skills and Work",
      description:
        "We support young people through practical skills and opportunities to learn by doing.",
      image: "/our-work/work-out.jpg",
    },
    {
      title: "Health and Personal Care",
      description:
        "We provide attentive personal care that supports children’s wellbeing and dignity.",
      image: "/our-work/health-and-care.png",
    },
    {
      title: "Care and Hair Support",
      description:
        "We help children feel cared for through everyday grooming and personal support.",
      image: "/our-work/hair-care-support.png",
    },
  ];

  return (
    <>
      <section className="hero-section" aria-labelledby="our-work-title">
        <div className="hero-content">
          <p className="hero-eyebrow">Our work</p>
          <h1 id="our-work-title">Care and opportunity for every child.</h1>
          <p className="hero-description">
            We support children through daily care, learning, health, and
            opportunities to grow in a safe and caring community.
          </p>
        </div>
      </section>

      <section className="work-gallery-section" aria-labelledby="work-gallery-title">
        <div className="work-gallery-heading">
          <p className="about-eyebrow">Our activities</p>
          <h2 id="work-gallery-title">The work we do</h2>
          <p>
            A glimpse into the care, learning, practical support, and
            opportunities we provide for children and young people.
          </p>
        </div>

        <div className="work-gallery">
          {workStories.map((story) => (
            <article className="work-story" key={story.title}>
              <div className="work-story-image">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  sizes="(max-width: 760px) 100vw, (max-width: 1120px) 50vw, 560px"
                />
              </div>
              <div className="work-story-copy">
                <h3>{story.title}</h3>
                <p>{story.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="work-video-section" aria-labelledby="work-video-title">
        <div className="work-video-heading">
          <p className="about-eyebrow">Watch our work</p>
          <h2 id="work-video-title">Our story in action</h2>
        </div>
        <div className="work-videos">
          <div className="work-video-frame">
            <iframe
              src="https://www.youtube.com/embed/jkqPM-92mbo?si=sG-A9ZKdq1YxKNjK"
              title="Our work with children"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="work-video-frame">
            <iframe
              src="https://www.youtube.com/embed/LW6G4qELvvw?si=TERV6QFHHzVu51bh"
              title="Children supported by AOSCO"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
