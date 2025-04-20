import React from 'react';
import '../css/ExperienciaLaboral.css';

const experiencias = [
    { puesto: "Diseñador Web", empresa: "Freelance", año: "2021 - Actualidad" }
];

const ExperienciaLaboral = () => {
    return (
        <section id="experiencialaboral">
            <h2>Experiencia Laboral</h2>
            {experiencias.map((exp, index) => (
                <div key={index}>
                    <h3>{exp.puesto}</h3>
                    <p>{exp.empresa} – {exp.año}</p>
                </div>
            ))}
        </section>
    );
};

export default ExperienciaLaboral;