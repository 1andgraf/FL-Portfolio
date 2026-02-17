document.addEventListener("DOMContentLoaded", () => {
  const galleryContainer = document.getElementById("gallery-container");

  // 1. Generate Project Gallery Content
  const projects = [
    {
      title: "AI Assistant",
      tags: ["#python", "#ai"],
      img: "projectpics/aiassistant.png",
    },
    { title: "Discord Music Bot", tags: ["#python", "#discord"] },
    {
      title: "Messenger App",
      tags: ["#reactnative", "#firebase"],
      img: "projectpics/messengerapp.png",
    },
    {
      title: "SoundBoard",
      tags: ["#js", "#audio"],
      img: "projectpics/soundboard.png",
    },
    { title: "Browser", tags: ["#js", "#web"], img: "projectpics/browser.png" },
    {
      title: "Detection App",
      tags: ["#python", "#opencv"],
      img: "projectpics/detectionapp.png",
    },
    { title: "Jarvis", tags: ["#js", "#app"], img: "projectpics/jarvis.png" },
    { title: "Discord Bot", tags: ["#python", "#discord"] },
    {
      title: "Parser Bot",
      tags: ["#python", "#telegram"],
      img: "projectpics/parserbot.png",
    },
    {
      title: "TTS Bot",
      tags: ["#python", "#telegram"],
      img: "projectpics/ttsbot.png",
    },
    {
      title: "The Game of Life",
      tags: ["#reactnative", "#game"],
      img: "projectpics/thegameoflife.png",
    },
    {
      title: "Apple Watch GPT",
      tags: ["#swift", "#ai"],
      img: "projectpics/applewatchgpt.png",
    },
    {
      title: "Translator Extension",
      tags: ["#js", "#web"],
      img: "projectpics/translateextension.png",
    },
    { title: "WebChat", tags: ["#js", "#socketio"] },
    {
      title: "Web Messenger",
      tags: ["#react", "#socketio"],
      img: "projectpics/webmessenger.png",
    },
  ];

  if (galleryContainer) {
    projects.forEach((proj, index) => {
      const id = (index + 1).toString().padStart(2, "0");
      const frame = document.createElement("div");
      frame.className = "project-frame";

      frame.innerHTML = `
        <div class="project-marker">[PROJECT ${id}]</div>
        ${
          proj.img
            ? `<img src="${proj.img}" alt="${proj.title}" class="project-img" />`
            : '<div class="project-img-placeholder"></div>'
        }
        <div class="project-content">
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-tags">${proj.tags.join(" ")}</p>
        </div>
      `;
      galleryContainer.appendChild(frame);
    });
  }

  // 3. Techy Scroll Animations (Side Stripes & Coordinates)
  const stripeLeft = document.querySelector(".side-stripe-left");
  const stripeRight = document.querySelector(".side-stripe-right");
  const coordDisplay = document.querySelector(".section-decorator-top");

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;

    // Sync stripes
    if (stripeLeft)
      stripeLeft.style.backgroundPositionY = -(scrolled * 1.5) + "px";
    if (stripeRight)
      stripeRight.style.backgroundPositionY = scrolled * 0.5 + "px";

    // Update coordinates
    if (coordDisplay) {
      const x = Math.floor(scrolled / 5);
      const y = Math.floor(scrolled / 2);
      coordDisplay.textContent = `COORD_${x}.${y}.${Math.floor(scrolled % 100)}`;
    }
  });

  // 4. Intersection Observer for Section Reveals
  const observerOptions = { threshold: 0.1 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".section-reveal").forEach((section) => {
    observer.observe(section);
  });
});

// Smooth Scroll Function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 70;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}
