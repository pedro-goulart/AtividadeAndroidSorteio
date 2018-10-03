document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('botao').addEventListener('click', clickHandler);
    document.getElementById('reinicia').addEventListener('click', clickHola);
    document.getElementById('cheat').addEventListener('click', cheat);
    main();
});

function clickHandler(element) {
    //obtem numero informado
    if (app.contador > 0){
        addValor();
    }else{
        alert('Numero de tentativas esgotadas.');
    }
}

function cheat(element) {
    alert(app.numeroSorteado);
}

function IniciaValores(){
    app.numeroSorteado = sorteaNumero();
    app.contador = 10;
    app.valorInformado = "";
    app.valoresInfo = '<p>Numeros informados:</p>';
    EscreveTentativas();
}

function clickHola(element){
    IniciaValores();
}

function main(){
    IniciaValores();
}

function addValor(){
    //le o campo
    app.valorInformado = document.getElementById('entrada').value;
    //trata entrada
    if (app.valorInformado==''){
        alert("Valor digitado invalido");
    }else{
        app.contador --;
        EscreveTentativas();
        Condicao();
    }
}

function sorteaNumero(){
    return Math.floor(Math.random()*10000)+1;
}

function vibrate(){
    navigator.vibrate(1000);
}

function EscreveTentativas(){  
    document.getElementById('tentativas').innerHTML = app.contador+' tentativas restantes';
    //escreve valores
    app.valoresInfo += "<p>"+app.valorInformado+"</p>";
    document.getElementById('valores').innerHTML = app.valoresInfo;
    document.getElementById('entrada').value = '';
}

function Condicao(){
    //verifica se acertou ou se foi maior ou menor
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