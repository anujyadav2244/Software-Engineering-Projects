import React from "react";
import { Link } from "react-router-dom";

export const MatchSmallCard = ({ match, teamName }) => {
  if (!match) return null;

  // Determine the opponent team dynamically
  const isTeam1 = match.team1 === teamName;
  const opponentTeam = isTeam1 ? match.team2 : match.team1;
  const opponentTeamRoute = `/teams/${opponentTeam}`;

  return (
    <div>
      {/* Show searched team on the left and opponent on the right */}
      <h3 className="border rounded-lg shadow-lg mb-5 p-4 bg-gray-200 cursor-pointer">
        <div className="flex flex-col items-center">
        <p className="text-2xl mb-4 text-black">
          {teamName} vs  <Link to={opponentTeamRoute} className="text-purple-950 font-bold underline"> {opponentTeam}</Link></p>
        <p className = "text-lg  mb-4 text-gray-700">{match.winner} won by {match.result_margin} {match.result}</p>
        </div>
      </h3>
    </div>
  );
};

