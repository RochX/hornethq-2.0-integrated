import React from 'react';
import './NavBar.css';
import './App.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="space-between">General Search</span>
       <div className="nav-item dropdown"> 
       Major
        <div className="dropdown-content">
          <a href="https://anso.kzoo.edu/curriculum/requirements/">Anthropology and Sociology</a><br />
          <a href="https://www.kzoo.edu/catalog/academic-programs/art-and-art-history/">Art History</a><br />
          <a href="https://biology.kzoo.edu/requirements/">Biology</a><br />
          <a href="https://www.kzoo.edu/catalog/academic-programs/chemistry-and-biochemistry/">Biochemistry</a><br />
          <a href="https://econbusn.kzoo.edu/student-information/requirements/">Business</a><br />
          <a href="https://www.kzoo.edu/catalog/academic-programs/chemistry-and-biochemistry/">Chemistry</a><br />
          <a href="https://www.kzoo.edu/catalog/academic-programs/classics/">Classics</a><br />
          <a href="https://www.kzoo.edu/catalog/academic-programs/classics/">Classical Civilization</a><br />
          <a href="https://computerscience.kzoo.edu/requirements/courses/course-sequence-for-majors/">Computer Science</a> <br />
          <a href="https://criticalethnicstudies.kzoo.edu/the-major/requirements/">Critical Ethnic Studies</a><br />
          <a href="https://eas.kzoo.edu/requirements/">East Asian Studies</a><br />
          <a href="https://econbusn.kzoo.edu/student-information/requirements/">Economics</a><br />
          <a href="https://english.kzoo.edu/information-for-students/major-and-minor-requirements/">English</a><br />
          <a href="https://french.kzoo.edu/requirements/">French and Francophone Studies</a><br />
          <a href="https://german.kzoo.edu/requirements/">German</a><br />
          <a href="https://www.kzoo.edu/catalog/academic-programs/classics/">Greek</a><br />
          <a href="https://history.kzoo.edu/requirements/">History</a><br />
          <a href="https://www.kzoo.edu/catalog/academic-programs/classics/">Latin</a><br />
          <a href="https://mathematics.kzoo.edu/requirements/requirements-for-the-major-or-minor/">Mathematics</a><br />
          <a href="https://music.kzoo.edu/academics/music-majors-minors/">Music</a><br />
          <a href="https://philosophy.kzoo.edu/major-and-minor-requirements/requirements-for-the-major-in-philosophy/">Philosophy</a><br />
          <a href="https://physics.kzoo.edu/physics-programs/physics-major-requirements/">Physics</a><br />
          <a href="https://www.kzoo.edu/catalog/academic-programs/political-science/">Political Science</a><br />
          <a href="https://www.kzoo.edu/catalog/academic-programs/psychology/">Psychology</a><br />
          <a href="https://religion.kzoo.edu/stuinfo/course-requirements/">Religion</a><br />
          <a href="https://spanish.kzoo.edu/requirements/majorandminor/">Spanish Language and Literature</a><br />
          <a href="https://www.kzoo.edu/catalog/academic-programs/art-and-art-history/">Studio Art</a><br />
          <a href="https://theatre.kzoo.edu/academics/current-students/requirements/">Theatre Arts</a><br />
          <a href="https://wgs.kzoo.edu/studentinfo/requirements/">Women, Gender, and Sexuality</a>
          
        </div>
      </div>
      <div className="nav-item dropdown">
        Minor
        <div className="dropdown-content">
          <a href="https://anso.kzoo.edu/curriculum/requirements/">Anthropology and Sociology</a><br />
          <a href="https://www.kzoo.edu/catalog/academic-programs/art-and-art-history/">Art History</a><br />
          <a href="https://www.kzoo.edu/catalog/academic-programs/classics/">Classics</a><br />
          <a href="https://www.kzoo.edu/catalog/academic-programs/classics/">Classical Civilization</a><br />
          <a href="https://computerscience.kzoo.edu/requirements/courses/course-sequence-for-minors/">Computer Science</a> <br />
          <a href="https://english.kzoo.edu/information-for-students/major-and-minor-requirements/">English</a><br />
          <a href="https://french.kzoo.edu/requirements/">French and Francophone Studies</a><br />
          <a href="https://german.kzoo.edu/requirements/">German</a><br />
          <a href="https://www.kzoo.edu/catalog/academic-programs/classics/">Greek</a><br />
          <a href="https://history.kzoo.edu/requirements/">History</a><br />
          <a href="https://ias.kzoo.edu/major-minor-requirements/">International Area Studies</a><br />
          <a href="https://www.kzoo.edu/catalog/academic-programs/japanese/">Japanese</a><br />
          <a href="https://www.kzoo.edu/catalog/academic-programs/classics/">Latin</a><br />
          <a href="https://mathematics.kzoo.edu/requirements/requirements-for-the-major-or-minor/">Mathematics</a><br />
          <a href="https://music.kzoo.edu/academics/music-majors-minors/">Music</a><br />
          <a href="https://philosophy.kzoo.edu/major-and-minor-requirements/minor/">Philosophy</a><br />
          <a href="https://physics.kzoo.edu/physics-programs/physics-major-requirements/">Physics</a><br />
          <a href="https://www.kzoo.edu/catalog/academic-programs/political-science/">Political Science</a><br />
          <a href="https://www.kzoo.edu/catalog/academic-programs/psychology/">Psychology</a><br />
          <a href="https://religion.kzoo.edu/stuinfo/course-requirements/">Religion</a><br />
          <a href="https://spanish.kzoo.edu/requirements/majorandminor/">Spanish Language and Literature</a><br />
          <a href="https://www.kzoo.edu/catalog/academic-programs/art-and-art-history/">Studio Art</a><br />
          <a href="https://theatre.kzoo.edu/academics/current-students/requirements/">Theatre Arts</a>
          
          
        </div>
      </div>
      <div className="nav-item dropdown">
        Concentration
        <div className="dropdown-content">
          <a href="https://www.kzoo.edu/catalog/academic-programs/african-studies/">African Studies</a><br />
          <a href="https://www.kzoo.edu/catalog/academic-programs/american-studies-2/">American Studies</a><br />
          <a href="https://www.kzoo.edu/catalog/academic-programs/biological-physics/">Biological Physics</a><br />
          <a href="https://www.kzoo.edu/catalog/academic-programs/community-and-global-health/">Community and Global Health</a><br />
          <a href="https://criticaltheory.kzoo.edu/requirements/">Critical Theory</a><br />
          <a href="https://environmentalstudies.kzoo.edu/requirements/">Environmental Studies</a><br />
          <a href="https://filmandmediastudies.kzoo.edu/program-information-requirements/">Film and Media Studies</a><br />
          <a href="https://jewishstudies.kzoo.edu/student-information/requirements/">Jewish Studies</a><br />
          <a href="https://www.kzoo.edu/catalog/academic-programs/neuroscience/">Neuroscience</a><br />
          <a href="https://www.kzoo.edu/catalog/academic-programs/public-policy-and-urban-affairs/">Public Policy and Urban Affairs</a><br />
          <a href="https://wgs.kzoo.edu/studentinfo/requirements/">Women, Gender, and Sexuality</a>

        </div>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search for Courses" />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Navbar;
