import './index.html';
import './style.scss';

import {showProductData} from './modules/showProductData';
import {counterModule} from './modules/counter';
import {toggleCartStatus} from './modules/toggleCartStatus';
import {calcCartPriceAndDelivery} from './modules/calcCartPriceAndDelivery';
import {orderValidator} from './modules/orderValidator';
import {dropdownModule} from './modules/dropdown';
import {profileModule} from './modules/profile';


const cartShowIcon = document.querySelector('.header__cart-wrapper');
const cartWindow = document.querySelector('.cart');
const cartCloseIcon = document.querySelector('.cart__close-icon');
const orderLength = document.querySelector('.header__cart-orderlength');


showProductData();
orderValidator();


// ! Открыть/закрыть корзину 

cartShowIcon.addEventListener('click', function () {
   cartWindow.classList.toggle('cart__active');
});

cartCloseIcon.addEventListener('click', function (e) {
   cartWindow.classList.remove('cart__active');
});


// ! Добавить товар в корзину

const cartWrapper = document.querySelector('.cart__product-list');

window.addEventListener('click', function (e) {

   if (e.target.hasAttribute('data-cart')) {

      const productCard = e.target.closest('#card');

      const productInfo = {
         id: productCard.dataset.id,
         imgSrc: productCard.querySelector('.product__img').getAttribute('src'),
         title: productCard.querySelector('.product__title').innerText,
         itemsInBox: productCard.querySelector('[data-itemsbox]').innerText,
         weight: productCard.querySelector('.product__weight').innerText,
         price: productCard.querySelector('[data-price]').innerText,
         counter: productCard.querySelector('[data-counter]').innerText
      };

      const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

      if (itemInCart) {
         const counterElement = itemInCart.querySelector('[data-counter]');
         counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
      } else {
         const productCardHTML = `
            <div class="cart__product-item" data-id="${productInfo.id}">
               <div class="cart__product-header">
                  <img data-product-img src="${productInfo.imgSrc}" alt="${productInfo.title}" class="cart__product-img">
                  <div class="cart__product-flex">
                     <h3 data-product-title class="cart__product-title">${productInfo.title}</h3>
                     <div  class="cart__product-details">
                           <span data-product-weight class="cart__product-weight">${productInfo.weight}</span> 
                           / 
                           <span data-product-itemsbox class="cart__product-itemsbox">${productInfo.itemsInBox}</span>
                     </div>
                     <div class="cart__product-body">
                           <div id="counter-wrapper" class="cart__product-counter counter">
                              <div class="counter__control" data-action="minus">-</div>
                              <div id="counter" class="counter__current" data-counter>${productInfo.counter}</div>
                              <div class="counter__control" data-action="plus">+</div>
                           </div>
                           <div data-price class="cart__product-price">${productInfo.price}</div>
                     </div>
                  </div>
               </div>
            </div>    
         `;

         cartWrapper.insertAdjacentHTML('beforeend', productCardHTML);
      }

      productCard.querySelector('[data-counter]').innerText = 1;

      toggleCartStatus();
      calcCartPriceAndDelivery();


      const cartProductItems = document.querySelectorAll('.cart__product-item');
      orderLength.innerText = cartProductItems.length;
      e.target.innerText = 'Добавлено !';
   }

});



