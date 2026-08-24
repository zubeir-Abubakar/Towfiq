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

const volunteership = document.querySelector(".volunteership");

const volunteershipcards = [
  {
    title: "Playwright",
    cardImage: "https://playwright.dev/img/playwright-logo.svg",
    category: "Test Automation",
    description: "Next-gen end-to-end automation for modern web apps with cross-browser, parallel, and resilient test execution.",
  },
  {
    title: "Cypress",
    cardImage: "https://www.gartner.com/imagesrv/peer-insights/vendors/logos/cypress.jpg",
    category: "Test Automation",
    description: "Developer-friendly end-to-end testing framework for fast, reliable, and headless browser validation.",
  },
  {
    title: "Selenium WebDriver",
    cardImage: "assets/images/experience-page/js.png",
    category: "Test Automation",
    description: "Industry-standard automated testing suite for complex web applications and cross-browser regression testing.",
  },
  {
    title: "TypeScript",
    cardImage: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png",
    category: "Programming",
    description: "Strongly typed programming language used for scalable test frameworks, maintainable codebases, and tooling.",
  },
  {
    title: "JavaScript",
    cardImage: "assets/images/experience-page/js.png",
    category: "Programming",
    description: "Core language powering web frontends, test automation scripts, and asynchronous testing libraries.",
  },
  {
    title: "Python",
    cardImage: "assets/images/experience-page/python.jpg",
    category: "Programming",
    description: "Versatile programming language for test automation scripts, backend testing, and data validation routines.",
  },
  {
    title: "Postman & REST APIs",
    cardImage: "assets/images/experience-page/postgress.png",
    category: "API Testing",
    description: "Comprehensive API test design, automated endpoint validation across 200+ routes, and Swagger/OpenAPI contracts.",
  },
  {
    title: "Kafka & Event-Driven",
    cardImage: "assets/images/experience-page/IBM.jpg",
    category: "Distributed Systems",
    description: "Event-driven architecture testing, message queue verification, and distributed microservices validation.",
  },
  {
    title: "CI/CD Pipelines",
    cardImage: "assets/images/experience-page/herku.jpeg",
    category: "DevOps",
    description: "Automated test integration into Jenkins, Azure DevOps, and GitLab CI pipelines with regression quality gates.",
  },
  {
    title: "Docker & Containers",
    cardImage: "assets/images/experience-page/git.jpg",
    category: "DevOps",
    description: "Containerized test execution environments for scalable, reproducible automated testing pipelines.",
  },
  {
    title: "Git & GitHub",
    cardImage: "assets/images/experience-page/github.png",
    category: "Version Control",
    description: "Distributed source control, branch protection strategies, PR code reviews, and automated GitHub Actions workflows.",
  },
  {
    title: "Grafana & Observability",
    cardImage: "assets/images/experience-page/Angular.png",
    category: "Monitoring",
    description: "Real-time production health monitoring, logging metrics, defect tracking, and incident reduction observability.",
  },
  {
    title: "JMeter & k6",
    cardImage: "assets/images/experience-page/django.png",
    category: "Performance",
    description: "Load, stress, and spike performance testing to validate high-concurrency throughput and system stability.",
  },
  {
    title: "Jira & Xray",
    cardImage: "https://automation.eurostarsoftwaretesting.com/wp-content/uploads/2024/03/Xray-V-green.png",
    category: "Test Management",
    description: "Enterprise test case repository, defect lifecycle management, traceability matrices, and sprint QA planning.",
  },
  {
    title: "TestRail & Linear",
    cardImage: "assets/images/experience-page/sass.jpg",
    category: "Test Management",
    description: "Structured test planning, test run execution tracking, and modern agile project management.",
  },
  {
    title: "SQL & Databases",
    cardImage: "assets/images/experience-page/postgress.png",
    category: "Database",
    description: "Database schema verification, complex query validation, and data integrity testing for regulated environments.",
  },
  {
    title: "Appium",
    cardImage: "assets/images/experience-page/html.png",
    category: "Mobile QA",
    description: "Cross-platform mobile automation framework for native, hybrid, and web apps across iOS and Android.",
  },
  {
    title: "Elixir",
    cardImage: "assets/images/experience-page/flask.png",
    category: "Programming",
    description: "Concurrent, functional language for high-throughput, fault-tolerant fintech and distributed systems.",
  },
  {
    title: "Java & JUnit",
    cardImage: "https://cdn.prod.website-files.com/5f10ed4c0ebf7221fb5661a5/5f23a7a9b70a249eed481481_Junit.png",
    category: "QA & Testing",
    description: "Object-oriented test framework development, unit testing suites, and automated test runners.",
  },
  {
    title: "React.js",
    cardImage: "https://web.rijoan.com/wp-content/uploads/2023/08/react.png",
    category: "Frontend",
    description: "Component-driven frontend architecture, component testing, and modern Single Page Application engineering.",
  },
];

/**
 * Renders Tech Stack / Skills Cards into DOM
 */
const showCards = () => {
  if (!volunteership) return;

  let output = "";
  volunteershipcards.forEach(({ title, cardImage, description, category }, index) => {
    output += `
      <div 
        class="card volunteerCard" 
        data-aos="zoom-in-up" 
        data-aos-duration="600" 
        data-aos-delay="${(index % 6) * 100}"
        style="background-image: url('${cardImage}'); background-repeat: no-repeat; background-size: cover; background-position: center;"
      >
        <div class="card-overlay"></div>
        <div class="content">
          ${category ? `<span class="volunteerCategory">${category}</span>` : ""}
          <h2 class="volunteerTitle">${title}</h2>
          <p class="copy">${description}</p>
        </div>
      </div>
    `;
  });

  volunteership.innerHTML = output;
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
    image: "assets/images/certifications/micro1.jpeg",
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
      </div>
    </div>
  `;
  document.body.appendChild(certificateModal);

  const modalImage = certificateModal.querySelector(".certificate-modal__image");
  const modalTitle = certificateModal.querySelector(".certificate-modal__title");
  const modalDescription = certificateModal.querySelector(".certificate-modal__description");
  const closeCertificateModal = () => {
    certificateModal.hidden = true;
    document.body.style.overflow = "";
  };

  hackathonSection.querySelectorAll(".certificate-button").forEach((button) => {
    button.addEventListener("click", () => {
      const certificate = certifications[Number(button.dataset.certificateIndex)];
      if (!certificate) return;

      modalImage.src = certificate.image;
      modalImage.alt = certificate.title;
      modalTitle.textContent = certificate.title;
      modalDescription.textContent = certificate.desp;
      certificateModal.hidden = false;
      document.body.style.overflow = "hidden";
      certificateModal.querySelector(".certificate-modal__close").focus();
    });
  });

  certificateModal.querySelector(".certificate-modal__close").addEventListener("click", closeCertificateModal);
  certificateModal.addEventListener("click", (event) => {
    if (event.target === certificateModal) closeCertificateModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !certificateModal.hidden) closeCertificateModal();
  });

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
  showCards();
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


