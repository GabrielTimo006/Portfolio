import React from 'react';
import '../css/Header.css';
import { Link } from 'react-scroll';

import bg from '../imagenes/image.png';
import btnImg from '../imagenes/hireme.png';

const Header = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hola,</span>
                <span className="introText">
                    Me llamo <span className="introName">Hector Gabriel Adrian Timo</span> <br />
                    Estudiante Programación
                </span>
                <p className="introPara">
                Soy una persona proactiva, comprometida y con gran capacidad <br />de adaptación, en búsqueda de nuevos desafíos profesionales <br />que me permitan seguir creciendo.
                </p>
                <Link to="skills" smooth={true} duration={500}>
                    <button className="btn">
                        <img src={btnImg} alt="Hire" className="btnImg" /> Contrátame.
                    </button>
                </Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
};

export default Header;


// ============================[Apellido y Nombre: Timo, Hector Gabriel Adrian ]==================================
// =======================================[Legajo: 61240]=========================================================