import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import Homescreen from './homescreen';
import AboutMe from './aboutme';
import Resume from './resume';
import Portfolio from './portfolio';
import Navbar from './navbar';
import Footer from './footer';
import reportWebVitals from './reportWebVitals';
import Gallery from './gallery';

<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />



// Smooth scroll
window.scrollTo({
  top: 0,
  behavior: 'smooth'
});


function App() {
  const [currentTab, setCurrentTab] = useState('About');

  // Add useEffect to handle smooth scrolling when tab changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [currentTab]); // This will run whenever currentTab changes
 
  return (
    <>
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
        {currentTab === 'About' && <Homescreen />}
        {currentTab === 'About' && <AboutMe />}
        {currentTab === 'Resume' && <Resume />}
        {currentTab === 'Portfolio' && <Portfolio />}
        {currentTab === 'Gallery' && <Gallery />}
      <Footer currentTab={currentTab} setCurrentTab={setCurrentTab} />
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
