import React from "react";
import "./App.css";
import Person from "./components/Person/Person.jsx";


function App() {
  return (
    <div>
    <Person name="Matias" surname="Salvatore" age="40"/>
    <Person name="Sofia" surname="Pinilla" age="27"/>
    <Person name="Daniel" surname="Miguelez" age="29"/>
    </div>
  );
}

export default App;