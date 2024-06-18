const urlJogos = 'http://localhost:3000/jogos'
let jogos = []

function carregaDadosJSONServer (func) {
    fetch(urlJogos)
        .then (function (response) { return response.json() })
        .then (function (dados) {
            jogos = dados
            console.log ('Dados carregados!')
            func ()
        })
}

function carregaDados() {
            let tela = document.getElementById('tela');
            strTextoHTML = '';

            for (let i = 0; i < jogos.length; i++) {
                let jogo = jogos[i];
                strTextoHTML += `<div class="card text-center mb-3 p-4" style="width: 18rem;">
                <img src="${jogo.imagem}" class="border border-3 border-black rounded-3" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${jogo.titulo}</h5>
                  <p class="card-text">${jogo.descricao}</p>
                  <a href="${jogo.detalheadd}" class="btn btn-primary mt-auto">página do jogo</a>
                </div>
              </div>`
            }

            tela.innerHTML = strTextoHTML;
        }        
        carregaDadosJSONServer (carregaDados)
