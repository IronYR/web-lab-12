const Skills = ({ skills }) => {
  return (
    <section className="mb-4">
      <h3 className="border-bottom pb-2">Skills</h3>
      <ul className="list-inline">
        {skills.map((skill, index) => (
          <li key={index} className="list-inline-item">
            <span className="badge bg-primary">{skill}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills; 