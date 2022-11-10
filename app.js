const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".all-content");


// Typing Animation
var intro = new Typed(".auto-typing", {
  strings: ["a sciencist", "an opticist", "a biologist", "a programmer"],
  typeSpeed: 80,
  backSpeed: 80,
  loop: true,
});

function isHere(){
  window.alert("Not Surprise! It is where you are now!");
}

//Pages Transition
function PageTransitions() {
  //Button click active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelector(".active-btn");
      currentBtn.classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
    });
  }

  //Section active class
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      //remove selected from the other btns
      sectBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      //hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
  
  // Toggle theme
  const themeBtn = document.querySelector(".theme-btn");
  themeBtn.addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("light");
  });
}

PageTransitions();

