import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import ListGroup from "./components/ListGroup";
import NitroButton from "./components/Button";
import BugCard from "./components/BugCard";
import Bug from "./components/Bug";
import SearchBar from "./components/SearchBar";
import Bugs from "./bugs.json";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
function App() {
  return (
    <div>
      <NavBar title="Bug Reports Client View" />
      <SearchBar></SearchBar>
      <NitroButton></NitroButton>
    </div>
  );
}

export default App;
