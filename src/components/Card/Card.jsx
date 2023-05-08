import Button from 'components/Button/Button';
import { CardWrap } from './Card.styled';
import DataUser from 'components/DataUser/DataUser';

export default function Card({ cardData, onClickFollow }) {
  const { tweets, followers, avatar, id, isFollow } = cardData;

  const handlerClick = () => onClickFollow(id);

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
          <img src={require('assets/strip.png')} alt="" />
        </div>
        <div className="center">
          <img
            // src={require('assets/boy.png')}
            src={avatar}
            className="avatar"
            alt="avatar"
          />
          <img className="ring" src={require('assets/ring.png')} alt=""></img>
        </div>

        <div className="right">
          <img src={require('assets/strip.png')} alt="" />
        </div>
      </div>
      <DataUser tweets={tweets} followers={followers} />
      <Button onClickFollow={handlerClick} isFollow={isFollow}>
        Follow
      </Button>
    </CardWrap>
  );
}
