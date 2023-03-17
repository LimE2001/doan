let menu = document.querySelector('.menu')
let navbar = document.querySelector('.nav-bar')
let left = document.querySelector('.the-left')
let avt = document.querySelector('.ptm4')
let mg1 = document.querySelector('.mg1')
let mg2 = document.querySelector('.mg2')
let wt = document.querySelector('.water')
menu.onclick = function() {
    navbar.classList.toggle('active')
    left.classList.toggle('active')
    avt.classList.toggle('active')
    mg1.classList.toggle('active')
    mg2.classList.toggle('active')
    wt.classList.toggle('active')
}


