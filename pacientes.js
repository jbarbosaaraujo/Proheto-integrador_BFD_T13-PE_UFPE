
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
