const filterButtons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".box_container .box");
const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".previous");
const sections = document.querySelectorAll(".projects_container .box_container");
const nextBtn2 = document.querySelector(".Nextbtn");


const filterCards = (e) => {
    document.querySelector(".active_button").classList.remove("active_button");
    e.target.classList.add("active_button");
  
    cards.forEach((card) => {
      card.classList.add("hide");
      if (e.target.dataset.name==="social media") {
        if(card.dataset.name==="social media") {
            card.classList.remove("hide")
            console.log("dsqdqsdqsdqs")
        }
      }

      if (e.target.dataset.name === "all") {
        if (card.classList.contains("tohide")) {
          card.classList.add("hide");
   
        }
        else {
            card.classList.remove("hide")
        }
      }

      if (e.target.dataset.name === card.dataset.name) {

            card.classList.remove("hide");
            
          
      }
  
      
    });
  };


let currentSection = 0;

function showSection(index) {
  sections.forEach((section, i) => {
    section.classList.add("hide");
    if (i === index) {
      section.classList.remove("hide");
    }
  });
}



nextBtn.addEventListener("click", () => {
  if (currentSection < sections.length - 1) {
    currentSection++;
    showSection(currentSection);
    if(currentSection === 0) {
      nextBtn.classList.add("hide")
      previousBtn.classList.add("hide")
      nextBtn2.classList.remove("hide")
    } else {
      nextBtn.classList.remove("hide")
      previousBtn.classList.remove("hide")
      nextBtn2.classList.add("hide")
    }
    console.log(currentSection)
  }
});

nextBtn2.addEventListener("click", () => {
  if (currentSection < sections.length - 1) {
    currentSection++;
    showSection(currentSection);
    if(currentSection === 1) {
      nextBtn.classList.remove("hide")
      previousBtn.classList.remove("hide")
      nextBtn2.style.display = 'none'
    }
    console.log(currentSection)
  }
});

previousBtn.addEventListener("click", () => {
  if (currentSection > 0) {
    currentSection--;
    showSection(currentSection);
  }if(currentSection === 0){
    nextBtn2.style.display = ''
    nextBtn.classList.add("hide")
    previousBtn.classList.add("hide")
  }
});

showSection(currentSection);





function scrollToBottom() {
  var height = document.body.scrollHeight;
  window.scroll(0, height);
}

window.addEventListener("scroll", checkScroll);

function checkScroll() {
  const scrollIcon = document.querySelector(".scroll_to_bottom");
  var height = document.documentElement.scrollHeight;
  var current = window.scrollY + window.innerHeight;
  if (current >= height) {
    scrollIcon.classList.add("hide");
  } else {
    scrollIcon.classList.remove("hide");
  }
}







filterButtons.forEach((button) => button.addEventListener("click", filterCards));