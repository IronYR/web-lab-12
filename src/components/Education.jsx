const Education = ({ education }) => {
  return (
    <section className="mb-4">
      <h3 className="border-bottom pb-2">Education</h3>
      <ul className="list-unstyled">
        {education.map((edu, index) => (
          <li key={index} className="mb-3">
            <h4>{edu.degree}</h4>
            <p className="text-muted">{edu.institution}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education; 