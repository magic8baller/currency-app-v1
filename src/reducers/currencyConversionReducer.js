import {FETCH_ERROR, GET_CONVERSION_DATA, INPUT_BASE_CURRENCY, INPUT_TARGET_CURRENCY, SELECT_BASE_CURRENCY, SELECT_TARGET_CURRENCY, SET_CONVERSION_RATES} from '../constants/actionTypes.js'

const initialState = './initialState.js'

export default function (state = initialState.currencyConversion, action) {
	switch (action.type) {
		case SET_CONVERSION_RATES:
			return {...state, rates: action.payload.rates, baseCurrency: action.payload.base}
		case GET_CONVERSION_DATA:
			return {...state, currencies: action.payload}
		case SELECT_BASE_CURRENCY:
			return {...state, baseCurrencySelect: action.payload}
		case SELECT_TARGET_CURRENCY:
			return {...state, targetCurrencySelect: action.payload}
		case INPUT_BASE_CURRENCY:
			return {...state, baseCurrencyInput: action.payload}
		case INPUT_TARGET_CURRENCY:
			return {...state, targetCurrencyInput: action.payload}
		case FETCH_ERROR:
			return {
				...state, error: true
			}

		default:
			return state
	}
}