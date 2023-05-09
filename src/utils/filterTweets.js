const cbFilter = (isFollow, elIsFollow) => isFollow === elIsFollow;

export default function filterTweets(tweets, filter) {
  switch (filter) {
    case 'following':
      return tweets.filter(el => cbFilter(el.isFollow, true));

    case 'follow':
      return tweets.filter(el => cbFilter(el.isFollow, false));

    default:
      return tweets;
  }
}
