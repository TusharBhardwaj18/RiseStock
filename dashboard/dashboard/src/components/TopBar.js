import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <header className="border-bottom bg-white sticky-top shadow-sm">
      <div className="container-fluid px-3 py-2 d-flex flex-column flex-lg-row align-items-center justify-content-between gap-2">
        
        {/* Indices Section */}
        <div className="d-flex align-items-center justify-content-around justify-content-lg-start gap-4 w-100 w-lg-auto border-bottom border-lg-0 pb-2 pb-lg-0 text-secondary small">
          <div className="d-flex gap-2 align-items-center">
            <span className="fw-semibold text-uppercase text-dark">NIFTY 50 </span>
            <span className="text-danger fw-medium">24,350.20</span>
            <span className="badge bg-danger-subtle text-danger">-0.35%</span>
          </div>
          <div className="d-flex gap-2 align-items-center">
            <span className="fw-semibold text-uppercase text-dark">SENSEX </span>
            <span className="text-danger fw-medium">79,980.10</span>
            <span className="badge bg-danger-subtle text-danger">-0.42%</span>
          </div>
        </div>

        {/* Navigation Menu */}
        <Menu />
      </div>
    </header>
  );
};

export default TopBar;