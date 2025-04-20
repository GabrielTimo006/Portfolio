import React from 'react';
import '../css/SoftSkill.css';

const softSkills = [
    "Trabajo en equipo",
    "Resolución de problemas",
    "Comunicación",
    "Creatividad"
];

const SoftSkill = () => {
    return (
        <section id="softskill" className="softskillSection">
            <div className="softskillHeader">
                <h2 className="softskillTitle">Habilidades </h2>
            </div>

            <div className="softskillContent">
                <ul className="softskillList">
                    {softSkills.map((skill, index) => (
                        <li key={index} className="softskillItem">{skill}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default SoftSkill;