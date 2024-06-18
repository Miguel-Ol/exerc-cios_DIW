function leDados () {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse (strDados);
    }
    else {
        objDados = { tarefas: [ 
            {texto: "limpar a casa", concluido: false},
            {texto: "arrumar a cama", concluido: false} 
        ]}
    }

    return objDados;
}

function incluirTarefa (){

    let objDados = leDados();


    let strTexto = document.getElementById ('campoTarefa').value;
    let novaTarefa = {
        texto: strTexto
    };
    objDados.tarefas.push (novaTarefa);


    salvaDados (objDados);


    imprimeDados ();
}


function salvaDados (dados) {
    localStorage.setItem ('db', JSON.stringify (dados));
}

function imprimeDados () {
    let tela = document.getElementById('lista_ul');
    let strHtml = '';
    let objDados = leDados();
    
    for (let i=0; i< objDados.tarefas.length; i++) {
        let classe = objDados.tarefas[i].concluido ? 'sfeito' : 'nfeito';
        strHtml += `<li id="item${i}" class="my-1 py-1 fs-5 ${classe} d-flex justify-content-between">
        <button id="BtnConf${i}" value="${objDados.tarefas[i].concluido ? '1' : '0'}"><img src="confirmation.png" class="icons ms-3" alt=""></button>
        <span>${objDados.tarefas[i].texto}</span>
        <button  id="BtnDel${i}"><img src="trash_black.png" class="icons me-3" alt=""></button>
    </li>`
    }
    tela.innerHTML = strHtml;
    
    for (let i=0; i< objDados.tarefas.length; i++) {
        document.getElementById(`BtnConf${i}`).addEventListener('click', function() {
            if (this.value === '0') {
                document.getElementById(`item${i}`).classList.add('sfeito');
                this.value = '1';
                objDados.tarefas[i].concluido = true;
            }
            else{
                document.getElementById(`item${i}`).classList.remove('sfeito');
                this.value = '0';
                objDados.tarefas[i].concluido = false;
            }
            salvaDados(objDados);
        });
    }

    for (let i=0; i< objDados.tarefas.length; i++) {
        document.getElementById(`BtnDel${i}`).addEventListener('click', function() {
            let item = document.getElementById(`item${i}`);
            item.remove();
            
            objDados.tarefas.splice(i, 1);
    
            salvaDados(objDados);

            location.reload();
        });
    }
    
}

window.addEventListener('load', imprimeDados);
document.getElementById ('btnIncluirTarefa').addEventListener ('click', incluirTarefa);

