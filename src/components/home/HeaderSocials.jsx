import React from 'react'

const HeaderSocials = () => {
  return (
    <div className="home__socials">
        <a href="https://www.instagram.com/marios_iliop/" className="home__social-link" target="_blank">
            <i className="fa-brands fa-instagram"></i>
        </a>

        <a href="https://www.facebook.com/marios.iliop/" className="home__social-link" target="_blank">
            <i className="fa-brands fa-facebook"></i>
        </a>

        <a href="https://www.linkedin.com/in/marios-iliopoulos-1484b9240" className="home__social-link" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
        </a>

        <a href="https://github.com/MariosIliopoulos" className="home__social-link">
            <i className="fa-brands fa-github"></i>
        </a>
    </div>
  )
}

export default HeaderSocials