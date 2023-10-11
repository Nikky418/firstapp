import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import ToDoList from './Components/ToDoList'
import Navagation from './Components/Navagation';


function App() {
  return (
    <Router>
      <div>
        <Navagation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contact/>} />
          <Route path="/todolist" element={<ToDoList/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;