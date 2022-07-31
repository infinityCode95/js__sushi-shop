function calcCartPriceAndDelivery() {

   const cartProductItems = document.querySelectorAll('.cart__product-item');
   const totalPriceEl = document.querySelector('.total__amount-price');
   const deliveryCost = document.querySelector('.total__delivery-cost');
   const cartDelivery = document.querySelector('[data-cart-delivery]');
   const orderLength = document.querySelector('.header__cart-orderlength'); 


   let totalPrice = 0;

   cartProductItems.forEach(item => {
      const amountEl = item.querySelector('[data-counter]');
      const priceEl = item.querySelector('[data-price]');

      const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
      totalPrice = `${parseInt(totalPrice) + parseInt(currentPrice)} рублей`; 
   });

   totalPriceEl.innerText = totalPrice;

   if (parseInt(totalPrice)  > 0) {
      cartDelivery.classList.remove('none');
   } else {
      cartDelivery.classList.add('none');      
   }

   if (parseInt(totalPrice) >= 600 ) {
      deliveryCost.classList.add('free');
      deliveryCost.innerText = 'Бесплатно';

   } else {
      deliveryCost.classList.remove('free');
      deliveryCost.innerText = '250 рублей';
   }

   orderLength.innerText = cartProductItems.length
}

export {calcCartPriceAndDelivery}; 

