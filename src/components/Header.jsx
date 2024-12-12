const Header = ({ personalInfo }) => {
  return (
    <header className="text-center my-4">
      <h1 className="display-4">{personalInfo.name}</h1>
      <h2 className="text-muted">{personalInfo.title}</h2>
    </header>
  );
};

export default Header; 