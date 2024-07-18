// src/ZombieFighterList.jsx
import React from 'react';
import ZombieFighter from './ZombieFighter';

const ZombieFighterList = ({ fighters, handleAddFighter }) => (
  <ul>
    {fighters.map((fighter, idx) => (
      <ZombieFighter
        key={idx}
        fighter={fighter}
        onButtonClick={() => handleAddFighter(fighter)}
        buttonText="Add Zombie Fighter"
      />
    ))}
  </ul>
);

export default ZombieFighterList;
