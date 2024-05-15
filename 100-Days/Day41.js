//! Day 41 : Simple Currency Converter

//? Q: Write a function, convertCurrency() that takes three parameters: amount, fromCurrency and toCurrency as input and convert that amount to another using static exchange rates.

//* Constraints:
// Use a fixed object to store exchange rates relative to a base currency(e.g. USD).
// The function should return the converted amount in the target currency.
// Handle conversion through USD as a base, meaning if converting from GBP to USD, then USD to EUR.

//? Sol:

const rates = {
  USD: 1, // Base Currency
  EUR: 0.9, // 1 USD = 0.9 EUR
  GBP: 0.8, // 1 USD = 0.8 GBP
  INR: 82, // 1 USD = 82 INR
};

const convertCurrency = (amount, fromCurrency, toCurrency) => {
  let amountInUSD = 0;
  if (fromCurrency !== "USD") {
    amountInUSD = amount / rates[fromCurrency];
  } else {
    amountInUSD = amount;
  }

  let convertedAmount = 0;
  if (toCurrency !== "USD") {
    convertedAmount = amountInUSD * rates[toCurrency];
  } else {
    convertedAmount = amountInUSD;
  }
  return convertedAmount.toFixed(2);
};

console.log(convertCurrency(100, "GBP", "EUR")); // Output: 112.50
console.log(convertCurrency(100, "INR", "EUR")); // Output: 1.10
