import { ButtonStyled } from './Button.styled';

export default function Button({ onClickFollow, isFollow }) {
  const bgc = isFollow ? '#5CD3A8' : '#EBD8FF';

  return (
    <ButtonStyled style={{ backgroundColor: bgc }} onClick={onClickFollow}>
      {isFollow ? 'FOLLOWING' : 'FOLLOW'}
    </ButtonStyled>
  );
}
