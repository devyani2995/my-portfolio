// /*========= smooth scroll =========*/
// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  // Select all anchor links with a hash in the href attribute
  const navLinks = document.querySelectorAll("a[href^='#']");

  navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
      // Prevent the default anchor behavior
      event.preventDefault();

      // Get the target section from the href attribute
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Scroll smoothly to the target section
        targetElement.scrollIntoView({
          behavior: "smooth", // Smooth scroll
          block: "start" // Align to the top of the section
        });
      }
    });
  });
});

/*========= Project Data =========*/
const data = [
  {
    id: 1,
    title: "Habit Tracker App",
    img: "./image/habit-tracker.png",
    link:"https://github.com/devyani2995/codingninja-habit-tracker-app",
    desc: "Habit tracker is a web application that allows to track multiple habits on a daily basis.The application provides views to show all current habits, as well as a weekly view to display the status of 7 days of each habit."
  },
  {
    id: 2,
    title: "Superhero Hunter App",
    img: "./image/superhero-hunter.png",
    link:"https://github.com/devyani2995/Codingninjas_Superhero_Hunter_app",
    desc: "Superhero Hunter app is a web application where we can see the lists of all superhero characters .This Superhero hunter application is built to search for any superhero and to add these superheroes to favourite list."
  },
  {
    id: 3,
    title: "Todo List App",
    img: "./image/todo-list.png",
    link:"https://github.com/devyani2995/codingninja-todolist-app",
    desc: "Simple todo app built with the React framework.It display the list of all Todo items.Also a user can add a new task,update and delete a particular task."
  },
  {
    id: 4,
    title: "NodeJS Auth",
    img: "./image/nodejs-auth.png",
    link:"https://github.com/devyani2995/Codingninjas-NodeJS-Auth",
    desc: "NodeJS-Auth is a simple authentication system built with Node.js. It provides user registration, login, authentication and reset password functionalities"
  },
  {
    id: 5,
    title: "Inventory Management App",
    img: "./image/inventory.png",
    link:"https://github.com/devyani2995/Inventory_Management",
    desc: "Inventory Management application is built using Node.js,Express, and EJS.The application allows users to manage products, including adding, updating, and deleting products. It also includes user authentication and session management."
  },
  {
    id: 6,
    title: "BuyBusy",
    img: "./image/buybusy.png",
    link:"https://github.com/devyani2995/buybusy-Redux-app",
    desc: "It is an E-Commerce website that enables individuals to browse available items,add or remove them from their shopping cart, and complete the purchasing process.It is made by using Reactjs,Redux and react-router-dom."
  },
  {
    id: 7,
    title: "E-Learning App",
    img: "./image/e-learning.png",
    link:"https://github.com/devyani2995/E-Learning",
    desc: "E-Learning platform is built with ReactJS.Users can explore a wide range of courses, view detailed information about each course, and learn through structured chapters that include videos and other resources."
  },
  {
    id: 8,
    title: "ChatterUp App",
    img: "./image/chatterup.png",
    link:"https://github.com/devyani2995/ChatterUp_App",
    desc: "ChatterUp is a real-time chat application that allows users to connect, send messages, and view online users. The app uses Socket.IO for real-time communication and MongoDB for storing chat history."
  },
  {
    id: 9,
    title: "I-Pod App",
    img: "./image/ipod.png",
    link:"https://github.com/devyani2995/Codingninjas-Ipod-Project",
    desc: "This project is a web-based simulation of the classic iPod interface, built using React.js.Users can navigate through various options such as Music, Games, and Settings, just like on a real iPod."
  },
]

// Function to display projects
function displayProjects() {
  const projectsContainer = document.getElementById('portfolio-container');

  data.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('portfolio-image-container');
    projectElement.innerHTML = `
      <img src="${project.img}" alt="${project.title}"/>
        <div class="portfolio-details">
         <h3>${project.title}</h3>
         <p>${project.desc}</p>
         <div class="link-container">
          <a
             href="${project.link}"
             target="_blank"
             class="portfolio-link">Know More</a>
         </div>
        </div>
    `;
    projectsContainer.appendChild(projectElement);
  });
}

// Call the function to display projects
displayProjects();
