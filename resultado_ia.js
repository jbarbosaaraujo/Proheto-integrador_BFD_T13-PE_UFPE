// Botão anexar
document.getElementById("btnAnexar").addEventListener("click", () => {
    alert("Arquivo anexado com sucesso!");
});

// Botão enviar
document.getElementById("btnEnviar").addEventListener("click", () => {
    alert("Dados enviados com sucesso!");
});

// Botão IA
document.getElementById("btnProcessarIA").addEventListener("click", () => {
    const campoResultado = document.getElementById("resultadoIA");

    // Simulação da análise da IA
    campoResultado.value = "✔ IA analisou o exame.\nNenhuma patologia grave identificada.\nRecomenda-se avaliação clínica.";
});

