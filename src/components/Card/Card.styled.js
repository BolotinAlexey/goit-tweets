import styled from 'styled-components';
import bg from 'assets/miniature.png';

export const CardWrap = styled.li`
  position: relative;
  width: 380px;
  height: 460px;
  padding: 0 0 36px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  background-image: url(${bg}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  background-repeat: no-repeat;
  background-position: center 28px, 0 0;
  border-radius: 20px;

  .logo {
    position: absolute;
    left: 20px;
    top: 20px;
  }
  .miniature {
    width: 308px;
    height: 168px;
  }

  .avatar-block {
    position: relative;
    display: flex;
    align-items: center;
  }
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
