const express = require('express')
const app = express()
const cors = require('cors');
const port = 8000;
// const port = 9011;
const EventEmitter = require('events');
// Enable CORS
app.use(cors());
const { log, timeStamp } = require('console');
const Net = require('net');
// The port number and hostname of the server.
const host = 'localhost';
//setInterval use krna hai

// Create a new TCP client.
const client = new Net.Socket();
// var first = true
const marketData = [];
const marketDataEmitter = new EventEmitter();

// port = 3000;

// Send a connection request to the server.
client.connect({ port: 9011, host: host },
    function() {
        // If there is no error, the server has accepted the request and created a new 
        // socket dedicated to us.

        console.log('TCP connection established with the server.');
        client.write('H');

        // The client can now send data t// The client can now send data to the server by writing to its socket.

    });
var flag=1;
var fin=1940360;var mid=1854880;var allban=4398250;var mainidx=1854880;
client.on('data', function(chunk) {
    // let chunkData = chunk.length / 128;
    let packetStart = 0;
    // console.log(chunk.length)
    while (packetStart < chunk.length - 130) {
        
        if(true){

        
        let startingIndex = packetStart;
            // console.log(startingIndex);
        var symbol = chunk.toString('utf8', startingIndex+4, startingIndex+26);
        var type=symbol.substring(symbol.length - 2);
        console.log(type);
        var timeStamp = hex2bin(chunk[startingIndex + 49]) + hex2bin(chunk[startingIndex + 48]) + hex2bin(chunk[startingIndex + 47]) + hex2bin(chunk[startingIndex + 46]) + hex2bin(chunk[startingIndex + 45]) + hex2bin(chunk[startingIndex + 44]) + hex2bin(chunk[startingIndex + 43]) + hex2bin(chunk[startingIndex + 42])
        timeStamp = parseInt(timeStamp, 2)
        var packetSize = hex2bin(chunk[startingIndex + 3]) + hex2bin(chunk[startingIndex + 2]) + hex2bin(chunk[startingIndex + 1]) + hex2bin(chunk[startingIndex + 0])
        packetStart = packetStart + parseInt(packetSize, 2) + 6;
        var ltp = hex2bin(chunk[startingIndex + 57]) + hex2bin(chunk[startingIndex + 56]) + hex2bin(chunk[startingIndex + 55]) + hex2bin(chunk[startingIndex + 54]) + hex2bin(chunk[startingIndex + 53]) + hex2bin(chunk[startingIndex + 52]) + hex2bin(chunk[startingIndex + 51]) + hex2bin(chunk[startingIndex + 50])
        ltp = parseInt(ltp, 2)
        var ltq = hex2bin(chunk[startingIndex + 65]) + hex2bin(chunk[startingIndex + 64]) + hex2bin(chunk[startingIndex + 63]) + hex2bin(chunk[startingIndex + 62]) + hex2bin(chunk[startingIndex + 61]) + hex2bin(chunk[startingIndex + 60]) + hex2bin(chunk[startingIndex + 59]) + hex2bin(chunk[startingIndex + 58])
        ltq = parseInt(ltq, 2)
        var volume = hex2bin(chunk[startingIndex + 73]) + hex2bin(chunk[startingIndex + 72]) + hex2bin(chunk[startingIndex + 71]) + hex2bin(chunk[startingIndex + 70]) + hex2bin(chunk[startingIndex + 69]) + hex2bin(chunk[startingIndex + 68]) + hex2bin(chunk[startingIndex + 67]) + hex2bin(chunk[startingIndex + 66])
        volume = parseInt(volume, 2)
        var bidPrice = hex2bin(chunk[startingIndex + 81]) + hex2bin(chunk[startingIndex + 80]) + hex2bin(chunk[startingIndex + 79]) + hex2bin(chunk[startingIndex + 78]) + hex2bin(chunk[startingIndex + 77]) + hex2bin(chunk[startingIndex + 76]) + hex2bin(chunk[startingIndex + 75]) + hex2bin(chunk[startingIndex + 74])
        bidPrice = parseInt(bidPrice, 2)
        var bidQuantity = hex2bin(chunk[startingIndex + 89]) + hex2bin(chunk[startingIndex + 88]) + hex2bin(chunk[startingIndex + 87]) + hex2bin(chunk[startingIndex + 86]) + hex2bin(chunk[startingIndex + 85]) + hex2bin(chunk[startingIndex + 84]) + hex2bin(chunk[startingIndex + 83]) + hex2bin(chunk[startingIndex + 82])
        bidQuantity = parseInt(bidQuantity, 2)
        var askPrice = hex2bin(chunk[startingIndex + 97]) + hex2bin(chunk[startingIndex + 96]) + hex2bin(chunk[startingIndex + 95]) + hex2bin(chunk[startingIndex + 94]) + hex2bin(chunk[startingIndex + 93]) + hex2bin(chunk[startingIndex + 92]) + hex2bin(chunk[startingIndex + 91]) + hex2bin(chunk[startingIndex + 90])
        askPrice = parseInt(askPrice, 2)
        var askQuantity = hex2bin(chunk[startingIndex + 105]) + hex2bin(chunk[startingIndex + 104]) + hex2bin(chunk[startingIndex + 103]) + hex2bin(chunk[startingIndex + 102]) + hex2bin(chunk[startingIndex + 101]) + hex2bin(chunk[startingIndex + 100]) + hex2bin(chunk[startingIndex + 99]) + hex2bin(chunk[startingIndex + 98])
        askQuantity = parseInt(askQuantity, 2)
        var oi = hex2bin(chunk[startingIndex + 113]) + hex2bin(chunk[startingIndex + 112]) + hex2bin(chunk[startingIndex + 111]) + hex2bin(chunk[startingIndex + 110]) + hex2bin(chunk[startingIndex + 109]) + hex2bin(chunk[startingIndex + 108]) + hex2bin(chunk[startingIndex + 107]) + hex2bin(chunk[startingIndex + 106])
        oi = parseInt(oi, 2)
        var previousClosePrice = hex2bin(chunk[startingIndex + 121]) + hex2bin(chunk[startingIndex + 120]) + hex2bin(chunk[startingIndex + 119]) + hex2bin(chunk[startingIndex + 118]) + hex2bin(chunk[startingIndex + 117]) + hex2bin(chunk[startingIndex + 116]) + hex2bin(chunk[startingIndex + 115]) + hex2bin(chunk[startingIndex + 114])
        previousClosePrice = parseInt(previousClosePrice, 2)
        var previousOpenInterest = hex2bin(chunk[startingIndex + 127]) + hex2bin(chunk[startingIndex + 126]) + hex2bin(chunk[startingIndex + 125]) + hex2bin(chunk[startingIndex + 124]) + hex2bin(chunk[startingIndex + 123]) + hex2bin(chunk[startingIndex + 122])
        previousOpenInterest = parseInt(previousOpenInterest, 2)
        var optionPrice = ltp;
        var underlyingPrice = 4398250;
        const strikePricePattern = /\d+(?=PE|CE)/;
        var extractedCharacters = symbol.match(strikePricePattern);
        var strikePrice='';
        console.log(ltp,ltq,symbol);
        console.log(symbol.split("").map(ele=>ele.charCodeAt(0)).join(""));
        if(symbol.split("").map(ele=>ele.charCodeAt(0)).join("")==70737865786773657683000000000000){
            console.log("----------------------------FINAN",ltp,ltq,symbol);
            fin=ltp;
        }
       //77736867658083000000000000000
       if(symbol.split("").map(ele=>ele.charCodeAt(0)).join("")==77736867658083000000000000000){
        console.log("----------------------------MIDC",ltp,ltq,symbol);
        mid=ltp;
        }
        if(symbol.split("").map(ele=>ele.charCodeAt(0)).join("")==6576766665787500000000000000
        ){
            console.log("--------------------------ALLBAN",ltp,ltq,symbol);
            allban=ltp;
            }
            if(symbol.split("").map(ele=>ele.charCodeAt(0)).join("")==77657378736888000000000000000){
                console.log("-------------------------MAINIDX",ltp,ltq,symbol);
                mainidx=ltp;
                }
        if (extractedCharacters) {
          strikePrice = extractedCharacters[0];
          strikePrice = parseFloat(strikePrice.substring(2));
      
        } else {
          strikePrice = 0;
        }
        var epochTime = timeStamp;  // Replace with your epoch time value

        // Convert epoch time to Date object
        var date = new Date(epochTime * 1000);

        // Extract the date components
        var year = date.getFullYear();
        var month = date.getMonth() + 1;  // Month index starts from 0
        var day = date.getDate();

        // Format the date
        var date1 = new Date(`${year}-${month}-${day}`);
        const patternforDate = /(\d{2})([A-Z]{3})(\d{2})/;
        const monthArray=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
        var match = patternforDate.exec(symbol);
            if (match) {
            var year = match[3];
            var month = monthArray.indexOf(match[2])+1;
            var day = match[1];
            var date2 = new Date('20'+year+'-'+month+'-'+day);
            }
            const differenceInMs = Math.abs(date2 - date1);
        var timeToMaturity = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));
        var riskFreeRate = 0.05;
        var underlying = ltp;
        if(symbol.includes('MAINIDX'))
        underlying = mainidx;
        if(symbol.includes('ALLBANKS'))
        underlying = allban;
        if(symbol.includes('MIDCAPS'))
        underlying = mid;
        if(symbol.includes('FINANCIALS'))
        underlying = fin;
        var vol=calculateImpliedVolatility(ltp,strikePrice,timeToMaturity,riskFreeRate,underlying,symbol);
            const marketDataItem = {
            symbol:symbol,
            ltp: ltp,
            ltq: ltq,
            volume: volume,
            bidPrice: bidPrice,
            bidQuantity: bidQuantity,
            askPrice: askPrice,
            askQuantity: askQuantity,
            oi: oi,
            previousClosePrice: previousClosePrice,
            previousOpenInterest: previousOpenInterest,
            strikePrice:strikePrice,
            impliedVolatility: vol
            };


console.log(vol);
marketData.unshift(marketDataItem);
  }
  flag=0;
}
    
});

client.on('end', function() {
    console.log('Requested an end to the TCP connection');
});

function calculateImpliedVolatility(
    optionPricePaise,
    strikePricePaise,
    timeToExpiration,
    riskFreeRate,
    currentPricePaise,
    optionType
  ) {
    // Convert option price from paise to rupees
    console.log("ot",optionType)
    var S = currentPricePaise / 100; // Convert current price from paise to rupees
    var K = strikePricePaise / 100; // Convert strike price from paise to rupees
    var T = timeToExpiration; // Time to expiration in years
    var r = riskFreeRate; // Risk-free interest rate
    var C = optionPricePaise / 100; 
    // Black-Scholes formula to calculate implied volatility
    function blackScholesImpliedVolatility(sigma) {
        
    var d1 =
        (Math.log(S / K) + (r + (sigma * sigma) / 2) * T) /
        (sigma * Math.sqrt(T));
      var d2 = d1 - sigma * Math.sqrt(T);
  
      if (optionType.contains("CE")) {
        console.log("yes")
        var callPrice =
          S * Math.exp(-r * T) * normCDF(d1) -
          K * Math.exp(-r * T) * normCDF(d2);
        return C - callPrice;
      } else if (optionType.contains("PE")) {
        console.log("yessss")
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
    const maxIterations = 100; // Maximum number of iterations
  
    // Perform binary search to find implied volatility
    let iterations = 0;
    while (volatilityHigh - volatilityLow > 0.0001 && iterations < maxIterations) {
      volatility = (volatilityLow + volatilityHigh) / 2.0;
  
      const optionPriceWithVolatility = blackScholesImpliedVolatility(volatility);
  
      if (optionPriceWithVolatility - C> 0) {
        volatilityLow = volatility;
      } else {
        volatilityHigh = volatility;
      }
  
      iterations++;
    }
  
    return volatility;
  }
  
function hex2bin(hex) {
  
    let check = hex.toString(2);
    let requiredZero = 8 - check.length
    let zeroVar = "";
    for (let i = 0; i < requiredZero; i++) {
        zeroVar = zeroVar + "0";
    }
    return zeroVar + check + "";
}
app.get('/api/marketData', (req, res) => {
    res.json(marketData);
});
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
module.exports = {
    marketDataEmitter,
};