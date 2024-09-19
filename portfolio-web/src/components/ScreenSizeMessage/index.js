import React, { useState, useEffect } from 'react';
import './index.scss';

const ScreenSizeMessage = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Function to check screen size and set appropriate message
    const checkScreenSize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      if (screenWidth < 1920 && !(screenHeight > 900 && screenHeight < 1200)) {
        setMessage('Please use a larger screen');
      } else if (screenWidth > 2100 && !(screenHeight > 900 && screenHeight < 1200)) {
        setMessage('Please use a smaller screen');
      } else {
        setMessage(''); // Clear message if within the desired range
      }
    };

    // Call the function initially to set the correct message
    checkScreenSize();

    // Add event listener to track screen resize
    window.addEventListener('resize', checkScreenSize);

    // Clean up the event listener when component unmounts
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div>
      {message && <div className="screen-message">{message}</div>}
    </div>
  );
};

export default ScreenSizeMessage;