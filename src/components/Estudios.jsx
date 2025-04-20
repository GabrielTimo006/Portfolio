import React from 'react';
import '../css/Estudios.css';

const estudiosData = [
    { titulo: "Tecnicatura en Programación", institucion: "UTN", año: "2024 - Actualidad" },
    { titulo: "Curso de Diseño Web", institucion: "CoderHouse", año: "2025" }
];

const Estudios = () => {
    return (
        <section id="estudios" className="estudiosSection">
            <div className="estudiosHeader">
                <h2 className="estudiosTitle">Estudios</h2>
            </div>

            <div className="estudiosContent">
                <ul className="estudiosList">
                    {estudiosData.map((estudio, index) => (
                        <li key={index} className="estudiosItem">
                            <h3>{estudio.titulo}</h3>
                            <p>{estudio.institucion} – {estudio.año}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Estudios;