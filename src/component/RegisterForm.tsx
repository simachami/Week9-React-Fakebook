import { useRef, FormEvent, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserProvider';

// const baseApiUrl = import.meta.env.VITE_APP_BASE_API;

export default function RegisterPage() {
  const usernameField = useRef<HTMLInputElement>(null);
  const passwordField = useRef<HTMLInputElement>(null);
  const verifyPasswordField = useRef<HTMLInputElement>(null);
  const emailField = useRef<HTMLInputElement>(null);
  const firstNameField = useRef<HTMLInputElement>(null);
  const lastNameField = useRef<HTMLInputElement>(null);

  const navigate = useNavigate()
  const {user, setUser} = useContext(UserContext)
  

  useEffect(() => {
    if (user.username) navigate('/');
  }, [user]);

  async function handleRegisterData(e:FormEvent<HTMLElement>) {
    e.preventDefault()
    const response = await fetch(
      'https://matrix-fakebook-123.onrender.com/api/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: usernameField.current!.value,
          password: passwordField.current!.value,
          email: emailField.current!.value,
          first_name: firstNameField.current!.value,
          last_name: lastNameField.current!.value,
        }),
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setUser({
        username: usernameField.current!.value,
        token: ''
      })
      resetForm();
    } else window.alert('Register Failed');
  }

  function resetForm() {
    usernameField.current!.value = '';
    passwordField.current!.value = '';
    emailField.current!.value = '';
    verifyPasswordField.current!.value = '';
    firstNameField.current!.value = '';
    lastNameField.current!.value = '';
  }

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={handleRegisterData}>
        <label>Username<br />
          <input type="text" ref={usernameField} required/>
        </label><br />
        <label>Email<br />
          <input type="text" ref={emailField}/>
        </label><br />
        <label>Password<br />
          <input type="password" ref={passwordField} required/>
        </label><br />
        <label>Verify Password<br />
          <input type="password" ref={verifyPasswordField} required/>
        </label><br />
        <label>First Name<br />
          <input type="text" ref={firstNameField}/>
        </label><br />
        <label>Last Name<br />
          <input type="text" ref={lastNameField}/>
        </label><br />
          <button>Register</button>
      </form>
    </>
  );
}
