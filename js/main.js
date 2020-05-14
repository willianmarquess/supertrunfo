//variaveis dos atributos do jogador 1
var forcajogador1 = 0;
var vitjogador1 = 0;
var desjogador1 = 0;
var intjogador1 = 0;
var nomeJogador1;

//variaveis dos atributos do jogador 2
var forcajogador2 = 0;
var vitjogador2 = 0;
var desjogador2 = 0;
var intjogador2 = 0;
var nomeJogador2;

//função que é chamada assim que o html é carregado
window.onload = function carregar() {
    //adicionando funções para os componentes do html
    document.getElementById("btnnovo").addEventListener("click", start);
    document.getElementById('btnbatalhar').addEventListener("click", batalhar);
    document.getElementById("nomeJogador1").addEventListener("click", mudarNomeJogador1);
    document.getElementById("nomeJogador2").addEventListener("click", mudarNomeJogador2);
    document.getElementById('btnbatalhar').disabled = true;
}
//função que muda o nome do jogador 1
function mudarNomeJogador1() {
    nomeJogador1 = window.prompt("Digite um nome para o jogador 1 :");
    if (nomeJogador1 != null) {
        document.getElementById("nomeJogador1").innerText = nomeJogador1;
    } else {
        document.getElementById("nomeJogador1").innerText = "Clique aqui para mudar o nome!";
    }
}
//função que muda o nome do jogador 2
function mudarNomeJogador2() {
    nomeJogador2 = window.prompt("Digite um nome para o jogador 2 :");
    if (nomeJogador2 != null) {
        document.getElementById("nomeJogador2").innerText = nomeJogador2;
    } else {
        document.getElementById("nomeJogador2").innerText = "Clique aqui para mudar o nome!";
    }
}
function start() {
    //sorteando os atributos do jogador 1
    forcajogador1 = parseInt(Math.floor(Math.random() * 100) + 1);
    vitjogador1 = parseInt(Math.floor(Math.random() * 100) + 1);
    desjogador1 = parseInt(Math.floor(Math.random() * 100) + 1);
    intjogador1 = parseInt(Math.floor(Math.random() * 100) + 1);
    //sorteando os atributos do jogador 2
    forcajogador2 = parseInt(Math.floor(Math.random() * 100) + 1);
    vitjogador2 = parseInt(Math.floor(Math.random() * 100) + 1);
    desjogador2 = parseInt(Math.floor(Math.random() * 100) + 1);
    intjogador2 = parseInt(Math.floor(Math.random() * 100) + 1);

    //habilitando o botão de batalha
    document.getElementById('btnbatalhar').disabled = false;

    initImagemJogador1();
    initImagemJogador2();
}

//colocando os valores dos atributos do jogador1 na tela
function setPlayer1() {
    document.getElementById("vitjogador1").innerHTML = "Vitalidade : " + vitjogador1;
    document.getElementById("forjogador1").innerHTML = "Força : " + forcajogador1;
    document.getElementById("desjogador1").innerHTML = "Destreza : " + desjogador1;
    document.getElementById("intjogador1").innerHTML = "Inteligência : " + intjogador1;
}
//colocando os valores dos atributos do jogador2 na tela
function setPlayer2() {
    document.getElementById("vitjogador2").innerHTML = "Vitalidade : " + vitjogador2;
    document.getElementById("forjogador2").innerHTML = "Força : " + forcajogador2;
    document.getElementById("desjogador2").innerHTML = "Destreza : " + desjogador2;
    document.getElementById("intjogador2").innerHTML = "Inteligência : " + intjogador2;
}

//função que muda a imagem do jogador 1
function initImagemJogador1() {
    var numeroImagem1 = Math.floor(Math.random() * 14) + 1;
    var imagemJogador1 = document.getElementById("imagemjogador1");
    var descricaoImagem1 = document.getElementById("descricaoImagem1");
    console.log(numeroImagem1);
    switch (numeroImagem1) {
        case 1:
            imagemJogador1.src = "img/andre-marques.jpg";
            descricaoImagem1.innerText = "SKIN DJ ANDRÉZIN";
            break;
        case 2:
            imagemJogador1.src = "img/bdz-dupla.jpg";
            descricaoImagem1.innerText = "DUPLA SAYAJIN";
            break;
        case 3:
            imagemJogador1.src = "img/bolso.jpg";
            descricaoImagem1.innerText = "BOLSO 2K18";
            break;
        case 4:
            imagemJogador1.src = "img/faustao.jpg";
            descricaoImagem1.innerText = "FAUSTOP SKIN GADO D+";
            break;
        case 5:
            imagemJogador1.src = "img/faustao2.jpg";
            descricaoImagem1.innerText = "FAUSTOP";
            break;
        case 6:
            imagemJogador1.src = "img/galocego.jpg";
            descricaoImagem1.innerText = "GALO CEGO";
            break;
        case 7:
            imagemJogador1.src = "img/goku.jpg";
            descricaoImagem1.innerText = "GOKU SSJ4";
            break;
        case 8:
            imagemJogador1.src = "img/kid.jpg";
            descricaoImagem1.innerText = "BENGLADESH";
            break;
        case 9:
            imagemJogador1.src = "img/lula.jpg";
            descricaoImagem1.innerText = "LULA DA GALERA";
            break;
        case 10:
            imagemJogador1.src = "img/lula2.jpg";
            descricaoImagem1.innerText = "LULA APÓS CARNAVAL";
            break;
        case 11:
            imagemJogador1.src = "img/naruto.jpg";
            descricaoImagem1.innerText = "NARUTO";
            break;
        case 12:
            imagemJogador1.src = "img/ronaldinho.jpg";
            descricaoImagem1.innerText = "QUER NAMORAR CMG?";
            break;
        case 13:
            imagemJogador1.src = "img/ronaldinho2.jpg";
            descricaoImagem1.innerText = "BAHIA";
            break;
    }
}
//função que muda a imagem do jogador 2
function initImagemJogador2() {
    var numeroImagem2 = Math.floor(Math.random() * 14) + 1;
    var imagemJogador2 = document.getElementById("imagemjogador2");
    var descricaoImagem2 = document.getElementById("descricaoImagem2");
    console.log(numeroImagem2);
    switch (numeroImagem2) {
        case 1:
            imagemJogador2.src = "img/andre-marques.jpg";
            descricaoImagem2.innerText = "SKIN DJ ANDRÉZIN";
            break;
        case 2:
            imagemJogador2.src = "img/bdz-dupla.jpg";
            descricaoImagem2.innerText = "DUPLA SAYAJIN";
            break;
        case 3:
            imagemJogador2.src = "img/bolso.jpg";
            descricaoImagem2.innerText = "BOLSO 2K18";
            break;
        case 4:
            imagemJogador2.src = "img/faustao.jpg";
            descricaoImagem2.innerText = "FAUSTOP SKIN GADO D+";
            break;
        case 5:
            imagemJogador2.src = "img/faustao2.jpg";
            descricaoImagem2.innerText = "FAUSTOP";
            break;
        case 6:
            imagemJogador2.src = "img/galocego.jpg";
            descricaoImagem2.innerText = "GALO CEGO";
            break;
        case 7:
            imagemJogador2.src = "img/goku.jpg";
            descricaoImagem2.innerText = "GOKU SSJ4";
            break;
        case 8:
            imagemJogador2.src = "img/kid.jpg";
            descricaoImagem2.innerText = "BENGLADESH";
            break;
        case 9:
            imagemJogador2.src = "img/lula.jpg";
            descricaoImagem2.innerText = "LULA DA GALERA";
            break;
        case 10:
            imagemJogador2.src = "img/lula2.jpg";
            descricaoImagem2.innerText = "LULA APÓS CARNAVAL";
            break;
        case 11:
            imagemJogador2.src = "img/naruto.jpg";
            descricaoImagem2.innerText = "NARUTO";
            break;
        case 12:
            imagemJogador2.src = "img/ronaldinho.jpg";
            descricaoImagem2.innerText = "QUER NAMORAR CMG?";
            break;
        case 13:
            imagemJogador2.src = "img/ronaldinho2.jpg";
            descricaoImagem2.innerText = "BAHIA";
            break;
    }
}
//função que verifica a batalha
function batalhar() {
    if (document.getElementById("int").checked == true) {
        alert("batalhar por int");
        if (intjogador1 > intjogador2) {
            alert("Jogador 1 venceu");
        } else if (intjogador2 > intjogador1) {
            alert("Jogador 2 venceu");
        } else {
            alert("EMPATE!!");
        }
    }
    if (document.getElementById("vit").checked == true) {
        alert("batalhar por vit");
    }
    if (document.getElementById("des").checked == true) {
        alert("batalhar por des");
    }
    if (document.getElementById("for").checked == true) {
        alert("batalhar por for");
    }
}