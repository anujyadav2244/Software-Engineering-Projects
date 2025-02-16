import React from 'react'
import { Link } from 'react-router-dom'


export const MatchDetailedCard = ({match}) => { //add the teamName, with the match object
  // if(!match) return null;
  // const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  // const otherTeamRoute = `/teams/${otherTeam}`;
  return (
    <div className='MatchDetailedCard'>
      {/* <h3  className = 'text-2xl font-bold mb-4 '>Latest Matches</h3>
      <h4  className = 'text-lg font-bold mb-4'>Match Details</h4> */}
      <h4 key={match.id} className='text-4xl font-bold mb-4' onClick={()=>{navigate('/TeamRoute')}}> vs {match.team2}</h4>
      {/* on above line add istead of that line add this line <h3>vs <Link to = "{otherTeamRoute}">{otherTeam}</Link></h3> */} 
      <h4 key={match.id} className='text-3xl font-bold mb-4'>{match.date}</h4> 
      <h4  className = ' text-2xl font-bold mb-4'>at {match.stadium}</h4>
      <h4  className = '  font-bold text-2xl mb-4'>{match.match_winner} won by {match.win_margin} {match.win_type}</h4>
       {/* On the above line the changes are we need to remove the match.team1 and match.team2 and add the only vs 
       inside the  curly braces otherTeam */}
    </div>
  )
}
