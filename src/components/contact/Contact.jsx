import React from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__title">Contact</h2>

      <div className="contact__container grid">

        <div className="contact__form">
          <div className="contact__form-group">
            <h3 className="contact__title">Name:</h3>
            <div className="contact__form-div">
              <p className='contact__form-desc'>Iliopoulos Marios</p>
            </div>
            <h3 className="contact__title">Email:</h3>
            <div className="contact__form-div">
              <p className='contact__form-desc'>mariosiliop7@gmail.com</p>
            </div>
            <h3 className="contact__title">Phone number:</h3>
            <div className="contact__form-div">
              <p className='contact__form-desc'>+306980753533</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Contact