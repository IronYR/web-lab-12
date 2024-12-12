import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <div className="col-md-6 mb-3">
      <div className="card h-100">
        <div className="card-body">
          <h4 className="card-title">{project.title}</h4>
          <p className="card-text">{project.description}</p>
          <p className="card-text">
            <small className="text-muted">Technologies: {project.technologies}</small>
          </p>
          <button 
            className="btn btn-primary"
            onClick={() => navigate(`/projects/${project.id}`)}
          >
            More Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 