import Card from 'components/Card/Card';
import { useState, useEffect } from 'react';

function App() {
  const [word, setWord] = useState(''); // resesarch word

  const [tweets, setTweets] = useState([]); // array of tweets

  const [isLoading, setisLoading] = useState(false); //flag shower of spiner

  const [isMore, setIsMore] = useState(false); //flag shower button of 'read-more'
  // useEffect(() => {
  //   if (gallery.length === 0) window.scrollTo({ top: 0 });

  //   window.scrollTo({
  //     top: document.querySelector('body').scrollHeight,
  //     behavior: 'smooth',
  //   });
  // }, [gallery]);

  // // helper function for working with request api
  // const requestToApi = async (word, currentGallery) => {
  //   setisLoading(true);
  //   try {
  //     const { reqGallery, isMoreApi } = await API.readData(
  //       word,
  //       Math.floor(currentGallery.length / PER_PAGE) + 1
  //     );

  //     setGallery([...currentGallery, ...reqGallery]);
  //     setIsMore(isMoreApi);
  //     setWord(word);
  //   } catch (error) {
  //     console.error(error);
  //     setGallery([]);
  //     setIsMore(false);
  //     setWord('');
  //   } finally {
  //     setisLoading(false);
  //   }
  // };

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

  return <Card />;
}

export default App;
