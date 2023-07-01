import React from "react";

const MarketDataTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>LTP</th>
          <th>Volume</th>
          <th>Implied Volatility</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.Tradingsymbol}>
            <td>{item.Tradingsymbol}</td>
            <td>{item.LTP}</td>
            <td>{item.volume}</td>
            <td>{item.impliedVolatility}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MarketDataTable;
