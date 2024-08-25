document.getElementById("menu-icon").addEventListener("click", function () {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.left === "0px") {
    sidebar.style.left = "-250px";
  } else {
    sidebar.style.left = "0px";
  }
});

window.onload = function () {
  document.getElementById("loader").style.display = "none";
};



// Optional JavaScript for handling file uploads or form submission
document.addEventListener("DOMContentLoaded", function () {
  // Form submission handling (if needed)
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const formData = new FormData(contactForm);

    // Send form data to Google Sheets
    fetch(contactForm.action, {
      method: "POST",
      body: formData, // Use FormData to handle file uploads
    })
      .then((response) => response.text())
      .then((result) => {
        alert("Thank you for your message!");
        contactForm.reset(); // Reset the form fields
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was a problem with your submission. Please try again.");
      });
  });
});

const projects = [
  {
    name: "My Shoe Store",
    description: "A brief description of the Java project.",
    image: "Project/1.PNG",
    tools: "HTML CSS JS",
    link: "https://link-to-project1.com",
    category: "web",
  },
  {
    name: "Robotic Arm",
    description: "A brief description of the Java project.",
    image: "Project/14.PNG",
    tools: "AutoCAD, Mechanical Drawing",
    link: "https://link-to-project1.com",
    category: "autocad",
  },
  {
    name: "HomeHelp",
    description: "A brief description of the Java project.",
    image: "Project/5.PNG",
    tools: "Java, SpringBoot, MySQL",
    link: "https://link-to-project1.com",
    category: "java",
  },
  {
    name: "PopCorn ",
    description: "A brief description of the Web project.",
    image: "Project/7.PNG",
    tools: "WebApp, MERN ",
    link: "https://link-to-project2.com",
    category: "react",
  },
  {
    name: "SV.Media",
    description: "A brief description of the Java project.",
    image: "Project/11.PNG",
    tools: "APIs, Wordpress",
    link: "https://link-to-project1.com",
    category: "web",
  },

  {
    name: "XERO",
    description: "A brief description of the React project.",
    image: "Project/13.PNG",
    tools: "ML, Databases, Webapp",
    link: "https://link-to-project3.com",
    category: "ai-ml",
  },
  {
    name: "SV.Resturant",
    description: "A brief description of the React project.",
    image: "Project/9.PNG",
    tools: "ML, Python. TailwindCSS",
    link: "https://link-to-project3.com",
    category: "python",
  },

  // Add more projects here
];

const projectContainer = document.getElementById("project-container");
const categoryButtons = document.querySelectorAll(".category-btn");
const scrollLeftBtn = document.getElementById("scroll-left");
const scrollRightBtn = document.getElementById("scroll-right");

function displayProjects(category) {
  projectContainer.innerHTML = "";
  const filteredProjects =
    category === "all"
      ? projects
      : projects.filter((project) => project.category === category);
  filteredProjects.forEach((project) => {
    const projectCard = `
          <div class="project-card">
              <img src="${project.image}" alt="${project.name}">
              <div class="card-content">
                  <h3>${project.name}</h3>
                  <p style="color:black;>${project.description}</p>
                  <p class="tools">Tools: ${project.tools}</p>
                  <a href="${project.link}" target="_blank">View Project</a>
              </div>
          </div>
      `;
    projectContainer.insertAdjacentHTML("beforeend", projectCard);
  });
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");
    displayProjects(category);
  });
});

scrollLeftBtn.addEventListener("click", () => {
  projectContainer.scrollBy({
    left: -300,
    behavior: "smooth",
  });
});

scrollRightBtn.addEventListener("click", () => {
  projectContainer.scrollBy({
    left: 300,
    behavior: "smooth",
  });
});

// Display all projects by default
displayProjects("all");












document.querySelector('.nav-toggle').addEventListener('click', function() {
  document.querySelector('#sidebar').classList.toggle('active');
  document.querySelector('#menu-icon').classList.toggle('active');
});



// document.addEventListener("DOMContentLoaded", () => {
//   const rocket = document.querySelector('.rocket');
//   rocket.classList.add('launching');
// });
document.addEventListener("DOMContentLoaded", () => {
  const rocket = document.querySelector('.rocket');
  rocket.addEventListener('click', () => {
      rocket.classList.add('launching');
  });
});
















