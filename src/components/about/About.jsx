import React from 'react';
import "./about.css";
import Avatar from "../../assets/linkedIn_img.jpg";
import CV from "../../assets/cv.pdf"

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About me</h2>

      <div className="about__container grid">
        <img src={Avatar} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__discription">
              I am Iliopoulos Marios, a junior web developer from Athens, Greece. I am new to this field but I think I can handle any task given.
              Google is our friend.
            </p>
            <a href={CV} className="btn" download="Marios_Iliopoulos_CV">Download CV</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Java</h3>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">C</h3>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">HTML, CSS, JS</h3>                
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About