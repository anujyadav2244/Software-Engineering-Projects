import {React,useEffect} from 'react'
import { MatchDetailedCard } from '../Components/MatchDetailedCard'
import { MatchSmallCard } from '../Components/MatchSmallCard'

 export const TeamPage = () => {

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

 