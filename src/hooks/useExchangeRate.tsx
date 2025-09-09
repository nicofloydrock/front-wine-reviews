import { useEffect, useState } from "react";

// Hook personalizado para tasa de cambio
const useExchangeRate = () => {
  const [exchangeRate, setExchangeRate] = useState(950);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        if (data.rates && data.rates.CLP) {
          setExchangeRate(data.rates.CLP);
        }
      } catch (error) {
        console.warn('No se pudo obtener la tasa de cambio actual');
      }
    };
    fetchExchangeRate();
  }, []);

  return exchangeRate;
};

