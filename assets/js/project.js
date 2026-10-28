if (typeof AOS !== "undefined") {
  AOS.init({ once: true });
}

const projectcards = document.querySelector(".projectcards");
const careerTimeline = document.querySelector(".career-timeline");

const projects = [
  {
    title: "CASHIA",
    cardImage: "assets/images/project-page/cashia.png",
    description: "A fintech platform for digital financial services and payments. QA work covered web and mobile journeys, API validation, regression testing, and release confidence.",
    tags: ["Javascript", "React JS"],
    Previewlink: "https://cashia.com/",
  },
  {
    title: "Cashia Developer Docs",
    cardImage: "assets/images/project-page/cashiaDoc.png",
    description: "Integration documentation for Cashia's payment APIs, authentication, and hosted checkout, helping developers navigate implementation and onboarding.",
    tags: ["JAVA", "Python"],
    Previewlink: "https://developer.cashia.com/docs",
  },
  {
    title: "Duopole",
    cardImage: "assets/images/project-page/Duopole.png",
    description: "A fresh-produce market development site connecting Kenyan suppliers with potential buyers in Switzerland, with an initial focus on avocados.",
    tags: ["CSS", "HTML5"],
    Previewlink: "https://duopole.vercel.app/",
  },
  {
    title: "Malley Prairie",
    cardImage: "assets/images/project-page/daycare.png",
    description: "An independent childcare-site concept presenting MalleyPrairie's care locations, educational approach, practical information, and enrollment process.",
    tags: ["JavaScript", "HTML5"],
    Previewlink: "https://malleyprairie.vercel.app/",
  },
  {
    title: "Nobilis",
    cardImage: "assets/images/project-page/Nobilis.png",
    description: "The website of a Nairobi-based software company, presenting its web and mobile development services, case studies, and client work.",
    tags: [],
    Previewlink: "https://nobilisltd.co.ke/",
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

const renderProjects = () => {
  if (!projectcards) return;

  projectcards.innerHTML = projects
    .map(({ title, cardImage, description, tags, Previewlink, Githublink }, index) => {
      const tagList = tags.length
        ? `<ul class="project-tags" aria-label="Technologies">${tags.map((tag) => `<li>${tag}</li>`).join("")}</ul>`
        : "";
      const visitLink = Previewlink
        ? `<a class="project-visit" href="${Previewlink}" target="_blank" rel="noopener noreferrer">Visit Page <i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i></a>`
        : `<span class="project-unavailable" aria-disabled="true">Visit Page unavailable</span>`;
      const sourceLink = Githublink
        ? `<a class="project-source" href="${Githublink}" target="_blank" rel="noopener noreferrer">Source code</a>`
        : "";
      const preview = Previewlink
        ? `<a href="${Previewlink}" target="_blank" rel="noopener noreferrer" aria-label="Open ${title}"><img src="${cardImage}" alt="${title} website preview" loading="lazy"></a>`
        : `<img src="${cardImage}" alt="${title} preview" loading="lazy">`;

      return `
        <article class="project-row" data-aos="fade-up" data-aos-delay="${index * 80}">
          <div class="project-preview">${preview}</div>
          <div class="project-details">
            ${tagList}
            <h2>${title}</h2>
            <p>${description}</p>
            <div class="project-actions">${visitLink}${sourceLink}</div>
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

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderExperience();
});
