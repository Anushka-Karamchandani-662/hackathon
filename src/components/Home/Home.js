import React, { useState, useEffect } from "react";

import Dropdown from "react-bootstrap/Dropdown";
import "./Home.css";
import MarketDataTable from "./MarketDataTable";

const net = require("net");
const serverAddress = "localhost";
const serverPort = 1025;

const Home = () => {
  // const [marketData, setMarketData] = useState([]);
  // useEffect(() => {
  //   // Dummy data for testing
  //   const dummyData = [
  //     { Tradingsymbol: "ABC", LTP: 10.5, volume: 100, impliedVolatility: 0.3 },
  //     { Tradingsymbol: "XYZ", LTP: 20.5, volume: 200, impliedVolatility: 0.5 },
  //   ];
  //   setMarketData(dummyData);
  // }, []);

  const [marketData, setMarketData] = useState([]);

  useEffect(() => {
    const clientSocket = new net.Socket();

    clientSocket.connect(serverPort, serverAddress, () => {
      console.log("Connected to the server.");
      clientSocket.write(Buffer.from([0x01]));
      console.log("Sent initial request.");
    });

    clientSocket.on("data", (response) => {
      const packet = response.toString();
      const fields = packet.split(",");

      const Tradingsymbol = fields[1];
      const LTP = parseFloat(fields[4]);
      const volume = parseInt(fields[6]);

      const optionPrice = LTP;
      const strikePrice = fields[7];
      const timeToExpiration = 30 / (365 * 24 * 60 * 60);
      const riskFreeRate = 0.05;
      const currentPrice = LTP;
      const optionType = "CALL";

      const impliedVolatility = calculateImpliedVolatility(
        optionPrice,
        strikePrice,
        timeToExpiration,
        riskFreeRate,
        currentPrice,
        optionType
      );

      const newData = {
        Tradingsymbol,
        LTP,
        volume,
        impliedVolatility,
      };

      setMarketData((prevData) => [...prevData, newData]);
    });

    clientSocket.on("close", () => {
      console.log("Connection closed.");
    });

    return () => {
      clientSocket.destroy();
    };
  }, []);

  function calculateImpliedVolatility(
    optionPrice,
    strikePrice,
    timeToExpiration,
    riskFreeRate,
    currentPrice,
    optionType
  ) {
    const S = currentPrice; // Current price of the underlying asset
    const K = strikePrice; // Strike price of the option
    const T = timeToExpiration; // Time to expiration in years
    const r = riskFreeRate; // Risk-free interest rate
    const C = optionPrice; // Option price

    // Black-Scholes formula to calculate implied volatility
    function blackScholesImpliedVolatility(sigma) {
      const d1 =
        (Math.log(S / K) + (r + (sigma * sigma) / 2) * T) /
        (sigma * Math.sqrt(T));
      const d2 = d1 - sigma * Math.sqrt(T);

      if (optionType === "CALL") {
        const callPrice =
          S * Math.exp(-r * T) * normCDF(d1) -
          K * Math.exp(-r * T) * normCDF(d2);
        return C - callPrice;
      } else if (optionType === "PUT") {
        const putPrice =
          K * Math.exp(-r * T) * normCDF(-d2) -
          S * Math.exp(-r * T) * normCDF(-d1);
        return C - putPrice;
      }

      return 0;
    }

    // Standard normal cumulative distribution function (CDF)
    function normCDF(x) {
      const a1 = 0.254829592;
      const a2 = -0.284496736;
      const a3 = 1.421413741;
      const a4 = -1.453152027;
      const a5 = 1.061405429;
      const p = 0.3275911;

      const sign = x < 0 ? -1 : 1;
      const absX = Math.abs(x) / Math.sqrt(2.0);

      const t = 1.0 / (1.0 + p * absX);
      const y =
        ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) *
        t *
        Math.exp(-absX * absX);

      return 0.5 * (1 + sign * y);
    }

    // Initial range for implied volatility
    let volatilityLow = 0.0;
    let volatilityHigh = 5.0;
    let volatility = 0.0;

    // Perform binary search to find implied volatility
    while (volatilityHigh - volatilityLow > 0.0001) {
      volatility = (volatilityLow + volatilityHigh) / 2.0;

      const optionPriceWithVolatility =
        blackScholesImpliedVolatility(volatility);

      if (optionPriceWithVolatility > 0) {
        volatilityLow = volatility;
      } else {
        volatilityHigh = volatility;
      }
    }

    return volatility;
  }

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
