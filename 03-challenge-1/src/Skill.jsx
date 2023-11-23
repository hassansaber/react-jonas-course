import React from "react";

const Skill = ({ name, color, emoji }) => {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      {name} {emoji}
    </div>
  );
};

export default Skill;
