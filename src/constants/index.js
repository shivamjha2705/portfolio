import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  github,
  sql,
  figma,
  bootstrap,
  bit_logo,
  techavtar,
  carvaan,
  neighborhue,
  rennovation,
  snapshare,
  netflix,
  weatherApp,
  investo,
  suicideAnalysis,
  threejs,
  python,
  testimonial_1,
  testimonial_2,
  testimonial_3
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
    iconClass: "fa-solid fa-user-tie"
  },
  {
    id: "work",
    title: "Work",
    iconClass: "fa-solid fa-laptop-file"
  },
  {
    id: "project",
    title: "Projects",
    iconClass: "fa-solid fa-house-laptop"
  },
  {
    id: "contact",
    title: "Contact",
    iconClass: "fa-solid fa-address-card"
  },
];

const services = [
  {
    title: "Software Developer",
    icon: creator,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "UI-UX Designer",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: web,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Bootstrap 5",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "BIT Mesra (RnD Department)",
    company_link: "https://www.bitmesra.ac.in/Show_Other_Department?cid=1&deptid=202",
    icon: bit_logo,
    iconBg: "#383E56",
    date: "June 2023 - August 2023",
    points: [
      "Designed and developed a responsive website for the institute’s research, innovation, and entrepreneurship initiatives",
      "Led a high-performing frontend development team of 4, utilizing <span class='font-extrabold text-amber-200'>HTML</span> , <span class='font-extrabold text-amber-200'>CSS</span> , <span class='font-extrabold text-amber-200'>Bootstrap</span> , and <span class='font-extrabold text-amber-200'>React JS</span>",
      "Successfully optimized the website's performance, achieving a notable <span class='font-extrabold text-amber-200'> 30%</span> decrease in page load time",
      "Collaborated on backend support, aiding integration and resolving queries",
    ],
  },
  {
    title: "Softwatre Developer Intern",
    company_name: "Techavtar",
    company_link: "https://techavtar.com/",
    icon: techavtar,
    iconBg: "#dcd8d8",
    date: "Jan 2024 - May 2024",
    points: [
      "Use React to integrate <span class='font-extrabold text-amber-200'>API data fetching</span> , <span class='font-extrabold text-amber-200'>Google authentication</span> , and <span class='font-extrabold text-amber-200'>payment gateway integration</span> , while ensuring UI responsiveness and scalability using <span class='font-extrabold text-amber-200'>Bootstrap 5</span> and <span class='font-extrabold text-amber-200'>Swiper JS</span> carousel integration",
      "Use <span class='font-extrabold text-amber-200'>Redux</span> for efficient state management, implemented <span class='font-extrabold text-amber-200'>MVC</span> structure for enhanced code maintainability, and optimized user experience through the creation of reusable components and search filters",
      "Developed a <span class='font-extrabold text-amber-200'>Google add-on</span> to generate email replies as drafts using <span class='font-extrabold text-amber-200'>OpenAI API</span>, offering varied reply tones for effective communication, enhancing user interaction and productivity.",

    ],
  },

  {
    title: "Softwatre Developer Engineer - Frontend",
    company_name: "Techavtar",
    company_link: "https://techavtar.com/",
    icon: techavtar,
    iconBg: "#dcd8d8",
    date: "May 2024 - May 2025",
    points: [
      "Developed and deployed 3 advanced <span class='font-extrabold text-amber-200'>admin dashboards</span> using <span class='font-extrabold text-amber-200'>Next.js</span> and <span class='font-extrabold text-amber-200'>TypeScript</span> featuring real-time <span class='font-extrabold text-amber-200'>KPIs, dynamic charts</span>, and filterable tables using libraries like Chart.JS and React Table.",
      "Delivered <span class='font-extrabold text-amber-200'>10+ responsive web applications</span> with optimized performance and accessibility.",
      "Supervised 3 frontend projects, <span class='font-extrabold text-amber-200'>mentoring interns</span> and reviewing code for quality assurance.",
      "Integrated <span class='font-extrabold text-amber-200'>150+ APIs using Axios</span> to improve modularity and simplify workflows.",
      "Reduced unnecessary re-renders by 50% through <span class='font-extrabold text-amber-200'>Redux Toolkit</span> and enforced form validation using Zod Schema, <span class='font-extrabold text-amber-200'>cutting invalid entries by 85%</span>.",
      "Deployed a new search indexing strategy that prioritized frequently accessed data, resulting in a 40% reduction in ‘no results found’ errors and improved user satisfaction scores.",
      "Accelerated <span class='font-extrabold text-amber-200'>page load speed by 40% </span> with script splitting, lazy loading, and manually tested 200+ features, maintaining 90% bug-free delivery.",

    ],
  },


];

const testimonials = [
  {
    testimonial:
      "Shivam Kumar led the frontend team to create an outstanding website that perfectly matched our innovative research goals.I wish him great success for his future endeavors.",
    name: "Dr. C. Jeganathan",
    designation: "Dean of RIE",
    company: "BIT Mesra",
    image: testimonial_1,
  },
  {
    testimonial:
      "Shivam Kumar played a vital role in the frontend development, consistently meeting deadlines and contributing significantly to our project's success.Good luck in all his future pursuits.",
    name: "Arya Kishore",
    designation: "Product Manager",
    company: "Techavtar",
    image: testimonial_2,
  },
  {
    testimonial:
      "Shivam impressed us with his exceptional skills and dedication as a Software Developer Intern, successfully delivering innovative software projects. Wishing him great success in his future",
    name: "Shivam Kumar",
    designation: "CEO & CTO",
    company: "Techavtar",
    image: testimonial_3,
  },
];
const projects = [
  {
    id: "1",
    name: "Carvaan",
    description:
      `Carvaan is a comprehensive travel booking platform designed to enhance the overall experience for both travelers and travel businesses. It allows users to explore a wide variety of destinations, complete with detailed information, images, and real-time availability. The platform supports user authentication via secure OTP verification and Google login, providing a smooth and trustworthy login experience. Users can create a personalized wishlist to save their favorite destinations and easily access them later. The site features intuitive navigation and responsive design, ensuring seamless usability across devices including mobiles, tablets, and desktops.

      On the business side, Carvaan offers travel service providers the ability to showcase their packages, promotions, and real-time availability, fostering a dynamic marketplace for travel deals. The platform integrates real-time data updates to reflect the latest offers and availability, helping users make timely and informed booking decisions. To enhance user engagement, Carvaan also includes interactive UI elements such as search filters, sorting options, and dynamic content loading. The project was built using React for frontend interactivity and Tailwind CSS for modern, utility-first styling that guarantees responsiveness and aesthetic consistency.

      This project embodies my passion for combining technology and travel, delivering a digital experience that is both practical and delightful. The clean architecture and modular design make Carvaan scalable and maintainable for future feature expansions or integrations`,
    whatIDid: "Designed and developed the complete frontend UI using React and Tailwind CSS. Implemented authentication (OTP + Google login), interactive wishlist feature, and responsive navigation. Optimized performance and layout for mobile and desktop browsers.",
    myRole: "Full-stack Developer (focused on frontend integration and UI/UX).",
    tags: [
      { name: "ReactJs", color: "violet-text-gradient" },
      { name: "Tailwind CSS", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" }
    ],
    image: carvaan,
    type: "Web",
    livePreview: "https://carvaan.co"
  },
  {
    id: "2",
    name: "Neighborhue",
    description:
      "Neighborhue is a smart neighborhood recommendation platform that uses Hue AI to help users discover ideal places to live based on lifestyle, preferences, and location. It features a blog, pricing plans, contact form, and seamless Google Ads integration, wrapped in a fully responsive interface.",
    whatIDid: "Created all frontend components with reusable and responsive design. Integrated dynamic content and form handling. Managed state and route control using React Router. Implemented SEO optimization for Google Ads.",
    myRole: "Frontend Developer (UI/UX and ad integration).",
    tags: [
      { name: "React.js", color: "violet-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
      { name: "JavaScript", color: "yellow-text-gradient" },
      { name: "Google Ads", color: "blue-text-gradient" },
      { name: "Responsive Design", color: "orange-text-gradient" }
    ],
    image: neighborhue,
    note: "API is not active, so not able to chat in realtime with the AI",
    type: "Web",
    livePreview: "https://test0n.netlify.app"
  },
  {
    id: "3",
    name: "Portrait Renovations",
    description:
      "A modern landing page template designed specifically for renovation businesses, showcasing services, testimonials, and lead generation features. The layout adapts beautifully to any screen size, offering professional and clean UI.",
    whatIDid: "Designed the entire layout with clean HTML/CSS. Built responsive sections such as services, client testimonials, and CTA forms for lead capture. Ensured consistent styling across devices.",
    myRole: "Frontend Developer and UI Designer.",
    tags: [
      { name: "HTML", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
      { name: "UI Design", color: "blue-text-gradient" },
      { name: "Responsive Design", color: "orange-text-gradient" }
    ],
    image: rennovation,
    type: "Web",
    source_code_link: "https://github.com/shivamjha2705/Portrait-Renovations-assignment",
    livePreview: "https://portrait-renovations.netlify.app"
  },
  {
    id: "4",
    name: "Snapshare",
    description:
      "Snapshare is a social image-sharing platform that encourages creativity and collaboration. Users can upload, comment, and save images (pins) to their collections. It mimics a Pinterest-like interface powered by Sanity CMS.",
    whatIDid: "Integrated Sanity CMS for backend data handling, created dynamic pages for pins and user profiles, built search functionality, and enabled social interactions (commenting, saving).",
    myRole: "Full-stack Developer (Frontend-heavy).",
    tags: [
      { name: "Html5", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
      { name: "Tailwind CSS", color: "blue-text-gradient" },
      { name: "ReactJs", color: "violet-text-gradient" },
      { name: "Sanity-cms", color: "blue-text-gradient" }
    ],
    image: snapshare,
    type: "Web",
    source_code_link: "https://github.com/shivamjha2705",
    livePreview: "https://snapshare-sk.netlify.app/"
  },
  {
    id: "5",
    name: "Netflix UI",
    description:
      "A front-end replica of the Netflix homepage using real movie APIs to dynamically display titles, genres, and poster previews. Focused on UI responsiveness and dynamic rendering of components.",
    whatIDid: "Fetched movie data from TMDb API, created dynamic rows of movie posters, implemented modal popups and hover animations, styled with custom CSS.",
    myRole: "Frontend Developer.",
    tags: [
      { name: "Html5", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
      { name: "ReactJs", color: "violet-text-gradient" }
    ],
    image: netflix,
    type: "Web",
    source_code_link: "https://github.com/shivamjha2705/netflix-clone",
    livePreview: "https://netflix-clone-1bf8b.web.app/"
  },
  {
    id: "6",
    name: "Modern Weather App",
    description:
      "This modern web-based weather app uses real-time weather APIs to display current weather conditions of any searched city. It includes temperature, humidity, and wind data.",
    whatIDid: "Designed the UI layout and search functionality. Integrated OpenWeatherMap API. Styled responsive weather cards and loading state animations.",
    myRole: "Frontend Developer.",
    tags: [
      { name: "Html5", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
      { name: "Javascript", color: "blue-text-gradient" }
    ],
    image: weatherApp,
    type: "Web",
    source_code_link: "https://github.com/shivamjha2705/Modern_Weather_App",
    livePreview: "https://shivamjha2705.github.io/Modern_Weather_App/"
  },
  {
    id: "7",
    name: "Investo",
    description:
      "A UX case study for an app that helps users manage NFTs and digital assets in a single dashboard. Focused on user journey, pain points, and minimalist UI structure.",
    whatIDid: "Conducted user research, developed wireframes, prototyped core flows using Figma, and structured visual hierarchy for better usability.",
    myRole: "UX Designer.",
    tags: [
      { name: "Figma", color: "green-text-gradient" },
      { name: "Design patterns", color: "pink-text-gradient" },
      { name: "Wireframing", color: "blue-text-gradient" }
    ],
    image: investo,
    type: "UI-UX",
    livePreview: "https://bit.ly/3M818gD"
  },
  {
    id: "8",
    name: "Suicide Analysis",
    description:
      "A data-driven dashboard analyzing suicide trends across India using Power BI and Python. It presents visuals that can help inform policy-making and awareness initiatives.",
    whatIDid: "Cleaned raw data using Pandas, generated insights through Python visualization libraries, and built a Power BI dashboard for interactive storytelling.",
    myRole: "Data Analyst.",
    tags: [
      { name: "Python", color: "green-text-gradient" },
      { name: "Pandas", color: "pink-text-gradient" },
      { name: "Matplotlib", color: "blue-text-gradient" },
      { name: "Kaggle", color: "violet-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Power BI", color: "blue-text-gradient" }
    ],
    image: suicideAnalysis,
    type: "Data Analysis",
    source_code_link: "https://github.com/shivamjha2705/Suicide-Analysis-Shaping-Insights-for-Change-in-India",
    livePreview: "https://shivamjha2705.github.io/Suicide-Analysis-Shaping-Insights-for-Change-in-India/"
  }
];


// const projects = [
//   {
//     id:"1",
//     name: "Carvaan",
//     description:
//       "A Travel Booking Platform where users can explore destinations, authenticate via OTP or Google login, save favorites with a wishlist feature, and experience smooth navigation. Built for both travelers and travel businesses with real-time updates.",
//     tags: [
//       {
//         name: "ReactJs",
//         color: "violet-text-gradient",
//       },
//       {
//         name: "Tailwind CSS",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "HTML",
//         color: "green-text-gradient",
//       },
//       {
//         name: "CSS",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: carvaan,
//     type: "Web",
//     // source_code_link: "https://github.com/shivamjha2705/carvaan",
//     livePreview: "https://carvaan.co"
//   },
//   {
//     id:"2",
//     name: "Neighborhue",
//     description:
//       "A neighborhood recommendation platform powered by Hue AI that suggests ideal places to live based on user preferences. Includes a blog, pricing page, contact form, authentication system, and integrated Google Ads. Fully responsive and built for a seamless user experience.",
//     tags: [
//       {
//         name: "React.js",
//         color: "violet-text-gradient",
//       },
//       {
//         name: "HTML",
//         color: "green-text-gradient",
//       },
//       {
//         name: "CSS",
//         color: "pink-text-gradient",
//       },
//       {
//         name: "JavaScript",
//         color: "yellow-text-gradient",
//       },
//       {
//         name: "Google Ads",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "Responsive Design",
//         color: "orange-text-gradient",
//       },
//     ],
//     image: neighborhue, // Replace with the actual imported image
//     type: "Web",
//     // source_code_link: "https://github.com/shivamjha2705/neighborhue",
//     livePreview: "https://test0n.netlify.app"
//   },
//   {
//   id:"3",
//   name: "Portrait Renovations",
//   description:
//     "A sleek and modern landing page template designed for renovation companies. Built with clean HTML and CSS, it features an engaging UI layout, responsive design for all screen sizes, and showcases services, testimonials, and a contact section for lead generation.",
//   tags: [
//     {
//       name: "HTML",
//       color: "green-text-gradient",
//     },
//     {
//       name: "CSS",
//       color: "pink-text-gradient",
//     },
//     {
//       name: "UI Design",
//       color: "blue-text-gradient",
//     },
//     {
//       name: "Responsive Design",
//       color: "orange-text-gradient",
//     }
//   ],
//   image: rennovation, // Replace with actual imported image reference
//   type: "Web",
//   source_code_link: "https://github.com/shivamjha2705/Portrait-Renovations-assignment", // Update if different
//   livePreview: "https://portrait-renovations.netlify.app"
// },
//   {
//   id:"4",
//     name: "Snapshare",
//     description:
//       "An Image Sharing platform for creativity and community where user can Share photos and visuals and also comment on them with saving the image as pin in thire saved pin section",
//     tags: [
//       {
//         name: "Html5",
//         color: "green-text-gradient",
//       },
//       {
//         name: "CSS",
//         color: "pink-text-gradient",
//       },
//       {
//         name: "Tailwind CSS",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "ReactJs",
//         color: "violet-text-gradient",
//       },
//       {
//         name: "Sanity-cms",
//         color: "blue-text-gradient",
//       },
//     ],
//     image: snapshare,
//     type: "Web",
//     source_code_link: "https://github.com/shivamjha2705",
//     livePreview: "https://snapshare-sk.netlify.app/"
//   },
//   {
//     id:"5",
//     name: "Netflix UI",
//     description:
//       "This is a clone of Netflix OTT Platform in which movie api is used to fetch data such as images , titles , descriptions",
//     tags: [
//       {
//         name: "Html5",
//         color: "green-text-gradient",
//       },
//       {
//         name: "CSS",
//         color: "pink-text-gradient",
//       },
//       {
//         name: "ReactJs",
//         color: "violet-text-gradient",
//       },
//     ],
//     image: netflix,
//     type: "Web",
//     source_code_link: "https://github.com/shivamjha2705/netflix-clone",
//     livePreview: "https://netflix-clone-1bf8b.web.app/"
//   },
//   {
//     id:"6",
//     name: "Modern Weather App",
//     description:
//       "This is a modern weather app which weather api is used to fetch weather data",
//     tags: [
//       {
//         name: "Html5",
//         color: "green-text-gradient",
//       },
//       {
//         name: "CSS",
//         color: "pink-text-gradient",
//       },
//       {
//         name: "Javascript",
//         color: "blue-text-gradient",
//       },
//     ],
//     image: weatherApp,
//     type: "Web",
//     source_code_link: "https://github.com/shivamjha2705/Modern_Weather_App",
//     livePreview: "https://shivamjha2705.github.io/Modern_Weather_App/"
//   },
//   {
//     id:"7",
//     name: "Investo",
//     description:
//       "An ux case study in which an app is designed that allows users to manage their NFTs assets in one spot",
//     tags: [
//       {
//         name: "Figma",
//         color: "green-text-gradient",
//       },
//       {
//         name: "Design patterns",
//         color: "pink-text-gradient",
//       },
//       {
//         name: "Wireframing",
//         color: "blue-text-gradient",
//       },
//     ],
//     image: investo,
//     type: "UI-UX",
//     livePreview: "https://bit.ly/3M818gD"
//   },
//   {
//     id:"8",
//     name: "Suicide Analysis",
//     description:
//       "Conducted data analysis, including data cleaning and visualization on Indian suicide data using the Power BI dashboard, contributing to informed suicide prevention policies.",
//     tags: [
//       {
//         name: "Python",
//         color: "green-text-gradient",
//       },
//       {
//         name: "Pandas",
//         color: "pink-text-gradient",
//       },
//       {
//         name: "Matplotlib",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "Kaggle",
//         color: "violet-text-gradient",
//       },
//       {
//         name: "Jupyter Notebook",
//         color: "green-text-gradient",
//       },
//       {
//         name: "Power BI",
//         color: "blue-text-gradient",
//       },
//     ],
//     image: suicideAnalysis,
//     type: "Data Analysis",
//     source_code_link: "https://github.com/shivamjha2705/Suicide-Analysis-Shaping-Insights-for-Change-in-India",
//     livePreview: "https://shivamjha2705.github.io/Suicide-Analysis-Shaping-Insights-for-Change-in-India/"
//   },

// ];

export { services, technologies, experiences, testimonials, projects };