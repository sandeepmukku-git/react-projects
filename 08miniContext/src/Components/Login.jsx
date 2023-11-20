import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../Context/UserContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(UserContext)
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setUser({username, password});
  }
    
  return (
    <div>
        <h2>Login</h2>
        <input 
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder='Username'
        />
        {" "}
        <input 
        type="password" 
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder='Password'
        />
        <button type='submit' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login