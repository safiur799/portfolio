import React from "react";
import DevIcon from "devicon-react-svg";
import { Skill } from "../Helpers/Skill.jsx";
import "./Skills.css";
function Skills() {
  return (
    <div className="skil_container" id="skill">
      <div>
        <h1 style={{ textAlign: "center" }}>Skills</h1>
      </div>
      <div className="skill_cards_containers">
        {Skill.map((el, ind) => {
          return (
            <div key={ind} className="skill_cards">
              <DevIcon className="skill_icon" icon={el.iconName} />
              <span
                style={{
                  margin: "5px",
                  fontSize: "1.5rem",
                  textAlign: "center",
                }}
              >
                {el.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
