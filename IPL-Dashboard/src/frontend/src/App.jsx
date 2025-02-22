import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import { TeamPage } from "./Pages/TeamPage";
import { CardPage } from "./Pages/CardPage";
import { MatchPage } from './Pages/MatchPage'
function App() {
  return (
    <div className="p-10 text-left">
      <Router>
        <Routes>
          <Route path="/" element={<CardPage/>}/>
          <Route path="/teams/:teamName" element={<TeamPage />} />
          <Route path="/match-details" element={<MatchPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
