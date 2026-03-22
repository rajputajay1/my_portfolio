import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,

  
} from "../assets";

import reelroster from "../assets/reelroster.png";
import iwood from "../assets/iwood.png";
import pg from "../assets/pg.png";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Flutter",
    icon: docker,
  },
];

const experiences = [
   {
    title: "Full Stack Developer",
    company_name: "KayJay Global Solutions Pvt. Ltd",
    icon: starbucks,
    iconBg: "#383E56",
    date: "April 2025 - Present",
    points: [
      "Built a scalable Election Management System supporting 40K+ users, implementing secure authentication and optimized APIs to ensure high performance and reliability.",
      "Designed and integrated RESTful APIs and backend logic using Node.js, improving data processing efficiency and reducing response time.",
      "Integrated secure payment gateways (Stripe, Razorpay), ensuring reliable transactions and seamless checkout experience.",
      "Implemented Supabase for authentication and database management, enabling secure access control and real-time data handling."
  
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "NTPL",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2024 - March 2025",
    points: [
      "Developed cross-platform mobile applications using Flutter,ensuring smooth performance across Android and iOS.",
      "Built responsive and dynamic web applications using React.js, improving user experience and interface consistency.",
      "Designed and integrated RESTful APIs using Node.js, enabling efficient data communication between frontend and backend",
      "Optimized application performance by improving state management and reducing load time, enhancing overall user experience.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Marketing Amplify Lab Agency",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - March 2024",
    points: [
      "Spearheaded the Front-end development of Marketing Amplify, the company’s flagship product using React.js, focusing on modular and reusable components to enhance maintainability and scalability",
      "Optimized application performance by implementing best practices such as code splitting, lazy loading, and state management with Redux, resulting in significant improvements in load times.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  // {
  //   title: "Flutter Intern",
  //   company_name: "PiZone Infotech Solution Limited",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "October 2022 - Jan 2023",
  //   points: [
  //     "Played a pivotal role in the development of real-life projects leveraging Flutter framework, contributing to the end-to-end development lifecycle",
  //     "Demonstrated expertise in API integration, ensuring seamless communication between the frontend and backend systems",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ReelRoster",
    description:
      "Enhanced the Movies web app by adding advanced search, dynamic pagination, and real-time API integration, along with skeleton loading states for smooth data transitions, resulting in a faster, more responsive, and user-friendly experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
     
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: reelroster,
    source_code_link: "https://boisterous-sunshine-25c834.netlify.app/",
    project_link: "https://boisterous-sunshine-25c834.netlify.app/"
  },
  {
    name: "Iwood",
    description:
      "Designed an interactive event-driven platform where influencers showcase products through live sessions and events, implemented skeleton loaders to improve experience during API latency, and integrated REST APIs for dynamic product data.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
     
    ],
    image: iwood,
    source_code_link: "https://iwood.in/",
      project_link: "https://iwood.in/"

  },
  {
    name: "StaySmart",
    description:
      "Developed a SaaS-based PG Management System with Super Admin and Owner dashboards for student, staff, and rent management. Integrated subscription plans, secure authentication, and automated email notifications for seamless operations.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Supabase",
        color: "blue-text-gradient",
      }
   
    ],
    image: pg,
    source_code_link: "https://mansion-muse-hub.vercel.app/",
        project_link: "https://mansion-muse-hub.vercel.app/"

  },
];

export { services, technologies, experiences, testimonials, projects };
