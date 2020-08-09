import React, { useState, useEffect } from "react";
import "./style.css";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeardIcon from "../../assets/images/icons/purple-heart.svg";
import { Link } from "react-router-dom";
import api from "../../services/api";

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get("connections").then((response) => {
      const { total } = response.data;
      console.log(response);

      setTotalConnections(total);
    });
  }, [totalConnections]);
  return (
    <div id="page-landing">
      <div id="page-landing-content">
        <div className="logo-container">
          <img src={logoImg} alt="proffy" />
          <h2>sua plataforma de estudos online</h2>
        </div>
        <img
          src={landingImg}
          alt="plataform de estudo"
          className="hero-image"
        />
        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Dar aula" />
            Dar aula
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="" />
            Estudar
          </Link>
        </div>
        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas
          <img src={purpleHeardIcon} alt="coração roxo" />
        </span>
      </div>
    </div>
  );
}

export default Landing;
