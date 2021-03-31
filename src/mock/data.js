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
  resume: 'https://drive.google.com/file/d/1hovx5wP5SHD8VQ493U6MhhVdN3wCbw64/view?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
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
