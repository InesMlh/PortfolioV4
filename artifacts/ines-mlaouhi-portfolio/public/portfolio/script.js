const filterButtons = document.querySelectorAll(".filters button");
const nextBtn = document.querySelector(".next"); // or getElementsByClassName("next")[0]
const previousBtn = document.querySelector(".previous"); // or getElementsByClassName("previous")[0]
const cards = document.querySelectorAll(".box_container .box");
const emailBtn = document.getElementById("emailBtn");
const sections = document.querySelectorAll(".projects_container .box_container");

const filterCards = (e) => {
  document.querySelector(".active_button").classList.remove("active_button");
  e.target.classList.add("active_button");

  cards.forEach((card) => {
    card.classList.add("hide");
    if (card.dataset.name === e.target.dataset.name) {
      card.classList.remove("hide");
    }

    if (e.target.dataset.name === "all") {
      if (!card.classList.contains("hide1")) {
        card.classList.remove("hide");
        showSection(currentSection);
      }
    }
    if (e.target.dataset.name !== "all") {
        sections.forEach((section, i) => {
              section.classList.remove("hide");
          })
    }
  });
};

filterButtons.forEach((button) => button.addEventListener("click", filterCards));

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

emailBtn.addEventListener("click", function () {
  window.location.href = "mailto:ines.mlaouhi.pro@gmail.com";
});
