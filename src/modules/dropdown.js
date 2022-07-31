const dropdownButton = document.querySelector('.dropdown__button');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownListItems = document.querySelectorAll('.dropdown__list-item');
const dropdownInput = document.querySelector('.dropdown__input');

export const dropdownModule = dropdownButton.addEventListener('click', function () {
   dropdownList.classList.toggle('dropdown__list-visible');
   dropdownButton.classList.add('dropdown__button-active')
});

dropdownListItems.forEach(item => {
   item.addEventListener('click', function (e) {
      e.stopPropagation();
      dropdownButton.innerText = item.innerText;
      dropdownList.classList.remove('dropdown__list-visible');
      dropdownInput.value = item.dataset.value;
   });
});

document.addEventListener('click', function (e) {
   if (e.target !== dropdownButton) {
      dropdownList.classList.remove('dropdown__list-visible');
      dropdownButton.classList.remove('dropdown__button-active');
   }
});


