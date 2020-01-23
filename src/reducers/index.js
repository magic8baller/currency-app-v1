import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import currencyConversion from './currencyConversionReducer';
import historicalRates from './historicalRatesReducer';
import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
	currencyConversion,
	historicalRates,
	fuelSavings,
});

export default rootReducer;
