import React from 'react'

export default function ProductCard({price,title}) {
  return (
    <div className='col-md-6 col-lg-4 col-xl-3'>
              <div className='card text-center card-product'>
                <div className='card-product__img'>
                  <img
                    className='card-img'
                    src='img/product/product1.png'
                    alt=''
                  />
                  <ul className='card-product__imgOverlay'>
                    <li>
                      <button>
                        <i className='ti-search'></i>
                      </button>
                    </li>
                    <li>
                      <button>
                        <i className='ti-shopping-cart'></i>
                      </button>
                    </li>
                    <li>
                      <button>
                        <i className='ti-heart'></i>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className='card-body'>
                  <p>Accessories1</p>
                  <h4 className='card-product__title'>
                    <a href='single-product.html'>{title}</a>
                  </h4>
                  <p className='card-product__price'>${price}</p>
                </div>
              </div>
            </div>
  )
}
