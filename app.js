// Elements
const header = document.querySelector("header");
const nav = document.querySelector(".navbar");
const linksContainer = document.querySelector(".links");
const links = document.querySelectorAll(".link");
const toggleBtn = document.querySelector(".toggle");
const app = document.getElementById("app");
const projectsContainer = document.querySelector(".projects");
const content = document.querySelector(".content");

// Projects
const projects = [
  {
    title: "POS-System",
    description:
    "SK Shopping is an e-commerce website which is a grocery store website offering all types of products from food to cosmetics to daily necessities.",
    image: "E:/my All Project/My-Portfolio/img/POS.png",
    tools: "html, Tailwind css, js, React, Vite",
    liveLink: "https://pos-system-582d.vercel.app/",
    githubLink: "https://github.com/wafid19/POS-System",
  },
  {
    title: "SKShopping - It is a E-Commerce Website",
    description:
      "SK Shopping is an e-commerce website which is a grocery store website offering all types of products from food to cosmetics to daily necessities.",
    image: "E:/my All Project/My-Portfolio/img/SKShopping2.png",
    tools: "html, Tailwind Css, js, React, Vite",
    liveLink: "https://skshopping.netlify.app/",
    githubLink: "https://github.com/wafid19/SK-Shopping",
  },
  {
    title: "SK-Shopping Dashbord",
    description:
      "SK Shopping is an e-commerce website which is a grocery store website offering all types of products from food to cosmetics to daily necessities.",
    image: "E:/my All Project/My-Portfolio/img/Dashbord.png",
    tools: "html, css, Tailwind Css,  js, React, Vite",
    liveLink: "https://sw-dashbord.netlify.app/",
    githubLink: "https://github.com/wafid19/SW_Dashbord",
  },
];

// Application architechture
class App {
  constructor() {
    this._stickyNavbar();
    this._activeLinks();
    this._toggleMobileNav();
    this._tagCloud();
    this._typeWriter();
    this._renderProjects();
  }

  // Sticky navbar
  _stickyNavbar() {
    const navHeight = nav.getBoundingClientRect().height;

    const navObs = new IntersectionObserver(this._stickOperation, {
      root: null,
      threshold: 0,
      rootMargin: `-${navHeight}px`,
    });

    navObs.observe(header);
  }

  _stickOperation(entries) {
    const entry = entries[0];
    if (!entry.isIntersecting) header.classList.add("sticky");
    else header.classList.remove("sticky");
  }

  // Link activate
  _activeLinks() {
    links.forEach((link) =>
      link.addEventListener("click", (e) => {
        const link = e.target;
        const siblings = link.closest(".links").querySelectorAll(".link");

        siblings.forEach((sibling) => {
          if (sibling === link) sibling.style.color = "rgb(20, 184, 166)";
          else sibling.style.color = "rgb(209, 213, 219)";
        });
      })
    );
  }

  // Toggle mobile navbar
  _toggleMobileNav() {
    toggleBtn.addEventListener("click", () => {
      toggleBtn.classList.contains("toggle-close")
        ? this._disappearMobileNav()
        : this._appearMobileNav();
    });
  }

  _disappearMobileNav() {
    toggleBtn.classList.remove("toggle-close");
    linksContainer.style.animation = "mobileNavDisappear 0.55s 1";
    setTimeout(() => {
      linksContainer.classList.remove("links-open");
    }, 500);
    document.querySelector("html").style.overflow = "visible";
  }

  _appearMobileNav() {
    toggleBtn.classList.add("toggle-close");
    linksContainer.classList.add("links-open");
    linksContainer.style.animation = "mobileNavAppear 0.5s 1";
    document.querySelector("html").style.overflow = "hidden";
  }

  _tagCloud() {
    const tags = [
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
      "Git",
      "GitHub",
      "JavaScript",
      "AJAX",
      "THREE.js",
      "GSAP",
      "GIS",
      "React.js",
      "Vue.js",
      "React Router",
      "Redux",
      "Next.js",
      "Node.js",
      "MongoDB",
      "MySQL",
    ];

    TagCloud(".content", tags, {
      radius: 380,
      maxSpeed: "fast",
      initSpeed: "normal",
      direction: 135,
      keep: true,
    });
  }

  _typeWriter() {
    const typeWriter = new Typewriter(app, {
      loop: true,
    });

    typeWriter
      .typeString("Web developer")
      .pauseFor(2000)
      .deleteChars(7)
      .typeString("signer")
      .pauseFor(2000)
      .start();
  }

  // Projects rendering
  _renderProjects() {
    projects.forEach((project) => {
      const html = `
        <div class="project">
          <div class="project-img">
            <img 
              src="${project.image}"
              alt="Photo of ${project.title}"
            />
          </div>
          <h3 class="project-title">
          ${project.title}
          </h3>
          <p class="project-details">
            ${project.description}
          </p>
          <p class="project-tools">
            Tools: <span>${project.tools}</span>
          </p>
          <div class="project-btns">
            <a href="${project.liveLink}" target="_blank"
              >Live Site &rarr;</a
            >
            <a
              href="${project.githubLink}"
              target="_blank"
              >GitHub &rarr;</a
            >
          </div>
        </div>
    `;

      projectsContainer.insertAdjacentHTML("afterbegin", html);
    });
  }
}

const myApp = new App();