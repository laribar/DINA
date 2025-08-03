document.getElementById("btn-salvar-config").addEventListener("click", async () => {
    const config = {
        MODO_TESTE: document.getElementById("modo_teste").checked,
        SALDO_TESTE_INICIAL: parseFloat(document.getElementById("saldo_teste").value)
    };

    try {
        await saveConfig(config);
        alert("✅ Configurações salvas com sucesso!");
    } catch (err) {
        alert("❌ Erro ao salvar: " + err.message);
    }
});

document.getElementById("btn-rodar").addEventListener("click", async () => {
    try {
        const result = await runBot();
        alert("🚀 Robô executado: " + JSON.stringify(result));
    } catch (err) {
        alert("❌ Erro ao rodar: " + err.message);
    }
});
