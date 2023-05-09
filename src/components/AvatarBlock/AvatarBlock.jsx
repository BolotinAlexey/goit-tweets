import { AvatarWrap } from './AvatarBlock.styled';

export default function AvatarBlock({ avatar }) {
  return (
    <AvatarWrap>
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
    </AvatarWrap>
  );
}
