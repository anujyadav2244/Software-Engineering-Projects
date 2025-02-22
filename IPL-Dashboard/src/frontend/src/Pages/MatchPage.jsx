import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MatchDetailedCard } from "../Components/MatchDetailedCard";
import { MatchSmallCard } from "../Components/MatchSmallCard";

export const MatchPage = () => {
    const { teamName, season } = useParams();
    const [matches, setMatches] = useState([]);
    const [error, setError] = useState(null);
  
    // Debugging useEffect to check URL parameters
    useEffect(() => {
      console.log("URL Params:", { teamName, season });
    }, [teamName, season]);
  
    useEffect(() => {
      const fetchMatches = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/match/team/${teamName}/season/${season}`);
          console.log("Fetched Data:", response.data);
  
          if (!Array.isArray(response.data)) {
            throw new Error("Invalid data format received");
          }
  
          const filteredMatches = response.data.filter(
            (match) => match.team1 === teamName || match.team2 === teamName
          );
  
          setMatches(filteredMatches);
        } catch (err) {
          console.error("Error fetching data:", err);
          setError(err.message);
        }
      };
  
      if (teamName && season) fetchMatches();
    }, [teamName, season]);
  
    if (error) {
      return <h2 className="text-red-500">Error: {error}</h2>;
    }
  
    if (matches.length === 0) {
      return <h2 className="text-xl">No matches found for {teamName} in season {season}.</h2>;
    }
  
    return (
      <div className="MatchPage">
        <h1 className="text-5xl font-bold mb-4">{teamName}</h1>
  
        {matches.map((match, index) => (
          <MatchDetailedCard key={index} match={match} teamName={teamName} />
        ))}
  
        {matches.slice(1, 4).map((match, index) => (
          <MatchSmallCard key={index} match={match} teamName={teamName} />
        ))}
      </div>
    );
  };
