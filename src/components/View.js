import React, { useState } from 'react';
import Resume from '../pages/Resume';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Header from './Header';
import Footer from './Footer';
import '../styles/View.css';
import projectsDb from '../projectsDb';

export default function View() {
  const [currentPage, setCurrentPage] = useState('About');

//   This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio projects={projectsDb} className="portfolio" />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
        <div className="main container-fluid">
            {/* We are passing the currentPage from state and the function to update it */}
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* Here we are calling the renderPage method which will return a component  */}
            {renderPage()}
            <Footer />
        </div>
  );
}

