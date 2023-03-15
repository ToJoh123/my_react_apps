import React, {useState} from 'react';
import Axios from 'axios';

function App() {

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };
  const [usernameReg,setUsernameReg] = useState("");
  const [passwordReg,setPasswordReg] = useState("");
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  return (
    <div className="App">
      <div className="registration">
        <h1>Registration</h1>
        <input type="text" placeholder="Enter Username"onchange ={(e)=>{
          setUsernameReg(e.target.value);
        }} />
        <input type="password" placeholder="Enter Password" onchange ={(e)=>{
          setPasswordReg(e.target.value)}}/>
        <button onClick={register}>Register</button>
      </div>

      <div className="login">
        <h1>Login</h1>
        <input type="text" placeholder="Enter Username" onchange ={(e)=>{setUsername(e.target.value)}} />
        <input type="password" placeholder="Enter Password" onchange ={(e)=>{setPassword(e.target.value)}} />
        <button>Login</button>
      </div>

    </div>
  );
}

export default App;
