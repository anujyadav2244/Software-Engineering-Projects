import React from 'react'
import { Link } from 'react-router-dom'

export const MatchSmallCard = ({match}) => { //add the teamName, with the match object
  // if(!match) return null;
  // const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  // const otherTeamRoute = `/teams/${otherTeam}`;
  return (
    <div className='MatchSmallCard'>

          <p key={match.id} className='mb-4 font-bold text-2xl'onClick={()=>{navigate('/TeamRoute')}}>vs {match.team2}</p> 
          {/* on above line add istead of that line add this line <h3>vs <Link to = "{otherTeamRoute}">{otherTeam}</Link></h3> */}
          <p key={match.id} className='mb-4 text-lg'>{match.match_winner} won by {match.win_margin} {match.win_type}</p> 
          {/* here also we need to remove the match.team1 and match.team2 and add the only vs inside the curly braces otherTeam            */}

    </div>
  )
}

