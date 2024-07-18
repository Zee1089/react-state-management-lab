// src/Team.jsx
import React from 'react';
import ZombieFighter from './ZombieFighter';

const Team = ({ team, handleRemoveFighter, totalStrength, totalAgility }) => (
  <div>
    <h2>Team Members:</h2>
    <ul>
      {team.map((teamMember, idx) => (
        <ZombieFighter
          key={idx}
          fighter={teamMember}
          onButtonClick={() => handleRemoveFighter(idx)}
          buttonText="Remove"
        />
      ))}
    </ul>
    <p>Total Team Strength: {totalStrength}</p>
    <p>Total Team Agility: {totalAgility}</p>
  </div>
);

export default Team;
