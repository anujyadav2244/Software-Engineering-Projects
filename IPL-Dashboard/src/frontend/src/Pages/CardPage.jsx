import { useState } from "react";
import { Link } from "react-router-dom";

// Import team logos
import MumbaiIndiansLogo from "../assets/logos/mumbai-indians.png";
import ChennaiSuperKingsLogo from "../assets/logos/chennai-super-kings.png";
import RoyalChallengersBengaluruLogo from "../assets/logos/royal-challengers-Bengaluru.png";
import KolkataKnightRidersLogo from "../assets/logos/kolkata-knight-riders.png";
import RajasthanRoyalsLogo from "../assets/logos/rajasthan-royals.png";
import DelhiCapitalsLogo from "../assets/logos/delhi-capitals.png";
import SunrisersHyderabadLogo from "../assets/logos/sunrisers-hyderabad.png";
import PunjabKingsLogo from "../assets/logos/punjab-kings.png";
import LucknowSuperGiantsLogo from "../assets/logos/lucknow-super-giants.png";
import GujaratTitansLogo from "../assets/logos/gujarat-titans.png";
import DeccanChargersLogo from "../assets/logos/deccan-chargers.png";
import PuneWarriorsIndiaLogo from "../assets/logos/pune-warriors.png";
import KochchiTuskersKeralaLogo from "../assets/logos/kochchi-tuskers.png";
import RisingPuneSupergiantsLogo from "../assets/logos/rising-pune-supergiants.png";
import GujaratLionsLogo from "../assets/logos/gujarat-lions.png";
import IPLLogo from "../assets/logos/ipl-logo.png";

// Team Data
const teams = [
  "Mumbai Indians",
  "Chennai Super Kings",
  "Royal Challengers Bengaluru",
  "Kolkata Knight Riders",
  "Rajasthan Royals",
  "Delhi Capitals",
  "Sunrisers Hyderabad",
  "Punjab Kings",
  "Lucknow Super Giants",
  "Gujarat Titans",
];

const oldTeams = [
  "Deccan Chargers",
  "Pune Warriors",
  "Kochi Tuskers Kerala",
  "Rising Pune Supergiants",
  "Gujarat Lions",
];

const teamColors = {
  "Mumbai Indians": "bg-gradient-to-r from-blue-600 to-blue-800",
  "Chennai Super Kings": "bg-gradient-to-r from-yellow-500 to-yellow-700",
  "Royal Challengers Bengaluru": "bg-gradient-to-r from-red-600 to-red-800",
  "Kolkata Knight Riders": "bg-gradient-to-r from-purple-600 to-purple-800",
  "Rajasthan Royals": "bg-gradient-to-r from-pink-600 to-pink-800",
  "Delhi Capitals": "bg-gradient-to-r from-blue-500 to-blue-700",
  "Sunrisers Hyderabad": "bg-gradient-to-r from-orange-500 to-orange-700",
  "Punjab Kings": "bg-gradient-to-r from-red-500 to-red-700",
  "Lucknow Super Giants": "bg-gradient-to-r from-cyan-600 to-cyan-800",
  "Gujarat Titans": "bg-gradient-to-r from-indigo-600 to-indigo-800",
};

const teamLogos = {
  "Mumbai Indians": MumbaiIndiansLogo,
  "Chennai Super Kings": ChennaiSuperKingsLogo,
  "Royal Challengers Bengaluru": RoyalChallengersBengaluruLogo,
  "Kolkata Knight Riders": KolkataKnightRidersLogo,
  "Rajasthan Royals": RajasthanRoyalsLogo,
  "Delhi Capitals": DelhiCapitalsLogo,
  "Sunrisers Hyderabad": SunrisersHyderabadLogo,
  "Punjab Kings": PunjabKingsLogo,
  "Lucknow Super Giants": LucknowSuperGiantsLogo,
  "Gujarat Titans": GujaratTitansLogo,
  "Deccan Chargers": DeccanChargersLogo,
  "Pune Warriors": PuneWarriorsIndiaLogo,
  "Kochi Tuskers Kerala": KochchiTuskersKeralaLogo,
  "Rising Pune Supergiants": RisingPuneSupergiantsLogo,
  "Gujarat Lions": GujaratLionsLogo,
};

// Team Logo Component
const TeamLogo = ({ team }) => {
  const logoSrc = teamLogos[team];

  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-25">
      <img src={logoSrc} alt={`${team} logo`} className="w-full h-50 object-contain transform " />
    </div>
  );
};

// Main Component
export const CardPage = () => {
  const [isOldOpen, setOldOpen] = useState(false);

  return (
    <div className="fixed inset-0 overflow-auto bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="w-full min-h-screen">
        {/* Header */}
        <div className="flex items-center justify-center py-8">
          <img src={IPLLogo} alt="IPL Logo" className="w-16 h-16 rounded-4xl" />
          <h1 className="text-4xl font-bold text-white">IPL Dashboard</h1>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
          {teams.map((team) => (
            <Link
              key={team}
              to={`/teams/${encodeURIComponent(team)}`}
              className={`relative w-full h-52 flex items-center justify-center rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-black ${teamColors[team]}`}
            >
              <TeamLogo team={team} />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative text-white text-center">
                <h3 className="text-xl font-bold">{team}</h3>
              </div>
            </Link>
          ))}

          {!isOldOpen && (
            <button
              onClick={() => setOldOpen(true)}
              className="w-full h-52 p-8 bg-gradient-to-r from-gray-500 to-gray-300 text-black text-center rounded-xl shadow-lg hover:from-gray-400 hover:shadow-black hover:to-black transition-all duration-300 cursor-pointer"
            >
              <span className="text-xl font-semibold">View Legacy Teams</span>
            </button>
          )}

          {isOldOpen &&
            oldTeams.map((team) => (
              <Link
                key={team}
                to={`/teams/${encodeURIComponent(team)}`}
                className="relative w-full h-52 flex items-center justify-center bg-gradient-to-r from-gray-500 to-gray-300 text-black text-center rounded-xl shadow-lg hover:from-gray-400 hover:shadow-black hover:to-gray-800 transition-all duration-300"
              >
                <TeamLogo team={team} />
                <h3 className="relative text-xl font-bold">{team}</h3>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
