import React from 'react';
import "./home.css";
import Avatar from "../../assets/linkedIn_img.jpg";
import HeaderSocials from './HeaderSocials';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Avatar} alt="" className="home__img" />
        <h1 className="home__name">Iliopoulos Marios</h1>
        <span className="home__education">I am a junior software developer</span>

        <HeaderSocials />

        <a href="#contact" className="btn">Contact me</a>
      </div>
    </section>
  )
}

export default Home