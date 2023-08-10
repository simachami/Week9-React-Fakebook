import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../contexts/UserProvider';
import { useContext } from 'react';

export default function Sidebar() {
  const { user } = useContext(UserContext);

  return (
    <Navbar sticky="top" className="sidebar flex-column">
      <Nav.Item>
        <Nav.Link as={NavLink} to="/">
          Matrix Classroom
        </Nav.Link>
      </Nav.Item>
      {user.token && (
        <>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/posts">
              Posts
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to={`/user-page/${user.username}`}>
              My Page
            </Nav.Link>
          </Nav.Item>
        </>
      )}
    </Navbar>
  );
}
