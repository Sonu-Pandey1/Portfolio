import { useEffect, useRef, useState } from "react";

const themes = ["aurora", "ember", "ocean", "lime", "mono", "noir"];

const stats = [
  { value: "2+", label: "Years of coding practice" },
  { value: "10+", label: "Portfolio projects" },
  { value: "3-4", label: "Months SAP learning target" },
  { value: "100%", label: "Responsive design focus" },
];

const recruiterPoints = [
  "Frontend development with React, responsive CSS, and reusable UI sections",
  "Backend understanding with Node.js, Express.js, MongoDB, and API integration",
  "Portfolio projects that show problem solving, design cleanup, and modern UI thinking",
  "Currently learning SAP ABAP, SAP UI5, and Fiori to grow into SAP full stack development",
];

const services = [
  {
    title: "Frontend Development",
    text: "Modern landing pages, portfolio websites, component-based UI, responsive layouts, and cleaner user experience.",
  },
  {
    title: "Backend Development",
    text: "REST API integration, Node.js services, Express.js setup, auth-ready architecture, and scalable project structure.",
  },
  {
    title: "SAP Learning Track",
    text: "Actively building toward SAP full stack development with ABAP fundamentals, SAP UI5 components, and Fiori design patterns.",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Firebase",
  "Git",
  "REST API",
  "Responsive Design",
  "SEO Basics",
  "SAP ABAP Learning",
  "SAP UI5 Learning",
  "Fiori Fundamentals",
];

const projects = [
  {
    title: "Minded Coder Job Portal",
    label: "Featured Project",
    description:
      "A job portal concept with stronger UI hierarchy, better presentation, and cleaner portfolio framing for recruiter-facing work.",
    tech: ["React", "Node.js", "MongoDB"],
    accent: "gradient-one",
  },
  {
    title: "Minded Coder 2",
    label: "Web App",
    description:
      "A second product slot for showing expanded functionality, cleaner layouts, and more polished execution.",
    tech: ["React", "API", "Responsive"],
    accent: "gradient-two",
  },
  {
    title: "Bhutani Infra",
    label: "Business Website",
    description:
      "A real estate and business presentation site with clearer sections, stronger callouts, and modern visual depth.",
    tech: ["Branding", "Responsive", "Lead Generation"],
    accent: "gradient-three",
  },
  {
    title: "Admin Panel 133",
    label: "Dashboard",
    description:
      "An admin-style UI direction with data-focused screens, dashboard cards, and cleaner interaction patterns.",
    tech: ["Dashboard", "CRUD", "Auth"],
    accent: "gradient-four",
  },
  {
    title: "Code With Sonu",
    label: "Personal Brand",
    description:
      "A personal branding build focused on clean storytelling, UI polish, and responsive modern presentation.",
    tech: ["Portfolio", "UI", "Brand"],
    accent: "gradient-five",
  },
  {
    title: "Moviex Stream",
    label: "Media App",
    description:
      "A streaming-style UI concept designed to show discovery sections, richer card styling, and stronger page flow.",
    tech: ["UI", "Cards", "Media"],
    accent: "gradient-one",
  },
  {
    title: "News Monkey",
    label: "News App",
    description:
      "A content-heavy frontend project with category browsing, improved readability, and responsive content layout.",
    tech: ["API", "React", "News"],
    accent: "gradient-two",
  },
  {
    title: "Real Estate",
    label: "Property Platform",
    description:
      "A property-focused interface showcasing listing flows, presentation cards, and mobile-friendly structure.",
    tech: ["Listings", "UX", "Responsive"],
    accent: "gradient-three",
  },
  {
    title: "Text Utils",
    label: "Utility Project",
    description:
      "A smaller JavaScript utility project that highlights practical functionality and frontend fundamentals.",
    tech: ["JavaScript", "Tools", "Utility"],
    accent: "gradient-four",
  },
  {
    title: "Ducat",
    label: "Learning / Experience",
    description:
      "A portfolio entry that can represent learning, training, or guided project experience in a cleaner professional style.",
    tech: ["Learning", "Projects", "Growth"],
    accent: "gradient-five",
  },
];

const roadmap = [
  {
    step: "Now",
    title: "Strengthening Full Stack Basics",
    text: "Building React, Node.js, Express.js, MongoDB, and responsive UI projects that can be shown to recruiters today.",
  },
  {
    step: "Next",
    title: "Learning SAP ABAP",
    text: "Understanding SAP concepts, ABAP basics, backend logic, and enterprise-style problem solving.",
  },
  {
    step: "Then",
    title: "Moving Into SAP UI5 & Fiori",
    text: "Learning SAP UI5 components, MVC patterns, Fiori design principles, and building SAP-ready frontend apps.",
  },
  {
    step: "Goal",
    title: "Becoming SAP Full Stack Developer",
    text: "Combining web development skills with SAP ABAP and SAP UI5/Fiori to become job-ready in the next few months.",
  },
];

const themeLabels = {
  aurora: "Aurora",
  ember: "Ember",
  ocean: "Ocean",
  lime: "Lime",
  mono: "Mono",
  noir: "Noir",
};

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") || "aurora");
  const [activeProject, setActiveProject] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const canvasRef = useRef(null);
  const heroRef = useRef(null);
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(".tilt-card");

    function onMove(event) {
      const card = event.currentTarget;
      const rect = card.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;
      const rotateY = ((offsetX / rect.width) - 0.5) * 8;
      const rotateX = (0.5 - offsetY / rect.height) * 8;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    }

    function onLeave(event) {
      event.currentTarget.style.transform = "";
    }

    cards.forEach((card) => {
      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  useEffect(() => {
    const parallaxItems = document.querySelectorAll("[data-parallax]");

    function updateParallax() {
      const scrollY = window.scrollY;

      parallaxItems.forEach((item) => {
        const speed = Number(item.getAttribute("data-parallax")) || 0.08;
        item.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
      });

      if (heroRef.current) {
        heroRef.current.style.setProperty("--hero-shift", `${Math.min(scrollY * 0.12, 48)}px`);
      }
    }

    updateParallax();
    window.addEventListener("scroll", updateParallax, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateParallax);
    };
  }, []);

  useEffect(() => {
    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring || window.matchMedia("(pointer: coarse)").matches) {
      return undefined;
    }

    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let mouseX = ringX;
    let mouseY = ringY;
    let frameId = 0;

    function animate() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      frameId = window.requestAnimationFrame(animate);
    }

    function onMove(event) {
      mouseX = event.clientX;
      mouseY = event.clientY;
      document.body.classList.add("cursor-active");
    }

    function onLeave() {
      document.body.classList.remove("cursor-active");
    }

    const interactive = document.querySelectorAll("a, button, .tilt-card, .theme-swatch, .project-rail__item, .slider-dot");

    function growCursor() {
      ring.classList.add("is-hovering");
    }

    function shrinkCursor() {
      ring.classList.remove("is-hovering");
    }

    interactive.forEach((item) => {
      item.addEventListener("mouseenter", growCursor);
      item.addEventListener("mouseleave", shrinkCursor);
    });

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    animate();

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      interactive.forEach((item) => {
        item.removeEventListener("mouseenter", growCursor);
        item.removeEventListener("mouseleave", shrinkCursor);
      });
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext("2d");
    if (!context) return undefined;

    const particles = [];
    let frameId = 0;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.length = 0;

      for (let index = 0; index < 30; index += 1) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2.6 + 1.2,
          speedX: (Math.random() - 0.5) * 0.35,
          speedY: (Math.random() - 0.5) * 0.35,
        });
      }
    }

    function draw() {
      const styles = getComputedStyle(document.body);
      const accent = styles.getPropertyValue("--accent").trim() || "#79f2ff";
      const secondary = styles.getPropertyValue("--accent-secondary").trim() || "#6d7cff";

      context.clearRect(0, 0, canvas.width, canvas.height);

      const radial = context.createRadialGradient(
        canvas.width * 0.5,
        canvas.height * 0.35,
        60,
        canvas.width * 0.5,
        canvas.height * 0.35,
        canvas.width * 0.45
      );

      radial.addColorStop(0, `${accent}22`);
      radial.addColorStop(1, "transparent");
      context.fillStyle = radial;
      context.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        context.beginPath();
        context.fillStyle = index % 2 === 0 ? `${accent}aa` : `${secondary}88`;
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      });

      frameId = window.requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(frameId);
    };
  }, [theme]);

  const currentProject = projects[activeProject];

  const nextTheme = () => {
    const currentIndex = themes.indexOf(theme);
    setTheme(themes[(currentIndex + 1) % themes.length]);
  };

  const toggleMenu = () => {
    setMenuOpen((current) => !current);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const nextProject = () => {
    setActiveProject((current) => (current + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((current) => (current - 1 + projects.length) % projects.length);
  };

  return (
    <>
      <div className="cursor-dot" ref={cursorDotRef} aria-hidden="true" />
      <div className="cursor-ring" ref={cursorRingRef} aria-hidden="true" />
      <canvas className="orbital-canvas" ref={canvasRef} aria-hidden="true" />
      <div className="noise-layer" aria-hidden="true" />

      <header className="site-header">
        <div className="brand-mark">
          <span className="brand-mark__dot" />
          <div>
            <p className="eyebrow">Portfolio 2026</p>
            <h1>Sonu Pandey</h1>
          </div>
        </div>

        <button
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          type="button"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#portfolio" onClick={closeMenu}>Projects</a>
          <a href="#sap-journey" onClick={closeMenu}>SAP Journey</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <div className="header-actions">
          <button className="theme-toggle" type="button" onClick={nextTheme}>
            Theme
          </button>
          <a className="button button--ghost" href="#contact" onClick={closeMenu}>
            Hire Me
          </a>
        </div>
      </header>

      <div
        className={`nav-backdrop ${menuOpen ? "is-open" : ""}`}
        aria-hidden="true"
        onClick={closeMenu}
      />

      <main>
        <section className="hero section" id="home" ref={heroRef}>
          <div className="hero-copy reveal">
            <p className="eyebrow">Full Stack Developer Portfolio</p>
            <h2>Full stack developer building modern web UI today and growing into SAP full stack development.</h2>
            <p className="hero-copy__lede">
              I am Sonu Pandey, a full stack developer focused on responsive UI, cleaner frontend
              experiences, Node.js backend foundations, and portfolio projects that support my next
              job search. I am also actively learning SAP ABAP, SAP UI5, and Fiori so I can grow
              into a SAP full stack developer role in the coming months.
            </p>

            <div className="hero-actions">
              <a className="button" href="#portfolio">
                Explore Projects
              </a>
              <a className="button button--ghost" href="#contact">
                Hire Me Now
              </a>
            </div>

            <div className="hero-metrics">
              {stats.map((stat) => (
                <article key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="hero-orb hero-orb--one" data-parallax="-0.05" />
            <div className="hero-orb hero-orb--two" data-parallax="-0.08" />

            <div className="glass-card profile-card float-card">
              <div className="profile-card__top">
                <span className="chip">Available for opportunities</span>
                <span className="chip chip--muted">Frontend • Backend • SAP Learning</span>
              </div>

              <div className="profile-card__body">
                <div className="avatar-core">
                  <span>SP</span>
                </div>
                <div>
                  <h3>Recruiter-Friendly Portfolio</h3>
                  <p>
                    Designed to help hiring managers, LinkedIn visitors, and Naukri recruiters
                    quickly understand my skills, projects, and growth path.
                  </p>
                </div>
              </div>

              <div className="tech-pills">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>SAP UI5</span>
              </div>
            </div>

            <div className="floating-panel panel-left glass-card" data-parallax="-0.04">
              <p>Featured Project</p>
              <strong>{currentProject.title}</strong>
              <span>{currentProject.label}</span>
            </div>

            <div className="floating-panel panel-right glass-card" data-parallax="-0.06">
              <p>Career Goal</p>
              <strong>SAP Full Stack Developer</strong>
              <span>ABAP + UI5 + Fiori + web development</span>
            </div>
          </div>
        </section>

        <section className="about section reveal" id="about">
          <div className="section-heading">
            <p className="eyebrow">About Me</p>
            <h2>Building a profile that works for web roles now and SAP roles next</h2>
          </div>

          <div className="about-grid">
            <article className="glass-card about-card">
              <h3>Current Focus</h3>
              <p>
                I work on full stack web projects using React, Node.js, Express.js, MongoDB, and
                responsive UI techniques. I like improving rough interfaces and turning them into
                cleaner, modern, recruiter-ready portfolio pieces.
              </p>
            </article>
            <article className="glass-card about-card">
              <h3>Job Goal</h3>
              <p>
                My short-term goal is to become job-ready for full stack and SAP-related developer
                roles in the next 3 to 4 months by strengthening both project quality and SAP
                learning fundamentals.
              </p>
            </article>
            <article className="glass-card about-card">
              <h3>Profile Positioning</h3>
              <p>
                This portfolio is structured to support LinkedIn, Naukri, and direct recruiter
                outreach by clearly showing technical skills, project work, and my SAP learning
                direction.
              </p>
            </article>
          </div>
        </section>

        <section className="recruiter section reveal">
          <div className="section-heading">
            <p className="eyebrow">Why Hire Me</p>
            <h2>A clear profile for recruiters looking for junior full stack and SAP-learning talent</h2>
          </div>

          <div className="recruiter-layout">
            <article className="glass-card recruiter-card tilt-card">
              <h3>What I Bring</h3>
              <ul className="recruiter-list">
                {recruiterPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="glass-card recruiter-card">
              <h3>Profiles To Update</h3>
              <p>
                This website is ready to support LinkedIn, Naukri, resume sharing, and direct
                email outreach. Add your real profile links here when you are ready to publish your
                public job profile.
              </p>
              <div className="recruiter-links">
                <a href="#contact">LinkedIn Ready</a>
                <a href="#contact">Naukri Ready</a>
                <a href="mailto:sonupandeybaldeo2003@gmail.com">Email Resume</a>
              </div>
            </article>
          </div>
        </section>

        <section className="spotlight section reveal" id="services">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>Frontend, backend, and SAP-oriented growth in one professional portfolio</h2>
          </div>

          <div className="spotlight-grid">
            {services.map((service) => (
              <article className="glass-card spotlight-card tilt-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="skills section reveal" id="skills">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Technologies I use today and technologies I am actively learning</h2>
          </div>

          <article className="glass-card stack-panel">
            <div className="skill-tags">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        </section>

        <section className="projects section reveal" id="portfolio">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Portfolio projects presented through a responsive slider for a more professional review flow</h2>
          </div>

          <div className="project-slider glass-card">
            <div className="project-slider__top">
              <div>
                <p className="project-card__label">{currentProject.label}</p>
                <h3>{currentProject.title}</h3>
              </div>

              <div className="slider-controls">
                <button className="slider-button" type="button" onClick={prevProject}>
                  Prev
                </button>
                <button className="slider-button" type="button" onClick={nextProject}>
                  Next
                </button>
              </div>
            </div>

            <div className="project-slider__content">
              <div className={`project-slider__visual ${currentProject.accent}`} />
              <div className="project-slider__details">
                <p>{currentProject.description}</p>
                <div className="project-meta">
                  {currentProject.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="slider-dots">
              {projects.map((project, index) => (
                <button
                  key={project.title}
                  className={`slider-dot ${index === activeProject ? "active" : ""}`}
                  type="button"
                  onClick={() => setActiveProject(index)}
                  aria-label={`Show ${project.title}`}
                />
              ))}
            </div>

            <div className="project-rail">
              {projects.map((project, index) => (
                <button
                  key={project.title}
                  className={`project-rail__item ${index === activeProject ? "active" : ""}`}
                  type="button"
                  onClick={() => setActiveProject(index)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{project.title}</strong>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="roadmap section reveal" id="sap-journey">
          <div className="section-heading">
            <p className="eyebrow">SAP Journey</p>
            <h2>My roadmap from web full stack development to SAP UI5 and Fiori development</h2>
          </div>

          <div className="airplane-trail" aria-hidden="true">
            <span className="airplane-icon">✈</span>
          </div>

          <div className="roadmap-grid">
            {roadmap.map((item) => (
              <article className="glass-card roadmap-card tilt-card" key={item.title}>
                <span className="roadmap-step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="themes section reveal">
          <div className="section-heading">
            <p className="eyebrow">Theme System</p>
            <h2>Five working themes with saved preference and mobile-friendly layout behavior</h2>
          </div>

          <div className="theme-preview-grid">
            {themes.map((item) => (
              <button
                className={`theme-swatch ${theme === item ? "active" : ""}`}
                type="button"
                key={item}
                onClick={() => setTheme(item)}
              >
                <span />
                {themeLabels[item]}
              </button>
            ))}
          </div>
        </section>

        <section className="contact section reveal" id="contact">
          <div className="contact-panel glass-card">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Open to web development roles, internship opportunities, and SAP growth pathways</h2>
              <p>
                Contact me at <strong>sonupandeybaldeo2003@gmail.com</strong>. This portfolio is
                now structured to support recruiter review, LinkedIn sharing, Naukri use, and
                future SAP full stack positioning.
              </p>
            </div>

            <div className="contact-links">
              <a href="mailto:sonupandeybaldeo2003@gmail.com">Email Me</a>
              <a href="#portfolio">View Projects</a>
              <a href="#sap-journey">SAP Journey</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
