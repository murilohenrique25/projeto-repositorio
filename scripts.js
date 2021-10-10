
function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
       setTimeout(()=> elemento.innerHTML +=letra, 75*i )
    });
}

const titulo = document.querySelector('h2.name-dev')
typeWriter(titulo);

function scroll(){
    var btn = document.getElementById("btnTop");
    if(document.documentElement.scrollTop > 90){
        btn.style.display = "block";
    } else{
        btn.style.display = "none";
    }
}
function backToTop(){
    document.documentElement.scrollTop = 0;
}
window.onscroll = function(){
    scroll();
} 