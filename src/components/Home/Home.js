import React, { useState, useEffect } from "react";

import Dropdown from "react-bootstrap/Dropdown";
import "./Home.css";
import MarketDataTable from "./MarketDataTable";

const Home = () => {
  const [marketData, setMarketData] = useState([]);
  useEffect(() => {
    // Dummy data for testing
    const dummyData = [
      { Tradingsymbol: "ABC", LTP: 10.5, volume: 100, impliedVolatility: 0.3 },
      { Tradingsymbol: "XYZ", LTP: 20.5, volume: 200, impliedVolatility: 0.5 },
    ];
    setMarketData(dummyData);
  }, []);

  return (
    <>
      <h3 className="optionChain">Option Chain (Equity Derivatives)</h3>
      <hr className="hr1"></hr>
      <div className="dropDown">
        <div className="container1">
          <p>View options Contract For</p>
          <Dropdown className="d-inline mx-2">
            <Dropdown.Toggle id="dropdown-autoclose-true" variant="primary">
              Default Dropdown
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              <Dropdown.Divider />
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <span className="span1">OR</span>

        <div className="container1">
          <p>Select Symbol</p>
          <Dropdown className="d-inline mx-2">
            <Dropdown.Toggle id="dropdown-autoclose-true" variant="primary">
              Default Dropdown
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              <Dropdown.Divider />
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="container1">
          <p>Expiry Date</p>
          <Dropdown className="d-inline mx-2">
            <Dropdown.Toggle id="dropdown-autoclose-true" variant="primary">
              Default Dropdown
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              <Dropdown.Divider />
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <span className="span1">OR</span>

        <div className="container1">
          <p>Strike Rate</p>
          <Dropdown className="d-inline mx-2">
            <Dropdown.Toggle id="dropdown-autoclose-true" variant="primary">
              Default Dropdown
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              <Dropdown.Divider />
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <div>
        <h1>Market Data</h1>
        <MarketDataTable data={marketData} />
      </div>
    </>
  );
};

export default Home;
