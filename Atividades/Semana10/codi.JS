var moeda1, moeda2, moeda,result, simb;

var moedas1 = {
    '1': { valor: 5.6027}, //usei o franco suíço como intermediário 
    '2': { valor: 1.0251},
    '3': { valor: 0.8789},
    '4': { valor: 169.9845},
    '5': { valor: 1.1046}
}

document.getElementById('esc1').addEventListener('change', function () {
    var test1 = moedas1[this.value];
    if(test1)
        moeda1 = test1.valor;
    else
    moeda1= false;

});

var moedas2 = {
    '1': { valor: 5.6027, simb: 'R$' },
    '2': { valor: 1.0251, simb: '€' },
    '3': { valor: 0.8789, simb: '£' },
    '4': { valor: 169.9845, simb: '¥' },
    '5': { valor: 1.1046, simb: '$' }
};

document.getElementById('esc2').addEventListener('change', function () {
    var test2 = moedas2[this.value];
    if (test2) {
        moeda2 = test2.valor;
        simb = test2.simb;
    } else {
        moeda2 = false;
    }
});


document.getElementById("bot").addEventListener("click", function () {
    moeda = parseFloat(forne.value);
    if (moeda1 && moeda2 && moeda){
    result = moeda/moeda1;
    result *= moeda2;
    document.querySelector('#display').innerText = simb + " " + result.toFixed(4);
    }
    else
    document.querySelector('#display').innerText = "informe um valor";
});