import React, { useState } from 'react';
import "./portfolio.css";
import Menu from "./Menu";
import Thesis from "../../assets/Thesis_Document.pdf"

const Portfolio = () => {
  const [items, setItems] = useState(Menu);

  return (
    <section className="work container section" id='work'>
      <h2 className="section__title">Projects</h2>

      <div className="work__container grid">
        {items.map((elem) => {
          const{ id, image, title, desc } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <h3 className="work__title">{title}</h3>
              <p className="work__desc">{desc}</p>
              <a href={Thesis} className="work__btn" download="Thesis">
                <i className="icon-link work__btn-icon"></i>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio