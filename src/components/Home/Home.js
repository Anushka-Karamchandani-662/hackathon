import React, { useState, useEffect } from 'react';

import MarketDataTable from './MarketDataTable'; // Import the MarketDataTable component

const Home = () => {
  const [marketData, setMarketData] = useState([]);

  useEffect(() => {
    // Fetch market data from the server
    const fetchMarketData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/marketData');
        const data = await response.json();
        setMarketData(data);
      } catch (error) {
        console.log('Error fetching market data:', error);
      }
    };

    fetchMarketData();

    // Set up a timer to fetch market data periodically (optional)
    const timer = setInterval(fetchMarketData, 5000); // Fetch every 5 seconds

    // Clean up the timer and event listener on component unmount
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
     
      <div> { console.log("hiiiii",marketData.length)}
</div>

      <div >
       
        {marketData.length > 0 ? (
          <MarketDataTable dataArray={marketData} />
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </>
  );
};

export default Home;
