if (typeof AOS !== "undefined") {
  AOS.init({ once: true, duration: 700, easing: "ease-out-cubic", offset: 90 });
}

const projectcards = document.querySelector(".projectcards");
const careerTimeline = document.querySelector(".career-timeline");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const projects = [
  {
    title: "CASHIA",
    image: "cashia",
    description: "A fintech platform for digital financial services and payments. QA work covered web and mobile journeys, API validation, regression testing, and release confidence.",
    tags: ["Javascript", "React JS"],
    Previewlink: "https://cashia.com/",
  },
  {
    title: "Cashia Developer Docs",
    image: "cashiadoc",
    description: "Integration documentation for Cashia's payment APIs, authentication, and hosted checkout, helping developers navigate implementation and onboarding.",
    tags: ["JAVA", "Python"],
    Previewlink: "https://developer.cashia.com/docs",
  },
  {
    title: "Duopole",
    image: "duopole",
    description: "A fresh-produce market development site connecting Kenyan suppliers with potential buyers in Switzerland, with an initial focus on avocados.",
    tags: ["Typescript", "React js", "HTML5"],
    Previewlink: "https://duopole.vercel.app/",
  },
  {
    title: "Malley Prairie",
    image: "daycare",
    description: "An independent childcare-site concept presenting MalleyPrairie's care locations, educational approach, practical information, and enrollment process.",
    tags: ["JavaScript","React JS", "Tilwind"],
    Previewlink: "https://malleyprairie.vercel.app/",
  },
  {
    title: "Nobilis",
    image: "nobilis",
    description: "The website of a Nairobi-based software company, presenting its web and mobile development services, case studies, and client work.",
    tags: ["FLASK","Python", "Tilwind"],
    Previewlink: "https://nobilisltd.co.ke/",
  },
    {
    title: "SPPO",
    image: "PPO",
    description: "SPPO connects fruits and vegetable producers around the world with wholesellers , retailers and other businesses that need fresh produce.",
    tags: ["FLASK","Python", "Tilwind"],
    Previewlink: "https://sppo-theta.vercel.app/de",
  },
];

const experience = [
  {
    title: "Lead QA Engineer",
    company: "Cashia",
    dates: "October 2023 – March 2026",
    description: "Led QA strategy across fintech web and mobile products, building Playwright, Cypress, and Selenium automation in CI/CD, validating APIs and distributed services, and owning release readiness. Automation and process improvements reduced regression execution time by about 40%.",
    tags: ["Playwright", "Cypress", "Selenium", "TypeScript", "CI/CD", "API Testing"],
  },
  {
    title: "QA Engineer (Contract)",
    company: "Nobilis",
    dates: "February 2024 – May 2024",
    description: "Tested ERP and financial systems through functional, integration, and API testing, validated data with SQL, and automated regression scenarios using Selenium WebDriver and Python.",
    tags: ["Selenium WebDriver", "Python", "SQL", "ERP", "API Testing"],
  },
  {
    title: "QA Engineer",
    company: "Cashia",
    dates: "March 2021 – October 2023",
    description: "Built regression, integration, and smoke coverage for web and mobile applications; validated REST APIs and performance, and partnered with developers to catch defects early.",
    tags: ["API Testing", "JMeter", "Regression", "Mobile QA", "REST APIs"],
  },
  {
    title: "Junior Backend Developer",
    company: "Safaricom",
    dates: "September 2019 – March 2020",
    description: "Developed backend features in Python and JavaScript, wrote unit and integration tests, and worked with QA on system validation and UAT for distributed services.",
    tags: ["Python", "JavaScript", "Unit Testing", "UAT", "REST APIs"],
  },
];

const PROJECT_IMAGE_SIZES =
  "(max-width: 767px) calc(100vw - 36px), (max-width: 991px) calc(100vw - 40px), 56vw";

const projectPicture = (title, image, index) => {
  const base = `assets/images/project-page/optimized/${image}`;
  const loading = index === 0 ? "eager" : "lazy";
  const srcset = (ext) => `${base}-640.${ext} 640w, ${base}-1280.${ext} 1280w`;

  return `
    <picture>
      <source type="image/webp" srcset="${srcset("webp")}" sizes="${PROJECT_IMAGE_SIZES}">
      <img src="${base}-1280.jpg" srcset="${srcset("jpg")}" sizes="${PROJECT_IMAGE_SIZES}"
        alt="${title} website preview" width="1280" height="692" loading="${loading}" decoding="async">
    </picture>`;
};

const renderProjects = () => {
  if (!projectcards) return;

  const total = String(projects.length).padStart(2, "0");

  projectcards.innerHTML = projects
    .map(({ title, image, description, tags, Previewlink }, index) => {
      const number = String(index + 1).padStart(2, "0");
      const tagList = tags.length
        ? `<ul class="pj-project-tags" aria-label="Technologies">${tags.map((tag) => `<li>${tag}</li>`).join("")}</ul>`
        : "";
      const picture = projectPicture(title, image, index);

      const visual = Previewlink
        ? `<a class="pj-project-visual" href="${Previewlink}" target="_blank" rel="noopener noreferrer" aria-label="Open ${title} in a new tab">${picture}<span class="pj-project-visual-glow" aria-hidden="true"></span></a>`
        : `<div class="pj-project-visual">${picture}</div>`;

      const action = Previewlink
        ? `<a class="pj-project-link pj-btn pj-btn-primary" href="${Previewlink}" target="_blank" rel="noopener noreferrer">
             View Project
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>
           </a>`
        : "";

      return `
        <article class="pj-project" data-aos="fade-up" data-aos-delay="${(index % 2) * 80}">
          <div class="pj-project-visual-wrap">${visual}</div>
          <div class="pj-project-body">
            <p class="pj-project-index">${number}<span>/ ${total}</span></p>
            <h3>${title}</h3>
            <p>${description}</p>
            ${tagList}
            ${action}
          </div>
        </article>`;
    })
    .join("");
};

const renderExperience = () => {
  if (!careerTimeline) return;

  careerTimeline.innerHTML = experience
    .map(({ title, company, dates, description, tags }) => `
      <li class="career-entry">
        <span class="career-marker" aria-hidden="true"></span>
        <article>
          <div class="career-heading">
            <div>
              <h3>${title}</h3>
              <p class="career-company">${company}</p>
            </div>
            <time>${dates}</time>
          </div>
          <p class="career-description">${description}</p>
          <ul class="career-tags" aria-label="Skills and tools">${tags.map((tag) => `<li>${tag}</li>`).join("")}</ul>
        </article>
      </li>`)
    .join("");
};

/* Smooth in-page navigation for the hero CTAs */
const scrollToTarget = (hash) => {
  const target = document.querySelector(hash);
  if (!target) return false;
  if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
  target.scrollIntoView({
    behavior: prefersReducedMotion.matches ? "auto" : "smooth",
    block: "start",
  });
  target.focus({ preventScroll: true });
  return true;
};

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[data-scroll]");
  if (!link) return;

  const hash = link.getAttribute("href") || "";
  if (!hash.startsWith("#") || !scrollToTarget(hash)) return;

  event.preventDefault();
  if (window.history.replaceState) {
    window.history.replaceState(null, "", hash);
  }
});

/* Floating WhatsApp shortcut: shows with the contact section and steps aside
   whenever it would sit on top of the contact form or another control. */
const initContactShortcut = () => {
  const contact = document.getElementById("contact");
  const shortcut = document.querySelector(".pj-whatsapp-float");
  if (!contact || !shortcut) return;

  const form = document.querySelector(".contact-form-card");
  let queued = false;

  const update = () => {
    queued = false;
    const contactBox = contact.getBoundingClientRect();
    const inContact = contactBox.top < window.innerHeight - 90 && contactBox.bottom > 90;

    let collides = false;
    if (form) {
      const f = form.getBoundingClientRect();
      const s = shortcut.getBoundingClientRect();
      const gap = 10;
      collides = !(
        s.right + gap < f.left ||
        s.left - gap > f.right ||
        s.bottom + gap < f.top ||
        s.top - gap > f.bottom
      );
    }

    shortcut.classList.toggle("is-visible", inContact && !collides);
  };

  const requestUpdate = () => {
    if (queued) return;
    queued = true;
    window.requestAnimationFrame(update);
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  update();
};

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderExperience();
});

if (document.readyState === "complete") {
  initContactShortcut();
} else {
  window.addEventListener("load", initContactShortcut);
}
