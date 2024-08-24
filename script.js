const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu');
        })
    }
}

showMenu('nav-toggle', 'nav-menu')



const navLink = document.querySelectorAll('.nav-link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show-menu');

}

navLink.forEach(n =>{
    n.addEventListener('click',linkAction)
})


const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY =window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
         
        const sectionId=current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']' ).classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll',scrollActive);

function scrollHeader(){
    const nav = document.getElementById('header');
    if(this.scrollY >= 200){
        nav.classList.add('scroll-header');
    }
    else{
        nav.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll',scrollHeader)

function scrollTop(){

    const scrollTop = document.getElementById('scroll-top');

    if(this.scrollY >=560){
        scrollTop.classList.add('show-scroll');
    }
    else{
        scrollTop.classList.remove('show-scroll')
    }
}

window.addEventListener('scroll',scrollTop);

const themeButton = document.querySelector("#theme-button");
const darkTheme='dark-theme'
const iconTheme='bxs-toggle-right'

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme =()=>{
    document.body.classList.contains(darkTheme) ? 'dark': 'light';

}
const getCurrentIcon = ()=>{
    document.body.classList.contains(iconTheme) ? 'bxs-toggle-left':'bxs-toggle-right';
}


if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : "remove"](darkTheme);
    themeButton.classList[selectedIcon === 'bxs-toggle-left' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click',()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})

document.addEventListener("DOMContentLoaded", function() {
const sr = ScrollReveal({
    distance:'30px',
    duration:1800,
    reset:true

});

sr.reveal(`.home_data, .home_img, .decoration_data,
            .accessory-content, .footer-content` , {

    origin:'top',
    interval:200


})

sr.reveal(`.shared-img, .send-content`,{
    origin:'left'
})
sr.reveal(`.share_data, .send_img`,{
    origin:'right'
})
})