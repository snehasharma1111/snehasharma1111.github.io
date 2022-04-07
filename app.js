AOS.init();

const header=document.querySelector('header')
let headHeight='7rem';

const vh=window.innerHeight/100;

header.style.transition='all 0.5s ease-in-out'


const varOnScroll=()=>{
    if(window.scrollY>50*vh){
        headHeight='5rem'
    }
    else{
        headHeight='7rem'
    }
}

document.onload=()=>{
    header.style.height=headHeight
}

const headerOnScroll=()=>{
    if(window.scrollY>50*vh){
        header.style.backgroundColor='var(--black)'
        header.style.height='5rem'
    }
    else{
        header.style.backgroundColor='var(--transparent)'
        header.style.height='7rem'
    }
}

window.addEventListener('scroll',()=>{
    varOnScroll()
    headerOnScroll()
})