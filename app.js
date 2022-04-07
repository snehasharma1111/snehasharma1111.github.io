AOS.init();

const header=document.querySelector('header')

const vh=window.innerHeight/100;

header.style.transition='all 0.5s ease-in-out'

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
    headerOnScroll()
})