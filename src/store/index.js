import { combineReducers, createStore } from 'redux';
import retailerReducer from './reducers/retailer';
import companyReducer from './reducers/company';

const allReducers = combineReducers({
    retailer: retailerReducer,
    company: companyReducer
});

const store = createStore(allReducers);

export default store;
