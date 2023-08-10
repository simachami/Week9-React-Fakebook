import { useRef, FormEvent, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserProvider'

// const baseApiUrl = import.meta.env.VITE_APP_BASE_API;

export default function LoginForm() {
  const usernameField = useRef<HTMLInputElement>(null);
  const passwordField = useRef<HTMLInputElement>(null);
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserContext)

  console.log(user)
  
  useEffect(()=>{
    if (user.username) navigate('/')
  },[user])

  
  async function handleUserData(e:FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const res = await fetch(
      'https://matrix-fakebook-123.onrender.com/api/sign-in',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: usernameField.current!.value,
          password: passwordField.current!.value,
        }),
      }
    );
    if (res.ok) {
      const data = await res.json();
      setUser({
        username:usernameField.current!.value,
        token: data.access_token
      })
      updateUserState(usernameField.current!.value, data.access_token)
      resetForm()
    } else window.alert('Invalid UserData');
  }

  function updateUserState(username:string,token:string){
    setUser({
      username:username,
      token: token
    })
    localStorage.setItem('token', JSON.stringify(token))
    localStorage.setItem('username', JSON.stringify(username))
  }

  function resetForm(){
    usernameField.current!.value = ''
    passwordField.current!.value = ''
  }

  return (
    <>
      <h2>Login Form</h2>
      <form onSubmit={handleUserData} className="login-form">
        <label>
          Username:
          <br />
          <input type="text" ref={usernameField} required />
        </label>
        <br />
        <label>
          Password:
          <br />
          <input type="password" ref={passwordField} required />
        </label><br />
        <button>Sign In</button>
      </form>
    </>
  );
}
