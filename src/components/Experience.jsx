const Experience = ({ experience }) => {
  return (
    <section className="mb-4">
      <h3 className="border-bottom pb-2">Work Experience</h3>
      {experience.map((exp, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            <h4 className="card-title">{exp.title} - {exp.company}</h4>
            <h6 className="card-subtitle mb-2 text-muted">{exp.period}</h6>
            <ul className="card-text">
              {exp.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience; 