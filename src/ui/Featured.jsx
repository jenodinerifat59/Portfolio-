import React from "react";
import Duniya from '../image/CodeDuniya.png'
import Omah from '../image/Omah.png'
import SaulDesign from '../image/SaulDesign.png'

const projects = [
  {
    id: 1,
    name: "CodeDuniya",
    description:
      "A modern React & Tailwind web app for online learning, with responsive design, smooth animations, and an easy-to-use interface.",
    image: Duniya ,
    tags: ["React", "Tailwind", "JavaScript"],
    demoLink: "#",
    codeLink: "https://github.com/jenodinerifat59/CodeDuniya",
  },
  {
    id: 2,
    name: "Omah",
    description:
      "Temukan Hunian Keluarga Sesuai Keinginanmu. Menyediakan berbagai pilihan hunian strategis di kota Anda dengan cara yang lebih mudah dan nyaman.",
    image: Omah ,
    tags: ["JavaScript", "CSS", "HTML"],
    demoLink: "https://jenodinerifat59.github.io/Omah/",
    codeLink: "https://github.com/jenodinerifat59/Omah",
  },
  {
    id: 3,
    name: "SaulDesign",
    description:
      "A creative UI design web project showcasing modern, responsive, and visually appealing interface concepts built with contemporary web technologies.",
    image: SaulDesign ,
    tags: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://jenodinerifat59.github.io/SaulDesign/",
    codeLink: "https://github.com/jenodinerifat59/SaulDesign ",
  },
];

const Featured = () => {
  return (
    <section className="bg-[#0d1117] text-white py-16 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        <span className="text-blue-500">Featured</span> Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#161b22] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#0d1117] text-blue-400 text-sm px-3 py-1 rounded-full border border-blue-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <a
                  href={project.demoLink}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                >
                  🔗 Demo
                </a>
                <a
                  href={project.codeLink}
                  className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                >
                  💻 Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
