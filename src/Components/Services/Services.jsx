import React,{useState} from "react";
import serviceInfo from "./servicesInfo.json";
import './services.css'
const Services = () => {
    const [toggle,setToggle]=useState(0);
    const toggleTab=(index)=>{
        setToggle(index);
    }
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>
      <div className="services__container container grid">
        {serviceInfo.map((det) => (
          <div className="sevices__content">
            <div>
              <i className={`uil uil-${det.icon} services__icon`}></i>
              <h3 className="services__title">{det.title}</h3>
            </div>
            <span className="services__button" onClick={()=>toggleTab(1)}>View More</span>
            <i className="uil uil-arrow-right services__button-icon"></i>
            <div className={toggle===1?"services__modal active-modal": "services__modal"}>
              <div className="services__modal-content">
                <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>
                <h3 className="services__modal-title">{det.title}</h3>
                <p className="services__modal-description">
                  services with more than 2 year of works
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      repeating lines 4 times using map
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
