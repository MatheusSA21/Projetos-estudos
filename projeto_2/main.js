const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom(seletorSom) {
    const elemento = document.querySelector(seletorSom);
} if (elemento != null && elemento.localName === 'audio') {
    elemento.play()
} else {
    alert('ERROR')
}


for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idSom = `#som_${instrumento}`; //templete string
    tecla.onclick = function () {
        tocaSom(idSom);
    }


    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}

