import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from 'react-particles-js';
import AboutMe from './components/AboutMe';
import Services from './components/Services';

function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                volume_area: 900,
              },
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 6,
                color: '#f9ab00',
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
    </>
  );
}

export default App;
