import Card from 'components/Card/Card';
import CardList from 'components/CardList/CardList';
import { useState, useEffect } from 'react';
import { createContext, useContext } from 'react';

import * as API from '../services/api';
import { PER_PAGE } from 'services/constants';

function App() {
  const [word, setWord] = useState(''); // resesarch word

  const [tweets, setTweets] = useState([]); // array of tweets

  const [isLoading, setIsLoading] = useState(false); //flag shower of spiner

  const [isMore, setIsMore] = useState(false); //flag shower button of 'read-more'
  // useEffect(() => {
  //   if (gallery.length === 0) window.scrollTo({ top: 0 });

  //   window.scrollTo({
  //     top: document.querySelector('body').scrollHeight,
  //     behavior: 'smooth',
  //   });
  // }, [gallery]);

  // helper function for working with request api
  const requestToApi = async (word, currentTweets) => {
    setIsLoading(true);
    try {
      const { reqTweets, isMoreApi } = await API.readData(
        word,
        Math.floor(currentTweets.length / PER_PAGE) + 1
      );

      setTweets([...currentTweets, ...reqTweets]);
      setIsMore(isMoreApi);
      setWord(word);
    } catch (error) {
      console.error(error);
      setTweets([]);
      setIsMore(false);
      setWord('');
    } finally {
      setIsLoading(false);
    }
  };

  // // submit new word
  // const handlerSubmit = word => {
  //   setWord(word);
  //   setGallery([]);
  //   setisLoading(true);

  //   requestToApi(word, []);
  // };

  // // press button 'read more'
  // const handlerMore = () => {
  //   requestToApi(word, gallery);
  // };

  // // close modal window
  // const closeModal = () => setModalImg(null);

  return <CardList tweets={tweets} />;
}

export default App;
