let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let trilho = document.getElementById('trilho');
let body = document.querySelector('body');
let skillsbox = document.getElementById('skills-box');
let skillsbox2 = document.getElementById('skills-box2');
let skillsbox3 = document.getElementById('skills-box3');
let skillsbox4 = document.getElementById('skills-box4');
let skillsbox5 = document.getElementById('skills-box5');
let skillsbox6 = document.getElementById('skills-box6');
let taxtan = document.getElementById('textan');
let btnt = document.getElementById('btnt');
let btnb = document.getElementById('btnb');
let btnbn = document.getElementById('btnbn');
let timeline = document.getElementById('time');
let con = document.getElementById('con');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector(`header nav a[href*=' ${id}' ]`).classList.add('active');
            })
        }
    });
}


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

trilho.addEventListener('click', () => {
    trilho.classList.toggle('dark');
    body.classList.toggle('dark');
    skillsbox.classList.toggle('dark');
    skillsbox2.classList.toggle('dark');
    skillsbox3.classList.toggle('dark');
    skillsbox4.classList.toggle('dark');
    skillsbox5.classList.toggle('dark');
    skillsbox6.classList.toggle('dark');
    textan.classList.toggle('dark');
    btnb.classList.toggle('dark');
    btnt.classList.toggle('dark');
    btnbn.classList.toggle('dark');
    timeline.classList.toggle('dark');
    con.classList.toggle('dark');
});