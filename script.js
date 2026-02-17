document.addEventListener("DOMContentLoaded", () => {
  const galleryContainer = document.getElementById("gallery-container");

  const projects = [
    {
      title: "AI Assistant",
      tags: ["#python", "#ai"],
      img: "projectpics/aiassistant.png",
      link: "https://github.com/1andgraf/AI-Assistant",
    },
    {
      title: "Discord Music Bot",
      tags: ["#python", "#discord"],
      link: "https://github.com/1andgraf/discord-music-bot",
    },
    {
      title: "Messenger App",
      tags: ["#reactnative", "#firebase"],
      img: "projectpics/messengerapp.png",
      link: "https://github.com/1andgraf/FL-Messenger",
    },
    {
      title: "SoundBoard",
      tags: ["#js", "#audio"],
      img: "projectpics/soundboard.png",
      link: "https://github.com/1andgraf/SoundBoard",
    },
    {
      title: "Browser",
      tags: ["#js", "#web"],
      img: "projectpics/browser.png",
      link: "https://github.com/1andgraf/browser",
    },
    {
      title: "Detection App",
      tags: ["#python", "#opencv"],
      img: "projectpics/detectionapp.png",
      link: "https://github.com/1andgraf/detection-app",
    },
    {
      title: "Jarvis",
      tags: ["#js", "#app"],
      img: "projectpics/jarvis.png",
      link: "https://github.com/1andgraf/jarvis",
    },
    {
      title: "Discord Bot",
      tags: ["#python", "#discord"],
      link: "https://github.com/1andgraf/discord-bot",
    },
    {
      title: "Parser Bot",
      tags: ["#python", "#telegram"],
      img: "projectpics/parserbot.png",
      link: "https://github.com/1andgraf/parserbot",
    },
    {
      title: "TTS Bot",
      tags: ["#python", "#telegram"],
      img: "projectpics/ttsbot.png",
      link: "https://github.com/1andgraf/ttsbot",
    },
    {
      title: "The Game of Life",
      tags: ["#reactnative", "#game"],
      img: "projectpics/thegameoflife.png",
      link: "https://github.com/1andgraf/thegameoflife",
    },
    {
      title: "Apple Watch GPT",
      tags: ["#swift", "#ai"],
      img: "projectpics/applewatchgpt.png",
      link: "https://github.com/1andgraf/applewatchgpt",
    },
    {
      title: "Translator Extension",
      tags: ["#js", "#web"],
      img: "projectpics/translateextension.png",
      link: "https://github.com/1andgraf/translateextension",
    },
    {
      title: "WebChat",
      tags: ["#js", "#socketio"],
      link: "https://github.com/1andgraf/webchat",
    },
    {
      title: "Web Messenger",
      tags: ["#react", "#socketio"],
      img: "projectpics/webmessenger.png",
      link: "https://github.com/1andgraf/messenger",
    },
  ];

  if (galleryContainer) {
    projects.forEach((proj, index) => {
      const id = (index + 1).toString().padStart(2, "0");
      const frame = document.createElement("a");
      frame.className = "project-frame";
      frame.href = proj.link;
      frame.target = "_blank";

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

  const stripeLeft = document.querySelector(".side-stripe-left");
  const stripeRight = document.querySelector(".side-stripe-right");
  const coordDisplay = document.querySelector(".section-decorator-top");

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;

    if (stripeLeft)
      stripeLeft.style.backgroundPositionY = -(scrolled * 1.5) + "px";
    if (stripeRight)
      stripeRight.style.backgroundPositionY = scrolled * 0.5 + "px";

    if (coordDisplay) {
      const x = Math.floor(scrolled / 5);
      const y = Math.floor(scrolled / 2);
      coordDisplay.textContent = `COORD_${x}.${y}.${Math.floor(scrolled % 100)}`;
    }
  });

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
