import React from "react";

const SkillsCard = ({ icon, title, skills }) => {
  return (
    <div className="relative w-full md:w-60 p-6 bg-[#1E293B] rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 border-2 border-transparent">
      
      {/* Gradient hover effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#20B2F9] to-[#37D8FA] opacity-0 hover:opacity-20 pointer-events-none"></div>

      <div className="relative flex flex-col items-center">
        {/* Icon */}
        <div className="text-5xl mb-4">{icon}</div>

        {/* Title */}
        <h3 className="text-white text-xl font-semibold text-center mb-3">{title}</h3>

        {/* Skills list */}
        <ul className="text-gray-300 text-center space-y-1">
          {skills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillsCard;
