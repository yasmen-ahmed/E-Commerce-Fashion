// nav
const bar= document.getElementById('bar');
const nav= document.getElementById('navbar');
const close= document.getElementById('close');

if(bar){
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    } )
}

if(close){
    close.addEventListener('click',() => {
        nav.classList.remove('active');
    } )
}
// single page

var MainImg= document.getElementById("MainImg");
var smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick= function(){
    MainImg.src = smallImg[0].src;
}

smallImg[1].onclick= function(){
    MainImg.src = smallImg[1].src;
}

smallImg[2].onclick= function(){
    MainImg.src = smallImg[2].src;
}

smallImg[3].onclick= function(){
    MainImg.src = smallImg[3].src;
}