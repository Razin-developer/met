import { useEffect, useState } from 'react';

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Initial dimensions
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;