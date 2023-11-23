const Skill = ({ name, color, level }) => {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{name}</span>
      <span>
        {level === "advanced" && " 💪"}
        {level === "intermediate" && "👍"}
        {level === "beginner" && " 👶"}
      </span>
    </div>
  );
};

export default Skill;
