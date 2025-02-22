import React from 'react';
import { Link } from "react-router-dom";


export const MatchDetailedCard = ({ match, teamName }) => {
  if (!match) return null;

  // Determine the opponent team dynamically
  const opponentTeam = match.team1 === teamName ? match.team2 : match.team1;
  const opponentTeamRoute = `/teams/${opponentTeam}`;

  return (
    <div className="MatchDetailedCard">
      <h3 className = 'text-3xl font-bold mb-4 '>Latest Matches</h3>
      
      {/* Show the opponent team after "VS" for each match */}
      <h4 className = "text-5xl font-bold mb-4 ">vs <Link to={opponentTeamRoute} className="text-purple-800 font-bold underline"> {opponentTeam}</Link></h4>
      <h4 className = "text-3xl font-bold mb-4 ">{match.date}</h4>
      <h4 className = "text-3xl font-bold mb-4 ">at {match.venue}</h4>
      <h4 className = "text-2xl font-bold mb-4 ">{match.winner} won by {match.result_margin} {match.result}</h4>

    </div>
  );
};
