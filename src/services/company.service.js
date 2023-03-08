import { BASE_API_URL } from '../common/constants';
import axios from 'axios';

const BASE_URL = BASE_API_URL;

class CompanyService {
//   login(user) {
//     return axios.post(BASE_URL + '/signin', user);
//   }

  register(user) {
    return axios.post(BASE_URL + '/signup/company', user);
  }
}

export default new CompanyService();
