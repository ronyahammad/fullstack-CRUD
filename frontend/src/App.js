import React from 'react'
import Navbar from './components/layout/Navbar'
import { BrowserRouter as Router } from "react-router-dom";
export default function App() {

  return (
    <div>
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}
