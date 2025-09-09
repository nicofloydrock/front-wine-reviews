const translateText = (text, category) => {
  if (!text) return text;
  return translations[category] && translations[category][text] 
    ? translations[category][text] 
    : text;
};

const formatPrice = (usdPrice, exchangeRate) => {
  if (!usdPrice) return null;
  const clpPrice = Math.round(usdPrice * exchangeRate);
  return {
    usd: `${usdPrice} USD`,
    clp: `${clpPrice.toLocaleString('es-CL')} CLP`,
    formatted: `${clpPrice.toLocaleString('es-CL')} CLP`
  };
};