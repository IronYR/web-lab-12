const Languages = ({ languages }) => {
  return (
    <section className="mb-4">
      <h3 className="border-bottom pb-2">Languages</h3>
      <div className="languages">
        {languages.map((lang, index) => (
          <span key={index} className="language">
            {lang.name} ({lang.level})
          </span>
        ))}
      </div>
    </section>
  );
};

export default Languages; 