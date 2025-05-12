const menu = document.getElementById('menu');
const menuList = document.querySelector('.nexcent__navbar-menu-service');
const carousels = document.querySelectorAll('.nexcent__header-carousel-container');
const dots = document.querySelectorAll('.dot')
menu.addEventListener('click', () => {
    if (menu.classList.contains('fa-bars')) {
        menu.classList.remove('fa-bars');
        menu.classList.add('fa-close');
        menuList.style.display = 'flex'

    } else {
        menu.classList.remove('fa-close')
        menu.classList.add('fa-bars');
        menuList.classList.add('scale-out-top');

        menuList.addEventListener('animationend', handleAnimation)
    }
})

function handleAnimation() {
    menuList.style.display = 'none';
    menuList.classList.remove('scale-out-top');
    menuList.removeEventListener('animationend', handleAnimation)
}
let i = 1;
slideShow(i);
function slideShow(n) {
    if (n > carousels.length) i = 1;
    console.log(carousels.length);

    if (n < 1) i = carousels.length;
    for (let index = 0; index < carousels.length; index++) {
        const element = carousels[index];
        element.style.display = 'none';
        dots[index].classList.remove('active')
        
    }
    console.log(i);
    
    carousels[i - 1].style.display = 'flex'
    dots[i-1].classList.add('active')
}

function nextShow(n) {
    slideShow(i+=n);
}
function currentShow(n) {
    slideShow(i=n);
}
