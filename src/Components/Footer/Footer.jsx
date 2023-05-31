import React from 'react'
import "./footer.css"
import SocialInfo from '../SocialInfo.json'
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Hrishi Singh</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">projects</a>
                </li>
            </ul>
            <div className="footer__social">
                {
                    SocialInfo.work.map((det)=>(
                        <a href={det.url} className="home__social-icon" target='_blank' rel="noopener noreferrer">
                        <i className={`ui uil-${det.icon}`}></i>
                    </a>

                    ))
                }

            </div>
            <span className="footer__copyright">
                &#169; Hrishi Raj Singh. 
            </span>


        </div>

    </footer>
  )
}

export default Footer