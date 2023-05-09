import Button from 'components/Button/Button';
import { CardWrap } from './Card.styled';
import DataUser from 'components/DataUser/DataUser';

export default function Card({ cardData, onClickFollow }) {
  const { tweets, followers, avatar, id, isFollow } = cardData;

  const handlerClick = () => onClickFollow(id);

  return (
    <CardWrap>
      <img className="logo" src={require('assets/logo.png')} alt="goit" />

      <Button onClickFollow={handlerClick} isFollow={isFollow}>
        Follow
      </Button>

      <DataUser tweets={tweets} followers={followers} />

      <div className="avatar-block">
        <div className="left">
          <img src={require('assets/strip.png')} alt="" />
        </div>
        <div className="center">
          <img src={avatar} className="avatar" alt="avatar" />
          <img className="ring" src={require('assets/ring.png')} alt=""></img>
        </div>

        <div className="right">
          <img src={require('assets/strip.png')} alt="" />
        </div>
      </div>
    </CardWrap>
  );
}
