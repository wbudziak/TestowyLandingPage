    const burger = document.querySelector('.burger');
    const list = document.querySelector('.mobile-nav');
    const burgerOn = ()=>{
        list.classList.toggle('slideOn');
    }
    burger.addEventListener('click', burgerOn)
