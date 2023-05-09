import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import CardList from 'components/CardList/CardList';
import { readData } from 'services/api';
import { PER_PAGE } from 'services/constants';
import { dropDownOption } from 'services/dropDownOption';
import addPropertyInArray from 'utils/addPropertyInArray';
import handlerFollowers from 'utils/handlerFollowers';
import filterTweets from 'utils/filterTweets';

export default function Tweets() {
  const [tweets, setTweets] = useState(() => {
    const arrayLS = JSON.parse(localStorage.getItem('tweets'));
    return arrayLS ? arrayLS : [];
  });

  const [isLoading, setIsLoading] = useState(false);

  const [isMore, setIsMore] = useState(() => {
    const isMoreLS = JSON.parse(localStorage.getItem('isMore'));
    return isMoreLS ? isMoreLS : false;
  });

  const [filter, setFilter] = useState('all');

  useEffect(() => {
    if (tweets.length === 0) window.scrollTo({ top: 0 });

    window.scrollTo({
      top: document.querySelector('body').scrollHeight,
      behavior: 'smooth',
    });
  }, [tweets.length]);

  useEffect(() => {
    localStorage.setItem('tweets', JSON.stringify(tweets));
  }, [tweets]);

  useEffect(() => {
    localStorage.setItem('isMore', JSON.stringify(isMore));
  }, [isMore]);

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
    const tweetsLS = JSON.parse(localStorage.getItem('tweets'));
    if (!tweetsLS.length) requestToApi();
    // else setIsMore(isMoreLS);
  }, []);

  const onClickFollow = id => {
    setTweets(tweets.map(el => handlerFollowers(el, id)));
  };

  const onMore = () => {
    requestToApi(tweets);
  };

  return (
    <>
      <Dropdown
        options={dropDownOption}
        placeholder="Select an filter"
        className="dropDown"
        onChange={e => setFilter(e.value)}
      />
      {isLoading && <p>Loading..</p>}
      <CardList
        onClickFollow={onClickFollow}
        tweets={filterTweets(tweets, filter)}
      />
      {isMore && (
        <button onClick={onMore} className="load-more">
          Load More
        </button>
      )}
      <NavLink to="/">
        <button className="load-more">Back</button>
      </NavLink>
    </>
  );
}
