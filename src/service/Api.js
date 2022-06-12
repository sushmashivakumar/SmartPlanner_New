import axios from 'axios';
import { baseUrl } from './Config';

export default axios.create({
  baseURL: baseUrl
});