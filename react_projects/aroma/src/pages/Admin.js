/** @format */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function Admin() {
  const [product, setProduct] = useState([]);
  console.log(product);

    useEffect(() => {
      fetch('http://localhost:8080/')
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }, []);
 
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
                    {product.map((value) => (
                      <li key={value.id}>
                        {value.name} <i className='fa fa-edit'></i>
                        <i className='ti-trash'>delete</i>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-8 col-lg-5'>
              <form
                action='http://localhost:8080/create'
                className='form-contact contact_form'
                method='POST'
                id='contactForm'
                // novalidate='novalidate'
              >
                <div className='row'>
                  <div className='col-lg-5'>
                    <div className='form-group'>
                      <input
                        className='form-control'
                        name='name'
                        id='name'
                        type='text'
                        placeholder='Enter your name'
                      />
                    </div>

                    <div className='form-group text-center '>
                      <button
                        type='submit'
                        className='button button--active button-contactForm'>
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
    </>
  );
}
