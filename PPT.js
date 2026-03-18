let opçoes = ["Preda", "Papeu", "Tizora"]

let jogador = prompt("digite sua escolha: preda papeu ou tizora").toLowerCase();

let numAleatorio = Math.floor (Math.random() * 3);
let computador = opçoes[numAleatorio];

console.log("jogador escolheu: " + jogador);
console.log("O computador escolheu:" + computador);

if(jogador === computador){
    console.log("Empatou!!");
}

if( (jogador === "preda" && computador === "tizora") || (jogador === "papeu" && computador === "preda")||(jogador === "tizora" && computador === "papeu")){
    console.log("Voce ganhou!!");
}else {
    console.log("Voce perdeu!!")
}
