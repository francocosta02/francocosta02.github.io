let showmore = document.getElementById('showmore');
let showless = document.getElementById('showless');
let seccion4 = document.getElementById('seccion4');

showmore.addEventListener('click', ()=>{

    seccion4.style.display = "flex";
    showmore.style.display = "none";
    showless.style.display = "flex";

})

showless.addEventListener('click', ()=>{

    seccion4.style.display = "none";
    showless.style.display = "none";
    showmore.style.display = "flex";

})