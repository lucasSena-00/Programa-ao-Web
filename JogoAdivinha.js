let numeroSecreto = Math.floor(Math.random() * 20) + 1;

function verificarNumero() {

let palpite = parseInt(document.getElementById("palpite").value);
 let mensagem = document.getElementById("mensagem");
    
        if (palpite === numeroSecreto) {
            mensagem.textContent = " Parabens você acertou!";
        } 
        else if (palpite > numeroSecreto) {
            mensagem.textContent = "O número secreto é MENOR.";
        } 
        else {
            mensagem.textContent = "O número secreto é MAIOR.";
        }
    
}

