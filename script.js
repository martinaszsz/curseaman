// PÁGINA INICIAL
const botao = document.getElementById("confirmar");

if (botao) {
    botao.addEventListener("click", function(event) {

        event.preventDefault();

        let nome = document.getElementById("nomeHomem").value;

        if (nome.trim() === "") {
            alert("Digite um nome!");
            return;
        }

        localStorage.setItem("nome", nome);

        window.location.href = "Confirmado.html";
    });
}


// PÁGINA DE CONFIRMAÇÃO
const mensagem = document.getElementById("mensagem");

if (mensagem) {
    let nome = localStorage.getItem("nome");

    mensagem.innerText = "VOCÊ AMALDIÇOOU " + nome;

}
    
const msg2 = document.getElementById("msg2");

msg2.innerText = "Que o corpo e nem a alma dele tenha sossego apartir de hoje.";