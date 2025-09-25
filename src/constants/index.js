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
  freelance,
  shopify,
  sheryians,
  macbookpro,
  falverra,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "experience",
  },

  {
    id: "skills",
    title: "skills",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  { title: 'BSc 2nd Year Student', icon: creator },
  { title: 'Programmer', icon: backend },
  { title: 'Python (Completed Course)', icon: mobile },
];

const technologies = [
  { name: 'Python', icon: javascript },
  { name: 'Django', icon: web },
  { name: 'JavaScript', icon: javascript },
  { name: 'HTML/CSS', icon: html },
  { name: 'SQLite', icon: mongodb },
];

const experiences = [
  {
    title: "Freelance Frontend Developer",
    company_name: "Self-employed",
    icon: freelance, // Replace with any icon you like
    iconBg: "#0188E3",
    date: "Jan 2023 - Present",
    points: [
      "Built responsive and interactive web apps using React.js, Tailwind CSS, and GSAP.",
      "Developed and deployed modern landing pages and portfolio websites for clients.",
      "Integrated APIs and handled form validation, animations, and smooth scroll effects.",
      "Delivered pixel-perfect UI designs based on Figma and Adobe XD mockups.",
    ],
  },
  {
    title: "Full Stack Development Trainee",
    company_name: "Sheryians Coding School",
    icon: sheryians, // Or institute logo
    iconBg: "#ffff",
    date: "Aug 2023 - Mar 2025",
    points: [
      "Completed an intensive training program focused on MERN stack development.",
      "Built multiple full-stack projects, including CRUD apps and authentication systems.",
      "Worked with tools like Node.js, Express.js, MongoDB, React.js, and Git.",
      "Gained hands-on experience in deploying apps and following clean code practices.",
    ],
  },
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
    name: "Elévé",
    description:
      "A fitness and nutrition tracker web application built with Django. Elévé helps users monitor their fitness goals and manage nutrition effectively, combining a clean interface with robust backend functionality.",
    tags: [
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "sqlite",
        color: "pink-text-gradient",
      },
    ],
    image: web, // Placeholder, update with project image if available
    source_code_link: "https://github.com/ARJUN-SYS96/eleve", // Update if different
    live_website_link: "", // Add live link if hosted
  },
  {
    name: "MacBookPro-redesign",
    description:
      "A visually engaging website that showcases a redesigned MacBook Pro with smooth animations and a realistic 3D model, offering users an interactive and immersive way to explore the product’s look and features.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: macbookpro,
    source_code_link: "https://github.com/gitswastik08/macbook_landingpage",
    live_website_link: "https://macbookpro3d.netlify.app/",
  },
  {
    name: "Falverra Redesign",
    description:
      "A sleek and animated website redesign for Falverra, combining a clean layout with smooth transitions to deliver an engaging, modern browsing experience that highlights the brand’s visual identity and message.",
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
        name: "multi-page",
        color: "green-text-gradient",
      },
    ],
    image: falverra,
    source_code_link: "https://github.com/gitswastik08/falverra-redesign",
    live_website_link: "https://falverra-recode.netlify.app/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    // github link ⬇️
    source_code_link: "https://github.com/",
    // project link ⬇️
    live_website_link: "https://app.netlify.com/teams/gitswastik08/projects",
  },
];

export { services, technologies, experiences, testimonials, projects };
