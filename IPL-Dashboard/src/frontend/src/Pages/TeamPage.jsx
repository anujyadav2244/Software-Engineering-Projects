import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import axios from "axios";
import { MatchSmallCard } from "../Components/MatchSmallCard";

export const TeamPage = () => {
  const { teamName } = useParams(); 
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState(null);
  const [year, setYear] = useState("2010");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {  
      try {
        const response = await axios.get(`http://localhost:8080/match/team/${teamName}`);
        console.log("Fetched Data:", response.data);

        const filteredMatches = response.data.filter(
          (match) => match.team1 === teamName || match.team2 === teamName
        );

        setMatches(filteredMatches);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (teamName) fetchMatches();
  }, [teamName]);

  if (loading) {
    return (
      <div className="flex justify-center items-center fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
        <div className="w-12 h-12 border-4 border-rose-400 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
        <h2 className="text-red-500 text-2xl">Error: {error}</h2>
      </div>
    );
  }

  if (matches.length === 0) {
    return (
      <div className="flex justify-center items-center fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
        <h2 className="text-2xl text-gray-300">No matches found for {teamName}.</h2>
      </div>
    );
  }

  const years = Array.from({ length: 2024 - 2008 + 1 }, (_, i) => (2008 + i).toString());

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-y-auto bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white font-poppins">
      <div className="max-w-6xl mx-auto pt-10">
        {/* Team Name */}
        <h1 className="text-6xl font-bold text-center text-rose-400 mb-10 drop-shadow-lg">
          {teamName}
        </h1>

        {/* Year Selection Dropdown */}
        <div className="flex justify-center mb-10">
          <label htmlFor="yearSelect" className="text-lg font-semibold text-gray-300 mr-2">Select Year:</label>
          <select
            id="yearSelect"
            className="p-3 bg-gray-800 text-gray-100 border border-gray-600 rounded-md shadow-md focus:ring-2 focus:ring-rose-400 focus:outline-none"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            {years.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>

        {/* Match Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {matches
            .filter((match) => match.date.includes(year))
            .slice(0, 6)
            .map((match, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-500/30 bg-white/10 backdrop-blur-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-glow hover:bg-white/20"
              >
                <MatchSmallCard match={match} teamName={teamName} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
