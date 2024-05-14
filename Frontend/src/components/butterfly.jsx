import React, { useState, useEffect } from 'react';
import butterfly from '/public/butterfly2.gif'

const MovingGif = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 , z: 1});
  const [moving, setMoving] = useState(true);

  const getRandomPosition = () => ({
    x: Math.floor(Math.random() * window.innerWidth),
    y: Math.floor(Math.random() * window.innerHeight),
  });

  const moveGif = () => {
    if (moving) {
      setPosition(getRandomPosition());
      setTimeout(moveGif, Math.floor(Math.random() * 1000) + 500); // Random interval
    }
  };

  const handleClick = () => {
    setMoving(false);
  };

  useEffect(() => {
    moveGif(); // Start the movement when the component mounts
    window.addEventListener('click', handleClick);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('click', handleClick);
    };
  }, []); // Empty dependency array ensures that useEffect runs only once during component mount

  return (
    <>
    <div
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <img
        src={butterfly} // Replace with the URL of your GIF
        alt="Moving Gif"
        style={{ width: '5vw', height: '5vh' }} // Adjust the size as needed
      />
    </div>
    <div
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <img
        src={butterfly} // Replace with the URL of your GIF
        alt="Moving Gif"
        style={{ width: '5vw', height: '5vh' }} // Adjust the size as needed
      />
    </div>
    </>
  );
};

export default MovingGif;
