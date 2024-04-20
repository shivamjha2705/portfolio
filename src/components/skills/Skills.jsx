import React from 'react'
import './skills.css'
// import html from '../../assets/html-1.svg'
// import css from '../../assets/css-3.svg'
// import js from '../../assets/js.png'
// import reactjs from '../../assets/React-icon.png'
// import bootstrap from '../../assets/Bootstrap_logo.png'
// import tailwind from '../../assets/TailwindCSS.png'
// import github from '../../assets/Github.png'
// import firebase from '../../assets/Firebase.png'
import figma from '../../assets/Figma.png'
import photoshop from '../../assets/Photoshop.png'
import sketch from '../../assets/Sketch.png'
import adobe from '../../assets/AdobeXD.png'
import prototype from '../../assets/prototype.png'
import wireframe from '../../assets/wireframe.png'
import VisualDesign from '../../assets/visual-design.png'
import storyboarding from '../../assets/storyboard.png'

const Skills = () => {
  // const techs=[
  //   {
  //     id:1,
  //     src:html,
  //     title:'HTML',
  //     style:'html-shadow'
  //   },
  //   {
  //     id:2,
  //     src:css,
  //     title:'CSS',
  //     style:'css-shadow'
  //   },
  //   {
  //     id:3,
  //     src:js,
  //     title:'JAVASCRIPT',
  //     style:'js-shadow'
  //   },
  //   {
  //     id:4,
  //     src:reactjs,
  //     title:'REACT JS',
  //     style:'react-shadow'
  //   },
  //   {
  //     id:5,
  //     src:bootstrap,
  //     title:'BOOTSTRAP',
  //     style:'bs-shadow'
  //   },
  //   {
  //     id:6,
  //     src:tailwind,
  //     title:'TAILWIND CSS',
  //     style:'tw-shadow'
  //   },
  //   {
  //     id:7,
  //     src:github,
  //     title:'GITHUB',
  //     style:'github-shadow'
  //   },
  //   {
  //     id:8,
  //     src:firebase,
  //     title:'FIREBASE',
  //     style:'firebase-shadow'
  //   },
  // ]
  const design = [
    {
      id: 1,
      src: figma,
      title: 'FIGMA',
      style: 'figma-shadow'
    },
    {
      id: 2,
      src: photoshop,
      title: 'PHOTOSHOP',
      style: 'photoshop-shadow'
    },
    {
      id: 3,
      src: sketch,
      title: 'SKETCH',
      style: 'sketch-shadow'
    },
    {
      id: 4,
      src: adobe,
      title: 'ADOBE XD',
      style: 'adobe-shadow'
    },
    {
      id: 5,
      src: prototype,
      title: 'PROTOTYPING',
      style: 'prototype-shadow'
    },
    {
      id: 6,
      src: wireframe,
      title: 'WIREFRAMING',
      style: 'wireframe-shadow'
    },
    {
      id: 7,
      src: VisualDesign,
      title: 'VISUAL DESIGN',
      style: 'visual-shadow'
    },
    {
      id: 8,
      src: storyboarding,
      title: 'STORYBOARDING',
      style: 'story-shadow'
    },


  ]
  const other_techs = [
    {
      id: 1,
      title: 'JAVA',
      style: 'java-shadow'
    },
    {
      id: 2,
      title: 'PYTHON',
      style: 'python-shadow'
    },
    {
      id: 3,
      title: 'DBMS',
      style: 'dbms-shadow'
    },
    {
      id: 4,
      title: 'SQL',
      style: 'sql-shadow'
    },
    {
      id: 5,
      title: 'PANDAS',
      style: 'pandas-shadow'
    },
    {
      id: 6,
      title: 'HTML',
      style: 'html-shadow'
    },
    {
      id: 7,
      title: 'CSS',
      style: 'css-shadow'
    },
    {
      id: 8,
      title: 'JAVASCRIPT',
      style: 'js-shadow'
    },
    {
      id: 9,
      title: 'REACT JS',
      style: 'react-shadow'
    },
    {
      id: 10,
      title: 'BOOTSTRAP',
      style: 'bs-shadow'
    },
    {
      id: 11,
      title: 'TAILWIND CSS',
      style: 'tw-shadow'
    },
    {
      id: 12,
      title: 'GITHUB',
      style: 'github-shadow'
    },
    {
      id: 13,
      title: 'FIREBASE',
      style: 'firebase-shadow'
    },
  ]
  return (
    <section id='skills'>
      <h5>What Skills I Have</h5>
      <h2>These are the technologies I've worked with</h2>
      <h3 style={{ marginTop: '2rem', textAlign: 'center' }}>Technical Skills</h3>
      <div className='other_tech_skills'>

        {
          other_techs.map(({ id, title, style }) => {
            return (
              <div className={`icon-box ${style}`} key={id}>
                <p>{title}</p>
              </div>
            )
          })
        }
      </div>
      <h3 style={{ marginTop: '2rem', textAlign: 'center' }}>Design Skills & Tools</h3>
      <div className=' other_tech_skills'>

        {
          design.map(({ id, title, style }) => {
            return (
              <div className={`icon-box ${style}`} key={id}>
                <p>{title}</p>
              </div>
            )
          })
        }
      </div>
    </section>


  )
}

export default Skills