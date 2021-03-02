const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');



function addOpen(){
    console.log('click hamburger');
    
    if(header.classList.contains('open')){//close hamburger menu
        body.classList.remove('noScroll');
        header.classList.remove('open');
        fadeElems.forEach(removeFade);
    }
    
    else{                                //open hamburger menu
        body.classList.add('noScroll');
        header.classList.add('open');
        fadeElems.forEach(addFade);
    }
}

function addFade(element){//fade all elements with fade class
    element.classList.remove('fade-out');
    element.classList.add('fade-in');
}

function removeFade(element){//fade out all elements with fade class
    element.classList.remove('fade-in');
    element.classList.add('fade-out');
}

btnHamburger.addEventListener('click', addOpen);

