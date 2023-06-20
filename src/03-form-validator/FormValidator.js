import { useState } from 'react'

export default function FormValidator () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [emailMessage, setEmailMessage] = useState('Enter a valid email address')
  const [passwordMessage, setPasswordMessage] = useState('Password must be 8-20 characters in length and contain at least: 1 lowercase letter, 1 uppercase letter, 1 number, and 1 symbol')
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('Passwords must match')
  const [message, setMessage] = useState('');
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,20}$/;

  const findErrors = () => {
    if (!email || !password || !passwordConfirm) setMessage('All fields must be filled in')
    if (emailRegex.test(email)) setEmailMessage('Enter a valid email address')
    if (passwordRegex.test(password)) setPasswordMessage('Password invalid, must be 8-20 characters in length and contain at least: 1 lowercase letter, 1 uppercase letter, 1 number, and 1 symbol')
    if (password !== passwordConfirm) setPasswordConfirmMessage('Passwords do not match')
  }

  const handleSubmit = e => {
    e.preventDefault()

    findErrors()
  }

  return (
    <form 
      id='form'
      onSubmit={handleSubmit}
    >
      <h2>Sign Up!</h2>
      {message}
      <label htmlFor='email'>Email</label>
      <input
        type='text' name='email'
        onChange={e => setEmail(e.target.value)}
      />
      {emailMessage}
      <label htmlFor='password'>Password</label>
      <input
        type='password' name='password'
        onChange={e => setPassword(e.target.value)}
      />
      {passwordMessage}
      <label htmlFor='password-confirm'>Confirm Password </label>
      <input
        type='password' name='password-confirm'
        onChange={e => setPasswordConfirm(e.target.value)}
      />
      {passwordConfirmMessage}
      <input type='submit' value='Submit' />
    </form>
  )
}