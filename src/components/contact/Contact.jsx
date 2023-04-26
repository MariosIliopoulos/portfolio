import React from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__title">Contact</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Fill the form</h3>
        </div>

        <form className="contact__form" method="POST">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" className="contact__form-input" name='name' placeholder='Insert your name'/>
            </div>

            <div className="contact__form-div">
              <input type="email" className="contact__form-input" name='email' placeholder='Insert your email'/>
            </div>
          </div>
          <div className="contact__form-div">
            <input type="text" className="contact__form-input" name='subject' placeholder='Insert your subject'/>
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea name="message" id="" cols="30" rows="10" className='contact__form-input' placeholder='Write your message'></textarea>
          </div>

          <button className='btn' type='submit' value='SEND'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact