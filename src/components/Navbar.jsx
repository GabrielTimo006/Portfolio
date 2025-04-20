import React, { useState } from 'react';
import '../css/Navbar.css';
import logo from '../imagenes/logo.png';
import contactImg from '../imagenes/contact.png';
import { Link } from 'react-scroll';
import menu from '../imagenes/menu.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo'/>

            {/* Menú de escritorio */}
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Inicio</Link>
                <Link activeClass='active' to='estudios' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Acerca de Mi</Link>
                <Link activeClass='active' to='proyectos' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Proyectos</Link>
                <Link activeClass='active' to='softskill' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Habilidades</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Clientes</Link>
            </div>

            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contactImg} alt="Contacto" className="desktopMenuImg" />
                Contáctame.
            </button>
            
            {/* Menú móvil */}
            <img src={menu} alt="Menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)} />

            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Inicio</Link>
                <Link activeClass='active' to='estudios' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Acerca de Mi</Link>
                <Link activeClass='active' to='proyectos' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Proyectos</Link>
                <Link activeClass='active' to='softskill' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Habilidades</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Clientes</Link>
            </div>
        </nav>
    );
};

export default Navbar;