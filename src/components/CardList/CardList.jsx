import Card from 'components/Card/Card';
import { Ul } from './CardList.styled';
export default function CardList({ tweets, onClickFollow }) {
  <Ul>
    {tweets.map(el => {
      return <Card onClickFollow={onClickFollow} cardData={el} />;
    })}
  </Ul>;
}
