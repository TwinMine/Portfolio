import "./projects.css";
import acoustiFlow from "/src/assets/walkman.jpg";
import cashStuffing from "/src/assets/cash-stuffing.png";
import weatherApp from "/src/assets/weather-app.png";
import pokePalCodex from "/src/assets/pikachu-1.png";
import todoWave from "/src/assets/todo-list.png"
import visualNovel from "/src/assets/destroyed-town.png"
import { useEffect, useState } from "react";

const Projects = () => {
  const [topic, setTopic] = useState("topic");
  const [showProjectDiv, setShowProjectDiv] = useState("project-div");
  const [showPic, setShowPic] = useState("project-pic-class");

  useEffect(() => {
    setTopic(topic + " enter-class");
    setShowProjectDiv(showProjectDiv + " show-project-div");
    setShowPic(showPic + " show-pic");
  }, []);

  return (
    <div className="information-container">
      <h1 className={topic}>Meine Projekte</h1>
      <div className="project-container">
        <div className={showProjectDiv}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://media-player-seven-black.vercel.app/"
          >
            <h3 className="project-topic">AcoustiFlow</h3>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://media-player-seven-black.vercel.app/"
          >
            <img src={acoustiFlow} alt="" className={showPic} />
          </a>
        </div>
        <div className={showProjectDiv}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://stuffit-x83e.onrender.com/"
          >
            <h3 className="project-topic">StuffIt</h3>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://stuffit-x83e.onrender.com/"
          >
            <img src={cashStuffing} alt="" className={showPic} />
          </a>
        </div>
        <div className={showProjectDiv}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://weatherapp-amber-six.vercel.app/"
          >
            <h3 className="project-topic">Weather App</h3>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://weatherapp-amber-six.vercel.app/"
          >
            <img src={weatherApp} alt="" className={showPic} />
          </a>
        </div>


        <div className={showProjectDiv}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://pokepal-codex.vercel.app/"
          >
            <h3 className="project-topic">PokePal Codex</h3>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://pokepal-codex.vercel.app/"
          >
            <img src={pokePalCodex} alt="" className={showPic} />
          </a>
          
        </div>

        <div className={showProjectDiv}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://todo-frontend-five-eta.vercel.app/"
          >
            <h3 className="project-topic">TodoWave</h3>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://todo-frontend-five-eta.vercel.app/"
          >
            <img src={todoWave} alt="" className={showPic} />
          </a>
          
        </div>

<div className={showProjectDiv}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://visual-novel-pi.vercel.app/"
          >
            <h3 className="project-topic">Visual Novel</h3>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://visual-novel-pi.vercel.app/"
          >
            <img src={visualNovel} alt="" className={showPic} />
          </a>
          
        </div>


      </div>
    </div>
  );
};

export default Projects;
