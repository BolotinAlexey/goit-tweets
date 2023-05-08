import axios from 'axios';
import { PER_PAGE, BASE_URL } from 'services/constants';

axios.defaults.baseURL = BASE_URL;

export async function readData(page = 1) {
  const reqTweets = await axios.get(`/tweets?page=${page}&limit= ${PER_PAGE}`);
  return reqTweets.data;
}
