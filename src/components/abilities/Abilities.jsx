import "./abilities.css";
import html from "/src/assets/html-ai.png";
import css from "/src/assets/css3.png";
import js from "/src/assets/js.png";
import mernStack from "/src/assets/mern-stack.png";
import python from "/src/assets/python.png";
import sass from "/src/assets/Sass.png";
import typescript from "/src/assets/typescript.png"
import { useEffect, useState } from "react";

const Abilities = () => {
  const [icon, setIcon] = useState(
    <i className="fa-solid fa-hourglass-start"></i>
  );
  const skills = [
    {
      name: "HTML",
      image: html,
    },
    {
      name: "CSS",
      image: css,
    },
    {
      name: "JavaScript",
      image: js,
    },
    {
      name: "MERN Stack",
      image: mernStack,
    },
    {
      name: "SASS",
      image: sass
    }
  ];

  const inProgress = [
    {
      name: "PYTHON",
      image: python,
    },
    {
      name: "TypeScript",
      image: typescript
    }
  ];

  useEffect(() => {
    const icons = [
      <i className="fa-solid fa-hourglass-start"></i>,
      <i className="fa-solid fa-hourglass-half"></i>,
      <i className="fa-solid fa-hourglass-end"></i>,
    ];

    let index = 0;

    const interval = setInterval(() => {
      setIcon(icons[index]);
      index = (index + 1) % icons.length;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="information-container">
      <h1 className="h1-from-abilities">Meine Developer Fähigkeiten</h1>
      <div className="img-container">
        {skills.map((skill) => (
          <div key={skill.name} className="picture-div">
            <img src={skill.image} alt={skill.name} />
            <h3>
              {skill.name}
              <i className="fa-solid fa-check"></i>
            </h3>
          </div>
        ))}
      </div>
      <h1 className="h1-from-abilities">Lernphase</h1>
      <div className="img-container">
        {inProgress.map((skill) => (
          <div key={skill.name} className="picture-div">
            <img src={skill.image} alt={skill.name} />
            <h3 className="sand-clock">
              {skill.name}
              {icon}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Abilities;
