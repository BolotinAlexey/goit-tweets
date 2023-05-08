import { ButtonStyled } from './Button.styled';

export default function Button({ onClickFollow, isFollow }) {
  //   const [bgColor, setBgColor] = useState(second);

  const bgc = isFollow ? '#5CD3A8' : '#EBD8FF';
  //   const onClickBtn = () => {
  //     onClickFollow();
  //   };
  return (
    <ButtonStyled style={{ backgroundColor: bgc }} onClick={onClickFollow}>
      {isFollow ? 'FOLLOWING' : 'FOLLOW'}
    </ButtonStyled>
  );
}
