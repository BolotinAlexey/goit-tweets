import axios from 'axios';
import { PER_PAGE, BASE_URL } from 'services/constants';

axios.defaults.baseURL = BASE_URL;

export async function readData(query, page) {
  const params = new URLSearchParams();
  params.append('completed', false);
  params.append('page', 1);
  params.append('limit', PER_PAGE);
  // axios.get('/tweets', params);

  const response = await axios.get('/tweets', params);

  // isMore -flag shower button of 'read-more'
  // const isMoreApi = response.data.totalHits > PER_PAGE * page;

  // return { reqGallery: response.data.hits, isMoreApi };
  console.log(response.data);
  return response.data;
}
