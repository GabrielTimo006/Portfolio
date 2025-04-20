import React from 'react';
import '../css/Idiomas.css';

const idiomas = [
    { idioma: "Español", nivel: "Nativo" },
    { idioma: "Inglés", nivel: "Intermedio" }
];

const Idiomas = () => {
    return (
        <section id="idiomas">
            <h2>Idiomas</h2>
            <ul>
                {idiomas.map((item, index) => (
                    <li key={index}>{item.idioma} – {item.nivel}</li>
                ))}
            </ul>
        </section>
    );
};

export default Idiomas;