import axios from 'axios';
import { PER_PAGE, BASE_URL } from 'services/constants';

axios.defaults.baseURL = BASE_URL;

export async function readData(query, page) {}
