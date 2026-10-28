AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "CASHIA",
    cardImage: "assets/images/project-page/cashia.png",
    description: "A fintech platform focused on simplifying digital financial services and payment experiences. Built with a focus on performance, scalability, and user trust , helping individuals and businesses move money with confidence.",
    tags: ["Javascript", "React JS"],
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://cashia.com/",
  },
  {
    title: "Cashia Developer Docs",
    cardImage: "assets/images/project-page/cashiaDoc.png",
    description: "A developer documentation portal for Cashia's integrations, APIs, authentication flows, and fintech onboarding. Built to make the developer experience delightful with clear, fast, and searchable..",
    tags: ["JAVA", "Python"],
    Previewlink: "https://developer.cashia.com/docs",
  },
  // {
  //   title: "Github Search",
  //   cardImage: "assets/images/project-page/git.jpg",
  //   description: "Github search built using Angular and typscript and also github Api",
  //   tags: ["Typscript", "Angular"],
  //   tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
  //   Previewlink: "https://zubeir-abubakar.github.io/git-search/home",
  //   Githublink: "https://github.com/zubeir-Abubakar/Github-Search",
  // },
  {
    title: " Duopole",
    cardImage: "assets/images/project-page/Duopole.png",
    description: "Exercise tracker built using basic redux.",
    tags: ["CSS", "HTML5"],
    tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
    Previewlink: "https://duopole.vercel.app/",
  },
  {
    title: "Malley Prairie",
    cardImage: "assets/images/project-page/daycare.png",
    description: "Tasty Hotel Menu using JavaScript.",
    tags: ["JavaScript", "HTML5"],
    Previewlink: "https://malleyprairie.vercel.app/",
    Githublink: "https://github.com/zubeir-Abubakar/Hotel",
  },
  {
    title: "Nobilis",
    cardImage: "assets/images/project-page/Nobilis.png",
    description: "Tasty Hotel Menu using JavaScript.",
    Previewlink: "https://nobilisltd.co.ke/",
  },
  {
    title: "Sliding Form",
    cardImage: "assets/images/project-page/slide.png",
    description: "Slidding Form created using Css and Javascript.",
    tags: ["CSS", "Javascript"],
    tagimg: "https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png",
    Previewlink: "https://zubeir-abubakar.github.io/sliding-form/",
    Githublink: "https://github.com/zubeir-Abubakar/sliding-form",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
