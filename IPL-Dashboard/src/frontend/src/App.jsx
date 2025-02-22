import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import { useState } from "react";
import React from "react";
import "./App.css";
import { TeamPage } from "./Pages/TeamPage";
import { CardPage } from "./Pages/CardPage";
import { MatchPage } from './Pages/MatchPage'
import MatchDetail from "./Components/MatchDetail";
function App() {
  const [match, setMatch] = useState([]);
  return (
    <div className=" text-left">
      <Router>
        <Routes>
          <Route path="/" element={<CardPage/>}/>
          <Route path="/teams/:teamName" element={<TeamPage setMatch={setMatch} />} />
          <Route path="/match" element={<MatchDetail match={match}/>} />
          <Route path="/match-details" element={<MatchPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
