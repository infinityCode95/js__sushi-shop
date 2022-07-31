import {productData} from './productData';

function showProductData() {
   productData.forEach(item => {
   
      const productList = document.querySelector('.product__list');
      const productItem = document.createElement('div');
      productItem.classList.add('product__item', 'col-3');
      productItem.setAttribute('id', 'card');
      productItem.setAttribute('data-id', `${item.id}`);
      
      productItem.innerHTML = `
      
         <div class="product__header">
            <img data-img src="${item.imgSrc}" alt="${item.title}" class="product__img">
            <h3 data-title class="product__title">${item.title}</h3>
            <div class="product__details">
               <span data-weight class="product__weight">${item.weight}</span>
               /
               <span data-itemsbox class="product__itemsbox">${item.itemsBox} шт</span>
            </div>
         </div>
   
         <div class="product__body">
            <div id="counter-wrapper" class="product__counter-wrapper counter">
               <div id="minus" class="counter__control" data-action="minus">-</div>
               <div id="counter" class="counter__current" data-counter>1</div>
               <div id="plus" class="counter__control" data-action="plus">+</div>
            </div>
         </div>
   
         <div class="product__footer">
            <div data-price class="product__price">${item.price} Р </div>
            <button data-cart class="product__btn">В корзину</button>
         </div>
      `;
   
      productList.appendChild(productItem);
      
   });
};

export {showProductData};
