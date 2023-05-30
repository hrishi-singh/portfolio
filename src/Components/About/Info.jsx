import React from "react";
import Information from "./Information.json";
let mapping = Information.map((det) => {
    return (
     
        <div className="about__box">
            <i className={`bx bx-${det["svg-icon"]}`}></i>
          <h3 className="about__title">{det.title}</h3>

          <span className="about__subtitle">{det.subtitle}</span>
        </div>
     
    )
  })
const Info = () => {
  return (
    <div className="about__info grid">
    { mapping }
    </div>
  )
  
};

export default Info;
