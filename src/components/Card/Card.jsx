import Button from 'components/Button/Button';
import { CardWrap } from './Card.styled';
import DataUser from 'components/DataUser/DataUser';
import AvatarBlock from 'components/AvatarBlock/AvatarBlock';

export default function Card({ cardData, onClickFollow }) {
  const { tweets, followers, avatar, id, isFollow } = cardData;

  const handlerClick = () => onClickFollow(id);

  return (
    <CardWrap>
      <img
        className="logo"
        width={'70px'}
        height={'22px'}
        src={require('assets/logo.png')}
        alt="goit"
      />

      <Button onClickFollow={handlerClick} isFollow={isFollow}>
        Follow
      </Button>

      <DataUser tweets={tweets} followers={followers} />

      <AvatarBlock avatar={avatar} />
    </CardWrap>
  );
}
