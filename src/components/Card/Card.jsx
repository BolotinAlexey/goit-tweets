import { CardWrap } from './Card.styled';

export default function Card({ cardData, onClickFollow }) {
  const { tweets, followers } = cardData;

  return (
    <CardWrap>
      <img className="logo" src={require('assets/logo.png')} alt="goit" />
      <img
        className="miniature"
        src={require('assets/miniature.png')}
        alt="miniature"
      />
      <div className="avatar-block">
        <div className="left">
          <img src={require('assets/strip.png')} />
        </div>
        <div className="center">
          <img src={require('assets/boy.png')} className="avatar" />
          <img className="ring" src={require('assets/ring.png')}></img>
        </div>

        <div className="right">
          <img src={require('assets/strip.png')} />
        </div>
      </div>
      <p className="tweets">{tweets} TWEETS</p>
      <p className="followers">{followers} FOLLOWERS</p>
      <button onClick={onClickFollow}>Follow</button>
    </CardWrap>
  );
}
