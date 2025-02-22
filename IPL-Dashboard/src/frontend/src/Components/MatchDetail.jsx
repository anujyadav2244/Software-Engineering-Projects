import React from 'react';
import { Trophy, Calendar, MapPin, User, Award, Clock } from 'lucide-react';



export default function MatchDetail({ match }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{match.team1} vs {match.team2}</h1>
          <div className="flex items-center justify-center gap-4 text-gray-300">
            <Calendar className="w-5 h-5" />
            <span>{match.date}</span>
            <MapPin className="w-5 h-5 ml-4" />
            <span>{match.venue}, {match.city}</span>
          </div>
        </div>

        {/* Match Result Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Trophy className="w-8 h-8 text-yellow-400" />
            <h2 className="text-2xl font-semibold">
              {match.winner} won by {match.result_margin} {match.result}
            </h2>
          </div>
          {match.target_runs > 0 && (
            <p className="text-center text-gray-300">
              Target: {match.target_runs} runs in {match.target_overs} overs
            </p>
          )}
        </div>

        {/* Match Details Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Match Information</h3>
              <div className="space-y-3">
                <p><span className="text-gray-300">Season:</span> {match.season}</p>
                <p><span className="text-gray-300">Match Type:</span> {match.match_type}</p>
                {match.method !== "NA" && <p><span className="text-gray-300">Method:</span> {match.method}</p>}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Toss Details</h3>
              <div className="space-y-3">
                <p><span className="text-gray-300">Won by:</span> {match.toss_winner}</p>
                <p><span className="text-gray-300">Decision:</span> Chose to {match.toss_decision}</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-yellow-400" />
                <h3 className="text-xl font-semibold">Player of the Match</h3>
              </div>
              <p className="text-lg">{match.player_of_match}</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Match Officials</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <p>Umpire 1: {match.umpire1}</p>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <p>Umpire 2: {match.umpire2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}