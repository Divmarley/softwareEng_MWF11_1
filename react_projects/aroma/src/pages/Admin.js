/** @format */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function Admin() {
  const [product, setProduct] = useState();
  const [data, setData] = useState();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');

  const [nameerror, setNameError] = useState();
  const [priceerror, setPriceError] = useState();
  console.log(price,name,category,image);
 

  useEffect(() => {
    fetch('http://localhost:8080/')
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const createBtnHandler = (e) => {
    e.preventDefault();
    if (name == '') {
      setNameError('name is empty');
    } else if (price == '') {
      setPriceError('price is empty');
    } else {
      axios
        .post('http://localhost:8080/create', { name, price,category,image })
        .then((response) => console.log(response));

      setProduct([...product, {name, price,category,image }]);
      document.getElementById('name').value = '';
      document.getElementById('price').value = '';
      document.getElementById('category').value = '';
      document.getElementById('image').value = '';
    }
  };

  const deleteHandler = (e) => {
    // e.preventDefault();
    axios
      .delete(`http://localhost:8080/delete/${e.target.id}`)
      .then(() => console.log('response'))
      .catch((err) => console.log(err));
  };

  const editeHadler = (e) => {
    e.preventDefault();
    // setData(e);
    // console.log(e);
  };

  return (
    <>
      <section className='blog-banner-area' id='contact'>
        <div className='container h-100'>
          <div className='blog-banner'>
            <div className='text-center'>
              <h1>Admin Dashboard</h1>
              <nav aria-label='breadcrumb' className='banner-breadcrumb'>
                <ol className='breadcrumb'>
                  <li className='breadcrumb-item'>
                    <a href='#'>Home</a>
                  </li>
                  <li className='breadcrumb-item active' aria-current='page'>
                    Admin Dashboard
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className='section-margin--small'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 col-lg-4 mb-4 mb-md-0'>
              <div className='media contact-info'>
                <div className='media-body'>
                  <ul>
                    {product &&
                      product.map((v, i) => (
                        <li key={i}>
                          {v.name}
                          <button
                            className='btn btn-danger mx-5 mb-3'
                            id={v.id}
                            onClick={deleteHandler}>
                            <i className='ti-trash'></i>delete
                          </button>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-8 col-lg-6'>
              <form
                // action='http://localhost:8080/create'
                className='form-contact contact_form'
                // method='POST'
                id='contactForm'
                noValidate='novalidate'>
                <div className='row'>
                  <div className='col-lg-5'>
                    <div className='form-group'>
                      <input
                        className='form-control'
                        name='name'
                        id='name'
                        type='text'
                        placeholder='Enter your name'
                        required={true}
                        onChange={(text) => setName(text.target.value)}
                      />
                      <p className='text-danger'>{nameerror}</p>
                    </div>
                    <div className='form-group'>
                      <input
                        className='form-control'
                        name='price'
                        id='price'
                        type='number'
                        placeholder='Enter your price'
                        onChange={(text) => setPrice(text.target.value)}
                      />
                      <p className='text-danger'>{priceerror}</p>
                    </div>
                    <div className='form-group'>
                      <input
                        className='form-control'
                        name='category'
                        id='category'
                        type='text'
                        placeholder='Enter your Category'
                        onChange={(text) => setCategory(text.target.value)}
                      />
                      <p className='text-danger'>{priceerror}</p>
                    </div>

                    <div className='form-group'>
                      <input
                        
                        name='image'
                        id='image'
                        type='file' 
                        onChange={(text) => setImage(text.target.value)}
                      />
                      <p className='text-danger'>{priceerror}</p>
                    </div>

                    <div className='form-group text-center '>
                      <button
                        type='submit'
                        className='button button--active button-contactForm'
                        onClick={createBtnHandler}>
                        create product
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div
        className='modal fade '
        id='exampleModal'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'>
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5' id='exampleModalLabel'>
                Modal title
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'></button>
            </div>
            <div className='modal-body'>
              <form
                // action='http://localhost:8080/create'
                className='form-contact contact_form'
                // method='POST'
                // id='contactForm'
                // novalidate='novalidate'
              >
                <div className='row'>
                  <div className=''>
                    <div className='form-group'>
                      <input
                        className='form-control'
                        name='name'
                        id='name'
                        type='text'
                        placeholder='Enter your name'
                        onChange={(text) => setName(text.target.value)}
                      />
                    </div>

                    <div className='form-group text-right '>
                      <button
                        type='submit'
                        className='button button--active button-contactForm'
                        onClick={createBtnHandler}>
                        update product
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
