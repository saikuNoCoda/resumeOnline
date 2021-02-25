import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Heading'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Extra from './components/Extra'
import Achievements from './components/Achievements'

function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <Extra />
    </div>
  );
}

export default App;
