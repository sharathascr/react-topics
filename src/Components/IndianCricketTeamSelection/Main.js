import React, { useState } from 'react';
import {playerList} from '../PlayersList';

function Main() {
  const [availablePlayers, setAvailablePlayers]=useState(playerList);
  const [selectedPlayers, setSelectedPlayers]=useState([]);

  const selectPlayer=(player)=>{
    const updateAvailablePlayers=availablePlayers.filter((p)=>p!==player);
    setAvailablePlayers(updateAvailablePlayers);
    setSelectedPlayers([...selectedPlayers, player]);
  }

  const removePlayer=(player)=>{
    const updatedSelectedPlayers=selectedPlayers.filter((p)=>p!==player);
    setSelectedPlayers(updatedSelectedPlayers);
    setAvailablePlayers([...availablePlayers, player]);
  }

  const sortList=(attribute)=>{
    const sortedList=[...availablePlayers].sort((a,b)=> {
      if(a[attribute]>b[attribute]) return 1;
      else if(a[attribute]<b[attribute]) return -1;
      else return 0;
  });
  setAvailablePlayers(sortedList);
  }
  // console.log(playerList)
  return (
    <div className='m-3' style={{backgroundColor:''}}>
        <div>
        <h1><span style={{color:''}}>Indian</span> <span style={{color:''}}>Cricket</span> <span style={{color:''}}>Team</span></h1>
        </div>
        <div className='' style={{display:'flex'}}>
        <div className='m-2'>
          <h3>Available Players</h3>
        <table className='table   mx-auto'>
          <thead>
            <tr key="thead1">
              <th onClick={()=>sortList('name')}>Player</th>
              <th onClick={()=>sortList('type')}>Type</th>
              <th onClick={()=>sortList('battingAvg')}>Batting Average</th>
              <th onClick={()=>sortList('bowlingAvg')}>Bowling Average</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              availablePlayers.map((player, index)=><tr key={index}>
                <td>{player.name}</td>
                <td>{player.type}</td>
                <td>{player.battingAvg}</td>
                <td>{player.bowlingAvg}</td>
                <td><button className='selectBtn' onClick={()=>selectPlayer(player)}>Select</button></td>
              </tr>)
            }
          </tbody>
        </table>
        </div>
        <div className='m-2 '>
          <h3>Selected Players</h3>
          <table className='table '>
            <thead>
              <tr>
              <th>Player</th>
              <th>Type</th>
              <th>Action</th></tr>
            </thead>
            <tbody>
              {selectedPlayers.map((player)=><tr key={player.name}><td>{player.name}</td><td>{player.type}</td><td>
                <button onClick={()=>removePlayer(player)} className='removeBtn'>remove</button></td></tr>)}
            </tbody>
          </table>
        </div>
        </div>
    </div>
  )
}

export default Main
