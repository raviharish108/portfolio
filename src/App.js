import React from "react";
import "./App.css";
import { Navbar } from './components/navbar/navbar';
import { Menu } from './components/menubar/menu';
import { Intro } from './components/intro/intro';
import { useState } from 'react';
import { Skills } from "./components/skills/skills";
import { Works } from "./components/works/works";
import { Contact } from "./components/contact/contacts";
function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  return (
   <div className="app">
     <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="section">
      <Intro/>
      <Skills/>
     <Works/>
     <Contact/>
     </div>
   </div>
  );
}

export default App;
