// src/components/CryptoList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CryptoList() {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 10,
        page: 1,
        sparkline: false,
      },
    })
    .then((response) => {
      setCryptoData(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <div>
      <h1>CYBER-CASH</h1>
      <ul>
        {cryptoData.map((crypto) => (
          <li key={crypto.id}>
            <h3>{crypto.name}</h3>
            <p>Symbol: {crypto.symbol}</p>
            <p>Price: ${crypto.current_price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CryptoList;
