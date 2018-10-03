document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('botao').addEventListener('click', clickHandler);
    document.getElementById('reinicia').addEventListener('click', clickHola);
    main();
});

function clickHandler(element) {
    //obtem numero informado
    app.valorInformado = document.getElementById('entrada').value;
    
    //salva numero informado para string
    addValor();
    
    //reduz contador
    app.contador --;
    
    //vibrate();
    //alert(sorteaNumero());
    //alert(app.contador);
    
    
    EscreveTentativas();
    Condicao();
    
}

function clickHola(element){
    app.numeroSorteado = sorteaNumero();
    app.contador = 10;
    app.valorInformado = -1;
    app.valoresInfo = '';
    EscreveTentativas();
}

function main(){
    app.numeroSorteado = sorteaNumero();
    app.contador = 10;
    app.valorInformado = -1;
    app.valoresInfo = '';
    EscreveTentativas();
    alert("numero sorteado"+app.numeroSorteado);
}

function vibrate(){
    navigator.vibrate(1000);
}

function addValor(){
    var x = '<p>'+document.getElementById('entrada').value+'</p>';
    app.valoresInfo += x;
}

function sorteaNumero(){
    return Math.floor(Math.random()*10000)+1;
}

function EscreveTentativas(){
    document.getElementById('tentativas').innerHTML = app.contador+' tentativas restantes';
    
    document.getElementById('valores').innerHTML = app.valoresInfo;
}

function Condicao(){
    if (app.numeroSorteado > app.valorInformado){
        alert('Numero Menor que o numero sorteado');
    }
    else if (app.numeroSorteado < app.valorInformado){
        alert('Numero Maior que o numero sorteado');
    } else{
        alert('Acertou!');
        vibrate();
    }
}