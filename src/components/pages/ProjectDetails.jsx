import { useParams } from "react-router-dom";
import { projects } from "../../constants/index";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-xl">
        Project not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary px-4 sm:px-20 py-10 text-white text-center">
      <h1 className="relative text-4xl font-bold mb-6 inline-block">
      {project.name}
      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-full h-[3px] bg-[#915EFF] mt-2 rounded-full"></span>
      </h1>
{project.note && (
      <div className="bg-yellow-100 rounded-full text-yellow-900 px-4 py-1 text-center font-semibold border-b border-yellow-300 animate-pulse">
      {project.note}
    </div>
    )}
      <img
        src={project.image}
        alt={project.name}
        className="rounded-xl w-full  mb-8"
      />

<div className="">
      <div className="text-lg mb-4">
        <h2 className="font-semibold text-2xl mb-2">Description:</h2>
        <p className="text-secondary">{project.description}</p>
      </div>

      <div className="text-lg mb-4">
        <h2 className="font-semibold text-2xl mb-2">What I Did:</h2>
        <p className="text-secondary">{project.whatIDid}</p>
      </div>

      <div className="text-lg mb-4">
        <h2 className="font-semibold text-2xl mb-2">My Role:</h2>
        <p className="text-secondary">{project.myRole}</p>
      </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-6">
        {project.livePreview && (
          <a
            href={project.livePreview}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#915EFF] text-white px-4 py-2 rounded hover:opacity-90 transition"
          >
            🔗 Live Preview
          </a>
        )}
        {project.source_code_link && (
          <a
            href={project.source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-4 py-2 rounded hover:opacity-90 transition"
          >
            💻 GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
