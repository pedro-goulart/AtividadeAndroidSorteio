document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('botao').addEventListener('click', clickHandler);
    main();
});

function clickHandler(element) {
    vibrate;
    alert(sorteaNumero());
    alert(app.contador);
    app.contador ++;
    addValor();
}

function main(){
    app.numeroSorteado = sorteaNumero();
    app.contador = 0;
    app.valoresInfo = '';
}

function vibrate(){
    navigator.vibrate(1000);
}

function addValor(){
    var x = document.getElementById('entrada').value;
    if (app.valoresInfo != ''){
        app.valoresInfo += ', ';
    }
    app.valoresInfo += x;
    alert(app.valoresInfo);
}

function comparaValor(v)

function sorteaNumero(){
    return Math.floor(Math.random()*10000)+1;
}