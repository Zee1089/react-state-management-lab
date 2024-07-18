// // src/App.jsx

// import { useState, useEffect } from 'react';
// import './App.css';

// // Character component to display a character's details
// const Character = ({ character, onButtonClick, buttonText }) => (
//   <li>
//     <img src={character.img} alt={character.name} />
//     <h3>{character.name}</h3>
//     <p>Price: {character.price}</p>
//     <p>Strength: {character.strength}</p>
//     <p>Agility: {character.agility}</p>
//     <button onClick={onButtonClick}>{buttonText}</button>
//   </li>
// );

// const App = () => {
//   const [team, setTeam] = useState([]);
//   const [money, setMoney] = useState(100);
//   const [totalStrength, setTotalStrength] = useState(0);
//   const [totalAgility, setTotalAgility] = useState(0);
//   const [zombieFighters, setZombieFighters] = useState([
//     {
//       name: 'Survivor',
//       price: 12,
//       strength: 6,
//       agility: 4,
//       img: 'https://via.placeholder.com/150/92c952',
//     },
//     {
//       name: 'Scavenger',
//       price: 10,
//       strength: 5,
//       agility: 5,
//       img: 'https://via.placeholder.com/150/771796',
//     },
//     {
//       name: 'Shadow',
//       price: 18,
//       strength: 7,
//       agility: 8,
//       img: 'https://via.placeholder.com/150/24f355',
//     },
//     {
//       name: 'Tracker',
//       price: 14,
//       strength: 7,
//       agility: 6,
//       img: 'https://via.placeholder.com/150/d32776',
//     },
//     {
//       name: 'Sharpshooter',
//       price: 20,
//       strength: 6,
//       agility: 8,
//       img: 'https://via.placeholder.com/150/1ee8a4',
//     },
//     {
//       name: 'Medic',
//       price: 15,
//       strength: 5,
//       agility: 7,
//       img: 'https://via.placeholder.com/150/66b7d2',
//     },
//     {
//       name: 'Engineer',
//       price: 16,
//       strength: 6,
//       agility: 5,
//       img: 'https://via.placeholder.com/150/56acb2',
//     },
//     {
//       name: 'Brawler',
//       price: 11,
//       strength: 8,
//       agility: 3,
//       img: 'https://via.placeholder.com/150/8985dc',
//     },
//     {
//       name: 'Infiltrator',
//       price: 17,
//       strength: 5,
//       agility: 9,
//       img: 'https://via.placeholder.com/150/392537',
//     },
//     {
//       name: 'Leader',
//       price: 22,
//       strength: 7,
//       agility: 6,
//       img: 'https://via.placeholder.com/150/602b9e',
//     },
//   ]);

//   useEffect(() => {
//     // Calculate total strength and agility
//     const strength = team.reduce((total, character) => total + character.strength, 0);
//     const agility = team.reduce((total, character) => total + character.agility, 0);

//     setTotalStrength(strength);
//     setTotalAgility(agility);
//   }, [team]);

//   const handleAddFighter = (zombieFighter) => {
//     if (money >= zombieFighter.price) {
//       setTeam([...team, zombieFighter]);
//       setMoney(money - zombieFighter.price);
//     } else {
//       console.log('Not enough money');
//     }
//   };

//   const handleRemoveFighter = (index) => {
//     const fighterToRemove = team[index];
//     const newTeam = team.filter((_, i) => i !== index);
//     setTeam(newTeam);
//     setMoney(money + fighterToRemove.price);
//   };

//   return (
//     <>
//       <p>Current money: ${money}</p>
//       {team.length === 0 ? (
//         <p>Pick some team members!</p>
//       ) : (
//         <div>
//           <h2>Team Members:</h2>
//           <ul>
//             {team.map((teamMember, idx) => (
//               <Character
//                 key={idx}
//                 character={teamMember}
//                 onButtonClick={() => handleRemoveFighter(idx)}
//                 buttonText="Remove"
//               />
//             ))}
//           </ul>
//           <p>Total Team Strength: {totalStrength}</p>
//           <p>Total Team Agility: {totalAgility}</p>
//         </div>
//       )}
//       <ul>
//         {zombieFighters.map((zombieFighter, idx) => (
//           <Character
//             key={idx}
//             character={zombieFighter}
//             onButtonClick={() => handleAddFighter(zombieFighter)}
//             buttonText="Add Zombie Fighter"
//           />
//         ))}
//       </ul>
//     </>
//   );
// };

// export default App;
// src/App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import Team from './Team';
import ZombieFighterList from './ZombieFighterList';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]);

  useEffect(() => {
    // Calculate total strength and agility
    const strength = team.reduce((total, fighter) => total + fighter.strength, 0);
    const agility = team.reduce((total, fighter) => total + fighter.agility, 0);

    setTotalStrength(strength);
    setTotalAgility(agility);
  }, [team]);

  const handleAddFighter = (zombieFighter) => {
    if (money >= zombieFighter.price) {
      setTeam([...team, zombieFighter]);
      setMoney(money - zombieFighter.price);
    } else {
      console.log('Not enough money');
    }
  };

  const handleRemoveFighter = (index) => {
    const fighterToRemove = team[index];
    const newTeam = team.filter((_, i) => i !== index);
    setTeam(newTeam);
    setMoney(money + fighterToRemove.price);
  };

  return (
    <>
      <p>Current money: ${money}</p>
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <Team
          team={team}
          handleRemoveFighter={handleRemoveFighter}
          totalStrength={totalStrength}
          totalAgility={totalAgility}
        />
      )}
      <ZombieFighterList fighters={zombieFighters} handleAddFighter={handleAddFighter} />
    </>
  );
};

export default App;
