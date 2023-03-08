import { SET_CURRENT_RETAILER, CLEAR_CURRENT_RETAILER } from '../types';

const retailerReducer = (state = {}, action) => {
  switch (action?.type) {
    case SET_CURRENT_RETAILER:
      console.log('set curnt retailer ' + JSON.stringify(action?.payload));
      localStorage.setItem('currentRetailer', JSON.stringify(action?.payload));
      return action?.payload;
    case CLEAR_CURRENT_RETAILER:
      localStorage.removeItem('currentRetailer');
      return null;
    default:
      return state;
       // JSON.parse(localStorage.getItem('currentRetailer'));
  }
};

export default retailerReducer;
