import { useState } from 'react';
import Languages from '../components/Languages';
import Experience from '../components/Experience';
import ProjectCard from '../components/ProjectCard';
const Modern = ({ personalInfo, education, experience, projects, skills, languages }) => {
  return (
    <div className="container my-5">
      <section id="about" className="text-center mb-5">
        <img 
          src={personalInfo.image} 
          alt={personalInfo.name} 
          className="img-fluid rounded-circle mb-3" 
          style={{ maxWidth: '150px' }}
        />
        <h1 className="display-4">{personalInfo.name}</h1>
        <h2 className="text-muted">{personalInfo.title}</h2>
        <p className="lead">{personalInfo.about}</p>
        <p>Email: {personalInfo.email} | Phone: {personalInfo.phone}</p>
      </section>

      <section id="education" className="mb-5">
        <h3 className="border-bottom pb-2">Education</h3>
        <div className="accordion" id="educationAccordion">
          {education.map((edu, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button 
                  className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target={`#collapse${index}`}
                >
                  {edu.degree}
                </button>
              </h2>
              <div 
                id={`collapse${index}`}
                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                data-bs-parent="#educationAccordion"
              >
                <div className="accordion-body">
                  {edu.institution}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Experience experience={experience} />
      <section className="mb-4">
            <h3 className="border-bottom pb-2">Projects</h3>
            <div className="row">
              {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
      <section id="skills" className="mb-5">
        <h3 className="border-bottom pb-2">Skills</h3>
        <div className="row">
          {skills.map((skill, index) => (
            <div className="col-md-3 mb-3" key={index}>
              <div className="progress">
                <div 
                  className="progress-bar bg-primary" 
                  role="progressbar" 
                  style={{ width: `${90 - (index * 5)}%` }}
                >
                  {skill}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Languages languages={languages} />

    </div>
  );
};

export default Modern; 