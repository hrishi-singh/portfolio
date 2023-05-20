import React from 'react'
import "./about.css"
import AboutImg from '../../assets/profile.jpeg'
const About = () => {

  return (
    <section className="about section" id="about">
        <h2 className="section__title">
            About Me
        </h2>
        <span className="section__subtitle">
            My Introduction
        </span>
        <div className="about__container container grid">
            <img src={AboutImg} className="about__img" alt="" />

            <p className="about__discription">
                Junior at IIT Jodhpur, I create webpages and UI/UX as well. I have few years of experience through projects, Assignment and by creating websites for college Events.
            </p>

        </div>
    </section>
    )
}

export default About