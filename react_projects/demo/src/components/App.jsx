/** @format */

// import axios from 'axios';
import React, { useState,useEffect } from 'react';
import '../styles/app.css';
import AppButton from './AppButton';
import AppInput from './AppInput';


export default function App() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [data, setData] = useState();

  console.log(data);

  const usernameInputHandler = (data) => {
    setUsername(data.target.value);
  };
  const passwordInputHandler = (data) => {
    setPassword(data.target.value);
  };
  const buttonHandler = (event) => {
    event.preventDefault();
    console.log(username, password);
  };

  // axios.get('http://localhost:3001/listuser',).then((response)=>console.log(response))
  // .catch((error)=>console.log(error))

  // fetch('http://localhost:3001/listuser',).then((response)=>console.log(response))
  // .catch((error)=>console.log(error))


  useEffect(() => {
    fetch('http://localhost:3001/listuser')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((res) => res)
      
  }, []);


  
  // const users = [
  //   {
  //     id: 1,
  //     username: 'sika',
  //     password: 'sikapassword',
  //     address:{
  //       city:'accra',
  //       region:'GA',
  //     }
  //   },
  //   {
  //     id: 2,
  //     username: 'kwame',
  //     password: 'kwamepassword',
  //     address:{
  //       city:'tok',
  //       region:'ksi',
  //     }
  //   },
  //   {
  //     id: 3,
  //     username: 'kojo',
  //     password: 'kojopassword',
  //   },
  //   {
  //     id: 4,
  //     username: 'kojo',
  //     password: 'kojopassword',
  //   },
  // ];

  return (
    <div className='login-page'>
      <div className='form'>
        <form className='login-form'>
          <AppInput
            type='text'
            placeholder='username'
            onChange={usernameInputHandler}
          />
          <AppInput
            type='password'
            placeholder='password'
            onChange={passwordInputHandler}
          />
          {/* <input type='text' placeholder='username' />
          <input type='password' placeholder='password' /> */}
          <AppButton label='login' onClick={buttonHandler} />
          <AppButton label='create user' id='danger' />
          <AppButton label='recive' id='info' />
          <p className='message'>
            Not registered? <a href='/'>Create an account</a>
          </p>

          <ul>
            {data &&
              data.map((v, i) => (
                <li key={i}>{`${v.username} ---${v.password}`}</li>
              ))}
          </ul>
        </form>
      </div>
    </div>
  );
}
