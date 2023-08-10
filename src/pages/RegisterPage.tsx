//import React from 'react'
import {useRef, FormEvent, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

export default function RegisterPage() {
  
    const usernameField = useRef<HTMLInputElement>(null)
    const passwordField = useRef<HTMLInputElement>(null)
    const verifyPasswordField = useRef<HTMLInputElement>(null)
    const emailField = useRef<HTMLInputElement>(null)
    const firstNameField = useRef<HTMLInputElement>(null)
    const lastNameField = useRef<HTMLInputElement>(null)

    const navigate = useNavigate()

    const [user, setUser] = useState<LoggedUser>({username:'', token:''})
    console.log(user)

    useEffect(()=> {
      if (user.username) navigate('/')}, [user, navigate])


      async function handleRegisterData(event:FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const response = await fetch('https://matrix-fakebook-123.onrender.com/api/register', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: usernameField.current!.value,
            password: passwordField.current!.value,
            email: emailField.current!.value,
            first_name: firstNameField.current!.value,
            last_name: lastNameField.current!.value
          })
        })
        
        if (response.ok){
          const data = await response.json()
          console.log(data)
          setUser({username:usernameField.current!.value, token:''})
        } else window.alert("Register Failed")
      }

      function resetForm() {
        usernameField.current!.value = ''
        passwordField.current!.value = ''
        emailField.current!.value = ''
        verifyPasswordField.current!.value = ''
        firstNameField.current!.value = ''
        lastNameField.current!.value
      }
console.log(resetForm)

    return (
      <>
      <h2></h2>
      <form onSubmit={handleRegisterData}>
        <label>Username
          <input type="text"  ref={usernameField} required/>
        </label>
        <label>Email
          <input type="text" ref={emailField}/>
        </label>
        <label>Password
          <input type="text" ref={passwordField} required/>
        </label>
        <label>Verify Password
          <input type="text" ref={verifyPasswordField} required/>
        </label>
        <label>First Name
          <input type="text" ref={firstNameField}/>
        </label>
        <label>Last Name
          <input type="text" ref={lastNameField}/>
        </label>
      </form>
      </>
    )

}