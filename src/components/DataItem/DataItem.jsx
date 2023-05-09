import addComma from 'utils/addComma';
import { DataItemStyled } from './DataItem.styled';

export default function DataItem({ value, children }) {
  return (
    <DataItemStyled>
      {addComma(value)} {children}
    </DataItemStyled>
  );
}
