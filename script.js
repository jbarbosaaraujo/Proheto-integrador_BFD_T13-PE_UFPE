// Redirecionar para recuperar senha
document.getElementById("esqueciSenha").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "recuperar_senha.html";
});

// Redirecionar para página de cadastro
document.getElementById("cadastrarLink").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "cadastrar.html";
});


// Redirecionar ao clicar em ENTRAR
document.getElementById("entrarBtn").addEventListener("click", function(event) {
    event.preventDefault(); // impede envio do formulário
    window.location.href = "pacientes.html";
 // página de destino
});







// Quando clicar no botão cadastrar
function cadastrar() {
    // Coloque aqui a página de destino após cadastrar
    window.location.href = "login.html";
}

// Quando clicar em "já tenho conta - entrar"
function irParaLogin() {
    // Coloque a página de login
    window.location.href = "login.html";
}


