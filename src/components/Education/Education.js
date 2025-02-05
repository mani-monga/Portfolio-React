import React, { useEffect } from 'react';
import './Education.css';

function Education() {

    return (
        <section className="footer">
            <div className='innerContainer'>
                <div className="Containerslist">
                    <h4>Skills</h4>
                    <div>
                    {skills.map((skill, index) => (
                        <div className="Containers" key={index} title={skill.name}>
                            <img src={skill.img} alt={skill.name} />
                            <span className="Info">{skill.name}</span>
                        </div>
                    ))}
                    </div>
                </div>

                <div className="details">
                    <div className="qualifications">
                        <h3>Education Qualifications</h3>
                        <div><span>High School</span><span>9.6 CGPA</span></div>
                        <div><span>Senior Secondary</span><span>91.3%</span></div>
                        <div><span>B.Tech (IT)</span><span>9.128 GPA</span></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const skills = [
    { img: "https://cdn-icons-png.flaticon.com/512/1260/1260775.png", name: "ReactJS" },
    { img: "https://img.icons8.com/color/344/redux.png", name: "Redux" },
    { img: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png", name: "HTML" },
    { img: "https://cdn-icons-png.flaticon.com/512/732/732190.png", name: "CSS" },
    { img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png", name: "JavaScript" },
    { img: "https://i.postimg.cc/8CHgg59G/image.png", name: "JQuery"},
    { img: "https://i.postimg.cc/sDhFDKqw/image.png", name: "Optimizely" },
    { img: "https://i.postimg.cc/BnJGYH7p/image.png", name: "Convert" },
    { img: "https://i.postimg.cc/3x9QPNPT/image.png", name: "VWO" },
    { img: "https://i.postimg.cc/wTcCm3xm/image.png", name: "Kameleoon" },
    { img: "https://img.icons8.com/color/344/firebase.png", name: "Firebase" },
    { img: "https://img.icons8.com/color/344/bootstrap.png", name: "Bootstrap" },
    { img: "https://img.icons8.com/color/344/material-ui.png", name: "MaterialUI" },
    { img: "https://img.icons8.com/ios-glyphs/344/sql.png", name: "SQL" },
];

export default Education;
