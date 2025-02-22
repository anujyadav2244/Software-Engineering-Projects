// import React from 'react';
// import { Link } from "react-router-dom";


// export const MatchDetailedCard = ({ match, teamName }) => {
//   if (!match) return null;

//   // Determine the opponent team dynamically
//   const opponentTeam = match.team1 === teamName ? match.team2 : match.team1;
//   const opponentTeamRoute = `/teams/${opponentTeam}`;

//   return (
//     <div className="MatchDetailedCard">
//       <h3 className = 'text-3xl font-bold mb-4 '>Latest Matches</h3>
      
//       {/* Show the opponent team after "VS" for each match */}
//       <h4 className = "text-5xl font-bold mb-4 ">vs <Link to={opponentTeamRoute} className="text-purple-800 font-bold underline"> {opponentTeam}</Link></h4>
//       <h4 className = "text-3xl font-bold mb-4 ">{match.date}</h4>
//       <h4 className = "text-3xl font-bold mb-4 ">at {match.venue}</h4>
//       <h4 className = "text-2xl font-bold mb-4 ">{match.winner} won by {match.result_margin} {match.result}</h4>

//     </div>
//   );
// };


import React from "react";
import { Link } from "react-router-dom";

export const MatchDetailedCard = ({ match, teamName }) => {
  if (!match) return null;

  const isTeam1 = match.team1 === teamName;
  const opponentTeam = isTeam1 ? match.team2 : match.team1;
  const opponentTeamRoute = `/teams/${opponentTeam}`;

  return (
    <div className="border rounded-lg shadow-lg mb-5 p-6 bg-gray-200 cursor-pointer hover:bg-gray-300 transition-all">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-4 text-black">
          {teamName} vs{" "}
          <Link to={opponentTeamRoute} className="text-purple-950 font-bold underline">
            {opponentTeam}
          </Link>
        </h2>

        <p className="text-lg mb-2 text-gray-700">
          <span className="font-bold">{match.winner}</span> won by {match.result_margin} {match.result}
        </p>

        <p className="text-lg text-gray-600">Venue: {match.venue}</p>
        <p className="text-lg text-gray-600">Date: {match.date}</p>

        <div className="mt-4 p-4 bg-white rounded-lg shadow-md w-full text-center">
          <h3 className="text-xl font-semibold text-gray-800">Match Info</h3>
          <p className="text-gray-600">Toss Winner: {match.toss_winner}</p>
          <p className="text-gray-600">Toss Decision: {match.toss_decision}</p>  
          <p className="text-gray-600">Player Of Match: {match.player_of_match}</p>
        </div>
      </div>
    </div>
  );
};
