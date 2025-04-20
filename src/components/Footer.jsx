import React, { useRef } from "react";
import "../css/Footer.css";
import Walmart from "../imagenes/walmart.png";
import Adobe from "../imagenes/adobe.png";
import Microsoft from "../imagenes/microsoft.png";
import Facebook from "../imagenes/facebook.png";
import facebookIcon from "../imagenes/facebook-icon.png";
import twitterIcon from "../imagenes/twitter.png";
import youtubeIcon from "../imagenes/youtube.png";
import instagramIcon from "../imagenes/instagram.png";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset(); // Solo limpia los campos
  };

  return (
    <>
      <div id="contactPage">
        <div id="clients">
          <h1 className="contactPageTitle">Mis clientes</h1>
          <span className="clientDesc">
            He tenido la oportunidad de trabajar con un grupo diverso de empresas.
            Algunas de las empresas destacadas con las que he trabajado incluyen:
          </span>
          <div className="clientImgs">
            <img src={Walmart} alt="Client" className="clientImg" />
            <img src={Adobe} alt="Client" className="clientImg" />
            <img src={Microsoft} alt="Client" className="clientImg" />
            <img src={Facebook} alt="Client" className="clientImg" />
          </div>
        </div>

        <div id="contact">
          <h1 className="contactPageTitle">Contáctame</h1>
          <span className="contactDesc">
            Por favor, complete el formulario a continuación para discutir
            cualquier oportunidad de trabajo.
          </span>
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              className="name"
              placeholder="Tu nombre"
              name="from_name"
            />
            <input
              type="text"
              className="email"
              placeholder="Tu correo electrónico"
              name="from_email"
            />
            <textarea
              name="message"
              placeholder="Tu mensaje"
              rows={5}
              className="msg"
            ></textarea>
            <button type="submit" value="Send" className="submitBtn">
              Enviar
            </button>
            <div className="links">
              <a
                href="https://www.facebook.com/gabriel.timo.5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebookIcon} alt="Facebook" className="link" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitterIcon} alt="Twitter" className="link" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youtubeIcon} alt="YouTube" className="link" />
              </a>
              <a
                href="https://www.instagram.com/timo.gabriel/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagramIcon} alt="Instagram" className="link" />
              </a>
            </div>
          </form>
        </div>
      </div>

      <footer className="footer">
        Copyright &#169; 2023 Timo Gabriel. Todos los derechos reservados.
      </footer>
    </>
  );
};

export default Footer;