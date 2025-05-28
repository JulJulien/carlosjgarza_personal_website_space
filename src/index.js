import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import Homescreen from './homescreen';
import AboutMe from './aboutme';
import Resume from './resume';
import Projects from './projects';
import Designs from './designs';
import Navbar from './navbar';
import reportWebVitals from './reportWebVitals';

function App() {
  const [currentTab, setCurrentTab] = useState('About');

  return (
    <>
      <Navbar setCurrentTab={setCurrentTab} />
        {currentTab === 'About' && <Homescreen />}
        {currentTab === 'About' && <AboutMe />}
        {currentTab === 'Resume' && <Resume />}
        {currentTab === 'Projects' && <Projects />}
        {currentTab === 'Designs' && <Designs />}
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
