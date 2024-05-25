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
      iconClass:"fa-solid fa-user-tie"
    },
    {
      id: "work",
      title: "Work",
      iconClass:"fa-solid fa-laptop-file"
    },
    {
      id: "project",
      title: "Projects",
      iconClass:"fa-solid fa-house-laptop"
    },
    {
      id: "contact",
      title: "Contact",
      iconClass:"fa-solid fa-address-card"
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
      company_link:"https://www.bitmesra.ac.in/Show_Other_Department?cid=1&deptid=202",
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
      company_link:"https://techavtar.com/",
      icon: techavtar,
      iconBg: "#dcd8d8",
      date: "Jan 2024 - Present",
      points: [
        "Use React to integrate <span class='font-extrabold text-amber-200'>API data fetching</span> , <span class='font-extrabold text-amber-200'>Google authentication</span> , and <span class='font-extrabold text-amber-200'>payment gateway integration</span> , while ensuring UI responsiveness and scalability using <span class='font-extrabold text-amber-200'>Bootstrap 5</span> and <span class='font-extrabold text-amber-200'>Swiper JS</span> carousel integration",
        "Use <span class='font-extrabold text-amber-200'>Redux</span> for efficient state management, implemented <span class='font-extrabold text-amber-200'>MVC</span> structure for enhanced code maintainability, and optimized user experience through the creation of reusable components and search filters",
        "Developed a <span class='font-extrabold text-amber-200'>Google add-on</span> to generate email replies as drafts using <span class='font-extrabold text-amber-200'>OpenAI API</span>, offering varied reply tones for effective communication, enhancing user interaction and productivity.",
        
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
      name: "Snapshare",
      description:
        "An Image Sharing platform for creativity and community where user can Share photos and visuals and also comment on them with saving the image as pin in thire saved pin section",
      tags: [
        {
          name: "Html5",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "blue-text-gradient",
        },
        {
          name: "ReactJs",
          color: "violet-text-gradient",
        },
        {
          name: "Sanity-cms",
          color: "blue-text-gradient",
        },
      ],
      image: snapshare,
      source_code_link: "https://github.com/shivamjha2705",
      livePreview:"https://snapshare-sk.netlify.app/"
    },
    {
      name: "Netflix UI",
      description:
        "This is a clone of Netflix OTT Platform in which movie api is used to fetch data such as images , titles , descriptions",
      tags: [
        {
          name: "Html5",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "ReactJs",
          color: "violet-text-gradient",
        },
      ],
      image: netflix,
      source_code_link: "https://github.com/shivamjha2705/netflix-clone",
      livePreview:"https://netflix-clone-1bf8b.web.app/"
    },
    {
      name: "Modern Weather App",
      description:
        "This is a modern weather app which weather api is used to fetch weather data",
      tags: [
        {
          name: "Html5",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
      ],
      image: weatherApp,
      source_code_link: "https://github.com/shivamjha2705/Modern_Weather_App",
      livePreview:"https://shivamjha2705.github.io/Modern_Weather_App/"
    },
    {
      name: "Investo",
      description:
        "An ux case study in which an app is designed that allows users to manage their NFTs assets in one spot",
      tags: [
        {
          name: "Figma",
          color: "green-text-gradient",
        },
        {
          name: "Design patterns",
          color: "pink-text-gradient",
        },
        {
          name: "Wireframing",
          color: "blue-text-gradient",
        },
      ],
      image: investo,
      livePreview:"https://bit.ly/3M818gD"
    },
    {
      name: "Suicide Analysis",
      description:
        "Conducted data analysis, including data cleaning and visualization on Indian suicide data using the Power BI dashboard, contributing to informed suicide prevention policies.",
      tags: [
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Pandas",
          color: "pink-text-gradient",
        },
        {
          name: "Matplotlib",
          color: "blue-text-gradient",
        },
        {
          name: "Kaggle",
          color: "violet-text-gradient",
        },
        {
          name: "Jupyter Notebook",
          color: "green-text-gradient",
        },
        {
          name: "Power BI",
          color: "blue-text-gradient",
        },
      ],
      image: suicideAnalysis,
      source_code_link: "https://github.com/shivamjha2705/Suicide-Analysis-Shaping-Insights-for-Change-in-India",
      livePreview:"https://shivamjha2705.github.io/Suicide-Analysis-Shaping-Insights-for-Change-in-India/"
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };