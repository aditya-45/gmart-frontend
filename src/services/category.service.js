import { BASE_API_URL } from '../common/constants';
import axios from 'axios';

const BASE_URL = BASE_API_URL;

class CategoryService {
  
  getCategories(categoryName) {
    console.log(categoryName);
    return axios.get(BASE_URL + '/category/'+ categoryName);
  }
}

export default new CategoryService();
