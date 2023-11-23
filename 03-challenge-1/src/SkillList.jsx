import Skill from "./Skill";

const SkillList = () => {
  const skills = [
    {
      name: "JS",
      emoji: "😎",
      color: "yellow",
    },
    {
      name: "React",
      emoji: "👽",
      color: "blueviolet",
    },
    {
      name: "TS",
      emoji: "🐄",
      color: "blue",
    },
    {
      name: "Express",
      emoji: "🤑",
      color: "green",
    },
    {
      name: "Node",
      emoji: "💩",
      color: "greenyellow",
    },
  ];

  return (
    <div className="skill-list">
      {skills.map(({ name, emoji, color }) => (
        <Skill name={name} emoji={emoji} color={color} />
      ))}
    </div>
  );
};

export default SkillList;
