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


//magens de fundo página Login
 const imagens = [
    "./img/medico1.jpeg",
    "./img/medico2.jpeg",
    "./img/medico3.jpeg",
    "./img/medico4.jpeg",
    "./img/medico5.jpeg",
  ];

  const indiceAleatorio = Math.floor(Math.random() * imagens.length);

  document.body.style.backgroundImage = `url('${imagens[indiceAleatorio]}')`;


