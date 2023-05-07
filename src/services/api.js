import axios from 'axios';
import { PER_PAGE, BASE_URL } from 'services/constants';

axios.defaults.baseURL = BASE_URL;

export async function readData(page) {
  // const params = new URLSearchParams();
  // params.append('page', 1);
  // params.append('limit', PER_PAGE);
  // // axios.get('/tweets', params);

  // const response = await axios.get('/tweets', params);

  const url = new URL(BASE_URL + '/tweets');
  url.searchParams.append('page', page);
  url.searchParams.append('limit', PER_PAGE);
  let reqTweets = [];

  await fetch(url, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      new Error(res.error);
    })
    .then(
      arr => {
        reqTweets = [...reqTweets, ...arr];
      }
      // mockapi returns first 10 tasks that are not completed
    )
    .catch(error => {
      console.log(error.message);
    });
  return reqTweets;

  // isMore -flag shower button of 'read-more'
  // const isMoreApi = response.data.totalHits > PER_PAGE * page;

  // return { reqGallery: response.data.hits, isMoreApi };
  // console.log(response.data);
  // return response.data;
}
