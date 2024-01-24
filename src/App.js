import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './font.css';

function Header({ isDarkMode, toggleDarkMode }) {
  const [prevIsDarkMode, setPrevIsDarkMode] = useState(isDarkMode);

  useEffect(() => {
    setPrevIsDarkMode(isDarkMode);
  }, [isDarkMode]);

  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <h1 style={{fontFamily:'BlackOpsOne'}}>My CV</h1>
      <div className="form-check form-switch" style={{ marginLeft: '10px' , fontFamily:'BlackOpsOne'}}>
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          {prevIsDarkMode ? 'Dark mode' : 'Light mode' }
        </label>
      </div>
    </header>
  );
}

function AboutMe () {
    return (
      <section>
        <h2 style={{fontFamily: 'BlackOpsOne'}}>About Me</h2>
        <img src="/NOZD0388.jpg" class="img-thumbnail" alt="..." style={{ width: '200px', height: '200px' }}></img>
        <p className="paragraph" style={{fontFamily: 'IBMPlexMono_Regular'}}>
          Ngo Hai My <br/>
          Date of birth: 03/10/2004 <br/>
          Sex: Female <br/>
          Phonenumber: 0335887094 <br/>
          Address: 285/49 Le Van Quoi street, Binh Tan district <br/>
        </p>
      </section>
    );
  };
function CareerGoals ({ items }) {
  return (
    <section>
      <h2 style={{fontFamily: 'BlackOpsOne'}}>Career Goals</h2>
      <ul style={{fontFamily: 'IBMPlexMono_Regular'}}>
      {/* Sử dụng map để liệt kê các mục trong mảng */}
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    </section>
  )
}

  function Education ()  {
    return (
      <section>
        <h2 style={{fontFamily:'BlackOpsOne'}}>Education</h2>
        <div>
          <h3 style={{fontFamily:'IBMPlexMono_Bold'}}> iSpace college</h3>
          <p style={{fontFamily:'IBMPlexMono_Regular'}}>[Degree], [Graduation Year]</p>
        </div>
      </section>
    );
  };

  function Experience () {
    return (
      <section>
        <h2 style={{fontFamily:'BlackOpsOne'}}>Experience</h2>
        <div>
          <h3 style={{fontFamily:'IBMPlexMono_Bold'}}>[Company Name]</h3>
          <p style={{fontFamily:'IBMPlexMono_Regular'}}>[Job Title], [Start Date] - [End Date]</p>
          <p style={{fontFamily:'IBMPlexMono_Regular'}}>[Description of your responsibilities and achievements]</p>
        </div>
      </section>
    );
  }
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  
  const aboutme ={};
  const education ={};
  const items= [
     'Practise skill',
     'Accumulated experience',
     'Have a stable job'
  ];

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div class="row">
        <div class="col">
      <AboutMe aboutme={aboutme}/>
      <CareerGoals items={items} />
      </div>
      <div class="col">
      <Education education={education} />
      <Experience />
      </div>
      {/* Add more components as needed */}
    </div>
    </div>

    
  );
}

export default App;
