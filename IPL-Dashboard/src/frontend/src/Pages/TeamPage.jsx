import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailedCard } from '../Components/MatchDetailedCard';
import { MatchSmallCard } from '../Components/MatchSmallCard';

export const TeamPage = () => {
  const [team, setTeam] = useState(null);
  const { teamName } = useParams();

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch("http://localhost:8080/match/team/Lucknow%20Supergiants");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setTeam(data);
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    fetchMatches();
  }, [teamName]);

  if (!team) {
    return <h1 className="text-center text-2xl">Team not found</h1>;
  }

  return (
    <div className='TeamPage'>
      <h1 className='text-4xl font-bold mb-4'>{team.teamName}</h1>
      <h3 className='text-2xl font-bold mb-4'>Latest Matches</h3>

      {team.matches.length > 0 && (
        <MatchDetailedCard match={team.matches[0]} />
      )}

      {team.matches.slice(1, 4).map((match, index) => (
        <MatchSmallCard key={`${match.id}-${index}`} match={match} />
      ))}
    </div>
  );
};
