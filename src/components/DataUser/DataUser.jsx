import { DataUserWrap } from './DataUser.styled';
import DataItem from 'components/DataItem/DataItem';

export default function DataUser({ followers, tweets }) {
  return (
    <DataUserWrap>
      <DataItem value={tweets}>TWEETS</DataItem>
      <DataItem value={followers}>FOLLOWERS</DataItem>
    </DataUserWrap>
  );
}
