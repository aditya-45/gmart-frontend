import { SET_CURRENT_COMPANY, CLEAR_CURRENT_COMPANY } from '../types';

const companyReducer = (state = {}, action) => {
  switch (action?.type) {
    case SET_CURRENT_COMPANY:
      console.log('set curnt company ' + JSON.stringify(action?.payload));
      localStorage.setItem('currentCompany', JSON.stringify(action?.payload));
      return action?.payload;
    case CLEAR_CURRENT_COMPANY:
      localStorage.removeItem('currentCompany');
      return null;
    default:
        return state;
       // JSON.parse(localStorage.getItem('currentCompany'));
  }
};

export default companyReducer;
