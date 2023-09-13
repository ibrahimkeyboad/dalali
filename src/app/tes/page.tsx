'use client';

import React, { useEffect, useState } from 'react';

interface NavigatorWithConnection extends Navigator {
  connection?: {
    downlink: number;
  };
}

const InternetSpeedMeter: React.FC = () => {
  const [speed, setSpeed] = useState<number | null>(null);

  useEffect(() => {
    const calculateInternetSpeed = () => {
      const nav: NavigatorWithConnection = navigator;
      if (nav && nav.connection) {
        const { downlink } = nav.connection;
        const megabitsPerSecond = downlink * 1024 * 1024;
        setSpeed(megabitsPerSecond);
      }
      console.log(nav);
    };

    calculateInternetSpeed();
  }, []);

  return (
    <div>
      {speed ? (
        <p>Internet Speed: {speed.toFixed(2)} Mbps</p>
      ) : (
        <p>Calculating internet speed...</p>
      )}
    </div>
  );
};

export default InternetSpeedMeter;
