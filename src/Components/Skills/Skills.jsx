import React from "react";
import "./skills.css"
import skillInfo from "./SkillsInformation.json";
const Skills = () => {
  let dev__mapping = skillInfo.map((det) => {
      return (
        
          <div className="skills__content">
            <h3 className="skills__title"> 
            <i className={`bx bx-${det.icon}`}></i>
            {det.development}
            </h3>
            <div className="skills__box">
              <div className="skills__group">
                {det.skills.map((skill) => (
                  <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                      <h3 className="skills__name">{skill}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
      );
    
  });
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Levels</span>
      <div className="skills__container container grid">
      {dev__mapping}
      </div>
    </section>
  );
};

export default Skills;
