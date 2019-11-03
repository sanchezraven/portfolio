let sect = document.querySelectorAll("li");

sect[0].addEventListener("click", f1);
function f1(){
    document.querySelector('.content').innerHTML = document.querySelector('.About').innerHTML;
}

sect[1].addEventListener("click", f2);
function f2(){
    document.querySelector('.content').innerHTML = document.querySelector('.Exp').innerHTML;
}

sect[2].addEventListener("click", f3);
function f3(){
    document.querySelector('.content').innerHTML = document.querySelector('.Job').innerHTML;
}

sect[3].addEventListener("click", f4);
function f4(){
    document.querySelector('.content').innerHTML = document.querySelector('.Edu').innerHTML;
}

window.onload = f1;