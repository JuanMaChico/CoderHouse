import React from "react";
import "./Footer.css";
import FbImg from "./facebook.png";
import PintImg from "./Pinterest.png";
import WspImg from "./wsp.png";

const Footer = () => {
  return (
    <div className="FooterGrid">
      <div className="ItemIzq">
        Triqueta fungi 2023. Todos los derechos reservados
      </div>
      <div className="ItemDer">
        <p>
          <a href="www.facebook.com" target="_blank" rel="noreferrer">
            <img src={FbImg} alt="Facebook"></img>
          </a>
        </p>
        <p>
          <a href="www.whatsapp.com" target="_blank" rel="noreferrer">
            <img src={WspImg} alt="Whatsapp"></img>
          </a>
        </p>
        <p>
          <a href="www.pinterest.com" target="_blank" rel="noreferrer">
            <img src={PintImg} alt="Pinterest"></img>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
