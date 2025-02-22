// src/App.jsx
import React, { useState } from "react";
import './App.css';
 
const App = () => {
  let zombies = [
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ];

  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState(zombies);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0)

  const handleRemoveFighter = (fighter) => {
    setZombieFighters([...zombieFighters, fighter]);
    setMoney(money + fighter.price);
    setTeam(team.filter(zombie => zombie.id !== fighter.id));
    setTotalStrength(totalStrength - fighter.strength);
    setTotalAgility(totalAgility - fighter.agility);
  }

  const handleAddFighter = (fighter) => {
    if (money < fighter.price) {
      console.log("Not enough money");
      return;
    }

    setTeam([...team, fighter]);
    setMoney(money - fighter.price);
    setZombieFighters(zombieFighters.filter(zombie => zombie.id !== fighter.id));
    setTotalStrength(totalStrength + fighter.strength);
    setTotalAgility(totalAgility + fighter.agility);

  };

  return (
    <>
    <div>
    <h1>Zombie Fighters</h1>
 
        {team.length === 0 ? (
          <>
            
            <h2>Strength: 0</h2>
            <h2>Agility: 0</h2>
            <h2>Team</h2>
            <p>Pick some team members!</p>
          </>
        ) : (
          <>
            <h2>Strength: {totalStrength}</h2>
            <h2>Agility: {totalAgility}</h2>
            <h2>Team</h2>
            {team.map((oneTeam) => (
              <div class= "flexFighter">
              <ul key={oneTeam.id}>
                <li><img src={oneTeam.img} alt={oneTeam.name} /></li>
                <li><strong>{oneTeam.name}</strong></li>
                <li>Price: {oneTeam.price}</li>
                <li>Strength: {oneTeam.strength}</li>
                <li>Agility: {oneTeam.agility}</li>
                <button onClick={() => handleRemoveFighter(oneTeam)}>Remove</button>
              </ul>
              </div>
              
            ))}
          </>
        )}
      </div>
      <div>
        <h2>Fighters</h2>
        {zombieFighters.map((oneZombie) => (
          <div class= "flexFighter">
          <ul key={oneZombie.id}>
            <li><img src={oneZombie.img} alt={oneZombie.name} /></li>
            <li><strong>{oneZombie.name}</strong></li>
            <li>Price: {oneZombie.price}</li>
            <li>Strngth: {oneZombie.strength}</li>
            <li>Agility: {oneZombie.agility}</li>
            <button onClick={() => handleAddFighter(oneZombie)}>Add</button>
          </ul>
          </div>
        ))}
      </div>
      
    </>
  );
};

export default App;
