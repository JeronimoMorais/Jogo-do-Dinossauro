const dinossauro = document.querySelector('.dinossauro');
const background = document.querySelector('.background');
let posicao = 0;

function pular() {
    
    let intervaloPulo = setInterval(() => {
        if(posicao >= 150){
            clearInterval(intervaloPulo);
            
        let intervaloDescida = setInterval(() => {
                    posicao -= 20;
                    dinossauro.style.bottom = posicao + 'px';
                    if(posicao <= 0){
                        clearInterval(intervaloDescida);
                    }
                }, 20);
        } else {
                posicao += 20;
                dinossauro.style.bottom = posicao + 'px';
                }
        }, 20);
}

function criarCactos() {
    const cactos = document.createElement('div');
    let posicaoCactos = 1000;
    let tempoAleatorio = Math.random() * 3000;
    
    cactos.classList.add('cactos');
    background.appendChild(cactos);
    cactos.style.left = 1000 + 'px';

    let intervaloEsquerda = setInterval(() => {
        posicaoCactos -= 10;
        cactos.style.left = posicaoCactos + 'px';

        if( posicaoCactos < -60) {
            clearInterval(intervaloEsquerda);
            background.removeChild(cactos);
        } else if(posicaoCactos > 0 && posicaoCactos < 60 && posicao < 60){
            clearInterval(intervaloEsquerda);
            document.body.innerHTML = '<div class="game-over"></div>';
        }
    }, 20);

    setTimeout(criarCactos, tempoAleatorio);
}

criarCactos();

document.addEventListener('keyup', (evento) => {
    if(evento.keyCode === 32) {
        pular();
    }
});