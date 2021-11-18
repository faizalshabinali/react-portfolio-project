import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Particles from 'react-particles-js';

function App() {
  return (
    <>
      <Navbar />
      <Particles
        className='particles-canvas'
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 4,
                color: '#f9ab00',
              },
            },
          },
        }}
      />
      <Header />
    </>
  );
}

export default App;

// https://youtu.be/vD72tRK8mC4
