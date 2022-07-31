function orderValidator() {

   const orderBtn = document.querySelector('.order__btn');
   const cartWindow = document.querySelector('.cart');
   const cartInput = document.querySelector('.order__input'); 
   const orderInputWrapper = document.querySelector('.order__input-wrapper');

   orderBtn.addEventListener('click', function (e) {

      if (cartInput.value.length < 11) {
         e.preventDefault();

         cartInput.style.cssText = "border: 1px solid red;"
         const errorTemplateHTML = `
            <h6 class="order__error">Введите верный номер телефона</h6>
         `;
         orderInputWrapper.insertAdjacentHTML('beforebegin', errorTemplateHTML);

      } else {
         e.preventDefault();

         cartWindow.innerHTML = `
            <div class="success">
               <div class="success__close-wrapper">
                  <i class="success__close-icon fa-solid fa-circle-xmark fa-lg"></i>
               </div> 
               <div class="success__body">
                  <h1 class="success__title">Заказ успешно оформлен !</h1>
                  <p class="success__text">Оператор свяжется с вами в течение 5 минут, чтобы всё подтвердить.</p>
                  <p class="success__text">Пожалуйста, ожидайте ( ･ᴗ･ )</p>
               </div>
            </div>
         `
         const successCloseIcon = document.querySelector('.success__close-icon');

         successCloseIcon.addEventListener('click', function () {
            location.reload();
         })
      }
   });

};

export {orderValidator};
   