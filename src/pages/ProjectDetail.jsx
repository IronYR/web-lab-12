import { useParams, useNavigate } from 'react-router-dom';

const ProjectDetail = ({ projects }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div className="container mt-4">Project not found</div>;
  }

  return (
    <div className="container mt-4">
      <button 
        className="btn btn-secondary mb-3"
        onClick={() => navigate('/projects')}
      >
        Back to Projects
      </button>
      
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{project.title}</h2>
          <p className="card-text">{project.description}</p>
          
          <h4>Technologies Used</h4>
          <p className="card-text">{project.technologies}</p>
          
          <h4>Details</h4>
          <p className="card-text">{project.details}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail; 