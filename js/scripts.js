/*
// SELECIONANDO O ELEMENTO DA TECLA
function tocaSomPom() {
    window.document.querySelector('#som_tecla_pom').play();
}
// ATRIBUINDO A FUNÇÃO PARA EXECUTAR O SOM/FUNÇÃO
//window.document.querySelector('.tecla_pom').onclick().tocaSomPom();
window.document.querySelector('.tecla_pom').onclick = tocaSomPom;
 
// CLAP
function tocaSomClap() {
    window.document.querySelector('#som_tecla_clap').play();
}
window.document.querySelector('tecla_clap').onclick = tocaSomClap;
*/

function tocarSom(seletorAudio) {
    const elemento = window.document.querySelector(seletorAudio);

    // tratamento de erro
    if (elemento != null && elemento.localName === 'audio') {

        //verificar elemento
        //console.log(elemento.localName === 'audio');
        elemento.play();     
    } else {
        alert('Elemento ou Seletor não encontrado!!!');
    }
}

const listaDeTeclas = window.document.querySelectorAll('.tecla');
/*
let contador = 0;
while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //console.log(instrumento);

    const idAudio = `#som_${instrumento}`; // template string
    //console.log(idAudio);

    // usar função anônima
    tecla.onclick = function () {
        tocarSom(idAudio);
    };
    contador += 1;

    //console.log(contador);
}
*/

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    //console.log(contador);

    const tecla = listaDeTeclas[contador];
    //console.log(tecla);
    const instrumento = tecla.classList[1];
    //console.log(instrumento);

    const idAudio = `#som_${instrumento}`; // template string
    //console.log(idAudio);

    // usar função anônima
    tecla.onclick = function () {
        tocarSom(idAudio);
    };

    // evento que indica que uma tecla foi apertada no teclado
    
    tecla.onkeydown = function (evento) { // event ou e

        console.log(evento.code);

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }        
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }

}
