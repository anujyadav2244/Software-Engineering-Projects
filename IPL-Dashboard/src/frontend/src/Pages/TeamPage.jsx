import { React, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailedCard } from '../Components/MatchDetailedCard';
import { MatchSmallCard } from '../Components/MatchSmallCard';

export const TeamPage = () => {
  // const [team, setTeam] = useState({matches: []});
  // const { teamName } = useParams();
  // useEffect(
  //   () => {
  //     const fetchMatches = async () => {
  //       const response = await fetch('http://localhost:8080/team/${teamName}');
  //       const data = await response.json();
  //       console.log(data);
  //     };
  //     fetchMatches();
  //   }, [] In brackets put teamName
  // );

  useEffect(
    () => { //in the useEffect func we cannot pass this async function so we need to make a new function and call it inside the useEffect
      const fetchMatches = async () => {
        const response = await fetch('http://localhost:8080/match/team/Delhi%20Capitals');
        const data = await response.json();
        console.log(data);
      };
      fetchMatches();
    
    });
  return (
    <div className='TeamPage'>
        <h1 className = 'text-4xl font-bold mb-4'>Team Name</h1>
        <MatchDetailedCard />
        <MatchSmallCard />
        <MatchSmallCard />
        <MatchSmallCard />
    </div>
  )
}

    // if (!team || !team.teamName) {
    //   return <h1>Team not found</h1>;

    // }
    return (
      <div className="TeamPage">
        <div className = " text-lg" key={matches[0].id}>
          <h1 className="text-4xl font-bold mt-10 mb-4">{matches[0].team1}</h1>
        </div>
        <h3  className = 'text-2xl font-bold mb-4 '>Latest Matches</h3>
        {matches.slice(0,1).map((match) => (
          <MatchDetailedCard key={match.id} match={match}/> 
          // teamName={team.teamName} add this in the above line
        ))}
        {/* {matches.slice(1,4).map((match,index) => (
          <MatchSmallCard key={match.id} match={match}/> 
          // teamName={team.teamName} add this in the above line
        ))} */}
        {matches.slice(1,4).map((match,index) => (
          <MatchSmallCard key={`${match.id}-${index}`} match={match}/> 
          // teamName={team.teamName} add this in the above line
        ))}
        {/*
        <MatchSmallCard />
        <MatchSmallCard />  */}
      </div>
    );
  
