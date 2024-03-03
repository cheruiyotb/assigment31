import React, { useState } from 'react';

const WonderMenuItem = ({ name, onHover, onClick, isActive }) => {
  return (
    <li onMouseEnter={onHover} onClick={onClick} className={`wonder-menu-item ${isActive ? 'active' : ''}`}>
      {name}
    </li>
  );
};

const WonderDetails = ({ wonderData }) => {
  const { image, title, description } = wonderData;
  return (
    <div className="wonder-details">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

const WonderMenu = () => {
  const wonders = [
    { name: 'Pyramid', image: 'path/to/pyramid.jpg', title: 'The Great Pyramid of Giza', description: '...' },
    { name: 'Wall', image: 'path/to/wall.jpg', title: 'The Great Wall of China', description: '...' },
    { name: 'Petra', image: 'path/to/petra.jpg', title: 'The Ancient City of Petra', description: '...' },
    { name: 'Christ', image: 'path/to/christ.jpg', title: 'Christ the Redeemer', description: '...' },
    { name: 'Machu', image: 'path/to/machu.jpg', title: 'Machu Picchu', description: '...' },
    { name: 'Chichen', image: 'path/to/chichen.jpg', title: 'Chichen Itza', description: '...' },
    { name: 'Colosseum', image: 'path/to/colosseum.jpg', title: 'The Colosseum', description: '...' },
    { name: 'Taj', image: 'path/to/taj.jpg', title: 'The Taj Mahal', description: '...' },
  ];

  const [selectedWonder, setSelectedWonder] = useState(null);

  const handleHover = (name) => setSelectedWonder(name);
  const handleSelect = (name) => {
    setSelectedWonder(name);
    // Optional: navigate to dedicated page
  };

  return (
    <div className="wonder-menu">
      <ul>
        {wonders.map((wonder) => (
          <WonderMenuItem
            key={wonder.name}
            name={wonder.name}
            onHover={() => handleHover(wonder.name)}
            onClick={() => handleSelect(wonder.name)}
            isActive={selectedWonder === wonder.name}
          />
        ))}
      </ul>
      {selectedWonder && <WonderDetails wonderData={wonders.find((w) => w.name === selectedWonder)} />}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <WonderMenu />
    </div>
  );
}

export default App;



