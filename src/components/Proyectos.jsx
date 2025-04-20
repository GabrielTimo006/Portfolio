import React from 'react';
import '../css/Proyectos.css';

const proyectos = [
    { nombre: "Portfolio Personal", descripcion: "Sitio web responsive con React", link: "#" },
    { nombre: "App Clima", descripcion: "Aplicación que consume API para mostrar clima", link: "#" },
    { nombre: "Gestor de Tareas", descripcion: "ToDo App con funcionalidades CRUD", link: "#" },
];

const Proyectos = () => {
    return (
        <section id="proyectos">
            <h2 className="proyectosTitle">Proyectos</h2>
            <div className="proyectoGrid">
                {proyectos.map((proyecto, index) => (
                    <div key={index} className="proyectoCard">
                        <h3>{proyecto.nombre}</h3>
                        <p>{proyecto.descripcion}</p>
                        <a href={proyecto.link} target="_blank" rel="noopener noreferrer">Ver proyecto</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Proyectos;