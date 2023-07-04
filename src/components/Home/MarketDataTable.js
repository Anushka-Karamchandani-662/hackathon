import React, { useState } from 'react';
import './Home.css';

function MarketDataTable({ dataArray }) {
  console.log(dataArray);
  const [selectedSymbol, setSelectedSymbol] = useState('');

  const handleSymbolChange = (e) => {
    setSelectedSymbol(e.target.value);
  };

  const getSymbolWithoutInteger = (symbol) => {
    const integerIndex = symbol.search(/\d/); // Find the index of the first occurrence of an integer
    return symbol.substring(0, integerIndex); // Get the substring up to the integer index
  };

  const isInTheMoney = (option) => {
    const spotPrice = option.strikePrice;
    if ((option?.symbol.endsWith("CE")||option?.symbol.endsWith("CE\x00"))) {
      return option.ltp >= spotPrice; // Use option.LTP instead of option.ltp
    } else if ((option?.symbol?.endsWith("PE")||option?.symbol.endsWith("PE\x00"))) {
      return option.ltp <= spotPrice; // Use option.LTP instead of option.ltp
    }
    return false;
  };

const filteredCalls = dataArray.filter((item) =>item.symbol?.includes(selectedSymbol) && (item.symbol?.endsWith("CE")||item?.symbol.endsWith("CE\x00"))
);

const filteredPuts = dataArray.filter((item) =>item.symbol?.includes(selectedSymbol) && (item.symbol?.endsWith("PE")||item?.symbol.endsWith("PE\x00")));

  return (
    <>
    <div className="background">
    <h3 className="optionChain">Option Chain (Equity Derivatives)</h3>
    <hr className="hr1"></hr>
    <h1 className='MarketData'>Market Data</h1>
    </div>
    <div className="dropdownContainer">
        <label htmlFor="symbolDropdown" className='SelectSymbol'>Select Symbol:</label>
        <select id="symbolDropdown" className='selectdrop' onChange={handleSymbolChange}>
          <option value="">All</option>
          <option value="FINANCIALS">FINANCIALS</option>
          <option value="ALLBANKS">ALLBANKS</option>
          <option value="MAINIDX">MAINIDX</option>
        </select>
      </div>
    


    <div className="optionChainTable">
      
      <div className="tableContainer">
      <div className="CALL">CALLS</div>
        <table>
          <thead>
              <tr>
              <th>Symbol</th>
              <th>LTP</th>
              <th>LTQ</th>
              <th>AskPrice</th>
              <th>Ask Quantity</th>
              <th>Bid Price</th>
              <th>Bid Quantity</th>
              <th>Implied Volatility</th>
              <th>Open Interest</th>
              <th>Previous Close Price</th>
              <th>Previous Open Interest</th>
              <th>Volume</th>
            </tr>
          </thead>
          <tbody>
            {filteredCalls.map((marketData, index) => (
              <tr
                key={index}
                className={isInTheMoney(marketData) ? 'inTheMoney' : 'outOfMoney'}
              >
                <td>{getSymbolWithoutInteger(marketData.symbol)}</td>
                <td>{marketData.ltp}</td>
                <td>{marketData.ltq}</td>
                <td>{marketData.askPrice}</td>
                <td>{marketData.askQuantity}</td>
                <td>{marketData.bidPrice}</td>
                <td>{marketData.bidQuantity}</td>
                <td>{marketData.impliedVolatility}</td>
                <td>{marketData.oi}</td>
                <td>{marketData.previousClosePrice}</td>
                <td>{marketData.previousOpenInterest}</td>
                <td>{marketData.volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="tableContainer">
      <div className="CALL1">PUTS</div>
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>LTP</th>
              <th>LTQ</th>
              <th>AskPrice</th>
              <th>Ask Quantity</th>
              <th>Bid Price</th>
              <th>Bid Quantity</th>
              <th>Implied Volatility</th>
              <th>Open Interest</th>
              <th>Previous Close Price</th>
              <th>Previous Open Interest</th>
              <th>Volume</th>
            </tr>
          </thead>
          <tbody>
            {filteredPuts.map((marketData, index) => (
              <tr
                key={index}
                className={isInTheMoney(marketData) ? 'inTheMoney' : 'outOfMoney'}
              >
                <td>{getSymbolWithoutInteger(marketData?.symbol)}</td>
                <td>{marketData.ltp}</td>
                <td>{marketData.ltq}</td>
                <td>{marketData.askPrice}</td>
                <td>{marketData.askQuantity}</td>
                <td>{marketData.bidPrice}</td>
                <td>{marketData.bidQuantity}</td>
                <td>{marketData.impliedVolatility}</td>
                <td>{marketData.oi}</td>
                <td>{marketData.previousClosePrice}</td>
                <td>{marketData.previousOpenInterest}</td>
                <td>{marketData.volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <div className="footer">
      <div className="team">Team R.A.V.E</div>
      <div className="team">Edelweiss Hackathon</div>
    </div>
    </>

    
  );
}

export default MarketDataTable;
