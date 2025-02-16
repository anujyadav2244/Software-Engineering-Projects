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

  const MatchList = () => {
    const matches = [
      {
        id: 335982,
        date: "18-04-2008",
        city: "Bangalore",
        team1: "Royal Challengers Bangalore",
        team2: "Kolkata Knight Riders",
        match_winner: "Kolkata Knight Riders",
        win_type: "runs",
        win_margin: 140,
        player_of_match: "BB McCullum",
        stadium: "M Chinnaswamy Stadium",
      },
      {
        id: 335983,
        date: "19-04-2008",
        city: "Chandigarh",
        team1: "Kings XI Punjab",
        team2: "Chennai Super Kings",
        match_winner: "Chennai Super Kings",
        win_type: "runs",
        win_margin: 33,
        player_of_match: "MEK Hussey",
        stadium: "Punjab Cricket Association Stadium, Mohali",
      },
      {
        id: 335984,
        date: "19-04-2008",
        city: "Delhi",
        team1: "Delhi Daredevils",
        team2: "Rajasthan Royals",
        match_winner: "Rajasthan Royals",
        win_type: "wickets",
        win_margin: 9,
        player_of_match: "MF Maharoof",
        stadium: "Feroz Shah Kotla",
      },
      {
        id: 335990,
        date: "24-04-2008",
        city: "Hyderabad",
        team1: "Deccan Chargers",
        team2: "Mumbai Indians",
        match_winner: "Mumbai Indians",
        win_type: "wickets",
        win_margin: 3,
        player_of_match: "YK Pathan",
        stadium: "Rajiv Gandhi International Stadium, Uppal",
      }
    ];

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
  };

  return <MatchList />;
};
