document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn-testar-conexao");
  if (!btn) return;

  btn.addEventListener("click", function () {
    const exchange = document.querySelector('input[name="exchange"]:checked')?.value;
    const apiKey = document.getElementById("apiKey")?.value;
    const apiSecret = document.getElementById("apiSecret")?.value;

    if (!exchange || !apiKey || !apiSecret) {
      alert("Preencha todos os campos para continuar.");
      return;
    }

    // ✅ Salva temporariamente no localStorage
    localStorage.setItem("exchange", exchange);
    localStorage.setItem("api_key", apiKey);
    localStorage.setItem("api_secret", apiSecret);

    alert("Chaves salvas! Agora selecione sua estratégia.");
    nextStep(4); // Avança para o passo final
  });
});
