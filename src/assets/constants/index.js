import countryApplication from "./projects/CountryApplication.png"
import hangman from "./projects/Hangman.png"
import menulist from "./projects/menulist.png"
import VibrantUI from "./projects/VibrantUI.png"


export const HERO_CONTENT = [
  {
    name: "Oussama Ajala",
    role: "Front-end Developer"
  }
];

export const ABOUT_TEXT = `I’m an Information Systems and Technology major and a Data Science minor student at Catawba College. Fully committed to the philosophy of life-long learning, I’m a front-end developer with a deep passion for JavaScript, React, and all things web development. The unique combination of creativity, logic, technology, and never running out of new things to discover drives my excitement and passion for web development. When not at my computer, you can find me training as a student-athlete in the NCAA.`;


export const PROJECTS = [
  {
    title: "Assembly: Endgame",
    image: hangman,
    live: "https://hangmantech.netlify.app/",
    source: "https://github.com/mlgknight/Hangman-Tech-Edition",
    description:
      'Assembly: Endgame is a React-based word-guessing game that challenges players to guess a random word within limited attempts. Key features include dynamic word generation, an interactive keyboard, and a list of programming languages representing "lives". The game provides real-time feedback, celebrates wins with confetti animations, and ensures accessibility with ARIA attributes. It showcases my skills in React, state management, dynamic rendering, and creating engaging, accessible user experiences.',
    technologies: ["HTML", "CSS", "Javascript", "React"],
  },
  {
    title: "World Search Application",
    image: countryApplication,
    live: "https://worldsearchh.netlify.app/",
    source: "https://github.com/mlgknight/Country-Application/tree/main",
    description:
      'This is an application to explore countries around the globe using React for a dynamic user experience. Real-time weather updates are from the OpenWeatherAPI, and comprehensive country details are provided by the REST Countries API. React Router ensures smooth navigation throughout the app.',
    technologies: ["HTML", "CSS", "Javascript", "React", "React Router"],
  },
  {
    title: "VibrantUI",
    image: VibrantUI,
    live: "https://vibrantui.netlify.app/",
    source: "https://github.com/mlgknight/React-components-library",
    description:
      "VibrantUI a reusable React Component Library using React, featuring customizable, mobile-friendly UI components like cards, badges, tooltips, toasts, banners, and testimonials. Ensured type safety with TypeScript.",
    technologies: ["HTML", "CSS", "Typescript", "React"],
  },
  {
    title: "Menu App",
    image: menulist,
    live: "https://mmenuitem.netlify.app/dist/index.html",
    source: "https://github.com/mlgknight/tailwind-diner.github.io",
    description:
      "Menu App: Crafted with Tailwind CSS and Daisy UI for a polished interface, it lets users order food and enter payment details seamlessly. Plus, with its dark-to-light theme toggle that persists even after refreshing the page, it’s as user-friendly as it gets. I made this to work on my ability to add a theme change and use Tailwind in my applications.",
    technologies: ["HTML", "CSS", "Javascript", "Tailwind"],
  },
];

export const CONTACT = {
  address: "Charlotte, NC",
  phoneNo: "980-251-2739",
  email: "ajala1713@gmail.com",
};
