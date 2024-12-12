import ProjectCard from '../components/ProjectCard';

const ProjectList = ({ projects }) => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">My Projects</h2>
      <div className="row">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList; 