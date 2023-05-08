// import Card from 'components/Card/Card';
import CardList from 'components/CardList/CardList';
import { useState, useEffect } from 'react';

import * as API from 'services/api';
import { PER_PAGE } from 'services/constants';
import addPropertyInArray from 'utils/addPropertyInArray';
// import { PER_PAGE } from 'services/constants';
// import { readData } from 'services/api';

function App() {
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
  const requestToApi = async (currentTweets = []) => {
    setIsLoading(true);
    try {
      // const { reqTweets, isMoreApi } = await API.readData(
      //   word,
      //   Math.floor(currentTweets.length / PER_PAGE) + 1
      // );
      const reqTweets = await API.readData();
      if (reqTweets.length === PER_PAGE) setIsMore(true);

      setTweets([
        ...currentTweets,
        ...addPropertyInArray('isFollow', reqTweets, false),
      ]);
      // setIsMore(isMoreApi);
    } catch (error) {
      console.error(error);
      setTweets([]);
      setIsMore(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    requestToApi();
  }, []);

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
  const onClickFollow = id => {
    setTweets(
      tweets.map(el => (id === el.id ? { ...el, isFollow: !el.isFollow } : el))
    );
  };

  return (
    <>
      {isLoading && <p>Loading..</p>}
      <CardList onClickFollow={onClickFollow} tweets={tweets} />
      {isMore && <button className="load-more">Load More</button>}
    </>
  );
}

export default App;
