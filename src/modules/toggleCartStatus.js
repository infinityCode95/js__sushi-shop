export const toggleCartStatus = function toggleCartStatus () {
   
   const cartWrapper = document.querySelector('.cart__product-list');
   const cartEmptyBadge = document.querySelector('[data-cart-empty]');
   const orderForm = document.querySelector('#order-form');

   if (cartWrapper.children.length) {
      cartEmptyBadge.classList.add('none');
      orderForm.classList.remove('none');
   } else {
      cartEmptyBadge.classList.remove('none');
      orderForm.classList.add('none');
   }
}

