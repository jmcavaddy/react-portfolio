import React, { useState } from "react";
import NavTabs from "./NavTabs";


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
