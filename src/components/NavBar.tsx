import React, { useState } from "react";
import "./NavBar.css";
interface INavbarProps {
  title: string;
}

const Navbar: React.FC<INavbarProps> = ({ title }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        {title}
      </a>
      <button className="navbar-toggler" type="button" onClick={toggleExpanded}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${expanded ? "show" : ""}`}
        id="navbar-nav"
      >
        <button
          className="btn btn-primary my-2 my-lg-0 d-block mr-20 ml-auto"
          id="expand-button"
          type="button"
          onClick={toggleExpanded}
        >
          Expand
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
