// src/ZombieFighter.jsx
import React from 'react';

const ZombieFighter = ({ fighter, onButtonClick, buttonText }) => (
  <li>
    <img src={fighter.img} alt={fighter.name} />
    <h3>{fighter.name}</h3>
    <p>Price: {fighter.price}</p>
    <p>Strength: {fighter.strength}</p>
    <p>Agility: {fighter.agility}</p>
    <button onClick={onButtonClick}>{buttonText}</button>
  </li>
);

export default ZombieFighter;
