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
  title: "Hello, I'm",
  name: 'Jeremy Rice.',
  subtitle:
    "I'm a Connecticut based full-stack web developer, educator and musician creating a wide variety of web applications. Start scrolling to learn more about me.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    "After being a teacher for fifteen years, I've decided to leave the world of public education and to pursue a career in web development. I have built this website to collect and display some examples of my work. I recently completed the UCONN Coding Boot Camp: Full Stack Flex Program, where I learned the fundamentals of working with MERN stack web applications.",
  paragraphTwo:
    'The projects that I have created so far use HTML, CSS, and JavaScript, as well as Node, React, Handlebars, Express, MongoDB, MySQL, and Firebase. I have some experience working with Materialize and Material UI, and I just started using Tailwind CSS. My React portfolio uses Gatsby, GraphQL, and Sass. I am focused on improving my React skills at this time, but plan on using Vue and Ember in the near future. I am looking to work on projects that will challenge me to utilize a variety of modern frameworks and technologies, so that I can continue to develop my skills as a developer. Eventually, I would like to incorporate my experience in education with my technology skills to teach others about web development.',
  resume:
    'https://docs.google.com/document/d/e/2PACX-1vQWSCQcBHQa67FSnjYtP125bmYE3FoMNh94nyk9WADhA_fg9O8HJXqMYG8zUGBMp0z6WBXwcPhDDBPN/pub',
  certificate: 'https://drive.google.com/file/d/1aiFHvkpvjFGUhdm8XkJ1-vj-BWaBt515/view?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(1),
    img: 'instaclone.png',
    title: 'Instaclone',
    info:
      'An Instagram clone that uses React, Firebase, LoadTest, Vercel, React Testing Library, Cypress E2E Testing, and Tailwind CSS.',
    info2: '',
    url: 'https://instaclone-jdavidrice.vercel.app/login',
    repo: 'https://github.com/jdavidrice/instaclone',
  },
  {
    id: nanoid(3),
    img: 'bigmood.png',
    title: 'BigMood',
    info: 'The "BigMood" app gives users an easy way to track their mood throughout the day.',
    info2: 'Made with bcryptjs, express-handlebars, mysql2, passport, and sequelize.',
    url: 'https://bigmoodapp.herokuapp.com/',
    repo: 'https://github.com/jdavidrice/BigMood',
  },
  {
    id: nanoid(4),
    img: 'g-burger_app.png',
    title: 'Eat-Da-Burger!',
    info:
      'This is a "burger logger" app that is made with express-handlebars, mysql, node, passport, and a homemade ORM.',
    info2: '',
    url: 'https://warm-sea-12669.herokuapp.com/',
    repo: 'https://github.com/jdavidrice/burger',
  },
  {
    id: nanoid(5),
    img: 'query_cuisine.png',
    title: 'Query Cuisine',
    info:
      'A simple food app that allows users to search for recipes based on ingredients that they have on hand.',
    info2: 'Made with jQuery and the Spoonacular recipe and food API.',
    url: 'https://jdavidrice.github.io/Query-Cuisine/',
    repo: 'https://github.com/jdavidrice/Query-Cuisine',
  },
  {
    id: nanoid(6),
    img: 'weather_dashboard.png',
    title: 'Weather Dashboard',
    info:
      'This app is a weather dashboard that will run in the browser and features dynamically updated HTML and CSS. It uses the OpenWeather API to retrieve weather data for cities.',
    info2: '',
    url: 'https://jdavidrice.github.io/Weather-Dashboard',
    repo: 'https://github.com/jdavidrice/Weather-Dashboard',
  },
  // {
  //   id: nanoid(),
  //   img: 'budget_app.png',
  //   title: 'Online-Offline Budget Tracker',
  //   info: 'A simple budget tracking app that uses IndexedDB for offline use.',
  //   info2: '',
  //   url: 'https://best-budget-tracker-app.herokuapp.com',
  //   repo: 'https://github.com/jdavidrice/Online-Offline-Budget-Tracker',
  // },
];

// CONTACT DATA
export const contactData = {
  cta: "If you are interested in working with me, please don't hesitate to get in touch.",
  btn: 'jdavidrice@gmail.com',
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
