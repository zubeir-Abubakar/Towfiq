AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
 {
    title: "Backend software Development Intern",
    cardImage: "./assets/images/experience-page/innovex.jpeg",
    place: "INNOVEX SOLUTIONS",
    time: "(september 2019 - Jan, 2020)",
    desp:"<li>Worked on the project Mjenzi Application. 2.0 standards Implementation for Retrofit and Virtual Location Static.</li><li>Designed a software application that would help developers trust their workers on their project developments that includes, it controls the day to day routine and contains Geo django where it collects information about where the data was sent thus safety to the developers.</li>",
  },
  {
    title: " UI/UX | software Developer",
    cardImage: "./assets/images/experience-page/Safaricom.png",
    place: "Safaricom",
    time: "(February 2020 - August, 2020)",
    desp:"<li>Worked on the project Mpesa Application. 1.0 </li><li>Designed a software application that would help Clients fasten up and make their transaction work easy for them that includes having mini apps within the app as well as having the transaction logs.</li>",
  },
  {
    title: "Quality Assurance Engineer | Automation Engineer ",
    cardImage: "./assets/images/experience-page/Nobilis.jpeg",
    place: "Nobilis",
    time: "(March 2024 - May 2024 CONTRACT)",
    desp:"<li>Successfully identified and reported critical issues that improved the overall stability and performance of the applications.</li><li> Contributed to a 20% reduction in the manual testing time by developing efficient automated test scripts.</li><li> Received commendation from the project manager for proactive communication and thorough testing practices.</li>",
  },
  {
    title: "Lead Quality Assurance Engineer | Automation Engineer ",
    cardImage: "./assets/images/experience-page/Cashia.png",
    place: "CASHIA",
    time: "(January 2021 - Present)",
    desp:"<li>Worked on the project Cashia App for transaction upgrade2.0 standards. Worked as Quality and Assuarance as well as Frontend Developer.</li><li>Designed a software application that would help Customers do transaction easily using Cashia Tag, as well as creating an e-commerce market for merchants. Contains High level security and trust between merchants and customers for the safety transaction of their currencies.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "HTML5",
    cardImage: "assets/images/experience-page/html.png",
    description:
      "It allows the modification of the appearance of web pages.",
  },
  {
    title: "Css",
    cardImage: "assets/images/experience-page/css.png",
    description:
      "It allows one to adapt the presentation to different types of devices.",
  },
  {
    title: "Bootstrap",
    cardImage: "assets/images/experience-page/bootstrap.jpg",
    description:
      "it makes zero sense for a uniquely designed website.",
  },
  {
    title: "Javascript",
    cardImage: "assets/images/experience-page/js.png",
    description:
      "It gives web pages interactive elements that engage a user.",
  },
  {
    title: "Sass",
    cardImage: "assets/images/experience-page/sass.jpg",
    description:
      "it implements various features that are useful for creating manageable stylesheets.",
  },
  {
    title: "Angular",
    cardImage: "assets/images/experience-page/Angular.png",
    description:
      "it is used building single-page client applications using HTML and TypeScript.",
  },  {
    title: "JQuery",
    cardImage: "assets/images/experience-page/jquery.png",
    description:
      "The purpose of jQuery is to make it much easier to use JavaScript on your website..",
  },  {
    title: "Python",
    cardImage: "assets/images/experience-page/python.jpg",
    description:
      "it can be used for other types of programming and software development besides web development. ",
  },  {
    title: "Django",
    cardImage: "assets/images/experience-page/django.png",
    description:
      "It enables rapid development of secure and maintainable websites.",
  },  {
    title: "Flask",
    cardImage: "assets/images/experience-page/flask.png",
    description:
      "it is a third-party Python library used for developing web applications.",
  },  {
    title: "Postgress",
    cardImage: "assets/images/experience-page/postgress.png",
    description:
      "its high levels of resilience, integrity, and correctness.",
  },  {
    title: "IBM",
    cardImage: "assets/images/experience-page/IBM.jpg",
    description:
      "it is used for INTERGRATION.",
  },
  {
    title: "Git",
    cardImage: "assets/images/experience-page/git.jpg",
    description:
      "it is used as a command line to execute various tasks.",
  }, {
    title: "Herouku",
    cardImage: "assets/images/experience-page/herku.jpeg",
    description:
      "it is used as a deployment server for Python frameworks applications.",
  },
  {
    title: "Github",
    cardImage: "assets/images/experience-page/github.png",
    description:
      "it is used as a deployment server for web applications.",
  },
  {
    title: "React Js ",
    cardImage: "https://web.rijoan.com/wp-content/uploads/2023/08/react.png",
    description:
      "Used as a frontend framework.",
  },
  {
    title: "Jira Xray ",
    cardImage: "https://automation.eurostarsoftwaretesting.com/wp-content/uploads/2024/03/Xray-V-green.png",
    description:
      "Used as test cases tool management.",
  },
  {
    title: "J-unit ",
    cardImage: "https://cdn.prod.website-files.com/5f10ed4c0ebf7221fb5661a5/5f23a7a9b70a249eed481481_Junit.png",
    description:
      "open-source testing framework for the Java programming language.",
  },
   {
    title: "Cypress",
    cardImage: "https://www.gartner.com/imagesrv/peer-insights/vendors/logos/cypress.jpg",
    description:
      "Useed for automation testing and running tests manually.",
  },
   {
    title: "React Native",
    cardImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKYzcQt4YGIW8Uz-lh4nYggnIH8cNij_6T_w&s",
    description:
      "Used for creating mobile frameworks and frontend.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="background-image: url(${cardImage});background-repeat: no-repeat, repeat; background-size: cover; background-position: center;">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2>
          <p class="copy">${description}</p></div>
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);



// Hackathon Section


