import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jeremy Rice | Developer',
  lang: 'en',
  description: 'Welcome to my website',
};

// HEADER DATA
export const navbarData = {
  home: '',
  about: '',
  portfolio: '',
  contact: '',
};

// HERO DATA
export const heroData = {
  title: "I'm",
  name: 'Jeremy Rice.',
  subtitle:
    "I'm a Connecticut based full-stack web developer, educator and musician creating a wide variety of web applications. Start scrolling to learn more about me.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    "After being a teacher for fifteen years, I've decided to leave the world of public education and to pursue a career in web development. I have built this website to collect and display some examples of my work. I am currently attending the UCONN Coding Boot Camp: Full Stack Flex Program, and will complete the course in April 2021. In my spare time, I enjoy playing the guitar, drums, mandolin, and saxophone, and learning about science, history, technology, philosophy, and meditation.",
  resume:
    'https://docs.google.com/document/d/e/2PACX-1vQWSCQcBHQa67FSnjYtP125bmYE3FoMNh94nyk9WADhA_fg9O8HJXqMYG8zUGBMp0z6WBXwcPhDDBPN/pub',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(1),
    img: 'shopportal.png',
    title: 'ShopPortal',
    info:
      'An open source eCommerce platform powered by the MERN stack. It is designed to allow anyone to host their own online shop with ease.',
    info2: '',
    url: 'https://shopportal-lpx.herokuapp.com/shop',
    repo: 'https://github.com/jdavidrice/shop-portal',
  },
  {
    id: nanoid(2),
    img: 'bigmood.png',
    title: 'BigMood',
    info: 'The "BigMood" app gives users an easy way to track their mood throughout the day.',
    info2: '',
    url: 'https://bigmoodapp.herokuapp.com/',
    repo: 'https://github.com/jdavidrice/BigMood',
  },
  {
    id: nanoid(3),
    img: 'g-burger_app.png',
    title: 'Eat-Da-Burger!',
    info:
      'This is a "burger logger" app that is made with MySQL, Node, Express, Handlebars and a homemade ORM.',
    info2: '',
    url: 'https://warm-sea-12669.herokuapp.com/',
    repo: 'https://github.com/jdavidrice/burger',
  },
  {
    id: nanoid(4),
    img: 'query_cuisine.png',
    title: 'Query Cuisine',
    info:
      'A simple food app that allows users to search for recipes based on ingredients that they have on hand.',
    info2: '',
    url: 'https://jdavidrice.github.io/Query-Cuisine/',
    repo: 'https://github.com/jdavidrice/Query-Cuisine',
  },
  {
    id: nanoid(5),
    img: 'weather_dashboard.png',
    title: 'Weather Dashboard',
    info:
      'This app is a weather dashboard that will run in the browser and features dynamically updated HTML and CSS. It uses the OpenWeather API to retrieve weather data for cities.',
    info2: '',
    url: 'https://jdavidrice.github.io/Weather-Dashboard',
    repo: 'https://github.com/jdavidrice/Weather-Dashboard',
  },
  {
    id: nanoid(6),
    img: 'budget_app.png',
    title: 'Online-Offline Budget Tracker',
    info: 'A simple budget tracking app that uses IndexedDB for offline use.',
    info2: '',
    url: 'https://best-budget-tracker-app.herokuapp.com',
    repo: 'https://github.com/jdavidrice/Online-Offline-Budget-Tracker',
  },
];

// CONTACT DATA
export const contactData = {
  cta: "If you are interested in working with me, please don't hesitate to get in touch.",
  btn: 'Email me',
  email: 'jdavidrice@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jeremy-rice-b67a531b4/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jdavidrice',
    },
    {
      id: nanoid(),
      name: 'coffee',
      url: 'https://www.buymeacoffee.com/jdavidrice',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
