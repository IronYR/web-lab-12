import Header from '../components/Header';
import Education from '../components/Education';
import Experience from '../components/Experience';
import ProjectCard from '../components/ProjectCard';
import Skills from '../components/Skills';
import Languages from '../components/Languages';

const Home = ({ personalInfo, education, experience, projects, skills, languages }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Header personalInfo={personalInfo} />

          <section className="row align-items-center mb-4">
            <div className="col-md-3 text-center">
              <img 
                src={personalInfo.image} 
                alt={personalInfo.name} 
                className="img-fluid rounded-circle" 
                style={{ maxWidth: '200px' }} 
              />
            </div>
            <div className="col-md-9">
              <p className="lead">{personalInfo.about}</p>
              <p><i className="bi bi-envelope-fill"></i> Email: {personalInfo.email}</p>
              <p><i className="bi bi-telephone-fill"></i> Phone: {personalInfo.phone}</p>
            </div>
          </section>

          <Education education={education} />
          <Experience experience={experience} />

          <section className="mb-4">
            <h3 className="border-bottom pb-2">Projects</h3>
            <div className="row">
              {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>

          <Skills skills={skills} />
          <Languages languages={languages} />
        </div>
      </div>
    </div>
  );
};

export default Home; 