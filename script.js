window.onload = () => {
    let sect = document.querySelectorAll("li");
    let content = document.querySelector(".content");

    content.innerHTML = document.querySelector('.About').innerHTML;

    for(let i = 0; i < sect.length; i++) {
        sect[i].onclick = (e) => {
            let target = e.target;
            if (target.id == 0) {
                content.innerHTML = document.querySelector('.About').innerHTML;
            } else if (target.id == 1) {
                content.innerHTML = document.querySelector('.Exp').innerHTML;
            } else if (target.id == 2) {
                content.innerHTML = document.querySelector('.Job').innerHTML;
            } else if (target.id == 3) {
                content.innerHTML = document.querySelector('.Edu').innerHTML;
            }
        }
    }
}
