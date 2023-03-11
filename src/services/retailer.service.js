import { BASE_API_URL } from '../common/constants';
import axios from 'axios';

const BASE_URL = BASE_API_URL;

class RetailerService {
  login(user) {
    return axios.post(BASE_URL + '/login/retailer', user);
  }

  register(user) {
    return axios.post(BASE_URL + '/signup/retailer', user);
  }

  getOrders(){
    return axios.get(BASE_URL + '/orders/retailer');
  }

  getCategories(categoryName) {
    console.log(categoryName);
    return axios.get(BASE_URL + '/category/'+ categoryName); //change url
  }
}

export default new RetailerService();
