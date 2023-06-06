import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Resume from '../pages/Resume';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';


const Header = ({ currentPage, handlePageChange }) => {
  return (
    <div className="container">
      <header className="d-flex">
          <h1 className="m-0 text-left" style={{ fontSize: '3rem' }}>
            John McAvaddy
          </h1>
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
    </div>
  );
};
  
export default Header;
