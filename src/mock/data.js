import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Welcome, I am',
  name: 'Nnamani Ezinne Martina',
  subtitle: 'I am a Software Engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile_picture.jpeg',
  paragraphOne: 'I am a softwre Engineer. I have years of experience in bulding responsive web applications.',
  paragraphTwo: 'I have great knowledge in devloping REST APIs using Node.js.',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1gOpjyZDjKIeLrIp6MwVt9RDuXbFAq_5Q/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'zinny-blog-webpage.png',
    title: 'Blog Webpage',
    info: 'A fully responsive webpage that is fully compatible with any device.',
    info2: 'It has intrestimg articles that engages the users.',
    url: 'https://zinny-blog-webpage.netlify.app/',
    repo: 'https://github.com/Ezinnem/Blog_webpage', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'zeeChat.png',
    title: 'ZeeChat App',
    info: 'A basic chat application with WebRTC.',
    info2: 'It allows users to chat and hold video calls',
    url: 'https://zinnychat.herokuapp.com/',
    repo: 'https://github.com/Ezinnem/zeeChat', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'zinny_webpage.png',
    title: 'Webpage',
    info: 'A customer webpage',
    info2: 'A fully responsive webapge that fits into all device sizes.',
    url: 'https://gritty-webpage.netlify.app',
    repo: 'https://github.com/Ezinnem/Gritty-Webpage', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Send a mail',
  email: 'nnamani.ezinne@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/ZinnyCodes',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nnamaniezinne/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Ezinnem',
    },
  ],
};

