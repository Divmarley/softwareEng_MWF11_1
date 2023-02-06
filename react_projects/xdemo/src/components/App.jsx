/** @format */

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../styles/app.css';
import AppButton from './AppButton';
import AppInput from './AppInput';

export default function App() {
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [data, setData] = useState();

  // console.log(data);

  const nameInputHandler = (data) => {
    setName(data.target.value);
  };
  const priceInputHandler = (data) => {
    setPrice(data.target.value);
  };
  const buttonHandler = (event) => {
    event.preventDefault();
    // console.log(name, price);
    axios
      .post('http://localhost:3002/product/create', {
        name: name,
        price: price,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch('http://localhost:3002/products')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((res) => res);
  }, []);

  const detetebuttonHandler = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:3002/product/delete/${e.target.id}`)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div className='login-page'>
      <div className='form'>
        <form className='login-form'>
          <AppInput
            type='text'
            placeholder='name'
            onChange={nameInputHandler}
          />
          <AppInput
            type='price'
            placeholder='price'
            onChange={priceInputHandler}
          />
          {/* <input type='text' placeholder='name' />
          <input type='price' placeholder='price' /> */}
          <AppButton label='login' onClick={buttonHandler} />
          <AppButton label='create user' id='danger' />
          <AppButton label='recive' id='info' />
          <p className='message'>
            Not registered? <a href='/'>Create an account</a>
          </p>

          <ul>
            {data &&
              data.map((v, i) => (
                <li key={i}>
                  {`${v.name} ---${v.price}`}{' '}
                  <AppButton
                    label={`delete -${v.name}`}
                    id={v.id}
                    classNameDanger="danger"
                    onClick={detetebuttonHandler}
                  />
                </li>
              ))}
          </ul>
        </form>
      </div>
    </div>
  );
}
