import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Modern from './pages/Modern';
import ProjectList from './pages/ProjectList';
import ProjectDetail from './pages/ProjectDetail';
import Sidebar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [personalInfo] = useState({
    name: "Yousuf Rehan",
    title: "Software Engineer",
    email: "yr@yousufrehan.com",
    phone: "+92 3360481398",
    about: "Junior studying Software Engineering @ SEECS Islamabad",
    image: "image copy.png"
  });

  const [education] = useState([
    {
      degree: "BESE",
      institution: "NUST-SEECS, Pakistan"
    },
    {
      degree: "FSc, Federal Board",
      institution: "Pakistan International School, Al Jubail, Saudi Arabia"
    },
    {
      degree: "Matric, Federal Board",
      institution: "Pakistan International School, Al Jubail, Saudi Arabia"
    }
  ]);

  const [experience] = useState([
    {
      title: "Software Engineer",
      company: "Kaamyaab.pk",
      period: "June 2024 - Present",
      responsibilities: [
        "Developed and maintained web applications using React and Node.js",
        "Collaborated with team to implement new features",
        "Participated in code reviews and agile development processes"
      ]
    }
  ]);

  const [projects] = useState([
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack web application for online shopping",
      technologies: "React, Node.js, MongoDB, Express",
      details: "This project involved developing a full-stack web application for online shopping. It features a user-friendly interface, secure payment processing, and a robust backend."
    },
    {
      id: 2,
      title: "Weather Forecast App",
      description: "A mobile app that provides real-time weather information",
      technologies: "React Native, OpenWeatherMap API",
      details: "A mobile application that shows real-time weather forecasts using OpenWeatherMap API."
    }
  ]);

  const [skills] = useState([
    "JavaScript", "React", "Node.js", "Python", "Git", "SQL", 
    "RESTful APIs", "Agile Methodologies"
  ]);

  const [languages] = useState([
    { name: "English", level: "Fluent" },
    { name: "Urdu", level: "Native" },
    { name: "Arabic", level: "Intermediate" }
  ]);

  return (
    <Router>
      <div>
        <Sidebar />
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                personalInfo={personalInfo}
                education={education}
                experience={experience}
                projects={projects}
                skills={skills}
                languages={languages}
              />
            } 
          />
          <Route 
            path="/modern" 
            element={
              <Modern 
                personalInfo={personalInfo}
                education={education}
                experience={experience}
                projects={projects}
                skills={skills}
                languages={languages}
              />
            } 
          />
          <Route 
            path="/projects" 
            element={<ProjectList projects={projects} />} 
          />
          <Route 
            path="/projects/:id" 
            element={<ProjectDetail projects={projects} />} 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;