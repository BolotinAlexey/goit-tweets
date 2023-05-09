import styled from 'styled-components';

export const Header = styled.header`
  background-color: var(--bgColor);
`;
export const Nav = styled.nav`
  height: 60px;
  margin-bottom: 30px;
  padding: 0 20px;
  display: flex;
  gap: 20px;
  align-items: center;

  .link {
    color: var(--color);
    font: var(--font);
    text-decoration: none;
  }
`;
