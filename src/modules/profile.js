const showProfileIcon = document.querySelector('.header__profile');
const profile = document.querySelector('.profile');
const hiddenProfileIcon = document.querySelector('.profile__close-icon');
const wrapper = document.querySelector('.wrapper');

export const profileModule = showProfileIcon.addEventListener('click', function() {
   profile.classList.add('profile__active');
   wrapper.style.cssText = 'opacity: 0.3';
});

hiddenProfileIcon.addEventListener('click', function () {
   profile.classList.remove('profile__active');
   wrapper.style.cssText = 'opacity: 1';
});
