let pacientes = [];

const form = document.getElementById("formPaciente");
const lista = document.getElementById("listaPacientes");
const pesquisa = document.getElementById("pesquisa");
const info = document.getElementById("infoPaciente");
const dados = document.getElementById("dados");

// ADICIONAR PACIENTE
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const paciente = {
        nome: nome.value,
        cpf: cpf.value,
    
    };

    pacientes.push(paciente);
    atualizarLista();
    form.reset();
});

// MOSTRA A LISTA
function atualizarLista() {
    lista.innerHTML = "";

    pacientes
        .filter(p => p.nome.toLowerCase().includes(pesquisa.value.toLowerCase()))
        .forEach((p, index) => {
            const li = document.createElement("li");
            li.textContent = `${p.nome} — CPF: ${p.cpf}`;
            li.onclick = () => mostrarInfo(index);
            lista.appendChild(li);
        });
}

// MOSTRA NO PAINEL DA DIREITA
function mostrarInfo(i) {
    const p = pacientes[i];

    dados.innerHTML = `
        <p><strong>Nome:</strong> ${p.nome}</p>
        <p><strong>CPF:</strong> ${p.cpf}</p>
        
       
        
    `;
}

// ATUALIZA LISTA QUANDO PESQUISA
pesquisa.addEventListener("input", atualizarLista);



// ARQUIVO IA
document.getElementById("btnIrIA").addEventListener("change", function() {
    window.location.href = "resultado_ia.html";
});





// FUNÇÃO QUE MOSTRA O BOTÃO APÓS ESCOLHER O ARQUIVO
function mostrarBotao() {
    document.getElementById("btnContinuar").style.display = "inline-block";
}

// FUNÇÃO QUE REDIRECIONA PARA A PRÓXIMA PÁGINA
function irParaProximaPagina() {
    window.location.href = "resultado_ia.html"; 
}