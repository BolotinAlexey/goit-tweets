import styled from 'styled-components';

export const AvatarWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  .center {
    min-width: 80px;
    position: relative;
  }
  .ring {
    position: relative;
  }
  .avatar {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
  .left,
  .right {
  }
  .left {
    /* margin-right: -5px; */
  }
  .right {
    /* margin-left: -5px; */
  }
`;
