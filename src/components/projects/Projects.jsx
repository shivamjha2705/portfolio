import React from 'react'
import './projects.css'
import img1 from '../../assets/sucideAnalysis (2).png'
import img2 from '../../assets/snapShare.png'
import img3 from '../../assets/netflix.png'
import img4 from '../../assets/weather-app (2).png'
import img5 from '../../assets/investo.png'

const Projects = () => {
  const proj = [
    {
      id: 1,
      title: 'Suicide Analysis',
      description: 'Conducted data analysis, including data cleaning and visualization on Indian suicide data...',
      image: img1,
      tech: 'Python , Pandas',
      link: "https://shivamjha2705.github.io/Suicide-Analysis-Shaping-Insights-for-Change-in-India/",
      code_link: "https://github.com/shivamjha2705/Suicide-Analysis-Shaping-Insights-for-Change-in-India",
      btn1: 'Github',
      btn2: 'Live Demo',

    },
    {
      id: 2,
      title: 'SnapShare ',
      description: 'An Image Sharing platform for creativity and community where user can Share photos and visuals...',
      image: img2,
      tech: 'React Js , Html5 , Tailwind Css , Sanity',
      link: "https://snapshare-sk.netlify.app/",
      code_link: "https://github.com/shivamjha2705",
      btn1: 'Github',
      btn2: 'Live Demo',

    },
    {
      id: 3,
      title: 'Netflix Clone',
      description: 'This is a clone of Netflix OTT Platform in which movie api is used to fetch data such as images , titles , descriptions',
      image: img3,
      tech: 'React Js , Html , Css',
      link: "https://netflix-clone-1bf8b.web.app/",
      code_link: "https://github.com/shivamjha2705/netflix-clone",
      btn1: 'Github',
      btn2: 'Live Demo',

    },
    {
      id: 4,
      title: 'Modern Weather App',
      description: 'This is a modern weather app which weather api is used to fetch weather data ',
      image: img4,
      tech: ' Html , Css , Javascript',
      link: "https://shivamjha2705.github.io/Modern_Weather_App/",
      code_link: "https://github.com/shivamjha2705/Modern_Weather_App",
      btn1: 'Github',
      btn2: 'Live Demo',
    },
    {
      id: 5,
      title: 'INVESTO',
      description: 'An ux case study in which an app is designed that allows users to manage their NFTs assets in one spot',
      image: img5,
      tech: ' Figma',
      link: "https://bit.ly/3M818gD",
      code_link: "https://bit.ly/3InHtK5",
      btn1: 'Product Link',
      btn2: 'Live Demo',
    },

  ]


  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = "//www.topcreativeformat.com/3526b65a30eb8d7a220e9bd24f29d078/invoke.js";
  //   script.async = true; // Load the script asynchronously

  //   // Set atOptions as a global variable before appending the script
  //   window.atOptions = {
  //     'key': '3526b65a30eb8d7a220e9bd24f29d078',
  //     'format': 'iframe',
  //     'height': 60,
  //     'width': 468,
  //     'params': {}
  //   };

  //   const adContainer = document.getElementById('advertisement'); // Get the specific div
  //   adContainer.appendChild(script);

  //   return () => {
  //     adContainer.removeChild(script);
  //   };
  // }, []);


  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        {
          proj.map((item, index) => {
            return (
              <article className='portfolio_item' key={index}>
                <div className='portfolio_item-image'>
                  <img src={item.image} alt={item.title} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>Tech Used : [ <span>{item.tech}</span> ]</p>
                <div className='portfolio_item-cta'>
                  <a href={item.code_link} className='btn' target='_blank' rel='noreferrer'>{item.btn1}</a>
                  <a href={item.link} className='btn btn-primary' target='_blank' rel='noreferrer'>{item.btn2}</a>
                </div>
              </article>
            )
          })
        }
        {/* <div id="advertisement"></div> */}
      </div>
    </section>
  )
}

export default Projects