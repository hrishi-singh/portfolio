import React, { useState } from "react";
import "./qualification.css";
import QualificationInfo from "./QualificationInfo.json";
const Qualification = () => {
  const [toggle, setToggle] = useState(1);
  const toggleTab = () => {
    if (toggle === 0) setToggle(1);
    else setToggle(0);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">Learning Timeline</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          {QualificationInfo.Tabs.map((det) => (
            <div
              className={
                toggle === 1
                  ? `qualification__button ${det.active1} button--flex`
                  : `qualification__button ${det.active2}  button--flex`
              }
              onClick={() => toggleTab()}
            >
              <i className={`uil uil-${det.icon} qualification__icon`}></i>
              {det.title}
            </div>
          ))}
        </div>

        <div className="qualification__sections">
          {QualificationInfo.Qual.map((det1) => (
            <div
              className={
                toggle === 1
                  ? `qualification__content ${det1.active1}`
                  : `qualification__content  ${det1.active2}`
              }
            >
              {det1.Education.map((det) => (
                <div className="qualification__data">
                  {det.state === 0 ? (
                    ""
                  ) : (
                    <>
                      <div></div>
                      <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                      </div>
                    </>
                  )}
                  <div>
                    <h3 className="qualification__title">{det.Degree}</h3>
                    <span className="qualifcation__subtitle">
                      {det.institute}
                    </span>
                    <div className="qualification__calender">
                      <i className="uil uil-calender-alt"></i>
                      {det.Year}
                    </div>
                  </div>

                  {det.state === 0 ? (
                    <div>
                      <span className="qualification__rounder"></span>
                      <span className="qualification__line"></span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
