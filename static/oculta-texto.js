var simbolosMais = document.querySelectorAll(".cursos__item");

simbolosMais.forEach(simbolo => {
    simbolo.addEventListener("mouseover", (evento) => {
        console.log(evento.AT_TARGET);
    });

})
