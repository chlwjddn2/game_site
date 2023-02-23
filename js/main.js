'use strict';
const header = document.querySelector('#header');
const main = document.querySelector('#main')
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if(window.scrollY > headerHeight){
        header.classList.add('header_dark')
    } else{
        header.classList.remove('header_dark')
    }
})

const goTop = document.querySelector('.gotop');

goTop.addEventListener('click', () => {
    main.scrollIntoView({behavior: "smooth"});
})

const menu = document.querySelector('.open_menu');
const openBtn = document.querySelector('.open_btn');
const menuOpenBtn = document.querySelectorAll('.down_menu');
const closeBtn = document.querySelector('.close_menu_btn');
menuOpenBtn.forEach((item) => {
    console.log(item);
    item.addEventListener('click', () => {
        menuOpenBtn.forEach((e) => {
            e.classList.remove('show');
        })
        item.classList.add('show'); 
    })
}) 
closeBtn.addEventListener('click', () => {
    menu.style.transform = 'translateX(1000px)'
    menu.style.opacity = '0';
    menu.style.visibility = 'hidden';

})
openBtn.addEventListener('click', () =>{
    menu.style.transform = 'translateX(0)';
    menu.style.opacity = '1';
    menu.style.visibility = 'visible';
})



