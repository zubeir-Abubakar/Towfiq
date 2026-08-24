/*Reference Details Table*/
// Changes made 10/1/2021:
// Added reviewphoto1 - reviewphoto5 in assets/references-page
// Changed names and descriptions of references
const referenceTable = document.querySelector(".pain");

const references = [
  {
    sl1: 1,
    name1 : "Hussein Omar",
        designation1 : "Senior Backend developer, Cashia",
        image1 : "./assets/images/references-page/Hussein.jpeg",
        message1 : "Working with Abubakar has been a game-changer for our team. His sharp eye for detail, proactive approach to finding hidden issues, and ability to bridge QA with development ensured our releases were smooth and reliable. He doesn’t just test software—he elevates it..",
        

        sl2:2,
        name2 : "Dennis Kingori",
        designation2 : "Senior Product Manager, Cashia", 
        image2: "./assets/images/references-page/kings.jpeg",
        message2 : "Abubakar is an exceptional QA engineer who consistently raises the bar for quality. He not only ensures our products meet the highest standards but also brings a product-focused mindset—anticipating user needs, spotting gaps early, and collaborating seamlessly across teams. His dedication directly translates into better experiences for our customers.",
        
        
    },

    {
        sl3:3,
        name1 : "Collins Mucheru",
        designation1 : "Elixir developer and Compliace Officer, Cashia",
        image1 : "/Colo.jpeg",
        message1 : "Abubakar has been instrumental to the success of our Compliance application. His thorough test planning, attention to detail, and ability to identify critical issues early have saved us countless hours downstream. Beyond his technical QA expertise, he brings a proactive attitude and excellent collaboration skills that make him a true asset to the team.",
      },
];

AOS.init();
const fillData = () => {
  let output = "";

    references.forEach(({ 
      sl1,
      image1,
      name1,
      designation1,
      message1,
      sl2,
      image2,
      name2,
      designation2,
      message2,
      absbox_for_linkedin2,
        }) => {
            output += `<tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image1}" class="rImg"></td>
                <td class = "referenceTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image1}" class="imgRes">
                        </span>
                    </div>
                    <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                    <a href="#0" class="paperTitle"> ${name1} </a> 
                    <div> ${designation1} </div> <div class="rConferences">  
                        <div class="referenceY">${message1}</div>
                    </div>  
                </td>
                        </tr>`;

            if (name2 && image2 && designation2 && message2) {
                output += `<tr data-aos="zoom-in-left"> 
                       
                        <td class = "referenceTitleName">
                            <div>
                                <span class="imgResponsive">
                                    <img src="${image2}" class="imgRes">
                                </span>
                            </div>
                            <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                            <a href="#0" class="paperTitle">${name2} </a> 
                            <div> ${designation2} </div> <div class="rConferences">
                                <div class="referenceY">${message2}</div>
                            </div>
                
                            
                            
                           
                        </td>
                        <td class="imgCol"><img src="${image2}" class="rImg1"></td>
                                        </tr>`;
            }
        }
    );
  referenceTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
