import { Outlet, NavLink } from 'react-router-dom';
import { Header, Nav } from './Layout.styled';

export default function Layout() {
  return (
    <>
      <Header>
        <Nav>
          <NavLink className="link" to="/">
            Home
          </NavLink>
          <NavLink className="link" to="/tweets">
            Tweets
          </NavLink>
        </Nav>
      </Header>
      <Outlet />
      <footer></footer>
    </>
  );
}
