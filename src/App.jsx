import CardList from 'components/CardList/CardList';
import { useState, useEffect } from 'react';

import { readData } from 'services/api';
import { PER_PAGE } from 'services/constants';
import addPropertyInArray from 'utils/addPropertyInArray';
import handlerFollowers from 'utils/handlerFollowers';

function App() {
  const [tweets, setTweets] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [isMore, setIsMore] = useState(false);
  useEffect(() => {
    if (tweets.length === 0) window.scrollTo({ top: 0 });

    window.scrollTo({
      top: document.querySelector('body').scrollHeight,
      behavior: 'smooth',
    });
  }, [tweets]);

  const requestToApi = async (currentTweets = []) => {
    setIsLoading(true);
    try {
      const reqTweets = await readData(
        Math.floor(currentTweets.length / PER_PAGE) + 1
      );
      setIsMore(reqTweets.length === PER_PAGE ? true : false);

      setTweets([
        ...currentTweets,
        ...addPropertyInArray('isFollow', reqTweets, false),
      ]);
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
    setTweets(tweets.map(el => handlerFollowers(el, id)));
  };

  const onMore = () => {
    requestToApi(tweets);
  };

  return (
    <>
      {isLoading && <p>Loading..</p>}
      <CardList onClickFollow={onClickFollow} tweets={tweets} />
      {isMore && (
        <button onClick={onMore} className="load-more">
          Load More
        </button>
      )}
    </>
  );
}

export default App;
