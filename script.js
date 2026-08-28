// Smooth reveal animation

const revealElements = document.querySelectorAll(
  ".section, .project-card, .skill-card, .certificate-card, .experience-card"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.08
  }
);


// Apply initial animation state

revealElements.forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(30px)";
  element.style.transition =
    "opacity 0.7s ease, transform 0.7s ease";

  observer.observe(element);
});


// Navbar active section indicator

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let currentSection = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop;

    if (window.scrollY >= sectionTop - 200) {
      currentSection = section.getAttribute("id");
    }

  });


  navLinks.forEach((link) => {

    link.style.color = "";

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.style.color = "#ffffff";
    }

  });

});


// Telemetry status effect

const liveStatus = document.querySelector(".live");

setInterval(() => {

  if (liveStatus.style.opacity === "0.4") {
    liveStatus.style.opacity = "1";
  } else {
    liveStatus.style.opacity = "0.4";
  }

}, 800);
