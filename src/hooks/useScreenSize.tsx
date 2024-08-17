import { useEffect, useState } from 'react';

const useScreenSize = (minWidth: number) => {
  const [isScreenLarge, setIsScreenLarge] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenLarge(window.innerWidth >= minWidth);
    };

    // Initial check
    handleResize();

    // Set up event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [minWidth]);

  return isScreenLarge;
};

export default useScreenSize;
