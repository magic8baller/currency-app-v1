export default {
	currencyConversion: {
		rates: '',
		baseCurrency: '',
		currencies: null,
		baseCurrencyInput: '',
		targetCurrencyInput: '',
		baseCurrencySelect: 'Select or enter a base currency',
		targetCurrencySelect: 'Select or enter a target currency'
	},
	historicalRates: {
		base: 'USD',
		date: new Date().toISOString().slice(0, 10),
		rates: ''
	},
  fuelSavings: {
    newMpg: '',
    tradeMpg: '',
    newPpg: '',
    tradePpg: '',
    milesDriven: '',
    milesDrivenTimeframe: 'week',
    displayResults: false,
    dateModified: null,
    necessaryDataIsProvidedToCalculateSavings: false,
    savings: {
      monthly: 0,
      annual: 0,
      threeYear: 0
    }
  }
};
