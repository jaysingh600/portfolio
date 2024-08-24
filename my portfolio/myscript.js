let menuIcon = document.querySelector('.myimg');
let crossIcon = document.querySelector('.sidebar');

menuIcon.onclick = (e) => {
   crossIcon.style.display='flex'
}

crossIcon.onclick = (e) => {
    crossIcon.style.display='none'
}



