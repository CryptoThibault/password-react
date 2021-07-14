import { useState } from "react";

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const axios = require('axios')
  const url = 'http://localhost:3333'

  const handleChangeUsername = (e) => {
    setUsername(e.target.value)
  }
  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleClickRegister = async () => {
    try {
      const result = await axios.post(`${url}/register/${username}/${password}`)
      console.log(result)
    } catch (e) { console.log('Register post request failed') }
  }
  const handleClickLogin = async () => {
    try {
      const result = await axios.post(`${url}/login/${username}/${password}`)
      console.log(result)
    } catch (e) { console.log('Login post request failed') }
  }

  return (
    <div className="App">
      <label htmlFor="username">Username</label>
      <input onChange={handleChangeUsername} value={username} id="username"></input>
      <label htmlFor="password">Password</label>
      <input onChange={handleChangePassword} value={password} id="password"></input>
      <button onClick={handleClickRegister}>Register</button>
      <button onClick={handleClickLogin}>Login</button>
    </div>
  );
}

export default App;
