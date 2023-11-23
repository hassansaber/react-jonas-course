import Skill from "./Skill";

const SkillList = () => {
  const skills = [
    {
      name: "HTML & CSS",
      level: "advanced",
      color: "#FF9209",
    },
    {
      name: "React",
      level: "intermediate",
      color: "#66d9e8",
    },
    {
      name: "Express",
      level: "intermediate",
      color: "#37b24d",
    },
    {
      name: "JS",
      level: "advanced",
      color: "#FFC436",
    },
    {
      name: "TS",
      level: "beginner",
      color: "#0c8599",
    },
    {
      name: "Node",
      level: "intermediate",
      color: "#2b8a3e",
    },
  ];

  return (
    <div className="skill-list">
      {skills.map(({ name, level, color }) => (
        <Skill name={name} level={level} color={color} />
      ))}
    </div>
  );
};

export default SkillList;
