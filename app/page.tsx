import Image from "next/image";
import DigitalTwinChat from "./digital-twin-chat";

const portfolioUrl = "https://mohammadreza-hashemi-en--kzfsu0d.gamma.site/";
const linkedInUrl = "https://www.linkedin.com/in/mrezahb";

const metrics = [
  { value: "40M+", label: "Neshan platform users" },
  { value: "3.5K+", label: "Community members" },
  { value: "78", label: "Commercial sponsors" },
  { value: "$75K", label: "Program resources secured" },
];

const chapters = [
  {
    period: "2014 — NOW",
    title: "Hamfekr Mashhad",
    role: "Co-founder · Community Development",
    copy: "Started with a simple idea: bring the people building Mashhad’s future into the same room. Grew it into Eastern Iran’s largest entrepreneurial community.",
    result: "3,500+ members · 197 events · 96 organizations",
    image: "/images/hamfekr-experience.jpg",
    imageAlt: "Hamfekr Mashhad community gathered at a networking event",
  },
  {
    period: "2017 — 2019",
    title: "Silk Road Startup",
    role: "Co-founder · Project Manager",
    copy: "Took an international startup program across 12 provincial hubs, pairing founders with new networks, mentors, and a wider view of what was possible.",
    result: "12 cities · 16 countries represented · $75K mobilized",
    image: "/images/silk-road-experience.jpg",
    imageAlt: "Founders and partners at a Silk Road Startup program event",
  },
  {
    period: "2019 — 2021",
    title: "Mashhad Innovation Factory",
    role: "Executive Director · Ferdowsi Accelerator",
    copy: "Helped bring a landmark innovation hub to life inside a revitalized industrial site, creating room for startups and ecosystem partners to work side by side.",
    result: "10,000 sqm · 20+ specialist events each year",
    image: "/images/innovation-factory-experience.jpg",
    imageAlt: "An innovation community gathering at Mashhad Innovation Factory",
  },
  {
    period: "2022 — 2025",
    title: "Neshan Maps & Navigation",
    role: "Community Lead → Customer Support Manager",
    copy: "Connected customer voice to product and engineering across a 40M-user navigation platform. Introduced a Dual-Track Agile workflow and led a five-person support team.",
    result: "30% faster first response · 200K-user NPS survey waves",
    image: "/images/neshan-experience.jpg",
    imageAlt: "The Neshan Maps team gathered at a company event",
  },
  {
    period: "2025 — 2026",
    title: "#AI404",
    role: "Executive Secretary · Program Manager",
    copy: "Designed and delivered an AI-focused Startup Weekend with Hamfekr Mashhad, Khorasan Science & Technology Park, and the Iran AI Association.",
    result: "110 participants · 5 provinces · 20-person organizing team",
    image: "/images/ai404-experience.jpg",
    imageAlt: "Participants at the AI404 startup weekend in Mashhad",
  },
];

const projects = [
  {
    number: "01",
    title: "Silk Road Startup",
    type: "INTERNATIONAL ACCELERATION",
    image: "/images/hamfekr.jpg",
    alt: "The Silk Road Startup program team gathered on stage",
    description:
      "A 9,000 km journey connecting founders, local hubs, and global startup voices.",
    href: `${portfolioUrl}#card-xw98df5k2btmedx`,
  },
  {
    number: "02",
    title: "Hamfekr Mashhad",
    type: "COMMUNITY-LED GROWTH",
    image: "/images/hamfekr-experience.jpg",
    alt: "Entrepreneurs gathered at a Hamfekr Mashhad event",
    description:
      "An open, active network built to make collaboration a habit across the region.",
    href: `${portfolioUrl}#card-s3fnyoqspg7fwxe`,
  },
  {
    number: "03",
    title: "#AI404",
    type: "AI INNOVATION PROGRAM",
    image: "/images/ai404-experience.jpg",
    alt: "AI404 participants gathered at the startup weekend in Mashhad",
    description:
      "A multi-part AI venture program that brought together talent from five provinces.",
    href: `${portfolioUrl}#card-kzktulay9no8ulg`,
  },
];

type FeaturedVideo = {
  title: string;
  type: string;
  description: string;
  sourceUrl: string;
  sourceLabel: string;
  frameTitle: string;
} & (
  | { src: string; thumbnail?: never }
  | { src: null; thumbnail: string }
);

const videos: FeaturedVideo[] = [
  {
    title: "France 24 — Silk Road Startup coverage",
    type: "FRANCE 24 · NEWS COVERAGE",
    description:
      "International news coverage of the Silk Road Startup program.",
    src: "https://www.aparat.com/video/video/embed/videohash/d85xzl1/vt/frame",
    sourceUrl: "https://www.aparat.com/v/d85xzl1",
    sourceLabel: "Watch on Aparat",
    frameTitle: "Silk Road Startup road-trip documentary",
  },
  {
    title: "The importance of community",
    type: "SILK ROAD STARTUP · SPEECH",
    description:
      "A talk on how community helps founders and startup ecosystems grow.",
    src: "https://www.aparat.com/video/video/embed/videohash/JCjA0/vt/frame",
    sourceUrl: "https://www.aparat.com/v/JCjA0",
    sourceLabel: "Watch on Aparat",
    frameTitle: "Tribe Podcast: Value creation in startup communities",
  },
  {
    title: "AI404 — event film",
    type: "AI INNOVATION · EVENT COVERAGE",
    description:
      "Highlights from the AI-focused Startup Weekend in Mashhad. Instagram opens this reel directly.",
    src: null,
    thumbnail: "/images/ai404-experience.jpg",
    sourceUrl: "https://www.instagram.com/ir_kstp/reel/DR4l04vkY6B/",
    sourceLabel: "Open Instagram Reel",
    frameTitle: "Khorasan Science and Technology Park AI404 event film",
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
    >
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3 10h13m-5-5 5 5-5 5" />
      )}
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Mohammadreza Hashemi home">
          MH<span>.</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#journey">Journey</a>
          <a href="#work">Selected work</a>
          <a href="#media">Videos</a>
          <a href="#digital-twin">AI twin</a>
        </nav>
        <a className="header-contact" href="mailto:m.reza.hb@gmail.com">
          Let&apos;s connect <Arrow diagonal />
        </a>
      </header>

      <section className="hero section-shell" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" />
            ECOSYSTEM STRATEGY · MASHHAD, IRAN
          </p>
          <p className="hero-kicker">Mohammadreza Hashemi</p>
          <h1>
            Good ideas
            <br />
            need <span>good</span>
            <br />
            ecosystems.
          </h1>
          <p className="hero-summary">
            I build the communities, programs, and partnerships that help
            ambitious ideas go further.
          </p>
          <div className="hero-actions">
            <a className="button button-lime" href="#work">
              Explore selected work <Arrow />
            </a>
            <a
              className="text-link"
              href={linkedInUrl}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn profile <Arrow diagonal />
            </a>
          </div>
          <div className="hero-footnote">
            <span>12+ YEARS IN THE STARTUP ECOSYSTEM</span>
            <span className="hero-footnote-line" />
            <span>BUILDER · OPERATOR · CONNECTOR</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-frame">
            <div className="portrait-grid" />
            <Image
              className="portrait"
              src="/images/portrait.jpg"
              alt="Mohammadreza Hashemi"
              fill
              priority
              sizes="(max-width: 700px) 90vw, 45vw"
            />
            <div className="portrait-shade" />
            <div className="portrait-caption">
              <span className="caption-mark">MH</span>
              <span>
                BUILDING WHAT
                <br />
                CONNECTS US
              </span>
            </div>
            <div className="portrait-index">01 / 05</div>
          </div>
          <div className="orbit-note">
            <span className="orbit-note-star">✳</span>
            <span>COMMUNITY<br />IS A GROWTH ENGINE</span>
          </div>
          <div className="hero-side-label">STRATEGY IN MOTION — 2026</div>
        </div>
        <a className="scroll-cue" href="#about">
          <span className="scroll-cue-line" />
          SCROLL TO EXPLORE
        </a>
      </section>

      <section className="metrics-band" aria-label="Career highlights">
        <div className="metrics-inner">
          {metrics.map((metric, index) => (
            <div className="metric" key={metric.label}>
              <span className="metric-index">0{index + 1}</span>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="about section-shell section-space" id="about">
        <div className="section-marker">
          <span>01</span> / ABOUT
        </div>
        <div className="about-main">
          <p className="section-overline">A LITTLE ABOUT HOW I WORK</p>
          <h2>
            The best progress
            <br />
            happens <span>between</span>
            <br />
            people.
          </h2>
          <div className="about-detail">
            <p>
              I&apos;m an ecosystem strategy and business development leader
              with 12+ years of experience turning shared ambition into
              coordinated action. My work sits where startups, institutions,
              companies, and communities meet.
            </p>
            <p>
              From a regional founder network to a nationwide startup tour and
              the customer-support engine of a 40M-user platform, I bring
              people around a clear goal—and help them make it real.
            </p>
            <a className="inline-link" href={portfolioUrl} target="_blank" rel="noreferrer">
              More about my work <Arrow diagonal />
            </a>
          </div>
          <div className="focus-row">
            <span>WHERE I ADD VALUE</span>
            <div className="focus-tags">
              <span>Ecosystem strategy</span>
              <span>Strategic partnerships</span>
              <span>Community-led growth</span>
              <span>Program design</span>
              <span>Customer experience</span>
            </div>
          </div>
          <div className="credentials">
            <div>
              <span>TECHNICAL FOUNDATION</span>
              <p>MSc Artificial Intelligence · BSc Software Engineering</p>
            </div>
            <div>
              <span>LANGUAGES</span>
              <p>Persian · English</p>
            </div>
          </div>
        </div>
        <div className="about-aside">
          <div className="aside-rule" />
          <p>MY NORTH STAR</p>
          <blockquote>
            Make the right connections. Create the conditions for great work.
            Measure what changes.
          </blockquote>
          <span className="aside-signature">— Mohammadreza</span>
        </div>
      </section>

      <section className="journey section-space" id="journey">
        <div className="section-shell">
          <div className="section-marker">
            <span>02</span> / CAREER JOURNEY
          </div>
          <div className="journey-heading">
            <div>
              <p className="section-overline">A DECADE OF BUILDING FORWARD</p>
              <h2>Different stages.<br /><span>One through-line.</span></h2>
            </div>
            <p>
              Every chapter has been about building the bridge between a
              promising idea and the people, partners, or systems it needs to
              grow.
            </p>
          </div>
          <div className="timeline">
            {chapters.map((chapter, index) => (
              <article className="timeline-item" key={chapter.title}>
                <div className="timeline-date">
                  <span>{chapter.period}</span>
                  <span className="timeline-node">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="timeline-content">
                  <div className="timeline-copy">
                    <div className="timeline-title-row">
                      <h3>{chapter.title}</h3>
                      <span className="timeline-role">{chapter.role}</span>
                    </div>
                    <p>{chapter.copy}</p>
                    <span className="timeline-result">{chapter.result}</span>
                  </div>
                  <div className="timeline-image">
                    <Image
                      src={chapter.image}
                      alt={chapter.imageAlt}
                      fill
                      sizes="(max-width: 700px) 32vw, 220px"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="work section-shell section-space" id="work">
        <div className="section-marker">
          <span>03</span> / SELECTED WORK
        </div>
        <div className="work-heading">
          <div>
            <p className="section-overline">A FEW THINGS BUILT TOGETHER</p>
            <h2>Work with<br /><span>lasting reach.</span></h2>
          </div>
          <p>
            Programs and communities built around one belief: the most
            meaningful outcomes are shared.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <a
              className="project-card"
              href={project.href}
              key={project.number}
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-image-wrap">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 700px) 90vw, 33vw"
                />
                <span className="project-number">{project.number}</span>
                <span className="project-open"><Arrow diagonal /></span>
              </div>
              <div className="project-meta">{project.type}</div>
              <div className="project-title-row">
                <h3>{project.title}</h3>
                <Arrow diagonal />
              </div>
              <p>{project.description}</p>
            </a>
          ))}
        </div>
        <a className="all-work-link" href={portfolioUrl} target="_blank" rel="noreferrer">
          View full portfolio <Arrow diagonal />
        </a>
      </section>

      <section className="media section-space" id="media">
        <div className="section-shell">
          <div className="section-marker">
            <span>04</span> / WATCH &amp; LISTEN
          </div>
          <div className="media-heading">
            <div>
              <p className="section-overline">STORIES FROM THE FIELD</p>
              <h2>Work is better<br /><span>when it travels.</span></h2>
            </div>
            <p>
              A few conversations and moments from the programs and communities
              built along the way.
            </p>
          </div>
          <div className="video-grid">
            {videos.map((video, index) => (
              <article className="video-card" key={video.src}>
                <div className="video-frame">
                  {video.src !== null ? (
                    <iframe
                      src={video.src}
                      title={video.frameTitle}
                      loading="lazy"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  ) : (
                    <a
                      className="video-poster"
                      href={video.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={video.sourceLabel}
                    >
                      <Image
                        src={video.thumbnail}
                        alt=""
                        fill
                        sizes="(max-width: 700px) 90vw, 33vw"
                      />
                      <span className="video-poster-play" aria-hidden="true">
                        ▶
                      </span>
                    </a>
                  )}
                </div>
                <div className="project-meta">{video.type}</div>
                <div className="video-title-row">
                  <span className="video-index">0{index + 1}</span>
                  <h3>{video.title}</h3>
                </div>
                <p>{video.description}</p>
                <a
                  className="video-source-link"
                  href={video.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {video.sourceLabel} <Arrow diagonal />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <DigitalTwinChat />

      <section className="contact section-space" id="contact">
        <div className="section-shell contact-inner">
          <div className="section-marker">
            <span>06</span> / WHAT&apos;S NEXT
          </div>
          <p className="section-overline">OPEN TO THE RIGHT CONVERSATION</p>
          <h2>
            Let&apos;s make
            <br />
            <span>something matter.</span>
          </h2>
          <p className="contact-summary">
            Interested in ecosystem development, strategic partnerships, or
            business development roles with venture firms, accelerators, and
            technology companies.
          </p>
          <div className="contact-actions">
            <a className="button button-lime" href="mailto:m.reza.hb@gmail.com">
              Start a conversation <Arrow diagonal />
            </a>
            <a className="button button-outline" href="/resume.pdf" target="_blank">
              Download resume <Arrow diagonal />
            </a>
          </div>
          <div className="contact-bottom">
            <a href="mailto:m.reza.hb@gmail.com">M.REZA.HB@GMAIL.COM</a>
            <span>MASHHAD, IRAN · WORKING GLOBALLY</span>
            <a href={linkedInUrl} target="_blank" rel="noreferrer">
              LINKEDIN <Arrow diagonal />
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <a className="wordmark" href="#home">MH<span>.</span></a>
        <span>© 2026 MOHAMMADREZA HASHEMI</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
