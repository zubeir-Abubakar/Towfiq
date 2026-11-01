const referenceTable = document.querySelector(".pain");

const references = [
  {
    name: "Hussein Omar",
    designation: "Senior Backend developer, Cashia",
    image: "./assets/images/references-page/Hussein.jpeg",
    message:
      "Working with Abubakar has been a game-changer for our team. His sharp eye for detail, proactive approach to finding hidden issues, and ability to bridge QA with development ensured our releases were smooth and reliable. He doesn’t just test software—he elevates it..",
  },
  {
    name: "Dennis Kingori",
    designation: "Senior Product Manager, Cashia",
    image: "./assets/images/references-page/kings.jpeg",
    message:
      "Abubakar is an exceptional QA engineer who consistently raises the bar for quality. He not only ensures our products meet the highest standards but also brings a product-focused mindset—anticipating user needs, spotting gaps early, and collaborating seamlessly across teams. His dedication directly translates into better experiences for our customers.",
  },
  {
    name: "Collins Mucheru",
    designation: "Elixir developer and Compliace Officer, Cashia",
    image: "Colo.jpeg",
    message:
      "Abubakar has been instrumental to the success of our Compliance application. His thorough test planning, attention to detail, and ability to identify critical issues early have saved us countless hours downstream. Beyond his technical QA expertise, he brings a proactive attitude and excellent collaboration skills that make him a true asset to the team.",
  },
];

if (typeof AOS !== "undefined") {
  AOS.init();
}

const fillData = () => {
  if (!referenceTable) return;

  referenceTable.innerHTML = references
    .map(
      ({ image, name, designation, message }, index) => `
        <tr class="testimonial-row">
          <td colspan="2">
            <article class="testimonial-card" data-aos="fade-up" data-aos-delay="${index * 80}">
              <img class="testimonial-avatar" src="${image}" alt="${name}" loading="lazy">
              <div class="testimonial-copy">
                <span class="testimonial-quote-mark" aria-hidden="true">“</span>
                <blockquote class="testimonial-quote">${message}</blockquote>
                <div class="testimonial-author">
                  <h3>${name}</h3>
                  <p>${designation}</p>
                </div>
              </div>
            </article>
          </td>
        </tr>
      `
    )
    .join("");
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", fillData);
} else {
  fillData();
}
