import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/esm/Nav';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserProvider';
import { FormEvent, useContext, useRef } from 'react';

export default function Header() {
  const { user } = useContext(UserContext);
  const usernameField = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  function handleUserSearch(e:FormEvent<HTMLFormElement>):void{
    e.preventDefault()
    navigate(`/user-page/${usernameField.current!.value}`)
  }

  return (
    <Navbar data-bs-theme="dark" sticky="top" className="header">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Matrix Fakebook
        </Navbar.Brand>
        {user.username ? (
          <>
            <form onSubmit={handleUserSearch}>
              <input type="text" placeholder="Search for User" ref={usernameField} required/>
              <button>Search</button>
            </form>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/logout" className="mr-3">
                Logout
              </Nav.Link>
            </Nav.Item>
          </>
        ) : (
          <>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/register">
                Register
              </Nav.Link>
            </Nav.Item>
          </>
        )}
      </Container>
    </Navbar>
  );
}
