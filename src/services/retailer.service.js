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
}

export default new RetailerService();
