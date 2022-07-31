import {toggleCartStatus} from './toggleCartStatus';
import {calcCartPriceAndDelivery}  from './calcCartPriceAndDelivery';


export const counterModule = window.addEventListener('click', function (e) {

      let counter;

      if (e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus') {
         const counterWrapper = e.target.closest('#counter-wrapper');
         counter = counterWrapper.querySelector('#counter');
      }
      
      if (e.target.dataset.action === 'plus') {
         counter.innerText = ++counter.innerText;
      }

      if (e.target.dataset.action === 'minus') {

         if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
         } else if (e.target.closest('.cart__product-list') && (parseInt(counter.innerText) === 1)) {
            e.target.closest('.cart__product-item').remove();
            toggleCartStatus();
            calcCartPriceAndDelivery();
         }
      }

      if (e.target.hasAttribute('data-action') && e.target.closest('.cart__product-list')) {
         calcCartPriceAndDelivery();
      }

   });
   
