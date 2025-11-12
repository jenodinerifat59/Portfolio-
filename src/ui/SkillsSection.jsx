import React from "react";
import SkillsCard from "../component/SkillsCard;.jsx";

// Placeholder icons using emojis
const skillsData = [
  { title: "Languages", skills: ["HTML5", "CSS3", "JavaScript"], icon: "🌐" },
  { title: "Frameworks", skills: ["React", "Tailwind CSS", "Bootstrap"], icon: "⚛️" },
  { title: "Tools", skills: ["Git", "GitHub", "VS Code"], icon: "🛠️" },
  { title: "Design", skills: ["Responsive Design", "UI/UX", "Figma", "CSS Grid/Flexbox"], icon: "🎨" },
];

const SkillsSection = () => {
  return (
    <section className="py-16 bg-[#0C1B33] flex flex-col items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">
          Skills & Technologies
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {skillsData.map((item, index) => (
            <SkillsCard
              key={index}
              title={item.title}
              skills={item.skills}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
