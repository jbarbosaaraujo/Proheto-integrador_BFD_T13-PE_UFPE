
// DADOS INICIAIS
let pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];
let pacienteSelecionado = null;



// SALVAR PACIENTE
document.getElementById("formPaciente").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const cpf = document.getElementById("cpf").value.trim();

    if (!nome || !cpf) {
        alert("Preencha todos os campos.");
        return;
    }

    pacientes.push({ nome, cpf });
    localStorage.setItem("pacientes", JSON.stringify(pacientes));

    this.reset();
    alert("Paciente salvo com sucesso!");
});

// BUSCA DE PACIENTES
document.getElementById("pesquisa").addEventListener("input", function () {
    const termo = this.value.toLowerCase();
    const lista = document.getElementById("listaPacientes");

    lista.innerHTML = "";

    if (termo === "") return; // não mostra nada sem busca

    pacientes.forEach((paciente, index) => {
        if (paciente.nome.toLowerCase().includes(termo)) {
            const li = document.createElement("li");
            li.textContent = paciente.nome;

            li.onclick = () => {
                selecionarPaciente(index);
                lista.innerHTML = "";
                document.getElementById("pesquisa").value = "";
            };

            lista.appendChild(li);
        }
    });
});

// SELECIONAR PACIENTE
function selecionarPaciente(index) {
    pacienteSelecionado = pacientes[index];

    document.getElementById("dados").innerHTML = `
        <p><b>Nome:</b> ${pacienteSelecionado.nome}</p>
        <p><b>CPF:</b> ${pacienteSelecionado.cpf}</p>
    `;

    const historicoSalvo =
        localStorage.getItem("historico_" + pacienteSelecionado.cpf) || "";

    const historico = document.getElementById("historico");
    historico.value = historicoSalvo;
    historico.disabled = true;

    document.getElementById("btnEditarHistorico").style.display = "block";
    document.getElementById("btnSalvarHistorico").style.display = "none";
    document.getElementById("btnLimpar").style.display = "block";
}

// EDITAR HISTÓRICO
function editarHistorico() {
    if (!pacienteSelecionado) return;

    document.getElementById("historico").disabled = false;
    document.getElementById("btnSalvarHistorico").style.display = "block";
}


// SALVAR HISTÓRICO
function salvarHistorico() {
    if (!pacienteSelecionado) {
        alert("Selecione um paciente primeiro.");
        return;
    }

    const texto = document.getElementById("historico").value;

    localStorage.setItem(
        "historico_" + pacienteSelecionado.cpf,
        texto
    );

    document.getElementById("historico").disabled = true;
    document.getElementById("btnSalvarHistorico").style.display = "none";

    alert("Histórico salvo com sucesso!");
}

// LIMPAR BUSCA + PAINEL DIREITO
function limparBusca() {
    // limpa busca e lista
    document.getElementById("pesquisa").value = "";
    document.getElementById("listaPacientes").innerHTML = "";

    // limpa seleção
    pacienteSelecionado = null;

    // limpa painel direito
    document.getElementById("dados").innerHTML = "";
    document.getElementById("historico").value = "";
    document.getElementById("historico").disabled = true;

    document.getElementById("btnEditarHistorico").style.display = "none";
    document.getElementById("btnSalvarHistorico").style.display = "none";
    document.getElementById("btnLimpar").style.display = "none";
}















