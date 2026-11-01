"use strict";

/**
 * Initialize AOS (Animate on Scroll)
 */
if (typeof AOS !== "undefined") {
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: false,
    mirror: true,
  });
}

/**
 * =========================================================================
 * 1. WORK EXPERIENCE DATA & RENDERING (FROM CV)
 * =========================================================================
 */

const experiencecards = document.querySelector(".experience-cards");

const exp = [
  {
    title: "Lead QA Engineer",
    cardImage: "./assets/images/experience-page/Cashia.png",
    place: "Cashia · Nairobi, Kenya",
    time: "Oct 2023 – April 2026",
    type: "Lead · Full-Time",
    desp: [
      "Owned end-to-end software quality across fintech web and mobile applications serving multiple international markets.",
      "Built and maintained scalable <strong>Playwright, Cypress, and Selenium</strong> test automation frameworks integrated into CI/CD pipelines.",
      "Defined QA strategy, release readiness criteria, regression gates, and automated API validation for distributed microservices.",
      "Partnered closely with developers during feature refinement using shift-left quality practices, <strong>reducing regression execution time by ~40%</strong>.",
      "Utilized <strong>Grafana monitoring and observability</strong> to validate production health and reduce incidents, achieving <strong>zero critical production escapes</strong> across major releases.",
    ],
    tags: ["Playwright", "Cypress", "Selenium", "TypeScript", "CI/CD", "API Testing", "Grafana", "Shift-Left QA", "Microservices", "Fintech"],
  },
  {
    title: "QA Engineer (Contract)",
    cardImage: "./assets/images/experience-page/Nobilis.jpeg",
    place: "Nobilis · Nairobi, Kenya",
    time: "Feb 2024 – May 2024",
    type: "Contract",
    desp: [
      "Performed comprehensive testing activities for ERP and financial systems within a <strong>regulated Swiss enterprise environment</strong>.",
      "Executed functional, integration, API, and database testing to ensure accuracy and regulatory compliance of business-critical systems.",
      "Conducted <strong>SQL database validation and backend data verification</strong> to guarantee reporting accuracy and system consistency.",
      "Automated critical regression scenarios using <strong>Selenium WebDriver and Python</strong> to improve testing efficiency and coverage.",
      "Collaborated with cross-functional project teams within agile workflows, driving release readiness and high quality assurance standards."
    ],
    tags: ["Selenium WebDriver", "Python", "SQL Validation", "ERP Systems", "Financial Systems", "API Testing", "Agile Scrum"],
  },
  {
    title: "QA Engineer",
    cardImage: "./assets/images/experience-page/Cashia.png",
    place: "Cashia · Nairobi, Kenya",
    time: "Mar 2021 – Oct 2023",
    type: "Full-Time · Promoted to Lead",
    desp: [
      "Built comprehensive regression, integration, and smoke test suites for cross-platform web and mobile applications.",
      "Performed rigorous API testing across <strong>200+ REST endpoints</strong>, validating authentication mechanisms, token lifecycles, and business logic.",
      "Conducted performance and stress testing using <strong>Apache JMeter</strong> under high-load concurrency scenarios.",
      "Designed, maintained, and optimized automated test cases, collaborating with developers to catch defects early in the SDLC."
    ],
    tags: ["API Testing (200+ Endpoints)", "JMeter", "Regression Testing", "Mobile QA", "Postman", "Defect Triage", "Fintech SaaS"],
  },
  {
    title: "Junior Backend Developer",
    cardImage: "./assets/images/experience-page/Safaricom.png",
    place: "Safaricom PLC · Nairobi, Kenya",
    time: "Sep 2019 – Mar 2020",
    type: "Full-Time",
    desp: [
      "Developed backend features and wrote automated unit and integration tests using <strong>Python and JavaScript</strong>, building a strong foundation in quality engineering practices.",
      "Collaborated with QA engineers on system validation and User Acceptance Testing (UAT) for telecom-scale distributed systems.",
      "Ensured high test coverage, clean code standards, and seamless service integration across distributed backend modules."
    ],
    tags: ["Python", "JavaScript", "Unit Testing", "UAT", "Distributed Systems", "REST APIs", "Telecom Scale"],
  },
];

/**
 * Renders Work Experience Cards into DOM
 */
const showCards2 = () => {
  if (!experiencecards) return;

  let output = "";
  exp.forEach(({ title, cardImage, place, time, type, desp, tags }, index) => {
    const listItems = Array.isArray(desp)
      ? desp.map((item) => `<li>${item}</li>`).join("")
      : desp;

    const tagBadges = Array.isArray(tags)
      ? tags.map((tag) => `<span class="exp-tag">${tag}</span>`).join("")
      : "";

    output += `
      <div class="card card1" data-aos="fade-up" data-aos-duration="900" data-aos-delay="${index * 100}">
        <div class="card-image-wrapper">
          <img 
            src="${cardImage}" 
            class="featured-image" 
            alt="${title} at ${place}" 
            loading="lazy"
            onerror="this.onerror=null;this.src='assets/images/experience-page/experience.svg';"
          />
        </div>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <div class="meta-wrapper">
              <span class="pre-heading"><i class="fas fa-building mr-1"></i>${place}</span>
              ${type ? `<span class="exp-badge exp-type">${type}</span>` : ""}
              <span class="author"><i class="far fa-calendar-alt mr-1"></i>${time}</span>
            </div>
            <ol class="exp-desp">
              ${listItems}
            </ol>
            ${tagBadges ? `<div class="exp-tags">${tagBadges}</div>` : ""}
          </header>
        </article>
      </div>
    `;
  });

  experiencecards.innerHTML = output;
};

/**
 * =========================================================================
 * 2. TECHNICAL SKILLS & DOMAIN EXPERTISE (FROM CV)
 * =========================================================================
 */

const technicalSkills = document.querySelector(".technical-skills-groups");

const skillCategories = [
  {
    title: "Test Automation",
    primary: true,
    skills: [
      { name: "Playwright", mark: "PW" },
      { name: "Selenium WebDriver", mark: "SE" },
      { name: "Cypress", mark: "CY" },
      { name: "Appium", mark: "AP" },
    ],
  },
  {
    title: "API and Service Testing",
    skills: [
      { name: "Postman", mark: "PM" },
      { name: "REST APIs", icon: "fas fa-network-wired" },
      { name: "Swagger/OpenAPI", icon: "fas fa-code" },
      { name: "Kafka", mark: "K" },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "TypeScript", mark: "TS" },
      { name: "JavaScript", icon: "fab fa-js" },
      { name: "Python", icon: "fab fa-python" },
      { name: "Java", icon: "fab fa-java" },
      { name: "Elixir", mark: "EX" },
    ],
  },
  {
    title: "Data and Backend Validation",
    skills: [
      { name: "SQL", icon: "fas fa-database" },
      { name: "Database validation", icon: "fas fa-check-double" },
      { name: "Backend data verification", icon: "fas fa-server" },
    ],
  },
  {
    title: "CI/CD and DevOps",
    skills: [
      { name: "Jenkins", icon: "fab fa-jenkins" },
      { name: "Azure DevOps", icon: "fab fa-microsoft" },
      { name: "GitLab CI", icon: "fab fa-gitlab" },
      { name: "Docker", icon: "fab fa-docker" },
      { name: "Git", icon: "fab fa-git-alt" },
      { name: "GitHub", icon: "fab fa-github" },
    ],
  },
  {
    title: "Performance Testing",
    skills: [
      { name: "JMeter", mark: "JM" },
      { name: "k6", mark: "k6" },
    ],
  },
  {
    title: "Test Management",
    skills: [
      { name: "Jira", icon: "fab fa-jira" },
      { name: "Xray", mark: "XR" },
      { name: "TestRail", mark: "TR" },
    ],
  },
  {
    title: "Testing Practices and Engineering Methods",
    practices: [
      "Functional Testing",
      "UI Testing",
      "API Testing",
      "Integration Testing",
      "Regression Testing",
      "Exploratory Testing",
      "Smoke Testing",
      "Performance Testing",
      "Agile",
      "Scrum",
      "BDD",
      "SDLC",
      "STLC",
      "DevOps",
      "SRE",
      "Shift-Left Testing",
    ],
  },
];

const renderTechnicalSkills = () => {
  if (!technicalSkills) return;

  technicalSkills.innerHTML = skillCategories
    .map(({ title, primary, skills, practices }) => {
      const content = practices
        ? `<ul class="skill-methods">${practices.map((practice) => `<li>${practice}</li>`).join("")}</ul>`
        : `<ul class="skill-grid">${skills
            .map(({ name, icon, mark }) => {
              const logo = icon
                ? `<i class="${icon}" aria-hidden="true"></i>`
                : `<span class="skill-mark" aria-hidden="true">${mark}</span>`;
              return `<li class="skill-item" tabindex="0"><span class="skill-icon">${logo}</span><span class="skill-name">${name}</span></li>`;
            })
            .join("")}</ul>`;

      const categoryClass = practices ? "skill-category--practices" : "skill-category--tech";
      return `<section class="skill-category ${categoryClass}${primary ? " skill-category--primary" : ""}"><h3>${title}</h3>${content}</section>`;
    })
    .join("");
};

/**
 * =========================================================================
 * 3. CERTIFICATIONS & ACCREDITATIONS (FROM CV)
 * =========================================================================
 */

const hackathonSection = document.querySelector(".blog-slider__wrp");

const certifications = [
  {
    title: "ISTQB Certified Tester",
    role: "Foundation Level (CTFL) · Certified",
    desp: "Globally recognized qualification validating excellence in software testing methodologies, test analysis, test design, execution, and risk-based defect management.",
    image: "assets/images/certifications/istqb.jpeg",
    link: "https://www.linkedin.com/in/abubakar-towfiq",
  },
  {
    title: "Certified Lead QA Engineer",
    role: "Micro1 · Certified",
    desp: "Advanced certification evaluating top-tier automated testing framework architecture, CI/CD pipeline integration, API validation, and shift-left quality leadership.",
    image: "assets/images/certifications/Micro1.jpeg",
    link: "https://www.linkedin.com/in/abubakar-towfiq",
  },
  {
    title: "Certified Senior QA Engineer (CSQE)",
    role: "Alison · Certified",
    desp: "Professional accreditation covering comprehensive software quality assurance standards, automated test matrices, performance testing, and SDLC security.",
    image: "assets/images/certifications/Allison.jpeg",
    link: "https://www.linkedin.com/in/abubakar-towfiq",
  },
  {
    title: "Coding Fundamentals",
    role: "Grasshopper (Google) · Certified",
    desp: "Certification in foundational programming structures, algorithmic thinking, and modern JavaScript development practices by Google.",
    image: "assets/images/experience-page/uplift.png",
    link: "https://www.linkedin.com/in/abubakar-towfiq",
  },
];

const showHackathons = () => {
  if (!hackathonSection) return;

  let output = "";
  certifications.forEach(({ title, role, desp, image, link }, index) => {
    output += `
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
          <img 
            src="${image}" 
            alt="${title}" 
            loading="lazy"
            onerror="this.onerror=null;this.src='assets/images/experience-page/experience.svg';"
          >
        </div>
        <div class="blog-slider__content">
          <span class="blog-slider__code">${role}</span>
          <div class="blog-slider__title">${title}</div>
          <div class="blog-slider__text">${desp}</div>
          <button type="button" class="blog-slider__button certificate-button" data-certificate-index="${index}"><i class="fas fa-certificate mr-2"></i>View Certification</button>
        </div>
      </div>
    `;
  });

  hackathonSection.innerHTML = output;

  const certificateModal = document.createElement("div");
  certificateModal.className = "certificate-modal";
  certificateModal.hidden = true;
  certificateModal.setAttribute("role", "dialog");
  certificateModal.setAttribute("aria-modal", "true");
  certificateModal.setAttribute("aria-labelledby", "certificate-modal-title");
  certificateModal.innerHTML = `
    <div class="certificate-modal__dialog">
      <button type="button" class="certificate-modal__close" aria-label="Close certificate preview">&times;</button>
      <img class="certificate-modal__image" alt="">
      <div class="certificate-modal__details">
        <h2 class="certificate-modal__title" id="certificate-modal-title"></h2>
        <p class="certificate-modal__description"></p>
        <div class="certificate-modal__nav">
          <button type="button" class="certificate-modal__nav-btn" id="cert-prev" aria-label="Previous certificate">&#8249;</button>
          <span class="certificate-modal__counter" id="cert-counter"></span>
          <button type="button" class="certificate-modal__nav-btn" id="cert-next" aria-label="Next certificate">&#8250;</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(certificateModal);

  const modalImage = certificateModal.querySelector(".certificate-modal__image");
  const modalTitle = certificateModal.querySelector(".certificate-modal__title");
  const modalDescription = certificateModal.querySelector(".certificate-modal__description");
  const prevBtn = certificateModal.querySelector("#cert-prev");
  const nextBtn = certificateModal.querySelector("#cert-next");
  const counterEl = certificateModal.querySelector("#cert-counter");

  let currentCertIndex = 0;

  const updateModalContent = (index) => {
    const certificate = certifications[index];
    if (!certificate) return;
    currentCertIndex = index;
    modalImage.src = certificate.image;
    modalImage.alt = certificate.title;
    modalTitle.textContent = certificate.title;
    modalDescription.textContent = certificate.desp;
    if (counterEl) counterEl.textContent = `${index + 1} / ${certifications.length}`;
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === certifications.length - 1;
  };

  const closeCertificateModal = () => {
    certificateModal.hidden = true;
    document.body.style.overflow = "";
  };

  const openCertificateModal = (index) => {
    updateModalContent(index);
    certificateModal.hidden = false;
    document.body.style.overflow = "hidden";
    certificateModal.querySelector(".certificate-modal__close").focus();
  };

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentCertIndex > 0) openCertificateModal(currentCertIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (currentCertIndex < certifications.length - 1) openCertificateModal(currentCertIndex + 1);
    });
  }

  hackathonSection.querySelectorAll(".certificate-button").forEach((button) => {
    button.addEventListener("click", () => {
      const idx = Number(button.dataset.certificateIndex);
      openCertificateModal(idx);
    });
  });

  certificateModal.querySelector(".certificate-modal__close").addEventListener("click", closeCertificateModal);
  certificateModal.addEventListener("click", (event) => {
    if (event.target === certificateModal) closeCertificateModal();
  });
  document.addEventListener("keydown", (event) => {
    if (certificateModal.hidden) return;
    if (event.key === "Escape") closeCertificateModal();
    if (event.key === "ArrowLeft" && currentCertIndex > 0) openCertificateModal(currentCertIndex - 1);
    if (event.key === "ArrowRight" && currentCertIndex < certifications.length - 1) openCertificateModal(currentCertIndex + 1);
  });

  // Touch swipe support for the modal dialog
  const dialog = certificateModal.querySelector(".certificate-modal__dialog");
  let touchStartX = 0;
  let touchEndX = 0;
  const SWIPE_THRESHOLD = 50;

  dialog.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });

  dialog.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) >= SWIPE_THRESHOLD) {
      if (diff > 0 && currentCertIndex < certifications.length - 1) {
        // Swiped left → next
        openCertificateModal(currentCertIndex + 1);
      } else if (diff < 0 && currentCertIndex > 0) {
        // Swiped right → previous
        openCertificateModal(currentCertIndex - 1);
      }
    }
  }, { passive: true });

  // Re-initialize or update swiper if available
  if (typeof Swiper !== "undefined" && document.querySelector(".blog-slider")) {
    new Swiper(".blog-slider", {
      observer: true,
      observeParents: true,
      spaceBetween: 30,
      effect: "slide",
      slidesPerView: 1,
      allowTouchMove: true,
      grabCursor: true,
      pagination: {
        el: ".blog-slider__pagination",
        clickable: true,
      },
    });
  }
};

/**
 * =========================================================================
 * 4. DOM INITIALIZATION
 * =========================================================================
 */

const initializeExperience = () => {
  showCards2();
  renderTechnicalSkills();
  showHackathons();

  // Refresh AOS after DOM elements are rendered
  if (typeof AOS !== "undefined") {
    setTimeout(() => {
      AOS.refresh();
    }, 150);
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeExperience);
} else {
  initializeExperience();
}


