import React from 'react';
import '../css/Main.css';
import Estudios from '../components/Estudios';
import Proyectos from './Proyectos';
import SoftSkill from './SoftSkill';
import ExperienciaLaboral from './ExperienciaLaboral';
import Idiomas from './Idiomas';

const Main = () => {
    return (
        <div id="mainContainer">
            
            <Estudios />
            <Proyectos />
            <SoftSkill />
            <ExperienciaLaboral />
            <Idiomas />
        </div>
    );
};

export default Main;