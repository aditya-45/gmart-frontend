import { SET_CURRENT_RETAILER, CLEAR_CURRENT_RETAILER, SET_CURRENT_COMPANY, CLEAR_CURRENT_COMPANY } from '../types';


export const setCurrentRetailer = (retailer) => {
    return {
        type: SET_CURRENT_RETAILER,
        payload: retailer,
    };
};

export const clearCurrentRetailer = () => {
    return {
        type: CLEAR_CURRENT_RETAILER,
    };
};

export const setCurrentCompany = (company) => {
    return {
        type: SET_CURRENT_COMPANY,
        payload: company,
    };
};

export const clearCurrentCompany = () => {
    return {
        type: CLEAR_CURRENT_COMPANY,
    };
};
