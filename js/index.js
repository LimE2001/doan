let menu = document.querySelector('.menu')
let navbar = document.querySelector('.nav-bar')
let left = document.querySelector('.the-left')
let wt = document.querySelector('.water')
menu.onclick = function() {
    navbar.classList.toggle('active')
    left.classList.toggle('active')
    wt.classList.toggle('active')
}


