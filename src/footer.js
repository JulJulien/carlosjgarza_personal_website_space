import React from 'react';
import './styles/footer.css';
import { HiMail } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Footer({ currentTab, setCurrentTab }) {
  // Define the tab order
  const tabs = ['About', 'Portfolio', 'Resume', 'Gallery'];
  const currentIndex = tabs.indexOf(currentTab);
  
  // Calculate previous and next tabs with wrapping
  const previousTab = tabs[currentIndex === 0 ? tabs.length - 1 : currentIndex - 1];
  const nextTab = tabs[currentIndex === tabs.length - 1 ? 0 : currentIndex + 1];
  
  const goToPreviousTab = () => {
    setCurrentTab(previousTab);
  };
  
  const goToNextTab = () => {
    setCurrentTab(nextTab);
  };

  return (
    <div className="footer-container">
      <button className="footer-nav-arrow left" onClick={goToPreviousTab} title={`Go to ${previousTab}`}>
        <IoIosArrowBack />
      </button>
      
      <div className="footer-center">
        <a href="mailto:cjulgarza@gmail.com" className="footer-email-link" title="Send Email">
          <HiMail className="footer-email-icon" />
          <span>cjulgarza@gmail.com</span>
        </a>
      </div>
      
      <button className="footer-nav-arrow right" onClick={goToNextTab} title={`Go to ${nextTab}`}>
        <IoIosArrowForward />
      </button>
    </div>
  );
}

export default Footer; 